//calcular el total de una  factura con un solo item
//calcular el total de una  factura con un varios items
//manejar correctamente una lista vacia de items

// [{ 'name: "producto A", price: 10, quantity:2'}]

//lo q estoy requiriendo de index es un objeto y dentro de ese obj esta calcularTotal
//x tanto debo desestructurar del objeto a calcularTotal

const {calcularTotal} = require ("../index")

describe ("la funcion calcularTotal",()=>{
    it ("calcular el total de una  factura con un solo item", ()=>{
        expect(calcularTotal([{ name: "producto A", price: 10, quantity:2}])).toEqual(20)
    })

    it ("calcular el total de una  factura con un varios items", ()=>{
        expect(calcularTotal([
            {name: "producto A", price: 10, quantity:2},
            {name: "producto B", price: 20, quantity:3},
            {name: "producto C", price: 30, quantity:4},
        
        ])).toEqual(200)
    })

    it ("arrojar un error 'factura invalida' si recibe un arreglo vacio", ()=>{
        expect(()=>calcularTotal([])).toThrowError('Factura Invalida')  //Lanzar un error
        
    })

})