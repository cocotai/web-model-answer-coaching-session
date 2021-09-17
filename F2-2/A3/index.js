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
// 1. 註解斜線後面建議空一格，比較符合 javascript standard style
// 階段一
// 使用迴圈將歌名印出
let navHtml = ''
for (const song of album.tracks) {
  /* 2. 滿多人會不清楚 pills 的用法（特別是 data-toggle），也許可以再多一個前置階段，不使用 data-toggle，而是單純在監聽器中操作 classList，
  手動處理 active，先讓學生實際理解與 pills 有關的 class，下個階段再加入 data-toggle，讓學生理解兩者之間的不同，進而理解 data-toggle 的用途。
  （但是也有可能引發學生直接放棄理解 data-toggle 的可能性，也許需要再討論）
  */
  navHtml += `
      <li>
        <a class="nav-link" href="#" role="tab">${song}</a>
      </li>`
}
songList.innerHTML = navHtml


// 3. 箭頭函式單一參數時 () 可寫可不寫，但整份程式碼中建議統一（event 有括號，response、error 沒括號），減少學生疑惑的可能性，階段二亦同。
songList.addEventListener('click', event => {
  const activeItem = document.getElementsByClassName('active')
  for (let item of activeItem) {
    item.classList.remove('active')
  }
  if (event.target.matches('.nav-link')) {
    event.target.classList.add('active')
    const song = event.target.innerText
    // 點擊時向 axios 發出請求
    // 4. 建議統一使用 Template literals，加強學生印象，階段二亦同
    axios.get(`${BASE_URL}Adele/${song}.json`)
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

// // 階段二：將每個功能透過函式包裝
// function displaySongList(album) {
//   let navHtml = ''
//   // 5. 階段二可以額外使用 forEach，方便學生觀摩不同做法
//   // 新增forEach用法
//   album.tracks.forEach(song => {
//     navHtml += `
//       <li>
//         <a class="nav-link" href="#" role="tab">${song}</a>
//       </li>`
//   });
//   songList.innerHTML = navHtml
// }

// function displayLyrics(song, lyrics) {
//   lyricsPanel.innerHTML = `
//     <h3>${song}</h3>
//     <pre>${lyrics}</pre>
//   `
// }

// songList.addEventListener('click', event => {
//   const activeItem = document.getElementsByClassName('active')
//   for (let item of activeItem) {
//     item.classList.remove('active')
//   }
//   if (event.target.matches('.nav-link')) {
//     event.target.classList.add('active')
//     const song = event.target.innerText
//     axios.get(`${BASE_URL}Adele/${song}.json`)
//       .then(response => {
//         const lyrics = response.data.lyrics
//         displayLyrics(song, lyrics)
//       })
//       .catch(error => console.log(error))
//   }
// })

// displaySongList(album)

// // 階段三：使用BootStrap的Pills
// function displaySongList(album) {
//   let navHtml = ''
//   // 5. 階段二可以額外使用 forEach，方便學生觀摩不同做法
//   // 新增Bootstrap pills用法
//   album.tracks.forEach(song => {
//     navHtml += `
//       <li>
//         <a class="nav-link" data-toggle="pill" href="#" role="tab">${song}</a>
//       </li>`
//   });
//   songList.innerHTML = navHtml
// }

// function displayLyrics(song, lyrics) {
//   lyricsPanel.innerHTML = `
//     <h3>${song}</h3>
//     <pre>${lyrics}</pre>
//   `
// }

// songList.addEventListener('click', event => {
//   if (event.target.matches('.nav-link')) {
//     const song = event.target.innerText
//     axios.get(`${BASE_URL}Adele/${song}.json`)
//       .then(response => {
//         const lyrics = response.data.lyrics
//         displayLyrics(song, lyrics)
//       })
//       .catch(error => console.log(error))
//   }
// })

// displaySongList(album)