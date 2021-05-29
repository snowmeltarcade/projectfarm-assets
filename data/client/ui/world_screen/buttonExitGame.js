function onclick() {

    var scene = get_scene();
    if (!scene) {
        log("Failed to get scene.");
        return;
    }

    scene.send_message("exit");
}