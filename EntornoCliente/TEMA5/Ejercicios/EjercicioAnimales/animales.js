let EffectClasses = ['rota', 'grande', 'pequenio', 'baja', 'def'];
function handleClick(event) {
    event.target.classList = ['animal'];
    event.target.classList.add(EffectClasses[Math.floor(Math.random() * EffectClasses.length)]);
    source.src = `sounds/${event.target.id}.wav`;
    audio.load();
    audio.play();
}

let body = document.querySelector('body');

let animalsNames = ['cerdo', 'gato', 'perro', 'vaca', 'zorro',
    'burro', 'rana', 'leon'];
let animalsDiv = document.createElement('div');
animalsDiv.id = 'animales';
animalsNames.forEach((animal) => {
    let animalDiv = document.createElement('div');
    animalDiv.id = animal;
    animalDiv.classList.add('animal');
    animalDiv.style.backgroundImage = `url('images/${animal}.png')`;
    animalDiv.addEventListener('click', handleClick);
    animalsDiv.append(animalDiv);
});

let audio = document.createElement('audio');
audio.id = "audio";
audio.preload = "auto";
let source = document.createElement('source');
source.id = "source";
source.type = "audio/wav"
audio.append(source);

body.append(animalsDiv);
body.append(audio);