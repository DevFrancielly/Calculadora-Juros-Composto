document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const free = document.getElementById('free').value / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + free)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});