configure_file("tilemap.json" "tilemap.json" COPYONLY)

install(
    FILES
        "${CMAKE_CURRENT_SOURCE_DIR}/tilemap.json"
    DESTINATION
        "${INSTALL_CLIENT_DIRECTORY}/data/client/tilemaps"
)

install(
    FILES
        "${CMAKE_CURRENT_SOURCE_DIR}/tilemap.json"
    DESTINATION
        "${INSTALL_LATEST_DIRECTORY}/data/client/tilemaps"
)