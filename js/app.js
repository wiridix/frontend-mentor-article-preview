const shareBtn = document.getElementById('shareIconBtn');
const shareBtnAuthor = document.getElementById('share-autor');
const contentActive= document.querySelector('.share-btn-active');

shareBtnAuthor.addEventListener('click', ()=>{
    contentActive.classList.toggle('active')
})

shareBtn.addEventListener('click', ()=>{
    contentActive.classList.remove('active')
})