
let age;

document.getElementById("btn").onclick = function() {
    age = document.getElementById("int").value;
    document.getElementById("H1").textContent = `This is your age ${age}`
}