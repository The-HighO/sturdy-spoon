// Declarations
let url = 'https://randomuser.me/api/';
let userImage = document.querySelector(".imgSubCont")
let title = document.querySelector(".title")
let fullname = document.querySelector(".fullname")
let phone = document.querySelector(".phone")
let email = document.querySelector(".email")
let country = document.querySelector(".country")
let state = document.querySelector(".state")
let city = document.querySelector(".city")



// FetchFunction

const getApi = ()=>{
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // Display Content
        userImage.style.background = `url(${data.results[0].picture.medium})`
        title.textContent = data.results[0].name.title
        fullname.textContent = data.results[0].name.first + " " + data.results[0].name.last
        phone.textContent = data.results[0].phone
        email.textContent = data.results[0].email
        country.textContent = data.results[0].location.country
        state.textContent = data.results[0].location.state
        city.textContent = data.results[0].location.city
    })
}

getApi()