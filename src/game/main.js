import { MG, NAMESPACE_SVG, NAMESPACE_XLINK } from './base.js';

import fog from './fog.js';
import banner from './banner.js';
import game from './game.js';
import hud from './hud.js';

MG.fog = fog;
MG.banner = banner;
MG.game = game;
MG.hud = hud;
MG.fallback = false;
MG.pause = false;

MG.init = function() {
    MG.fog.init();
    MG.banner.init();
    MG.game.init();
    MG.hud.init();
    MG.pause = false;

    document.addEventListener(
        'mousemove',
        function(evt) {
            MG.game.onMouseMove(evt.clientX, evt.clientY);
        },
        false
    );

    window.addEventListener('deviceorientation', MG.game.onOrientation);

    window.addEventListener('mousedown', MG.game.onMouseClick, false);

    var update = function(dt) {
        MG.fog.update(dt);
        MG.game.update(dt);
        MG.hud.update(dt);
        MG.banner.update(dt);

        MG.fog.updateDOM();
        MG.game.updateDOM();
        MG.hud.updateDOM();
        MG.banner.updateDOM();
    };

    var lastTick = 0;
    var zeroCounter = 0;
    var useFallback = false;

    if (!window.requestAnimationFrame) {
        useFallback = true;
    }

    MG.fallback = useFallback;

    var mainLoop = function(thisTick) {
        var dt;

        // Some browsers don't pass in a time.  If `thisTick` isn't set for
        //  more than a few frames fall back to `setTimeout`
        if (!thisTick) {
            zeroCounter += 1;
        } else {
            zeroCounter = 0;
        }
        if (zeroCounter > 10) {
            useFallback = true;

            MG.fallback = useFallback;
        }

        thisTick = thisTick || 0;
        if (useFallback) {
            dt = 1 / 30;
        } else {
            dt = (thisTick - lastTick) / 1000;
        }
        // pretend that the frame rate is actually higher if it drops below
        // 10fps in order to avoid wierdness
        if (dt > 1 / 10) {
            dt = 1 / 10;
        }

        lastTick = thisTick;

        update(dt);

        if (MG.pause) {
            return;
        }

        if (useFallback) {
            window.setTimeout(mainLoop, 1000 / 30);
        } else {
            window.requestAnimationFrame(mainLoop);
        }
    };

    mainLoop();
};

export default MG;
