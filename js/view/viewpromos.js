function ViewPromos () {}

ViewPromos.prototype = new View();
ViewPromos.prototype.constructor = ViewPromos;
ViewPromos.prototype.parent = View.prototype;


ViewPromos.prototype.initSectionActions = function()
{
	// console.info('Acciones Promociones');

	this.initMasonry();
};

ViewPromos.prototype.initMasonry = function()
{
	// console.info('Acciones Promociones');

	var $container = $('.masonry-wrapper');

	// Masonry initialization
	$container.masonry({
		columnWidth: '.masonry-post',
		itemSelector: '.masonry-post',
	}).data('masonry');

	$container.imagesLoaded( function() {

		// Masonry initialization
		$container.masonry();

		$container.css({ "visibility": "visible" });
	});
};