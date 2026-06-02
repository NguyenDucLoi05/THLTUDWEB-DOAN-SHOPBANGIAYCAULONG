document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  if (slides.length === 0) return;
  let currentSlide = 0;

  function changeSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });
  prevBtn.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });
  setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("lq_sport_cart")) || [];

    const cartBadge = document.querySelector(".cart-badge") || document.querySelector(".carrt-badge");
    const addCartButtons = document.querySelectorAll(".btn-add-cart");

    function updateCartBadge() {
        if (!cartBadge) return;
        
        let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? "block" : "none";
    }

    addCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));
            const img = this.closest(".product-card").querySelector(".product-img img").src;

            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: id,
                    name: name,
                    price: price,
                    img: img,
                    quantity: 1
                });
            }

            localStorage.setItem("lq_sport_cart", JSON.stringify(cart));

            updateCartBadge();

            alert(`Đã thêm thành công sản phẩm: \n"${name}" vào giỏ hàng của bạn!`);
        });
    });

    updateCartBadge();
});