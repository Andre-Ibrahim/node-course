const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if(!address){
    console.log("Please provide an address below")
    process.exit(1)
} 

geocode(process.argv[2], (error, {name, latitude, longitude} = {})=>{

    if(error){
        return console.log(error)
    }

    forecast(latitude, longitude, (error, {temp, precip} = {}) => {
        
        if(error){
            return console.log(error)
        }
        
        console.log(name)
        console.log(`the temperature is ${temp}C and the there is a ${precip}% chance of rain`)
        
    })
    

})

