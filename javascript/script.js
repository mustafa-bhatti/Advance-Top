const playerN = {
    name : "mustafa",
    marker : "X"
}
// console.log(playerN.name)
// console.log(playerN["marker"])

// using function to create an object

function player(name,marker) {
    this.name = name
    this.marker = marker
}

const player1 = new player("ahmad","O")
console.log(player1.name)