// const form = document.getElementById("form");
// const search = document.getElementById("search");
// const result = document.getElementById("result");
// const more = document.getElementById("more");

// const apiURL = "https://api.lyrics.ovh";


const apiURL = 'https://api.lyrics.ovh';
document.getElementById('searchBtn')
.addEventListener('click', () => {
    const searchInput = document
    .getElementById('searchInput').value;

    if (searchInput !== '') {
        showLoading();
        seachFn(searchInput);
    } else {
        alert('Please enter a song or artist name.');
    }
});
document.getElementById('clearBtn').
addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});
document.getElementById('results')
.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('back-btn')) {
        showResFn();
    } else if (target.classList
    .contains('lyrics-btn')) {
        const artist = target
        .getAttribute('data-artist');
        const title = target
        .getAttribute('data-title');
        apiGetFn(artist, title);
    }
});
function seachFn(query) {
    fetch(`${apiURL}/suggest/${query}`)
        .then(response => response.json())
        .then(data => showFn(data))
        .finally(() => loadFn());
}
function showFn(data) {
    const resultsContainer = document
    .getElementById('results');
    resultsContainer.innerHTML = '';

    if (data.total > 0) {
        data.data.slice(0, 6).forEach(song => {
            const card = document.createElement('div');
            card.classList.add('animate__animated',
            'animate__fadeIn', 'result-card');

            card.innerHTML = `
                <h3>${song.title}</h3>
                <p>${song.artist.name}</p>
                <button class="lyrics-btn" 
                data-artist="${song.artist.name}"
                data-title="${song.title}">
                Get Lyrics
                </button>
                <button class="back-btn" 
                style="display: none;">Back</button>
            `;

            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML =
        '<p>No results found.</p>';
    }
}
function apiGetFn(artist, title) {
    showLoading();
    const encodedTitle = encodeURIComponent(title);
    fetch(`${apiURL}/v1/${artist}/${encodedTitle}`)
        .then(response => response.json())
        .then(data => disResFn(data, title, artist))
        .finally(() => loadFn());
}
function disResFn(data, title, artist) {
    const resultsContainer = document
    .getElementById('results');
    resultsContainer.innerHTML = '';

    const resCard = document
    .createElement('div');
    resCard.classList.add
   
    (
      'animate__animated', 
    'animate__fadeIn', 
    'result-card'
    )

    if (data.lyrics) {
        resCard.innerHTML = `
            <h3>${title}</h3>
            <p>${artist}</p>
            <div class="lyrics-container">
            ${formatFn(data.lyrics)}</div>
            <button class="back-btn">Back</button>
        `;
        bckFn(resCard);
    } else {
        resCard.innerHTML = 
        '<p>No lyrics found for this song.</p>';
    }
    resultsContainer
    .appendChild(resCard);
}
function formatFn(lyrics) {
    return lyrics.split('\n').map(line => `<p>${line}</p>`)
    .join('');
}
function showLoading() {
    document.getElementById('loadingContainer')
    .style.display = 'flex';
}
function loadFn() {
    document.getElementById('loadingContainer')
    .style.display = 'none';
}
function bckFn(card) {
    const bckBtn = card.querySelector('.back-btn');
    bckBtn.style.display = 'block';
}
function showResFn() {
    const resCon = document
    .getElementById('results');
    resCon.innerHTML = '';
    seachFn(document
    .getElementById('searchInput').value);
}