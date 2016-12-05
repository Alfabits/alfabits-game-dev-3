function showOverlay()
{
	checkIfHovered();
	document.getElementById('hovered_box').style.opacity = 1;
}

function hideOverlay()
{
	document.getElementById('hovered_box').style.opacity = 0;
	checkIfHovered();
}

function checkIfHovered()
{
	$('.box_item_overlay').each(function() {
    if ($(this).is(":hover")) {
      $(this).attr('id', 'hovered_box');
    }
	else if($(this).not(':hover') && $(this).attr('id') == 'hovered_box'){
		$(this).removeAttr('id');
	}
	else{
		
	}
  });
}