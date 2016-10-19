/**
* @file jQuery plugin that creates the basic interactivity for a flyout that opens on focus of trigger element
* @version 0.0.2
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @requires jquery-next-id
* @requires jquery-focus-exit
*/
(function($, window, document, undefined) {
    /**
    * jQuery plugin that creates the basic interactivity for a flyout that opens on focus of trigger element
    *
    * @method "jQuery.fn.focusFlyout"
    * @param {boolean} [options.triggerSelector] - selector for trigger element (default: '.flyout__trigger')
    * @param {boolean} [options.overlaySelector] - selector for overlay element (default: '.flyout__overlay')
    * @fires {object} flyoutExpand - the flyout has expanded
    * @fires {object} flyoutCollapse - the flyout has collapsed
    * @return {jQuery} chainable jQuery class
    */
    $.fn.focusFlyout = function focusFlyout(options) {
        options = $.extend({
            autoExpand: true,
            debug: false,
            triggerSelector: '.flyout__trigger',
            overlaySelector: '.flyout__overlay'
        }, options);

        return this.each(function onEach() {
            var $widget = $(this);
            var $trigger = $widget.find(options.triggerSelector).first();
            var $overlay = $widget.find(options.overlaySelector).first();

            // set state to expanded
            var expandFlyout = function() {
                if ($trigger.attr('aria-expanded') === 'false') {
                    $trigger.attr('aria-expanded', 'true');
                    $overlay.attr('aria-hidden', 'false');
                    $widget.trigger('flyoutExpand');
                }
            };

            // set state to collapsed
            var collapseFlyout = function() {
                if ($trigger.attr('aria-expanded') === 'true') {
                    $trigger.attr('aria-expanded', 'false');
                    $overlay.attr('aria-hidden', 'true');
                    $widget.trigger('flyoutCollapse');
                }
            };

            // assign next id in sequence if one doesn't already exist
            $widget.nextId('flyout');

            // ensure overlay has an ID
            if ($overlay.prop('id') === '') {
                $overlay.prop('id', $widget.prop('id') + '-overlay');
            }

            // initial state is hidden from assistive technology
            $overlay.attr('aria-hidden', 'true');

            // the input controls the overlay's expanded state
            $trigger
                .attr('aria-controls', $overlay.prop('id'))
                .attr('aria-expanded', 'false');

            if (options.autoExpand === true) {
                // listen for focus on trigger
                $trigger.on('focus', expandFlyout);
            }

            // plugin for detecting focus exit
            $widget.focusExit();

            // listen for focus exiting widget
            $widget.on('focusExit', collapseFlyout);

            // add class to signify that js is available
            $widget.addClass('flyout--js');
        });
    };
}(jQuery, window, document));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/

/**
* flyoutExpand event
*
* @event flyoutExpand
* @type {object}
* @property {object} event - event object
*/

/**
* flyoutCollapse event
*
* @event flyoutCollapse
* @type {object}
* @property {object} event - event object
*/
