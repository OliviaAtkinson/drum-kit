function playSound(keycode) {
    //new function, linking the parameter to the html.
    let audio = document.querySelector(`audio[data-keycode="${keycode}"]`);
    /*new variable audio, gueryselector searches the html and selects the query with
    the information that holds data about the data-keycode. */   
   
    audio.play();
    //plays the audio selected.
}
window.addEventListener('keydown', (event) =>{
    playSound(event.keyCode)
});
const keys = Array.from(document.querySelectorAll('.key'));

function playOnClick(element){
    /* new function, connecting the html data to the js data. */
    let keyCode = element.getAttribute("data-keycode");
    playSound(keyCode)
}
