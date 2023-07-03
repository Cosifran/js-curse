class Estudiante {
    nombre;
    asignatura = ['Javascript', 'HTML', 'CSS'];

    constructor(nombre){
        this.nombre = nombre;
    }

    getDatos(){
        const objet= {
            "Nombre":this.nombre,
            "Asignaturas":this.asignatura
         };
    
         return objet;
        }
}

const newEstudent = new Estudiante('Julian');

console.log(newEstudent.getDatos().nombre);