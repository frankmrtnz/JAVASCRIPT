var idNotaActiva;

var baseDeDatos = null;

var idNotaActiva;

document.addEventListener('readystatechange', inicializar);

function inicializar() {

    if (document.readyState == 'complete') {

        campoId = document.getElementById('idNota');

        campoTitulo = document.getElementById('tituloNota');

        campoContenido = document.getElementById('contenidoNota');

        campoIdCargarNota = document.getElementById('idCargarNota');

        campoTituloCargarNota = document.getElementById('tituloCargarNota');

        campoDesdeId = document.getElementById('desdeId');

        campoHastaId = document.getElementById('hastaId');

        campoListaRango = document.getElementById('listaRango');

    }

}

function abrirBaseDeDatos() {

    console.log('abriendo');

    var peticion = indexedDB.open('Notas');

    peticion.addEventListener('upgradeneeded', actualizarBaseDeDatos);

    peticion.addEventListener('error', function () { console.log('Error al abrir BD'); });

    peticion.addEventListener('success', exitoAbrir);

}

function actualizarBaseDeDatos(evento) {

    console.log('Actualizar base de datos');

    baseDeDatos = evento.target.result;

    var objetoStore = baseDeDatos.createObjectStore('nota', { keyPath: "id", autoIncrement: true });

    objetoStore.createIndex('titulo', 'titulo', { unique: false });

}

function guardarNota() {

    var transaccion = baseDeDatos.transaction(['nota'], 'readwrite');

    var objetoStore = transaccion.objectStore('nota');

    if (idNotaActiva == undefined) {

        var peticion = objetoStore.add({ titulo: campoTitulo.value, contenido: campoContenido.value });

        peticion.addEventListener('success', exitoGuardar);

    } else {

        var peticion = objetoStore.put({ id: idNotaActiva, titulo: campoTitulo.value, contenido: campoContenido.value });

        peticion.addEventListener('success', exitoGuardar);

    }

}

function exitoGuardar(evento) {

    campoId.value = evento.target.result;

    idNotaActiva = evento.target.result;

    console.log('Nota guardada con el id ' + evento.target.result);

}

function exitoAbrir(evento) {

    console.log('Éxito al abrir BD');

    baseDeDatos = evento.target.result;

    document.getElementById('versionBaseDeDatos').innerHTML = baseDeDatos.version;

    console.log('Versión: ' + evento.target.result.version);

    habilitarFormulario();

}

function habilitarFormulario() {

    document.getElementById('nota').disabled = undefined;

    document.getElementById('cargarNota').disabled = undefined;

    document.getElementById('rangoDeNotas').disabled = undefined;

}

function borrarBaseDeDatos() {

    if (baseDeDatos != null) {

        //Para poder borrar debe estar cerrada

        baseDeDatos.close();

    }

    var peticion = indexedDB.deleteDatabase('Notas');

    peticion.addEventListener('success', exitoBorrarBD);

    peticion.addEventListener('error', function () { console.log('Error borrando BD'); });

}

function exitoBorrarBD() {

    console.log('Base de datos borrada');

    document.getElementById('versionBaseDeDatos').innerHTML = '';

}

function cargarPorId() {

    if (campoIdCargarNota.value != '') {

        var transaccion = baseDeDatos.transaction(['nota'], 'readonly');

        var objetoStore = transaccion.objectStore('nota');

        var peticion = objetoStore.get(parseInt(campoIdCargarNota.value));

        peticion.addEventListener('success', exitoCargar);

    }

}

function cargarPorTitulo() {

    if (campoTituloCargarNota.value != '') {

        var transaccion = baseDeDatos.transaction(['nota'], 'readonly');

        var objetoStore = transaccion.objectStore('nota');

        var indice = objetoStore.index('titulo');

        var peticion = indice.get(campoTituloCargarNota.value);

        peticion.addEventListener('success', exitoCargar);

        peticion.addEventListener('error', function () { alert('No existe la nota solicitada'); });

    }

}

function exitoCargar(evento) {

    if (evento.target.result == undefined) {

        alert('No existe la nota solicitada');

    } else {

        idNotaActiva = evento.target.result.id;

        campoId.value = evento.target.result.id;

        campoTitulo.value = evento.target.result.titulo;

        campoContenido.value = evento.target.result.contenido;

    }

}

function borrarCampos() {

    campoId.value = '';

    campoTitulo.value = '';

    campoContenido.value = '';

    idNotaActiva = undefined;

}

function borrarNota() {

    if (idNotaActiva != undefined) {

        var transaccion = baseDeDatos.transaction(['nota'], 'readwrite');

        var objetoStore = transaccion.objectStore('nota');

        var peticion = objetoStore.delete(idNotaActiva);

        peticion.addEventListener('success', exitoBorrarNota);

    }

}

function exitoBorrarNota() {

    idNotaActiva = undefined;

    campoId.value = '';

    campoTitulo.value = '';

    campoContenido.value = '';

}

function verRango() {

    if (campoDesdeId.value != '' && campoHastaId.value != ''

        && parseInt(campoDesdeId.value) <= parseInt(campoHastaId.value)) {

        campoListaRango.innerHTML = '';

        var transaccion = baseDeDatos.transaction(['nota'], 'readonly');

        var objetoStore = transaccion.objectStore('nota');

        var rango = IDBKeyRange.bound(parseInt(campoDesdeId.value), parseInt(campoHastaId.value), false, false);

        var peticion = objetoStore.openCursor(rango);

        peticion.addEventListener('success', exitoCursor);

    } else {

        alert('Error en la configuraci\u00f3n del rango');

    }

}

function exitoCursor(evento) {

    var cursor = evento.target.result;

    if (cursor) {

        campoListaRango.innerHTML += '<li>' + cursor.primaryKey + '--' + cursor.value.titulo + '--' + cursor.value.contenido + '</li>';

        cursor.continue();

    } else {

        campoListaRango.innerHTML += '<li>--- FIN DE RANGO ---</li>';

    }

}

