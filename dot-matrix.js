(function() {

    this.DotMatrix = function() {

        this.gchars = {
            'A': [
                [2, 3, 4, 5],
                [1, 4],
                [1, 4],
                [2, 3, 4, 5],
                []
            ],
            'B': [
                [1, 2, 3, 4, 5],
                [1, 3, 5],
                [1, 3, 5],
                [1, 2, 4, 5],
                []
            ],
            'C': [
                [2, 3, 4],
                [1, 5],
                [1, 5],
                []
            ],
            'D': [
                [1, 2, 3, 4, 5],
                [1, 5],
                [1, 5],
                [2, 3, 4],
                []
            ],
            'E': [
                [1, 2, 3, 4, 5],
                [1, 3, 5],
                [1, 3, 5],
                []
            ],
            'F': [
                [1, 2, 3, 4, 5],
                [1, 3],
                [1, 3],
                []
            ],
            'G': [
                [1, 2, 3, 4, 5],
                [1, 5],
                [1, 3, 5],
                [1, 3, 4, 5],
                []
            ],
            'H': [
                [1, 2, 3, 4, 5],
                [3],
                [3],
                [1, 2, 3, 4, 5],
                []
            ],
            'I': [
                [1, 2, 3, 4, 5],
                []
            ],
            'J': [
                [4, 5],
                [5],
                [1, 2, 3, 4, 5],
                []
            ],
            'K': [
                [1, 2, 3, 4, 5],
                [3],
                [2, 4],
                [1, 5],
                []
            ],
            'L': [
                [1, 2, 3, 4, 5],
                [5],
                [5],
                []
            ],
            'M': [
                [1, 2, 3, 4, 5],
                [1],
                [2],
                [1],
                [1, 2, 3, 4, 5],
                []
            ],
            'N': [
                [1, 2, 3, 4, 5],
                [2],
                [3],
                [4],
                [1, 2, 3, 4, 5],
                []
            ],
            'O': [
                [2, 3, 4],
                [1, 5],
                [1, 5],
                [2, 3, 4],
                []
            ],
            'P': [
                [1, 2, 3, 4, 5],
                [1, 3],
                [1, 2, 3],
                []
            ],
            'Q': [
                [2, 3, 4],
                [1, 5],
                [1, 4, 5],
                [2, 3, 4, 5],
                []
            ],
            'R': [
                [1, 2, 3, 4, 5],
                [1, 4],
                [1, 2, 3, 5],
                []
            ],
            'S': [
                [1, 2, 3, 5],
                [1, 3, 5],
                [1, 3, 4, 5],
                []
            ],
            'T': [
                [1],
                [1, 2, 3, 4, 5],
                [1],
                []
            ],
            'U': [
                [1, 2, 3, 4, 5],
                [5],
                [5],
                [1, 2, 3, 4, 5],
                []
            ],
            'W': [
                [1, 2, 3, 4, 5],
                [5],
                [4],
                [5],
                [1, 2, 3, 4, 5],
                []
            ],
            'X': [
                [1, 5],
                [2, 4],
                [3],
                [2, 4],
                [1, 5],
                []
            ],
            'Y': [
                [1],
                [2],
                [3, 4, 5],
                [2],
                [1],
                []
            ],
            'Z': [
                [1, 4, 5],
                [1, 3, 5],
                [1, 2, 5],
                []
            ],
            ' ': [
                []
            ]
        };

        this.timer = null;
        this.xoffset = 0;
        this.yoffset = 0;

        this.comp_no = -1;

        this.displayMatrix = [];

        // Define option defaults
        var defaults = {
            gcolors: ['#d6e685', '#8cc665', '#44a340', '#1e6823'],
            cols: 54,
            rows: 7,
            repeat: false,
            compositions: []
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

    }

    DotMatrix.prototype.run = function() {
        start.call(this);
    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function initializeEvents() {


    }

    function getCalendarWidth() {
        return jQuery('.js-calendar-graph-svg').find('g').length - 1;
    }

    function getTextWidth(text) {

        text = text.toUpperCase();
        var c = 0;

        for (i = 0; i < text.length; i++) {
            var r = 0;
            var l = this.gchars[text[i]];
            c += l.length + 1;
        }

        return c;
    }

    function genTextMatrix() {

        var textMatrix = [];
        for (i = 0; i < text.length; i++) {
            var l = (typeof this.gchars[text[i]] != "undefined") ? this.gchars[text[i]] : '[]';
            for (j = 0; j < l.length; j++) {
                textMatrix.push(l[j]);
            }
        }
        return textMatrix;
    }

    function genDisplayMatrix() {

        this.displayMatrix = [];
        var textMatrix = genTextMatrix.call(this);

        for (var i = 0; i < this.options.cols * 2; i++) {
            this.displayMatrix.push([]);

            for (var j = 0; j < this.options.rows; j++) {
                //displayMatrix[i].push([]);
            }
            if (i == this.options.cols) this.displayMatrix = this.displayMatrix.concat(textMatrix);
        }

    }

    function setText(t) {
        text = t.toUpperCase();
        genDisplayMatrix.call(this);
    }

    function displayText(color, invert) {

        if (typeof color == 'undefined') color = 'rand';
        if (typeof invert == 'undefined') invert = false;

        if (typeof direction == 'undefined') direction = 'none';

        //clear or invert
        if (invert) {

            jQuery('.js-calendar-graph-svg').find('rect').each(function() {
                var gcolor = (color == 'rand') ? this.options.gcolors[Math.floor((Math.random() * 2))] : color;
                jQuery(this).attr('fill', gcolor);
            });

        } else jQuery('.js-calendar-graph-svg').find('rect').attr('fill', '#eeeeee');


        var co = 3; //column offset

        for (var c = 0; c < this.options.cols; c++) {

            if (typeof this.displayMatrix[c + this.xoffset] != 'undefined') {
                for (rect = 0; rect < this.displayMatrix[c + this.xoffset].length; rect++) {
                    var gcolor = (color == 'rand' && invert == false) ? this.options.gcolors[Math.floor((Math.random() * this.options.gcolors.length))] : color;
                    if (invert) gcolor = '#1e6823';
                    jQuery('.js-calendar-graph-svg').find('g').eq(c + co).find('rect').eq(this.displayMatrix[c + this.xoffset][rect]).attr('fill', gcolor);
                }
            }

        }
    }

    function disableAnimation() {
        if (this.timer != null) clearInterval(this.timer);
        this.timer = null;
    }

    function animateText(text, color, invert, transition, time) {

        if (typeof color == 'undefined') color = 'rand';
        if (typeof time == 'undefined') time = 100;
        if (typeof invert == 'undefined') invert = false;
        if (typeof transition == 'undefined') transition = 'none';

        if (this.timer != null) clearInterval(this.timer);

        if (transition == 'left') this.xoffset = 1;
        if (transition == 'right') this.xoffset = (this.options.cols * 2) - 1;

        setText.call(this, text);

        var _self = this;
        this.timer = setInterval(function() {

            if (_self.xoffset < 0 || _self.xoffset > _self.displayMatrix.length) {

                disableAnimation.call(_self);
                nextComposition.call(_self);
            }

            //console.log(_self.xoffset);

            if (transition == 'left') _self.xoffset++;
            if (transition == 'right') _self.xoffset--;
            if (transition == 'up') _self.yoffset++;
            if (transition == 'down') _self.yoffset--;

            displayText.call(_self, color, invert);
        }, time);
    }

    function nextComposition() {

        var nextNo = ((this.comp_no + 1) > this.options.compositions.length - 1) ? 0 : this.comp_no + 1;
        this.comp_no = nextNo;
        console.log('next composition: ' + nextNo);
        var composition = this.options.compositions[nextNo];

        if (typeof composition['transition'] == 'undefined') composition['transition'] = 'none';

        switch (composition['transition']) {
            case 'left':
            case 'right':
            case 'up':
            case 'down':
                animateText.call(this, composition['text'], composition['color'], composition['invert'], composition['transition'], composition['duration']);
                break;
            case 'none':
                displayText.call(this, composition['text'], composition['color'], composition['invert']);
                break;
        }
        //if (_self.options.repeat) animateText.call(_self, text, color, invert, transition, time);

    }

    function start() {

        if (this.options.compositions.length > 0) {
            nextComposition.call(this);
        }
    }

}());

var dm = new DotMatrix({
    repeat: true,
    compositions: [{
        text: 'Hello',
        color: 'rand',
        transition: 'left',
        invert: false,
        duration: 100
    }, {
        text: 'World',
        color: 'rand',
        transition: 'right',
        invert: false,
        duration: 100
    }]

});
dm.run();