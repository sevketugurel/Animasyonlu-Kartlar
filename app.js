const panelDOM = document.querySelectorAll(".panel") // bütün panellerde gezindik

panelDOM.forEach(item =>{

    item.addEventListener('click',()=>{
        activeRemove()
        item.classList.add("active")
    })
})

//Active classını kaldıran fonksiyon
const activeRemove = () => panelDOM.forEach(panel => panel.classList.remove('active'))
