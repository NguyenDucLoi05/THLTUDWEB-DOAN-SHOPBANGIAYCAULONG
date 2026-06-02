document.addEventListener("DOMContentLoaded", function () {
    const previewList = document.getElementById("checkout-preview-list");
    const subtotalEl = document.getElementById("checkout-subtotal");
    const totalEl = document.getElementById("checkout-final-total");
    const checkoutForm = document.getElementById("form-checkout-order");

    // 1. Lấy dữ liệu giỏ hàng từ LocalStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Định dạng hiển thị tiền VNĐ
    function formatMoney(num) {
        return num.toLocaleString('vi-VN') + 'đ';
    }

    // 2. Render danh sách sản phẩm thu gọn và tính tổng tiền
    function renderCheckoutReview() {
        if (cart.length === 0) {
            previewList.innerHTML = `<p style="color:#999; font-size:13px;">Không có sản phẩm nào để thanh toán.</p>`;
            subtotalEl.innerText = "0đ";
            totalEl.innerText = "0đ";
            return;
        }

        let htmlContent = "";
        let totalSum = 0;

        cart.forEach(item => {
            let itemTotal = item.price * item.quantity;
            totalSum += itemTotal;
            htmlContent += `
                <div class="checkout-mini-item">
                    <span class="mini-item-name">${item.name} <strong>x${item.quantity}</strong></span>
                    <span class="mini-item-price">${formatMoney(itemTotal)}</span>
                </div>
            `;
        });

        previewList.innerHTML = htmlContent;
        subtotalEl.innerText = formatMoney(totalSum);
        totalEl.innerText = formatMoney(totalSum);
    }

    // 3. Xử lý sự kiện gửi đơn hàng (Submit Form)
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Ngăn chặn tải lại trang mặc định

            if (cart.length === 0) {
                alert("Giỏ hàng của bạn đang trống! Vui lòng chọn mua giày trước khi đặt hàng.");
                window.location.href = "sanpham.html";
                return;
            }

            const fullName = document.getElementById("checkout-fullname").value;
            const phone = document.getElementById("checkout-phone").value;
            const address = document.getElementById("checkout-address").value;
            const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

            // Hiển thị thông báo đặt hàng thành công chuyên nghiệp
            alert(`🎉 Chúc mừng bạn ${fullName} đã đặt hàng thành công!\n\n` +
                  `📦 Đơn hàng sẽ được giao đến địa chỉ: ${address}\n` +
                  `📞 Số điện thoại nhận hàng: ${phone}\n` +
                  `💳 Hình thức thanh toán: ${paymentMethod === 'COD' ? 'Thanh toán tiền mặt khi nhận hàng' : 'Chuyển khoản qua QR'}\n\n` +
                  `Cảm ơn bạn đã tin tưởng và mua sắm tại LQ SPORT!`);

            // Xóa sạch giỏ hàng sau khi đặt thành công để reset hệ thống
            localStorage.removeItem("cart");
            
            // Điều hướng người dùng quay trở về trang chủ
            window.location.href = "trangchu.html";
        });
    }

    // Khởi chạy hàm khi load trang
    renderCheckoutReview();
});