
function process(){
    let amount= document.getElementById("field1").value;
    let no= document.getElementById("field2").value;
    let avg= amount/no;
    let text = "Contribution per person = $"+(avg) ;    
    document.getElementById("output").innerHTML = text;
}