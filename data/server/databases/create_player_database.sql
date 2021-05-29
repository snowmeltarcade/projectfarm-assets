CREATE TABLE IF NOT EXISTS player (
    player_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    hashed_password TEXT NOT NULL,
    last_login INTEGER NOT NULL,
    character_type TEXT,
    current_world TEXT,
    x_pos INTEGER NOT NULL,
    y_pos INTEGER NOT NULL,
    appearance_hair TEXT,
    appearance_body TEXT,
    appearance_clothes_top TEXT,
    appearance_clothes_bottom TEXT,
    appearance_feet TEXT
);