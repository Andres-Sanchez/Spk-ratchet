function SectionController ()
{
	this.view = null;
}

SectionController.prototype.onDataReaded = function( sectionName, objectData, page, lastPage ) 
{
	switch( sectionName )
	{
		case View.CATEGORIES:
			this.view = new ViewTest();
            this.view.renderTemplate( objectData );
		break;
		
		case View.COUPONS:
			this.view = new ViewTest();
			this.view.renderTemplate(objectData);
		break;

		case View.USERS:
			this.view = new ViewUser();
			this.view.renderTemplate( objectData );
		break;
	}
};

SectionController.prototype.init = function( sectionName, page ) 
{
	var dataMngr = new DataManager();

	dataMngr.getData(sectionName, this, page);
};