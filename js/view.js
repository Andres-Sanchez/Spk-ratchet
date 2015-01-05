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
};

View.prototype.renderTemplate = function( data, sectionName )
{
    // console.log('data: '+data[0].name);

    // console.info('Holas');

    switch( sectionName )
    {
    	case View.HOME:
    		var source   = jQuery('#homeTemplate').html();
    	break;

    	case View.PROMOS:
    		var source   = jQuery('#promosTemplate').html();
    	break;

    	case View.DETAIL:
    		var source   = jQuery('#detailTemplate').html();
    	break;
    }

    var template = Handlebars.compile(source);

    this.html    = template(data);

    // console.info('html: '+this.html);

    this.renderPage();
};