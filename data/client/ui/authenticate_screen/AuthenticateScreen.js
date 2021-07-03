function onclick () {
    var scene = get_scene();
    if (!scene) {
        log("Failed to get scene.");
        return;
    }

    var ui = get_ui();
    if (!ui) {
        log("Failed to get UI.");
        return;
    }

    var labelError = ui.get_control_by_id("labelError");
    if (!labelError) {
        log("Failed to get control: labelError");
        return;
    }

    var labelStatus = ui.get_control_by_id("labelStatus");
    if (!labelStatus) {
        log("Failed to get control: labelStatus");
        return;
    }

    var txtUsername = ui.get_control_by_id("txtUsername");
    if (!txtUsername) {
        log("Failed to get control: txtUsername");
        return;
    }

    var txtPassword = ui.get_control_by_id("txtPassword");
    if (!txtPassword) {
        log("Failed to get control: txtPassword");
        return;
    }

    var username = txtUsername.text;
    var password = txtPassword.text;

    var error_message = "";

    if (string_length(username) === 0) {
        error_message += "Please enter your username.\n";
    }

    if (string_length(password) === 0) {
        error_message += "Please enter your password.\n";
    }

    if (string_length(error_message) > 0) {
        labelError.text = error_message;
        labelStatus.text = "";
        return;
    }

    // no errors to report
    labelError.text = "";

    labelStatus.text = "Logging in...";

    scene.send_message("login", username, password);
}