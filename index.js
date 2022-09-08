const API_KEY = '763e518b8ae29a6da9c6ddf1c2e3669a'; //appid
const LIMIT = '1';
const UNIT = 'metric'

const coOrdinates =  async(CITY_NAME) =>{
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=${LIMIT}&appid=${API_KEY}`)
    let data = await response.json();
    let coOrd = data;
    // console.log(coOrd);
    return coOrd;
} 

const weather = async(LAT, LON) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=${UNIT}&appid=${API_KEY}`)
    let data = await response.json();
    return data;
}


async function btnClick(){

    //HIDING / SHOWING ELEMENTS
    document.getElementById("cityQuery").style.display = 'none';
    document.getElementById("inner-container").style.display = 'flex';

    //FETCHING CO ORDINATES
    const CITY_NAME = document.getElementById("cityName").value;
    let dataLocation = await coOrdinates(CITY_NAME);
    let country = dataLocation[0].country;
    let city = dataLocation[0].name;
    const LAT = dataLocation[0].lat;
    const LON = dataLocation[0].lon;
    document.getElementById("city").innerHTML = city;
    document.getElementById("country").innerHTML = country;

    //WEATHER DATA
    let dataWeather = await weather(LAT, LON);
    let mainTemp = Math.trunc(dataWeather.main.temp);
    let humidity = Math.trunc(dataWeather.main.humidity);
    let feel = Math.trunc(dataWeather.main.feels_like);

    document.getElementById("temperature-main").innerHTML = mainTemp;
    document.getElementById("humidity-percentage").innerHTML = humidity;
    document.getElementById("feelTemp").innerHTML = feel;
}

function backBtnClick(){
    document.getElementById("cityQuery").style.display = 'block';
    document.getElementById("inner-container").style.display = 'none';
}





