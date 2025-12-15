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

### O que são Event Handlers em HTML?

Event handlers são atributos HTML que permitem executar uma ação (geralmente JavaScript) quando algum evento acontece, como:

- clicar

- passar o mouse

- pressionar teclas

- carregar a página

- enviar um formulário

- e muitos outros.

### SERVICE WORKER

O que é um Service Worker?

Imagine seu navegador (Chrome, Firefox, etc.) como um restaurante. O Service Worker é como um garçom inteligente e invisível que fica na cozinha (fora da sua página web principal) e atua como um proxy programável entre o seu navegador e a rede (a internet).

### Em termos técnicos:

- É um script JavaScript que o navegador executa em segundo plano.

- Ele não tem acesso direto ao DOM (o conteúdo da sua página HTML).

- Seu superpoder principal é interceptar e gerenciar todas as requisições de rede (pedidos de arquivos, imagens, dados, etc.) feitas pela sua página.

### Superpoderes e Exemplos (O que ele faz?)
O Service Worker é a espinha dorsal de muitas funcionalidades modernas, especialmente as de Progressive Web Apps (PWAs).

1. Cache e Funcionalidade Offline
Este é o uso mais importante. 

O SW permite que você armazene recursos da sua aplicação (HTML, CSS, JavaScript, imagens) no cache do navegador de forma controlada.

### Exemplo:

- O usuário visita sua aplicação pela primeira vez (Online).
- O SW intercepta os pedidos e salva todos os arquivos essenciais no cache.
- O usuário fecha a página e, mais tarde, tenta abri-la sem conexão (Offline).
- O SW intercepta o pedido, vê que não há rede e, em vez de mostrar a tela de "Sem Internet", ele serve os arquivos salvos do cache.

### Resultado: 
Sua aplicação carrega e funciona mesmo sem internet!

2. Notificações Push

O SW pode receber mensagens do servidor mesmo quando a aplicação não está aberta no navegador, permitindo que ele exiba notificações push para o usuário.

### Exemplo: 
Um aplicativo de notícias pode usar um SW para receber um alerta do servidor sobre uma notícia de última hora e exibir uma notificação na tela do usuário, incentivando-o a abrir a aplicação.

3. Sincronização em Segundo Plano (Background Sync)

Se o usuário estiver offline e tentar enviar um formulário, o Service Worker pode "segurar" esses dados e enviá-los automaticamente ao servidor assim que a conexão for restabelecida.

### Exemplo:

- O usuário preenche um formulário de feedback no metrô (sem sinal).
- O SW armazena os dados localmente.
- Quando o usuário sai do metrô e conecta no Wi-Fi, o SW detecta a rede e envia os dados pendentes para o servidor em segundo plano, sem que o usuário precise fazer nada.


### Como Funciona na Prática?

O ciclo de vida do Service Worker é bem específico e crucial para entender.


### Estrutura de Código (Simplificada)

1. No seu arquivo principal: main.js ou dentro da tag `<script>` do HTML

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => console.log('SW registrado!'))
    .catch(error => console.log('Erro no registro:', error));
}
```

---

### sw.js (Service Worker)

```js
// O evento de Instalação (cria o cache inicial)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meu-cache-v1') // Abre um espaço de cache
      .then((cache) => {
        return cache.addAll([
          '/', 
          '/index.html',
          '/styles/main.css',
          '/scripts/app.js'
        ]);
      })
  );
});

// O evento de Interceptação
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
```
## REM ou PX?

Use **rem** para escalabilidade e acessibilidade (fontes, espaçamentos) e **px** para controle absoluto (bordas finas, imagens fixas), sendo **rem** preferível para design responsivo, pois se adapta ao tamanho da fonte raiz do navegador, enquanto **px** é fixo e pode dificultar a leitura para usuários que ajustam o zoom.

## DESAFIO:

Aguarda o carregamento completo do DOM - LINHA 1

Elementos do DOM - LINHAS 5 E 6

Função para exibir mensagem de feedback - LINHA 9

Remove mensagens anteriores - LINHAS 11 a 14

Cria nova mensagem - LINHAS 17 a 20 

Estilos da mensagem - LINHAS 23 a 44

Remove a mensagem após 3 segundos - LINHAS 47 a 52

Função para manipular clique no botão principal - LINHAS 55 e 56

Feedback visual - LINHAS 59 a 62

Exibe mensagem - LINHAS 65 a 67

Função para manipular clique no botão secundário - LINHAS 70 e 71

Feedback visual - LINHAS 73 a 76

Exibe mensagem - LINHA 79

Simula redirecionamento - LINHAS 82 a 85

Adiciona event listeners - LINHAS 88 e 89

Adiciona suporte para teclado (acessibilidade) - LINHAS 92 a 102

Log de inicialização - LINHA 105

Adiciona classe de inicialização para animações - LINHAS 108 e 109 
