include_into_global("{ClientUICustomControls}/chatbox/sendMessage.js");

function on_message_receive(message, username, serverTime) {

    var chatbox = getChatBox();
    if (!chatbox) {
        log("Failed to get chatbox.");
        return;
    }

    updateText(message, username, serverTime, chatbox);
}

// when the enter key is pressed, send the message
function handle_onkeypress_enter_from_textbox() {
    sendMessage();
}