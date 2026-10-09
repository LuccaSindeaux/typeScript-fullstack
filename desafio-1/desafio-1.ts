type CategoriaItem = "bebida" | "prato_principal" | "sobremesa";
type StatusPedido = "aberto" | "pago" | "cancelado";

interface IItemCardapio{
    readonly id: number;
    name:string;
    preco:number;
    categoria: CategoriaItem; 
}

interface IPedido{
    readonly id: number;
    cliente:string;
    itens:IItemCardapio[];
    status:StatusPedido;
    observacoes?: string; 
}

function calcularTotal( pedido: IPedido, descontoPercentual?: number ): number {
    if ( pedido.status === "cancelado" ) {
        return 0;
    }

    const totalItens = pedido.itens.reduce( (acumulador, item) => acumulador + item.preco, 0 );

    if ( descontoPercentual ) {
        const valorDesconto = totalItens * ( descontoPercentual / 100) ;
        return totalItens - valorDesconto;
    }

    return totalItens;
}

function adicionarItem( pedido: IPedido, novoItem: IItemCardapio ): void{
    if ( pedido.status === "cancelado" || pedido.status === "pago" ) {
        console.error( "Erro: Não é possível adicionar itens a um pedido pago ou cancelado." );
        return;
    }
    
    pedido.itens.push( novoItem );
}