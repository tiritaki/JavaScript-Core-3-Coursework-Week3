let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [hotCake, applePie, eggMcMuffin, sausageMcMuffin, hotCoffee, hashBrown] = order
console.log(` QTY     ITEM                       TOTAL` )
order.forEach(item => {
  console.log(`  ${item.quantity}     ${(item.itemName).padEnd(16)}             ${item.quantity*item.unitPrice}` )
})
let totalPrice = 0
order.forEach(total => {
  totalPrice += total.quantity*total.unitPrice
})
console.log(`  Total: ${totalPrice}`)
