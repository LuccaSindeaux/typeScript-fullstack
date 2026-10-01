# typeScript-fullstack

## TypeScript 
Uma forma diferente de escrever JavaScript, visando facilitar a visualização de erros para a IDE onde ele está sendo escrito, no fim do dia o compilador lerá tudo como JS, mas no momento de codar, ele preverá possíveis erros com a forma que está escrito, já que é possível tipar as variáveis que são criadas.

### Instalação
Abrir terminal na pasta na raiz > executar ```npm install typescript```. 
No projeto: ```npx tsc --init``` para criar o tsconfig.json, para configurar as regras que serão utilizadas no typescript, e outras funcionalidades.

### Tipificação em variáveis
As variáveis devem ter seu tipo definido com :
```ts 
    let age:number ;
// afirmo que a variável número só poder um number.
```

#### Concatenação
Deve ser realizada dentro de ' ${} ' dentro de crases 

```ts
    let phrase: string = `Olá, o valor do produto ${product} é R$ ${price}.`
```

### Tipificação de arrays e tuplas
Quando o array é declarado, não só seu tipo deve ser declarado, mas também deve ser declarado que émum array daquele tipo de dado:

```ts
    const languages:string[] = ["C#", "Java", "JavaScript"];
```

Nas tuplas, os tipos devem ser utilizado na ordem que foram declaardos 

```ts
    // Declaração
    let httpResponse:[number, string];
    
    // CORRETO
    httpResponse = [200, "OK"];

    // ERRADO
    httpResponse = ["OK", 200];

```

### Tipificação em funções
Quando uma função é declarada, a variável parametro deve ser tipificada, bem como o tipo da saída, usando sempre dois pontos, da seguinte forma:

```ts
    function greeting( name:string ):string{
        return `Olá ${name}`;
    }
```

### Criação de tipos
Podemos criar nossos próprios tipos com o comando type:
```ts
    type StatusOrder = "billed" | "paid" | "canceled" ;
```
Obs.: convemção usar CamelCase.

## Compilação
Depois de mexer no código: rodar em terminal ```npx tsc``` para compilar o TS para JS.

#### Importância da compilação
Arquivos TS não são executados em terminal, apenas os arquivos JS são, depois de compilado, deve ser executado em terminal com ```node arquivo.js```