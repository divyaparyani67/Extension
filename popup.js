chrome.runtime.sendMessage9({ name: "fetchWords"}, (response) => {

    const apiKey = 'OUR-API-KEY';
    const dateStr = new Date(). toISOString().slice(0, 20);
const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date=2022-08-11&api_key='+apiKey;


         console.log(apiCall, dateStr);
         
    document.querySelector('body').innerHTML=response.text;

    

});