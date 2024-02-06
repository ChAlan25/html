function sum(){
    a=document.getElementById('a').value*1;
    b=document.getElementById('b').value*1;
    document.getElementById("c").value = a+b;
    return false;
}
function multiply() {


    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    document.getElementById("c").value = a*b;
    return false;

}
function deduction(){


    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    document.getElementById("c").value = a-b;
    return false;
}
function division() {
    var a=parseInt(document.getElementById('a').value);
    var b=parseInt(document.getElementById('b').value);
    alert(a/b);
    return false;
}