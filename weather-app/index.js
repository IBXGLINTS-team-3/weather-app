//const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'

// fetch('')
//     .then(response => {
//         //console.log(response.json());
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
    const serverWheather = 'http://api.openweathermap.org/';
    fetch(`${serverWheather}data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

    $('.slider').glide({
        autoplay: false,
        arrowsWrapperClass: 'slider-arrows',
        arrowRightText: '>',
        arrowLeftText: '<'
      });
