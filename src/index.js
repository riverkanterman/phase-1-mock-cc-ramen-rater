// write your code here

//fetch all the ramens
//create img tag
//put ramen img in the img tag
//append img to div

//click event listener on image
//show ramen detail on dom

//grab form
//build new ramen obj
//render on dom

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

const ramenUrl = 'http://localhost:3000/ramens'

function fetchRamens() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(allRamenObj => renderAllRamens(allRamenObj));
}

//DOM selectors & event listeners
const form = document.getElementById('new-ramen')

form.addEventListener('submit',ramenForm)


//function to iterate over array
function renderAllRamens(allRamenObj) {
    allRamenObj.forEach(ramenObj => renderOneRamen(ramenObj))
}

//function to render ramen to dom, img & details
function renderOneRamen(ramenObj){
    const div = document.querySelector('#ramen-menu')
    const img = document.createElement('img')
    img.src = ramenObj.image
    div.append(img)
    img.addEventListener('click',(e) => clickRamen (e, ramenObj))
}

// image, name, restaurant,rating display, comment display
function clickRamen(ramenObj) {
    const detailImage = document.querySelector('.detail-image')
    const detailName = document.querySelector('.name')
    const detailRestaurant = document.querySelector('.restaurant')
    const detailRating = document.getElementById('rating-display')
    const detailComment = document.getElementById('comment-display')


    detailImage.src = ramenObj.image
    detailName.textContent = ramenObj.name
    detailRestaurant.textContent = ramenObj.restaurant
    detailRating.textContent = ramenObj.rating
    detailComment.textContent = ramenObj.comment
    
    console.log('test')

}

function ramenForm(e){
    e.preventDefault()

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    renderOneRamen(newRamen)
}


fetchRamens()

});