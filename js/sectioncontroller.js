function SectionController ()
{
	var ref = this;

	this.view = null;

	// Init actions when view finish event triggers
	$(document).on('viewFinishEvent', function()
	{
		ref.view.doActions();
	});
}

SectionController.prototype.init = function( sectionName ) 
{
	var ref = this;

	switch( sectionName )
	{
		case View.HOME:
			// Specific View object
			this.view = new ViewHome();

			// AJAX Request
			jQuery.ajax({
				dataType: 'json',
                url: "json/home.json",
				cache: false,
				type: 'GET',
				success: function(data) { ref.onDataSuccess ( data, sectionName ); },
				error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
			});

		break;

		case View.PROMOS:
			// Specific View object
			this.view = new ViewPromos();

			// AJAX Request
			jQuery.ajax({
				dataType: 'json',
                url: "json/promos.json",
				cache: false,
				type: 'GET',
				success: function(data) { ref.onDataSuccess ( data, sectionName ); },
				error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
			});

		break;

        case View.DETAIL:
        	// Specific View object
        	this.view = new ViewDetail();

        	// AJAX Request
            jQuery.ajax({
                dataType: 'json',
                url: "json/detail.json",
                cache: false,
                type: 'GET',
                success: function(data) { ref.onDataSuccess ( data, sectionName ); },
                error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
            });

		break;
	}
};

SectionController.prototype.onDataSuccess = function( data, sectionName )
{
    this.view.renderTemplate( data, sectionName );
};

SectionController.prototype.onDataError = function( jqXHR, textStatus, errorThrown ) 
{
	// TODO: Control de errores
	// console.info('Error encontrado: '+textStatus);
};