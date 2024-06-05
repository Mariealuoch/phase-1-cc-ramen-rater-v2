// index.js
document.addEventListener("DOMContentLoaded", function(){
// Callbacks
const handleClick = (ramen) => {
  // Add code
const detailImage = document.querySelector(".detail-image")
detailImage.src=ramen.image

const h2Name= document.querySelector(".name")
h2Name.textContent=ramen.name

const h3Name= document.querySelector(".restaurant")
h3Name.textContent=ramen.restaurant

const ratings= document.querySelector('#rating-display')
 ratings.textContent= ramen.rating
 const comments = document.querySelector('#comment-display')
 comments.textContent=ramen.comment
  
};

const addSubmitListener = () => {
  // Add code
 const form = document.getElementById("new-ramen")
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
console.log("heh!")
  })
}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then((response)=> response.json())
  .then((data)=>{console.log(data)
    const ramenItems = document.querySelector("#ramen-menu")
    ramenItems.textContent=""
    data.forEach(ramen=> {
      const ramenElement=document.createElement("img");
      ramenElement.src=ramen.image
      ramenElement.addEventListener("click",()=>handleClick(ramen))


      ramenItems.appendChild(ramenElement)
    })

  } )

  
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitListener()
}

main()



})