var name;
var questionCnt = 0;
var i; var e; var n; var s;var f; var t;var j;var p

function initSub(){//이름 날짜 정보 
  let url = new URL(location.href)
  let params = new URLSearchParams(url.search)
  name = params.get('name')
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
  let day = currentDate.getDate();
  let formattedDate = year + '년 ' + (month < 10 ? '0' : '') + month + '월 ' + (day < 10 ? '0' : '') + day + '일 ';
  $('.sub-section time').html(formattedDate)
}

function printQuetstion(question) {//질문출력
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
    typeSpeed: 70,
    cursorChar: '',
    loop: false,
    startDelay: 1000,
    onComplete: function() {printAnswerBtns(aArr[questionCnt])},
  })

  scrollDown()
}

function printAnswerBtns(answerData){
  $('.choice-btns').html(`
    <button class="choice1" value="y" data-category="${answerData.category}">${answerData.a1}</button>
    <button class="choice2" value="n" data-category="${answerData.category}">${answerData.a2}</button>
  `)
  $('.choice-btns button').click(function(){
    let choice = $(this).val()
    let category = $(this).attr('data-category')
    if(choice === 'y' && category ==='m') e++
    if(choice === 'n' && category ==='m') i++
    if(choice === 'y' && category ==='b') s++
    if(choice === 'n' && category ==='b') n++
    if(choice === 'y' && category ==='t') f++
    if(choice === 'n' && category ==='t') t++
    if(choice === 'y' && category ==='i') j++
    if(choice === 'n' && category ==='i') p++
    $('.choice-btns button').attr('disabled',true).stop().fadeOut()
    printAnswer($(this).text())
    questionCnt++
  })
}

function printAnswer(answer){
  $('ul.print-chat').append(`
    <li class="user">
      <figure class="user-box">
        <p class="answer"></p>
        <b class="user-name">
          <i class="fa-solid fa-paw"></i>
          <span class="name">${name}</span>
        </b>
      </figure>
    </li>
  `)

  var typed = new Typed('li.user:last-child .answer', {
    strings: [answer],
    typeSpeed: 70,
    cursorChar: '',
    loop: false,
    startDelay: 1000,
    onComplete: function() {
      setTimeout(function(){
        printQuetstion(qArr[questionCnt].question)
      },1000)
    },
  })

  scrollDown()
}

function scrollDown(){
  var scrollHeight = $('ul.print-chat').prop('scrollHeight')
  var ulHeight = $('ul.print-chat').innerHeight()
  var scrRange = scrollHeight - ulHeight
  document.querySelector('ul.print-chat').scrollTo({
    top: scrRange,
    behavior: 'smooth',
  })
}


$(function () {
  initSub()
  printQuetstion(qArr[questionCnt].question)
})






