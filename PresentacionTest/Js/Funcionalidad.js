$(document).ready(function () {

    //Libreria para ordenamiento de las cajas
    var grid = reordenar();

    //Compatibilizamos PackeryJS con jQueryUI Dragabble.
    var items = grid.find('.caja').draggable();
    grid.packery('bindUIDraggableEvents', items);

    //Generamos el reordenamiento al modificar el tamaño de las cajas.
    cambiarTam();

    contenidoCaja1();
    contenidoCaja3();
    contenidoCaja4();
    contenidoCaja5();
    contenidoCaja7();
    contenidoCaja8();
});

//Ponemos las variables de generacion de graficos de forma global, para poder actualizar los datos.
let graficoBarras;
let graficoLinea;
let graficoRadar;
let graficoTorta;
let graficoCirculo;

function reordenar() {

    var grid = $("#contenedor-cajas").packery({
        itemSelector: '.caja',
        percentPosition: true,
        gutter: 4
    });

    return grid;
}

function cambiarTam() {

    var camTam = $("#contenedor-cajas .caja").resizable({
        maxHeight: 510,
        maxWidth: 770,
        minHeight: 242,
        minWidth: 377,
        helper: "packery-drop-placeholder",
        stop: function () {
            reordenar();
        },
    });

    return camTam;
}

function contenidoCaja1() {
    var ctx = document.getElementById('grafico-1').getContext('2d');

    if (graficoBarras) {
        graficoBarras.destroy();
    }

    var valor1 = Math.floor((Math.random() * 19) + 1);
    var valor2 = Math.floor((Math.random() * 19) + 1);
    var valor3 = Math.floor((Math.random() * 19) + 1);
    var valor4 = Math.floor((Math.random() * 19) + 1);
    var valor5 = Math.floor((Math.random() * 19) + 1);
    var valor6 = Math.floor((Math.random() * 19) + 1);

    graficoBarras = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [valor1, valor2, valor3, valor4, valor5, valor6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return graficoBarras;
}

function contenidoCaja3() {
    var ctx = document.getElementById('grafico-3').getContext('2d');

    if (graficoRadar) {
        graficoRadar.destroy();
    }

    var valor1 = Math.floor((Math.random() * 19) + 1);
    var valor2 = Math.floor((Math.random() * 19) + 1);
    var valor3 = Math.floor((Math.random() * 19) + 1);
    var valor4 = Math.floor((Math.random() * 19) + 1);
    var valor5 = Math.floor((Math.random() * 19) + 1);
    var valor6 = Math.floor((Math.random() * 19) + 1);

    graficoRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [valor1, valor2, valor3, valor4, valor5, valor6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return graficoRadar;
}

function contenidoCaja4() {

    /*Generamos un valor aleatorio entre 1 y 5 (numero de imagenes) 
    asignamos el valor a la url de la imagen con ese mismo numero como nombre*/
    var valor = Math.floor((Math.random() * 4) + 1);
    
    for (i = 1; i <= valor; i++) {
        if (i == valor) {
            var url = '<img src="Images/image-' + valor + '.jpg" alt="Image-' + valor + '"/>';
            $("#contImg").html(url);
            $("#contImg img").fadeIn(1500);

            return false;
        }
    }
}

function contenidoCaja5() {
    var ctx = document.getElementById('grafico-5').getContext('2d');

    if (graficoLinea) {
        graficoLinea.destroy();
    }

    var valor1 = Math.floor((Math.random() * 19) + 1);
    var valor2 = Math.floor((Math.random() * 19) + 1);
    var valor3 = Math.floor((Math.random() * 19) + 1);
    var valor4 = Math.floor((Math.random() * 19) + 1);
    var valor5 = Math.floor((Math.random() * 19) + 1);
    var valor6 = Math.floor((Math.random() * 19) + 1);

    graficoLinea = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [valor1, valor2, valor3, valor4, valor5, valor6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return graficoLinea;
}

function contenidoCaja7() {
    var ctx = document.getElementById('grafico-7').getContext('2d');

    if (graficoTorta) {
        graficoTorta.destroy();
    }

    var valor1 = Math.floor((Math.random() * 19) + 1);
    var valor2 = Math.floor((Math.random() * 19) + 1);
    var valor3 = Math.floor((Math.random() * 19) + 1);
    var valor4 = Math.floor((Math.random() * 19) + 1);
    var valor5 = Math.floor((Math.random() * 19) + 1);
    var valor6 = Math.floor((Math.random() * 19) + 1);

    graficoTorta = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [valor1, valor2, valor3, valor4, valor5, valor6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return graficoTorta;
}

function contenidoCaja8() {
    var ctx = document.getElementById('grafico-8').getContext('2d');

    if (graficoCirculo) {
        graficoCirculo.destroy();
    }

    var valor1 = Math.floor((Math.random() * 19) + 1);
    var valor2 = Math.floor((Math.random() * 19) + 1);
    var valor3 = Math.floor((Math.random() * 19) + 1);
    var valor4 = Math.floor((Math.random() * 19) + 1);
    var valor5 = Math.floor((Math.random() * 19) + 1);
    var valor6 = Math.floor((Math.random() * 19) + 1);

    graficoCirculo = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [valor1, valor2, valor3, valor4, valor5, valor6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return graficoCirculo;
}