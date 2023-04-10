"use strict";
// // Any
// let anyData; // inférence => Any
// let anydata = 'Hello'// inférence => string
// let AnyData: any = 'Salut'// inférence => any malgré type string
// console.log(AnyData) // => affiche bien
// console.log(typeof AnyData) // => reconnait le type string mais reste var any
// AnyData = 20
// console.log(typeof AnyData) // => Bien converti en number
// AnyData = true
// console.log(typeof AnyData) // => Bien converti en boolean
// AnyData = ['Hello']
// console.log(typeof AnyData) // Object car array
// AnyData = {
//     colors: ['Green', 'Blue']
// };
// console.log(typeof AnyData) // Object 
// ////////////////////////////////////////////////////////////////
// let anyDataArray: any[] = []; // on peut préciser any pour un array
// anyDataArray = ['Hello', true, 20, ['crotte', 'drotte'], {name: 'Patrick'}]
// anyDataArray.push('Salut')
// console.log(typeof anyDataArray) // => object
// console.log(anyDataArray)
// let userInfos: {
//     name: any,
//     pseudo: any,
// } = {
//     name: 'Hakerman',
//     pseudo: 1254322
// }
// console.log('userInfos 1', userInfos) // object
// userInfos.pseudo = 'cacatoese123'
// console.log('userInfos 2', userInfos)
// // Avec any mais mauvaise méthode car plus aucun controle sur les types
// let UserInfos: any = {
//     name: 'Hakerman',
//     pseudo: 1254322
// }
// /* a utiliser quand on ne sait pas le type d'infos que l'on va recevoir par exemple */
