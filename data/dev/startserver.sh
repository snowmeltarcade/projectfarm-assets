rm -f ./serveroutput.txt
rm -f ./serverprocessid.txt

./projectfarm_server > ./serveroutput.txt &

/bin/ps -fu $USER | awk '/projectfarm_server/ && !/awk/ {print $2}' > ./serverprocessid.txt