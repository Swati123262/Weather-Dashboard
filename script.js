const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("city");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const feelsLike = document.getElementById("feelsLike");

const description = document.getElementById("description");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const weatherIcon = document.getElementById("weatherIcon");

const weatherCard = document.getElementById("weatherCard");

const toggleBtn = document.getElementById("toggleBtn");


// TOGGLE BUTTON
toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        toggleBtn.innerHTML = "☀️";

    }

    else {

        toggleBtn.innerHTML = "🌙";

    }

});


// SEARCH WEATHER
searchBtn.addEventListener("click", async () => {

    const city = cityInput.value.trim();

    if (city === "") {

        alert("Enter city name");

        return;

    }

    // YOUR API KEY
    const apiKey = "86a3a6665567472694b71519261805";

    // API URL
    const url =
`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // ERROR CHECK
        if (data.error) {

            alert(data.error.message);

            return;

        }

        // SHOW CARD
        weatherCard.style.display = "block";

        // SET DATA
        cityName.innerHTML = data.location.name;

        temperature.innerHTML =
            `${data.current.temp_c} °C`;

        feelsLike.innerHTML =
            `${data.current.feelslike_c} °C`;

        description.innerHTML =
            data.current.condition.text;

        humidity.innerHTML =
            `${data.current.humidity}%`;

        wind.innerHTML =
            `${data.current.wind_kph} km/h`;

        weatherIcon.src =
            "https:" + data.current.condition.icon;

    }

    catch (error) {

        console.log(error);

        alert("Something went wrong");

    }

});