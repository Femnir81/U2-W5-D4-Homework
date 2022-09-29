function menu() {
    let ar = document.querySelectorAll('header p')
    for (i = 0; i < ar.length; i++) {
        let b = ar[i]
        b.classList.toggle('visible')
    }
}


const listaToDo = document.getElementById('lista-to-do')
let input = document.getElementById('input-text')

function aggiungiLista() {
   
    if (input.value !== "") {
        listaToDo.innerHTML += `<p class="impegni">${input.value}</p>`
        input.value = ""
    }
    else {
        alert('Non hai scritto nulla!')
    }
}

