define(['core/js/adapt'], function(Adapt) {
  var settings;
  Adapt.once('adapt:initialize', function() {
    settings = Adapt.config.get('themeSettings') && Adapt.config.get('themeSettings')['adapt-theme-community'];
    if(!settings) {
      return;
    }
    customiseFont();
    customiseLogo();
    customiseBg();
    
    $('body').css('display', 'initial');
  });

  function customiseFont() {
    var fontFamily = settings._fontFamily;
    var fontUrl = settings._fontUrl;
    if(fontFamily) {
      $('body').css('font-family', fontFamily);
    }
    if(fontUrl) {
      $('body').append('<link href="' + fontUrl + '" rel="stylesheet">');
    }
  }

  function customiseLogo() {
    if(settings._logo) {
      $('.logo').css('background-image', 'url(' + settings._logo + ')');
    }
  }

  function customiseBg() {
    if(settings._backgroundImage) {
      $('body').css('background-image', 'url(' + settings._backgroundImage + ')');
    }
  }
});
