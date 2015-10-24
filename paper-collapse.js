
/*!
  Paper Collapse v0.4.0

  Collapsible paper cards.

  Made with love by bbo - ©2015 Alexander Rühle
  MIT License http://opensource.org/licenses/MIT
 */

(function() {
  (function($) {
    'use strict';
    $.fn.paperCollapse = function(options) {
      var settings;
      settings = $.extend({}, $.fn.paperCollapse.defaults, options);
      $(this).find('.collapse-card__heading').add(settings.closeHandler).click(function() {
        if ($(this).closest('.collapse-card').hasClass('active')) {
          settings.onHide.call(this);
          $(this).closest('.collapse-card').removeClass('active');
          $(this).closest('.collapse-card').find('.collapse-card__body').stop().slideUp(settings.animationDuration, settings.onHideComplete);
        } else {
          settings.onShow.call(this);
          $(this).closest('.collapse-card').addClass('active');
          $(this).closest('.collapse-card').find('.collapse-card__body').stop().slideDown(settings.animationDuration, settings.onShowComplete);
        }
      });
      return this;
    };
    $.fn.paperCollapse.defaults = {
      animationDuration: 400,
      easing: 'swing',
      closeHandler: '.collapse-card__close_handler',
      onShow: function() {},
      onHide: function() {},
      onShowComplete: function() {},
      onHideComplete: function() {}
    };
  })(jQuery);

}).call(this);
