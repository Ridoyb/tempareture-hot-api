const API_KEY = `8ff0cb3d438d8686d1de5bc779ad4285`;

const loadTemperature= city =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)

    .then (res=>res.json())
    .then (data=> displayTempareture(data));
}

const displayTempareture= data=>{
    // const tempareture=document.getElementById('tempareture');
    // console.log(data.main.temp);
    setInnerTextByID('tempareture',data.main.temp);
    setInnerTextByID('condition',data.weather[0].main);
    console.log(data.weather[0].main);
    tempareture.innerText=data.main.temp;
}

const setInnerTextByID=(id,text) =>{
    const tempareture=document.getElementById(id);
    tempareture.innerText=text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField=document.getElementById('search-field');
    const city= searchField.value;
    //set city
    document.getElementById('city').innerText=city;
    loadTemperature(city);
})

loadTemperature('dhaka');