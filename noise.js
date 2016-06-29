$(document).ready( function() {

  // on clck
  var sounds = $("#audio_embeds")
  var container = $(".instrument")
  var buttons = container.children('button.note')

  buttons.click(function(event) {
    event.preventDefault()

    var button = $(this)
    var id = this.getAttribute("id")
    sounds.children("#" + id + "Audio")[0].load()
    sounds.children("#" + id + "Audio")[0].play()
  })

  // on button press
  var keys = {
    "49": "c", "50": "d",
    "51": "e", "52": "f",
    "53": "g", "54": "a",
    "55": "b", "67": "c",
    "68": "d", "69": "e",
    "70": "f", "71": "g",
    "65": "a", "66": "b"
  }

  $(document).keydown(function(event) {
    var id = keys[event.which]
    sounds.children("#" + id + "Audio")[0].load()
    sounds.children("#" + id + "Audio")[0].play()
  })
})
