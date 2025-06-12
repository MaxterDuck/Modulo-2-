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

    

    let sunstetoday = data.sys.sunset
    
    console.log(sunstetoday)
    let hora =  Date(sunstetoday)


    const unixTimestamp = sunstetoday;
    const date = new Date(unixTimestamp * 1000);

    console.log(date.toString());
    console.log(date);

    




    



    resultDiv.innerHTML = `
      <p><strong>Ciudad:</strong> ${name}</p>
      <p><strong>Temperatura:</strong> ${main.temp}°C</p>
      <p><strong>Clima:</strong> ${weather[0].description}</p>
      <p><strong>Anochecerá a las:</strong> ${date}</p>
      
    `;
  } 
  
  catch (error) {
    console.log(error)
    resultDiv.innerText = error.message;
  }
}


