export class Actores {
    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fecha_de_nacimiento:string;
    foto:string;
    pais_origen:string;

    constructor(id:number, nombre:string,apellido:string, sexo:string,fecha_de_nacimiento:string,foto:string,pais:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido = apellido;
        this.sexo= sexo;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.foto = "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg";
        this.pais_origen= pais;
    }
}