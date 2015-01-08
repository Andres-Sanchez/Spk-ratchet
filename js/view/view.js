function View ()
{
	this.html = null;
}

View.HOME = "home";
View.PROMOS = "promos";
View.DETAIL = "detail";

View.prototype.renderPage = function()
{
	jQuery("#template-wrapper").empty().append(this.html);

	jQuery(document).trigger( "viewFinishEvent" );
};

View.prototype.renderTemplate = function( data, sectionName )
{
    var source   = jQuery('#handlebarsTemplate').html();

    var template = Handlebars.compile(source);

    this.html    = template(data);

    this.renderPage();
};

View.prototype.doActions = function()
{
	this.performClick();
	this.initSectionActions();
};

View.prototype.initSectionActions = function(){};

View.prototype.performClick = function()
{
	$(".no-click").on("click", function(ev)
	{
		ev.preventDefault();
	})

	// FastClick.attach(document.body);
};