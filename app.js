var input_text= document.querySelector("#input-text");
var btn= document.querySelector(".btn-translate");
var output_text= document.querySelector("#output-text");

var url="https://api.funtranslations.com/translate/pirate.json";

function GetItTranslate(text) {
    return url+"?"+"text="+text;
}

btn.addEventListener("click",function() {
    console.log("hello clicked")
    fetch(GetItTranslate(input_text.value))
    .then(response =>response.json())
    .then(json => {output_text.innerText=json.contents.translated})
});
 

