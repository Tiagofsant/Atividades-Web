function caucula() {
    let peso = document.getElementById("peso").value;
    console.log(peso);
    peso = Number(peso);
    let agua = peso * 35;
    console.log(agua)

    if (idade <= 17) {
        peso = Number(peso);
        let agua = peso * 40;
        console.log(agua)
    }

    else if (idade >= 18 && idade <= 55) {
        peso = Number(peso);
        let agua = peso * 35;
        console.log(agua)
    }

    else if (idade >= 56 && idade <= 65) {
        peso = Number(peso);
        let agua = peso * 35;
        console.log(agua)
    }

    else if (idade >= 66) {
        peso = Number(peso);
        let agua = peso * 25;
        console.log(agua)
    }

    const resultado = document.getElementById("resultado")
    resultado.innerHTML = `Você deve tomar ${agua} ml diariamente`;
}