UPDATE player
SET appearance_hair = ?2,
    appearance_body = ?3,
    appearance_clothes_top = ?4,
    appearance_clothes_bottom = ?5,
    appearance_feet = ?6
WHERE player_id = ?1;