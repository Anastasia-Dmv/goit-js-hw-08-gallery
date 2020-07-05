import {
    default as galleryItems
  } from './gallery-items.js'
  
  //===================================

  const ulRef = document.querySelector('.js-gallery');
  const largeImage = document.querySelector('.lightbox__image');
  const fragment = document.createDocumentFragment();
  const  lightboxRef = document.querySelector('.lightbox');
  const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
  const backdropRef = document.querySelector('.lightbox__content');

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
    //    console.log(largeImageUrl);

       lightboxRef.classList.add('is-open');
       window.addEventListener('keydown', onPressEscape);
    lightboxRef.classList.add('is-open');
};

function setLargeImageSrc(url){
       largeImage.src = url;

};

closeModalBtn.addEventListener('click', onCloseModal );
backdropRef.addEventListener('click', onBackDropClick);

function onCloseModal(){
    window.removeEventListener('keydown', onPressEscape);
lightboxRef.classList.remove('is-open');
largeImage.src = '';
};

function onBackDropClick(event){
    if (event.target === event.currentTarget ) {
        console.log('надо закрыть, нажали на backDrop');
        onCloseModal();
        }
};

function onPressEscape(event){
    if (event.code === 'Escape'){
        console.log('надо закрыть, нажали escape');
        onCloseModal();
        
    }
};

// ========= slider in the  process========











  


  



