//Cambiar el nombre del campo
// db.padrons.updateMany( 
//   { }, 
//   { $rename: { "fecha contratacion": "fecha_contratacion" } } 
// )

//Pasar dates en formato 01/01/2022 a ISODate()
// db.padrons.updateMany({},
// [ 
//   {
//       $set:{
//         fecha_contratacion: {
//           $dateFromString: {
//               dateString: '$fecha_contratacion',
//               format: '%d/%m/%Y',
//               timezone:'America/Santiago'
//           }
//         }
//       } 
//   }
// ])

//Eliminar el campo cargo cuando se encuentre vacío
// db.padrons.update({cargo:''},{ $unset:{'cargo':1}}, false, true)

//Eliminar la palabra BODEGA al inicio del string del campo bodega
// db.padrons.updateMany(
//     {},
//     [{
//         $set:{
//             bodega:{
//                 $replaceOne:{
//                     input: "$bodega",
//                     find: "BODEGA ",
//                     replacement: ""
//                 }
//             }
//         }
//     }]
// )

//Separar el rut en un array[2]
// db.padrons.updateMany({},
// [
//     {
//         $set:{
//             rut:{$split:[ '$rut','-' ]}
//         }
//     }
// ])

//Eliminar el dígito verificador
// db.padrons.updateMany( {}, {$pop: {rut:1}})



//Desempaquetar array a variable simple
// db.padrons.updateMany(
//     {
//         rut: {$type:"array"}
//     },
//     [
//         {
//             $set: { rut: {$arrayElemAt: ["$rut", 0] }}
//         }
//     ]
// )

//Convertir rut a INT
// db.padrons.updateMany({},
// [
//     {
//         $set:
//         {
//           rut: { $toInt:"$rut"}
            
//         }
//     }
// ])

db.padrons.find();