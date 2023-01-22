(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return s(1930);
                },
            ]);
        },
        1930: function (e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    default: function () {
                        return S;
                    },
                });
            var r = s(5893),
                a = s(9008),
                l = s.n(a);
            let i = () => {
                window.onscroll = () => {
                    let e = document.getElementById("navbar"),
                        t = document.getElementById("navbar-backdrop");
                    if (e) {
                        let s = e.offsetTop;
                        window.pageYOffset > s
                            ? (e.classList.remove("navbar-absolute"), e.classList.add("navbar-fixed"), (null == t ? void 0 : t.classList.contains("backdrop-is-active")) && t.classList.remove("hidden"))
                            : (e.classList.remove("navbar-fixed"), e.classList.add("navbar-absolute"), (null == t ? void 0 : t.classList.contains("backdrop-is-active")) && t.classList.add("hidden"));
                    }
                };
                let e = () => {
                    let e = document.getElementById("hamburger"),
                        t = document.getElementById("navbar-menu");
                    null == e || e.classList.toggle("hamburger-active"), null == t || t.classList.toggle("navbar-mobile-menu-active");
                };
                return (0, r.jsx)("div", {
                    className: "w-full",
                    children: (0, r.jsx)("div", {
                        id: "navbar",
                        className: "w-full navbar-absolute py-4 top-0 left-0 z-50 backdrop-blur-sm",
                        children: (0, r.jsx)("div", {
                            className: "w-11/12 sm:w-5/6 mx-auto",
                            children: (0, r.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    (0, r.jsx)("div", {
                                        className: "order-2 sm:order-1",
                                        children: (0, r.jsx)("div", {
                                            className: "w-20 sm:w-28 relative z-50",
                                            children: (0, r.jsx)("a", { href: "#", className: "text-white text-4xl font-black tracking-normal select-none", children: "PDW" }),
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "order-1 sm:order-2 sm:w-full",
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: "hidden sm:block",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex justify-end items-center text-sm font-semibold",
                                                    children: [
                                                        (0, r.jsx)("a", { href: "#about-me", className: "mx-4 cursor-pointer text-custom-black-300 hover:text-white", children: "About Me" }),
                                                        (0, r.jsx)("a", { href: "#skills", className: "mx-4 cursor-pointer text-custom-black-300 hover:text-white", children: "Skills" }),
                                                        (0, r.jsx)("a", { href: "#tools", className: "mx-4 cursor-pointer text-custom-black-300 hover:text-white", children: "Tools" }),
                                                        (0, r.jsx)("a", { href: "#my-journey", className: "mx-4 cursor-pointer text-custom-black-300 hover:text-white", children: "My Journey" }),
                                                        (0, r.jsx)("a", { href: "#projects", className: "mx-4 cursor-pointer text-custom-black-300 hover:text-white", children: "Projects" }),
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: "sm:hidden",
                                                children: [
                                                    (0, r.jsxs)("button", {
                                                        id: "hamburger",
                                                        name: "hamburger",
                                                        "aria-label": "hamburger",
                                                        className: "block relative z-50",
                                                        type: "button",
                                                        onClick: e,
                                                        children: [
                                                            (0, r.jsx)("div", { className: "w-9 h-1 rounded-full bg-custom-black-300 origin-top-left transition duration-300 ease-in-out" }),
                                                            (0, r.jsx)("div", { className: "w-9 h-1 rounded-full my-2 bg-custom-black-300 transition duration-300 ease-in-out" }),
                                                            (0, r.jsx)("div", { className: "w-9 h-1 rounded-full bg-custom-black-300 origin-bottom-left transition duration-300 ease-in-out" }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        id: "navbar-menu",
                                                        className: "fixed py-4 px-4 bg-custom-black-900 border-b border-white border-opacity-10 -top-[350px] shadow-lg mt-2 w-full left-0 transition duration-300 ease-out",
                                                        children: (0, r.jsxs)("ul", {
                                                            className: "pt-20 text-custom-black-300 text-center text-base font-bold",
                                                            children: [
                                                                (0, r.jsx)("li", { className: "py-2", children: (0, r.jsx)("a", { href: "#about-me", onClick: e, children: "About Me" }) }),
                                                                (0, r.jsx)("li", { className: "py-2", children: (0, r.jsx)("a", { href: "#skills", onClick: e, children: "Skills" }) }),
                                                                (0, r.jsx)("li", { className: "py-2", children: (0, r.jsx)("a", { href: "#tools", onClick: e, children: "Tools" }) }),
                                                                (0, r.jsx)("li", { className: "py-2", children: (0, r.jsx)("a", { href: "#my-journey", onClick: e, children: "My Journey" }) }),
                                                                (0, r.jsx)("li", { className: "py-2", children: (0, r.jsx)("a", { href: "#projects", onClick: e, children: "Projects" }) }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            };
            var o = s(8193);
            let n = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            className: "w-full py-6",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto w-full max-w-2xl min-h-[200px] rounded-xl border border-white border-opacity-10 relative",
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "w-full px-4 py-2 rounded-t-xl bg-custom-black-600 flex justify-between items-center",
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: "flex justify-start items-center",
                                                children: [
                                                    (0, r.jsx)("div", { className: "w-4 h-4 bg-red-500 rounded-full" }),
                                                    (0, r.jsx)("div", { className: "w-4 h-4 bg-yellow-400 rounded-full mx-2" }),
                                                    (0, r.jsx)("div", { className: "w-4 h-4 bg-green-600 rounded-full" }),
                                                ],
                                            }),
                                            (0, r.jsx)("p", { className: "text-sm text-white", children: "life.js" }),
                                            (0, r.jsx)("div", { className: "w-12" }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: "w-full h-[230px] py-4 px-4 overflow-y-scroll scrollbar-hide",
                                        children: (0, r.jsxs)("p", {
                                            className: " text-left text-sm font-semibold",
                                            children: [
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "( " }),
                                                (0, r.jsx)("code", { className: "text-yellow-400", children: "function" }),
                                                (0, r.jsx)("code", { className: "text-sky-300", children: " repeat" }),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "() {" }),
                                                (0, r.jsx)("br", {}),
                                                "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
                                                (0, r.jsx)("code", { className: "text-sky-300", children: "eat" }),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "();" }),
                                                (0, r.jsx)("br", {}),
                                                "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
                                                (0, r.jsx)("code", { className: "text-sky-300", children: "sleep" }),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "();" }),
                                                (0, r.jsx)("br", {}),
                                                "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
                                                (0, r.jsx)("code", { className: "text-sky-300", children: "code" }),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "();" }),
                                                (0, r.jsx)("br", {}),
                                                "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
                                                (0, r.jsx)("code", { className: "text-sky-300", children: "repeat" }),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "();" }),
                                                (0, r.jsx)("br", {}),
                                                (0, r.jsx)("code", { className: "text-white text-opacity-70", children: "})();" }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)("div", { className: "w-full absolute bottom-0 px-4 h-6 rounded-b-xl bg-gray-600/40" }),
                                ],
                            }),
                        }),
                    }),
                c = (e) => {
                    let { gradientClass: t, sectionNumber: s, sectionName: a } = e;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            className: "w-full grid grid-cols-1 py-8",
                            children: [
                                (0, r.jsx)("div", { className: "line-with-gradient mx-auto", children: (0, r.jsx)("div", { className: "w-px h-28 " + t }) }),
                                (0, r.jsx)("div", { className: "flex justify-center items-center text-lg font-semibold text-custom-black-900 h-10 w-10 rounded-full mx-auto " + t, children: s }),
                                (0, r.jsx)("p", { className: "text-center text-3xl font-bold bg-clip-text text-transparent mt-6 tracking-tighter " + t, children: a }),
                            ],
                        }),
                    });
                },
                d = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("section", {
                            className: "pt-20 px-6 w-full",
                            id: "about-me",
                            children: [
                                (0, r.jsx)("p", { className: "text-center text-white text-xs uppercase tracking-widest font-bold", children: "know me more" }),
                                (0, r.jsx)(c, { gradientClass: "gradient-first", sectionNumber: "1", sectionName: "About Me" }),
                                (0, r.jsx)("p", { className: "text-center text-white text-6xl tracking-tighter font-bold", children: "Let Me Introduce My Self" }),
                                (0, r.jsxs)("p", {
                                    className: "text-center text-custom-black-300 text-lg py-6",
                                    children: [
                                        "I have a passion for programming, particularly in refining the design of other people's websites. I enjoy learning new skills independently, and am able to easily understand and adapt to other people's coding.",
                                        (0, r.jsx)("br", {}),
                                        "Using only ",
                                        (0, r.jsx)("span", { className: "text-blue-400", children: "Javascript" }),
                                        " and",
                                         (0, r.jsx)("span", { className: "text-blue-400", children: " php" }),
                                        ", ",  
                                        "I find it easy to understand and adapt to other programming languages.",
                                    ],
                                }),
                                (0, r.jsx)("p", { className: "text-center text-white text-2xl tracking-tighter font-bold", children: "Find Me On" }),
                                (0, r.jsxs)("p", { className: "text-center text-custom-black-300 text-lg", children: ["Feel free to ", (0, r.jsx)("span", { className: "text-blue-400", children: "connect" }), " with me"] }),
                                (0, r.jsxs)("div", {
                                    className: "w-full flex justify-center items-center pb-6 pt-2",
                                    children: [
                                        (0, r.jsx)("a", {
                                            className: "text-custom-black-300 hover:text-white",
                                            href: "https://github.com/pandudwiyan",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, r.jsx)(o.RrF, { className: "w-8 h-8" }),
                                        }),
                                        (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                        (0, r.jsx)("a", {
                                            className: "text-custom-black-300 hover:text-white",
                                            href: "https://www.linkedin.com/in/pandudwiyan",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, r.jsx)(o._iD, { className: "w-8 h-8" }),
                                        }),
                                        (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                        (0, r.jsx)("a", {
                                            className: "text-custom-black-300 hover:text-white",
                                            href: "https://www.instagram.com/pandudwiyan",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, r.jsx)(o.t0C, { className: "w-8 h-8" }),
                                        }),
                                        (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                        (0, r.jsx)("a", {
                                            className: "text-custom-black-300 hover:text-white",
                                            href: "https://twitter.com/pandudwiyan",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, r.jsx)(o.wod, { className: "w-8 h-8" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(n, {}),
                            ],
                        }),
                    });
            var x = s(7294);
            let m = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("svg", {
                            width: "602",
                            height: "602",
                            viewBox: "0 0 602 602",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, r.jsxs)("g", {
                                    opacity: "0.15",
                                    children: [
                                        (0, r.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d:
                                                "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
                                            stroke: "url(#paint0_radial)",
                                            id: "path_0",
                                        }),
                                        (0, r.jsx)("path", {
                                            d:
                                                "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
                                            stroke: "url(#paint1_radial)",
                                            id: "path_1",
                                        }),
                                        (0, r.jsx)("path", {
                                            d:
                                                "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
                                            stroke: "url(#paint2_radial)",
                                            id: "path_2",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "295.027",
                                    cy: "193.118",
                                    transform: "translate(-295.027 -193.118)",
                                    rx: "1.07306",
                                    ry: "1.07433",
                                    fill: "#945DD6",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M294.685 193.474L268.932 219.258",
                                    transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                                    stroke: "url(#paint3_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "295.027",
                                    cy: "193.118",
                                    transform: "translate(-295.027 -193.118)",
                                    rx: "1.07306",
                                    ry: "1.07433",
                                    fill: "#46737",
                                    children: (0, r.jsx)("animateMotion", { dur: "5s", begin: "1", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M294.685 193.474L268.932 219.258",
                                    transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                                    stroke: "url(#paint7_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "5s", begin: "1", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "476.525",
                                    cy: "363.313",
                                    rx: "1.07433",
                                    ry: "1.07306",
                                    transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                                    fill: "#945DD6",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M476.171 362.952L450.417 337.168",
                                    transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                                    stroke: "url(#paint4_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "382.164",
                                    cy: "155.029",
                                    rx: "1.07433",
                                    ry: "1.07306",
                                    transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
                                    fill: "#F46737",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", begin: "1", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M381.81 154.669L356.057 128.885",
                                    transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
                                    stroke: "url(#paint5_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", begin: "1", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "333.324",
                                    cy: "382.691",
                                    rx: "1.07306",
                                    ry: "1.07433",
                                    transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
                                    fill: "#F46737",
                                    children: (0, r.jsx)("animateMotion", { dur: "5s", begin: "0", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_1" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M333.667 382.335L359.42 356.551",
                                    transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
                                    stroke: "url(#paint6_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "5s", begin: "0", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_1" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "165.524",
                                    cy: "93.9596",
                                    rx: "1.07306",
                                    ry: "1.07433",
                                    transform: "translate(-165.524 -93.9596)",
                                    fill: "#F46737",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", begin: "3", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M165.182 94.3159L139.429 120.1",
                                    transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
                                    stroke: "url(#paint7_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "10s", begin: "3", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("ellipse", {
                                    cx: "476.525",
                                    cy: "363.313",
                                    rx: "1.07433",
                                    ry: "1.07306",
                                    transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                                    fill: "#13ADC7",
                                    children: (0, r.jsx)("animateMotion", { dur: "12s", begin: "4", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsx)("path", {
                                    d: "M476.171 362.952L450.417 337.168",
                                    transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                                    stroke: "url(#paint11_linear)",
                                    children: (0, r.jsx)("animateMotion", { dur: "12s", begin: "4", repeatCount: "indefinite", rotate: "auto", children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }) }),
                                }),
                                (0, r.jsxs)("defs", {
                                    children: [
                                        (0, r.jsxs)("radialGradient", {
                                            id: "paint0_radial",
                                            cx: "0",
                                            cy: "0",
                                            r: "1",
                                            gradientUnits: "userSpaceOnUse",
                                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                            children: [(0, r.jsx)("stop", { offset: "0.333333", stopColor: "#FBFBFB" }), (0, r.jsx)("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("radialGradient", {
                                            id: "paint1_radial",
                                            cx: "0",
                                            cy: "0",
                                            r: "1",
                                            gradientUnits: "userSpaceOnUse",
                                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                            children: [(0, r.jsx)("stop", { offset: "0.333333", stopColor: "#FBFBFB" }), (0, r.jsx)("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("radialGradient", {
                                            id: "paint2_radial",
                                            cx: "0",
                                            cy: "0",
                                            r: "1",
                                            gradientUnits: "userSpaceOnUse",
                                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                            children: [(0, r.jsx)("stop", { offset: "0.333333", stopColor: "#FBFBFB" }), (0, r.jsx)("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint3_linear",
                                            x1: "295.043",
                                            y1: "193.116",
                                            x2: "269.975",
                                            y2: "218.154",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#945DD6" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#945DD6", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint4_linear",
                                            x1: "476.529",
                                            y1: "363.31",
                                            x2: "451.461",
                                            y2: "338.272",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#945DD6" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#945DD6", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint5_linear",
                                            x1: "382.168",
                                            y1: "155.027",
                                            x2: "357.1",
                                            y2: "129.989",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#F46737" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#F46737", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint6_linear",
                                            x1: "333.309",
                                            y1: "382.693",
                                            x2: "358.376",
                                            y2: "357.655",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#F46737" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#F46737", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint7_linear",
                                            x1: "165.54",
                                            y1: "93.9578",
                                            x2: "140.472",
                                            y2: "118.996",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#F46737" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#F46737", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint8_linear",
                                            x1: "414.367",
                                            y1: "301.156",
                                            x2: "439.435",
                                            y2: "276.118",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#13ADC7" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#13ADC7", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint9_linear",
                                            x1: "515.943",
                                            y1: "288.238",
                                            x2: "541.339",
                                            y2: "291.454",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#13ADC7" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#13ADC7", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint10_linear",
                                            x1: "117.001",
                                            y1: "230.619",
                                            x2: "117.36",
                                            y2: "258.193",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#945DD6" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#945DD6", stopOpacity: "0" })],
                                        }),
                                        (0, r.jsxs)("linearGradient", {
                                            id: "paint11_linear",
                                            x1: "476.529",
                                            y1: "363.31",
                                            x2: "451.461",
                                            y2: "338.272",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, r.jsx)("stop", { stopColor: "#13ADC7" }), (0, r.jsx)("stop", { offset: "1", stopColor: "#13ADC7", stopOpacity: "0" })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                h = () => {
                    let e = (0, x.useRef)({ hide: { color: "#FFFFFF" }, show: { color: "transparent" } }),
                        t = (0, x.useRef)({ first: "0px 0px 69px 14px rgba(92,124,255, 0.3)", second: "0px 0px 69px 14px rgba(237,92,255, 0.3)", third: "0px 0px 69px 14px rgba(255,185,92, 0.3)" }),
                        s = (0, x.useRef)({ none: "opacity-0", full: "opacity-100" }),
                        [a, l] = (0, x.useState)(2),
                        [i, o] = (0, x.useState)(e.current.show),
                        [n, c] = (0, x.useState)(e.current.hide),
                        [d, h] = (0, x.useState)(e.current.hide),
                        [u, p] = (0, x.useState)(s.current.full),
                        [b, j] = (0, x.useState)(s.current.none),
                        [f, g] = (0, x.useState)(s.current.none),
                        [y, w] = (0, x.useState)({ boxShadow: t.current.first });
                    return (
                        (0, x.useEffect)(() => {
                            let r = setInterval(() => {
                                switch (a) {
                                    case 1:
                                        o(e.current.show), c(e.current.hide), h(e.current.hide), p(s.current.full), j(s.current.none), g(s.current.none), w({ boxShadow: t.current.first }), l(2);
                                        break;
                                    case 2:
                                        o(e.current.hide), c(e.current.show), h(e.current.hide), p(s.current.none), j(s.current.full), g(s.current.none), w({ boxShadow: t.current.second }), l(3);
                                        break;
                                    default:
                                        o(e.current.hide), c(e.current.hide), h(e.current.show), p(s.current.none), j(s.current.none), g(s.current.full), w({ boxShadow: t.current.third }), l(1);
                                }
                            }, 2500);
                            return () => clearInterval(r);
                        }, [a]),
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: "py-35 h-[1050px] sm:h-[950px] relative",
                                children: [
                                    (0, r.jsx)("div", { className: "absolute top-16 mx-auto inset-x-0 flex justify-center z-0", children: (0, r.jsx)(m, {}) }),
                                    (0, r.jsxs)("div", {
                                        className: "absolute z-10 mx-auto inset-x-0 mt-10",
                                        children: [
                                            (0, r.jsx)("p", {
                                                className: "text-center text-8xl sm:text-[50px] font-black tracking-tight cursor-default select-none",
                                                children: (0, r.jsx)("span", { className: "transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-first", style: i, children: "PANDU" }),
                                            }),
                                            (0, r.jsx)("p", {
                                                className: "text-center text-8xl sm:text-[50px] font-black tracking-tight cursor-default select-none my-2",
                                                children: (0, r.jsx)("span", { className: "transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-second", style: n, children: "DWIYAN" }),
                                            }),
                                            (0, r.jsx)("p", {
                                                className: "text-center text-8xl sm:text-[50px] font-black tracking-tight cursor-default select-none",
                                                children: (0, r.jsx)("span", { className: "transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-third", style: d, children: "WIJAKSANA" }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: "hidden sm:block",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex justify-center items-center mt-14 font-medium",
                                                    children: [
                                                        (0, r.jsx)("a", {
                                                            href: "#about-me",
                                                            className: "w-48 p-px mx-4 rounded-md bg-white group",
                                                            children: (0, r.jsx)("div", {
                                                                className:
                                                                    "rounded-md h-11 flex justify-center items-center bg-white text-custom-black-900 group-hover:bg-custom-black-900 group-hover:text-white transition-all ease-in-out duration-500",
                                                                children: "Get Started",
                                                            }),
                                                        }),
                                                        (0, r.jsxs)("a", {
                                                            className: "w-48 h-[46px] mx-4 rounded-md group relative transition-shadow duration-[1500ms] ease-in-out",
                                                            style: y,
                                                            href: "disinilinknya",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: [
                                                                (0, r.jsx)("div", { className: "w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 " + u }),
                                                                (0, r.jsx)("div", { className: "w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 " + b }),
                                                                (0, r.jsx)("div", { className: "w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 " + f }),
                                                                (0, r.jsx)("div", {
                                                                    className:
                                                                        "w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 " +
                                                                        u,
                                                                    children: "See My Resume",
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className:
                                                                        "w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 " +
                                                                        b,
                                                                    children: "See My Resume",
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className:
                                                                        "w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 " +
                                                                        f,
                                                                    children: "See My Resume",
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className:
                                                                        "w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center bg-custom-black-900 text-white opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-500",
                                                                    children: "See My Resume",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: "block sm:hidden",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex justify-center",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "mt-10 font-medium text-sm w-11/12",
                                                        children: [
                                                            (0, r.jsx)("a", {
                                                                href: "#about-me",
                                                                className: "block max-w-sm p-px my-5 rounded-md bg-white mx-auto",
                                                                children: (0, r.jsx)("div", { className: "rounded-md h-[36px] flex justify-center items-center bg-white text-custom-black-900", children: "Get Started" }),
                                                            }),
                                                            (0, r.jsxs)("a", {
                                                                className: "block max-w-sm h-[38px] mt-5 rounded-md relative mx-auto transition-shadow duration-[1500ms] ease-in-out",
                                                                style: y,
                                                                href: "https://drive.google.com/file/d/1FUgE7iNEDBq2QEtbMR7ykyZh4puLCRMn/view?usp=sharing",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: [
                                                                    (0, r.jsx)("div", {
                                                                        className:
                                                                            "w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 " +
                                                                            u,
                                                                        children: "See My Resume",
                                                                    }),
                                                                    (0, r.jsx)("div", {
                                                                        className:
                                                                            "w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 " +
                                                                            b,
                                                                        children: "See My Resume",
                                                                    }),
                                                                    (0, r.jsx)("div", {
                                                                        className:
                                                                            "w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 " +
                                                                            f,
                                                                        children: "See My Resume",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: "relative w-full h-20 mt-32 px-6 py-36",
                                                children: (0, r.jsxs)("p", {
                                                    className: "text-center text-custom-black-300 text-xl",
                                                    children: [
                                                    	"Hi there! 👋",
                                                        (0, r.jsx)("br", {}),(0, r.jsx)("br", {}),
                                                        "I'm ",
                                                        (0, r.jsx)("span", {
			                                                className: "tracking-tight cursor-default select-none",
			                                                children: (0, r.jsx)("span", { className: "transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-first", style: i, children: "Pandu Dwiyan Wijaksana" }),
			                                            }),
                                                        ", Bachelor of Computer, Informatics at Universitas Teknologi Yogyakarta. Currently, I am pursuing a career as a freelancer focusing on website development and video editing, utilizing my skills and experience to deliver high-quality results to my clients.  I'm currently",
                                                    	(0, r.jsx)("i", {children: " learning Laravel, Codeigniter, Vue.js, React.js"}),
                                                    	(0, r.jsx)("br", {}),(0, r.jsx)("br", {}),
                                                    	"Thankyou"
			                                         ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                },
                u = () => {
                    let [e, t] = (0, x.useState)({ maxWidth: "max-content" }),
                        s = () => {
                            let e = null == window ? void 0 : window.innerWidth;
                            t({ maxWidth: Math.round(e / 3) + "px" });
                        };
                    return (
                        (0, x.useEffect)(() => (window.addEventListener("resize", s), s(), () => window.removeEventListener("resize", s)), []),
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("section", {
                                className: "pt-20 px-6 w-full",
                                id: "my-journey",
                                children: [
                                    (0, r.jsx)("p", { className: "text-center text-white text-xs uppercase tracking-widest font-bold", children: "i have a story" }),
                                    (0, r.jsx)(c, { gradientClass: "gradient-second", sectionNumber: "2", sectionName: "My Journey" }),
                                    (0, r.jsx)("p", { className: "text-center text-white text-6xl tracking-tighter font-bold", children: "Let Me Tell You About My Journey" }),
                                    (0, r.jsxs)("p", {
                                        className: "text-center text-custom-black-300 text-lg py-6",
                                        children: [
                                            "I was born in Ciamis, Indonesia. ",
                                            (0, r.jsx)("br", {}),
                                            "After ",
                                            (0, r.jsx)("span", { className: "text-custom-pink-600", children: "graduated" }),
                                            " from high school, I decided to ",
                                            (0, r.jsx)("span", { className: "text-custom-pink-600", children: "study" }),
                                            " in Yogyakarta, Indonesia. ",
                                            (0, r.jsx)("br", {}),
                                            "I majored in ",
                                            (0, r.jsx)("span", { className: "text-custom-pink-600", children: "informatics engineering" }),
                                            ", from here my journey begins...",
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: "w-full flex justify-center items-center cursor-default",
                                        children: (0, r.jsxs)("div", {
                                            className: "w-full grid grid-cols-1 py-8",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: "line-with-gradient mx-auto relative",
                                                    children: (0, r.jsx)("div", {
                                                        className: "h-28 border-l border-custom-black-300",
                                                        children: (0, r.jsx)("div", {
                                                            className: "absolute top-24 left-6 overflow-x-scroll scrollbar-hide",
                                                            style: e,
                                                            children: (0, r.jsxs)("div", {
                                                                className: "w-max",
                                                                children: [
                                                                    (0, r.jsx)("p", { className: "text-white text-2xl tracking-tighter font-bold", children: "2014" }),
                                                                    (0, r.jsxs)("p", {
                                                                        className: "text-custom-black-300 text-lg",
                                                                        children: ["Start my journey to learn ", (0, r.jsx)("span", { className: "text-custom-pink-600", children: "Programming" })],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", { className: "h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300" }),
                                                (0, r.jsx)("div", {
                                                    className: "h-44 border-l border-dashed border-custom-black-300 mx-auto relative",
                                                    children: (0, r.jsx)("div", {
                                                        className: "absolute top-40 right-6 overflow-x-scroll scrollbar-hide scroll-reverse-direction",
                                                        style: e,
                                                        children: (0, r.jsxs)("div", {
                                                            className: "w-max",
                                                            children: [
                                                                (0, r.jsx)("p", { className: "text-white text-2xl tracking-tighter font-bold text-right", children: "2018" }),
                                                                (0, r.jsxs)("p", {
                                                                    className: "text-custom-black-300 text-lg text-right",
                                                                    children: ["I successfully created my",
                                                                     (0, r.jsx)("span", { className: "text-custom-pink-600", children: " first website" }),
                                                                     (0, r.jsx)("br", {}),
                                                                     " Hitz101 allows users to increase their followers",
                                                                     (0, r.jsx)("br", {}),
                                                                     "likes, and views all types of social media, "
                                                                     ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", { className: "h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300" }),
                                                (0, r.jsx)("div", {
                                                    className: "h-44 border-l border-dashed border-custom-black-300 mx-auto relative",
                                                    children: (0, r.jsx)("div", {
                                                        className: "absolute top-40 left-6 overflow-x-scroll scrollbar-hide",
                                                        style: e,
                                                        children: (0, r.jsxs)("div", {
                                                            className: "w-max",
                                                            children: [
                                                                (0, r.jsx)("p", { className: "text-white text-2xl tracking-tighter font-bold", children: "2020" }),
                                                                (0, r.jsxs)("p", {
                                                                    className: "text-custom-black-300 text-lg",
                                                                    children: ["Working at ", (0, r.jsx)("span", { className: "text-custom-pink-600", children: "PT VADS Indonesia" })],
                                                                }),
                                                                (0, r.jsxs)("p", {
                                                                    className: "text-custom-black-300 text-lg",
                                                                    children: [
                                                                        "as a",
                                                                        (0, r.jsx)("span", { className: "text-custom-pink-600", children: " Customer Service Representative" }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", { className: "h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300" }),
                                                (0, r.jsx)("div", {
                                                    className: "h-44 border-l border-dashed border-custom-black-300 mx-auto relative",
                                                    children: (0, r.jsx)("div", {
                                                        className: "absolute top-40 right-6 overflow-x-scroll scrollbar-hide scroll-reverse-direction",
                                                        style: e,
                                                        children: (0, r.jsxs)("div", {
                                                            className: "w-max",
                                                            children: [
                                                                (0, r.jsx)("p", { className: "text-white text-2xl tracking-tighter font-bold text-right", children: "2021" }),
                                                                (0, r.jsxs)("p", {
                                                                    className: "text-custom-black-300 text-lg text-right",
                                                                    children: [
                                                                        "Working at ",
                                                                        (0, r.jsx)("span", { className: "text-custom-pink-600", children: "Teleperformance" }),(0, r.jsx)("br", {}),
                                                                        " as a ",
                                                                        (0, r.jsx)("span", { className: "text-custom-pink-600", children: "Content Moderator" }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", { className: "h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300" }),
                                                (0, r.jsx)("div", {
                                                    className: "h-44 border-l border-dashed border-custom-black-300 mx-auto relative",
                                                    children: (0, r.jsx)("div", {
                                                        className: "absolute top-40 left-6 overflow-x-scroll scrollbar-hide",
                                                        style: e,
                                                        children: (0, r.jsxs)("div", {
                                                            className: "w-max",
                                                            children: [
                                                                (0, r.jsx)("p", { className: "text-white text-2xl tracking-tighter font-bold", children: "2023" }),
                                                                (0, r.jsxs)("p", {
                                                                    className: "text-custom-black-300 text-lg",
                                                                    children: ["Working as ", (0, r.jsx)("span", { className: "text-custom-pink-600", children: "Freelancer" })],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", { className: "h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300" }),
                                                (0, r.jsx)("div", { className: "line-project-gradient mx-auto", id: "projects", children: (0, r.jsx)("div", { className: "w-px h-64 gradient-third" }) }),
                                                (0, r.jsx)("div", { className: "flex justify-center items-center text-lg font-semibold text-custom-black-900 h-10 w-10 rounded-full mx-auto gradient-third", children: "3" }),
                                                (0, r.jsx)("p", { className: "text-center text-3xl font-bold bg-clip-text text-transparent mt-6 tracking-tighter gradient-third", children: "Projects" }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                };
            var p = s(5675),
                b = s.n(p);
            let j = (e) =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            className: "w-full bg-custom-black-900 rounded-lg border-2 border-custom-gray-600 px-6 pt-6 pb-48 relative",
                            children: [
                                (0, r.jsx)("div", { 
                                    className: "w-full h-80 rounded-lg overflow-hidden relative", 
                                    children: (0, r.jsx)("img", { 
                                        className: "w-full h-80 rounded-lg overflow-hidden relative",
                                        src: e.imageSource, 
                                        alt: e.imageAlt, 
                                        fill: !0, priority: !0,
                                        style: { objectFit: "cover" } }) }),
                                    (0, r.jsxs)("div", {
                                    className: "w-full pt-6",
                                    children: [(0, r.jsx)("p", { className: "text-white text-2xl font-bold", children: e.title }), (0, r.jsx)("p", { className: "text-justify text-custom-black-300 text-sm mt-1", children: e.description })],
                                }),
                                (0, r.jsxs)("div", {
                                    className: "absolute bottom-0 inset-x-0 px-6 pb-6",
                                    children: [
                                        (0, r.jsx)("p", {
                                            className: "text-center text-custom-black-300 text-base",
                                            children: e.stacks.map((e, t) => (0, r.jsxs)("span", { className: "text-blue-400", children: [0 === t ? "" : " - ", e] }, t)),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "w-full mt-8 grid grid-cols-1",
                                            children: [
                                                (0, r.jsx)("a", {
                                                    href: e.preview,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className:
                                                        "block w-full py-3 text-center text-sm font-medium text-white rounded-lg bg-custom-black-900 border border-white hover:bg-white hover:text-custom-black-900 transition-all ease-in-out duration-500",
                                                    children: "Preview",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                f = [
                    {
                        title: "PMB Rasiti Ragilia",
                        description: "This project is my client's order project, this website is a healthcare service for the community. I'm developing this project using MySQL database, PHP and Javascript.",
                        image: "./assets/images/pmb.png",
                        alt: "PMB Rasiti Ragilia",
                        stacks: ["MySQL", "php", "Javascript"],
                        preview: "https://rasitiragilia.com/",
                    },
                    {
                        title: "Kizstone Sport",
                        description: "This project is my client's order project, this website is an e-commerce website that specializes in Muslim sportswear. I'm developing this project using MySQL database, PHP and Javascript.",
                        image: "./assets/images/kizstonesport.png",
                        alt: "Kizstone Sport",
                        stacks: ["MySQL", "php", "Javascript"],
                        preview: "https://kizstonesport.com/",
                    },
                ],
                g = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("section", {
                            className: "pb-20 px-6 w-full",
                            children: [
                                (0, r.jsx)("p", { className: "text-center text-white text-6xl tracking-tighter font-bold", children: "Projects & Portfolios" }),
                                (0, r.jsxs)("p", {
                                    className: "text-center text-custom-black-300 text-lg py-6",
                                    children: [
                                        "Here are some ",
                                        (0, r.jsx)("span", { className: "text-orange-400", children: "Projects" }),
                                        " I have worked on and some ",
                                        (0, r.jsx)("span", { className: "text-orange-400", children: "Portfolios" }),
                                        ".",
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: "w-full grid grid-cols-1 lg:grid-cols-2 gap-4",
                                    children: f.map((e, t) => (0, r.jsx)(j, { imageSource: e.image, imageAlt: e.alt, title: e.title, description: e.description, github: e.github, preview: e.preview, stacks: e.stacks }, t)),
                                }),
                            ],
                        }),
                    });
            var y = s(9583),
                w = s(9352),
                v = s(5155),
                N = s(7735);
            let k = () =>
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("section", {
                        className: "pt-20 px-6 w-full",
                        id: "skills",
                        children: [
                            (0, r.jsx)("p", { className: "text-center text-white text-2xl tracking-tighter font-bold", children: "My Skills" }),
                            (0, r.jsxs)("p", { className: "text-center text-custom-black-300 text-lg mb-6", children: ["What I'm ", (0, r.jsx)("span", { className: "text-blue-400", children: "good" }), " at"] }),
                            (0, r.jsxs)("div", {
                                className: "w-full flex justify-center items-center py-3",
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                        children: [
                                            (0, r.jsx)(v.TS5, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                            (0, r.jsx)("div", {
                                                className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                children: "MySQL",
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                        children: [
                                            (0, r.jsx)(y.JTf, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                            (0, r.jsx)("div", {
                                                className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                children: "Laravel",
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                        children: [
                                            (0, r.jsx)(N.zbU, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                            (0, r.jsx)("div", {
                                                className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                children: "Codeigniter",
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                        children: [
                                            (0, r.jsx)(w.hX, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                            (0, r.jsx)("div", {
                                                className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                children: "Vue.js",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            var C = s(3990);
            let _ = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("section", {
                            className: "pt-20 px-6 w-full",
                            id: "tools",
                            children: [
                                (0, r.jsx)("p", { className: "text-center text-white text-2xl tracking-tighter font-bold", children: "Tools" }),
                                (0, r.jsxs)("p", { className: "text-center text-custom-black-300 text-lg mb-6", children: [(0, r.jsx)("span", { className: "text-blue-400", children: "Tools" }), " that I use"] }),
                                (0, r.jsxs)("div", {
                                    className: "w-full flex justify-center items-center py-3",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                            children: [
                                                (0, r.jsx)(N.RZF, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                                (0, r.jsx)("div", {
                                                    className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                    children: "VScode",
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center",
                                            children: [
                                                (0, r.jsx)(C.Y5z, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
                                                (0, r.jsx)("div", {
                                                    className: "absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block",
                                                    children: "Git",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                D = () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(i, {}), (0, r.jsx)(h, {}), (0, r.jsx)(d, {}), (0, r.jsx)(k, {}), (0, r.jsx)(_, {}), (0, r.jsx)(u, {}), (0, r.jsx)(g, {})] }),
                M = () =>
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("footer", {
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-0",
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "order-2 sm:order-1 flex justify-center my-2 sm:my-0 sm:justify-start items-center text-sm text-custom-black-300",
                                        children: [
                                            " Made With ❤️",
                                            " by ",
                                            (0, r.jsx)("a", { href: "https://bit.ly/m/ndupandu", target: "_blank", rel: "noopener noreferrer", className: "ml-1 underline hover:text-white", children: "pandudwiyan" }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "order-1 sm:order-2 flex justify-center my-2 sm:my-0 sm:justify-end items-center",
                                        children: [
                                            (0, r.jsx)("a", {
                                                className: "text-custom-black-300 hover:text-white",
                                                href: "https://github.com/pandudwiyan",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(o.RrF, { className: "w-6 h-6" }),
                                            }),
                                            (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                            (0, r.jsx)("a", {
                                                className: "text-custom-black-300 hover:text-white",
                                                href: "https://www.linkedin.com/in/pandudwiyan",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(o._iD, { className: "w-6 h-6" }),
                                            }),
                                            (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                            (0, r.jsx)("a", {
                                                className: "text-custom-black-300 hover:text-white",
                                                href: "https://www.instagram.com/pandudwiyan",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(o.t0C, { className: "w-6 h-6" }),
                                            }),
                                            (0, r.jsx)("div", { className: "border-l border-custom-black-300 h-4 mx-3" }),
                                            (0, r.jsx)("a", {
                                                className: "text-custom-black-300 hover:text-white",
                                                href: "https://twitter.com/pandudwiyan",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(o.wod, { className: "w-6 h-6" }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                L = () =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(l(), {
                                children: [
                                    (0, r.jsx)("title", { children: "Pandu Dwiyan Wijaksana" }),
                                    (0, r.jsx)("meta", { name: "description", content: "Dwiyan's Portofolio" }),
                                    (0, r.jsx)("link", { rel: "icon", href: "https://www.pngall.com/wp-content/uploads/2016/04/Github-PNG.png" }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: "w-full min-h-screen bg-custom-black-900", children: (0, r.jsx)("div", { className: "w-full sm:w-5/6 sm:mx-auto", children: (0, r.jsx)(D, {}) }) }),
                            (0, r.jsx)("div", { className: "w-full bg-custom-black-600 pb-10 pt-8 border-t border-gray-700", children: (0, r.jsx)("div", { className: "w-full sm:w-5/6 sm:mx-auto", children: (0, r.jsx)(M, {}) }) }),
                        ],
                    });
            var S = L;
        },
    },
    function (e) {
        e.O(0, [415, 937, 609, 158, 445, 617, 275, 774, 888, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
