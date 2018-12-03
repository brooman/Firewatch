//Resize video container on load
function resizeIframe(){
    let largeBox = document.querySelector('.large-box')
    largeBox.setAttribute('style', `height: ${(largeBox.offsetWidth / 16 ) * 9}px`)
}


//Set height on load
resizeIframe()

//Add eventlistener on resize to adjust accordingly
window.addEventListener('resize', function(){
    resizeIframe()
})