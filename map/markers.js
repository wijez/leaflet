// const markerData = {
//   marker1: {
//   title: 'Điểm đánh dấu 1',
//   description: 'Thông tin giới thiệu cho điểm đánh dấu 1.'
//   },
//   marker2: {
//   title: 'Điểm đánh dấu 2',
//   description: 'Thông tin giới thiệu cho điểm đánh dấu 2.'
//   },
//   marker13: {
//     title: '3',
//     description:'Thong tin gioi thieu 3',
//   }
//   };

import { baseIcons } from "./icon";
 var Marker1 = L.marker([16.13179278679867, 108.05109018035064], {icon: baseIcons});
 var popup = Marker1.bindPopup('the title marker 1').openPopup();
 popup.addTo(map);


