const  img = document.querySelector('img');
img.style.position = 'absolute';

function handleMove(e){
    img.style.top = e.clientY + 'px';
    img.style.left =  e.clientX + 'px';
}
function handleClick(e){
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.top = e.clientY + 'px';
    span.style.left = e.clientX + 'px';
    span.innerText = '*';
    document.body.append(span);
}

window.addEventListener('mousemove', handleMove);
window.addEventListener('click', handleClick);
