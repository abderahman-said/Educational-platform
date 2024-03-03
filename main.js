new WOW().init();

$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    document.getElementById("page-top").scrollIntoView();

    $("#ctn-preloader").addClass("loaded");
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $(this).delay(2000).fadeOut();
    }
  }, 1500);
}

function afterLoad() { }





$(".box-video").click(function () {
  $('iframe', this)[0].src += "&amp;autoplay=1";
  $(this).addClass('open');
});







$('.owl_carousel_2').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  rtl: true,
  dots: true,
  autoplay: true,
  nav: false,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn'
})




$('.owl_carousel').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  rtl: true,
  dots: true,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      loop: false
    }
  }
})

$('.owl_carousel3').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  rtl: true,
  dots: true,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 2,
      nav: true,
      loop: false
    }
  }
})
$(".search-navbar").click(function () {
  $(".overlay").fadeIn();
});

$(".close-popup").click(function () {
  $(".overlay").fadeOut();
});

$(".searchButton-nav").click(function (e) {
  e.preventDefault();
  $(".overlay").fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $("#searchBox-nav");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".overlay").fadeOut();
  }
});

$('ul.nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').finish().delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').finish().delay(200).fadeOut(500);
});




function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}


$('.owl_carousel5').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  rtl: true,
  dots: false,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  responsive: {
    0: {
      items: 2,
      nav: false
    },
    600: {
      items: 4,
      nav: false
    },
    1000: {
      items:  8,
      nav: true,
      loop: false
    }
  }
})

 
$('.owl_carousel4').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  rtl: true,
  dots: true,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  items:1,
  
})





$(document).ready(function () {


  if ($(window).width() < 1199) {
    // mobile menu
    $('.hamburger').click(function (event) {
      $(this).toggleClass('h-active');
      $('.main-nav').toggleClass('slidenav');
    });

    $('.header-home .main-nav ul li  a').click(function (event) {
      $('.hamburger').removeClass('h-active');
      $('.main-nav').removeClass('slidenav');
    });
  }


  $(".main-nav .fl").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.submenu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
    if ($fl.hasClass('flaticon-plus')) {
      $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
    } else {
      $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
    }
    $fl.next(".submenu").slideToggle();
  });

});



 
(function($) {

  $.fn.niceSelect = function(method) {
    
    // Methods
    if (typeof method == 'string') {      
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }
      
    // Hide native select
    this.hide();
    
    // Create custom markup
    this.each(function() {
      var $select = $(this);
      
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    
    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
      );
        
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      
      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');
      
      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');  
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    
    return this;

  };

}(jQuery));

/* Initialize */

$(document).ready(function() {
  $('select').niceSelect();
});
