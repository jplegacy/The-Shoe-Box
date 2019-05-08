$("#quiz").hide();
$("#question2").hide();
$(".ContinueButton").hide();
$("#lastPost").hide();
$(".finalPost").hide();
$(".box").hide();
$("#buy").hide();
$(".kart").hide();

$(".sell").click(function() {
    $("#starter").fadeOut(300);
    $(".kart").fadeOut(300);
    $("#buy").fadeOut(300);
    $("#quiz").delay(300).fadeIn(1000);
});
$(".home").click(function() {
    $("#quiz").fadeOut(300);
    $(".kart").fadeOut(300);
    $("#buy").fadeOut(300);
    $("#starter").delay(300).fadeIn(300);
});
$(".buy").click(function() {
    $("#quiz").fadeOut(300);
    $(".kart").fadeOut(300);
    $("#starter").fadeOut(300);
    $("#buy").delay(300).fadeIn(300);
});

var sneakerType = ["jordan","other","puma","nike","reebok","adidas"];

var picturePost = [];
var namePost = [];
var pricePost = [];
var itemsInKart = [];
var kartpicturePost= [];
var kartpricePost= [];
var kartnamePost= [];
        
var jordan = 0;
var other = 0;
var puma = 0; 
var nike = 0;
var reebok = 0;
var adidas = 0;

$(".logo").click(function() {    
   $("#question1").fadeOut(300);
   $("#question2").delay(300).fadeIn(1000);
});

$(".checkButton").click(function() {
    $(".box").fadeIn();
    
    var check = $(".imageUrl").val();
    var price = $(".pricePull").val();
    var description = $(".descriptionPull").val();
    
    if( price === "" || description === ""){
       $(".box").html("<br><h1>Please fill in the Questions Below</h1>");
    }
    else{
         $(".box").html("<img class='imgPreview' src='"+check+"'>"+"<h1 style='text-align:center; '>"+ description +"</h1>"+ "<p style='font-size:20px; text-align:center;' >"+"$ "+parseInt(price)+"</p>");
         $(".ContinueButton").fadeIn(300);
    }
});
$(".ContinueButton").click(function() {
    $("#question2").fadeOut(100);
    $(".finalPost").delay(200).fadeIn(300);
    
    var check = $(".imageUrl").val();
    var price = $(".pricePull").val();
    var description = $(".descriptionPull").val();
    
    picturePost.push(check);
    pricePost.push(price);
    namePost.push(description);
    
    
    
    $(".postBox").append("<div class='post "+ description+"1"+"'><img src="+check+"></div>");
    $("."+description+"1").append("<h1 style='font-size:40px;'>"+description+"</h1>");
    $("."+description+"1").append("<h1 style='font-size:40px;'>"+"$ "+price+"</h1>");
    $("."+description+"1").append("<button class='"+description+"1"+" addToKart'>Add To Cart</button>");
    
    
    $(".addToKart").click(function() {
    // $(".kart").append("<div class='post1 "+ description+"2"+"'><img src="+check+"></div>");
    // $("."+description+"2").append("<h1 style='font-size:40px;'>"+description+"</h1>");
    // $("."+description+"2").append("<h1 style='font-size:40px;'>"+"$ "+price+"</h1><br>");
        
        kartpricePost.push(price);
        kartnamePost.push(description);
        kartpicturePost.push(check);
        
        
        
        var total = 0 ;
        kartpricePost.forEach(function(cost){
            total = total + parseInt(cost);
            $(".totPrice").html(total);
        });
        
        itemsInKart.push(1);
         $(".totItems2").html(itemsInKart.length);
    });
    $(".totItems").html(picturePost.length);
    $(".totItems2").html(itemsInKart.length);
});

$(".kartIcon").click(function() {
    $("#buy").fadeOut(300);
    $(".kart").delay(200).fadeIn(300);
});
$(".Repost").click(function() {
    $(".finalPost").fadeOut(100);
    $("#question1").delay(200).fadeIn(300);
    $("input").val("");
    $(".ContinueButton").hide();
    $(".box").hide();
});


// $(".nike").click(function() {
//     nike++;
// });
// $(".adidas").click(function() {
//     adidas++;
// });
// $(".jordan").click(function() {
//     jordan++;
// });
// $(".reebok").click(function() {
//     reebok++;
// });
// $(".Puma").click(function() {
//     puma++;
// });
// $(".Other").click(function() {
//     other++;
// });
// namePost.forEach(function(nameinside) {
//     $("#buy").html("<h1 style='font-size:40px;'>"+nameinside+"</h1>");
// });
// pricePost.forEach(function(nameinside) {
//     $("#buy").html("<h1 style='font-size:40px;'>"+nameinside+"</h1>");
// });
// picturePost.forEach(function(nameinside) {
//     $("#buy").html("<h1 style='font-size:40px;'>"+nameinside+"</h1>");
// });
    // sneakerType.forEach(function(boi){
        //     if(boi > 0){
        //         $("."+boi+"1").append("<div class='post "+ description+"1"+"'><img src="+check+"></div>");
        //         $("."+description+"1").append("<h1 style='font-size:40px;'>"+description+"</h1>");
        //         $("."+description+"1").append("<h1 style='font-size:40px;'>"+"$ "+price+"</h1>");
        //         }
        // });