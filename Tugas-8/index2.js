var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    {name : 'Bwahaha', timeSpent: 5000}
]

function readBooks() {
    var I = 0
    readBooksPromise(10000, books[I]).then(function read(times) {
        if (times > 0) {
            I+=1
            if(books.length > I){
                readBooksPromise(times, books[I]).then(read).catch(function(){
                    return
                })
            }
        }
    })
}

readBooks(); 