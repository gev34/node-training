console.log("JS is connected")
const searchForm = document.querySelector('form') 
const input = document.querySelector('input')
let firstMessage = document.querySelector('.message-1')
let secondMessage = document.querySelector('.message-2')

searchForm.addEventListener('submit',(e)=> {
    e.preventDefault();

    fetch(`http://localhost:3000/weather?address=${input.value}`).then((res)=>res.json()).then((data) => {
        if(data.error){
            console.log(data.error);
            firstMessage.innerHTML = data.error
        }else{
            console.log(data.location)
            firstMessage.innerHTML = data.forecast
        }
    })
})