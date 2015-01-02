Handlebars.registerHelper('if_one_category', function( categories, options ) 
{
	if( categories.length == 1 ) 
	{
		return options.fn(this);
	}
});

Handlebars.registerHelper('if_more_category', function( categories, options ) 
{
	if( categories.length > 1 ) 
	{
		return options.fn(this);
	}
});

Handlebars.registerHelper('if_coupon_available', function( status, options )
{
	if( status ==  "available" )
	{
		return options.fn(this);
	}
	else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_coupon_used', function( status, options )
{
	if( status ==  "used" )
	{
		return options.fn(this);
	}
});

Handlebars.registerHelper('if_coupon_expired', function( status, options )
{
	if( status ==  "expired" )
	{
		return options.fn(this);
	}
});
Handlebars.registerHelper('if_uses_coupon_singular', function( uses, options )
{
	if( uses <=  1 )
	{
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_type_reward', function( type_reward, options )
{
	if( type_reward >  0 )
	{
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_points', function( points, options )
{
	if( points && points >  0 )
	{
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});