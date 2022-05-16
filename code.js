let personas = [];

function mostrarPersonas(){
   let texto = "";
   personas.forEach(persona => {
       texto += `<li>${persona.nombre} ${persona.apellido} </li>`
   } )
  document.getElementById("personas").innerHTML = texto;
}
function agregarPersona(){
     const form = document.forms["forma"];
     const nombre = form["nombre"];
     const apellido = form["apellido"];
     if(nombre.value != " " && apellido.value != " "){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas()
     }

}

function eliminarPersona(){
   personas.pop()
   mostrarPersonas()
}

function eliminarTodos(){
   personas = []
   mostrarPersonas()
}