$(document).on("ready", function(){

  var template = Handlebars.compile( $("#slide-template").html() )
  var slide = 0

  _.each(slides, function(slide){
    $("#container").append(template(slide))
  })
  
  $(window).on("keyup", function(evt){
    switch (evt.keyCode) {
      case 33: // left on mousey-clicker thing
      case 37: // left on keyboard
        backSlide()
        break
      case 34: // right on mousey-clicker thing
      case 39: // right on keyboard
        nextSlide()
        break
    }
  })

  $("body").on("click", function(evt){
    nextSlide()
  })

  $("code").on("click", function(evt){
    evt.preventDefault()
    return false
  })

  var backSlide = function() {
    if (slide > 0) {
      slide -= 1
    }
    else {
      slide = slides.length - 1
    }
    activateSlide()
  }

  var nextSlide = function() {
    if ((slide + 1) < slides.length) {
      slide += 1
    }
    else {
      slide = 0
    }
    activateSlide()
  }

  var activateSlide = function() {
    $(".slide").removeClass("active")
    $(".slide:eq(" + slide + ")").addClass("active")
  }

  activateSlide()

})