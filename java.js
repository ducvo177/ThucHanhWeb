var home=document.getElementById('TrangChu');
var describ=document.getElementById('GioiThieu');
var product=document.getElementById('SanPham');
var newFilm=document.getElementById('PhimSapChieu');
var content=document.getElementById('right-content');
console.log(content);
// Khi click vào Home

home.onclick=function(){
    content.innerHTML=`   <div class="film-content">
    <div class="film-item">
        <h1 class="film-title">Hẹn Hò Chốn Công Sở</h1>
        <img class="film-image" src="/phim1.jpg" alt="" class="film-img">
        <p class="film-description">Shin Ha-Ri là một phụ nữ độc thân và làm việc cho một công ty. Cô ấy có một người bạn nam và cô ấy đã phải lòng anh ấy từ lâu, nhưng cô ấy biết rằng bạn mình đã có bạn gái. Shin Ha-Ri cảm thấy buồn và quyết định gặp người bạn Jin Young-Seo, con gái của một gia đình chaebol. Jin Young-Seo sau đó yêu cầu Shin Ha-Ri thế chỗ cô ấy trong một buổi hẹn hò giấu mặt vàthậm chí cung cấp một số tiền cho thời gian của cô ấy.</p>
        <button class="film-btn">Xem Phim</button>
    </div>
    

<div class="film-item">
        <h1 class="film-title">  Pachinko (2021)</h1>
        <img class="film-image" src="/phim2.jpg" alt="" class="film-img">
        <p class="film-description">Pachinko được làm dựa trên cuốn tiểu thuyết cùng tên, nội dung kể về câu chuyện của những người Hàn Quốc sống ở Nhật Bản. Họ phải đối mặt với những định kiến và phân biệt chủng tộc trong thời gian ở đây. Lee Min Jin là một nhà văn người Mỹ gốc Hàn, đã sống ở Tokyo, Nhật Bản trong bốn năm kể từ năm 2007 và chuyên viết về người Hàn Quốc ở xứ Hoa anh đào.</p>
        <button class="film-btn">Xem Phim</button>
    </div>
    


<div class="film-item">
        <h1 class="film-title">  Những Quý Cô Tuổi 39</h1>
        <img class="film-image" src="/phim3.jpg" alt="" class="film-img">
        <p class="film-description">Phim kể về cuộc sống hàng ngày bình thường và không có sóng gió của những người bạn ba mươi chín tuổi, những người tình cờ gặp nhau vào một ngày trong năm thứ hai trung học và cùng nhau đối diện với tuổi bốn mươi.Son Ye Jin vào vai Cha Mi Jo, giám đốc phòng khám da liễu Gangnam. Cô là một người phụ nữ 39 tuổi ấm áp, được lớn lên trong hoàn cảnh tốt đẹp, khi có một người cha chu đáo, một người mẹ rộng lượng và một người chị nhân hậu.</p>
        <button class="film-btn">Xem Phim</button>
    </div>
    
</div>
</div>


    




`
}
describ.onclick=function(){
 content.innerHTML=`<div class="film-item-description">
 <img class="film-image-description" src="/phim1.jpg" alt="" class="film-img">
 <div class="film-description-block">
     <h1 class="film-title-description">Hẹn Hò Chốn Công Sở</h1>
     <p class="film-title-describ">Thirty Nine (2022)</p>
      <div class="film-episode">
          <button class="film-ep">1</button>
          <button class="film-ep">2</button>
          <button class="film-ep">3</button>
          <button class="film-ep">4</button>
          <button class="film-ep">5</button>
          <button class="film-ep">6</button>
          <button class="film-ep">7</button>
          <button class="film-ep">8</button>
      </div>
     <p class="film-description-description">Shin Ha-Ri là một phụ nữ độc thân và làm việc cho một công ty. Cô ấy có một người bạn nam và cô ấy đã phải lòng anh ấy từ lâu, nhưng cô ấy biết rằng bạn mình đã có bạn gái. Shin Ha-Ri cảm thấy buồn và quyết định gặp người bạn Jin Young-Seo, con gái của một gia đình chaebol. Jin Young-Seo sau đó yêu cầu Shin Ha-Ri thế chỗ cô ấy trong một buổi hẹn hò giấu mặt vàthậm chí cung cấp một số tiền cho thời gian của cô ấy.</p>
     <div class="film-infor">
     <div class="film-items">
         <p class="film-infor-upper">Thể Loại:</p>
         <p class="film-infor-lower">Tình Cảm</p>
     </div>
     <div class="film-items">
         <p class="film-infor-upper">Trạng Thái:</p>
         <p class="film-infor-lower">8/12 Tập</p>
     </div>
     <div class="film-items">
         <p class="film-infor-upper">Đạo Diễn:</p>
         <p class="film-infor-lower">Kim Sang Ho</p>
     </div>

 </div>
     <div class="film-rate">
     <img class="film-star" src="/star.png" style="height:80px" alt="">
 </div>
 </div>
 
</div>`
}
product.onclick=function(){
    content.innerHTML=` <img src="/header.jpg" >`
}