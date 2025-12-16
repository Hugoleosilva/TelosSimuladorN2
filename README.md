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

#### RESET E CONFIGURAÇÕES GERAIS

Remove margens/paddings padrão e define box-sizing para todos os elementos - LINHAS 1-5

Define cores principais do site usando CSS custom properties - LINHAS 7-15

Configura fonte, cores de fundo/texto e altura mínima da página - LINHAS 17-23

#### LAYOUT PRINCIPAL

Define largura máxima, centralização e sombra da área de conteúdo - LINHAS 25-31

Define espaçamento interno da área de conteúdo - LINHAS 52-54

#### CABEÇALHO

Estiliza o cabeçalho com cores, padding e alinhamento do texto - LINHAS 33-38

Estiliza o título principal do cabeçalho - LINHAS 40-44

Estiliza o subtítulo do cabeçalho - LINHAS 46-50

#### SEÇÃO DE SERVIÇOS

Estiliza a seção de serviços com título, texto, imagem e descrição - LINHAS 56-60

Estiliza o título da seção de serviços - LINHAS 62-66

Estiliza o texto descritivo dos serviços - LINHAS 68-75

Configura o container da imagem dos serviços - LINHAS 77-80

Estiliza a imagem dos serviços - LINHAS 82-90

Estiliza a descrição detalhada dos serviços - LINHAS 92-98

#### CHAMADA PARA AÇÃO

Cria área destacada para botões de ação com fundo diferenciado - LINHAS 100-105

Organiza botões em coluna (mobile) com espaçamento entre eles - LINHAS 107-113

#### BOTÕES

Estiliza o botão principal (vermelho) com hover effects - LINHAS 115-126

Estiliza o botão secundário (azul escuro) com hover effects - LINHAS 136-154

#### RODAPÉ

Estiliza o rodapé com cores, padding e alinhamento - LINHAS 156-162

#### ACESSIBILIDADE

Esconde elementos visualmente mantendo-os para leitores de tela - LINHAS 170-180

#### RESPONSIVIDADE - MOBILE FIRST

Ajustes específicos para telas pequenas - LINHAS 182-192

#### RESPONSIVIDADE - TABLET

Ajusta estilos para telas a partir de 768px (tipografia maior, botões em linha) - LINHAS 193-224

#### RESPONSIVIDADE - DESKTOP

Ajustes para telas a partir de 1024px (bordas arredondadas, mais espaçamento) - LINHAS 236-264

#### ANIMAÇÕES

Define animação de entrada para elementos - LINHAS 265-274

Aplica animação fadeIn nas seções de serviços e chamada para ação - LINHAS 276-280

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
