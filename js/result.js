$(function(){
  function initResult(){
    var url = new URL(location.href)
    var params = new URLSearchParams(url.search)
    var mbti = params.get('mbti')
    $('.dog-img').attr('src',`./img/result/${mbti}.png`)
    $('.save').attr('href',`./img/result/${mbti}.png`)
  }
  initResult()
})