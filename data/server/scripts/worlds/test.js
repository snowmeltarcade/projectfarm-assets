function init() {
    log("World!");
    v = get_action_tiles_by_property("type", "spawn");

    for (var i = 0; i < v.length; ++i) {
        var o = v[i];

        add_character(o.x, o.y, "chicken", o.islandId);
    }
}