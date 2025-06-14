    const apiKey = 'c900986c61a5c7dbda552049512b14dd';

    async function getWeather() {
    const resultDiv = document.getElementById('result');
    const input = document.getElementById('city')
    console.log(input.value)
    let city = input.value

    // if (!city) {
    //   resultDiv.innerText = 'Por favor ingresa una ciudad.';
    //   return;
    // }

    try {
        resultDiv.innerText = 'Buscando...';

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
        );

        if (!response.ok) throw new Error('Ciudad no encontrada.');

        const data = await response.json();
        const { name, main, weather} = data;

        

        const sunrisetime = data.sys.sunrise
        const sunsettime = data.sys.sunset

        var datesunrise = new Date(sunrisetime * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        var datesunset = new Date(sunsettime * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

        


        resultDiv.innerHTML = `
        <p><strong>Ciudad:</strong> ${name}</p>
        <p><strong>Temperatura:</strong> ${main.temp}°C</p>
        <p><strong>Clima:</strong> ${weather[0].description}</p>
        <p><strong>Amanecera a las:</strong> ${datesunrise}</p>
        <p><strong>Anochecera a las:</strong> ${datesunset}</p>
        `;
    } 

    catch (error) {
        console.log(error)
        resultDiv.innerText = error.message;
    }
    }
