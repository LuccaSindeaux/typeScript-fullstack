interface IAdress{
    street: string;
    number:number;
    city:string;
    zip?:string;
}

interface IUser{
    readonly id: number;
    name:string;
    email:string;
    adress:IAdress;
}

const student: IUser = {
    id: 1001,
    name: "Lucca",
    email: "lucca@email.com",
    adress:{
        street: "Flores",
        number: 761,
        city: "Porto Alegre",
        zip: "789654213"
    }
};

console.log(student);

interface IStudent extends IUser{
    registration:string;
    year: number;
}

const student2: IStudent = {
    id: 1002,
    name: "Lisiane",
    email: "lisiane@email.com",
    registration: "06071998",
    year: 3,
    adress:{
        street: "Pinheiro",
        number: 456,
        city: "Porto Alegre",
        //zip opcional
    }
}

console.log(student2);