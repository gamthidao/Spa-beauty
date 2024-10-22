let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indexItems = document.querySelectorAll('.index-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    // Cập nhật trạng thái cho index-item
    const activeItem = document.querySelector('.itemactive');
    if (activeItem) {
        activeItem.classList.remove('itemactive');
    }
    document.querySelector('.index-item-' + currentSlide).classList.add('itemactive');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Quay vòng lại slide đầu tiên khi hết danh sách
    showSlide(currentSlide);
}

// Gán sự kiện click cho các index-item
indexItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentSlide = index; // Cập nhật chỉ số slide hiện tại
        showSlide(currentSlide); // Hiển thị slide tương ứng
    });
});

// Bắt đầu slideshow và thay đổi ảnh mỗi 5 giây
setInterval(nextSlide, 5000);

// Hiển thị slide đầu tiên khi trang tải
showSlide(currentSlide);
