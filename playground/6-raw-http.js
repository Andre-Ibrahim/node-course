const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=30fbb72c1c8e214644ad22468d539ad5&query=45,-75`

const request = http.request(url, (response) =>{
    let data = ''


    response.on('data', (chunk) => {
        data += chunk.toString()
        

    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('an error ' + error)
})

request.end()
