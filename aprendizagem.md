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


