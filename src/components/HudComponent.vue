<template>
    <g id="hud" visibility="hidden">
        <svg preserveAspectRatio="xMinYMid meet" viewBox="0 0 0.1 1">
            <g transform="translate(0.02, 0.98), scale(0.15,-0.15)">
                <!-- Radar Scope -->
                <g>
                    <circle class="hud-background" cx="0.5" cy="0.5" r="0.5" />
                    <circle
                        id="hud-radar-scope-missile-target"
                        clip-path="url(#hud-radar-scope-clip-path)"
                        stroke="none"
                        r="0.04"
                        cx="0.5"
                        cy="0.5"
                    />
                    <circle
                        id="hud-radar-scope-missile"
                        clip-path="url(#hud-radar-scope-clip-path)"
                        fill="#111111"
                        stroke="none"
                        r="0.04"
                    />
                    <circle class="hud-foreground" stroke-width="0.04" cx="0.5" cy="0.5" r="0.5" />
                    <clipPath id="hud-radar-scope-clip-path">
                        <circle cx="0.5" cy="0.5" r="0.5" />
                    </clipPath>
                </g>
                <!-- Speedometer-->
                <g>
                    <g transform="translate(1.1,0.1), scale(1.8,1.8)">
                        <rect class="hud-background" width="1.0" height="0.122" />

                        <rect
                            id="hud-speedometer-bar"
                            clip-path="url(#hud-speedometer-bar-clip-path)"
                            fill="#333333"
                            stroke="none"
                            x="-0.5"
                            width="1.0"
                            height="0.122"
                        />

                        <rect class="hud-foreground" stroke-width="0.02" width="1.0" height="0.122" />

                        <clipPath id="hud-speedometer-bar-clip-path">
                            <rect width="0.5" height="0.122" />
                        </clipPath>
                    </g>

                    <text id="hud-speedometer-label-text" transform="translate(1.2, 0.4), scale(0.012,-0.012)">
                        SPEED
                    </text>

                    <text id="hud-speedometer-speed-text" transform="translate(3, 0.1), scale(0.02,-0.02)" />

                    <clipPath id="speedometer-clip-path">
                        <rect x="1.1" y="0.1" width="1.8" height="0.22" />
                    </clipPath>
                </g>

                <!-- Lives Indicator ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <g>
                    <defs>
                        <g id="hud-lives-indicator-heart" transform="translate(-0.35,0.15), scale(0.025,-0.025)">
                            <path
                                style="stroke-miterlimit=10;"
                                class="hud-lives-heart"
                                d="M7.33,16.21c5.18-2.25,8-4.65,9.47-6.6a4.82,4.82,0,0,0-1.45-7.1,5,5,0,0,0-5.71.64A5,5,0,0,0,4.5.59,4.82,4.82,0,0,0,.72,6.77C1.43,9.1,3.24,12.33,7.33,16.21Z"
                            />
                            <text style="fill:white;" transform="translate(5,10), rotate(15), scale(.3, .3)">JS</text>
                        </g>
                        <g id="hud-lives-indicator-missile" transform="rotate(-65), translate(0,-0.5), scale(0.6,0.6)">
                            <path
                                style="fill:white; stroke: black; stroke-linejoin:round;"
                                stroke-width="0.04"
                                d="m -0.07, 0.01
                                    L -0.2, -0.07
                                    L  0.0,  0.6
                                    L  0.2, -0.07
                                    L  0.07, 0.01"
                            />
                            <path
                                fill="white"
                                stroke="black"
                                stroke-width="0.04"
                                d="m -0.07, 0.0
                                C -0.12, 0.4 -0.12,0.8  0.0,  1.0
                                C  0.12, 0.8  0.12,0.4  0.07, 0.0
                                z"
                            />
                        </g>
                    </defs>
                    <use
                        id="hud-lives-indicator-missile-1"
                        transform="translate(0.6,1.35)"
                        visibility="hidden"
                        xlink:href="#hud-lives-indicator-heart"
                    />
                    <use
                        id="hud-lives-indicator-missile-2"
                        transform="translate(0.6,1.85)"
                        visibility="hidden"
                        xlink:href="#hud-lives-indicator-heart"
                    />
                    <use
                        id="hud-lives-indicator-missile-3"
                        transform="translate(0.6,2.35)"
                        visibility="hidden"
                        xlink:href="#hud-lives-indicator-heart"
                    />
                    <use
                        id="hud-lives-indicator-missile-4"
                        transform="translate(0.6,2.3)"
                        visibility="hidden"
                        xlink:href="#hud-lives-indicator-heart"
                    />
                    <use
                        id="hud-lives-indicator-missile-5"
                        transform="translate(0.6,2.6)"
                        visibility="hidden"
                        xlink:href="#hud-lives-indicator-missile"
                    />

                    <g id="hud-lives-indicator-infinite" visibility="hidden" transform="translate(0.5,1.5)">
                        <use
                            transform="translate(0.3,0.15), scale(1.4,1.4)"
                            xlink:href="#hud-lives-indicator-missile"
                        />
                        <path
                            stroke="white"
                            stroke-width="0.02"
                            stroke-opacity="0.2"
                            d="m  0.0, 0.04
                    C  0.5, 0.5  0.5,-0.5  0.0,-0.04
                    C -0.5,-0.5 -0.5, 0.5  0.0, 0.04
                    M  0.035, 0.0
                    C  0.43,-0.4  0.43, 0.4  0.035, 0.0
                    M  -0.035, 0.0
                    C  -0.43, 0.4 -0.43,-0.4 -0.035, 0.0"
                        />
                    </g>

                    <g id="hud-lives-indicator-none" visibility="visible" transform="translate(0.5,1.5)">
                        <use transform="translate(0.2,0.1), scale(1.4,1.4)" xlink:href="#hud-lives-indicator-heart" />
                        <path
                            transform="scale(0.8,0.8)"
                            stroke="white"
                            stroke-width="0.02"
                            stroke-opacity="0.2"
                            d="M  0.0, 0.4
                    A  0.4, 0.4  0 0,0  0.4, 0.0
                    A  0.4, 0.4  0 0,0  0.0,-0.4
                    A  0.4, 0.4  0 0,0 -0.4, 0.0
                    A  0.4, 0.4  0 0,0  0.0, 0.4
                    z
                    M  0.26,-0.20
                    A  0.328,0.328, 0 0,1 -0.20,0.26
                    z
                    M  -0.26,0.20
                    A  0.328,0.328, 0 0,1 0.20,-0.26
                    z"
                        />
                    </g>
                </g>
            </g>

            <!-- Level Indicator ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <text
                id="hud-level-indicator"
                transform="translate(0.035, 0.035), scale(0.0025,0.0025)"
                visibility="hidden"
            />
        </svg>

        <W2WLogoComponent />

        <svg preserveAspectRatio="xMaxYMid meet" viewBox="0 0 0.06 1">
            <!-- Progress Indicator ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <g transform="translate(0,0.965), scale(0.95,-0.95)" visibility="hidden">
                <path
                    stroke="#333333"
                    stroke-width="0.0005"
                    fill="white"
                    opacity="0.8"
                    d="M  0.03   0.0
                l -0.04   0.0
                  -0.005  0.005
                   0.0    0.26
                   0.02   0.02
                   0.0    0.72
                   0.025  0
                z"
                />

                <text opacity="0.8" transform="translate(0.024,0.01), rotate(90), scale(0.0026,-0.0026)">PROGRESS</text>

                <g id="hud-progress-indicator-best-progress" transform="translate(0,0.2)">
                    <rect x="-0.01" width="0.04" height="0.008" fill="#777777" />
                    <text fill="#777777" transform="translate(-0.04,-0.002), scale(0.001,-0.001)">PB</text>
                </g>

                <g id="hud-progress-indicator-progress" transform="translate(0,0.2)">
                    <rect x="-0.01" width="0.04" height="0.008" fill="#333333" />
                </g>

                <path
                    class="hud-foreground"
                    stroke-width="0.006"
                    d="m 0, 1.005
                L 0.03, 1.005
                  0.03, 0
                  0, 0"
                />
            </g>
        </svg>
    </g>
</template>

<script>
import W2WLogoComponent from '@/components/W2WLogoComponent.vue';

export default {
    name: 'HudComponent',

    components: {
        W2WLogoComponent
    }
};
</script>
