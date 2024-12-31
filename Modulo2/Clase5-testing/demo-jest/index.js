const sumar= (a,b)=>{
    if(typeof a !="number" || typeof b !="number") return null
    const suma = a+b
    return suma
}

const calcularTotal=(items)=>{
    if(!items.length){  //si yo no tengo(!) items.length, es decir:0 (if interpreta: cero=falso) if(0)=falso. el if se cumple
        throw Error ("Factura Invalida") //throw : arrojar
    }

    let total= 0
    for (let item of items) total+= item.quantity * item.price
    return total
}

module.exports= {  //obj literales: no necesito ponerle el nombre de la variable si se llama igual q la propiedad
    sumar,
    calcularTotal,
}

// module.exports= { // obj q tiene una prop sumar cuyo falor es la funcion sumar
//     sumar: sumar,
//     calcularTotal: calcularTotal,
// }