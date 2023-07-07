const secciones = document.querySelectorAll('.seccion');
const parrafos = document.querySelectorAll('.parrafo');
const deleteS = document.querySelector('.secciondelete');
const imagenBorrar = deleteS.querySelector('img');

parrafos.forEach( parrafo => {
    parrafo.addEventListener('dragstart', event => {
        parrafo.classList.add('dragging');
        event.dataTransfer.setData('text/plain', event.target.id);

        parrafo.addEventListener("dragend", () => {
            // console.log("He terminado de arrastrar")
            parrafo.classList.remove("dragging");
        });
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy"; // copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    })
})


    deleteS.addEventListener('dragover', event => {
        event.preventDefault();
    });

    deleteS.addEventListener('drop', event => {
        const idParrafo = event.dataTransfer.getData('text/plain');

        const elementoArrastrado = document.getElementById(idParrafo);
        if (elementoArrastrado && event.target === imagenBorrar){
            elementoArrastrado.remove();
        }
    });

