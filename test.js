describe("jquery.focusflyout.js", function() {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500;

    var dummyEventTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL / 2;

    var dom = '<div class="flyout">'
                + '<input class="flyout__trigger" type="text" />'
                + '<div class="flyout__live-region">'
                    + '<div class="flyout__overlay">'
                        + '<h2>Flyout Title</h2>'
                        + '<p>Flyout Content</p>'
                        + '<button id="inner_button">Inner Button</button>'
                    + '</div>'
                + '</div>'
            + '</div>'
            + '<button id="outer_button">Outer Button</button>';

    var $widget, $button, $overlay;

    var dummyEventHandlers = {
        onButtonFocus : function(e) {},
        onFlyoutCollapse : function(e) {}
    };

    beforeEach(function() {
        $('body').empty().append($(dom));
        $widget = $('.flyout');
        $input = $('.flyout__trigger');
        $overlay = $('.flyout__overlay');
        $innerButton = $overlay.find('#inner_button');
        $outerButton = $('#outer_button');
    });

    it("should ensure id on container", function() {
        $widget.focusFlyout();
        expect($widget.prop('id')).not.toBe(undefined);
    });

    it("should ensure id on overlay", function() {
        $widget.focusFlyout();
        expect($overlay.prop('id')).not.toBe(undefined);;
    });

    it("should add aria-controls property to input", function() {
        $widget.focusFlyout();
        expect($input.attr('aria-controls')).not.toBe(undefined);
    });

    it("should add aria-expanded state to input", function() {
        $widget.focusFlyout();
        expect($input.attr('aria-expanded')).not.toBe(undefined);
    });

    it("should set aria-expanded state to true on focus", function() {
        $widget.focusFlyout();
        $input.focus();
        expect($input.attr('aria-expanded')).toBe("true");
    });

    it("should trigger flyoutExpand on focus", function(done) {
        $widget.focusFlyout();
        $widget.on('flyoutExpand', done);
        $input.focus();
    });

    it("should set aria-expanded state to false on focusExit", function() {
        $widget.focusFlyout();
        $input.focus();
        $outerButton.focus();
        expect($input.attr('aria-expanded')).toBe("false");
    });

    it("should trigger flyoutCollapse on focusExit", function(done) {
        $widget.focusFlyout();
        $widget.on('flyoutCollapse', done);
        $input.focus();
        $outerButton.focus();
    });

});
