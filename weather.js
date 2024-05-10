const apiKey = "74bb14ef7b4235b46fb6d68de6b8c132";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather = document.querySelector(".weather")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weather.src = "/images/clouds.png"
    }

    else if(data.weather[0].main == "Clear"){
        weather.src = "/images/Clear.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weather.src = "/images/drizzle.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

