const square = function (x) {
    return x * x
}
const lambda = (x) => {
    return x * x
}
console.log(square(3))

console.log(lambda(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestListArrow: () => {
        console.log('Guest list for '+ this.name)
    },
    printGuestList: function() {
        this.guestList.forEach( (guest) => {
            console.log(guest + 'is attending ' + this.name)
        })
        console.log('Guest list for '+ this.name)
    }
}

event.printGuestList()
event.printGuestListArrow()