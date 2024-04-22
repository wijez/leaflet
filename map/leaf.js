// Tạo một bản đồ Leaflet và thiết lập tọa độ và mức zoom mặc định
var map = L.map('map').setView([16.13179278679867, 108.05109018035064], 15);

// Thêm hình ảnh làm overlay
var imageUrl = 'namyencanhquan.jpg',
    imageBounds = [[-90, -180], [90, 180]];  // Tọa độ của góc trên cùng bên trái và góc dưới cùng bên phải của hình ảnh

L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Thiết lập giới hạn hiển thị bản đồ
map.setMaxBounds(imageBounds);


var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);