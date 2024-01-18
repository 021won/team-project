$(function () {
  function scrollDown() {
    var scrollHeight = $('ul.print-chat').prop('scrollHeight')
    var ulHeight = $('ul.print-chat').innerHeight()
    var scrRange = scrollHeight - ulHeight
    document.querySelector('ul.print-chat').scrollTo({
      top: scrRange,
      behavior: 'smooth',
    })
  }

  var name;
  var questionCnt = 0;
  var mbti = []; var i = 0; var e = 0; var n = 0; var s = 0; var f = 0; var t = 0; var j = 0; var p = 0;


  function initSub() {//이름 날짜 정보 
    let url = new URL(location.href)
    let params = new URLSearchParams(url.search)
    name = params.get('name')
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
    let day = currentDate.getDate();
    let formattedDate = year + '년 ' + (month < 10 ? '0' : '') + month + '월 ' + (day < 10 ? '0' : '') + day + '일 ';
    $('.sub-section time').html(formattedDate)
    $('.choice-btns').html('<img class="running-dog" src="./img/loading-white.gif" alt>')
    //유입경로 체크할 것
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

    scrollDown()
    var typed
    if (questionCnt < qArr.length) {
      typed = new Typed('li.host:last-child .question', {
        strings: [question],
        typeSpeed: 70,
        cursorChar: '',
        loop: false,
        startDelay: 1000,
        onComplete: function () {
          printAnswerBtns(aArr[questionCnt])
          scrollDown()
        },
      })
    } else {
      typed = new Typed('li.host:last-child .question', {
        strings: ['질문이 끝났습니다. 잠시 기다려주시면 결과가 출력됩니다'],
        typeSpeed: 70,
        cursorChar: '',
        loop: false,
        startDelay: 1000,
        onComplete: function () {
          setTimeout(function () {
            location.href = `./result.php?mbti=${mbti}`
          }, 1000)
        },
      })
    }

  }

  function printAnswerBtns(answerData) {
    $('.choice-btns').html(`
      <button class="choice1" value="y" data-category="${answerData.category}" type="button">${answerData.a1}</button>
      <button class="choice2" value="n" data-category="${answerData.category}" type="button">${answerData.a2}</button>
    `)
    $('.choice-btns button').click(function () {
      let choice = $(this).val()
      let category = $(this).attr('data-category')
      if (choice === 'y' && category === 'm') e++
      if (choice === 'n' && category === 'm') i++
      if (choice === 'y' && category === 'b') s++
      if (choice === 'n' && category === 'b') n++
      if (choice === 'y' && category === 't') f++
      if (choice === 'n' && category === 't') t++
      if (choice === 'y' && category === 'i') j++
      if (choice === 'n' && category === 'i') p++
      if (questionCnt === qArr.length - 1) {
        mbti[0] = e > i ? 'e' : 'i'
        mbti[1] = s > n ? 's' : 'n'
        mbti[2] = f > t ? 'f' : 't'
        mbti[3] = j > p ? 'j' : 'p'
        mbti = mbti.join('')
      }
      $('.choice-btns button').attr('disabled', true).stop().fadeOut(function () {
        $('.choice-btns').html('<img class="running-dog" src="./img/loading-white.gif" alt>')
      })
      printAnswer($(this).text())
      questionCnt++
    })
  }

  function printAnswer(answer) {
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

    scrollDown()
    var typed = new Typed('li.user:last-child .answer', {
      strings: [answer],
      typeSpeed: 70,
      cursorChar: '',
      loop: false,
      startDelay: 1000,
      onComplete: function () {
        scrollDown()
        setTimeout(function () {
          if (questionCnt < qArr.length) printQuetstion(qArr[questionCnt].question)
          else printQuetstion()
        }, 1000)
      },
    })

  }

  initSub()
  printQuetstion(qArr[questionCnt].question)
})







