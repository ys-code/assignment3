//Countdown
let aNumber=parseInt(prompt('Please enter a number:'));
if (typeof(aNumber)==='number'&& aNumber>0){
    for (aNumber;aNumber>0;aNumber--){
        window.console.log(aNumber);
    }
}else{
    window.alert('Please enter a valid number');
}