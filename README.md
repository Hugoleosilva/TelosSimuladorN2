## 🎯 Seu Objetivo
Você deve refatorar (melhorar) este código seguindo os requisitos do documento "Simulador Nível 2".

## 🛠 O que precisa ser feito?

1. **Organização:** Separe o HTML, CSS e JavaScript em arquivos diferentes (`index.html`, `styles.css`, `index.js`). ✅

2. **HTML Semântico:** Substitua as `div` genéricas e tags obsoletas (como `<big>`) pelas tags corretas do HTML5 (`header`, `main`, `footer`, `section`). ✅

3. **Responsividade:** O site atual tem largura fixa de 1000px. Use **Flexbox** ou **Grid** para que ele funcione bem em celulares. ✅

4. **Acessibilidade:** Melhore o contraste das cores e adicione descrições (`alt`) nas imagens. ✅

5. **Interatividade:** O JavaScript atual está misturado no HTML. Mude para usar `addEventListener` no arquivo externo. ✅

## 🚀 Como começar
1. Baixe o arquivo `index.html` deste repositório. ✅

2. Abra no seu VS Code. ✅

3. Comece a separar os arquivos e aplicar as melhorias! ✅

Boa sorte! 🚀


## ÍNDICES - INDEX.JS:

Aguarda o carregamento completo do DOM - LINHA 1

Elementos do DOM - LINHAS 3-4

Função para exibir mensagem de feedback - LINHA 6

Remove mensagens anteriores - LINHAS 8-11

Cria nova mensagem - LINHAS 13-16 

Estilos da mensagem - LINHAS 18-39

Remove a mensagem após 3 segundos - LINHAS 41-46

Função para manipular clique no botão principal - LINHAS 48-49

Feedback visual - LINHAS 51-54

Exibe mensagem - LINHAS 56-59

Função para manipular clique no botão secundário - LINHAS 61-62

Feedback visual - LINHAS 64-67

Exibe mensagem - LINHA 69

Simula redirecionamento - LINHAS 71-76

Adiciona event listeners - LINHAS 78-79

Adiciona suporte para teclado (acessibilidade) - LINHAS 81-91

Log de inicialização - LINHA 93

Adiciona classe de inicialização para animações - LINHAS 95-96

## ÍNDICES - STYLES.CSS

Remove margens/paddings padrão e define box-sizing para todos os elementos - LINHAS 1-11

Define cores principais do site usando CSS custom properties - LINHAS 13-20

Configura fonte, cores de fundo/texto e altura mínima da página - LINHAS 22-28

Define largura máxima, centralização e sombra da área de conteúdo - LINHAS 30-35

Estiliza o cabeçalho com cores, padding e alinhamento do texto - LINHAS 37-49

Define espaçamento interno da área de conteúdo - LINHAS 51-53

Estiliza a seção de serviços com título, texto, imagem e descrição - LINHAS 55-80

Cria área destacada para botões de ação com fundo diferenciado - LINHAS 82-86

Organiza botões em coluna (mobile) com espaçamento entre eles - LINHAS 88-93

Estiliza o botão principal (vermelho) com hover effects - LINHAS 95-111

Estiliza o botão secundário (azul escuro) com hover effects - LINHAS 113-128

Estiliza o rodapé com cores, padding e alinhamento - LINHAS 130-138

Esconde elementos visualmente mantendo-os para leitores de tela - LINHAS 140-148

Ajusta estilos para telas a partir de 768px (tipografia maior, botões em linha) - LINHAS 150-176

Ajustes para telas a partir de 1024px (bordas arredondadas, mais espaçamento) - LINHAS 178-189

Define animação de entrada para elementos - LINHAS 191-200

Aplica animação fadeIn nas seções de serviços e chamada para ação - LINHAS 202-205

## ÍNDICES - INDEX.HTML:

Define o documento HTML5 com metadados, título e links para CSS/fontes - LINHAS 1-8

Inicia o corpo da página e define o container principal - LINHAS 9-11

Área de título principal da empresa com boas-vindas e slogan - LINHAS 12-16

Define a área de conteúdo principal da página - LINHAS 18-19

Título da seção - LINHA 21

Texto introdutório - LINHA 22

Imagem ilustrativa (com atributos de acessibilidade e dimensões) - LINHAS 24-28 

Descrição detalhada (histórico da empresa) - LINHAS 30-33 

Título escondido para acessibilidade - LINHA 36

Botão principal "Saiba mais" - LINHAS 38-41

Botão secundário "Contato" - LINHAS 42-44

Informações de direitos autorais e dados da empresa - LINHAS 47-51

Inclui o arquivo JavaScript para funcionalidades interativas - LINHA 53
