import {
    default as galleryItems
  } from './gallery-items.js'
  
  console.dir(galleryItems);


  //===================================
  

  console.table(galleryItems);



  const ulRef = document.querySelector('.js-gallery');
  const largeImage = document.querySelector('.lightbox__image');
  const fragment = document.createDocumentFragment();
  const  lightboxRef = document.querySelector('.lightbox');
  const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
  const backdropRef= document.querySelector('.lightbox__overlay');


   

  //==========

  galleryItems.forEach(item => {

  const liRef = document.createElement('li');
  liRef.classList.add('gallery__item');

  const linkRef = document.createElement('a');
  linkRef.classList.add('gallery__link');
  linkRef.setAttribute('href', item.original);

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.setAttribute('src', item.preview);
  imgRef.setAttribute('data-source', item.original);
  imgRef.setAttribute('alt', item.description);
  
  

  linkRef.append(imgRef);
  liRef.append(linkRef);
  fragment.append(liRef);

  });
   ulRef.append(fragment);
   console.log(ulRef);
   
ulRef.addEventListener('click' , onGalleryClick);

function onGalleryClick(event) {
       event.preventDefault();
       if(event.target.nodeName !== 'IMG'){
           return;
       }
       const largeImageUrl = event.target.dataset.source;

       setLargeImageSrc(largeImageUrl);
       console.log(largeImageUrl);

       lightboxRef.classList.add('is-open');
};

function setLargeImageSrc(url){
       largeImage.src = url;

};

closeModalBtn.addEventListener('click', onCloseModal );

function onCloseModal(){
lightboxRef.classList.remove('is-open');
largeImage.src = '';

};
backdropRef.addEventListener('click', event => {
    if(event.target === event.currentTarget){
        lightboxRef.classList.remove('is-open');
        }
});


// backdropRef.addEventListener('click', event => {
//     if(event.target === event.currentTarget){
//         lightboxRef.classList.remove('is-open');
// // largeImage.src = '';
//     }
// });
// function onPressEscape(){

// }

   //===========================
   
   

//    function onOpenModal(){

//     // window.addEventListener('keydown', onPressEscape);
    
//     lightboxRef.classList.add('is-open');
// };




// const refs = {
//    openModalBtn: document.querySelector('.lightbox'),
//    closeModalBtn:  document.querySelector('button[data-action="close-lightbox"]'),
//    backdropRef: document.querySelector('.js-lightbox'),
// };


// openModalBtn.addEventListener('click', onOpenModal);
// closeModalBtn.addEventListener('click', onCloseModal);
// backdropRef.addEventListener('click', onBackDropClick);


// function onOpenModal(){

//     window.addEventListener('keydown', onPressEscape);
//     document.body.classList.add('is-open');
// };


// document.body.classList.add('is-open');

// function onCloseModal(){
//     window.removeEventListener('keydown', onPressEscape);
//     document.body.classList.remove('is-open');
// };

// function  onBackDropClick(event){
// // console.log('event target; ', event.target);
// // console.log('event.currentTarget; ', event.currentTarget);

//     if(event.target === event.currentTarget){
//         onCloseModal();
//     }
// };

// function onPressEscape(event) {
//     if(event.code === 'Escape'){
      
//         console.log('надо закрыть, нажали escape');
//           onCloseModal();
//            }
// };










  


  



