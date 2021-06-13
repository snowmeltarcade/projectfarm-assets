function(CopyToData FILE_EXT FROM TO)
    file(GLOB files "${CMAKE_CURRENT_LIST_DIR}/${FROM}/*.${FILE_EXT}")

    foreach (file ${files})
        get_filename_component(filename ${file} NAME)

        configure_file("${FROM}${filename}" "${FROM}${filename}" COPYONLY)

        if (IOS)
            get_property(tmp GLOBAL PROPERTY IOS_RESOURCE_FILES_FROM)
            list(APPEND tmp "${file}")
            set_property(GLOBAL PROPERTY IOS_RESOURCE_FILES_FROM "${tmp}")

            get_property(tmp GLOBAL PROPERTY IOS_RESOURCE_FILES_TO)
            list(APPEND tmp "${TO}")
            set_property(GLOBAL PROPERTY IOS_RESOURCE_FILES_TO "${tmp}")
        else()
            install(
                FILES
                    ${file}
                DESTINATION
                    "${INSTALL_CLIENT_DIRECTORY}/data/${TO}"
            )

            install(
                FILES
                    ${file}
                DESTINATION
                    "${INSTALL_SERVER_DIRECTORY}/data/${TO}"
            )

            install(
                FILES
                    ${file}
                DESTINATION
                    "${INSTALL_LATEST_DIRECTORY}/data/${TO}"
            )
        endif()
    endforeach()
endfunction()
