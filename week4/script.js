//Using the foreach loop display this array of text to the DOM.
//Hint: Each array element must appear in it's own html tag in the browser. Extra Credit: use map or reduce.
//.map does the same thing



const names =    ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

let target = document.getElementById('target')
//target.innerText = 'we changed the text'
console.log(target)

names.forEach(name=>target.innerHTML = target.innerHTML + `<p>${name}</p>`)

let  p =document.createElement('p')
p.innerText = 'this is a p tag'
console.log(p)
target.appendChild(p)

