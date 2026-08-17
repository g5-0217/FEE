console.clear();
const prompt=require('prompt-sync')();
//const/var/let
const store="Rambo Store";
console.log(store);

/*var item1="Mobile";
var item1="Laptop";
console.log(item1);

let item2="Mobile";
{
let item2="Laptop";
}

console.log(item2);*/
//inventory

let items=["item1","item2","item3"];
let prices=[2000,5000,3000];
items.push("item4","item5");//to add items
//items.pop();removes last item of array
console.log(items);
console.log(items.length);
prices.push(6000,1000);
//console.log(items);
//customer oriented billing.
console.log("Billing System");
console.log();
console.log("SrNO.\t","Item\t","Price");
for(let i=0;i<items.length;i++){
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
    
}

console.log();
let srno=Number (prompt("Enter Item No. : "));
let quantity=Number (prompt("Enter Quantity : "));
//billing
let price=prices[srno-1];
let cost=price*quantity;
let discount=0;
if(cost>=5000){
    discount=cost*0.05;
}
else if (cost>=2000){
      discount=cost*0.02;
}
else{
    discount=cost*0.01; 
}

console.log("Discount is:$",discount);
console.log("Your bill amount is:$",cost-discount);



