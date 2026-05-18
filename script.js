document.addEventListener("DOMContentLoaded", () => {

const apiKey =
"86a3a6665567472694b71519261805";

const searchBtn =
document.getElementById("searchBtn");

const toggleBtn =
document.getElementById("toggleBtn");

/* WEATHER */

searchBtn.addEventListener(
    "click",
    getWeather
);

async function getWeather(){

    const city =
    document
    .getElementById("city")
    .value
    .trim();

    if(city === ""){

        alert("Please enter city");

        return;
    }

    const url =
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{

        const response =
        await fetch(url);

        const data =
        await response.json();

        console.log(data);

        if(data.error){

            alert(data.error.message);

            return;
        }

        document
        .getElementById("weatherCard")
        .style.display = "block";

        document
        .getElementById("weatherIcon")
        .src =
        data.current.condition.icon;

        document
        .getElementById("cityName")
        .innerText =
        data.location.name;

        document
        .getElementById("temperature")
        .innerText =
        `Current Temp: ${data.current.temp_c} °C`;

        document
        .getElementById("feelsLike")
        .innerText =
        `Feels Like: ${data.current.feelslike_c} °C`;

        document
        .getElementById("description")
        .innerText =
        `Condition: ${data.current.condition.text}`;

        document
        .getElementById("humidity")
        .innerText =
        `Humidity: ${data.current.humidity}%`;

        document
        .getElementById("wind")
        .innerText =
        `Wind Speed: ${data.current.wind_kph} km/h`;

    }

    catch(error){

        console.log(error);

        alert("Something went wrong");
    }
}

/* TOGGLE BUTTON */

toggleBtn.addEventListener(
    "click",
    () => {

    document.body.classList.toggle(
        "light-mode"
    );

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        toggleBtn.innerText = "☀️";
    }

    else{

        toggleBtn.innerText = "🌙";
    }
});

});