$(function(){
  let url = new URL(location.href)
  let params = new URLSearchParams(url.search)
  console.log(params);
  let name = params.get('name')
  $('.user-name .name').html(name)

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
  let day = currentDate.getDate();
  let formattedDate = year + '년 ' + (month < 10 ? '0' : '') + month + '월 ' + (day < 10 ? '0' : '') + day + '일 ';
  $('.sub-section div.print').html(formattedDate)

})



