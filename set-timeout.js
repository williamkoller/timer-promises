const TRHEE_SECONDS = 3000;

setTimeout(() => {
  console.log('esse callback vai ser executado em 3 segundos');
}, TRHEE_SECONDS);

setImmediate(() => {
  console.log(
    'esse callback vai ser executado logo depois do inicio da execucao'
  );
});

console.log('e esse vai ser executado por primeiro');
