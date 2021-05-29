SELECT appearance_hair,
       appearance_body,
       appearance_clothes_top,
       appearance_clothes_bottom,
       appearance_feet
FROM entity
WHERE entity_id = ?1;