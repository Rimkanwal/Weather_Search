const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
     e.preventDefault();
     const searchTermLat = form.elements.lat.value;
     const searchTermLong = form.elements.long.value;
     const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${searchTermLat}&longitude=${searchTermLong}&hourly=temperature_2m`);
     displayTime(res.data)
     displayTemperature(res.data)
     form.elements.query.value = '';
})


const displayTime = (time) => {
    for( let result of time) {
    const time = document.createElement('Time');
     time = (result.hourly.time);
     document.body.append(time)
    }
}

const displayTemperature = (temp) => {
    for( let result of temp) {
    const time = document.createElement('Temp');
     temp = (result.hourly.temperature_2m);
     document.body.append(temp)
    }
}


