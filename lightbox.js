const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const close_lightbox = document.createElement('div')
close_lightbox.id = 'close'
document.body.appendChild(close_lightbox)

const share = document.createElement('div')
share.id = 'share'
document.body.appendChild(share)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e =>{
       lightbox.classList.add('active')
       close_lightbox.classList.add('active')
       share.classList.add('active')
       const img = document.createElement('img')
       img.src = image.src
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
       while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
       }
       lightbox.appendChild(img)
    })
})

close_lightbox.addEventListener('click', e => {
    lightbox.classList.remove('active')
    close_lightbox.classList.remove('active')
    share.classList.remove('active')
    document.getElementsByTagName("body")[0].style.overflowY = "overlay";
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget){
    return
    }
    lightbox.classList.remove('active')
    close_lightbox.classList.remove('active')
    share.classList.remove('active')
    document.getElementsByTagName("body")[0].style.overflowY = "overlay";
})