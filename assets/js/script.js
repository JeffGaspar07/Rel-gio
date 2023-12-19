const horas = document.getElementById('Horas');
const Minutos = document.getElementById('Minutos');
const Segundos = document.getElementById('Segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let Hr = dateToday.getHours()
    let Min = dateToday.getMinutes()
    let Seg = dateToday.getSeconds()

    if(Hr < 10) Hr = '0' + Hr;

    if(Min < 10) Min = '0' + Min;

    if(Seg < 10) Seg = '0' + Seg;

    horas.textContent = Hr;
    Minutos.textContent = Min;
    Segundos.textContent = Seg;
})
