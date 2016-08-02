function clickElements(elements){
	elements.each( function( index, element ){
	console.log('************** clickElements element.click()');
		element.click();
	});
	
}

function hasItemsToExpand(elements){
	console.log('hasItemsToExpand');
	var result = false;
	
	if(elements.length>0){
				
		elements.each( function( index, element ){
			
			if($(this).css('transform')!='none'){
				result = true;
			}
			
		});
	}
	console.log('hasItemsToExpand | result: '+result);
	return result;
}

var itemClicked =false;

function getChilds(){
	var elements = $('span.toggle-handle');
	
	itemClicked = false;	
	console.log('getChilds | elements: '+elements);

	if(elements != undefined){
	
		if(hasItemsToExpand(elements)){
		
			if(elements.length>0){
				
				elements.each( function( index, element ){
					
					if($(this).css('transform')!='none'){
						console.log('getChilds element.click()');
						itemClicked = true;
						element.click();
					}
					
				});
			}
		}
	}
	console.log('getChilds itemClicked: '+itemClicked);
	if(itemClicked){
		getChilds();
	}
}


function start(){
	console.log('start');	
	// recursive function
	getChilds();
	console.log('finish | itemClicked: '+itemClicked);
}
start();