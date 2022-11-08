# React Studies 

### Props and Default Props whith Pokegame 
![pokegame](http://g.recordit.co/t23PJRfGl1.gif)

### State part-1 excersice
![state](http://g.recordit.co/MAKebsJbt8.gif)

### setState excersice
## Roll Dice
![setState-dice](http://g.recordit.co/wOLLCuztFI.gif)
## Hangman
![setState-hangman](http://g.recordit.co/ccPLXMjVM3.gif)

### Método bind nas classes component
**Existem três formas de se evitar o undefined do `this`**

- Usar o `bind()` inline pra chamar a o método `onClick={ this.clickHandle.bind(this) }`;
  - O pró disso é que é bem explícito e legível.
  - Os contras são que quando usamos o `bind()` para chamar o contexto é como se criassemos sempre uma nova função. E dependendo da aplicação isso
    pode afetar o desempenho.  
- Usar Arrow functions `onClick={()=> this.clickHandle()}`; 
  - O pró disso é que é bem explícito, legível e enxuto.
  - Mas os contras são os mesmos do `bind()` inline. 
- Por fim temos o `bind()` no constructor da class; 
  - Os Prós são chamar o `bind()` uma única vez e ter mais performance. 



