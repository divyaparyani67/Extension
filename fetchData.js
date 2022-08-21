const API_key = 'e7b8f9bbbfc42bbd507db444ffbbc62e'

fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=e7b8f9bbbfc42bbd507db444ffbbc62e")
.then((data) => data.json())

.then((jsonData) =>  {
    console.log(jsonData.name);
    console.log()
})
