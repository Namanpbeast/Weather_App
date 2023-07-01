
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2ca36ea0bdmsha8c48288156ec05p112bb0jsn22aa09159d4b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather=(city)=>{

cityName.innerHTML=city;
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct.innerHTML = response.cloud_pct;
        
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        console.log(response)
    }
    )
    .catch(err => console.error(err));
}
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let ct=search.value;
    console.log(e);
    getweather(ct);
})
getweather("Delhi");

{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow', options)
        .then(response => response.json())
        .then((response) => {
        ms_cl.innerHTML = response.cloud_pct;
        ms_tm.innerHTML = response.temp;
        ms_fl.innerHTML = response.feels_like;
        ms_hu.innerHTML = response.humidity;
        ms_mnt.innerHTML = response.min_temp;
        ms_mxt.innerHTML = response.max_temp;
        ms_ws.innerHTML = response.wind_speed;
        ms_wd.innerHTML = response.wind_degrees;
        ms_sr.innerHTML = response.sunrise;
        ms_ss.innerHTML = response.sunset;
        }
        )
        .catch(err => console.error(err));
}

{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
        .then(response => response.json())
        .then((response) => {
        ln_cl.innerHTML = response.cloud_pct;
        ln_tm.innerHTML = response.temp;
        ln_fl.innerHTML = response.feels_like;
        ln_hu.innerHTML = response.humidity;
        ln_mnt.innerHTML = response.min_temp;
        ln_mxt.innerHTML = response.max_temp;
        ln_ws.innerHTML = response.wind_speed;
        ln_wd.innerHTML = response.wind_degrees;
        ln_sr.innerHTML = response.sunrise;
        ln_ss.innerHTML = response.sunset;
        }
        )
        .catch(err => console.error(err));
}

{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington', options)
        .then(response => response.json())
        .then((response) => {
        ws_cl.innerHTML = response.cloud_pct;
        ws_tm.innerHTML = response.temp;
        ws_fl.innerHTML = response.feels_like;
        ws_hu.innerHTML = response.humidity;
        ws_mnt.innerHTML = response.min_temp;
        ws_mxt.innerHTML = response.max_temp;
        ws_ws.innerHTML = response.wind_speed;
        ws_wd.innerHTML = response.wind_degrees;
        ws_sr.innerHTML = response.sunrise;
        ws_ss.innerHTML = response.sunset;
        }
        )
        .catch(err => console.error(err));
}

{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
        .then(response => response.json())
        .then((response) => {
        pr_cl.innerHTML = response.cloud_pct;
        pr_tm.innerHTML = response.temp;
        pr_fl.innerHTML = response.feels_like;
        pr_hu.innerHTML = response.humidity;
        pr_mnt.innerHTML = response.min_temp;
        pr_mxt.innerHTML = response.max_temp;
        pr_ws.innerHTML = response.wind_speed;
        pr_wd.innerHTML = response.wind_degrees;
        pr_sr.innerHTML = response.sunrise;
        pr_ss.innerHTML = response.sunset;
        }
        )
        .catch(err => console.error(err));
}