var catController = new SectionController();

$(document).ready( function()
{
	if($('#home-section').length)
	{
		// console.info('Sección home no push event');
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

			catController.init('home');
		}
		if($('#promos-section').length)
		{
			// console.info('Sección promociones');

			catController.init('promos');
		}
		if($('#detail-section').length)
		{
			// console.info('Sección detalle');

			catController.init('detail');
		}
	});
});

window.onpopstate = function(ev)
{
	$(document).ready( function()
	{
		if($('#home-section').length)
		{
			// console.info('Sección home');

			catController.init('home');
		}
		if($('#promos-section').length)
		{
			// console.info('Sección promociones');

			catController.init('promos');
		}
		if($('#detail-section').length)
		{
			// console.info('Sección detalle');

			catController.init('detail');
		}
	});
}