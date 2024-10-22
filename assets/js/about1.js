document.getElementById("menuIcon").onclick = function () {
    var div = document.querySelector(".divp");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};
document.getElementById("divicon").onclick = function () {
    var div = document.querySelector(".divp");

    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
};




let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-container');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active', 'previous', 'next');
        dots[i].classList.remove('active'); // Loại bỏ active ở tất cả các chấm
        if (i === index) {
            testimonial.classList.add('active');
            dots[i].classList.add('active'); // Đánh dấu chấm tròn active
        } else if (i < index) {
            testimonial.classList.add('previous');
        } else {
            testimonial.classList.add('next');
        }
    });
}

function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    showTestimonial(currentIndex);
}

function currentTestimonial(index) {
    currentIndex = index;
    showTestimonial(currentIndex);
}

// Initialize slider
showTestimonial(currentIndex);

// Auto-slide every 5 seconds
setInterval(nextTestimonial, 5000);

//scroll
let scrollContainer = document.querySelector(".gallery1");
let autoScrollSpeed = 1; // Tốc độ cuộn
let isScrolling = false;
let scrollDirection = 0; // -1 cho trái, 1 cho phải

// Hàm bắt đầu cuộn theo hướng
function startScroll(direction) {
    if (!isScrolling) {
        isScrolling = true;
        scrollDirection = direction;
        requestAnimationFrame(autoScroll);
    }
}

// Hàm dừng cuộn
function stopScroll() {
    isScrolling = false;
}

// Hàm cuộn tự động theo hướng
function autoScroll() {
    if (isScrolling) {
        scrollContainer.scrollLeft += scrollDirection * autoScrollSpeed;
        requestAnimationFrame(autoScroll); // Lặp lại hàm này cho cuộn liên tục
    }
}

// Sự kiện để xác định hướng cuộn dựa trên vị trí chuột
scrollContainer.addEventListener("mousemove", (evt) => {
    let containerWidth = scrollContainer.offsetWidth;
    let mouseX = evt.clientX - scrollContainer.getBoundingClientRect().left;

    if (mouseX < containerWidth / 2) {
        startScroll(-1); // Chuột nằm bên trái, cuộn sang trái
    } else {
        startScroll(1); // Chuột nằm bên phải, cuộn sang phải
    }
});

// Khi chuột rời khỏi container, dừng cuộn
scrollContainer.addEventListener("mouseleave", stopScroll);



