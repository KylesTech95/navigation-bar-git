let input = document.querySelector('.search-dormant'),
    search = document.querySelector('.fa-magnifying-glass'),
    drop_down = document.getElementById('create-options-container'),
    create = document.querySelector('.nav1-menu-create'),
    nav_list = document.querySelectorAll('.nav1-list-container>li'),
    menu_btn = document.querySelector('.nav1-menu-bar'),
    side_menu = document.querySelector('.nav-container-side')
    //helper functions that closes active searches/dropdowns
    let outsideOfSearch = (element1,element2,mouse) => {
        let btnLeft = element2.getBoundingClientRect().x,
            btnRight = element1.getBoundingClientRect().x+element1.getBoundingClientRect().width
            btnTop = element1.getBoundingClientRect().y,
            btnBtm = btnTop + element1.getBoundingClientRect().height

        return (mouse.pageX <= btnLeft || mouse.pageX >= btnRight) || (mouse.pageY < btnTop || mouse.pageY > btnBtm);
    }
    let outsideOfCreate = (elem1,elem2,m) => {
        let buttonLeft = elem2.getBoundingClientRect().x,
            buttonRight = buttonLeft + elem2.getBoundingClientRect().width
            buttonTop = elem1.getBoundingClientRect().y,
            buttonBtm = elem2.getBoundingClientRect().y + elem2.getBoundingClientRect().height

        return (m.pageX <= buttonLeft || m.pageX >= buttonRight) || (m.pageY <= buttonTop || m.pageY >= buttonBtm);
    }
    let outsideOfSide = (elem1,m) => {
        let discussion = document.querySelector('.nav1-side-menu-discussion')
        let right = elem1.getBoundingClientRect().width
        let bottom = discussion.getBoundingClientRect().y + discussion.getBoundingClientRect().height

        return m.pageX >= right || m.pageY >= bottom
    }
    
    //Search-input event listener
    search.addEventListener('click',()=>{
        input.classList.toggle('search-active')
    })
    //drop-down event listener
    create.addEventListener('click',()=>{
        drop_down.classList.toggle('options-active')
    })
    //Side Menu event listener
    menu_btn.addEventListener('click',()=>{
        side_menu.classList.toggle('side-active')
    })
    //close widgets event listener
    window.addEventListener('click', (e)=>{
        let statement0 = side_menu.classList[side_menu.classList.length-1] == 'side-active';
        let statement1 = input.classList[input.classList.length-1] == 'search-active';
        let statement2 = drop_down.classList[drop_down.classList.length-1] == 'options-active';

            if(statement0 && outsideOfSide(side_menu,e)){
                setTimeout(() => {
                    side_menu.classList.remove('side-active');
                },150)
            } else{
                let exit = document.querySelector('.exit')
                exit.addEventListener('click',() => {
                setTimeout(() => {
                    side_menu.classList.remove('side-active');
                },150)
                })
            }
            if(statement1 && outsideOfSearch(search,input,e)){
                setTimeout(() => {
                    input.classList.remove('search-active');
                },150)
            }
            if(statement2 && outsideOfCreate(create,drop_down,e)){
                setTimeout(() => {
                    drop_down.classList.remove('options-active');
                },150)
            } 
    })

  nav_list.forEach(li => {
    let glow = document.querySelector('.under-light')
    
    li.addEventListener('mousemove',(e)=>{    
        let lix = e.target.getBoundingClientRect().x
        let pageX = e.pageX;
        glow.style = `left:${pageX-(glow.getBoundingClientRect().width/2)}px;visibility:visible;`
    })
    li.addEventListener('mouseout',(e)=>{    
        let pageX = e.pageX;
        let glow = document.querySelector('.under-light')
        glow.style = `left:${pageX}px;visibility: hidden;`
    })
  })