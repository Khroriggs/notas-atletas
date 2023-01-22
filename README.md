# Tutorial Atletas.js

Esse arquivo serve de tutorial para utilização da aplicação "notas-atletas.js"

## Conteúdos
- [Tutorial Atletas.js](#tutorial-atletasjs)
  - [Conteúdos](#conteúdos)
  - [Visão Geral](#visão-geral)
  - [Explicação dos comandos](#explicação-dos-comandos)
    - [Considerações](#considerações)



## Visão Geral
Esta aplicação serve para calcular a média de atletas em uma determinada competição, ao qual recebem notas de 0 à 10 de cinco jurados.Essa média é calculada com base nas três notas do meio, desconsiderando a maior e a menor nota.

## Explicação dos comandos
```javascript
 console.log(`Atleta: ${atleta.nome}`)
 ```
 Retorna o nome do atleta.

 ```javascript
 console.log(`Notas: ${atleta.notas}`);
 ```
 Retorna as notas recebidas pelos atletas,sem nenhuma alteração.

 ```javascript
let notasOrd=atleta.notas.sort((a,b)=>{return a-b});
 ```
Define "notasOrd" como as notas recebidas em ordem crescente.

```javascript
let notasSlice=notasOrd.slice(1,4);
 ```
Define "notasSlice" como as notas ordenadas retirando as notas mais alta e mais baixa.

 ```javascript
 let somaNota = 0;
        for (let i = 0; i <notasSlice.length; i++) {
            somaNota+=notasSlice[i];
        }
 ```
Percorre cada item das matrizes ja cortadas e ordenadas,somando as três notas necessarias para média

 ```javascript
console.log(`Média válida: ${somaNota/notasSlice.length}`)
 ```
Retorna a média final requisitada.

### Considerações

Este código funciona apenas quando se é fornecido entradas com o seguinte formato:

```javascript
{
   nome: "nome do atleta",
   notas: [1, 2, 3, 4, 5] //nota de cada jurado
 }
```
requer alterações caso aumente o número de jurados(notas).