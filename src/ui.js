import { dataContainer, weatherDetailsArray } from "./scripts.js";
import gloading from './image-folder/gray-loading.gif';


export const titleList = ['Location: ','Date: ','Conditions: ','Humidity: ', 'Wind Speed: ',"How it's feels: ",'Temprature'];

 export const tempContainer = document.createElement('div');
tempContainer.className = 'tempContainer';

  const label = document.createElement('label');
  label.className = 'label';

 const input = document.createElement('input');
 input.id='input';
 input.type ='checkbox';
 let bol = true;

 const change = ()=>{
    bol = !bol;
    if(bol === true){
        transTitleSpa.textContent = 'Temprature';
        tempSec2C.textContent = temp;
    }else{
        transTitleSpa.textContent = 'Celcius';
         tempSec2C.textContent = ((weatherDetailsArray[6]*9/5)+32)+'°C';
    }
    return bol
 }

 input.addEventListener('change', change);

 const span = document.createElement('span');
 span.className = 'span';

const tempSec1C = document.createElement('div');
tempSec1C.className = 'tempSec1C';

const tempSec2C = document.createElement('div');
tempSec2C.className = 'tempSec1C';

const transTitleSpa = document.createElement('span');
transTitleSpa.className = 'spanTitle';
transTitleSpa.textContent = 'Temprature';

label.appendChild(input);
label.appendChild(span);
tempSec1C.appendChild(label);

tempSec1C.appendChild(transTitleSpa);
tempContainer.appendChild(tempSec1C);
tempContainer.appendChild(tempSec2C);

let temp =0;
let cel = 0;

export function displayDetails(titleList, dataList){

    dataContainer.innerHTML = '';

   for(let i=0; i<dataList.length; ++i){
        if(i===dataList.length-1){
            dataContainer.appendChild(tempContainer);
            if(bol === true){
                tempSec2C.textContent = dataList[i]+'°F';
                temp = dataList[i]+'°F';
            }else{
                tempSec2C.textContent = ((dataList[i]*9/5)+32)+'°C';
                cel = ((dataList[i]*9/5)+32)+'°C';
            }
        }else{
            const dboxi = document.createElement('p');
            dboxi.className = 'dbox';
            dboxi.textContent = titleList[i]+dataList[i];
            dataContainer.appendChild(dboxi);
        }
   }
}

export const loadingLayoutContainer = document.createElement('div');
loadingLayoutContainer.className = 'loadingContainer';
 const loadingLayout = document.createElement('div');
loadingLayout.className = 'loadingLayout';
const loadingImg = document.createElement('img');
loadingImg.className = 'loadingImg';
loadingImg.src = gloading;

loadingLayout.appendChild(loadingImg);
loadingLayoutContainer.appendChild(loadingLayout);



