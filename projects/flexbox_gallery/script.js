const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open-active');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.properyName);
    if(e.properyName.inclues('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));