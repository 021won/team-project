$(function(){
  $('.start button').click(function(e){
    e.preventDefault()
    let name = document.querySelector('.name').value
    location.href =`./sub.php?name=${name}`
  })
})
