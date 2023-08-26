let output = document.getElementById("OUTPUT");

function display(num){
    output.value += num;
}
function Equals(){
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("Input invalid")
    }
}
function Ac(){
    output.value = "";
}
function del(){
    output.value =output.value.slice(0,-1);
}