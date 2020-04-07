//const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'


// const serverWheather = 'http://api.openweathermap.org/';
// fetch(`${serverWheather}data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d`)
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })


// const addWheather = (item, nomor) => {
//     const {
//         weather,clouds
//     } = item;

//     const stringHTML = `${weather} ${clouds}  `;
//     document.getElementById('wheather').innerHTML = stringHTML;

// }

    const serverWheather = 'http://api.openweathermap.org/';
    fetch(`${serverWheather}data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    
    
    document.getElementById("city").innerHTML = `${data.name}`
    document.getElementById('weather').innerHTML=`<div> <i class="fa fa-cloud" aria-hidden="true"></i><h3>${data.weather[0].main}</h3></div>`;
    document.getElementById('temp').innerHTML=`<div> Temperature  : ${data.main.temp}</div>`;
    document.getElementById('speed').innerHTML= `<div> speed winds :${data.wind.speed} m/s</div>`
    })
