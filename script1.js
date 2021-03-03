//The Coin Flip Game Redux
let coinFlip;
runTime=prompt("How many loops: ");
for (let i=0; i<runTime; i++){
    coinFlip=Math.round(Math.random());
    if (coinFlip===0){
        window.console.log('Heads');
    } else {
    window.console.log('Tails');
    }
}