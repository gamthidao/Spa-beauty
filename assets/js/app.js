gsap.from(".elementor-image img", {
    y: -50,
    opacity: 0,
    duration: 2,
    // scale:0.8,
    delay: 1,
    repeat: -1,   // Lặp lại vô hạn
    yoyo: true,   // Quay ngược lại vị trí ban đầu
    ease: "power1.inOut",

})
gsap.from(".qodef-m-title", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 0.5,
    // stagger: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".elementor-image img",
        scroller: "body",
        // markers:true,
        start: "top 50%",
    }
})
gsap.from(".qodef-section-title>.qodef-m-text", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 0.6,
    stagger: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".qodef-section-title>.qodef-m-text",
        scroller: "body",
        // markers:true,
        start: "top 70%",
    }
});
gsap.from(".card__img", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    stagger: 0.8,
    scrollTrigger: {
        trigger: ".card__img",
        scroller: "body",
        // markers:true,
        start: "top 50%",
    }
})

var tl = gsap.timeline();
tl.from(".logo", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    // delay: 0.5
})
tl.from(".menu ul li", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
})
tl.from(".search", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})
tl.from(".content", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scale: 0.8
})
function breakTheText() {
    var h3 = document.querySelector(".about3 .row3 .content3 h3");
    var h3Text = h3.textContent;           // Lấy nội dung văn bản từ h3
    var slittedText = h3Text.split("");    // Chia nhỏ văn bản thành từng ký tự
    var haftValue = slittedText.length / 2; // Chia nửa chuỗi văn bản
    var clutter = "";                       // Khai báo biến clutter để chứa nội dung HTML

    slittedText.forEach(function (elem, idx) {
        if (idx < haftValue) {
            clutter += `<span class="a">${elem}</span>`; // Các ký tự thuộc nửa đầu
        } else {
            clutter += `<span class="b">${elem}</span>`; // Các ký tự thuộc nửa sau
        }
    });
    
    h3.innerHTML = clutter; // Cập nhật nội dung HTML của h3 với các ký tự được bọc trong các thẻ span
}

breakTheText();

// Hiệu ứng cho các ký tự thuộc class ".a"
gsap.from(".about3 .row3 .content3 h3 .a", {
    y: 80,         // Di chuyển các ký tự theo trục Y xuống
    duration: 0.6, // Thời gian chạy hoạt ảnh là 0.6 giây
    // delay: 0.5,    // Trì hoãn 0.5 giây trước khi bắt đầu
    stagger: 0.15, // Mỗi ký tự cách nhau 0.15 giây
    opacity: 0,    // Bắt đầu từ trạng thái trong suốt
    scrollTrigger: {
        trigger: ".about3 .row3 .content3 h3 .a", // Kích hoạt khi phần tử này cuộn vào vùng nhìn thấy
        scroller: "body", // Xác định phần tử cuộn là toàn bộ trang
        // markers: true,  // Bỏ chú thích nếu cần kiểm tra vị trí với markers
        start: "top 70%"  // Bắt đầu khi phần tử chạm vào vị trí 50% của màn hình
    }
});

// Hiệu ứng cho các ký tự thuộc class ".b"
gsap.from(".about3 .row3 .content3 h3 .b", {
    y: 80,         // Di chuyển các ký tự theo trục Y xuống
    duration: 0.6, // Thời gian chạy hoạt ảnh là 0.6 giây
    // delay: 0.5,    // Bạn có thể điều chỉnh thời gian delay khác để hoạt ảnh chạy nối tiếp
    stagger: -0.15, // Chạy hiệu ứng ngược lại, tạo hiệu ứng động đặc biệt
    opacity: 0,    // Bắt đầu từ trạng thái trong suốt
    scrollTrigger: {
        trigger: ".about3 .row3 .content3 h3 .b", // Kích hoạt khi phần tử này cuộn vào vùng nhìn thấy
        scroller: "body", // Xác định phần tử cuộn là toàn bộ trang
        // markers: true,  // Bỏ chú thích nếu cần kiểm tra vị trí với markers
        start: "top 70%"  // Bắt đầu khi phần tử chạm vào vị trí 50% của màn hình
    }
});

function breakTheText1() {
    var h3 = document.getElementsByClassName("well")[0];  // Chọn phần tử đầu tiên
    if (!h3) return; // Kiểm tra nếu phần tử không tồn tại
    var h3Text = h3.textContent;           // Lấy nội dung văn bản từ h3
    var slittedText = h3Text.split("");    // Chia nhỏ văn bản thành từng ký tự
    var haftValue = Math.floor(slittedText.length / 2); // Chia nửa chuỗi văn bản
    var clutter = "";                       // Khai báo biến clutter để chứa nội dung HTML

    slittedText.forEach(function (elem, idx) {
        if (idx < haftValue) {
            clutter += `<span class="a">${elem}</span>`; // Các ký tự thuộc nửa đầu
        } else {
            clutter += `<span class="b">${elem}</span>`; // Các ký tự thuộc nửa sau
        }
    });
    
    h3.innerHTML = clutter; // Cập nhật nội dung HTML của h3 với các ký tự được bọc trong các thẻ span
}

