function ViewHome () {}

ViewHome.prototype = new View();
ViewHome.prototype.constructor = ViewHome;
ViewHome.prototype.parent = View.prototype;

// Función redefinida para inicializar el slider
ViewHome.prototype.doActions = function()
{
	console.info('Acciones Home');
};