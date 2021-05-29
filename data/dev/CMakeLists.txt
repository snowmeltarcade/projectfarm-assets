configure_file("startserver.sh" "startserver.sh" COPYONLY)
configure_file("stopserver.sh" "stopserver.sh" COPYONLY)

configure_file("startserver.bat" "startserver.bat" COPYONLY)
configure_file("stopserver.bat" "stopserver.bat" COPYONLY)

install(
	FILES
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.sh"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.sh"
	DESTINATION
		"${INSTALL_CLIENT_DIRECTORY}/data/dev"
)

install(
	FILES
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.sh"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.sh"
	DESTINATION
		"${INSTALL_SERVER_DIRECTORY}/data/dev"
)

install(
	FILES
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/startserver.sh"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.bat"
        "${CMAKE_CURRENT_SOURCE_DIR}/stopserver.sh"
	DESTINATION
		"${INSTALL_LATEST_DIRECTORY}/data/dev"
)