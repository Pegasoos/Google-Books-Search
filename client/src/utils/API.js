export default {

    search: function(query){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`,{
        method:"GET",
        headers:{"Content-type":"application/json;charset=UTF-8"}
    })
    }
}