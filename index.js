import {
    default as galleryItems
  } from './gallery-items.js'
  
  console.dir(galleryItems);


  //===================================
  

  console.table(galleryItems);



  const ulRef = document.querySelector('.js-gallery');
  const fragment = document.createDocumentFragment();

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


   //===========================
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]')
const backdropRef = document.querySelector('.js-lightbox');

openModalBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () =>{
    document.body.classList.remove('is-open');
});
backdropRef.addEventListener('click', event => {
console.log(event);
console.log('event target; ', event.target);
console.log('event.currentTarget; ', event.currentTarget);
});

// if(event.target === event.currentTarget){
//     console.log('кликнули по темному');
//     document.body.classList.remove('js-open');
// }
// });

function onOpenModal(){
    window.addEventListener('keydown', event => {
if(event.code ==='Escape'){
    onCloseModal();
    console.log('надо закрыть, нажали escape')
       }
    })
};


document.body.classList.add('is-open')
function onCloseModal(){
    document.body.classList.remove('is-open');
};

function  onBackDropClick(event){
    if(event.target === event.currentTarget){
        onCloseModal();
    }
};










  


  



