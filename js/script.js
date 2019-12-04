	
	$(document).scroll(function(){
		let Wscroll=$(this).scrollTop();
	if(Wscroll > $('.about').offset().top-250){
		$('.about .container .row .kol').addClass('show');
	}
	});
	


