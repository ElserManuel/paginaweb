const url = "http://localhost:3000/user";
let resultados = '';
const formArticulo = document.getElementById("form");
const usename = document.getElementById("usename");
const useape = document.getElementById("useape");
const usecelu = document.getElementById("usecelu");
const emause = document.getElementById("emause");
const usedir = document.getElementById("usedir");
const usedni = document.getElementById("usedni");
const pasuse = document.getElementById("pasuse");

const registrado=false;



var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
        e.preventDefault();
        if (opcion == 'crear') {
            if (usename.value == "" || useape.value == "" || usecelu.value == "" || emause.value == "" || usedir.value == ""  || usedni.value == "" || pasuse.value == "") {
                alert("Asegúrese de que todos los campos estén completos");
                return false;
            } else {
                console.log("Todos los campos están completos");
                fetch(
                    url,
                    {
                        method: 'POST',
                        headers: {
                            'content-Type':'application/json'
                        },

                        body: JSON.stringify(
                            {
                               usename: usename.value,
                               useape: useape.value,
                               usecelu: usecelu.value,
                               emause: emause.value,
                               usedir: usedir.value,
                               usedni: usedni.value,
                               pasuse: pasuse.value

                            }
                        )
                    
                }).then(function(response){
                    response => response.json()
                }).then(function(muutuja){
                    document.getElementById('form').innerHTML = JSON.stringify(muutuja);
                });
                location.reload()
            }
        } else if(opcion == 'editar'){
            console.log("Activado el ");
        }

    }
);

/* INICIAR SESSION */

//Login
const url_login="http://localhost:3000/login";
const formlogin = document.getElementById("formlogin");
const user = document.getElementById("emaill");
const pass = document.getElementById("passl");


btnini.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'iniciar';
});


formlogin.addEventListener('submit',
    (e) => {
        e.preventDefault();
        if (opcion == 'iniciar') {
            if (user.value == "" || pass.value == "") {
                alert("Asegúrese de que todos los campos estén completos");
                return false;
            } else {
                console.log("Todos los campos están completos");
                fetch(
                    url_login,
                    {
                        method: 'POST',
                        headers: {
                            'content-Type':'application/json'
                        },

                        body: JSON.stringify(
                            {
                               user: user.value,
                               pass: pass.value,
                            }
                        )
                    
                }).then(function(response){
                    response => response.json()
                }).then(function(muutuja){
                    document.getElementById('formlogin').innerHTML = JSON.stringify(muutuja);
                });
                location.reload()
            }
        } else if(opcion == 'editar'){
            console.log("Activado el ");
        }

    }
);



