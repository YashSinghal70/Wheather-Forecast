const apiKEy="15689c8aef5820a4ab0be76fd771de0e";
const Url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchBox = document.querySelector('#inputtext')
const searchBtn = document.querySelector('.searchbtn')
const wheathericon=document.querySelector(".wheathericon");
const wheather=document.querySelector(".wheather");
const error=document.querySelector(".error")



async function CheckWheather(cityname) { // Renamed parameter to cityName
    const res = await fetch(Url + cityname + `&appid=${apiKEy}`);
//Error Only
if(res.status == 404)
{
    //Error Show when somethimg wrong  
    error.style.display="block";
    // And the card is close
     wheather.style.display="none";
}

else
{

    console.log(res);
    
    const data = await res.json();
    console.log(data);
    city.innerHTML = data.name; // This refers to the DOM element
    temp.innerHTML = Math.floor(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main== "Clouds")
{
    wheathericon.src="cloudy.png";
// wheathericon.src=`<img src="clouds.png" `
}
else if(data.weather[0].main== "Rain")
    {
        wheathericon.src="rain.png";
    }
    else if(data.weather[0].main== "Clear")
        {
            wheathericon.src="clear.png";
        }
        else if(data.weather[0].main== "Drizzle")
            {
                wheathericon.src="drizzle.png";
            }
            else if(data.weather[0].main== "Mist")
                {
                    wheathericon.src="mist.png";
                }
                else if(data.weather[0].main== "Snow")
                    {
                        wheathericon.src="snow.png";
                    }
                    // card open when we write somethig
                    wheather.style.display="block"
                    //Error not show in  card when card is open
                    error.style.display="none";
                }
}

searchBtn.addEventListener('click', () => {
    // ?
    CheckWheather(searchBox.value);
    console.log(searchBox.value);
    
  })


  //?
// searchbtn.addEventListener("Click",(e)=>{
//     e.preventDefault();
//     CheckWheather();
// })



