const API_KEY = '&appid=63a810a12f4c24137fb9369bd50f1199';
var cityToSearch;
var weather;
var cityTemp;
var unitType = "C";
var cityToSearch = "Toronto";
var count=1;

function weatherRequest(){
	count=1;
	document.getElementById("ofCity").innerHTML = cityToSearch;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			weather = JSON.parse(this.responseText);

			
			
			document.getElementById("tempDay1").innerHTML = "";
			for(i=count-1; i<count+1; i++){	
				count++;

				document.getElementById("tempDay1").innerHTML += (new Date(weather.list[i].dt * 1000).toString()).substring(16, 21) + " | " + Math.floor(kelvinToUnit(weather.list[i].main.temp, unitType));	
				linebreak = document.createElement("br");
				document.getElementById("tempDay1").appendChild(linebreak);
									
				if(((new Date(weather.list[i].dt * 1000).toString()).substring(0, 11))!=((new Date(weather.list[i+1].dt * 1000).toString()).substring(0, 11))){
					break;
				}
			}
			
			document.getElementById("tempDay2").innerHTML = "";
			for(i=count-1; i<count+1; i++){	
				count++;

				document.getElementById("tempDay2").innerHTML += (new Date(weather.list[i].dt * 1000).toString()).substring(16, 21) + " | " + Math.floor(kelvinToUnit(weather.list[i].main.temp, unitType));	
				linebreak = document.createElement("br");
				document.getElementById("tempDay2").appendChild(linebreak);
									
				if(((new Date(weather.list[i].dt * 1000).toString()).substring(0, 11))!=((new Date(weather.list[i+1].dt * 1000).toString()).substring(0, 11))){
					break;
				}
			}
			
			
			document.getElementById("tempDay3").innerHTML = "";
			for(i=count-1; i<count+1; i++){
				count++;

				document.getElementById("tempDay3").innerHTML += (new Date(weather.list[i].dt * 1000).toString()).substring(16, 21) + " | " + Math.floor(kelvinToUnit(weather.list[i].main.temp, unitType));	
				linebreak = document.createElement("br");
				document.getElementById("tempDay3").appendChild(linebreak);
					
				if(((new Date(weather.list[i].dt * 1000).toString()).substring(0, 11))!=((new Date(weather.list[i+1].dt * 1000).toString()).substring(0, 11))){
					break;
				}
			}

			document.getElementById("tempDay4").innerHTML = "";
			for(i=count-1; i<count+1; i++){
				count++;
					
						document.getElementById("tempDay4").innerHTML += (new Date(weather.list[i].dt * 1000).toString()).substring(16, 21) + " | " + Math.floor(kelvinToUnit(weather.list[i].main.temp, unitType));	
						linebreak = document.createElement("br");
						document.getElementById("tempDay4").appendChild(linebreak);
					
				if(((new Date(weather.list[i].dt * 1000).toString()).substring(0, 11))!=((new Date(weather.list[i+1].dt * 1000).toString()).substring(0, 11))){
					break;
				}
			}
			
			document.getElementById("tempDay5").innerHTML = "";
			for(i=count-1; i<count+1; i++){
				count++;
				
						document.getElementById("tempDay5").innerHTML += (new Date(weather.list[i].dt * 1000).toString()).substring(16, 21) + " | " + Math.floor(kelvinToUnit(weather.list[i].main.temp, unitType));	
						linebreak = document.createElement("br");
						document.getElementById("tempDay5").appendChild(linebreak);
					
				if(count>38||((new Date(weather.list[i].dt * 1000).toString()).substring(0, 11))!=((new Date(weather.list[i+1].dt * 1000).toString()).substring(0, 11))){
					break;
				}
			}

			
			linebreak = document.createElement("br");
			
			document.getElementById("snapshot1").innerHTML = (new Date(weather.list[0].dt * 1000).toString()).substring(0, 21) + Math.floor(kelvinToUnit(weather.list[0].main.temp, unitType));
			
			
			document.getElementById("snapshot1").innerHTML = "";
			document.getElementById("snapshot1time").innerHTML = (new Date(weather.list[0].dt * 1000).toString()).substring(0, 21);
			document.getElementById("tempNum1").innerHTML = Math.floor(kelvinToUnit(weather.list[0].main.temp, unitType));
			document.getElementById("snapshot1").innerHTML += "CONDITION: " + weather.list[0].weather[0].main;
			document.getElementById("snapshot1").appendChild(linebreak);
			document.getElementById("snapshot1").innerHTML += "WIND: " + Math.floor(weather.list[0].wind.speed) * 3.6 + " Km/h ";
			document.getElementById("snapshot1").appendChild(linebreak);
			document.getElementById("snapshot1").innerHTML += "HUMIDITY: " + weather.list[0].main.humidity + "%";
			document.getElementById("snapshot1").appendChild(linebreak);
			document.getElementById("snapshot1").appendChild(linebreak);
			getIcon(0, "condition1");
			document.getElementById("snapshot1").innerHTML += "-----------------";
			document.getElementById("snapshot1").appendChild(linebreak);
			
			document.getElementById("snapshot2").innerHTML = "";
			document.getElementById("snapshot2time").innerHTML = (new Date(weather.list[8].dt * 1000).toString()).substring(0, 21);
			document.getElementById("tempNum2").innerHTML = Math.floor(kelvinToUnit(weather.list[8].main.temp, unitType));
			document.getElementById("snapshot2").innerHTML += "CONDITION: " + weather.list[8].weather[0].main;
			document.getElementById("snapshot2").appendChild(linebreak);
			document.getElementById("snapshot2").innerHTML += "WIND: " + Math.floor(weather.list[8].wind.speed) * 3.6 + " Km/h ";
			document.getElementById("snapshot2").appendChild(linebreak);
			document.getElementById("snapshot2").innerHTML += "HUMIDITY: " + weather.list[8].main.humidity + "%";
			document.getElementById("snapshot2").appendChild(linebreak);
			document.getElementById("snapshot2").appendChild(linebreak);
			getIcon(8, "condition2");
			document.getElementById("snapshot2").innerHTML += "-----------------";
			document.getElementById("snapshot2").appendChild(linebreak);
			
			document.getElementById("snapshot3").innerHTML = "";
			document.getElementById("snapshot3time").innerHTML = (new Date(weather.list[16].dt * 1000).toString()).substring(0, 21);
			document.getElementById("tempNum3").innerHTML = Math.floor(kelvinToUnit(weather.list[16].main.temp, unitType));
			document.getElementById("snapshot3").innerHTML += "CONDITION: " + weather.list[16].weather[0].main;
			document.getElementById("snapshot3").appendChild(linebreak);
			document.getElementById("snapshot3").innerHTML += "WIND: " + Math.floor(weather.list[16].wind.speed) * 3.6 + " Km/h ";
			document.getElementById("snapshot3").appendChild(linebreak);
			document.getElementById("snapshot3").innerHTML += "HUMIDITY: " + weather.list[16].main.humidity + "%";
			document.getElementById("snapshot3").appendChild(linebreak);
			document.getElementById("snapshot3").appendChild(linebreak);
			getIcon(16, "condition3");
			document.getElementById("snapshot3").innerHTML += "-----------------";
			document.getElementById("snapshot3").appendChild(linebreak);

			document.getElementById("snapshot4").innerHTML = "";
			document.getElementById("snapshot4time").innerHTML = (new Date(weather.list[24].dt * 1000).toString()).substring(0, 21);
			document.getElementById("tempNum4").innerHTML = Math.floor(kelvinToUnit(weather.list[24].main.temp, unitType));
			document.getElementById("snapshot4").innerHTML += "CONDITION: " + weather.list[24].weather[0].main;
			document.getElementById("snapshot4").appendChild(linebreak);
			document.getElementById("snapshot4").innerHTML += "WIND: " + Math.floor(weather.list[24].wind.speed) * 3.6 + " Km/h ";
			document.getElementById("snapshot4").appendChild(linebreak);
			document.getElementById("snapshot4").innerHTML += "HUMIDITY: " + weather.list[24].main.humidity + "%";
			document.getElementById("snapshot4").appendChild(linebreak);
			document.getElementById("snapshot4").appendChild(linebreak);
			getIcon(24, "condition4");
			document.getElementById("snapshot4").innerHTML += "-----------------";
			document.getElementById("snapshot4").appendChild(linebreak);
			
			document.getElementById("snapshot5").innerHTML = "";
			document.getElementById("snapshot5time").innerHTML = (new Date(weather.list[32].dt * 1000).toString()).substring(0, 21);
			document.getElementById("tempNum5").innerHTML = Math.floor(kelvinToUnit(weather.list[32].main.temp, unitType));
			document.getElementById("snapshot5").innerHTML += "CONDITION: " + weather.list[32].weather[0].main;
			document.getElementById("snapshot5").appendChild(linebreak);
			document.getElementById("snapshot5").innerHTML += "WIND: " + Math.floor(weather.list[32].wind.speed) * 3.6 + " Km/h ";
			document.getElementById("snapshot5").appendChild(linebreak);
			document.getElementById("snapshot5").innerHTML += "HUMIDITY: " + weather.list[32].main.humidity + "%";
			document.getElementById("snapshot5").appendChild(linebreak);
			document.getElementById("snapshot5").appendChild(linebreak);
			getIcon(32, "condition5");
			document.getElementById("snapshot5").innerHTML += "-----------------";
			document.getElementById("snapshot5").appendChild(linebreak);
		}
	};
	
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + cityToSearch + API_KEY, true);
	
	
	/*
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("citySearch").value + API_KEY, true);
	*/
	
	xhttp.send();
	
}

