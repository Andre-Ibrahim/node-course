// object property shorthand

const name = 'Andrew'

const userAge = 27

const user = {
    name,
    age: userAge,
    location: "montreal"
}

console.log(user)

//object destructuing

const product = {
    label: 'red note book',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, price, stock, salePrice, rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)