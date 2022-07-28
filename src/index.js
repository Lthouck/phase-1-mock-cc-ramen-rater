// write your code here

const menu = document.querySelector("#ramen-menu")

fetch("http://localhost:3000/ramens")
    .then((r) => r.json())
    .then((data) => {
        const menu = document.querySelector("#ramen-menu")
        data.forEach((ramen) => {
            const image = document.createElement("img")
            image.src = ramen.image
            image.alt = ramen.name
            menu.append(image)
            image.addEventListener("click", (e) => {
                const detailImg = document.querySelector(".detail-image")
                const detailName = document.querySelector(".name")
                const detailRest = document.querySelector(".restaurant")
                const detailRating = document.querySelector("#rating-display")
                const detailComment = document.querySelector("#comment-display")
                detailImg.src = ramen.image
                detailImg.alt = ramen.name
                detailName.innerText = ramen.name
                detailRest.innerText = ramen.restaurant
                detailRating.innerText = ramen.rating
                detailComment.innerText = ramen.comment
            })
        })
    })

    document.querySelector("#new-ramen").addEventListener("submit", (e) => {
        e.preventDefault()
        const ramen = {
            name: e.target.name.value,
            image: e.target.image.value,
            restaurant: e.target.restaurant.value, 
            rating: document.querySelector("#new-rating").value,
            comment: document.querySelector("#new-comment").value
        } 
        const image = document.createElement("img")
        image.src = ramen.image
        image.alt = ramen.name
        menu.append(image)
    })




    // document.querySelector("#newe-ramen").addEventListener("submit", (e) => {
    //     e.preventDefault()
    //     const ramen = {
    //         name: e.target.name.value ,
    //         image: e.target.image.value, 
    //         restaurant: ,
    //         rating: ,
    //         comment: e.target["new-comment"]
    //     }
    //     const image = document.createElement("img")
    //         image.src = ramen.image
    //         image.alt = ramen.name
    //         menu.append(image)
    // })
