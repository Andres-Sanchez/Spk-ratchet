function ViewDetail () {}

ViewDetail.prototype = new View();
ViewDetail.prototype.constructor = ViewDetail;
ViewDetail.prototype.parent = View.prototype;

// Función redefinida para inicializar el slider
ViewDetail.prototype.doActions = function()
{
	console.info('Acciones Detalle');
};