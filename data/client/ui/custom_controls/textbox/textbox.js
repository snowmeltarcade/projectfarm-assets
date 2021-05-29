var keys_lower_case = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                       "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                       "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                        "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/", "`"];

var keys_upper_case = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                       "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                       "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
                       "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?", "~"];

var keys_extra = ["space", "backspace", "enter", "left", "right"];

var cursor = {};
var self = {};
var keyboard = {};

var current_character_position = 0;

var using_markdown = true;
var allow_new_lines = true;

function onload() {

    self = get_current_control();
    keyboard = get_keyboard_input();

    // use this over `ui.get_control_by_id` because if we have more than one textbox control
    // in existence, there will be more than one control named `cursor`, so we only want to
    // check controls that are children of this textbox
    cursor = self.get_control_by_id("cursor");
    if (!cursor) {
        log("Failed to find cursor control.");
        return;
    }

    var height = self.get_custom_property_int("font_line_height");
    if (!height) {
        log("Failed to get font line height.");
        return;
    }

    using_markdown = self.get_custom_property_bool("get_use_markdown");
    allow_new_lines = self.get_custom_property_bool("allow_new_lines");

    // directly set the cursor at 3px wide
    cursor.width = 3;
    cursor.height = height;

    // ensure all render masks and such things are setup and
    // that the cursor is rendered in the correct starting position
    self.text = " ";
    self.text = "";
    update_cursor_position();
}

function onkeypress() {

    var shift = keyboard.is_keyboard_state_enabled("lshift") ||
                keyboard.is_keyboard_state_enabled("rshift") ||
                keyboard.is_keyboard_state_enabled("capslock");

    if (shift) {
        process_keys(keys_upper_case);
    } else {
        process_keys(keys_lower_case);
    }

    process_keys(keys_extra);
}

function process_keys(keys) {
    for (var i = 0; i < keys.length; ++i) {
        if (handle_key_press(keys[i])) {
            break;
        }
    }
}

function handle_key_press(key) {
    if (keyboard.is_key_pressed(key)) {

        var text_character_position = render_position_to_text_position();

        if (key === "space") {
            self.text = string_insert(self.text, " ", text_character_position);

            move_current_character_position_right();
        } else if (key === "backspace") {
            var length = string_length(self.text);

            if (length == 1) {
                self.text = "";

                reset_current_character_position();
            } else if (length > 0 && text_character_position > 0) {
                var length_before = self.get_custom_property_int("rendered_text_length");

                self.text = string_remove_character_at(self.text, text_character_position - 1);

                var length_after = self.get_custom_property_int("rendered_text_length");

                move_current_character_position_left(length_before - length_after);
            }
        } else if (key === "enter") {
            // do this in a separate if as we don't want to fall through to the else
            // at the end of this chain
            if (allow_new_lines) {
                self.text = string_insert(self.text, "\n", text_character_position);

                move_current_character_position_right();
            }
        } else if (key === "left") {
            move_current_character_position_left();
        } else if (key === "right") {
            move_current_character_position_right();
        } else {
            var length_before = self.get_custom_property_int("rendered_text_length");

            self.text = string_insert(self.text, key, text_character_position);

            var length_after = self.get_custom_property_int("rendered_text_length");

            if (length_after < length_before) {
                move_current_character_position_left(length_before - length_after);
            }
            else {
                move_current_character_position_right(length_after - length_before);
            }
        }

        return true;
    }

    return false;
}

function update_cursor_position() {
    // this is computed according to the rendered text internally
    var pos = self.get_custom_property_vector2d("character_pos", current_character_position);
    cursor.pos_x = pos.x;
    cursor.pos_y = pos.y;
}

function move_current_character_position_left(amount = 1) {
    current_character_position -= amount;
    if (current_character_position < 0) {
        current_character_position = 0;
    }

    update_cursor_position();
}

function move_current_character_position_right(amount = 1) {
    var render_length = self.get_custom_property_int("rendered_text_length");

    current_character_position += amount;
    if (current_character_position > render_length) {
        current_character_position = render_length;
    }

    update_cursor_position();
}

function reset_current_character_position() {
    current_character_position = 0;

    update_cursor_position();
}

function render_position_to_text_position() {
    if (using_markdown) {

        var text = self.text;
        if (text === "") {
            return 0;
        }

        var text_pos = markdown_part_position_to_text_position(text, current_character_position);
        return text_pos;
    } else {
        return current_character_position;
    }
}

function onclick(x, y) {
    current_character_position = self.get_custom_property_int("current_character_position_from_x_y_pos", x, y);

    update_cursor_position();
}
