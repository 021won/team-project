$(function(){
  function getWindowInfo (){
      window.scry = $(window).scrollTop()
      window.scrx = $(window).scrollLeft()
      window.winh = $(window).height()
      window.winx = $(window).width()
 //requestAnimationFrame
  } //fn
  getWindowInfo ()
  $(window).scroll(function(){
    getWindowInfo ()
  }).resize(function(){
    getWindowInfo ()
  })
})