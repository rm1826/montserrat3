
function addImage(imageSrc) {

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Stacked image';
    img.style.width = '100%'; 


    const bigBox = document.getElementById('big-box');


    bigBox.appendChild(img);
}