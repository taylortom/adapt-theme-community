define(['core/js/adapt'], function(Adapt) {
  var view;
  Adapt.on('blockView:postRender', function(blockView) {
    view = blockView;
    var settings = view.model.get('themeSettings') && view.model.get('themeSettings')['adapt-theme-community'];
    if(!settings) {
      return;
    }
    if(settings._class && settings._class !== 'none') {
      customiseClass(settings._class);
    }
  });

  function customiseClass(classname) {
    view.$el.addClass(classname);
  }
});
