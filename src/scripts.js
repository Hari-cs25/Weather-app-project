import './styles.css';
import gloading from './image-folder/gray-loading.gif';
import {tempContainer, displayDetails, titleList, loadingLayoutContainer} from './ui.js';

const form = document.querySelector('.searchFeildContainer');
const background = document.querySelector('.outerContainer');
const defSearchLocation = 'trichy';
const input = document.querySelector('#location');
const submitBtn = document.querySelector('.submit');
export const dataContainer = document.querySelector('.dataContainer');
export let weatherDetailsArray=[];


 function getWeather(location){

  background.appendChild(loadingLayoutContainer);
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BYZFD5YW9Q4Z2KVCZ2KABKK4V`)
   .then(rawData => rawData.json())
   .then(data => {console.log(data),
         collectDetails(data),
         deterDisplay(data),
         loadingLayoutContainer.remove();
        })
    .catch(er=>{
      console.log(er),
      loadingLayoutContainer.remove();
    });
}

function deterDisplay(obj){

  if(obj.currentConditions.icon.includes('cloudy')){
    background.style='background: linear-gradient(to bottom, #bdc3c7, #2c3e50);'
  }else if(obj.currentConditions.icon.includes('clear')){
    background.style = 'background: linear-gradient(to bottom, #56ccf2, #2f80ed);';
  }else if(obj.currentConditions.icon.includes('rain')){
    background.style = 'background: linear-gradient(to bottom, #4b79a1, #283e51);';
  }else if(obj.currentConditions.icon.includes('snow')){
    background.style = 'background: linear-gradient(to bottom, #e6dada, #274046);';
  }else if(obj.currentConditions.icon.includes('fog')){
    background.style = 'background: linear-gradient(to bottom, #232526, #414345);';
  }else{
    background.style = 'background: linear-gradient(to bottom, #ff7e5f, #feb47b);';
  }

}

getWeather(defSearchLocation);

input.addEventListener('input', ()=>{
  input.setCustomValidity("");
})

submitBtn.addEventListener('click', ()=>{
  if(input.value === ''){
    input.setCustomValidity("Fill the Loation field before search.");
    return;
  }
  input.reportValidity();

    submitBtn.disabled = true;
    getWeather(input.value);
  
  });

  input.addEventListener('input', ()=>{
     submitBtn.disabled = false;
  })

  const collectDetails = (obj)=>{

    weatherDetailsArray.length = 0;

    weatherDetailsArray.push( `${obj.resolvedAddress}`)
    weatherDetailsArray.push (obj.days[0].datetime)
    weatherDetailsArray.push (obj.currentConditions.conditions)              
    weatherDetailsArray.push (`${obj.currentConditions.humidity}`)
    weatherDetailsArray.push (`${obj.currentConditions.windspeed}`)
    weatherDetailsArray.push (obj.description)  
    weatherDetailsArray.push (obj.currentConditions.temp);
                        
    console.log(getWeatherDetails());
     displayDetails(titleList, weatherDetailsArray);
  }
 
  const getWeatherDetails = ()=>{
    return weatherDetailsArray;
  }

