const { exec } = require('child_process');

// Comando para iniciar el servidor HTTP
const command = 'http-server';

// Ejecutar el comando
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Servidor iniciado correctamente.`);
});