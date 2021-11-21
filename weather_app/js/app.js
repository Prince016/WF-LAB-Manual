// http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=c7ad3cb7f0f49aafbcb1a181c2c71a64

function weather() {
    val = document.querySelector('#choose');
    selectVal = val.value;

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + selectVal + '&appid=c7ad3cb7f0f49aafbcb1a181c2c71a64')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(json.main.temp);
                        
            
            var city_Temp = json.main.temp
            var city_Name = json.name 
            var weather = json.weather[0].description
            var t_min = json.main.temp_min
            var t_max = json.main.tempmax


            console.log(city_Temp);
            document.getElementById("temp").innerHTML = "Temp : -> " + Celcius(city_Temp) + "°C";
            document.getElementById("weather").innerHTML = "Weather : -> " + weather;
            document.getElementById("name").innerHTML = "Name : -> " + city_Name;
            document.getElementById("temp_min").innerHTML = "Max Temp: -> " + Celcius(t_min) + "°C";
            document.getElementById("temp_max").innerHTML = "Min Temp: -> " + Celcius(t_max) + "°C";


        })

        .catch(err => alert("Wrong city name!"));

}

function Celcius(temp) {

    var num = -273.15;
    var celsius = temp + num;
    var Cur_Temp = Math.round(celsius * 10) / 10
    return Cur_Temp;
}




