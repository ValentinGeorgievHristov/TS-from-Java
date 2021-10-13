import { Figure } from './figure';

let figure = new Figure(2,4,3);

console.log(`Surface Area - ${figure.surfaceArea().toFixed(2)}`);
console.log(`Lateral Surface Area - ${figure.lateralSurfaceArea().toFixed(2)}`);
console.log(`Volume - ${figure.volume().toFixed(2)}`);


