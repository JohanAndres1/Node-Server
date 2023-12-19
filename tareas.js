const readlineSync = require('readline-sync');

let tareas = [];

function listarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. [${tarea.estado ? '✔' : ' '}] ${tarea.descripcion}`);
  });
}

function agregarTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const descripcion = readlineSync.question('Introduce la descripcion de la tarea: ');
      const tarea = {
        descripcion,
        estado: false,
      };
      tareas.push(tarea);
      resolve(console.log('Tarea añadida con éxito.'));
    }, 2000);
  });
}

function eliminarTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      listarTareas();
      const indice = readlineSync.question('Introduce el numero de la tarea que deseas eliminar: ');
      if (indice >= 1 && indice <= tareas.length) {
        tareas.splice(indice - 1, 1);
        resolve(console.log('Tarea eliminada con éxito.'));
      } else {
        resolve(console.log('Numero de tarea no válido.'));
      }
    }, 2000);
  });
}

function completarTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      listarTareas();
      const indice = readlineSync.question('Introduce el numero de la tarea que deseas marcar como completada: ');
      if (indice >= 1 && indice <= tareas.length) {
        tareas[indice - 1].estado = true;
        resolve(console.log('Tarea completada con éxito.'));
      } else {
        resolve(console.log('Numero de tarea no válido.'));
      }
    }, 2000);
  });
}

async function ejecutarScriptAsyncAwait() {
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
        await agregarTarea();
        break;
      case '3':
        await eliminarTarea();
        break;
      case '4':
        await completarTarea();
        break;
      case '5':
        console.log('Saliendo del programa.');
        process.exit();
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
    }
  }
}

ejecutarScriptAsyncAwait();


// function ejecutarScriptThen() {
//   function ejecutarOpciones(opcion) {
//     switch (opcion) {
//       case '1':
//         listarTareas();
//         ejecutarScriptThen()
//         break;
//       case '2':
//         agregarTarea().then(() => ejecutarScriptThen());
//         break;
//       case '3':
//         eliminarTarea().then(() => ejecutarScriptThen());
//         break;
//       case '4':
//         completarTarea().then(() => ejecutarScriptThen());
//         break;
//       case '5':
//         console.log('Saliendo del programa.');
//         process.exit();
//       default:
//         console.log('Opción no válida. Inténtalo de nuevo.');
//         ejecutarScriptThen();
//     }
//   }

//   console.log('\n--- GESTIÓN DE TAREAS ---');
//   console.log('1. Listar tareas');
//   console.log('2. Añadir tarea');
//   console.log('3. Eliminar tarea');
//   console.log('4. Completar tarea');
//   console.log('5. Salir');

//   const opcion = readlineSync.question('Selecciona una opcion: ');
//   ejecutarOpciones(opcion)
// }

// ejecutarScriptThen();