UPDATE player
SET last_login = ?2
WHERE username = ?1;

SELECT player_id
FROM player
WHERE username = ?1;