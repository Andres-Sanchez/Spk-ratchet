function ViewPromos () {}

ViewPromos.prototype = new View();
ViewPromos.prototype.constructor = ViewPromos;
ViewPromos.prototype.parent = View.prototype;


ViewPromos.prototype.doActions = function()
{
	console.info('Acciones Promociones');
};