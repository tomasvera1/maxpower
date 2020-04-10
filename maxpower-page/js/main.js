jQuery(document).ready(function($) {

  // Accordion Toggle
  var iconOpen = 'icon-minus', iconClose = 'icon-plus';

  $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
    var $target = $(e.target)
    $target.siblings('.accordion-heading')
      .find('em').toggleClass(iconOpen + ' ' + iconClose);
    if (e.type == 'show')
      $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    if (e.type == 'hide')
      $(this).find('.accordion-toggle').not($target).removeClass('active');
  });

  // DM Top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('.dmtop').css({
        bottom: "25px"
      });
    } else {
      $('.dmtop').css({
        bottom: "-100px"
      });
    }
  });

  $('.dmtop').click(function() {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });

  // DM Menu
  $('#nav').affix({
    offset: {
      top: $('#nav').offset().top
    }
  });

  // Menu
  $(".panel a").click(function(e) {
    e.preventDefault();
    var style = $(this).attr("class");
    $(".jetmenu").removeAttr("class").addClass("jetmenu").addClass(style);
  });
  $().jetmenu();

  // Facts
  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */

    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function() {
        count($this)
      }, 50);
    }
  }

  $(".stat-count").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });

  // Tooltip
  $('.social_buttons, .client').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

  $('.social_buttons, .client').tooltip();

  // prettyPhoto
  $(document).ready(function() {
    $('a[data-gal]').each(function() {
      $(this).attr('rel', $(this).data('gal'));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
      animationSpeed: 'slow',
      theme: 'light_square',
      slideshow: false,
      overlay_gallery: false,
      social_tools: false,
      deeplinking: false
    });
  });

  // Hover and Carousel
  $('.owl-carousel > .item ').each(function() {
    $(this).hoverdir();
  });
  $("#owl-demo").owlCarousel({
    items: 5,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    stopOnHover: true,
    lazyLoad: true,
    transitionStyle: "fade",
    navigation: true,
    pagination: false,
  });

  // tooltip demo
  $("[data-toggle=tooltip]").tooltip();

  // popover demo
  $("[data-toggle=popover]").popover();

  // Chart Effects;
	$('.chart').easyPieChart({
		easing: 'easeOutBounce',
		size : 180,
		animate : 2000,
		lineWidth : 10,
		lineCap : 'square',
		lineWidth : 18,
		barColor : '#3498db',
		trackColor : '#f9f9f9',
		scaleColor : false,
		onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent)+'%');
		}
	});

  // Popular Items Carousel
  $(document).ready(function() {
    $("#popularitems").owlCarousel({
      items: 3,
      lazyLoad: true,
      navigation: false
    });
  });

  // Hover and Carousel on Home #1
  $('.owl-carousel > .item ').each(function() {
    $(this).hoverdir();
  });

  $("#owl-related").owlCarousel({
    items: 3,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    stopOnHover: true,
    lazyLoad: true,
    transitionStyle: "fade",
    navigation: true,
    pagination: false,
  });

  // Portfolio
  var $container = $('.portfolio'),
    $items = $container.find('.market-item'),
    portfolioLayout = 'fitRows';

  if ($container.hasClass('portfolio-centered')) {
    portfolioLayout = 'masonry';
  }

  $container.isotope({
    filter: '*',
    animationEngine: 'best-available',
    layoutMode: portfolioLayout,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    },
    masonry: {}
  }, refreshWaypoints());

  function refreshWaypoints() {
    setTimeout(function() {}, 1000);
  }

  $('nav.portfolio-filter ul a').on('click', function() {
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    }, refreshWaypoints());
    $('nav.portfolio-filter ul a').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  function getColumnNumber() {
    var winWidth = $(window).width(),
      columnNumber = 2;
  }

  function setColumns() {
    var winWidth = $(window).width(),
      columnNumber = getColumnNumber(),
      itemWidth = Math.floor(winWidth / columnNumber);

    $container.find('.market-item').each(function() {
      $(this).css({
        width: itemWidth + 'px'
      });
    });
  }

  function setPortfolio() {
    setColumns();
    $container.isotope('reLayout');
  }

  $container.imagesLoaded(function() {
    setPortfolio();
  });

  $(window).on('resize', function() {
    setPortfolio();
  });

});



function showList(a){
  if(a)
    $('#list').css('display', 'block');
  else
    $('#list').css('display', 'none');


  if($('#s').val() == "")
    $('#list').empty();
}
async function search(e){
  let word = document.getElementById('s').value;
  word += String.fromCharCode(e.keyCode);
  const data = {word: word, where: window.location.href.split('/')[3]};
  const options = { 
    method: 'POST', 
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch('/search', options).catch(error => console.error(error));
  const json = await response.json();
  if(json){
    $('#list').empty();
    for(let p of json.find){
      $('#list').append(`<p>${p}</p>`);
    }
    $('#list').css('display','block');
  }
}

async function sendEmail(){
  let sEmail = true;
  const send = {
    name: $('#contact-name').val(),
    email: $('#contact-email').val(),
    sub: $('#contact-subject').val(),
    msg: $('#contact-message').val(),
    tel: $('#contact-tel').val(),
    ent: $('#contact-enterprise').val()
  };
  
  let msg = "";


  let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if(send.email.split('@').length != 2){
    msg = "    El email debe contener un '@'";
    sEmail = false;
  }else if(send.name.length < 6){
    sEmail = false;
    msg = "    El nombre debe tener por lo menos 6 letras";
  }else if(send.sub.length < 4){
    sEmail = false;
    msg = "    El asunto debe tener por lo menos 4 letras";
  }else if(send.msg.length < 10){
    msg = "    El mensaje debe tener por lo menos 10 letras";
    sEmail = false;
  }else if(send.tel.match(re) == null){
    msg = "    El teléfono ingresado no coincide con el formato(111-2222-3333)";
    sEmail = false;
  }

  if(!send.name || !send.email || !send.sub || !send.msg || !send.tel || !send.ent){
    msg="Todos los campos son requeridos";
    sEmail = false;
  }

  if(sEmail){
    const options = { 
      method: 'POST', 
      body: JSON.stringify(send), 
      headers:{
          'Content-Type': 'application/json'
      }
    };

    const response = await fetch('/email', options).catch(error => console.error(error));
    const json = await response.json();
    if(json){
      $('#msg').css('display', 'block');
      if(json.status)
        $('#msg').html('<img src="../img/success.gif"></img>    Mensaje enviado con éxito').css('color', 'green');
      else
        $('#msg').html('<img src="../img/err.png"></img>    Hubo un problema al enviar el mensaje, por favor vuelva a intentarlo.').css('color', 'red');
    }
  }else{
    $('#msg').css('display', 'block');
    $('#msg').html('<img src="../img/err.png"></img>' + msg).css('color', 'red');
  }

}


function close_ad(){
  let div = document.getElementById('div-corona')
  //let parent = document.getElementById('home')
  div.parentNode.removeChild(div)
}