//Marco!Polo!
for (let i=1; i<101; i++){
    if(i%3==0 && i%5>0){
        window.console.log('Marco!');
    }else if(i%3==0 && i%5==0){
        window.console.log('Marco!Polo!');
    }else if(i%3>0  && i%5==0){
        window.console.log('Polo!')
    }else{
        window.console.log(i)
    }
}