var dia = "manha"//so pode ser manha, tarde ou noite. COM AS ASPAS.
if (dia == "manha") {
    console.log("Bom dia")
}
else {
    if (dia == "tarde"){
        console.log("Boa tarde")
    }
    else {
        if (dia == "noite"){
            console.log("Boa noite")
        }
        else {
            console.log("Defina um horario do dia")
        }
    }
}

// voce pode usar (new Date()) para pegar algo do sistema
// condicoes parte 2 do curso de javascript minuto 17