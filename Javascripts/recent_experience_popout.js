/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openExp() {
	updateOpenExp();
    document.getElementById("hovered_exp").style.height = "463px";
    document.getElementsByClassName("not_hovered_exp").style.marginTop = "463px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeExp() {
    document.getElementById("hovered_exp").style.height = "114px";
    document.getElementsByClassName("not_hovered_exp").style.marginTop = "114";
	updateOpenExp();
}

function updateOpenExp() {
	
	$('#hovered_exp').each(function() {
	  //alert('hovered experience');
    if ($(this).is(":hover")) {
    }
	else {
		$(this).addClass('recent_experience');
		$(this).removeAttr('id');
		
		$('.not_hovered_exp').each(function() {
			$(this).removeAttr('id');
			$(this).removeClass('not_hovered_exp');
			$(this).addClass('recent_experience');
			return;
		});
	}
  });
  
	$('.recent_experience').each(function() {
		//alert('recent experience');
    if ($(this).is(":hover")) {
      $(this).attr('id', 'hovered_exp');
    }
	else {
		$(this).addClass('not_hovered_exp');
		$(this).removeClass('recent_experience');
		$(this).removeAttr('id');
	}
  });
  
  $('.not_hovered_exp').each(function() {
	  //alert('not hovered experience');
    if ($(this).is(":hover")) {
      $(this).attr('id', 'hovered_exp');
	  $(this).removeClass('not_hovered_exp');
    }
	else {
	}
  });
  
  
}