document.addEventListener('keyup', function(evt){
    if (evt.key === 'w') {
        lebronY -= 5
    } else if (evt.key === "a") {
        lebronX -= 5
    } else if (evt.key === "s") {
        lebronY += 5
    } else if (evt.key === "d") {
        lebronX += 5
    }
   
    
})