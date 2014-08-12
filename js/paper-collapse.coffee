(($) ->
  'use strict'
  $.fn.paperCollapse = (options) ->
    settings = $.extend({}, $.fn.paperCollapse.defaults, options)
    $(this).click ->
      if $(this).hasClass('active')
        settings.onHide.call this
        $(this).removeClass 'active'
        $(this).find('.body').slideUp settings.animationDuration, settings.onHideComplete
      else
        settings.onShow.call this
        $(this).addClass 'active'
        $(this).find('.body').slideDown settings.animationDuration, settings.onShowComplete
      return

    this

  $.fn.paperCollapse.defaults =
    animationDuration: 400
    easing: 'swing'
    onShow: ->
    onHide: ->
    onShowComplete: ->
    onHideComplete: ->
  return) jQuery

(($) ->
  $ ->
    $('.collapse-card').paperCollapse {}
    return

  return) jQuery