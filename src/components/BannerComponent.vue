<template>
    <svg
        id="banner"
        width="130%"
        height="100%"
        preserveAspectRatio="xMaxYMid meet"
        viewBox="0 0 0.01 1"
        overflow="visible"
        visibility="hidden"
    >
        <rect
            id="banner-background"
            x="-0.1"
            y="0.45"
            width="6"
            height="0.2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="0.005"
        />

        <g transform="translate(-0.05,0.54) scale(0.004,0.004)"><text id="banner-title"></text></g>
        <g transform="translate(0,0.6) scale(0.0025,0.0025)"><text id="banner-text"></text></g>
    </svg>
</template>

<script>
export default {
    name: 'BannerComponent'
};
</script>
