 ## 🌐 Link Trang Web của tôi:
[![Trang web](https://img.shields.io/badge/Visit-Website-blue?style=for-the-badge)](https://nguyenducloi05.github.io/THLTUDWEB-DOAN-SHOPBANGIAYCAULONG/)
# 🛒 Website Cửa Hàng Thời Trang & Dụng Cụ Thể Thao (Li-Ning Store)

Một dự án website bán hàng hoàn chỉnh được thiết kế với giao diện hiện đại, tối ưu hóa trải nghiệm người dùng (UX/UI) và tích hợp đầy đủ tính năng phản hồi linh hoạt (Responsive Design) trên mọi thiết bị di động.

---

## 🛠️ Những Việc Đã Hoàn Thành (Changelog & Updates)

Trong suốt quá trình phát triển, hệ thống mã nguồn đã được tinh chỉnh cấu trúc và xử lý triệt để các vấn đề hiển thị:
*   **Xử lý dứt điểm lỗi tràn viền (`overflow-x`):** Khóa cứng chiều ngang trang web trên môi trường di động, triệt tiêu hoàn toàn khoảng trống thừa bên phải khi vuốt màn hình.
*   **Tối ưu hóa Flexbox & Grid:** Tái cấu trúc lại hệ thống chia cột hiển thị, ép các thành phần tự động co giãn theo tỷ lệ màn hình (`box-sizing: border-box`).
*   **Đồng bộ hóa Responsive diện rộng:** Viết bổ sung các bộ lọc Media Queries (`@media`) cho toàn bộ các trang con để giao diện tự chuyển đổi mượt mà từ PC sang Smartphone.
*   **Triển khai thành công lên GitHub Pages:** Cấu hình và cập nhật mã nguồn liên tục lên hệ thống máy chủ tĩnh để chạy thử nghiệm thực tế.

---

## ✨ Các Tính Năng & Trang Chức Năng Của Website

### 1. Thanh Điều Hướng & Tiêu Đầu (Header & Navigation)
*   Thanh Header được cố định vị trí (`position: sticky`) khi cuộn trang giúp người dùng dễ dàng tương tác.
*   Tích hợp thanh tìm kiếm, hotline, logo thương hiệu và biểu tượng giỏ hàng có biểu thị số lượng sản phẩm (`Cart Badge`).
*   Thanh Menu màu cam tự động chuyển thành dạng **Thanh cuộn ngang trượt ngón tay (Horizontal Scroll)** trên điện thoại vô cùng tiện lợi.

### 2. Trang Chủ (Homepage)
*   **Hero Slider:** Hệ thống banner chuyển động trình chiếu hình ảnh nổi bật của cửa hàng kèm hiệu ứng chữ sinh động.
*   **Brand Grid:** Lưới danh sách các thương hiệu đối tác, tự động co từ 4 cột (PC) xuống 2 cột (Mobile) cân đối.
*   **Product Section:** Khu vực trưng bày sản phẩm nổi bật với hiệu ứng phóng to ảnh (`zoom-in`) khi di chuột và nút "Thêm vào giỏ" bắt mắt.

### 3. Trang Sản Phẩm (Catalog / Products)
*   Bố cục lưới sản phẩm hiển thị thông minh: Tự động tính toán hạ số cột từ 5 cột (PC) -> 3 cột (Tablet) -> 2 cột (Mobile) để giữ nguyên độ nét của ảnh.
*   Hiển thị đầy đủ thông tin: Nhãn giảm giá (`Sale Badge`), danh mục, tên sản phẩm, giá bán hiện tại và giá gốc (gạch ngang), kèm nút "Mua nhanh".

### 4. Trang Khuyến Mãi (Promotions)
*   Hệ thống hiển thị mã giảm giá theo định dạng thẻ Voucher/Ticket chuyên nghiệp.
*   Trên thiết bị di động, cấu hình khối tự động chuyển từ chiều ngang (`flex-direction: row`) sang chiều dọc (`column`) để chữ không bị bóp nghẹt.

### 5. Trang Tin Tức (News / Blog)
*   Hiển thị danh sách các bài viết bổ ích dưới dạng thẻ (`News Card`) bo góc hiện đại.
*   Tự động gom từ lưới 2 cột về 1 cột dọc trên màn hình nhỏ để tăng trải nghiệm đọc tin tức của người dùng.

### 6. Trang Liên Hệ & Bản Đồ (Contact & Map)
*   **Form liên hệ:** Hệ thống ô nhập liệu (Họ tên, Email, Lời nhắn) co giãn vừa khít 100% chiều rộng màn hình mobile và nút gửi được tối ưu kích thước bấm ngón tay.
*   **Google Map:** Bản đồ nhúng thông qua `iframe` được kiểm soát chặt chẽ bằng thuộc tính `max-width`, không gây rách hay vỡ khung hình.

### 7. Trang Giới Thiệu (About Us)
*   Giới thiệu tổng quan về cửa hàng bằng văn bản canh chỉnh chuẩn xác.
*   Tích hợp các hộp tính năng dịch vụ (`Feat Box`) có biểu tượng icon sinh động, tự động xếp dọc ngăn nắp trên điện thoại.

### 8. Chân Trang (Footer)
*   Phần chân trang giao diện tối (`Dark Mode`) chuyên nghiệp, chia thành 4 cột thông tin rõ ràng (Về chúng tôi, Liên kết nhanh, Thông tin liên hệ, Đăng ký nhận tin).
*   Hệ thống lưới tự động đổ dọc thành 1 cột trên điện thoại giúp người dùng không phải cuộn ngang.

---

## 💻 Công Nghệ Sử Dụng

*   **HTML5:** Xây dựng cấu trúc ngữ nghĩa cho toàn bộ các trang.
*   **CSS3 (Flexbox & Grid):** Định dạng kiểu dáng, hiệu ứng chuyển động và xử lý Responsive Design.
*   **FontAwesome:** Hệ thống biểu tượng (Icons) trực quan xuyên suốt trang web.
