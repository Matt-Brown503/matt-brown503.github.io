$(document).ready(function(){

//loads landing page content
	$('header').addClass(' load');
	$('.scroll').addClass(' load');

	
//function to load content based on scroll from top of screen
	var scroller = function(check) {
		$(window).scroll(function() {
			if ($(window).scrollTop() + $(window).height() >= $(check).offset().top-100) {
				$(check).parent().addClass(' slide');
			}
		});
	};

	scroller('.aboutcheck');
	scroller('.workcheck');
	scroller('.studycheck');
	scroller('.contactcheck');
	

//requires own function to load
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() >= $('.badge-info').offset().top-300) {
			$('.th-badge').addClass(' badge-animate');
		}
	});

//toggler for work content
	$('.desktop-button').click(function(){
		$('.a-group').toggleClass(' a-off');
		$('.b-group').toggleClass(' b-off');
	});

	$('.mobile-button').click(function(){
		$('.b-group').css('display', 'block');
		$(this).remove();
	});


//scroll to first section on click
	$('a[href^="#"').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if(target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top-100
			}, 550);
		}
	});
	


//get JSON for treehouse account
	var myUrl = 'https://teamtreehouse.com/walterbrown2.json';
	var badgeHTML = '';
	var badgeInfo = [];
	var rawDate = [];
	var date = [];
	var mobileInfo = [];
	$.getJSON(myUrl)
	.done(function(data){
		var badgeList = data.badges;
		var points = data.points.total;
		var myBadges = badgeList.length-1;
		badgeList =  badgeList.reverse();
		rawDate = badgeList[0].earned_date;
		for (var i = 0; i < 5; i++) {
			var badgeName = badgeList[i].name;
			var badgeIcon = badgeList[i].icon_url;
			var badgeLink = badgeList[i].url;

			badgeHTML += '<a href='+badgeLink+' target=\'_blank\'><img src='+badgeIcon+' class=\'th-badge badge-'+[i]+'\'></a>';

			badgeInfo.push(badgeName);

		}
		for (var j = 0; j < 10; j++) {
			date.push(rawDate[j]);
		}
		date = date.join('');

		for (var k = 0; k < badgeInfo.length; k++) {
			mobileInfo += '<p>'+badgeInfo[k]+'</p>';
		}

		$('#date').html(date);
		$('#badges').html(badgeHTML);
		$('#lessons').html(myBadges);
		$('#points').html(points);
		$('.badge-info-mobile').html(mobileInfo);
		
	//insert badge info content under badge
		var defaultText = '<p>Hover badge for description</p>';	
	//function mouseenter to add details text
		var badgeDetails = function(badgeNum) {
			$('.badge-' + badgeNum + '').mouseenter(function(){
				$('.badge-info').animate({
					width: 400,
				},0, function(){
					$('.badge-info').html('<p>'+badgeInfo[badgeNum]+'</p>');
		
				});
			});
	//function mouseleave to reset details text
			$('.badge-' + badgeNum + '').mouseleave(function(){
				$('.badge-info').animate({
					width: 300
				},0, function(){
					$('.badge-info').html(defaultText);

				});
			});
		};

		badgeDetails(0);
		badgeDetails(1);
		badgeDetails(2);
		badgeDetails(3);
		badgeDetails(4);

	});
});
