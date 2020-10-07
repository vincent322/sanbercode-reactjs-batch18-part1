var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 },
    { name : 'time Up', timeSpent: 5000}
]

function ReadBooks(){
    var I = 0
    readBooks(10000, books[I], function read (times) {
        if (times > 0) {
            I+=1
            if(books.length > I){
                readBooks(times, books[I], read)
            }
        } else {
            return
        }
    });    
}

ReadBooks()     