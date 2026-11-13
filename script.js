function upDate(previewPic) {
    console.log("Triggered");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.querySelector('#image').innerHTML = previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
}
function addTabIndex() {
    console.log("Page loaded. Adding tabindex attributes.");
    
    // Lấy danh sách tất cả các phần tử có class 'preview'
    const images = document.querySelectorAll('.preview');
    
    // Sử dụng vòng lặp for để duyệt qua từng ảnh và thêm tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image " + (i + 1));
    }
}