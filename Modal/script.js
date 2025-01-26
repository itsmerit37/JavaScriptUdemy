'use strict';

const modal=document.querySelector('.modal')
const overLay=document.querySelector('.overlay')
const btncloseModal=document.querySelector('.close-modal')
const btnOpenModal=document.querySelectorAll('.show-modal')

const openModal=function()
{
   modal.classList.remove('hidden')
   overLay.classList.remove('hidden')
}

const closeModal=function()
{
      modal.classList.add('hidden')  
      overLay.classList.add('hidden') 
}

for(let i=0;i<btnOpenModal.length;i++)
btnOpenModal[i].addEventListener('click',openModal)
   btncloseModal.addEventListener('click',closeModal)
   overLay.addEventListener('click',closeModal)
   document.addEventListener('keydown',function(e)
{
    if(e.key==='Escape' && !modal.classList.add('hidden'))
    {
       
            closeModal();
    } 
})
