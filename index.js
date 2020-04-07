//const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'


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
    document.getElementById('weather').innerHTML=`<div> <i class="fa fa-cloud-rain"></i> <h3>${data.weather[0].main}</h3></div>`;
    //ocument.getElementById('weather').innerHTML=`<div> ${data.main.temp}</div>`;
    })
    

    // const weatherHTMLString = `<div class="col-sm-6 coll-md-4>
    // weather : ${weather}
    // <br>
    // wind : ${wind}
    // <br>
    // Clouds : ${clouds}</div>`;
    // document.getElementById('wheather').innerHTML =weatherHTMLString;
    // 

