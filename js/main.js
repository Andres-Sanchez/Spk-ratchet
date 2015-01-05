$(document).ready( function()
{
	if($('#home-section').length)
	{
		// console.info('Sección home no push event');

		var catController = new SectionController();
		catController.init('home');
	}
});

window.addEventListener('push', function()
{
	// console.info("Evento push");

	$(document).ready( function()
	{
		if($('#home-section').length)
		{
			// console.info('Sección home');

			var catController = new SectionController();
			catController.init('home');
		}
		if($('#promos-section').length)
		{
			// console.info('Sección promociones');

			var catController = new SectionController();
			catController.init('promos');
		}
		if($('#detail-section').length)
		{
			// console.info('Sección detalle');

			var catController = new SectionController();
			catController.init('detail');
		}
	});
});