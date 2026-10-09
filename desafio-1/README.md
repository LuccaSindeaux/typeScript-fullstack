A equipe herdou um script legado em JavaScript que realiza a soma de contas de pedidos. Erros frequentes de digitação de status e cálculos incorretos com cupons inválidos estão gerando prejuízos. Você deve estruturar um novo projeto TypeScript estrito e recriar o módulo.



* Criar o tipo literal CategoriaItem = "bebida" | "prato_principal" | "sobremesa".
* Criar o tipo literal StatusPedido = "aberto" | "pago" | "cancelado".
* Criar a interface IItemCardapio contendo:
    * id: número (somente leitura - readonly).
    * nome: string.
    * preco: número.
categoria: CategoriaItem.
* Criar a interface IPedido contendo:
    * id: número (somente leitura).
    * cliente: string.
    * itens: array de IItemCardapio.
    * status: StatusPedido.
    * observacoes: string (opcional).


Regras de Negócio e Funções:

* Criar a função calcularTotal(pedido: IPedido, descontoPercentual?: number): number.
    * Se o desconto for informado (ex: 10 para 10%), aplicar sobre o total dos itens.
    * Se o pedido estiver com status "cancelado", a função deve retornar sempre 0.
* Criar a função adicionarItem(pedido: IPedido, novoItem: IItemCardapio): void.
    * A função deve impedir que itens sejam adicionados se o pedido já estiver com status "pago" ou "cancelado", exibindo um erro no console.