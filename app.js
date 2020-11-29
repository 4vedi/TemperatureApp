var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var apiKey = "62a7b93cbb4d4940b9f124421202911";


function getTranslationURL(text){
    return "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + text


}

function errorHandler(error){

    console.log("Error Occured", error);
    alert("Something wrong with server. Try again Later!")
}

function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.current.temp_c;
            var emoji;
            if(translatedText <=5 ){
                emoji = "🌨️"
            }
            else if(translatedText > 5 && translatedText <= 20){
                emoji = "❄"
            }
            else if(translatedText > 20 && translatedText <= 35){
                emoji = "⛅"
            }
            else{
                emoji = "☀️"
            }
            outputDiv.innerText = translatedText + "°C" + " " + emoji; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)