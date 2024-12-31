//TESTING
//Es un área que se enfoca en evaluar el comportamiento del código de forma controlada
//Test Driven Development (TDD): primero debemos desarrollar un test y luego el código a partir de los tests.
//Test Unitario. evalua cada parte del codigo de forma individual
//Test de Integracion: evalua el codigo en forma conjunta
//Test automation: evalua el flujo completo de la aplicacion
//Herramientas (frameworks) para desarrollar testing: Mocha/Jasmine/Jest
//Jasmine:
//describe: grupo de pruebas con el mismo objetivo. el 1°argumento es un string q describe al grupo. 2°argumento: cb.
//it: funcion q dice lo q voy a evaluar especificamente.
//expect: yo espero(la expresion a evaluar) y la evaluacion en sí
//matcher: metodos q verifican si un valor cumple con unas condiciones
//toBe - toEqual
//toBeDefined - toBeUndefined
//toContain

describe("demo", function () {
    it("Este test debe pasar siempre", function () {
      expect(4 + 2).toBe(6);
    });
  });

  describe("Este es mi primer grupo de test",()=>{
    it("el n 2 debe ser igual al n2", ()=>{
        expect(2).toEqual(2)
        expect(2).toBeDefined()
    })
  })

 
// const sumar= (a,b)=> a + b 

//   describe("la funcion sumar",()=>{
//     it ("debe estar definida", ()=>{
//       expect(sumar).toBeDefined()
//     })
//     it("debe sumar dos numeros", ()=>{
//       expect(sumar(2,2)).toBe(4)
//       expect(sumar(4,4)).toBe(8)
//       expect(sumar(5,0)).toBe(5)

//     })
//   })


// describe("una prueba con objetos",()=>{
//   it("yo espero q 2 numeros iguales sean iguales",()=>{
//     expect(2).toBe(2)
//   })
//   // it("yo espero q 2 objetos iguales sean iguales",()=>{  //los objetos/arrays no tienen una igualdad similar a los strings/numeros
//   //   expect({nombre:"Jorge"}).toBe({nombre:"Jorge"})
//   // })
//   it("yo espero q 2 objetos iguales sean iguales",()=>{ 
//     expect({nombre:"Jorge"}).toEqual({nombre:"Jorge"}) //es igual pero no es el mismo
//   })
//   it("yo espero q 2 arrays iguales sean iguales",()=>{ //es igual pero no es el mismo
//     expect([1,2,3]).toEqual([1,2,3])
//   })
// })


const filtrar=(arr) => arr.filter((num)=> num%2==0)

describe("la funcion filtrar",()=>{
     it("debe estar definida",()=>{
       expect(filtrar).toBeDefined()
     })
     it("debe retornar un array",()=>{
      expect(Array.isArray(filtrar([1,2,3,4,5,6]))).toBe(true)
    })
    it("debe retornar un array con n pares",()=>{
      expect(filtrar([1,2,3,4])).toEqual([2,4])
      expect(filtrar([2,4])).toEqual([2,4])
      expect(filtrar([1,3])).toEqual([])
      expect(filtrar([])).toEqual([])
    })

 })

