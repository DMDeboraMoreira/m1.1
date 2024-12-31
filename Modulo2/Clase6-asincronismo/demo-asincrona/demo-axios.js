const axios= require("axios")

axios.get("https://students-api.up.railway.app/movies")

// los metodos de axios siempre me retornan una promesa
// cuando axios realiza una solicitud y obtiene un resultado favorable, axios resuelve la promesa
// cuando axios realiza una solicitud y NO obtiene un resultado favorable, axios rechaza la promesa y arroja un error


// ! IMPORTANTE PARA LOS METODOS POST! (envia info al servidor) segundo argumento: a donde va la info (obj cn propiedades)
axios.post("https://students-api.up.railway.app/movies", { title: "titanic", year:"XXXX"})

axios.put("URL",{}) //p modificar un recurso

axios.delete("URL")