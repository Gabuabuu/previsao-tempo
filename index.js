const key = "4ee5aaf8a8e6dbd14fe485c066db2f75";

function mostrarDados(dados) {
  document.querySelector('.clima-titulo').innerHTML = dados.name;
  document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`;
  document.querySelector('.clima').innerHTML = `${dados.weather[0].description}`;
  document.querySelector('.clima-icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`

  
  console.log(dados)
}

async function procurarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  mostrarDados(dados)
}

function buscar() {
  const cidade = document.querySelector('.buscar-cidade').value;
  
  procurarCidade(cidade)
}
