console.log('added');
let count=document.querySelector('.count');
let addBtn=document.querySelector('.add');
let subtractBtn=document.querySelector('.subtract');
let resetBtn=document.querySelector('.reset');
let counter = 0;
addBtn.addEventListener('click', ()=>{
counter+= 1;
count.innerHTML = counter;
})

subtractBtn.addEventListener('click', ()=>{
    counter -= 1;
    count.innerHTML = counter;

})

resetBtn.addEventListener('click', ()=>{
counter = 0;
count.innerHTML = counter;

})