# Tablero dinamico

Pagina web realizada con ASP.NET (C# y Web Forms), JavaScript (jQuery) y CSS.

### Info

- El sitio consta de ocho cajas, las cuales al cargar la pagina cada una tiene un tamaño por defecto.
- Cada caja tiene un boton "Actualizar" con el cual se puede recargar el contenido individual de la misma.


- Cada caja puede ser redimensionada a medida (existiendo un limite de tamaño maximo y minimo para hacerlo).
- Cada caja puede ser movida al lugar de otra.
- Todas las cajas se ubican automaticamente dependiendo del tamaño de las cajas, del tamaño de la pantalla y del espacio disponible en esta.
- Cada caja se reubicara al momento de que el usuario cambie su tamaño.


- Los graficos se actualizan con valores aleatorios generados internamente (rango [1-10]).
- El horario dinamico se actualiza automaticamente por cada segundo (Opcion de actualizar manual bloqueada).
- El horario estatico, se actualizara en pantalla al presionar en "Actualizar".
- Al actualizar el contenido de la Caja 4, se visualizara UNA sola imagen de forma aleatoria, de un total de cinco.


- Solo el contenido de la caja 2 y 6 (horarios) es traido desde el servidor. El resto solo se actualiza desde el lado del cliente.
- Para el posicionamiento, se utilizo la libreria PackeryJS, y para el redimensionamiento la libreria jQueryUI.
- Para los graficos la libreria ChartJs.


- El sitio fue probado en los navegadores: Chrome, Brave, Edge, Firefox y Explorer, este ultimo presentando incompatibilidades con las librerias.
- El sitio presenta incompatibilidades con dispositivos tactiles (Funciones de arrastre y redimension).


### Presentación

###### General
![](https://i.ibb.co/xjpjmmZ/Imgs.png)

###### Redimensionar
![](https://i.ibb.co/PGTWHX3/Captura-de-pantalla-2022-07-26-160012.png)

###### Arrastrar
![](https://i.ibb.co/gd6Bt17/Captura-de-pantalla-2022-07-26-155909.png)