INSERT INTO player (username,
                    hashed_password,
                    last_login,
                    character_type,
                    x_pos,
                    y_pos)
VALUES (?,
        ?,
        ?,
        "farmer_male",
        0,
        0);

SELECT last_insert_rowid() as 'player_id';