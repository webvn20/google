jQuery(function () {
	
		// get the GET variables
		var theme = getUrlVars();
		
		//show the active theme in the top level
		if(theme['theme'])
		{
			jQuery('#theme_current').html(theme['theme']);
			
			jQuery('#iframe').attr('src', 'http://www.freshthemes.com/demo/' + theme['theme']);
			
			//Demo Link
			var demoLink = 'http://www.freshthemes.com/demo/' + jQuery('#' + theme['theme']).attr('id');
			
			//Purchase Link
			var purchaseLink = jQuery('#' + theme['theme']).attr('rel');
			
			//Colours
			var colours = $('#' + theme['theme']).attr('class').split(/\s+/);
		
			
			jQuery('#purchase_download').removeClass('download');
			jQuery('#purchase_download').addClass('purchase');
			jQuery('#close a').attr('href', demoLink);
			jQuery('#colour_dropdown ul ul').html('');
			jQuery('#purchase_download a').attr('href', purchaseLink);
			
			jQuery.each( colours, function(index, item){
					
				if(item !== 'free' && item !== '')
				{
					jQuery('#colour_dropdown').animate({opacity: 1}, 100).show();
			
					jQuery('#colour_dropdown ul ul')
					.append('<li><a rel="http://www.freshthemes.com/demo/' + theme['theme'] + '/wp-content/themes/' + theme['theme'] + '/css/' +  item + '.css">'+ item +'</a><li>');
					
				}
				else if(item === 'free' && item !== '')
				{
					jQuery('#purchase_download').removeClass('purchase');
					jQuery('#purchase_download').addClass('download');
				}

			});		
		}

		jQuery("#theme_dropdown ul ul li a").each(function() {
		
			$(this).poshytip({
				content: '<img src="' + jQuery(this).attr('title') + '" alt="preview image" />',
				className: 'tip-twitter',
				followCursor: true,
				slide: false,
				showTimeout: 1,
				fade: false,
				offsetX: 50,
				offsetY: 0
			});

			jQuery(this).click(
			
				function () {
					
					//Demo Link
					var demoLink = 'http://www.freshthemes.com/demo/' + jQuery(this).attr('id');
					
					//Purchase Link
					var purchaseLink = jQuery(this).attr('rel');
					
					//Colours
					var colours = $(this).attr('class').split(/\s+/);
									
					//Theme name
					var themeName = jQuery(this).attr('id');
					
					jQuery('#purchase_download').removeClass('download');
					jQuery('#purchase_download').addClass('purchase');
					jQuery('#close a').attr('href', demoLink);
					jQuery('#colour_dropdown ul ul').html('');
					jQuery('#purchase_download a').attr('href', purchaseLink);
					jQuery('#iframe').attr('src', 'http://www.freshthemes.com/demo/' + themeName);
					
					jQuery.each( colours, function(index, item){
						
						if(item !== 'free' && item !== '')
						{
							jQuery('#colour_dropdown').animate({opacity: 1}, 100).show();
					
							jQuery('#colour_dropdown ul ul')
							.append('<li><a rel="http://www.freshthemes.com/demo/' + themeName + '/wp-content/themes/' + themeName + '/css/' +  item + '.css">'+ item +'</a><li>');
							
						}
						//else if(item === 'free' && item !== '')
						//{
						//	jQuery('#purchase_download').removeClass('purchase');
						//	jQuery('#purchase_download').addClass('download');
						//}
	

					});
					
					//jQuery('#colour_dropdown ul ul li a').click(function (){
				
					//	jQuery("#iframe").contents().find("#colour_switch").attr('href', jQuery(this).attr('rel') );
						
					//	jQuery("#colour_dropdown ul li a.active_theme").html('Choose style');
							
					//});
		
				}
					
			);
			
		});

		//when a colour is clicked change the href attribute and make the top level item show current colour
		jQuery('#colour_dropdown ul ul li a').click(function (){
			
			jQuery("#iframe").contents().find("#colour_switch").attr('href', jQuery(this).attr('rel') );
			
			jQuery("#colour_dropdown ul li a.active_theme").html('Choose style');
				
		});
		
		//ie fix
		jQuery("#colour_dropdown ul ul li:nth-child(even)").css('display', 'none');
		
		//toggle theme dropdown list
		jQuery('#theme_dropdown ul').not('#theme_dropdown ul ul').toggle( 
		
			function () {
		
				jQuery('#theme_dropdown ul ul').animate({opacity: 1}, 100).show();
				
			}, function() {
				
				jQuery('#theme_dropdown ul ul').animate({opacity: 0}, 300).hide();
				
			}
			
		);
		
		//toggle colour list
		jQuery('#colour_dropdown ul li a.active_theme').toggle( 
		
			function () {
		
				jQuery('#colour_dropdown ul ul').animate({opacity: 1}, 100).show();
				
			}, function() {
				
				jQuery('#colour_dropdown ul ul').animate({opacity: 0}, 300).hide();
				
			}
			
		);
		
		//apply new current theme to top level
		jQuery('#theme_dropdown li li a').not('#theme_dropdown li a.active_theme').click( 
		
			function () {
				jQuery('#theme_dropdown li a.active_theme').html(jQuery(this).html());
			}
			
		);
		
		//hide colour drop down if no_colour is present
		jQuery('li.no_colour').click(
		
			function () {
				
				jQuery('#colour_dropdown').animate({opacity: 0}, 500).hide(1);
				
			}
		);
		
		// Read a page's GET URL variables and return them as an associative array.
		function getUrlVars()
		{
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		
			for(var i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			
			return vars;
		}


	});

jQuery(function()
{
	jQuery('.dropdowns').jScrollPane();
});
