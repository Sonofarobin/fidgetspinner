
/* set function = spinner print \r + increment counter 200 
  call set timeout with callback tonfunction and new character to print
*/
let counter = 400
function spinner(delay, character) {
  setTimeout(() => {process.stdout.write(`\r${character}   ` )
  }, delay)
  counter += 400;
}
process.stdout.write('    ');
spinner(counter, '|');
spinner(counter, '/');
spinner(counter, '-');
spinner(counter, '\\');
spinner(counter, '|');