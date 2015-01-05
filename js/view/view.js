function View ()
{
	this.html = null;
}

View.HOME = "home";
View.PROMOS = "promos";
View.DETAIL = "detail";

View.prototype.renderPage = function()
{
	jQuery("#template-wrapper").append(this.html);

	jQuery(document).trigger( "viewFinishEvent" );
};

View.prototype.renderTemplate = function( data, sectionName )
{
    // console.log('data: '+data[0].name);

    // console.info('Holas');
    
    var source   = jQuery('#handlebarsTemplate').html();

    var template = Handlebars.compile(source);

    this.html    = template(data);

    // console.info('html: '+this.html);

    this.renderPage();
};

View.prototype.doActions = function()
{
	console.info('Acciones de la clase padre');
};