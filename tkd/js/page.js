/****$(function(){
	console.log('dsjfsdjfjjsdhfsd');
	$('.link-btn').on('click', function(){
		
		var index = $(this).parent('.wtf').index();
		console.log(index);
        $('.txt').removeAttr('style');
		$('.txt').toggle('hidden');
        $('.txt').removeAttr('style');
        $('.link-btn').removeAttr('style');
        $('.link-btn').eq(index).toggle('hidden');
        $('.link-btn').removeAttr('style');
       $('.clasess').removeAttr('style');
       $('.clasess').eq(index).addClass('me');
        
         $('.clasess').eq(index).removeAttr('style');
		$('.message').removeAttr('style');
		$('.message').eq(index).toggle('hidden');
	});
    $('.hides').on('click', function(){
        var index = $(this).parent('.message').index();
$(this).parent('.message').addClass('hidden');
$(this).parent('.message').removeAttr('style');
 $(this).parent('.txt').removeClass('non');
$(this).parent('.txt').removeAttr('style');       

$(this).parent('.link-btn').removeAttr('style');          
   $('.clasess').removeClass('me');  
  $('.link-btn').eq(index).toggle('hide'); 
   $('.txt').toggle('show');     
});
});

$('.carousel').carousel({
   interval: false,
  pause: 'hover',
  wrap: true
});







*/



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




$(function () {
	//script for popups
	$('button.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
	
	//script for tabs
	$("div.selectTabs").each(function () {
		var tmp = $(this);
		$(tmp).find(".lineTabs li").each(function (i) {
			$(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
				var tab_id=i+1;
				$(tmp).find(".lineTabs li").removeClass("active");
				$(this).parent().addClass("active");
				$(tmp).find(".tab_content div").stop(false,false).hide();
				$(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
				return false;
			});
		});
	});
});	
$(function () {
	//script for popups
	$('button.show_popup2').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
	
	//script for tabs
	$("div.selectTabs").each(function () {
		var tmp = $(this);
		$(tmp).find(".lineTabs li").each(function (i) {
			$(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
				var tab_id=i+1;
				$(tmp).find(".lineTabs li").removeClass("active");
				$(this).parent().addClass("active");
				$(tmp).find(".tab_content div").stop(false,false).hide();
				$(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
				return false;
			});
		});
	});
});	

$('.carousel').carousel({
   interval: 10000,
  pause: 'hover',
  wrap: true
});




google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(59.845865, 30.254107),
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#292929"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 2
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": 1
            },
            {
                "lightness": 0
            },
            {
                "weight": 0
            },
            {
                "gamma": 0.1
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 3
            },
            {
                "saturation": 3
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 1
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 0
            },
            {
                "saturation": 0
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 60
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 50
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
],
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Aperture', 'undefined', '(812) 703-02-02', 'aperture@gmail.com', 'aperture.com', 59.845865, 30.254107, 'http://i79.fastpic.ru/big/2016/0412/9b/84b16633d9bf030f834b0bf10bc9ea9b.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}