function setCity(){
	cityToSearch = document.getElementById("citySearch").value;
}

function kelvinToC(temp) {
	return temp - 273.15;
}

function kelvinToF(temp) {
	return ((9/5)*(temp - 273) + 32);
}

function kelvinToUnit(temp, unit){
	if(unit=="C"){
		return temp - 273.15;	
	}
	else if(unit=="F"){
		return ((9/5)*(temp - 273) + 32);
	}
}

function fToC(){
	document.getElementById("weatherRequest1").innerHTML = ((document.getElementById("weatherRequest1").innerHTML - 32 ) * 5 ) /9; 
}

function cToF(){
	
}

function searchWeather(){
	cityToSearch = document.getElementById("citySearch").value;
	weatherRequest();
}

function setCelsius(){
	document.getElementById("unitDisplay").innerHTML = "CELSIUS";
	unitType = "C";
	document.getElementById("cButton").className = "selectedButton";
	document.getElementById("fButton").className = "searchButton";
	weatherRequest();
}


function setFarhenheit(){
	document.getElementById("unitDisplay").innerHTML = "FARHENHEIT";
	unitType = "F";
	document.getElementById("fButton").className = "selectedButton";
	document.getElementById("cButton").className = "searchButton";
	weatherRequest();
}

function getIcon(day, weekDay){
	if(	weather.list[day].weather[0].main=="Clouds"){		
		document.getElementById(weekDay).src = "img/Cloudy.png";
	}	
	else if(weather.list[day].weather[0].main=="Clear"){		
		document.getElementById(weekDay).src = "img/Sunny.png";
	}	
	else if(weather.list[day].weather[0].main=="Snow"){		
		document.getElementById(weekDay).src = "img/Snow.png";
	}	
	else if(weather.list[day].weather[0].main=="Rain"){		
		document.getElementById(weekDay).src = "img/Drizzle.png";
	}	
	else if(weather.list[day].weather[0].main=="Thunderstorm"){		
		document.getElementById(weekDay).src = "img/Thunderstorms.png";
	}
	else if(weather.list[day].weather[0].main=="Drizzle"){		
		document.getElementById(weekDay).src = "img/SlightDrizzle.png";
	}
	else if(weather.list[day].weather[0].main=="Atmosphere"){		
		document.getElementById(weekDay).src = "img/Haze.png";
	}
	

}