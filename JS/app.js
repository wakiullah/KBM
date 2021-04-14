// --------------------------------------------
// photo gallary

let photos = document.querySelectorAll('.photo');
let showPic = document.querySelector('.show-picture');
let body = document.querySelector('main');
let close = document.querySelector('.close');


photos.forEach(photo => {
    photo.addEventListener("click", e => {
        let imgNumber = e.target.dataset.indexNumber;
        showPic.style.background = `url(../../../img/${imgNumber}.jpg)`
        showPic.style.display = 'block';
        body.classList.add('blur');

    })
});

close.addEventListener("click", e => {
    showPic.style.display = 'none';
    body.classList.remove('blur');
})