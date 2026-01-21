const selectParis = document.getElementById('paris');
const selectBerlin = document.getElementById('berlin');
const selectLondres = document.getElementById('londres');
const selectMadrid = document.getElementById('madrid');
const selectRoma = document.getElementById('roma');

selectParis.addEventListener('change', () => {
    if(selectParis.value === selectBerlin.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectBerlin.value = "nada";
    }

    if(selectParis.value === selectLondres.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectLondres.value = "nada";
    }

    if(selectParis.value === selectMadrid.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectMadrid.value = "nada";
    }

    if(selectParis.value === selectRoma.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectRoma.value = "nada";
    }
});

selectBerlin.addEventListener('change', () => {
    if(selectBerlin.value === selectParis.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectParis.value = "nada";
    }

    if(selectBerlin.value === selectLondres.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectLondres.value = "nada";
    }

    if(selectBerlin.value === selectMadrid.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectMadrid.value = "nada";
    }

    if(selectBerlin.value === selectRoma.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectRoma.value = "nada";
    }
});

selectLondres.addEventListener('change', () => {
    if(selectLondres.value === selectParis.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectParis.value = "nada";
    }

    if(selectLondres.value === selectBerlin.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectBerlin.value = "nada";
    }

    if(selectLondres.value === selectMadrid.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectMadrid.value = "nada";
    }

    if(selectLondres.value === selectRoma.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectRoma.value = "nada";
    }
});

selectMadrid.addEventListener('change', () => {
    if(selectMadrid.value === selectParis.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectParis.value = "nada";
    }

    if(selectMadrid.value === selectBerlin.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectBerlin.value = "nada";
    }

    if(selectMadrid.value === selectLondres.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectLondres.value = "nada";
    }

    if(selectMadrid.value === selectRoma.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectRoma.value = "nada";
    }
});

selectRoma.addEventListener('change', () => {
    if(selectRoma.value === selectParis.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectParis.value = "nada";
    }

    if(selectRoma.value === selectBerlin.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectBerlin.value = "nada";
    }

    if(selectRoma.value === selectLondres.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectLondres.value = "nada";
    }

    if(selectRoma.value === selectMadrid.value){
        alert('No puedes poner el mismo orden a dos ciudades');
        selectMadrid.value = "nada";
    }
});