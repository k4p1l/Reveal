let bro = document.documentElement;
let uvLight = document.querySelector('.uv-light')

console.log(bro)

bro.style.setProperty('--t','0px');

document.body.addEventListener('mousemove',function(e){
    bro.style.setProperty('--t', e.clientX +'px')
    uvLight.style.left=`${e.clientX - 15}px`
})
