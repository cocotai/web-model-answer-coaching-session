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
// 階段一
// 使用迴圈將歌名印出
let navHtml = ''
for (const song of album.tracks) {
  navHtml += `
      <li>
        <a class="nav-link" href="#" role="tab">${song}</a>
      </li>`
}
songList.innerHTML = navHtml

songList.addEventListener('click', event => {
  // 建議 1. 教材提到 getElementsBy* 是早期用法，為了避免學生困惑，建議改用 querySelector。另外只指定 active 的話，頁面中如果有其他 active 的元素，也會一起被改掉，建議選擇器改用 '#song-list .active' 指定 songList 裡 active 的項目。
  const activeItem = document.getElementsByClassName('active')
  // 建議 2. 理論上找到的東西只會有一個，不需要用到迴圈。不過由於第一次按的時候沒有人是 active 的，使用 querySelector 會回傳 null，所以需要先判斷是否存在回傳值後再 remove，階段二亦同。（我猜目前的寫法是因應 getElementsByClassName 而做的對策，這個做法找不到時會回傳空的 HTMLCollection 而不是 null，所以即使用迴圈跑空集合也不會發生錯誤。）
  for (let item of activeItem) {
    item.classList.remove('active')
  }
  if (event.target.matches('.nav-link')) {
    event.target.classList.add('active')
    const song = event.target.innerText
    // 點擊時向 axios 發出請求
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

// // 階段三：使用Bootstrap的Pills
// function displaySongList(album) {
//   let navHtml = ''
//   // 新增Bootstrap pills用法
//   // 建議 3. 可以在註解加上怎麼找到 data-toggle 的方法，例如在 pills 同個頁面下方的 Using data attributes 小標題裡之類的，引導學生自行查找閱讀。
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