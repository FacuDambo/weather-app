import * as React from "react"
import Svg, { Defs, G, Path, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const Clowdy = (props) => (
    <Svg
    width={250}
    height={250.318}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-43.962 -38.877) scale(5.29661)">
        <Path
        d="M38.62 23.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
        fill="#91c0f8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={0.72}
        className="am-weather-cloud-1"
        />
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="am-weather-cloud-2"
        />
    </G>
    </Svg>
)

export const ClowdyDay1 = (props) => (
    <Svg
    width={250}
    height={219.031}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(.898 -26.032) scale(4.48833)">
        <G transform="translate(20 26)">
        <G className="am-weather-sun">
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#c6deff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="am-weather-cloud-2"
        />
    </G>
    </Svg>
)

export const ClowdyNight1 = (props) => (
    <Svg
        width={250}
        height={211.587}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Defs></Defs>
        <G filter="url(#a)" transform="translate(-37.686 -36.324) scale(4.5405)">
        <Path
            fill="orange"
            d="m39.2 17.2-.56.96-.48-.96-.96-.56.96-.48.48-.96.56.96.96.48z"
            className="am-weather-moon-star-1"
        />
        <Path
            fill="orange"
            d="m55.2 25.2-.56.96-.48-.96-.96-.56.96-.48.48-.96.56.96.96.48z"
            className="am-weather-moon-star-2"
        />
        <Path
            d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
            fill="orange"
            stroke="orange"
            strokeLinejoin="round"
            strokeWidth={1.6}
            className="am-weather-moon"
        />
        <Path
            d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
            fill="#c6deff"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.2}
            className="am-weather-cloud-2"
        />
        </G>
    </Svg>
    )

export const Day = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
        <Defs></Defs>
        <G filter="url(#a)" transform="matrix(6.18812 0 0 6.18812 -73.02 -73.02)">
        <G transform="translate(32 32)">
            <G className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
            <Path
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth={2}
                d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
            </G>
            <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        </G>
    </Svg>
)

export const Night = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
        <Defs></Defs>
        <G filter="url(#a)" transform="translate(-93.832 -93.832) scale(6.56168)">
        <Path
            fill="orange"
            d="m21.5 23.3 1.2-.6.6-1.2.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2z"
            className="am-weather-moon-star-1"
        />
        <Path
            fill="orange"
            d="m41.5 33.3 1.2-.6.6-1.2.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2z"
            className="am-weather-moon-star-2"
        />
        <Path
            d="M34.5 33.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
            fill="orange"
            stroke="orange"
            strokeLinejoin="round"
            strokeWidth={2}
            className="am-weather-moon"
        />
        </G>
    </Svg>
)

export const Rainy1 = (props) => (
    <Svg
        width={250}
        height={225.535}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Defs></Defs>
        <G filter="url(#a)" transform="translate(0 -8.801)">
        <G transform="matrix(4.85195 0 0 4.85195 97.461 100.614)">
            <G className="am-weather-sun">
            <Path
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth={2}
                d="m-5.18 7.839-2.047 2.193M-8.034 1.57l-2.998.102M-5.619-4.882l-2.193-2.047M.65-7.736l-.103-2.998M7.102-5.32l2.047-2.193M9.955.949l2.999-.103M7.54 7.4l2.193 2.047"
            />
            </G>
            <Circle
            cx={0.917}
            cy={1.291}
            fill="orange"
            r={5}
            stroke="orange"
            strokeWidth={2}
            transform="rotate(-1.974)"
            />
        </G>
        <Path
            d="M202.494 137.368c0-15.81-12.716-28.182-28.182-28.182-3.437 0-6.53.687-9.623 1.718-1.031-11.685-10.654-21.308-22.683-21.308-12.716 0-23.026 10.31-23.026 23.027 0 2.75.687 5.499 1.374 7.904-1.03-.343-2.405-.343-3.436-.343-12.717 0-23.027 10.31-23.027 23.026 0 12.373 9.967 22.683 22.34 23.027h59.112c15.122-1.719 27.15-13.747 27.15-28.87z"
            fill="#57a0ee"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={5.1552}
        />
        <G
            fill="none"
            stroke="#91c0f8"
            strokeDasharray="4, 7"
            strokeLinecap="round"
            strokeWidth={2}
        >
            <Path
            className="am-weather-rain-1"
            d="m131.22 181.25-5.616 31.854"
            strokeWidth={8.08658}
            />
            <Path
            className="am-weather-rain-2"
            d="m156.516 177.498-5.617 31.855"
            strokeWidth={8.08658}
            />
        </G>
        </G>
    </Svg>
)

export const Rainy2 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(.898 -20.792) scale(4.48833)">
        <G transform="translate(20 26)">
        <G className="am-weather-sun">
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <Path
        className="am-weather-rain-1"
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="4, 7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m30.918 44.943-1.39 7.878"
        />
    </G>
    </Svg>
)

export const Rainy3 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(.898 -19.918) scale(4.48833)">
        <G transform="translate(20 26)">
        <G className="am-weather-sun">
            <Path
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3"
            />
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="m-6.364 6.364-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="4, 7"
        strokeLinecap="round"
        strokeWidth={2}
        >
        <Path className="am-weather-rain-1" d="m27.918 45.943-1.39 7.878" />
        <Path className="am-weather-rain-2" d="m34.174 45.015-1.39 7.879" />
        </G>
    </G>
    </Svg>
)

export const Rainy4 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-43.962 -59.856) scale(5.29661)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <Path
        className="am-weather-rain-1"
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="4, 7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m30.918 44.943-1.39 7.878"
        />
    </G>
    </Svg>
)

