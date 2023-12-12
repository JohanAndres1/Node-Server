const readlineSync = require('readline-sync');

let tareas = [];

function listarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. [${tarea.estado ? 'X' : ' '}] ${tarea.descripcion}`);
  });
}

function agregarTarea() {
  const descripcion = readlineSync.question('Introduce la descripcion de la tarea: ');
  const tarea = {
    descripcion,
    estado: false,
  };
  tareas.push(tarea);
  console.log('Tarea añadida con exito.');
}

function eliminarTarea() {
  listarTareas();
  const indice = readlineSync.question('Introduce el numero de la tarea que deseas eliminar: ');
  if (indice >= 1 && indice <= tareas.length) {
    tareas.splice(indice - 1, 1);
    console.log('Tarea eliminada con exito.');
  } else {
    console.log('Numero de tarea no valido.');
  }
}

function completarTarea() {
  listarTareas();
  const indice = readlineSync.question('Introduce el numero de la tarea que deseas marcar como completada: ');
  if (indice >= 1 && indice <= tareas.length) {
    tareas[indice - 1].estado = true;
    console.log('Tarea completada con exito.');
  } else {
    console.log('Numero de tarea no valido.');
  }
}

function ejecutarScript() {
  while (true) {
    console.log('\n--- GESTIÓN DE TAREAS ---');
    console.log('1. Listar tareas');
    console.log('2. Añadir tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Completar tarea');
    console.log('5. Salir');

    const opcion = readlineSync.question('Selecciona una opcion: ');

    switch (opcion) {
      case '1':
        listarTareas();
        break;
      case '2':
        agregarTarea();
        break;
      case '3':
        eliminarTarea();
        break;
      case '4':
        completarTarea();
        break;
      case '5':
        console.log('Saliendo del programa.');
        process.exit();
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
    }
  }
}


ejecutarScript();