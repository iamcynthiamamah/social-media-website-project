//===============================LEFT SIDE BAR==============================

const menuItems =document.querySelectorAll('.menu-item')

//remove active class from all menu item
const changeActiveMenu = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}



//add active class to the selected menu item
menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveMenu();   //this function is called to remove all existing active menu class before proceeding to listen to the click below and performing the function below
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none'
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';  //displays the notification popup upon click of the notification menu item
            document.querySelector('#notifications .notification-count').style.display = 'none'  //removes the notification count once the notification menu item is clicked
        }
    })
})


//===========================================MESSAGES=========================================================
const MessagesNotif = document.querySelector('#messages-notifications') //selects the menu item with the id of messages-notification
const MessagesCount = document.querySelector('#messages-notifications .notification-count') //selecting themessage count of the menu item with the ID of messages-notifications
const message = document.querySelector('.messages') //selecting the message bar in the RIGHT MAIN
const individualMessage = document.querySelectorAll('.message')   //selects the individual message on the RIGHT MAIN. i.e the div with the class of 'message'
const msgSearch = document.querySelector('#message-search')
//const sender = document.querySelectorAll('.message .message-body h5')



MessagesNotif.addEventListener('click', () => {
    MessagesCount.style.display = 'none'
    message.style.boxShadow = '0 0 1rem var(--color-primary)'  //highlights the messages box in the RIGHT MAIN upon clicking the messages menu-item by adding box-shaow to the right MAIN messages
    setTimeout(() => { message.style.boxShadow = 'none'}, 2000)  //removes the box-shadow after 2 seconds
})


//============SEARCHES CHAT
const searchMessages = () => {         //where searchMessages is the function used for the addEventListener below
    const val = msgSearch.value.toLowerCase();
    console.log(val)
    individualMessage.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();//selets the name of the message sender written in h5 tag in html and change it to lowercase
        console.log(name)
        if(name.indexOf(val) != -1){          //i.e if there is a match
            chat.style.display = 'flex';   //we used flex instead of block because that is the display styling of our 'message'in the css section
        }
        else{
            chat.style.display = 'none';
        }
    })
}

//SEARCH CHAT
msgSearch.addEventListener('keyup', searchMessages)  //the searchMessages Function is defined above



//==========================================THEME/DISPLAY CUSTOMIZATION=========================================================

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')

//OPEN THEME CUSTOMIZATION MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid'  //we used 'grid'instead of block because the initial display of 'customize-theme'is grid.
}

theme.addEventListener('click', openThemeModal); //the open themeModal function is above


//CLOSE THEME CUSTOMIZATION MODAL

const closeThemeModal = (e) => { //will close the theme customization whenever we click outside the card
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal)




//SELECTING AND CHANGING FONT SIZES UNDER THEME CUSTOMIZATION
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');  //select the root element
console.log(fontSizes)


//remove active class from span or font size selector
const removeSizeSeletor = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {    //size is the element of the foreach loop
     
    size.addEventListener('click', () => {
        removeSizeSeletor()  //remove the active class from font size selector
        let fontSize;
        size.classList.toggle('active')  //toggles the active class for the selected font span

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem')
        root.style.setProperty('----sticky-top-right', '5.4rem')
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem')
        root.style.setProperty('----sticky-top-right', '-7rem')
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem')
        root.style.setProperty('----sticky-top-right', '-17rem')
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '17.8px';
        root.style.setProperty('----sticky-top-left', '-5rem')
        root.style.setProperty('----sticky-top-right', '-25rem')
    }
    else{
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-10rem')
        root.style.setProperty('----sticky-top-right', '-35rem')
    }

//change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    console.log(fontSize)

})
    
})


//CHANGING PRIMARY COLORS UNDER THEME CUSTOMIZATION
const colorPalette = document.querySelectorAll('.choose-color span');

//remove active color class
const removeActiveColor = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active')
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeActiveColor();  //calls the function removeActive color
        color.classList.toggle('active')  //toggles the active class for the loop
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }

        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }

        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }

        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }

        else{
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})



//CHANGING THE BACKGROUND UNDER THEME CUSTOMIZATION
    const Bg1 = document.querySelector('.bg-1');
    const Bg2 = document.querySelector('.bg-2')
    const Bg3 = document.querySelector('.bg-3')

    //theme background values
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    //change BG FUNCTION
    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness)
        root.style.setProperty('--white-color-lightness', whiteColorLightness)
        root.style.setProperty('--dark-color-lightness', darkColorLightness)
    }
    
    //for clicking BG1
        Bg1.addEventListener('click', () => {
            darkColorLightness = '95%'
            whiteColorLightness = '20%'
            lightColorLightness = '15%'
        
        //add active class
        Bg1.classList.add('active')
        //remove active class
        Bg2.classList.remove('active')
        Bg3.classList.remove('active')
        
        //remove customized changes from local storage
        window.location.reload()
        })

    //for clicking BG2
        Bg2.addEventListener('click', () => {
            darkColorLightness = '95%'
            whiteColorLightness = '20%'
            lightColorLightness = '15%'

        //add active class
        Bg2.classList.add('active')
        //remove active class
        Bg1.classList.remove('active')
        Bg3.classList.remove('active')

        //call a function
        changeBG();
        })

    //for clickingBG3
        Bg3.addEventListener('click', () => {
            darkColorLightness = '95%'
            whiteColorLightness = '20%'
            lightColorLightness = '0%'

        //add active class
        Bg3.classList.add('active')
        //remove active class
        Bg1.classList.remove('active')
        Bg2.classList.remove('active')

        //call a function
        changeBG();
        })





    const menu = document.querySelector('.left')
    console.log(menu)
    const profile = document.querySelector('nav .profile-pics img')
    console.log(profile)

    profile.addEventListener('click', () => {
        menu.style.display = 'block'
    } )