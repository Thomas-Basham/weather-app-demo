const BASE_URL = "http://api.weatherapi.com/v1";

// Form event handler for getting current weather from Weatherbit api
function getWeather(event) {
  event.preventDefault();

  console.log("Form submitted!");
  const cityName = event.target["city-input"].value;

  // base url + endpoint
  const url =
    BASE_URL +
    `/current.json?key=30b7f9b170924d02833205827230212&q=${cityName}&aqi=no`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // DOM manipulation / update UI
      document.getElementById("city").textContent = `${data.location.name}, ${data.location.region}` ;

      document.getElementById(
        "description"
      ).textContent = `Weather Description: ${data.current.condition.text}`;

      document.getElementById("temperature").textContent = `Temperature:  ${data.current.temp_f}°F`

      document.getElementById("humidity").textContent = `Humidity: ${data.current.humidity}%`

      document.getElementById("wind").textContent = `Wind: ${data.current.wind_mph} MPH`
    });
}
