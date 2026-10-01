let isActive: boolean = true;
let age: number = 19;
let price:number = 13.90 ;
let product: string = "pastel";

let phrase: string = `Olá, o valor do produto ${product} é R$ ${price}.`;

console.log(phrase);

// Funções

// Função básica, string retorna string
function greeting( name:string ):string{
    return `Olá ${name}`;
}

console.log(greeting("Ana"));

// Função level 2, dois parametros, um retorno
function currencyFormatter( value:number, currency:string = "R$"): string{
    return `${currency} ${value.toFixed(2)}`;
}

console.log(currencyFormatter(199.90));
console.log(currencyFormatter(199.90, "US$"));

// função level 3, cria um tipo próprio e depois retorna vazio

type StatusOrder = "billed" | "paid" | "canceled" ;

function updateStatus( status: StatusOrder ): void{
    console.log( `New status: ${status}.` );
}

updateStatus("paid");

// Função level 4, o parâmetro poder múltiplos tipos, e a função deve prever isto

function calcLength( input:string | number ):number{
    if(typeof input === "string"){
        return input.length;
    }
    return input.toString().length;
}

console.log( calcLength("Lisiane-san") );

// Arrays e tuplas

const languages:string[] = ["C#", "Java", "JavaScript"];
languages.push( "PHP" );

let httpResponse:[number, string];
httpResponse = [200, "OK"];

// Não recomendado: usar any
let flexData: any = 10;
flexData = "information";