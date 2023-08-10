function media(){
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    var nota3 = Number(document.getElementById("nota3").value)
    var med = (nota1+nota2+nota3) / 3    
    if (med >= 7){
        document.getElementById("resultado").innerHTML = "Aprovado. Média: " + med
    }
    else{
        document.getElementById("resultado").innerHTML = "Reprovado. Média: " + med
    }
}