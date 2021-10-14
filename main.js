var Friends = [];

function submit() {
    console.log("Hello world");
    var Friend1 = document.getElementById("friend1").value;
    var Friend2 = document.getElementById("friend2").value;
    var Friend3 = document.getElementById("friend3").value;
    var Friend4 = document.getElementById("friend4").value;

    Friends.push(Friend1);
    Friends.push(Friend2);
    Friends.push(Friend3);
    Friends.push(Friend4);

    document.getElementById("Sorting").style.display = "inline-block";
    

    document.getElementById("displayLabel").innerHTML = Friends;
    document.getElementById("submit").style.display = "none";

    console.log(Friends);
    
    
}

function sort() {
    Friends.sort();

    document.getElementById("displayLabel").innerHTML = Friends;
}