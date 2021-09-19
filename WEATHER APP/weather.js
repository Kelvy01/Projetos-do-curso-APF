const api = {
  key: "fd5754ec",
  base: "https://api.hgbrasil.com/weather",
  description: "pt",
  temp: "metric"
}

window.addEventListener('load', () => {

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  }

  else {
    alert('Navegador nao suporta esta aplicacao');
  }

  function setPosition (position) {

    console.log(position)
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    coordsResult(lat, lon);
  }

  function showError(Error) {
    alert('erro: $(error.message)');
  }
})

function coordsResult(lat, lon) {
  fetch(`${api.base}weather?lat=${lat}&lon=${lon}&description=${api.description}&temp=${api.temp}&APPID=${api.key}`)
  .then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json-cors();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResults(response)
});
}
