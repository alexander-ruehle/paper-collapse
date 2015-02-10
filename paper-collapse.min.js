/*!
  Paper Collapse v0.4.0

  Collapsible paper cards.

  Made with love by bbo - ©2015 Alexander Rühle
  MIT License http://opensource.org/licenses/MIT
 */
(function(){!function(e){"use strict";e.fn.paperCollapse=function(o){var a;return a=e.extend({},e.fn.paperCollapse.defaults,o),e(this).find(".collapse-card__heading").add(a.closeHandler).click(function(){e(this).closest(".collapse-card").hasClass("active")?(a.onHide.call(this),e(this).closest(".collapse-card").removeClass("active"),e(this).closest(".collapse-card").find(".collapse-card__body").slideUp(a.animationDuration,a.onHideComplete)):(a.onShow.call(this),e(this).closest(".collapse-card").addClass("active"),e(this).closest(".collapse-card").find(".collapse-card__body").slideDown(a.animationDuration,a.onShowComplete))}),this},e.fn.paperCollapse.defaults={animationDuration:400,easing:"swing",closeHandler:".collapse-card__close_handler",onShow:function(){},onHide:function(){},onShowComplete:function(){},onHideComplete:function(){}}}(jQuery)}).call(this);