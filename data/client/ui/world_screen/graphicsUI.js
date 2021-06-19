function toggle_graphics_ui() {

    var ui = get_ui();
    if (!ui) {
        log("Failed to get ui.");
        return;
    }

    var mainMenuUI = ui.get_control_by_id("mainMenuUI");
    if (!mainMenuUI) {
        log("Failed to get control by id: mainMenuUI");
        return;
    }

    var graphicsUI = ui.get_control_by_id("graphicsUI");
    if (!graphicsUI) {
        log("Failed to get control by id: graphicsUI");
        return;
    }

    mainMenuUI.is_visible = !mainMenuUI.is_visible;

    graphicsUI.is_visible = !graphicsUI.is_visible;
}
