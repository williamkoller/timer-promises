const sleep = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve, timer);
  });
};

async function start() {
  const TRHEE_SECONDS = 3000;
  console.log('operacao');
  await sleep(TRHEE_SECONDS);
  console.log('continue a operacao');
}

start();
