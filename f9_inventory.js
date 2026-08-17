console.clear();
console.log("Inventory Entry System");
//inventory
console.log();
const prompt=require("prompt-sync")();
let stock=[];
function addStock()
{
    let item_code=Number(prompt("Enter Item Code: "));
    let irem_name=prompt("Enter Item Name");
    let item_price=Number(prompt("Enter Price: "));
     let item_quantity=Number(prompt("Enter Quantity: "));


     stock.push(item);
console.log("\nInventory Updated");
console.log();
}
//while loop
while(true){
    let loop=prompt("Add More Items(o for NO/ 1 for Yes): ");
    loop=parseInt(loop);          // convert string to int and also if 1.25 is given by user the system will take only 1 as input
    if(loop===0)break;
}
console.log("\nInventory Entry Completed");
console.log("\n Updated Stock is as follows");
console.log("stock");
console.log();

for(let element of stock){
    console.log(element.item);
}
//here we have used function inside a block
//another variety of loop
console.log("This is forEach loop");
stock.forEach((element)=>{
    console.log(element.price);
});
//this demo was that of callback function

