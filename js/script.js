// Fonction qui va apppeler la fonction start et fetchTHREEDAYForcast quand le bouton est cliqué 
function Action()
{
  start();
  getTHREEDAYForecast(); 
}
//  Fonction appelée lors du click du bouton
function start() { 
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast
 
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
function getTHREEDAYForecast() 
{
  //initialisation de city
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeatherTHREEDay = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeatherTHREEDay  
    .getTHREEDAYSForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main1 = data.list[0].weather[0].main;
      const description1 = data.list[0].weather[0].description;
      const temp1 = data.list[0].temp.day;
      const icon1 = apiWeatherTHREEDay.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('1d-forecast-main').innerHTML = main1;
      document.getElementById('1d-forecast-more-info').innerHTML = description1;
      document.getElementById('1d-icon-weather-container').innerHTML = icon1;
      document.getElementById('1d-forecast-temp').innerHTML = `${temp1}°C`;


      // On récupère l'information principal
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].temp.day;
      const icon2 = apiWeatherTHREEDay.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('2d-forecast-main').innerHTML = main2;
      document.getElementById('2d-forecast-more-info').innerHTML = description2;
      document.getElementById('2d-icon-weather-container').innerHTML = icon2;
      document.getElementById('2d-forecast-temp').innerHTML = `${temp2}°C`;



      // On récupère l'information principal
      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const temp3 = data.list[2].temp.day;
      const icon3 = apiWeatherTHREEDay.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('3d-forecast-main').innerHTML = main3;
      document.getElementById('3d-forecast-more-info').innerHTML = description3;
      document.getElementById('3d-icon-weather-container').innerHTML = icon3;
      document.getElementById('3d-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}