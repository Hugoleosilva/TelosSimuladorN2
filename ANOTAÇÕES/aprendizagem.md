### Aprendizagem HTML

- Usar "! + TAB" já deixa no formato HTML

### Links importantes:

- https://developer.mozilla.org/en-US/docs/Web/HTML

- https://www.w3schools.com/html/

### Negrito

 A principal diferença é que a tag **"strong" é semântica** e
 indica que o texto tem importância ou ênfase, enquanto a 
 tag **"b" é não semântica** e serve apenas para exibir o texto 
 em negrito sem dar um significado especial. Leitores de tela
 interpretam a **"strong"** com uma entonação diferente, já a **"b"** é interpretada como apenas formatação. 


### Styles - Pode ser usado de 3 formas:

- Interna:

         <title>Document</title>

         <style>
            section {
            color: green;
            font-size: 18px;
         }
          </style>
          </head>

- Inline:

         </head>
           <body>
           <section>cor verde</section>
    
           <p style="color: green">cor verde</p>

           </body>
           </html>

- Externa:

- Obs.: na **Externa** devemos criar um arquivo **styles.css** como por exemplo abaixo:

          h1 {
          color: yellow;
          }

- https://www.w3schools.com/css/css_external.asp

         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Document</title>

             <link rel="stylesheet" type="text/css" href="styles.css">    (Forma Externa)

         <style>

- Interno, Externo e Inline:

         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Document</title>

             <link rel="stylesheet" type="text/css" href="styles.css">    (Forma Externa link)

         <style>
              section {
              color: green;          (Forma Interna)
              font-size: 18px;
                      }
         </style>
         </head>
         <body>
              <section>cor verde</section>
    
              <p style="color: green">cor verde</p> (Forma Inline)

              <h1>cor amarela</h1> (Forma Externa)
         </body>
         </html>


### SEO

se refere ao uso de elementos e tags HTML para otimizar o conteúdo de uma página para motores de busca, como Google, melhorando seu posicionamento nos resultados orgânicos. Isso é feito através da estruturação correta do código, que ajuda os robôs a entenderem o conteúdo da página, o que, por sua vez, aumenta a probabilidade de um bom ranqueamento. 

### GOOD SEO / BAD SEO

- Good SEO foca em práticas éticas e de qualidade, como conteúdo valioso e experiência do usuário. 
- Bad SEO usa táticas manipuladoras que violam as diretrizes do Google para resultados rápidos, mas que prejudicam a credibilidade do site a longo prazo. 
- Em HTML, a diferença está em usar elementos de forma semântica e acessível versus utilizá-los de maneira enganosa. 

### FLEXBOX

Flexbox é um módulo do CSS3 para a criação de layouts flexíveis e responsivos. Ele permite organizar elementos dentro de um "container" (contêiner) de forma eficiente, adaptando o tamanho dos itens para preencher o espaço disponível ou recolhendo-os se necessário. Suas principais funções incluem alinhar e distribuir espaço entre os itens em uma ou duas dimensões (linha ou coluna) e controlar seu comportamento em diferentes tamanhos de tela. 

#### display: flex;
- Ativa o Flexbox, tornando o elemento um container flexível onde os itens filhos podem ser organizados facilmente.

#### background-color: #000;
- Define a cor de fundo do header como preto.

#### color: #fff;
- Define a cor do texto como branco.

#### font-size: 18px;
- Define o tamanho da fonte para 18 pixels.

#### font-weight: bold;
- Deixa o texto em negrito.

#### flex-direction: row;
- Organiza os itens filhos em linha horizontal (padrão do flexbox).

#### align-items: center;
- Alinha verticalmente os itens filhos ao centro do container.

#### justify-content: space-between;
- Distribui os itens filhos com espaço igual entre eles, primeiro item no início e último no final.

#### padding: 10px;
- Adiciona espaço interno de 10px em todos os lados do header.

#### text-transform: uppercase;
- Transforma todo o texto em MAIÚSCULAS.

#### max-width: 200px;
- Define a largura máxima que o elemento pode ter.
- O elemento pode ser menor que 200px, mas nunca maior.

#### object-fit: contain;
- Controla como imagens/vídeos se ajustam no espaço disponível.
- contain → mostra imagem inteira sem cortar, mantendo proporção.
- A imagem se reduz para caber totalmente na caixa.

#### width: 100%;
- Define a largura do elemento como 100% do espaço disponível do seu container/pai.
- O elemento vai ocupar toda a largura do elemento que o contém.

#### flex-wrap: wrap;
- Controla se os itens flexíveis podem quebrar para a linha de baixo ou não.
- Permite que os itens "quebrem" para a próxima linha quando não couberem no container.

#### flex: 1 1 200px;
É uma propriedade shorthand que combina três valores em uma só linha:
- flex: [grow] [shrink] [basis];

#### Este item flexível deve:

- Começar com 200px de largura.
- Pode crescer se tiver espaço extra.
- Pode encolher se faltar espaço.

#### DESCRIÇÃO DOS VALORES:
1 → flex-grow: Fator de crescimento: 1.
- O item pode crescer para preencher espaço extra.
- Valor 1 = "sim, pode crescer".

1 → flex-shrink: Fator de encolhimento: 1.
- O item pode encolher se necessário.
- Valor 1 = "sim, pode encolher".

200px → flex-basis: Tamanho base inicial: 200px.
- Tamanho ideal do item antes de crescer/encolher.

### GRID

#### PARA QUE SERVE?
Criar layouts complexos em 2 dimensões (linhas E colunas) de forma fácil.

#### QUANDO USAR:
- Grid: Layouts complexos (telas inteiras, dashboards).
- Flexbox: Alinhar itens em 1 direção (menus, galerias simples)

- Grid = Layout da página toda.
- Flexbox = Partes menores da página.

#### grid-column / grid-row → POSICIONA ITENS

#### grid-column: 1;
- Item ocupa apenas a coluna 1

#### grid-row: 1 / 5;
- Item começa na linha 1 e vai até linha 5
- Ocupa 4 linhas de altura!

#### grid-template-columns: → DEFINE COLUNAS
#### repeat(3, 1fr)
- Cria 3 colunas com tamanhos iguais.
- 1fr = "uma fração" do espaço disponível.
- Resultado: 3 colunas do mesmo tamanho.

#### 1fr 1fr 1fr
- EQUIVALENTE ao de cima!
- Também cria 3 colunas iguais.

#### Resumindo:
- Grid = Layout em 2D (linhas E colunas).
- template-columns = Define quantas colunas.
- grid-column/row = Posiciona os itens no grid.
- repeat() = Atalho para colunas repetidas.

### Variáveis e Animações CSS

Formatos:

@keyframes animation-1 {
      0% {
        background-color: black;
      }
      50% {
        background-color: green;
      }
      100% {
        background-color: red;
      }
}

.animacao {
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 100%;
    animation: animation-1 2s forwards; (forwards deixa na última animação)

}.animacao {
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 100%;
    animation-name: animation-1;
    animation-duration: 2s;
}

.animacao {
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 100%;
    transition: all 2s ease-in-out;
}

.animacao:hover {
     background-color: red; (hover muda a cor ao passar o mouse por cima)
}