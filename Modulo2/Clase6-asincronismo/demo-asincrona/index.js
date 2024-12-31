// const axios= require("axios")

const { log } = require("console")
const fs= require("fs")

fs.readFile("./archivo.txt", "utf-8", (err,data)=>{
    if (err) console.log(err);
    else console.log(data);
    
    
})


// // // const promesaResuelta= new Promise ((resolve,reject)=>{
// // //     resolve("valor de resolucion")
// // // })

// // // const promesaRechazada= new Promise ((resolve,reject)=>{
// // //     reject("razon del rechazo")
// // // })

// // const promise = axios.get("https://students-api.up.railway.app/movies")

// // promise
// // .then((res)=>{                 // succes handler: exito
// //     console.log(res.data);
// // })
// // .catch((err)=>{                 // error handler: fracaso
// //     console.log(err);  
// // })  

// const fetchMovies=async()=>{
//     try { //intentar (como un if else)
//         const data =await axios.get("https://students-api.up.railway.app/movies")// data es una promesa
//         console.log(data.data); //(axios tiene una propiedad:data q es donde esta la info)
//     } catch (err) {
//         console.log(err.message);  
//     }
// }
// fetchMovies()

