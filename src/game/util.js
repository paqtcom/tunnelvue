import { MG, NAMESPACE_SVG, NAMESPACE_XLINK } from './base.js';

// ==============================================================================
// Utility Functions
// ==============================================================================

MG.util = {};

MG.util.hideMouse = function() {
    var i;

    for (i = 0; i < document.styleSheets.length; i++) {
        var styleSheet = document.styleSheets[i];

        if (styleSheet.title === 'style-hide-mouse') {
            styleSheet.disabled = false;
        }
    }
};

MG.util.showMouse = function() {
    var i;

    for (i = 0; i < document.styleSheets.length; i++) {
        var styleSheet = document.styleSheets[i];

        if (styleSheet.title === 'style-hide-mouse') {
            styleSheet.disabled = true;
        }
    }
};

export default MG.util;
