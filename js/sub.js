$(function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
  var day = currentDate.getDate();
  var formattedDate = year + '년 ' + (month < 10 ? '0' : '') + month + '월 ' + (day < 10 ? '0' : '') + day + '일 ';
  $('.sub-section div.print').html(formattedDate)
})