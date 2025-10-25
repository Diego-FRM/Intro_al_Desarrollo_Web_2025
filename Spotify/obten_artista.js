async function ObtenArtistaFijo() {
    const url = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
    const args = {
        method: 'GET',
        headers: {
            Authorization: 
            'Bearer BQAv_01CF02QD1CEs3-manU78Z3wSISqJjLMhD1U8OKcwRoihFgujXuJ2C9x9J-xaRYJhnVOuOpHq6lZLUUEe1JoQEtTLpAIzTcUoAgeeEJ-Q1phDVuZEWSdm6ogoSfyPqwxSFuduRo'
        },
    };
    
    const response = await fetch(url, args);
    console.log(response);
    const data = await response.json();
    console.log(data);
}
// Como usamos await la funcion tiene que ser async ya que devuelve una promesa