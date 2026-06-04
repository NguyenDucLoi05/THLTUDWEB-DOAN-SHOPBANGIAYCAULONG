 ## 🌐 Link Trang Web của tôi:
[![Trang web](https://img.shields.io/badge/Visit-Website-blue?style=for-the-badge)](https://nguyenducloi05.github.io/THLTUDWEB-DOAN-SHOPBANGIAYCAULONG/)
# 🛒 Website Cửa Hàng Thời Trang & Dụng Cụ Thể Thao (Li-Ning Store)

# Đồ án: Website Cửa hàng Thời trang Li-Ning

Dự án xây dựng website bán hàng hoàn chỉnh sử dụng HTML, CSS thuần, tập trung vào tối ưu hóa giao diện hiển thị trên cả máy tính (PC) và điện thoại di động (Responsive).

## 1. Các công việc đã hoàn thành
* **Xây dựng giao diện:** Hoàn thiện cấu trúc và định dạng cho 6 trang: Trang chủ, Sản phẩm, Khuyến mãi, Tin tức, Giới thiệu và Liên hệ.
* **Sửa lỗi giao diện Mobile:** * Thêm thuộc tính `box-sizing: border-box` cho toàn bộ trang để kiểm soát kích thước phần tử.
    * Xử lý triệt để lỗi tràn màn hình theo chiều ngang (`overflow-x: hidden`) trên di động.
    * Sử dụng CSS Media Queries (`@media`) để ép các khung lưới (Grid) và khối (Flexbox) tự động co giãn và chuyển thành 1 hoặc 2 cột trên màn hình nhỏ.
* **Triển khai:** Đẩy mã nguồn lên hệ thống và chạy thử nghiệm trực tiếp qua GitHub Pages.

## 2. Chi tiết các tính năng theo từng trang

* **Header & Footer (Dùng chung):** Menu thanh điều hướng tự động chuyển sang dạng thanh cuộn ngang (Horizontal Scroll) trên mobile để người dùng dễ vuốt. Footer tự động đổ dọc thành 1 cột.
* **Trang chủ:** Có slider banner chuyển động, danh sách thương hiệu và khu vực hiển thị sản phẩm nổi bật.
* **Trang Sản phẩm:** Lưới sản phẩm tự động hạ từ 5 cột (PC) xuống còn 2 cột (Mobile) để hình ảnh không bị bóp méo hay vỡ khung.
* **Trang Khuyến mãi:** Danh sách voucher giảm giá tự động chuyển từ hàng ngang thành hàng dọc khi xem trên điện thoại.
* **Trang Tin tức:** Các thẻ bài viết tự động thu nhỏ padding và đổi từ lưới 2 cột về 1 cột dọc để dễ đọc.
* **Trang Liên hệ:** Form nhập liệu co giãn vừa khít 100% màn hình. Bản đồ Google Map (`iframe`) được khống chế chiều rộng (`max-width: 100%`) để không đâm thủng layout.
* **Trang Giới thiệu:** Các hộp thông tin dịch vụ (`feat-box`) tự động xếp chồng lên nhau ngăn nắp trên điện thoại.

## 3. Công nghệ sử dụng
* HTML5 (Xây dựng cấu trúc layout).
* CSS3 (Định dạng kiểu dáng, Flexbox, Grid và Responsive).
* FontAwesome (Chèn các biểu tượng icon hệ thống).

