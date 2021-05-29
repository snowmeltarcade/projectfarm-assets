var move_type = "w";
var is_moving = false;
var dest_x = 0.0;
var dest_y = 0.0;

function init() {
    set_update_interval(100);

    var rand = random_int(1, 2);
    move_type = rand % 2 == 0 ? "r" : "w";
}

function update() {
    var posx = get_position_x();
    var posy = get_position_y();

    var shortest_distance = 10000.0;
    var selected_index = -1;

    var characters = world_get_characters_within_distance(2.0)

    if (is_moving) {
        is_moving = posx != dest_x && posy != dest_y;
    }

    if (characters.length == 0 && is_moving) {
        is_moving = false;

        // move to the current location to in effect, stop moving
        move_to(move_type, posx, posy);
    }
    else {
        for (var i = 0; i < characters.length; ++i) {

            var c = characters[i];

            if (c.type != "farmer") {
                continue;
            }

            var dx = posx - c.position_x;
            var dy = posy - c.position_y;

            var distance = math_sqrt((dx * dx) + (dy * dy));

            if (distance < shortest_distance) {
                shortest_distance = distance;
                selected_index = i;
            }
        }
    }

    if (selected_index != -1) {
        is_moving = true;
        dest_x = characters[selected_index].position_x;
        dest_y = characters[selected_index].position_y;

        move_to(move_type, dest_x, dest_y);
    }
}