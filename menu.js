const menu = document.getElementById("menu")
const dishesTitle = document.getElementById("dishesTitle")
const dishesPrice = document.getElementById("dishesPrice")
const dishesUrl = document.getElementById("dishesUrl")
const menuBtn = document.getElementById("menuBtn")




for (index= 0; index < dishes.length; index++){
    const dish = dishes[index] 



    const menUdiv = `
        <div id=image>
        </div>
        <img src="${dish.dishesUrl}"/>
        

        <div>
        "${dish.dishesTitle}"
        </div>

        <div>
          "${dish.dishesPrice}"
        </div>
        `
        //menu.insertAdjacentHTML('beforebegin', menUdiv)
        menu.innerHTML = `<div>Menu</div>`       

      
       

}
const filteredStarters = dishes.filter(dish => dish.course === 'Starters')

const filteredEntrees = dishes.filter(dish => dish.course === 'Entrees')

const filteredDesserts = dishes.filter(dish => dish.course === 'Desserts')


