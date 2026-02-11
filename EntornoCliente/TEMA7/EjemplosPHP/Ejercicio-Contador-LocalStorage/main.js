if (!localStorage.getItem('usuario') && !localStorage.getItem('contador')) {
    let user = prompt('Introduce tu usuario');
    localStorage.setItem('usuario', user);
    localStorage.setItem('contador', 0);
}

document.getElementById('usuario').classList.remove('hidden');
document.querySelector('#usuario>span').innerHTML = localStorage.getItem('usuario');
document.querySelector('#contador>span').innerHTML = localStorage.getItem('contador');

document.getElementById('incrementar').addEventListener('click', (e) => {
    localStorage.setItem('contador', parseInt(parseInt(localStorage.getItem('contador')) + 1));
    document.querySelector('#contador>span').innerHTML = localStorage.getItem('contador');
});

document.getElementById('decrementar').addEventListener('click', (e) => {
    localStorage.setItem('contador', parseInt(localStorage.getItem('contador') - 1));
    document.querySelector('#contador>span').innerHTML = localStorage.getItem('contador');
});

document.getElementById('logOut').addEventListener('click', (e) => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('contador');
    document.querySelector('#usuario').classList.add('hidden');
    document.querySelector('#contador>span').innerHTML = 0;
});