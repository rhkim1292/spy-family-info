
$(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;

    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });

    // when the modal is opened autoplay it  
    $('#handsomeGuyModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#handsomeVideo").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"); 
    })

    // stop playing the youtube video when I close the modal
    $('#handsomeGuyModal').on('hidden.bs.modal', function (e) {
        // a poor man's stop video
        $("#handsomeVideo").attr('src', $videoSrc); 
    })
    
    // when the modal is opened autoplay it  
    $('#lilBratModal').on('shown.bs.modal', function (e) {
         // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
         $("#bratVideo").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"); 
     })

    // stop playing the youtube video when I close the modal
    $('#lilBratModal').on('hidden.bs.modal', function (e) {
         // a poor man's stop video
         $("#bratVideo").attr('src', $videoSrc); 
    })  
    
    // document ready
});