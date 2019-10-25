var socialURLs =
{
	"youtube"    : "https://www.youtube.com/channel/UCReydxySI_BbWBmsRQtmEqw",
	"soundcloud" : "https://soundcloud.com/zxbeats",
	"instagram"  : "https://www.instagram.com/david.jpeg_/",
	"facebook"   : "https://www.facebook.com/dmaliciouz",
	"twitter"    : "https://twitter.com/dmaliciouz"
};

window.onload = function()
{
	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var iframeContainer = document.getElementById("frameContainer");

	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});
};

function scrollToElement(element)
{
	var scrollOffset = $(element).offset().top - 90;

	$('html, body').animate({
		scrollTop: scrollOffset,
		scrollLeft:0
    }, 1000);
}

function disableScrolling()
{
    $(document).bind('touchmove', function(e){
        e.preventDefault();
    });

    $('.scrollable').bind('touchmove', function(e){
        e.stopPropagation();
    });
}

function sendMail()
{

}