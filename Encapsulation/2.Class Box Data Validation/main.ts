import {Parallelepiped} from './parallelepiped';

let a = new Parallelepiped(2, -3, 4);

typeof a.surfaceArea() === "number" ?
    console.log(`Surface Area - ${a.surfaceArea()}`) :
    console.log(a.surfaceArea());

typeof a.lateralSurfaceArea() === "number" ?
    console.log(`Surface Area - ${a.lateralSurfaceArea()}`) :
    console.log('');

typeof a.volume() === "number" ?
    console.log(`Surface Area - ${a.volume()}`) :
    console.log('');