breakTheText1();

// Hiệu ứng cho các ký tự thuộc class ".a"
gsap.from(".well .a", {
    y: 80,         // Di chuyển các ký tự theo trục Y xuống
    duration: 0.6, // Thời gian chạy hoạt ảnh là 0.6 giây
    stagger: 0.15, // Mỗi ký tự cách nhau 0.15 giây
    opacity: 0,    // Bắt đầu từ trạng thái trong suốt
    scrollTrigger: {
        trigger: ".well .a", // Kích hoạt khi phần tử này cuộn vào vùng nhìn thấy
        scroller: "body",    // Xác định phần tử cuộn là toàn bộ trang
        start: "top 80%"     // Bắt đầu khi phần tử chạm vào vị trí 70% của màn hình
    }
});

// Hiệu ứng cho các ký tự thuộc class ".b"
gsap.from(".well .b", {
    y: 80,         // Di chuyển các ký tự theo trục Y xuống
    duration: 0.6, // Thời gian chạy hoạt ảnh là 0.6 giây
    stagger: -0.15, // Chạy hiệu ứng ngược lại, tạo hiệu ứng động đặc biệt
    opacity: 0,    // Bắt đầu từ trạng thái trong suốt
    scrollTrigger: {
        trigger: ".well .b", // Kích hoạt khi phần tử này cuộn vào vùng nhìn thấy
        scroller: "body",    // Xác định phần tử cuộn là toàn bộ trang
        start: "top 80%"     // Bắt đầu khi phần tử chạm vào vị trí 70% của màn hình
    }
});


gsap.from(".about3 .row3 .content3 p",{
    opacity: 0,
    duration: 1,
    y: 40,
    delay: 0.7,
    stagger: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".about3 .row3 .content3 p",
        scroller: "body",
        // markers:true,
        start: "top 70%",
    }
})

 
gsap.from(".about3 .row3 .img3 img",{
    x: -200,          // Bắt đầu từ vị trí 200px bên trái
    opacity: 0,       // Bắt đầu từ trạng thái trong suốt
    duration: 1,      // Thời gian chuyển động 1 giây
    ease: "power2.out", // Hiệu ứng easing
    scrollTrigger: {
        trigger: ".about3 .row3 .img3 img",  // Kích hoạt khi phần tử này cuộn vào vùng nhìn thấy
        scroller: "body",         // Xác định phần tử cuộn là toàn bộ trang
        // markers: true,         // Hiển thị markers để kiểm tra khi hiệu ứng được kích hoạt
        start: "top 75%",         // Kích hoạt khi phần tử bắt đầu chạm vào 75% chiều cao màn hình
        end: "top 25%",           // Kết thúc khi phần tử chạm vào 25% chiều cao màn hình
        scrub: true               // Hiệu ứng cuộn mượt mà theo tốc độ cuộn của người dùng
    }
});



gsap.from(".spa-packages h2", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 0.5,
    // stagger: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".spa-packages h2",
        scroller: "body",
        // markers:true,
        start: "top 50%",
    }
})

gsap.from(".spa-packages p ", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 0.8,
    stagger: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".spa-packages p ",
        scroller: "body",
        // markers:true,
        start: "top 70%",
    }
});
 
gsap.from(".spa-packages .package-cards", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    stagger: 0.8,
    scrollTrigger: {
        trigger: ".spa-packages .package-cards",
        scroller: "body",
        // markers:true,
        start: "top 50%",
    }
})










// step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000;
let timeAutoNext = 5000;

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else if (type === 'prev') {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// Function to move to a specific slide based on index
function goToSlide(index) {
    let SliderItemsDom = Array.from(SliderDom.querySelectorAll('.item'));
    let currentItem = SliderItemsDom[0];  // First item in the current slider

    // If the clicked thumbnail is already in the current slide, do nothing
    if (SliderItemsDom[index] === currentItem) {
        return;
    }

    // Shift slides until the selected one is at the front
    let steps = index - Array.from(SliderItemsDom).indexOf(currentItem);
    if (steps > 0) {
        for (let i = 0; i < steps; i++) {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        }
    } else {
        for (let i = 0; i < Math.abs(steps); i++) {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        }
    }
}

// Add click event for each thumbnail item
thumbnailItemsDom.forEach((item, index) => {
    item.addEventListener('click', () => {
        goToSlide(index);  // Go to the slide corresponding to the clicked thumbnail
        clearTimeout(runNextAuto);  // Stop auto-play when user interacts
        runNextAuto = setTimeout(() => {
            nextDom.click();  // Resume auto-play after a while
        }, timeAutoNext);
    });
});
