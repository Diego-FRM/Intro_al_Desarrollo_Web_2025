async function ObtenArtistaFijo() {
    const url = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
    const args = {
        method: 'GET',
        headers: {
            Authorization: 
            'Bearer BQC7Og5wmhgv1u1JLZ8CZUV9lon0ySegZVys0XZAQ8an6WVgx5-kAuDrzOPVWH_dW4B6esCwtv3Xyrn5bmIDnf1JbQ7d_hVbtOMmpkeQxa7pg62dHn_ZsyVoxwIMsdIUccpn_z93OFU'
        },
    };
    
    const response = await fetch(url, args);
    console.log(response);
    const data = await response.json();
    console.log(data);
}
// Como usamos await la funcion tiene que ser async ya que devuelve una promesa