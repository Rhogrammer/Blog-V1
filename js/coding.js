const output = document.getElementById("output")

function onSend(){
   const input = document.getElementById("textbox")
    let text = input.value
    output.innerHTML = text
    console.info(text)
}
const output2 = document.getElementById("output2")
function onSumm(){
    const input2 = document.getElementById("textbox2")
    const input3 = document.getElementById("textbox3")
    let text2 = input2.value
    let text3 = input3.value
    if(Number(text2) + Number(text3) == 69)
    {output2.innerHTML = "sus"}
    else {output2.innerHTML = Number(text2) + Number(text3)}
}