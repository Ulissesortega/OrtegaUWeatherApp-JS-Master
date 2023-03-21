import { prod, dev } from "./environment.js";

let apiKey = '&appid=';

if(prod.isLive == true)
{
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}

// html IDs ========================================================================

let cityInput = document.getElementById("cityInput")
let Btn1 = document.getElementById("Btn1")
let currentcity = document.getElementById("currentcity")


//Monday
let mondaytemp = document.getElementById("tempmonday")
let mondaymax = document.getElementById("maxmonday")
let mondaymin = document.getElementById("minmonday")
// Text Format
mondaytemp.className = "temp"
mondaymax.className = "max"
mondaymin.className = "min"

//Tuesday
let temptuesday = document.getElementById("temptuesday")
let maxtuesday = document.getElementById("maxtuesday")
let mintuesday = document.getElementById("mintuesday")
// Text Format
temptuesday.className = "temp"
maxtuesday.className = "max"
mintuesday.className = "min"

//Wednesday
let tempwednesday = document.getElementById("tempwednesday")
let maxwednesday = document.getElementById("maxwednesday")
let minwednesday = document.getElementById("minwednesday")
// Text Format
tempwednesday.className = "temp"
maxwednesday.className = "max"
minwednesday.className = "min"

//Thursday
let tempthursday = document.getElementById("tempthursday")
let maxthursday = document.getElementById("maxthursday")
let minthursday = document.getElementById("minthursday")
// Text Format
tempthursday.className = "temp"
maxthursday.className = "max"
minthursday.className = "min"

//Friday
let tempfriday = document.getElementById("tempfriday")
let maxfriday = document.getElementById("maxfriday")
let minfriday = document.getElementById("minfriday")
// Text Format
tempfriday.className = "temp"
maxfriday.className = "max"
minfriday.className = "min "

Btn1.addEventListener("click", function(){
  AsyncGetData1(cityInput.value)
  AsyncGetData5(cityInput.value)
})

const date = new Date();
let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date

let API_KEY = '8e02b0db85b4a729b31b20a4e496b448';
let weatherApi;
let forecastApi;
let cityNameApi;
let weatherApi3;
let weatherApi4;
let forecastApi4;
let forecastApi8;
let latitude;
let longitude;
let initiallocation;
let currentweather;
let currentmax;
let currentmin;
let currentcityname;
let citynamebtn;

// User Geo Location==============================================================================================
const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);    
    latitude = position.coords.latitude
    longitude = position.coords.longitude        
    AsyncGetData3(latitude, longitude)
    AsyncGetData4(latitude, longitude)
  };
  
  const errorCallback = (error) => {
    console.log(error);
    alert("Please click Allow on Geolocation otherwise this app would not work")    
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// Intial City Weather ===================================================================
async function AsyncGetData3(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial${apiKey}`)
  const data = await promise.json();
  weatherApi3 = data
  initiallocation = weatherApi3.name
  currentweather = weatherApi3.main.feels_like
  currentmax = weatherApi3.main.temp_max
  currentmin = weatherApi3.main.temp_min
  currentcityname = weatherApi3.name  
  currentcity.innerText = currentcityname  
}

// Initial City Forecast ===================================================================
async function AsyncGetData4(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial${apiKey}`)
  const data = await promise.json();
  weatherApi4 = data
  console.log(weatherApi4);
  
  //Monday  
  //info sent to html
  tempmonday.innerText = "Temp " + weatherApi4.list[8].main.temp + " " + "°F"
  maxmonday.innerText = "Max Temp " + weatherApi4.list[8].main.temp_max + " " + "°F"
  minmonday.innerText = "Min Temp " + weatherApi4.list[8].main.temp_min + " " + "°F"

  //Tuesday
  //info sent to html
  temptuesday.innerText = "Temp " +weatherApi4.list[16].main.temp + " " + "°F"
  maxtuesday.innerText = "Max Temp " + weatherApi4.list[16].main.temp_max + " " + "°F"
  mintuesday.innerText = "Min Temp " + weatherApi4.list[16].main.temp_min + " " + "°F"
  
  
  //Wednesday list
  //info sent to html
  tempwednesday.innerText = "Temp " +weatherApi4.list[24].main.temp + " " + "°F"
  maxwednesday.innerText = "Max Temp " + weatherApi4.list[24].main.temp_max + " " + "°F"
  minwednesday.innerText = "Min Temp " + weatherApi4.list[24].main.temp_min + " " + "°F"

   
  // thursday list  
  //info sent to html
  tempthursday.innerText = "Temp " +weatherApi4.list[32].main.temp + " " + "°F"
  maxthursday.innerText = "Max Temp " + weatherApi4.list[32].main.temp_max + " " + "°F"
  minthursday.innerText = "Min Temp " + weatherApi4.list[32].main.temp_min + " " + "°F"

    
  // Friday  
  //info sent to html
  tempfriday.innerText = "Temp " +weatherApi4.list[0].main.temp + " " + "°F"
  maxfriday.innerText = "Max Temp " + weatherApi4.list[0].main.temp_max + " " + "°F"
  minfriday.innerText = "Min Temp " + weatherApi4.list[0].main.temp_min + " " + "°F"
}

// ==============================================================================================================
async function AsyncGetData(currentcityname){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentcityname}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi = data  
}

//City Today Weather from the textbox

async function AsyncGetData1(city){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial${apiKey}`)
  const data = await promise.json();
  forecastApi = data  
}

//City Forecast Weather from the textbox

async function AsyncGetData5(city){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  forecastApi8 = data
  
// Tuesday api info  
//info sent to html
tempmonday.innerText = "Temp " +forecastApi8.list[8].main.temp + " " + "°F" 
maxmonday.innerText = "Max Temp " + forecastApi8.list[8].main.temp_max + " " + "°F"
minmonday.innerText = "Min Temp " + forecastApi8.list[8].main.temp_min + " " + "°F"

// Tuesday api info
//info sent to html
temptuesday.innerText = "Temp " +forecastApi8.list[16].main.temp + " " + "°F" 
maxtuesday.innerText = "Max Temp " + forecastApi8.list[16].main.temp_max + " " + "°F"
mintuesday.innerText = "Min Temp " + forecastApi8.list[16].main.temp_min + " " + "°F"

// wednesday list
//info sent to html
tempwednesday.innerText = "Temp " +forecastApi8.list[24].main.temp + " " + "°F"
maxwednesday.innerText = "Max Temp " + forecastApi8.list[24].main.temp_max + " " + "°F"
minwednesday.innerText = "Min Temp " + forecastApi8.list[24].main.temp_min + " " + "°F"

 
// thursday list
//info sent to html
tempthursday.innerText = "Temp " +forecastApi8.list[32].main.temp + " " + "°F"
maxthursday.innerText = "Max Temp " + forecastApi8.list[32].main.temp_max + " " + "°F"
minthursday.innerText = "Min Temp " + forecastApi8.list[32].main.temp_min + " " + "°F"

// Friday
//info sent to html
tempfriday.innerText = "Temp " +forecastApi8.list[0].main.temp + " " + "°F"
maxfriday.innerText = "Max Temp " + forecastApi8.list[0].main.temp_max + " " + "°F"
minfriday.innerText = "Min Temp " + forecastApi8.list[0].main.temp_min + " " + "°F"

//getting the city name from the button
citynamebtn = forecastApi8.city.name
//sending the name of the city from the button to the html
currentcity.innerText = citynamebtn
}


