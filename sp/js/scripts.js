

jQuery(document).ready(function() {
	$(document).ready(function(){
  		$(".slide").slick({
  			autoplay:true,
  			fade:true,
  			autoplaySpeed:2500,
  			pauseOnHover:false,
  			cssEase:'linear',
  			dots:true
  		});

  	});

  	$(document).ready(function(){
  		$(".slide2").slick({
	  		centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
			    arrows: false,
			    dots: true,
			    centerMode: true,
			    centerPadding: '40px',
			    slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    arrows: false,
			    dots:true,
			    centerMode: true,
			    centerPadding: '40px',
			    slidesToShow: 1
			  }
			}
			]
  		});

  	});
	/*
	    Wow
	*/
	new WOW().init();
	
	/*
	    Slider
	*/

	var position = new google.maps.LatLng(45.067883, 7.687231);
    $('.map').gmap({'center': position,'zoom': 15, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.addMarker({'position': this.get('map').getCenter() });	
        }
    });
    
    /*
	    Subscription form
	*/
	$('.success-message').hide();
	$('.error-message').hide();
	
	$('.footer-box-text-subscribe form').submit(function(e) {
		e.preventDefault();
		
		var form = $(this);
	    var postdata = form.serialize();
	    
	    $.ajax({
	        type: 'POST',
	        url: 'assets/subscribe.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.valid == 0) {
	                $('.success-message').hide();
	                $('.error-message').hide();
	                $('.error-message').html(json.message);
	                $('.error-message').fadeIn();
	            }
	            else {
	                $('.error-message').hide();
	                $('.success-message').hide();
	                form.hide();
	                $('.success-message').html(json.message);
	                $('.success-message').fadeIn();
	            }
	        }
	    });
	});
    
    /*
	    Contact form
	*/
    $('.contact-form form').submit(function(e) {
    	e.preventDefault();

    	var form = $(this);
    	var nameLabel = form.find('label[for="contact-name"]');
    	var emailLabel = form.find('label[for="contact-email"]');
    	var messageLabel = form.find('label[for="contact-message"]');
    	
    	nameLabel.html('Name');
    	emailLabel.html('Email');
    	messageLabel.html('Message');
        
        var postdata = form.serialize();
        
        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                	nameLabel.append(' - <span class="violet error-label"> ' + json.nameMessage + '</span>');
                }
                if(json.emailMessage != '') {
                	emailLabel.append(' - <span class="violet error-label"> ' + json.emailMessage + '</span>');
                }
                if(json.messageMessage != '') {
                	messageLabel.append(' - <span class="violet error-label"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                	form.fadeOut('fast', function() {
                		form.parent('.contact-form').append('<p><span class="violet">Thanks for contacting us!</span> We will get back to you very soon.</p>');
                    });
                }
            }
        });
    });
	
});