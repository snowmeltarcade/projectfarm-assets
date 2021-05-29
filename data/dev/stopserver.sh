while IFS= read -r line; do
    echo "Killing process: $line"
    kill $line
done < ./serverprocessid.txt

rm -f ./serveroutput.txt
rm -f ./serverprocessid.txt