/*eslint-env browser*/
let inventory = [
  [4824, "Shirt", 10, 15.99],
  [6343, "Jeans", 22, 39.99],
  [3223, "Socks", 36, 9.99],
  [2233, "Hat", 12, 14.99],
  [9382, "Jacket", 5, 49.99]
]

function main() {
  let command
  displayMenu()

  while (true) {
    command = window.prompt("Enter command:")

    if (command !== null) {
      if (command === 'view') {
        view()
      } else if (command === 'update') {
        let sku = window.prompt("Please input sku:")
        let newAmount = window.prompt("Please enter new amount")

        let inventoryToUpdate = inventory.filter((product) => {
          return product[0] === parseInt(sku)
        })
        inventoryToUpdate[0][2] = parseInt(newAmount)
        console.log(`SKU number ${sku} has been updated to show ${newAmount} in inventory.`)

      } else if (command === 'exit') {
        break
      } else {
        window.alert("command is not valid")
      }
    } else {
      break
    }
  }
}

function view() {
  inventory.sort((a, b) => a[0] - b[0]).forEach((product) => {
    console.log(`SKU - ${product[0]} (${product[1]}) has ${product[2]} left in inventory at a sale price of $${product[3]}`)
  })
}

function displayMenu() {
  console.log("Welcome to the inventory system")
  console.log("")
  console.log("Command menu")
  console.log("view - displays all products")
  console.log("update - updates count of that inventory")
  console.log("exit - exit the program")
}
