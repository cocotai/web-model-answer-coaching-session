// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://lyric-api-403c0.firebaseio.com/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
//階段一
//使用迴圈將歌名印出
let navHtml = ''
for (const song of album.tracks) {
  //使用Bootstrap的pills
  navHtml += `
      <li>
        <a class="nav-link" data-toggle="pill" href="#" role="tab">${song}</a>
      </li>`
}
songList.innerHTML = navHtml


songList.addEventListener('click', (event) => {
  if (event.target.matches('.nav-link')) {
    const song = event.target.innerText
    //點擊時向 axios 發出請求
    axios.get(BASE_URL + `Adele/${song}.json`)
      .then(response => {
        const lyrics = response.data.lyrics
        lyricsPanel.innerHTML = `
          <h3>${song}</h3>
          <pre>${lyrics}</pre>
          `
      })
      .catch(error => console.log(error))
  }
})

//階段二：將每個功能透過函式包裝
// function displaySongList(album) {
//   let navHtml = ''
//   for (const song of album.tracks) {
//     navHtml += `
//       <li>
//         <a class="nav-link" data-toggle="pill" href="#" role="tab">${song}</a>
//       </li>`
//   }
//   songList.innerHTML = navHtml
// }

// function displayLyrics(song, lyrics) {
//   lyricsPanel.innerHTML = `
//     <h3>${song}</h3>
//     <pre>${lyrics}</pre>
//   `
// }

// songList.addEventListener('click', (event) => {
//   if (event.target.matches('.nav-link')) {
//     const song = event.target.innerText
//     axios.get(BASE_URL + `Adele/${song}.json`)
//       .then(response => {
//         const lyrics = response.data.lyrics
//         displayLyrics(song, lyrics)
//       })
//       .catch(error => console.log(error))
//   }
// })

// displaySongList(album)