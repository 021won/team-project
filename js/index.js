
$(function(){
  $('.main-section').submit(function(e){
    e.preventDefault()
    var name = $('.name').val()
    location.href =`./sub.php?name=${name}`
  })
})
