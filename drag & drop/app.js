const item = document.querySelector('.item');
const plaseholders = document.querySelectorAll('.placeholder');

for (const plase of plaseholders) {
    plase.addEventListener('dragover', dragover);
    plase.addEventListener('dragenter', dragenter);
    plase.addEventListener('dragleave', dragleave);
    plase.addEventListener('drop', drop);
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(()=>e.target.classList.add('hide'),0);
}

function dragend(e) {
    e.target.classList.remove('hold','hide');
}

function dragover(eve) {
    eve.preventDefault();
}

function dragenter(eve) {
    eve.target.classList.add('hovered');
}

function dragleave(eve) {
    eve.target.classList.remove('hovered');
}

function drop(eve) {
    eve.target.append(item);
    eve.target.classList.remove('hovered');
}