function clickElements(elements){
	elements.each( function( index, element ){
	console.log('clickElements element.click()');
		element.click();
	});
	
}

function hasItemsToExpand(){
	console.log('hasItemsToExpand');
	var elements = $('span.toggle-handle');
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
	
	if(hasItemsToExpand()){
		if(elements.length>0){
			
					itemClicked = false;	
			elements.each( function( index, element ){
				
				if($(this).css('transform')!='none'){
					console.log('getChilds element.click()');
					itemClicked = true;
					element.click();
				}
				
			});
		}
	}else{
		clickElements(elements);
	}
	console.log('getChilds itemClicked: '+itemClicked);
}


function start(){
	
	var elements = $('span.toggle-handle');
	
	getChilds();
	console.log('start | itemClicked: '+itemClicked);
	if(itemClicked){
		console.log('start');
		itemClicked = false;
		getChilds();
	}
	
}
start();