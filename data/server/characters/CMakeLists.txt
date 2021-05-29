file(GLOB files "${CMAKE_CURRENT_SOURCE_DIR}/*.json")

foreach (file ${files})
    get_filename_component(filename ${file} NAME)

    configure_file(${filename} ${filename} COPYONLY)

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_CLIENT_DIRECTORY}/data/server/characters"
    )

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_SERVER_DIRECTORY}/data/server/characters"
    )

    install(
        FILES
            ${file}
        DESTINATION
            "${INSTALL_LATEST_DIRECTORY}/data/server/characters"
    )
endforeach()