$(document).ready(function(){
	var h = $(window).height();
    console.log(h);
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#ex1").offset().top) {
			$("#ex1.original").eq(0).addClass('animated fadeInDown');
            console.log('4444444444');
         
		} 
if ( ($(this).scrollTop()+h) > $("#ex2").offset().top) {
			$("#ex2.original").eq(0).addClass('animated fadeInDown');
            console.log('555544');
		} if ( ($(this).scrollTop()+h) > $("#ex3").offset().top) {
			$("#ex3.original").eq(0).addClass('animated fadeInDown');
            console.log('333');
		} if ( ($(this).scrollTop()+h) > $("#ex4").offset().top) {
			$("#ex4.original").eq(0).addClass('animated fadeInDown');
            console.log('333');
		} if ( ($(this).scrollTop()+h) > $("#ex5").offset().top) {
			$("#ex5.original").eq(0).addClass('animated fadeInDown');
            console.log('333');
		} if ( ($(this).scrollTop()+h) > $("#ex6").offset().top) {
			$("#ex6.original").eq(0).addClass('animated fadeInDown');
            console.log('333');
		} if ( ($(this).scrollTop()+h) > $("#ex7").offset().top) {
			$("#ex7.original").eq(0).addClass('animated fadeInDown');
            console.log('333');
		} if ( ($(this).scrollTop()+h) > $("#exx").offset().top) {
			$("#exx.col-1").eq(0).addClass('animated fadeInRight');
            console.log('right');
		} if ( ($(this).scrollTop()+h) > $("#exx2").offset().top) {
			$("#exx2.col-2").eq(0).addClass('animated fadeInLeft');
            console.log('right2');
        }
		}
	);
        
    


  $(".servicelist").click(function(){
    $(this).next().slideToggle(400);
  
    $(this).find("#button").toggleClass("rotate")
});  
    
    
    
    
document.getElementById('slider-left').onclick = sliderLeft;
 
var left = 0;
function sliderLeft(){
    
	var polosa = document.getElementById('polosa');
    var inon = document.getElementById('slider-left');
    var inon2 = document.getElementById('slider-right');
	left = left - 100;
    console.log(left);
    inon2.style.display = "block";
	if (left <= -200) {
		inon.style.display = "none";
	}
	polosa.style.marginLeft = left +'%';
    console.log('2left');
    
}
document.getElementById('slider-right').onclick = sliderright; 

function sliderright(){
	var polosa = document.getElementById('polosa');
    var inon = document.getElementById('slider-left');
    var inon2 = document.getElementById('slider-right');
	left += 100;
    inon.style.display = "block";
    console.log(left);
 if (left >= 0) {
  inon2.style.display = "none";
  inon.style.display = "block";
	}
	polosa.style.marginLeft = left +'%';
    console.log('2left');
}; 
    
    
    
    
    
    
    
    
document.getElementById('slider-right2').onclick = sliderLeft2;
 var left2 = 0;
   function sliderLeft2(){
	var polosa2 = document.getElementById('polosa2');
    var inon2 = document.getElementById('slider-left2');
    var inon3 = document.getElementById('slider-right2');
	left2 = left2 - 100;
    console.log(left2);
    inon2.style.display = "block";
	if (left2 <= -200) {
		inon3.style.display = "none";
        
	}
	polosa2.style.marginLeft = left2 +'%';
    console.log('leftdone');
    
}
document.getElementById('slider-left2').onclick = sliderright2; 

function sliderright2(){
	var polosa2 = document.getElementById('polosa2');
    var inon2 = document.getElementById('slider-left2');
    var inon3 = document.getElementById('slider-right2');
	left2 += 100;
    inon3.style.display = "block";
    console.log("right");
     console.log(left2);
 if (left2 >= 0) {
  inon2.style.display = "none";
  inon3.style.display = "block";
	}
	polosa2.style.marginLeft = left2 +'%';
    console.log('right');
   
}     
    
    
    
    
    
    
    
    
    
    
    
  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		
	});
    
setTimeout(function(){(function func($){

	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
		
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function func($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
 
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});},2500);



    
    
    
    
    
 });   
    
    
        
  

    
    

