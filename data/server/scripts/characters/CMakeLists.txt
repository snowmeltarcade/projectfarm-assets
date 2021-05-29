file(GLOB files "${CMAKE_CURRENT_SOURCE_DIR}/*.js")

foreach (file ${files})
    get_filename_component(filename ${file} NAME)

    configure_file(${filename} ${filename} COPYONLY)

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_CLIENT_DIRECTORY}/data/server/scripts/characters"
    )

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_SERVER_DIRECTORY}/data/server/scripts/characters"
    )

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_LATEST_DIRECTORY}/data/server/scripts/characters"
    )
endforeach()