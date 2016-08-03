function hasItemsToExpand(elements){
	var result = false;
	if(elements.length>0){
				
		elements.each( function( index, element ){
			
			if($(this).css('transform')!='none'){
				result = true;
			}
			
		});
	}
	return result;
}

var itemClicked =false;

function getChilds(){
	var elements = $('span.toggle-handle');
	
	itemClicked = false;	

	if(elements != undefined){
	
		if(hasItemsToExpand(elements)){
		
			if(elements.length>0){
				
				elements.each( function( index, element ){
					
					if($(this).css('transform')!='none'){
						itemClicked = true;
						element.click();
					}
					
				});
			}
		}
	}
	if(itemClicked){
		getChilds();
	}
}


function start(){
	// recursive function
	getChilds();
}
start();