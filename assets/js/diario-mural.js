DiarioMuralFechas = [
    {
        key: 'Semana 16 de Junio hasta 22 de Junio',
        items: [
            {name: "Lunes", day: '16', notify: '<span class="number-red">5</span>', date: '2013-06-16'},
            {name: "Martes", day: '17', notify: '<span class="number-red">2</span>', date: '2013-06-17'},
            {name: "Miércoles", day: '18', notify: '<span class="number-red">4</span>', date: '2013-06-18'},
            {name: "Jueves", day: '19', notify: '<span class="number-red">2</span>', date: '2013-06-19'},
            {name: "Viernes", day: '20', notify: '<span class="number-red">6</span>', date: '2013-06-20'},
            {name: "Sábado", day: '21', notify: '<span class="number-red">1</span>', date: '2013-06-21'},
            {name: "Domingo", day: '22', notify: '', date: '2013-06-22'},
        ]
    }
];
tareas = [{
        asignatura: 'Matemáticas',
        descripcion: 'Resolver la actividad 20, pagina 34, Control unidad 3a, test de numeros Control unidad 3a, test de numeros Control unidad 3a, test de numeros Control unidad 3a, test de numeros'
    }, {
        asignatura: 'Inglés',
        descripcion: 'Control unidad 3a'
    }, {
        asignatura: 'Educación Física',
        descripcion: 'Test de Cooper'
    }];

DiarioMuralDetalle = ko.observable(false);
diarioMuralItemOnClick = function(e) {
    DiarioMuralDetalle(true);
    items = e.itemData;
    /*jQuery('#dx_title_popup').html(items.name + ' ' + items.day + ' de Junio');
    tareas = '<div><p><b>Matemáticas</b></p><p>Resolver la actividad 20, pagina 34</p></div>';
    tareas += '<div><p><b>Inglés</b></p><p>Control unidad 3a</p></div>';
    tareas += '<div><p><b>Educación Física</b></p><p>Test de Cooper</p></div>';
    tareas += '<div><p><b>Matemáticas</b></p><p>Resolver la actividad 20, pagina 34</p></div>';
    tareas += '<div><p><b>Inglés</b></p><p>Control unidad 3a</p></div>';
    tareas += '<div><p><b>Educación Física</b></p><p>Test de Cooper</p></div>';
    tareas += '<div><p><b>Matemáticas</b></p><p>Resolver la actividad 20, pagina 34</p></div>';
    tareas += '<div><p><b>Inglés</b></p><p>Control unidad 3a</p></div>';
    tareas += '<div><p><b>Educación Física</b></p><p>Test de Cooper</p></div>';
    jQuery('#dx_content_popup').html(tareas);
    jQuery('#tareas_text').dxScrollView({
        'scrollByContent': true
    });*/
}

