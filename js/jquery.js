$(document).ready(function(){
    $.get("js/data.json",function(response){
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
        <p class="card-text">${i.price}</p>
          <p class="card-text">${i.details}</p>
          <button class="btm" onclick="viewproduct(${i.id})">DETAILS</button> </div>
    </div>
  </div>
</div>
            </div>
        `);
        }
    })
 })
 $(document).ready(function(){
  $.get("js/data1.json",function(response){
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
      <p class="card-text">${i.price}</p>
        <p class="card-text">${i.details}</p>
        <button class="btm" onclick="viewproduct(${i.id})">DETAILS</button> </div>
  </div>
</div>
</div>
          </div>
      `);
      }
  })
})


 function viewproduct(id){
    sessionStorage.setItem('productId',id);
    location.href = "viewproduct.html";}