/* CART PAGE LOGIC */
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("lq_sport_cart")) || [];

    const cartItemsContainer = document.getElementById("cart-items-container");
    const subtotalElement = document.getElementById("summary-subtotal");
    const totalElement = document.getElementById("summary-total");
    const cartBadge = document.querySelector(".cart-badge");

    function formatMoney(amount) {
        return amount.toLocaleString('vi-VN') + "đ";
    }

    function renderCartPage() {
        let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartBadge) {
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? "block" : "none";
        }

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart-msg">Giỏ hàng của bạn đang trống. Hãy quay lại trang chủ để chọn sản phẩm nhé!</div>`;
            subtotalElement.textContent = "0đ";
            totalElement.textContent = "0đ";
            return;
        }

        let htmlContent = "";
        let totalPrice = 0;

        cart.forEach(item => {
            let itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            htmlContent += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${formatMoney(item.price)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="btn-minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn-plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-delete-item" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = htmlContent;
        subtotalElement.textContent = formatMoney(totalPrice);
        totalElement.textContent = formatMoney(totalPrice);

        setupEventListeners();
    }

    function setupEventListeners() {
        document.querySelectorAll(".btn-plus").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity += 1;
                    saveAndRefresh();
                }
            });
        });

        document.querySelectorAll(".btn-minus").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        cart = cart.filter(i => i.id !== id);
                    }
                    saveAndRefresh();
                }
            });
        });

        // Nút Thùng rác xóa hẳn (X)
        document.querySelectorAll(".btn-delete-item").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                cart = cart.filter(i => i.id !== id);
                saveAndRefresh();
            });
        });
    }

    function saveAndRefresh() {
        localStorage.setItem("lq_sport_cart", JSON.stringify(cart));
        renderCartPage();
    }

    const btnCheckout = document.getElementById("btn-order-checkout");
if (btnCheckout) {
    btnCheckout.addEventListener("click", function() {
        // Kiểm tra nếu giỏ hàng có hàng thì mới cho đi tiếp
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng trống, không thể thanh toán!");
        } else {
            window.location.href = "thanhtoan.html";
        }
    });
}

    renderCartPage();
});