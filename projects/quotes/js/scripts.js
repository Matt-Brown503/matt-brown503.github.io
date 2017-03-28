$(document).ready(function(){
	//sets library directory to firt library
	var library = shuffle(movies);

	//shuffles a library when called
	function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
	//sets the correct library when called (tab clicked)
	function pickLibrary(){
		if ($('#option1').parent().hasClass('active')) {
			library = movies;
		} else if ($('#option2').parent().hasClass('active')) {
			library = books;
		} else if ($('#option3').parent().hasClass('active')) {
			library = music;
		}else {
			library = comics;
		};
	};

	//returns the quote to the html
	function getQuote(){
		
		$('#quote').html('"' + library[0][0] + '"');
		$('#author').html('- ' + library[0][1]);
	
		$("#quote").css('opacity', 0);
        $('#quote').animate({opacity: 1}, 1000);

        $("#author").css('opacity', 0);
        $('#author').animate({opacity: 1}, 1000);
        library.push(library.shift()); 
	};
	//fades text when loading new quote for 
	function greyout(element){
          if ($(element).hasClass('.greyout')!==true) {
          	$(element).addClass(' greyout');
          };
      	};
	//Generates new quote 
	$('#generator').click(function(){
          getQuote();
          greyout('h1');
          greyout('.end');
		});
	//changes active library
	$('#option1').parent().click(function(){
		$('#background').addClass('movies-theme').removeClass('books-theme music-theme comic-theme')
		library = shuffle(movies);
		getQuote();
	});
	$('#option2').parent().click(function(){
		$('#background').addClass('books-theme').removeClass('music-theme movies-theme comic-theme')
		library = shuffle(books);
		getQuote();
	});
	$('#option3').parent().click(function(){
		$('#background').addClass('music-theme').removeClass('books-theme movies-theme comic-theme')
		library = shuffle(music);
		getQuote();
	});
	$('#option4').parent().click(function(){
		$('#background').addClass('comic-theme').removeClass('books-theme music-theme movies-theme')
		library = shuffle(comics);
		getQuote();
	});

	function preloader() {
		if (document.images) {
			var img1 = new Image();
			var img2 = new Image();
			var img3 = new Image();
			var img4 = new Image();

			img1.src = '../img/theater.jpg';
			img2.src = '../img/books.jpg';
			img3.src = '../img/albums.jpg';
			img4.src = '../img/comics.jpg';
		}
	};

	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
				func();
			}
		}
	}
getQuote();
addLoadEvent(preloader);
});
