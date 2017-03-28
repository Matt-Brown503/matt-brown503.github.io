$(document).ready(function(){

	$('header').addClass(' load');
	$('.scroll').addClass(' load');

		$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.aboutcheck').offset().top-100) {
	        	$('.aboutcheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.workcheck').offset().top-100) {
	        	$('.workcheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.studycheck').offset().top-100) {
	        	$('.studycheck').parent().addClass(' slide');
	        }
    	});
    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.contactcheck').offset().top-100) {
	        	$('.contactcheck').parent().addClass(' slide');
	        }
    	});

    	$(window).scroll(function() {
	        if ($(window).scrollTop() + $(window).height() >= $('.badge-info').offset().top-300) {
	        	$('.th-badge').addClass(' badge-animate');
	        }
    	});



    	$('.desktop-button').click(function(){
    		$('.a-group').toggleClass(' a-off');
    		$('.b-group').toggleClass(' b-off');
    	});
    	
    	$('.mobile-button').click(function(){
    		$('.b-group').css('display', 'block');
    		$(this).remove();
    	});

	



	var myUrl = 'https://teamtreehouse.com/walterbrown2.json';
	var badgeHTML = '';
	var badgeInfo = [];
	var rawDate = [];
	var date = [];
	var mobileInfo = [];
	$.getJSON(myUrl)
	.done(function(data){
		badgeList = data.badges;
		var points = data.points.total;
		var myBadges = badgeList.length-1;
		badgeList =  badgeList.reverse();
		rawDate = badgeList[0].earned_date;
		for (var i = 0; i < 5; i++) {
			var badgeName = badgeList[i].name;
			var badgeIcon = badgeList[i].icon_url;
			var badgeLink = badgeList[i].url;

			badgeHTML += "<a href="+badgeLink+" target='_blank'><img src="+badgeIcon+" class='th-badge badge-"+[i]+"'></a>";

			 badgeInfo.push(badgeName);

		
		}
		for (var i = 0; i < 10; i++) {
			date.push(rawDate[i]);
		}
		date = date.join('');

		for (var i = 0; i < badgeInfo.length; i++) {
			mobileInfo += '<p>'+badgeInfo[i]+'</p>';
		}

		$('#date').html(date);
		$('#badges').html(badgeHTML);
		$('#lessons').html(myBadges);
		$('#points').html(points);
		$('.badge-info-mobile').html(mobileInfo);
		
		
		
		
		

		var defaultText = '<p>Hover badge for description</p>';
		$('.badge-0').mouseenter(function(){
		$('.badge-info').animate({
			width: 400,
		},0, function(){
			$('.badge-info').html('<p>'+badgeInfo[0]+'</p>');
		
			});
		});
		$('.badge-0').mouseleave(function(){
		$('.badge-info').animate({
			width: 300
		},0, function(){
			$('.badge-info').html(defaultText);
			
			});
		});

		$('.badge-1').mouseenter(function(){
		$('.badge-info').animate({
			width: 400
		},0, function(){
			$('.badge-info').html('<p>'+badgeInfo[1]+'</p>');
		
			});
		});
		$('.badge-1').mouseleave(function(){
		$('.badge-info').animate({
			width: 300
		},0, function(){
			$('.badge-info').html(defaultText);
			
			});
		});

		$('.badge-2').mouseenter(function(){
		$('.badge-info').animate({
			width: 400
		},0, function(){
			$('.badge-info').html('<p>'+badgeInfo[2]+'</p>');
		
			});
		});
		$('.badge-2').mouseleave(function(){
		$('.badge-info').animate({
			width: 300
		},0, function(){
			$('.badge-info').html(defaultText);
		
			});
		});

		$('.badge-3').mouseenter(function(){
		$('.badge-info').animate({
			width: 400
		},0, function(){
			$('.badge-info').html('<p>'+badgeInfo[3]+'</p>');
			
			});
		});
		$('.badge-3').mouseleave(function(){
		$('.badge-info').animate({
			width: 300
		},0, function(){
			$('.badge-info').html(defaultText);
		
			});
		});

		$('.badge-4').mouseenter(function(){
		$('.badge-info').animate({
			width: 400
		},0, function(){
			$('.badge-info').html('<p>'+badgeInfo[4]+'</p>');
			
			});
		});
		$('.badge-4').mouseleave(function(){
		$('.badge-info').animate({
			width: 300
		},0, function(){
			$('.badge-info').html(defaultText);
		
			});
		});


	});

	


});

