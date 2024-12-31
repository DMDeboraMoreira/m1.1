const Repositorio= require("./models/repository")

const repositorio= new Repositorio()

repositorio.crearActividad("pasear","es saludable")
repositorio.crearActividad("futbol","saludable")
repositorio.crearActividad("bailar","salud")

console.log(repositorio.listarActividades());

