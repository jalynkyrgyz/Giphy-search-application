const searchForm =document.getElementById("search-form")
const searchInput = document.getElementById("search-input")
const resultsEl = document.getElementById("results")

searchForm.addEventListener("submit", function(e){
    e.preventDefault()
    const q = searchInput.value
    search(q)
})

function search(q){
    
    const apikey = '7ZDy4CsPTDmaBmM5nxP1FPF62SVDgtGJ';
    const path = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

    /*const p = fetch(path) // Promise 1
    const p2 = p.then(function(response){
        return response.json() // Promise 2
    })
    p2.then(function(json){
        console.log(json);
    })*/

    fetch(path).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json.data[0].images.fixed_width.url)
        
        let resultsHTML = ''

        json.data.forEach(function(obj){
            console.log(obj)
            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.width
            const height = obj.images.fixed_width.height
            const title = obj.title
            resultsHTML+= `<img className="item" src='${url}' width='${width}' height='${height}' alt='${title}'>`
        })

        resultsEl.innerHTML = resultsHTML
    }).catch(function(err){  // only one catch for error
        console.log(err.message);
    }) 
}

