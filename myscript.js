$(document).ready(function() {

	var page = 0;
	var pageImages = {
		newsprint: ['images/GDS_35_1.jpg','images/GDS35/GDS_35_2.jpg', 'images/GDS35/GDS_35_4.jpg', 'images/GDS35/GDS_35_6.jpg', 'images/GDS35/GDS_35_8.jpg', 'images/GDS35/GDS_35_10.jpg'],
		jesus: ['images/GDS 33/GDS_33_1.png', 'images/GDS 33/GDS_33_2.png', 'images/GDS 33/GDS_33_3.png', 'images/GDS 33/GDS_33_4.png', 'images/GDS 33/GDS_33_5.png']
		// dt: [],
		// stilts: [],
		// create: [],
		// desktop special: []
	}

	$('.carouselleft').click(function() {
		var project = $(this).parent()[0]['dataset']['project'];
		
		// if ('#carouseltext') {
		// $('???????').attr('src', pageImages[page]);	
		// }
		if (page == (pageImages[project].length - 1)) {
			// after last page
			// console.log(
			$(this).parent().find('img').show();
			// $('#MainProductImage').show();
			$('#carouseltext').hide();
		} 
		page = page - 1;
		$('#MainProductImage').attr('src', pageImages[project][page]);
	});

	$('.carouselright').click(function() {
		var project = $(this).parent()[0]['dataset']['project'];

		if (page !== (pageImages[project].length - 1)) {
			page = page + 1;
			$('#MainProductImage').attr('src', pageImages[project][page]);
		} else {
			// after last page
			$('#MainProductImage').hide();
			$('#carouseltext').show();
		}
	});
});	

function toggleMobileNav(){
    $('nav.mobile, .mobile-nav').toggleClass('open');
  }

$(document).ready(function(){
  $('.mobile-nav').click(toggleMobileNav);
});


  
