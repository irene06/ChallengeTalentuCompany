

let url = "https://reqres.in/api/users?page=1"
console.log(url)
fetch(url)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      mostrarData(data.data)
    })
  .catch((error) => console.log(error));

function mostrarData(data) {
    let body =''
    for (let i = 0; i<data.length; i++){
        body+=`
    <tr>
        <td>${data[i].id}</td>
        <td>${data[i].first_name}</td>
        <td>${data[i].edad}</td>
        <td>${data[i].email}</td>
      </tr>`
    }
    document.getElementById('data').innerHTML = body

}

var nombre = prompt('Hola, ¿Cuál es tu nombre?')
alert('Bienvenido '+ nombre);

        var success = prompt('Usuario agregado exitosamente')


