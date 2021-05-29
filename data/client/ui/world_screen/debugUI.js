function toggle_debug_ui() {

    var ui = get_ui();
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

    var buttonShowDebugUI = ui.get_control_by_id("buttonShowDebugUI");
    if (!buttonShowDebugUI) {
        log("Failed to get control by id: buttonShowDebugUI");
        return;
    }

    if (debugUI.is_visible) {
        buttonShowDebugUI.text = "Show Debug UI";
        debugUI.is_visible = false;
    } else {
        buttonShowDebugUI.text = "Hide Debug UI";
        debugUI.is_visible = true;
    }

    scene.send_message("compute_debug_info", debugUI.is_visible ? "true" : "false");
}

function show_debug_ui(should_display) {

    var ui = get_ui();
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

    var buttonShowDebugUI = ui.get_control_by_id("buttonShowDebugUI");
    if (!buttonShowDebugUI) {
        log("Failed to get control by id: buttonShowDebugUI");
        return;
    }

    if (should_display) {
        buttonShowDebugUI.text = "Hide Debug UI";
        debugUI.is_visible = true;
    } else {
        buttonShowDebugUI.text = "Show Debug UI";
        debugUI.is_visible = false;
    }

    scene.send_message("compute_debug_info", debugUI.is_visible ? "true" : "false");
}