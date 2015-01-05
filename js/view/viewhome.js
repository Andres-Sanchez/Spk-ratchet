function ViewHome () {}

ViewHome.prototype = new View();
ViewHome.prototype.constructor = ViewHome;
ViewHome.prototype.parent = View.prototype;


ViewHome.prototype.doActions = function()
{
	console.info('Acciones Home');
};