
window.addEventListener("keydown",function (e){
    const auido = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!auido) return;
    auido.currentTime = 0; //tekrar tekrar o tuşu baştan çalabilmek için.
    auido.play();
    key.classList.add('playing')
    document.body.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
});


function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
    document.body.style.backgroundColor=null
}
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend',removeTransition)); //bir css transition bitince tetiklen

