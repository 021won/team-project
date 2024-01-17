let name;
let questionCnt = 0;


$(function () {//이름 날짜 정보 
  let url = new URL(location.href)
  let params = new URLSearchParams(url.search)
  name = params.get('name')
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
  let day = currentDate.getDate();
  let formattedDate = year + '년 ' + (month < 10 ? '0' : '') + month + '월 ' + (day < 10 ? '0' : '') + day + '일 ';
  $('.sub-section time').html(formattedDate)
})

$(function () {
  function printQuetstion(question) {
    $('ul.print-chat').append(`
      <li class="host">
        <figure class="host-box">
          <img src="./img/main-logo1.png" alt="">
          <p class="question"></p>
        </figure>
      </li>
    `)

    var typed = new Typed('li.host:last-child .question', {
      strings: [question],
      typeSpeed: 100,
      cursorChar: '',
      loop: false,
      startDelay: 1000,
    })

    questionCnt ++
  }
  printQuetstion('질문입니다...')
})


