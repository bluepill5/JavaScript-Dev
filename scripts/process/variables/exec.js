import { exec, execFile } from 'child_process';

import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

exec('ls -lh', (err, stdout, stderr) => {
    if (err) {
        console.log('Error', err);
        return
    }
    if (stderr) {
        console.log('stderr', stderr);
        return
    }
    console.log('Salida: ', stdout);
});

console.log('Hola coderhouse');

execFile(__dirname + '/sh.sh', (err, stdout, stderr) => {
    if (err) {
        console.log('Error', err);
        return
    }
    if (stderr) {
        console.log('stderr', stderr);
        return
    }
    console.log('Salida execFile: ', stdout);
});











