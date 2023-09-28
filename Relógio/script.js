const hora = document.querySelector('#hora')
const min = document.querySelector('#min')
const seg = document.querySelector('#seg')

setInterval(() =>{
    let date= new Date()
    let dhora = date.getHours()
    let dmin = date.getMinutes()
    let dseg = date.getSeconds()

    hora.innerHTML = `${formatTime(dhora)}`
    min.innerHTML = `${formatTime(dmin)}`
    seg.innerHTML = `${formatTime(dseg)}`
}, 1000)

function formatTime(time){
    return time < 10 ? '0' + time: time
}