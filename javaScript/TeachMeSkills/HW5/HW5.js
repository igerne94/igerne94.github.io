function clearOutput() {
    document.getElementById("output").innerHTML = "";   //Возвращает ссылку на элемент по его идентификатору
                                                        //синтаксис: element = document.getElementById(id);
}
function clearInput(){
    document.getElementById("input").value = "";

}
function convert() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let sel = document.getElementById("my-select");

    output.style.color = select.options[select.selectedIndex].value; //The Style object represents an individual style statement
                                                                     //Sets or returns the color of the text
    output.innerHTML = input.value;

}
function onColorChange() {
    let output = document.getElementById("output");
    let select = document.getElementById("select");

    output.style.color = select.options[select.selectedIndex].value;
}
