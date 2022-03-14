function foo() {
  const TEN_SECONDS = 10000;
  console.log('operacao inacabada');
  setTimeout(() => {
    console.log('espera 10 segundos para continuar');
    console.log('continua a operacao inacabada');
  }, TEN_SECONDS);
}

foo();
