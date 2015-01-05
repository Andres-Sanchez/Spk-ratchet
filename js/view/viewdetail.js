function ViewDetail () {}

ViewDetail.prototype = new View();
ViewDetail.prototype.constructor = ViewDetail;
ViewDetail.prototype.parent = View.prototype;


ViewDetail.prototype.doActions = function()
{
	console.info('Acciones Detalle');
};