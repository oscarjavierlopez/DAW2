const  img = document.querySelector('img');
img.style.position = 'absolute';

function handleMove(e){
    img.style.top = e.clientY + 'px';
    img.style.left =  e.clientX + 'px';
}
function handleClick(){
    let span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.top = img.style.top;
    span.style.left = img.style.left;
    span.innerText = '*';
    document.body.append(span);
}

window.addEventListener('mousemove', handleMove);
window.addEventListener('click', handleClick);
