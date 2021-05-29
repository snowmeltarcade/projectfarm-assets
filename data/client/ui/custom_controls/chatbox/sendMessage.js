function sendMessage() {

    var chatbox = getChatBox();
    if (!chatbox) {
        log("Failed to get chatbox.");
        return;
    }

    var text = chatbox.text;
    if (text === "") {
        return;
    }

    chatbox.text = "";

    var local_time = time_local_time_short_string();

    var first_character = string_char_at(text, 0);
    if (first_character === "/") {

        // remove the first character
        var command = string_substring(text, 1);

        var result = process_command(command);

        updateText("Command: " + command, "Me", local_time, chatbox);
        updateText("Result: " + result, "Me", local_time, chatbox);
    } else {
        updateText(text, "Me", local_time, chatbox);

        sendTextToServer(text);
    }
}

function sendTextToServer(text) {

    var scene = get_scene();
    if (!scene) {
        log("Failed to get scene.");
        return;
    }

    scene.send_message("chatbox", text);
}

function updateText(text, username, serverTime, chatbox) {

    var labelText = chatbox.get_control_by_id("labelText");
    if (!labelText) {
        log("Failed to get `labelText`.");
        return;
    }

    // the `()` are to ensure any markup colors are not continued to the next line
    labelText.text += serverTime + ": " + username + "> " + text + "\n()";
}

// this function may be called by any control, even a custom control,
// that is nested within the chatbox, so we need to find the chatbox
// itself
function getChatBox() {

    var self = get_current_control();
    if (!self) {
        log("Failed to get self.");
        return;
    }

    var chatbox = self;

    while (true) {

        chatbox = chatbox.get_parent_custom_control();
        if (!chatbox) {
            log("Failed to get chatbox.");
            return;
        }

        var type = chatbox.get_custom_property_string("type");
        if (type == "chatbox") {
            break;
        }
    }

    return chatbox;
}

function process_command(command) {

    var scene = get_scene();
    if (!scene) {
        log("Failed to get scene.");
        return;
    }

    var result = scene.send_message("chatbox_command", command);
    return result;
}
