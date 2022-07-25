const textToOutput = 'Look no further. I\'m right here!';
let index = 0;

function writeText(){
    document.body.innerText = textToOutput.slice(0, index);
    index++

    if(index > textToOutput.length){
        index = 0;
    }
}

setInterval(writeText, 80);