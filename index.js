function rate(book_id, no_of_stars){
    for(let i=1; i<=5; i++){
        if(i<=no_of_stars){
            document.getElementById(`${book_id}-star-${String(i)}`).classList.add('yellow')
            document.getElementById(`${book_id}-star-${String(i)}`).classList.remove('black')
        }else{
            document.getElementById(`${book_id}-star-${String(i)}`).classList.add('black')
            document.getElementById(`${book_id}-star-${String(i)}`).classList.remove('yellow')
        }
    }
}