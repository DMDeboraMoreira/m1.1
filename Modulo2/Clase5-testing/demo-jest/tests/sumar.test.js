const {sumar}= require ("../index")

const mockSumar=jest.fn(sumar)

describe ("la funcion sumar",()=>{
    it ("debe retornar null si no se ejecuta con un numero", ()=>{
        expect(mockSumar(1, true) ).toBe(null)
        expect(mockSumar(10, false)).toBe(null)
        expect(mockSumar("hola", "chau")).toBe(null)
        
    })
    it ("debe retornar la suma", ()=>{
        expect(mockSumar(10, 15) ).toBe(25)
        expect(mockSumar(0, 0)).toBe(0)
        expect(mockSumar(-20, -30)).toBe(-50)
    })
    it("debe registrar bien los argumentos 10 y 15",()=>{
        expect(mockSumar).toHaveBeenCalledWith(10,15);

    })

})