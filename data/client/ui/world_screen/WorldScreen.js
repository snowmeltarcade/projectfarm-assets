include_into_global("{ClientUI}/world_screen/debugUI.js");

var ui;

function onload() {

    ui = get_ui();
    if (!ui) {
        log("Failed to get ui.");
        return;
    }

    var scene = get_scene();
    if (!scene) {
        log("Failed to get scene.");
        return;
    }

    var debugUI = ui.get_control_by_id("debugUI");
    if (!debugUI) {
        log("Failed to get control by id: debugUI");
        return;
    }

    // make sure we compute the debug info if the debug UI is set to be visible
    scene.send_message("compute_debug_info", debugUI.is_visible ? "true" : "false");
}

function sendmessage(key, param1, param2, param3) {

    if (key === "close_current") {
        close_current();
    } else if (key == "chatbox") {

        if (!param1 || !param2 || !param3) {
            log("Invalid parameters for message: `chatbox`.");
            return;
        }

        var message = param1;
        var username = param2;
        var server_time = param3;
        chatbox_message(message, username, server_time);
    } else if (key == "show_debug_info") {

        if (!param1) {
            log("Invalid parameters for message: `show_debug_info`.");
            return;
        }

        show_debug_ui(param1 === "on");
    } else {
        log("Unknown message key sent to world screen: " + key);
    }
}

function chatbox_message(message, username, serverTime) {
    var chatbox = ui.get_control_by_id("chat");
    if (!chatbox) {
        log("Failed to find chatbox.");
        return;
    }

    // the scripts are attached to `base`, and not to `chat`,
    // so get `base` so we can invoke the message receive function
    // below
    var base = chatbox.get_control_by_id("base");
    if (!base) {
        log("Failed to find `base`.");
        return;
    }

    if (!base.invoke_javascript_function("on_message_receive", message, username, serverTime)) {
        log("Failed to invoke `on_message_receive` function.");
        return;
    }
}

function close_current() {
    var sceneUI = ui.get_control_by_id("sceneUI");
    if (!sceneUI) {
        log("Failed to get control by id: sceneUI");
        return;
    }

    var menu = ui.get_control_by_id("menu");
    if (!menu) {
        log("Failed to get control by id: menu");
        return;
    }

    // switch between the menu and the scene ui
    menu.is_visible = !menu.is_visible;
    sceneUI.is_visible = !sceneUI.is_visible;
    sceneUI.is_enabled = !sceneUI.is_enabled;
}
