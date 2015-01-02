function ViewTest () {}

ViewTest.prototype = new View();
ViewTest.prototype.constructor = ViewTest;
ViewTest.prototype.parent = View.prototype;

ViewTest.prototype.renderPage = function()
{
	jQuery("#categories-wrapper").append(this.html);
};

ViewTest.prototype.renderTemplate = function( objectData )
{
    // console.log('objectData: '+objectData[0].name);

    console.info('Holas');

    var source   = jQuery('#categoriesTemplate').html();

    var template = Handlebars.compile(source);

    this.html    = template(objectData);

    // console.info('html: '+this.html);

    this.renderPage();
};
