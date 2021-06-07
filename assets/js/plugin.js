(function($) {

	"use strict";
	
	/* + Blog Masonry */
	function blog_masonry() {
		if($(".blog-masonry-list").length) {
			var $container = $(".blog-masonry-list");
			$container.isotope({
				layoutMode: 'masonry',
				percentPosition: true,				
				itemSelector: ".blog-masonry-box"
			});
		}
	}
	
	/* Post Layout 1 */
	function layoutone_video_height() {
		var width = $(window).width();
		var cnt_height = $(".post-layout-one .entry-cover img").height();
		$(".post-layout-one .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Trending Section */
	function popularpost_video_height() {
		var width = $(window).width();
		var cnt_height = $(".trending-section .entry-cover img").height();
		$(".trending-section .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Post Layout 2 */
	function layouttwo_video_height() {
		var width = $(window).width();
		var cnt_height = $(".post-layout-two .entry-cover img").height();
		$(".post-layout-two .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Post 3 Column */
	function threecolumn_video_height() {
		var width = $(window).width();
		var cnt_height = $(".post-3-column .entry-cover img").height();
		$(".post-3-column .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Post 2 Column Center */
	function twocolumn_video_height() {
		var width = $(window).width();
		var cnt_height = $(".2-column-center .entry-cover img").height();
		$(".2-column-center .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Widget Trending */
	function wid_treding_video_height() {
		var width = $(window).width();
		var cnt_height = $(".widget_tranding_post .carousel-item .trnd-post-box .post-cover img").height();
		$(".widget_tranding_post .carousel-item .trnd-post-box .post-cover iframe").css("height", cnt_height);	
	}
	
	/* Single Post Center */
	function post_center_video_height() {
		var width = $(window).width();
		var cnt_height = $(".post-single-center .entry-cover img").height();
		$(".post-single-center .entry-cover iframe").css("height", cnt_height);	
	}
	
	/* Event - Document Ready */
	$(document).on("ready",function() {
		
		/* Post Layout 1 */
		if($(".post-layout-one").length){
			layoutone_video_height();
		}
		
		/* Trending Section */
		if($(".trending-section").length){
			popularpost_video_height();
		}
		
		/* Post Layout 2 */
		if($(".post-layout-two").length){
			layouttwo_video_height();
		}
		
		/* Post 3 Column */
		if($(".post-3-column").length){
			threecolumn_video_height();
		}
		
		/* Post 2 Column Center */
		if($(".2-column-center").length){
			twocolumn_video_height();
		}
		
		/* Widget Trending */
		if($(".widget_tranding_post").length){
			wid_treding_video_height();
		}
		
		/* Single Post Center */
		if($(".post-single-center").length){
			post_center_video_height();
		}
		
		/* - Slider Carousel 4 */
		if( $(".slider-carousel-4").length ) {
			$(".slider-carousel-4").owlCarousel({
				loop: true,
				margin: 4,
				nav: true,
				dots: false,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					477:{
						items: 2
					},
					768:{
						items: 3
					},
					992:{
						items: 4
					}
				}
			});
		}
		
		/* - Slider Carousel 5 */
		if( $(".slider-carousel-5").length ) {
			$(".slider-carousel-5").owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				dots: false,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					}
				}
			});
		}
		
		/* - Slider Section 6 */
		if( $(".slider-section6").length ) {
			$(".slider-carousel-6").slick({
				centerMode: true,
				centerPadding: '250px',
				autoplay: true,
				arrows: true,
				slidesToShow: 2,
				responsive: [{
					breakpoint: 1366,
						settings: {
							centerMode: true,
							centerPadding: '200px',
							slidesToShow: 2
						}
					},{
					breakpoint: 1201,
						settings: {
							centerMode: true,
							centerPadding: '100px',
							slidesToShow: 2
						}
					},{
					breakpoint: 992,
						settings: {
							centerMode: true,
							centerPadding: '60px',
							slidesToShow: 2
						}
					},{
					breakpoint: 768,
						settings: {
							centerMode: true,
							centerPadding: '25px',
							slidesToShow: 2
						}
					},{
					breakpoint: 640,
						settings: {
							centerMode: true,
							centerPadding: '25px',
							slidesToShow: 1
						}
					},{
					breakpoint: 480,
						settings: {
						centerMode: true,
						centerPadding: '15px',
						slidesToShow: 1
					}
				}]
			});
		}
		
		/* - Slider Section 7 */
		if( $(".slider-section7").length ) {
			$(".slider-carousel-7").slick({
				centerMode: true,
				centerPadding: '373px',
				autoplay: true,
				slidesToShow: 1,
				arrows: true,
				responsive: [{
					breakpoint: 1600,
						settings: {
							centerMode: true,
							centerPadding: '200px',
							slidesToShow: 1
						}
					},{
					breakpoint: 1366,
						settings: {
							centerMode: true,
							centerPadding: '150px',
							slidesToShow: 1
						}
					},{
					breakpoint: 1201,
						settings: {
							centerMode: true,
							centerPadding: '100px',
							slidesToShow: 1
						}
					},{
					breakpoint: 992,
						settings: {
							centerMode: true,
							centerPadding: '60px',
							slidesToShow: 1
						}
					},{
					breakpoint: 768,
						settings: {
							centerMode: true,
							centerPadding: '25px',
							slidesToShow: 1
						}
					},{
					breakpoint: 640,
						settings: {
							centerMode: true,
							centerPadding: '25px',
							slidesToShow: 1
						}
					},{
					breakpoint: 480,
						settings: {
						centerMode: true,
						centerPadding: '15px',
						slidesToShow: 1
					}
				}]
			});
		}
		
		/* - Trending Post */
		if( $(".trending-carousel").length ) {
			$(".trending-carousel").owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					400:{
						items: 2
					},
					768:{
						items: 3
					},
					992:{
						items: 4
					}
				}
			});
		}
		
	});	/* Event - Document Ready */
	
	$( window ).on("resize",function() {
		
		/* Post Layout 1 */
		if($(".post-layout-one").length){
			layoutone_video_height();
		}
		
		/* Trending Section */
		if($(".trending-section").length){
			popularpost_video_height();
		}
		
		/* Post Layout 2 */
		if($(".post-layout-two").length){
			layouttwo_video_height();
		}
		
		/* Post 3 Column */
		if($(".post-3-column").length){
			threecolumn_video_height();
		}
		
		/* Post 2 Column Center */
		if($(".2-column-center").length){
			twocolumn_video_height();
		}
		
		/* Widget Trending */
		if($(".widget_tranding_post").length){
			wid_treding_video_height();
		}
		
		/* Single Post Center */
		if($(".post-single-center").length){
			post_center_video_height();
		}
		
		blog_masonry();
		
	});
	
	$(window).on("load",function() {
		
		/* Post Layout 1 */
		if($(".post-layout-one").length){
			layoutone_video_height();
		}
		
		/* Trending Section */
		if($(".trending-section").length){
			popularpost_video_height();
		}
		
		/* Post Layout 2 */
		if($(".post-layout-two").length){
			layouttwo_video_height();
		}
		
		/* Post 3 Column */
		if($(".post-3-column").length){
			threecolumn_video_height();
		}
		
		/* Post 2 Column Center */
		if($(".2-column-center").length){
			twocolumn_video_height();
		}
		
		/* Widget Trending */
		if($(".widget_tranding_post").length){
			wid_treding_video_height();
		}
		
		/* Single Post Center */
		if($(".post-single-center").length){
			post_center_video_height();
		}
		
		blog_masonry();
		
	});
	
})(jQuery);