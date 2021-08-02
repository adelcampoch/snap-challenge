//change text font




//map scroll to delete words// look javascript split strings in to array
const scrolling = (event) => {
    console.log(event.target)
    let arrayOfText = event.target.innerText.split('')
    arrayOfText.pop()
    event.target.innerText = arrayOfText.join(' ')

}

//find and replace
const findAndReplace = (event) => {
    event.preventDefault()
    const findAndReplaceElement = document.getElementById('find-replace-text')


}


//highlightWord







