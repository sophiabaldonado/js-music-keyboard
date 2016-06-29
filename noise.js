$(document).ready( function() {
  sounds = $("#audio_embeds")
  container = $(".instrument")
  buttons = container.children('button.note')

  buttons.click(function(event) {
    event.preventDefault()

    var button = $(this)
    id = this.getAttribute("id")
    sounds.children("#" + id + "Audio")[0].load()
    sounds.children("#" + id + "Audio")[0].play()
  })
})
