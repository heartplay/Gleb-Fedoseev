
const inputElement = document.getElementById('notes-input')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = JSON.parse(localStorage.getItem('notes')) === null
    ? []
    : JSON.parse(localStorage.getItem('notes'))
//Получение заметок из localStorage, если заметок нет, создает пустой массив заметок

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    console.log(notes)
    localStorage.setItem("notes", JSON.stringify(notes));
    render()
    inputElement.value = ''
}
listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        localStorage.setItem("notes", JSON.stringify(notes)); 
        // Записывает заметку в localStorage
        render()
    }
}

// function getNoteTemplate(note, index) {
//     return ` 
//     <li class="note">
//     <span class="${note.completed ? 'complete' : ''}">${note.title}</span>
//     <span>
//     <span class="${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
//     <span class="remove" data-index="${index}" data-type="remove">&times;</span>
//     </span>
// </li>
// `
// }

function getNoteTemplate(note, index) {
    return ` 
    <li class="note">
    <div class="${note.completed ? 'complete' : ''}">${note.title}</div>
    <div class="buttons">
    <div class="${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</div>
    <div class="remove" data-index="${index}" data-type="remove">&times;</div>
    </div>
</li>
`
}