var id = sessionStorage.getItem('productId');
console.log(id);
$.get("js/fishing.json", function(response){
    for(i of response){
        if(i.id == id){
            $("#image").attr("src","images/"+i.image);
            $("#details").text(i.details);
            $("#name").text(i.name);
            $("#price").text(i.price);
            $("#rent").text(i.rent);

        }
    }
})

var id = sessionStorage.getItem('productId');
console.log(id);
$.get("js/fishing.json", function(response){
    for(i of response){
        if(i.id == id){
            $("#image").attr("src","images/"+i.image);
            $("#details").text(i.details);
            $("#name").text(i.name);
            $("#price").text(i.price);
            $("#rent").text(i.rent);

        }
    }
})