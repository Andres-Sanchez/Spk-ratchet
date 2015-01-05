var catController = new SectionController();

// It will execute the first time in the home page
initSection();


// Execute every push event (Change page)
window.addEventListener('push', function()
{
	// console.info('Push event');

	initSection();
});

// Execute on Android back button
window.addEventListener('popstate', function(event)
{
    if (event.state)
    {
        initSection();
    }
}, false);


function initSection()
{
	$(document).ready( function()
	{
		if($('#section').length)
		{
			catController.init($('#section').data("section"));
		}
	});
}