let colors=['blue','yellow','black','red','brown','orange']
let button=document.getElementById('button');
button.addEventListener('click',function() {
var randomColor=colors[Math.floor(Math.random()*colors.length)]
button.style.color=randomColor
})