const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}
for (const i of placeholders) {
    i.addEventListener('dragover', dragOver)
    i.addEventListener('dragenter', dragEnter)
    i.addEventListener('dragleave', dragLeave)
    i.addEventListener('drop', dragDrop)

}


function dragEnd(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    event.target.classList.remove('hovered')

}

function dragDrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}