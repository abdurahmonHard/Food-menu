const menuBtn = document.querySelectorAll('.menu-btn');
const fooditem = document.querySelectorAll('.food-item');


let activeBtn = 'featured';


showFoodMenu(activeBtn);

menuBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        resetActiveBtn()
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    })
})

function resetActiveBtn(){
    menuBtn.forEach((btn)=>{
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    fooditem.forEach((item)=>{
        if(item.classList.contains(activeBtn)){
            item.style.display = 'grid'
        } else{
            item.style.display = 'none'
        }
    })
}




