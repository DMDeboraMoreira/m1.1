const { getItems } = require("../database")
const {calcularTotal} =require("../indexMock")


const mockGetItems = jest.fn(()=>{
    return [
        {name: "producto A", price: 10, quantity:2},
        {name: "producto B", price: 20, quantity:3},
    ]
})


describe ("la funcion calcularTotal",()=>{
    it ("la funcion 'getItems' debe ejecutarse al menos una vez", ()=>{
      calcularTotal(mockGetItems)
      expect(mockGetItems).toHaveBeenCalled()
    })
})