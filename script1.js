const apiKey="Your_API_KEY_HERE"//can't show mine due to security concerns
document.getElementById("showWeatherBtn").onclick=function(){
    const city=document.getElementById("cityInput").value.trim()

if(!city){
    alert("Please enter a city name.")
    return;
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
  .then((response)=>response.json())
  .then((data)=>{
    const resultDiv=document.getElementById("weatherResult")

    if(data.cod===200){
        resultDiv.innerHTML=`<h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong>${data.main.temp}°C</p>
        <p><strong>Condition:</strong>${data.weather[0].description}</p>
        <p><strong>Humidity:</strong>${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong>${data.wind.speed}m/s</p>`
    }
    else{
        resultDiv.innerHTML=`<p>City not found.Please try again</p>`
    }
  })

  .catch((error)=>{
    document.getElementById("weatherResult").innerHTML=`<p>Error:${error.message}</p>`
  })
}