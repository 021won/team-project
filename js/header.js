$(function(){
  var url = location.href
  window.addEventListener('pageshow', e => {//뒤로가기
    if (e.persisted || (window.performance && window.performance.navigation.type == 2)) {
      alert('저희 사이트에서는 뒤로가기 기능을 사용하실 수 없습니다.\n첫페이지로 이동합니다');
      location.href ='./index.php'
    }
    if(!document.referrer && (url.includes('index')||url.includes('sub')||url.includes('result'))){
      alert('정상적인 접속이 아닙니다.\n첫페이지로 이동합니다');
      location.href ='./index.php'
    }
  })

})