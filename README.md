# petfoodie
Calculadora para consumo diario de alimento basado en peso y actividad del perro.

Para incrustar la calculadora al proyecto es necesario utilizar un plugin de wordpress e insertar el codigo css, html y js con ayuda de este.

Para poder colocar el codigo dentro del proyecto sigue los pasos listados a continuacion.

# 1. Instalar plugin

⋅⋅* Instala el plugin [scripts n styles](https://wordpress.org/plugins/scripts-n-styles/) para poder incrustar el codigo dentro de la pagina wp. 

![img 1][https://i.imgur.com/0oRcZvA.png]

# 2. Insertar codigo html y js en shortcodes

⋅⋅*  Copia el codigo del archivo [short_code](https://github.com/David1906/petfoodie/blob/master/short_code).
⋅⋅*  Pega el codigo en el area de short code y asignale un nombre (por ejemplo. calculator).
..* Presiona boton "Add new".
![img 2][https://i.imgur.com/1PfBrIf.png]

# 3. Insertar codigo html en header

⋅⋅* Copia el codigo del archivo [html_for_head](https://github.com/David1906/petfoodie/blob/master/html_for_head).
..* Pegalo en la seccion html, en el apartado "HTML for the head element ...".
⋅⋅* Presiona boton "Update html".
![img 3][https://i.imgur.com/WAHSjVk.png]

# 4. Insertar estilos

⋅⋅* Copia el codigo del archivo [styles](https://github.com/David1906/petfoodie/blob/master/styles).
..* Pega el codigo en la seccion styles.
..* Presiona boton "Update styles".
![img 4][https://i.imgur.com/oemDg7w.png]

# 5. Usar Shortcode en pagina

..* Escribe el shortcode donde deseas incrustar la calculadora.

![img 5][https://i.imgur.com/ObHCXtK.png]

#Listo! La calculadora deberia estar funcionando dentro de tu pagina.

![img 6][https://i.imgur.com/z8MUwcF.png]
