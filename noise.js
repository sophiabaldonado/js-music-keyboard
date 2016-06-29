$(document).ready( function() {

  // play a note
  function playNote(note) {
    sounds.children("#" + note + "Audio")[0].load()
    sounds.children("#" + note + "Audio")[0].play()
  }

  // on clck
  var sounds = $("#audio_embeds")
  var container = $(".instrument")
  var buttons = container.children('button.note')

  buttons.click(function(event) {
    event.preventDefault()

    var button = $(this)
    var note = this.getAttribute("id")
    playNote(note)
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
    var note = keys[event.which]
    playNote(note)
  })
})
