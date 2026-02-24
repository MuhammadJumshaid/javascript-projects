// 20260224 

function generate(){
    var quotes = {
         "jimi" : '"What is your name"',
        "Jumshaid" : '"My name is Jumshaid"',
        "aaa" : '"How are you doing"',
        "bbbb" : '"I am doing well"'
    }

    var authers = Object.keys(quotes) 
    console.log(authers) //(4) ['jimi', 'Jumshaid', 'aaa', 'bbbb']


    var author = authers[ Math.floor(Math.random() * authers.length) ]
    console.log(author)

    var quote = quotes[author]
    console.log(quote)

    document.getElementById("quote").innerHTML = quote
    document.getElementById("author").innerHTML = author

}