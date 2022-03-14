/**
 * v1
 */

// import { setTimeout } from 'timers/promises';

// const TRHEE_SECONDS = 3000;

// console.log('antes');
// await setTimeout(TRHEE_SECONDS);
// console.log('depois');

/**
 * v2
 */

import { setTimeout } from 'timers/promises';

const TRHEE_SECONDS = 3000;

console.log('antes');
console.log(await setTimeout(TRHEE_SECONDS, 'timeout')); // timeout
console.log('depois');
