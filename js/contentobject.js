define(['core/js/adapt'], function(Adapt) {
  var settings;
  Adapt.on('pageView:postRender', function() {
    try {
      var settings = Adapt.config.get('themeSettings')['adapt-theme-community']._footer;
    } catch(e) { // don't have the required settings, leave now
      return;
    }
    // hide footer before we do anything
    $('.page-footer').hide();
    // already hidden, so just return
    if(!settings._show) return;

    if(settings._backgroundColour) {
      $('.page-footer').css('background-color', settings._backgroundColour);
    }
    if(settings._content._left) {
      $('.page-footer > .left').html(settings._content._left);
    }
    if(settings._content._right) {
      $('.page-footer > .right').html(settings._content._right);
    }
    // show again now we've done the customising
    $('.page-footer').show();
  });
});
