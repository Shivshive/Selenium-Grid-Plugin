$(document).ready(function () {

	var hubOutput = $('#hub-out-text');
	var nodeOutput = $('#node-out-text');

	var button_hub = $('#hub_btn');
	var button_node = $('#node_btn');

	button_hub.on('click', function () {

		if ($(this).hasClass('active')) {
			sendMsg('stop-hub', 'hub');
		}
		else {
			sendMsg('start-hub', 'hub');
		}

	});

	button_node.on('click', function () {

		if ($(this).hasClass('active')) {
			sendMsg('stop-node', 'node');
		}
		else {
			sendMsg('start-node', 'node');
		}

	});

	/**
 	* Send message event listener
 	*/
	function sendMsg(message, type) {
		var request = {};
		request.message = message

		var event = new CustomEvent(type + "-message-event", {
			detail: {
				data: request
			},
			bubbles: true,
			cancelable: true
		});
		document.dispatchEvent(event);
	}

	/**
	 * Get message event listener
	 */
	document.addEventListener("hub-get-message-event", function (data) {
		var responseObject = data.detail.data;
		var bulb_hub = $('#hub-status');
		if(responseObject.message == 'Hub Started..!'){
			bulb_hub.attr('src','on.png');
		}
		else{
			bulb_hub.attr('src','off.png');
		}
		hubOutput.text(responseObject.message);
	});

	document.addEventListener("node-get-message-event", function (data) {
		var responseObject = data.detail.data;
		var bulb_node= $('#node-status');
		if(responseObject.message=='Application Stopped..!'){
			bulb_node.attr('src','off.png');
		}
		else{
			bulb_node.attr('src','on.png');
		}
		nodeOutput.text(responseObject.message);
	});

});