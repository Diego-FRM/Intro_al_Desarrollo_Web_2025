const $ = (q) => document.querySelector(q);
const cont = $('#resultado');

function pintaTarjeta(artist) {
  let img = "";
  if (artist.images && artist.images.length > 0) {
    img = artist.images[0].url;
  }

  let seguidores = 0;
  if (artist.followers && artist.followers.total) {
    seguidores = new Intl.NumberFormat("es-MX").format(artist.followers.total);
  }

  let generos = "Sin géneros";
  if (artist.genres && artist.genres.length > 0) {
    generos = artist.genres.slice(0, 8).join(" • ");
  }

  cont.innerHTML = `
  <div class="artist-card p-3 mb-3">
    <div class="row g-3 align-items-center">
      <div class="col-sm-3 text-center">
        <img src="${img}" alt="${artist.name}" class="artist-img img-fluid" />
      </div>
      <div class="col-sm-9">
        <h2 class="artist-name mb-2">${artist.name}</h2>
        <p class="mb-1 text-muted">Seguidores: <strong>${seguidores}</strong></p>
        <p class="mb-2 text-muted">Popularidad: <strong>${artist.popularity ?? 0}</strong>/100</p>
        <p class="mb-0"><small>${generos}</small></p>
        <a class="btn btn-sm btn-outline-success mt-3" href="${artist.external_urls?.spotify ?? '#'}" target="_blank" rel="noopener">
          Ver en Spotify
        </a>
      </div>
    </div>
  </div>
`;
}

function setLoading() {
  cont.innerHTML = `
    <div class="d-flex align-items-center gap-3 text-muted">
      <div class="spinner-border text-success" role="status"></div>
      <span>Cargando…</span>
    </div>`;
}

function setError(msg) {
  cont.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error:</strong> ${msg}</div>`;
}

async function obtenArtista(id, token) {
  if (!token) return setError('Falta el access token.');
  if (!id)    return setError('Falta el Artist ID.');

  setLoading();
  try {
    const res = await fetch(`https://api.spotify.com/v1/artists/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status} ${text}`);
    }
    const data = await res.json();
    pintaTarjeta(data);
  } catch (err) {
    setError(err.message);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  $('#btnCargar').addEventListener('click', () => {
    const token = $('#token').value.trim();
    const id = $('#artistId').value.trim();
    obtenArtista(id, token);
  });
});
