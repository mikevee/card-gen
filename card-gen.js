var cardNumArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", ];
var suitArray = ["Spades", "Clubs", "Diamonds", "Hearts"];

var cardNum = cardNumArray [Math.floor(Math.random() * cardNumArray.length)];  
var suit = suitArray [Math.floor(Math.random() * suitArray.length)];
            
document.getElementById('num').innerHTML = cardNum;

document.getElementById('topsuit').className = "";
document.getElementById('topsuit').classList.add(suit);

document.getElementById('bottomsuit').className = "";
document.getElementById('bottomsuit').classList.add(suit);

if (suit == "Hearts" || suit == "Diamonds") {
    document.getElementById('card').className="";
    document.getElementById('card').classList.add("red");
}
else if (suit == "Spades" || suit == "Clubs") { 
    document.getElementById('card').className="";
    document.getElementById('card').classList.add("black");
}

if (cardNum == 8 || cardNum =="A"){
    document.getElementById('result').innerHTML = "You drew an " + cardNum + " of " + suit + "." + "<br>" + "<button type='button' class='btn' onclick='location.reload();'>New Card</button>";
}
else {
    document.getElementById('result').innerHTML = "You drew a " + cardNum + " of " + suit + "." + "<br>" + "<button type='button' class='btn' onclick='location.reload();'>New Card</button>";
}
