function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var numOfPeople = document.getElementById("numOfPeople").value;

if(numOfPeople === "" || numOfPeople <= 1) {
    numPeople = 1;
    
    document.getElementById("each").style.display = "none"; //hide each id
} else {
    document.getElementById("each").style.display = "block";
}

var total = (billAmount / numOfPeople);
total = Math.round = (total * 100 / 100);
total = total.toFixed(2);

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;

};

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function

document.getElementById("calculate").onclick = function () { calculateTip(); };