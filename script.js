// let myHeros = ['anish','suhas']

// let myNames = ['vivek','bindra']

// let heropower = {
//     thor: 'hammer',
//     spiderman: 'sling',

//     getSpiderPower:function(){
//         console.log(`spiderman's power is ${this.spiderman}`)
//     }
// }

// Object.prototype.kajal = function(){
//     console.log('kajal is present in all object')
// }

// myHeros.kajal()
// myNames.kajal()

// let user = {
//     firstname : 'Anish',
//     lastname : "chavan"
// }

// let profession = {
//     branch : 'mechanical',
//     college : 'imperial college'
// }

// profession.__proto__ = user  //old syntax

//modern syntax

// Object.setPrototypeOf(profession, user)

// Object.setPrototypeOf(user, profession)

// to get true length of the string
let headname = 'anish    '
String.prototype.truelength = function(){
    console.log(`true length is : ${this.trim().length}`)
}
