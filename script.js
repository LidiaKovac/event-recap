//!EVENTS
//js representation of the user taking an action
//onclick, onmouseover, ondrag, ondrop, onkeyup, onload, onpause, onplay, onchange, onsubmit

//event => OBJECT with info about what, when and where the event was triggered,
//         also includes, TARGET.
//event.target => {the HTML element you interacted on, AS AN OBJECT.}
//event.target.value => WILL STORE THE VALUE OF THE ELEMENT YOU INTERACTED WITH

const cartUl = document.querySelector("ul.cart")
let cart = []

console.log({document})


// button.addEventListener("click", (event)=> {
//     searchSomething(event)
// })

const searchSomething = (clickEvent) => {
    const valueOfTheInput = clickEvent.target.parentElement.children[0].value
    console.log(valueOfTheInput)
}

const clickHereForEvent = (someEvent) => {
  console.log(someEvent.target.value, "hello ")
}

const btns = document.querySelectorAll("button.addByJs")
btns.forEach(btn => {
    // btn.addEventListener("click", (event)=> {
    //     clickHereForEvent(event)
    // })
    btn.addEventListener("click", clickHereForEvent)

})

const getBooks = async () => {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books")
    let books = await res.json()

    const row = document.querySelector(".shop")
    books.forEach((book) => {
      row.innerHTML += `
            <li onclick='addToCart(event)'> ${book.title} </li>
        `
    })
  } catch (error) {}
}
const addToCart = (clickEvent) => {
    
    console.log(clickEvent)
    clickEvent.target.classList.toggle("clicked") //li
    let title = clickEvent.target.innerText
    if(!cart.includes(title)) { //if the title is not already in the array...
        cart.push(title)
        renderCart()
    } else { //if the title is already in the array
        cart = cart.filter(cartEl => cartEl !== title)
        renderCart()
    }
    
}

const renderCart = () => {
    cartUl.innerHTML = ""
    cart.forEach((singleCartEl)=> {
        cartUl.innerHTML += `<li> ${singleCartEl} </li>`
    })
}

const handleColor = (changeEvent) => {
    console.log(changeEvent)
    const h1 = document.querySelector("h1")
    h1.style.color = changeEvent.target.value
}

getBooks()
