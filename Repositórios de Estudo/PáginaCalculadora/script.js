function mplus(){
    let armazena = arguments
    if(armazena != 0){
        armazena.push(document.getElementById("areaCalc").innerHTML)
    } else {
        document.getElementById("areaCalc").innerHTML = (armazena[0])
    }
    console.log(armazena)

}
function exibir(dado){
    let exibir = document.getElementById("areaCalc").innerHTML; 
    document.getElementById("areaCalc").innerHTML = exibir + dado;
};
function calcular(){
    let resultado = document.getElementById("areaCalc").innerHTML;
    if(resultado){
        document.getElementById("areaCalc").innerHTML = eval(resultado);
    } else{
        document.getElementById("areaCalc").innerHTML  = "Não há nada aqui!";
    };
};
function limpar(){
    document.getElementById("areaCalc").innerHTML = " ";
};