export const Rainy5 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-43.962 -61.09) scale(5.29661)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="4, 7"
        strokeLinecap="round"
        strokeWidth={2}
        >
        <Path className="am-weather-rain-1" d="m27.918 45.943-1.39 7.878" />
        <Path className="am-weather-rain-2" d="m34.174 45.015-1.39 7.879" />
        </G>
    </G>
    </Svg>
)

export const Rainy6 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="matrix(5.10034 0 0 5.10034 -37.392 -65.947)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="4, 4"
        strokeLinecap="round"
        strokeWidth={2}
        >
        <Path className="am-weather-rain-1" d="m26.887 46.29-1.39 7.879" />
        <Path className="am-weather-rain-2" d="m31.174 45.015-1.39 7.879" />
        <Path className="am-weather-rain-1" d="m34.94 46.695-1.39 7.878" />
        </G>
    </G>
    </Svg>
)

export const Rainy7 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-28.048 -57.26) scale(4.85249)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#91c0f8"
        strokeDasharray="0.1, 7"
        strokeLinecap="round"
        strokeWidth={3}
        >
        <Path className="am-weather-rain-1" d="m25.902 46.117-1.389 7.878" />
        <Path className="am-weather-rain-2" d="m31.174 45.015-1.39 7.879" />
        <Path className="am-weather-rain-1" d="m35.924 46.868-1.39 7.879" />
        </G>
    </G>
    </Svg>
)

export const Snowy1 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="matrix(4.44978 0 0 4.44978 12.46 -14.24)">
        <G transform="matrix(1.2 0 0 1.2 19.81 27.197)">
        <G className="am-weather-sun">
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="m-6.364 6.364-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M44.662 35.384c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27a5.695 5.695 0 0 0-5.695 5.695c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 0 0-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.275}
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M26.117 43.794v5" />
        <Path d="m27.884 44.527-3.535 3.535M28.617 46.294h-5M27.884 48.062l-3.535-3.535" />
        </G>
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-2"
        >
        <Path strokeWidth={1.2} d="M35.117 43.794v5" />
        <Path d="m36.884 44.527-3.535 3.535M37.617 46.294h-5M36.884 48.062l-3.535-3.535" />
        </G>
    </G>
    </Svg>
)

export const Snowy2 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-.85 -19.045) scale(4.48833)">
        <G transform="translate(20 26)">
        <G className="am-weather-sun">
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="am-weather-cloud-2"
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M32 44.5v5" />
        <Path d="m33.768 45.232-3.536 3.536M34.5 47h-5M33.768 48.768l-3.536-3.536" />
        </G>
    </G>
    </Svg>
)

export const Snowy3 = (props) => (
    <Svg
    width={250}
    height={249.102}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(.024 -19.045) scale(4.48833)">
        <G transform="translate(20 26)">
        <G className="am-weather-sun">
            <Path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
        </G>
        <Circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </G>
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M27 44.5v5" />
        <Path d="m28.768 45.232-3.536 3.536M29.5 47h-5M28.768 48.768l-3.536-3.536" />
        </G>
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-2"
        >
        <Path strokeWidth={1.2} d="M36 44.5v5" />
        <Path d="m37.768 45.232-3.536 3.536M38.5 47h-5M37.768 48.768l-3.536-3.536" />
        </G>
    </G>
    </Svg>
)

export const Snowy4 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="matrix(5.09306 0 0 5.09306 -32.665 -54.2)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M31 44.5v5" />
        <Path d="m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536" />
        </G>
    </G>
    </Svg>
)

export const Snowy5 = (props) => (
    <Svg
    width={250}
    height={257.415}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Defs></Defs>
    <G filter="url(#a)" transform="matrix(5.02183 0 0 5.02183 -30.564 -50.19)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="am-weather-cloud-2"
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M27 44.5v5" />
        <Path d="m28.768 45.232-3.536 3.536M29.5 47h-5M28.768 48.768l-3.536-3.536" />
        </G>
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-2"
        >
        <Path strokeWidth={1.2} d="M36 44.5v5" />
        <Path d="m37.768 45.232-3.536 3.536M38.5 47h-5M37.768 48.768l-3.536-3.536" />
        </G>
    </G>
    </Svg>
)

export const Snowy6 = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="translate(-41.778 -62.026) scale(5.29661)">
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="am-weather-cloud-2"
        />
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-1"
        >
        <Path strokeWidth={1.2} d="M23 44.5v5" />
        <Path d="m24.768 45.232-3.536 3.536M25.5 47h-5M24.768 48.768l-3.536-3.536" />
        </G>
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-2"
        >
        <Path strokeWidth={1.2} d="M31 44.5v5" />
        <Path d="m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536" />
        </G>
        <G
        fill="none"
        stroke="#57a0ee"
        strokeLinecap="round"
        className="am-weather-snow-3"
        >
        <Path strokeWidth={1.2} d="M40 44.5v5" />
        <Path d="m41.768 45.232-3.536 3.536M42.5 47h-5M41.768 48.768l-3.536-3.536" />
        </G>
    </G>
    </Svg>
)

export const Thunder = (props) => (
    <Svg width={250} height={250} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs></Defs>
    <G filter="url(#a)" transform="matrix(4.58417 0 0 4.58417 -14.903 -42.816)">
        <Path
        d="M38.62 25.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
        fill="#91c0f8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={0.72}
        className="am-weather-cloud-1"
        />
        <Path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57a0ee"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        />
        <Path
        className="am-weather-stroke"
        fill="orange"
        stroke="#fff"
        d="M35.36 43.16 24.8 55.52l4.08-9.24h-4.56l3.84-11.76h7.44l-4.92 8.64z"
        strokeWidth={1.2}
        />
    </G>
    </Svg>
)