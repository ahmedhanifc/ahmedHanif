const meow = document.querySelector(".meow-button")
const audio = document.querySelector('audio')

meow.addEventListener('click' , (e) => {

    if (!audio) return;
    audio.currentTime = 0;  
    audio.play()

})