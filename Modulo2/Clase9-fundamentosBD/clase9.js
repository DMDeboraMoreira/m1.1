//Fundamentos de Bases de datos

//datos

//informacion

//entidad
//Una entidad representa un objeto o concepto del mundo real que puede ser identificado, almacenado y gestionado en una base de datos.

//atributo
//Las características o propiedades de una entidad, describen a la entidad y la información específica que ésta representa.

//ej
//"Cliente" es una entidad y cada cliente individual q registramos en la base d datos representa una instancia o registro único 
// d esa entidad. Los atributos (ID del Cliente, Nombre, Correo Electrónico, Dirección) describen las características específicas d c/u

//id
//clave primaria
//clave foranea

//Normalización de Datos
//Este proceso implica dividir las tablas de la base de datos para evitar la repetición innecesaria de información
//  y garantizar que los datos se almacenen de manera coherente

//Persistencia de datos
//permite almacenar y recuperar info a través dl tiempo incluso cuando un programa/app haya terminado su ejecución x cierre o actualización
//Esto nos permitirá tener los datos disponibles más allá de la ejecución temporal de un programa
//La persistencia d datos se refiere a la capacidad d almacenar info d manera duradera, incluso cuando apagamos nuestros dispositivos,
//  p acceder a esta en cualquier momento a futuro
// Hay dos maneras principales de lograr esto: 
// mediante sistemas de archivos y almacenamiento local. 

//Sistemas de archivos y almacenamiento Local
//1. Sistemas de archivos
//Un sistema de archivos es una estructura utilizada por un sistema operativo para organizar y guardar datos en un dispositivo 
// como un disco duro o memoria USB, a través de carpetas y archivos.

//2. Almacenamiento Local (Local Storage):
//Dentro d ls navegadores disponemos d herramientas q nos permiten tener un almacenamiento local y d sesión mediante 
// la API Web Storage nativa.
//Esto permite q ls app puedan almacenar datos dl lado dl cliente utilizando la persistencia d datos cn Local Storage 
// o la información de una sesión con Session Storage.  

//formatos de almacenamiento.
//Uno de los formatos más comunes es el formato JSON. 
// Este proporciona una estructura clara y legible para organizar datos, lo que lo hace ideal para almacenar información 
// en el contexto del desarrollo web.

//El uso de formatos de almacenamiento adecuados es importante para garantizar que los datos se guarden y recuperen. 
// Al comprender los sistemas de archivos, el almacenamiento local y los formatos de almacenamiento,
//  podemos tomar decisiones informadas sobre cómo estructurar y gestionar datos en nuestras aplicaciones.