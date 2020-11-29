var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output1Div = document.querySelector("#output");
var output2Div = document.querySelector("#weather");



function getTranslationURL(text){
    return "https://api.openweathermap.org/data/2.5/weather?q=" + text + "&APPID=2b17d5a956eb1b02dcf3663da14bad12"



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
            var translatedText = json.main.temp - 273;
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
            var weather = json.weather[0]["description"];
            output1Div.innerText = translatedText.toFixed(0) + "°C" + emoji;
            output2Div.innerText = "Weather Condition: " + weather;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
