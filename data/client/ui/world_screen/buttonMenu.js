function onclick() {

    var ui = get_ui();
    if (!ui) {
        log("Failed to get ui.");
        return;
    }

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

    menu.is_visible = true;
    sceneUI.is_visible = false;
    sceneUI.is_enabled = false;
}
