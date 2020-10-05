//soal 1
let d = 2
let r = 7
let phi = 3.14

const KLingkaran = () => {
    let KelilingL = phi * d
    console.log("Keliling Lingkaran = "+phi+" * "+d+" = "+KelilingL)
}

const LLingkaran = () => {
    let LuasL = phi * r * r
    console.log("Luas Lingkaran = "+phi+" * "+r+" * "+r+" = "+LuasL)
}
KLingkaran()
LLingkaran()

//soal 2

const kalimat1 = 'saya'
const kalimat2 =  'adalah'
const kalimat3 = 'seorang'
const kalimat4 = 'frontend'
const kalimat5 = 'developer'

const kalimat = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`

console.log(kalimat)

//soal 3

const newFunction = (firstName, lastName) => {
    console.log(firstName + " " + lastName);
}
newFunction("Will", "Imoh");

//soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation, spell);

//soal5

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined)