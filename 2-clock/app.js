const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){

    const now = new Date();

    const seconds = now.getSeconds();

    const secondsDegrees =(seconds*6)+90;
    console.log("second",seconds)
    console.log(secondsDegrees)
    secondHand.style.transform = `rotate(${secondsDegrees}deg`

    const mins = now.getMinutes();
    const minsDegrees = (mins*6) + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg`

    const hour = now.getHours();
    const hourDegrees = (hour*30)+ (minsDegrees /12) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg`

}

setInterval(setDate,1000)
