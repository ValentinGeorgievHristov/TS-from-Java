// function identity<Type>(arg: Type): Type {
//     return arg;
// }
//
// let myIdentity: <Type>(arg: Type) => Type = identity;
// console.log(myIdentity('salam bate'))
//
//
// function loggingIdentity<Type>(arg: Type[]): Type[] {
//     console.log(arg.length);
//     return arg;
// }
//
// console.log(loggingIdentity<string>(['salam bate']))


// -----------------------------------------------------------------

// function identity<Type>(arg: Type): Type {
//     console.log(arg)
//     return arg;
// }
//
// let myIdentity: (arg: string) => string = identity;
// let myIdentity1: <Type>(arg: Type) => Type = identity;
// let myIdentity2: <Type>(arg: Type[]) => Type[] = identity;
// // let myIdentity3: <Type>(arg: Type{}) => Type{} = identity; //???????????
//
// console.log(`myIdentity ${myIdentity('alabala tipe input')}`)
// console.log(`myIdentity1 ${myIdentity1('alabala tipe input')}`)
// console.log(`myIdentity2 ${myIdentity2(['alabala tipe input'])}`)

//---------------------------

// function identity<Type>(arg: Type): Type {// ????????????????????????????????
//     return arg;
// }
// console.log(`identity samo ${identity('Mishki')} type of ${typeof identity('Mishki')}`);
//
// let myIdentity: { <Type>(arg: Type): Type } = identity;   // връща обект въпреки typeOf
// console.log(`myIdentify(alabala)  ${myIdentity('Alabala')} type of ${typeof myIdentity('Alabala')}`)
// --------------------------------------------

// interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
// }
//
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
//
// let myIdentity: GenericIdentityFn = identity;               //резултат сходен като на ред 56
// console.log(`My identity ${myIdentity('Neshto')}`);
//
// let myIdentity1 = identity('Nishto');
// console.log(`My identity1 ${myIdentity1}`)          //резултат сходен като на ред 52
//

//---------------------------------------------------

// interface GenericIdentityFn<Type> {
//     (arg: Type): Type;
// }
//
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
//
// let myIdentity: GenericIdentityFn<number> = identity;
// console.log(`My identity ${myIdentity(123)}  typeof ${typeof myIdentity(123)}`)
//
// let myIdentityStr: GenericIdentityFn<string>=identity;
// console.log(`My identity ${myIdentityStr('string')}  typeof ${typeof myIdentityStr('string')}`)
// -------------------------------------------------------

// class GenericNumber<NumType> {
//
//     zeroValue: NumType;
//    add: (x: NumType, y: NumType) => NumType;
// }
//
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// //console.log(myGenericNumber.zeroValue = 0)
//
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };
//
// console.log(myGenericNumber.add(6,5))
//
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//     return x + y;
// };
//
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
//
//

// -------------------------------------------------------

// //function loggingIdentity<Type>(arg: Type): Type {    // тази функзия е пример за неработене
////     console.log(arg.length);
////    // Property 'length' does not exist on type 'Type'.
////         return arg;
//// }

// interface Lengthwise {
//     length: number;
// }
//
// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {  // ako tipa e samo<TYPE> не може да се достъпи .length!
//                                                                       // s extends stava prikazka!
//     console.log(arg.length); // Now we know it has a .length property, so no more error
//     return arg;
// }
//
// console.log(loggingIdentity('ekler'))
//
// console.log(loggingIdentity('3'))  //не гърми
// //loggingIdentity(3)  // гърми
//
// console.log(loggingIdentity({ length: 10, value: 3 }));
// -------------------------------------------------------

//
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }
//
// let x = { a: 1, b: 2, c: 3, d: 4 };
//
// getProperty(x, 'a');
// // getProperty(x, "m");  //гърми защото са -> 4
// console.log(getProperty(x, 'd'))

//// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// -------------------------------------------------------
// class BeeKeeper {
//     hasMask: boolean = true;
// }
//
// class ZooKeeper {
//     nametag: string = "Mikle";
// }
//
// class Animal {
//     numLegs: number = 4;
// }
//
// class Bee extends Animal {
//     keeper: BeeKeeper = new BeeKeeper();
// }
//
// class Lion extends Animal {
//     keeper: ZooKeeper = new ZooKeeper();
// }
//
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
//
// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;
// ------------------------------------------------------------------
