// Check if the flag is already set in localStorage
if (!localStorage.getItem('promptShown')) {
    // Prompt the user for input
    var name1 = prompt('Please enter your name:');
    var name2 = prompt('Please enter another name:');
  
    // Save the input in localStorage
    localStorage.setItem('name1', name1);
    localStorage.setItem('name2', name2);
  
    // Set the flag to indicate that the prompt has been shown
    localStorage.setItem('promptShown', 'true');
  }
  
  // Retrieve the names from localStorage
var name1 = localStorage.getItem('name1').split(" ");
var name2 = localStorage.getItem('name2').split(" ");
for(var i=0; i<name1.length;i++) {
    name1[i] = name1[i].charAt(0).toUpperCase() + name1[i].slice(1);
}
for(var i=0; i<name2.length; i++) {
    name2[i] = name2[i].charAt(0).toUpperCase() + name2[i].slice(1);
}
name1 = name1.join(" ");
name2 = name2.join(" ");
document.querySelector('.card.one h2').textContent = name1;
document.querySelector('.card.two h2').textContent = name2;
var randomNumOne = Math.floor(Math.random()*6+1);
var randomNumTwo = Math.floor(Math.random()*6+1);
var emojs = ["🚩", "🔥", "👊", "😊", "✌️", "⭐", "😎", "👍", "👌", "💕", "🏆","🏅","⚡","💥","❤️‍🔥", "🎯", "🥇", "💫", "🌟"];
var randomEmoj = emojs[Math.floor(Math.random()*emojs.length)];
document.querySelector('.card.one img').setAttribute('src', "./images/dice"+randomNumOne+".png");
document.querySelector('.card.two img').setAttribute('src', "./images/dice"+randomNumTwo+".png");
if (randomNumOne === randomNumTwo) {
    document.querySelector('h1').textContent = "Draw!";
}else if(randomNumOne < randomNumTwo) {
    document.querySelector('h1').textContent = name2+" Win "+randomEmoj;
}else {
    document.querySelector('h1').textContent = randomEmoj+name1+" Win";
}