// mousemove action

$(document).on("mousemove", function(ev){
    
    var mouseX = ev.originalEvent.pageX
    var mouseY = ev.originalEvent.pageY
    
    $("img").not(".troll").each(function () {
        
        var imgX = $(this).position().left + 70
        var imgY = $(this).position().top + 70
        
        
        var diffX = mouseX - imgX
        var diffY = mouseY - imgY
        
        
        var radians = Math.atan2(diffY, diffX)
        var angle = radians * 180 / Math.PI
        
        $(this).css("transform", "rotate(" + angle + "deg)")
    })
})


//every 3 sec change img

var count = 0

var images = ["img/mic1.svg", "img/mic2.svg", "img/mic3.svg"]

setInterval(function () {
    
    count = count + 1
    count = count % images.length
    
    var  image = images[count]
    
    $("img").not(".troll").attr("src", image)
    
    
    
}, 3000)