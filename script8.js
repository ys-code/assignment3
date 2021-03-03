//Validate Numeric Entries
do{
    investment = parseFloat(window.prompt("Enter investment amount as xxx.xx"));
} while(isNaN(investment));
 
do{
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
} while (!(Number(rate)>0 && Number(rate)<6 ))

do{
    years = parseInt(window.prompt("Enter number of years"),10);
} while (!(years>1 && years<30));
