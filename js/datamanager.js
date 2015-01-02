function DataManager() {}

DataManager.prototype.getData = function( sectionName, refController, page ) 
{
	var ref = this;

	switch( sectionName )
	{
		case View.CATEGORIES:
			jQuery.ajax({
				dataType: 'json',
                url: "json/categories.json",
				//cache: false,
				type: 'GET',
				success: function(data) { ref.onDataSuccess ( data, sectionName, refController, page ); },
				error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
			});
		break;

		case View.COUPONS:
			jQuery.ajax({
				dataType: 'json',
                url: "json/coupons.json",
                data: "page="+page,
				cache: false,
				type: 'GET',
				success: function(data) { ref.onDataSuccess ( data, sectionName, refController, page ); },
				error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
			});
		break;

        case View.USERS:
            jQuery.ajax({
                dataType: 'json',
                url: "json/login.json",
                cache: false,
                type: 'GET',
                success: function(data) { ref.onDataSuccess ( data, sectionName, refController, page ); },
                error: function(jqXHR, textStatus, errorThrown) { ref.onDataError(jqXHR, textStatus, errorThrown); }
            });
            break;
	}
};

DataManager.prototype.onDataSuccess = function( data, sectionName, refController, page )
{
    console.info('Data: '+data);

    refController.onDataReaded ( sectionName, data );
};

DataManager.prototype.onDataError = function( jqXHR, textStatus, errorThrown ) 
{
	// TODO: Control de errores
	// console.log('Error encontrado (onTableError): '+textStatus);
};