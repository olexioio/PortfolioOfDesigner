
let span = document.getElementById("span-drop");

function showFile(input) {
    console.log(input);
    inner = "";
    span.innerHTML = "";
    let counter = 0;
    for(const file of input.files) {
        counter++;
        inner = "<br>"+counter+". "+file.name;
        span.innerHTML += inner;
    }
    const file = input;
    return file;
}