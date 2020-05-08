export class Actores {
    Id:number;
    Nombre:string;
    Apellido:string;
    Sexo:string;
    FechaNacimiento:string;
    Foto:string;
    PaisOrigen:string;

    constructor(id:number, nombre:string,apellido:string, sexo:string,fecha_de_nacimiento:string,foto:string,pais:string){
        this.Id=id;
        this.Nombre=nombre;
        this.Apellido = apellido;
        this.Sexo= sexo;
        this.FechaNacimiento = fecha_de_nacimiento;
        this.Foto = "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg";
        this.PaisOrigen= pais;
    }
}