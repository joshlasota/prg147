function changeImage(imageNumber) {
    document.getElementById('mainImage').src = 'images/image' + imageNumber + '.jpg';
}

function changeText() {
    document.getElementById('paragraphId').innerText = 'Text has been changed!';
}

function changeImageWidth() {
    document.getElementById('mainImage').style.width = '50%';
}

function changeTextColor() {
    document.getElementById('paragraphId').style.color = '#ff0000';
}

function toggleImage() {
    var img = document.getElementById('mainImage');
    img.style.display = (img.style.display === 'none') ? 'block' : 'none';
}
