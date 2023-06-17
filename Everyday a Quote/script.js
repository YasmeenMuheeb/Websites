var currentQuote = '',
  currentAuthor = '';
quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
var jsonDataLength;
var jsonData;
var randomNum;
var randomColorIndex;
colorsHexURL = 'https://raw.githubusercontent.com/cheprasov/json-colors/master/colors.json';
var colorsData; 
function getNewQuote(){
    fetch(quotesURL).then(
        function(u){ return u.json();}
      ).then(
        function(json)
        {
            jsonData = json;
            console.log()
            jsonDataLength = jsonData.quotes.length;
           // Get random index of the quotes  
            randomNum = getRandomIndex(jsonDataLength);
            currentQuote = jsonData.quotes[randomNum].quote;
            currentAuthor = jsonData.quotes[randomNum].author;
            document.getElementById("quoteText").innerHTML=currentQuote;
            document.getElementById("authorText").innerHTML= "- "+currentAuthor;
            randomColor();
            
            
        }
      )    

};

function randomColor(){
    fetch(colorsHexURL).then(
         function(u){ return u.json();}
    ).then(
      function(json)
      {
        colorsData = json;
        console.log(colorsData[1].hex);
        colorsDataLength = colorsData.length;
        let colorIndex = getRandomIndex(colorsDataLength);
        let currentColor = colorsData[colorIndex].hex;
        const pattern = /^\#(F|E|0|1|2)/i;
        if(pattern.test(currentColor)){
            colorIndex = getRandomIndex(colorsDataLength);
            currentColor = colorsData[colorIndex].hex;
        }
        document.getElementById("changedColor").style.color = currentColor;
        document.getElementById("authorText").style.color = currentColor;
        document.getElementById("newQuote").style.backgroundColor = currentColor;
        document.getElementById("tweet").style.backgroundColor = currentColor;
        document.getElementById("post").style.backgroundColor = currentColor;

        document.body.style.backgroundColor = currentColor;

        
      }
    )
};
function getRandomIndex(arrlength){
    return Math.round(Math.random()*(arrlength-1));
};
