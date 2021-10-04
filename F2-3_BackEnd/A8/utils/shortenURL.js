module.exports = origin => {
  const short = Math.random().toString(36).slice(-5)
  return short
}

//Math.random()會隨機產出 0~0.999..之間的數字
//將這一串數字透過toString()並使用36進位來產出含有英文字母跟數字的亂數字串
//將字串以slice()來擷取5長度的字串
