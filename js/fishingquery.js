$(document).ready(function(){
    $.get("js/fishing.json",function(response){
        for ( i of response) {
            $("#cardBox").append(`
            <div class="col-md-4" >
            <br><br>
            <div class="flip-card">

  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/${i.image} "style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">

      <h5 class="card-title" >${i.name}</h5>
        <p class="card-text1">${i.price}</p>
          <p class="card-text">${i.details}</p>
          <button class="btm" onclick="fishingviewproduct(${i.id})">DETAILS</button> </div>
    </div>
  </div>
</div>
            </div>
        `);
        }
    })
 })
 $(document).ready(function(){
  $.get("js/fishing.json",function(response){
      for ( i of response) {
          $("#cardBox1").append(`
          <div class="col-md-4" >
          <br><br>
          <div class="flip-card">

<div class="flip-card-inner">
  <div class="flip-card-front">
    <img src="images/${i.image} "style="width:300px;height:300px;">
  </div>
  <div class="flip-card-back">

    <h5 class="card-title" >${i.name}</h5>
      <p class="card-text1">${i.price}</p>
        <p class="card-text">${i.details}</p>
        <button class="btm" onclick="fishingviewproduct(${i.id})">DETAILS</button> </div>
  </div>
</div>
</div>
          </div>
      `);
      }
  })
})


 function fishingviewproduct(id){
    sessionStorage.setItem('productId',id);
    location.href = "fishingviewproduct.html";}