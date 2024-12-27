/*
Enunciado:
Dado um array onde cada elemento representa o preço de uma ação em um determinado dia, escreva uma função que determine o maior lucro possível que pode ser obtido comprando e vendendo apenas uma vez.

Regras:
Você só pode comprar uma ação antes de vendê-la (não é permitido vender antes de comprar).
Se não for possível obter lucro, o resultado deve ser 0.
Exemplo:
Entrada:
[7, 1, 5, 3, 6, 4]

Saída:
5
Explicação: Compre no dia 2 (preço = 1) e venda no dia 5 (preço = 6). Lucro = 6 - 1 = 5.

Entrada:
[7, 6, 4, 3, 1]

Saída:
0
Explicação: Nesse caso, não é possível obter lucro porque os preços apenas caem.

Restrições:
O array pode conter no máximo
1
0
5
10
5
  elementos.
Os preços no array são números inteiros positivos.
*/

let prices = [7, 1, 5, 3, 6, 4]
let minPrice = Infinity; // Preço mínimo encontrado
let maxProfit = 0; // Maior lucro possível

for (let price of prices) {
  if (price < minPrice) {
    minPrice = price; // Atualiza o preço mínimo
  } else {
    const profit = price - minPrice; // Calcula o lucro se vendido agora
    if (profit > maxProfit) {
      maxProfit = profit; // Atualiza o maior lucro
    }
  }
}
console.log(maxProfit);

/*
let prices = [7, 6, 4, 3, 1]
let output = 0;
let lucroProvisorio = 0
let contador = 0;
let contadorSecundario = 0;

while(contador < prices.length){
  const currentElementFixado = prices[contador] // comprando
  const pricesBeforeCurrentElement = prices.slice(contador)


    while( contadorSecundario < pricesBeforeCurrentElement.length ){
      let currentElementSecundario = pricesBeforeCurrentElement[contadorSecundario] // vendendo

      if(currentElementFixado < currentElementSecundario){
        let elementoComprado = currentElementFixado
        let elementoVendido = currentElementSecundario
        let total = elementoVendido - elementoComprado


        lucroProvisorio = total;
      }
      if(output < lucroProvisorio){
        output = lucroProvisorio
      }
      contadorSecundario++;
    }


    contadorSecundario = 0
    contador++;
}

console.log(output)
*/