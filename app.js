const searchCTR = document.querySelector(".nav-search-ctr");
const search = document.querySelector(".cityInput");
const infoCard = document.querySelector(".info-card");
const infoCTR = document.querySelector(".info-ctr");
const apiKey = "86809b56fa5ed0fe62b8baf8622144cb";

searchCTR.addEventListener("submit", async event => {
    event.preventDefault();
    const input = search.value.toLowerCase();
    if (input) {
        try {
            const fetch = await fetchData(input);
            displayInfo(fetch);
        } catch (error) {
            console.log(error);
            infoCard.innerHTML = `<span class=\"errorMessage\">${error}</span>`;
        }
    } else {
        infoCard.innerHTML = "<span class=\"errorMessage\">Sorry we couldn't find that city. Please try again.</span>"
    }
})

async function fetchData(input) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    console.log(response);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

function displayInfo(data) {
    const cityDisplay = document.querySelector(".city");
    const tempDisplay = document.querySelector(".temp");
    const humidityDisplay = document.querySelector(".humidity");
    const descriptionDisplay = document.querySelector(".description");
    const emojiDisplay = document.querySelector(".emoji");

    cityDisplay.innerHTML = data.name;
    tempDisplay.innerHTML = `${(data.main.temp - 273.15).toFixed()}°C`;
    humidityDisplay.innerHTML = `<span class=\"subtitle\">Humidity: </span>${data.main.humidity}`;
    descriptionDisplay.innerHTML = data.weather[0].description;

    // const weatherID = data.weather[0].id;
    const weatherID = 803;
    console.log(weatherID);
    if ((weatherID >= 200 && weatherID <= 232) || (weatherID == 504)) { // thunderstorm and extreme rain
        emojiDisplay.innerHTML = "⛈️";
        infoCard.style.background = "linear-gradient(to bottom, #002463, #656565)";
        infoCTR.style.backgroundImage = "url(./assets/thunderstorm.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID >= 300 && weatherID <= 321) { // drizzle rain
        emojiDisplay.innerHTML = "🌦️";
        infoCard.style.background = "linear-gradient(to bottom, #6c98f1, #b7dbee)";
        infoCTR.style.backgroundImage = "url(./assets/drizzle-rain.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID >= 500 && weatherID <= 503) { // heavy rain
        emojiDisplay.innerHTML = "🌧️";
        infoCard.style.background = "linear-gradient(to bottom, #003e63, #d2d1d1)";
        infoCTR.style.backgroundImage = "url(./assets/heavy-rain.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    }  else if (weatherID >= 520 && weatherID <= 531) { // shower rain
        emojiDisplay.innerHTML = "☔️";
        infoCard.style.background = "linear-gradient(to bottom, #0067a6, #6b6868)";
        infoCTR.style.backgroundImage = "url(./assets/shower-rain.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID == 511) {  // freezing rain
        emojiDisplay.innerHTML = "❄️🌧️";
        infoCard.style.background = "rgb(144,136,136)";
        infoCard.style.background = "-moz-linear-gradient(98deg, rgba(144,136,136,1) 0%, rgba(224,236,244,1) 47%, rgba(63,154,214,1) 100%)";
        infoCard.style.background = "-webkit-linear-gradient(98deg, rgba(144,136,136,1) 0%, rgba(224,236,244,1) 47%, rgba(63,154,214,1) 100%)";
        infoCard.style.background = "linear-gradient(98deg, rgba(144,136,136,1) 0%, rgba(224,236,244,1) 47%, rgba(63,154,214,1) 100%)";
        infoCard.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#908888\",endColorstr=\"#3f9ad6\",GradientType=1)";
        infoCTR.style.backgroundImage = "url(./assets/freezing-rain.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if  (weatherID >= 600 && weatherID <= 622) { // snow
        emojiDisplay.innerHTML = "❄️";
        infoCard.style.background = "linear-gradient(to bottom, #e0ecf4, #908888)";
        infoCTR.style.backgroundImage = "url(./assets/snow.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID >= 700 && weatherID <= 771) { // mist/fog
        emojiDisplay.innerHTML = "😶‍🌫️";
        infoCard.style.background = "rgb(124,124,124)";
        infoCard.style.background = "-moz-linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.background = "-webkit-linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.background = "linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7c7c7c\",endColorstr=\"#e3e3e4\",GradientType=1)";
        infoCTR.style.backgroundImage = "url(./assets/fog.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID == 781) { // tornado
        emojiDisplay.innerHTML = "🌪️";
        infoCard.style.background = "rgb(22,22,22)";
        infoCard.style.background = "-moz-linear-gradient(180deg, rgba(22,22,22,1) 0%, rgba(112,110,110,1) 29%, rgba(255,255,255,1) 52%, rgba(132,132,132,1) 80%, rgba(57,57,57,1) 100%)";
        infoCard.style.background = "-webkit-linear-gradient(180deg, rgba(22,22,22,1) 0%, rgba(112,110,110,1) 29%, rgba(255,255,255,1) 52%, rgba(132,132,132,1) 80%, rgba(57,57,57,1) 100%)";
        infoCard.style.background = "linear-gradient(180deg, rgba(22,22,22,1) 0%, rgba(112,110,110,1) 29%, rgba(255,255,255,1) 52%, rgba(132,132,132,1) 80%, rgba(57,57,57,1) 100%)";
        infoCard.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#161616\",endColorstr=\"#393939\",GradientType=1)";
        infoCTR.style.backgroundImage = "url(./assets/tornado.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID == 800) { // clear/sunny
        emojiDisplay.innerHTML = "☀️";
        infoCard.style.background = "rgb(255,0,0)";
        infoCard.style.background = "-moz-linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,89,0,1) 43%, rgba(255,222,0,1) 100%)";
        infoCard.style.background = "-webkit-linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,89,0,1) 43%, rgba(255,222,0,1) 100%)";
        infoCard.style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,89,0,1) 43%, rgba(255,222,0,1) 100%)";
        infoCard.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ff0000\",endColorstr=\"#ffde00\",GradientType=1)";
        infoCTR.style.backgroundImage = "url(./assets/sunny.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID >= 801 && weatherID <= 802) { // few clouds
        emojiDisplay.innerHTML = "🌤️";
        infoCTR.style.backgroundImage = "url(./assets/few-clouds.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    } else if (weatherID >= 803 && weatherID <= 804) { // cloudy
        emojiDisplay.innerHTML = "⛅️";
        infoCard.style.background = "rgb(124,124,124)";
        infoCard.style.background = "-moz-linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.background = "-webkit-linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.background = "linear-gradient(98deg, rgba(124,124,124,1) 0%, rgba(187,187,187,1) 62%, rgba(227,227,228,1) 96%)";
        infoCard.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7c7c7c\",endColorstr=\"#e3e3e4\",GradientType=1)";
        infoCTR.style.backgroundImage = "url(./assets/cloudy.jpg)";
        infoCTR.style.height = "100vh";
        infoCTR.style.width = "100%";
        infoCTR.style.backgroundSize = "cover";
        infoCTR.style.backgroundRepeat = "no-repeat";
    }
}