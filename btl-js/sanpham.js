
// Lấy các phần tử và sự kiện nút bấm
const showDescriptionButton = document.getElementById('showDescription');
const showProductInfoButton = document.getElementById('showProductInfo');
const description = document.querySelector('.description');
const productInfo = document.querySelector('.product-info');

// Bắt sự kiện khi ấn vào nút Mô tả
showDescriptionButton.addEventListener('click', function() {
    description.style.display = 'block';
    productInfo.style.display = 'none';
});

// Bắt sự kiện khi ấn vào nút Thông tin sản phẩm
showProductInfoButton.addEventListener('click', function() {
    description.style.display = 'none';
    productInfo.style.display = 'block';
});








