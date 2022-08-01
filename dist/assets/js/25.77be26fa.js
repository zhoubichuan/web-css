(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{370:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"九-响应式页面开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九-响应式页面开发"}},[t._v("#")]),t._v(" 九.响应式页面开发")]),t._v(" "),a("p",[t._v("响应式页面开发的能力可以定义为：")]),t._v(" "),a("blockquote",[a("p",[t._v("利用一套代码实现页面的布局和排版以适配不同分辨率的设备。")])]),t._v(" "),a("p",[t._v("响应式页面开发要求我们解决两大问题：")]),t._v(" "),a("ul",[a("li",[t._v("为不同特性（如横屏还是竖屏等）的浏览器视窗使用不同的样式代码")]),t._v(" "),a("li",[t._v("让页面元素的尺寸能够依据浏览器视窗尺寸变化而平滑变化")])]),t._v(" "),a("h2",{attrs:{id:"_1-添加-viewport-meta-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加-viewport-meta-标签"}},[t._v("#")]),t._v(" 1.添加 viewport meta 标签")]),t._v(" "),a("p",[t._v("在页头 "),a("code",[t._v("head")]),t._v(" 标签内添加 viewport meta 标签是实现响应式页面的第一步。")]),t._v(" "),a("p",[t._v("viewport meta 标签源于 Apple 公司，用来定义 iOS Safari 浏览器展示网页内容的可视范围及缩放比率。它虽然没有成为 W3C 标准，但是被其他绝大多数的移动端浏览器所支持（目前已知 IE Mobile 10 不支持）。W3C 尝试将 viewport meta 标签的功能进行标准化并通过 CSS 的 @viewport 规则来实现同样的功能，但这个标准目前还在草案中，兼容性也没有 viewport meta 标签好。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-pagespeed-准则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-pagespeed-准则"}},[t._v("#")]),t._v(" 1.1 PageSpeed 准则")]),t._v(" "),a("p",[t._v("Google 网页性能分析工具 "),a("a",{attrs:{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PageSpeed Insights"),a("OutboundLink")],1),t._v(" 的其中一条准则就是：")]),t._v(" "),a("p",[t._v("网页应在 head 标签内添加 viewport meta 标签，以便优化在移动设备上的展示效果，其推荐的设置为：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<meta name="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width, initial-scale=1"')]),t._v(">\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-2-扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-扩展阅读"}},[t._v("#")]),t._v(" 1.2 扩展阅读")]),t._v(" "),a("ul",[a("li",[t._v("Mozilla"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Using the viewport meta tag to control layout on mobile mobiles》"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Google"),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Configure the viewport》"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Mozilla"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport",target:"_blank",rel:"noopener noreferrer"}},[t._v("《@viewport》"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_2-使用-media-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-media-queries"}},[t._v("#")]),t._v(" 2.使用 Media Queries")]),t._v(" "),a("p",[t._v("Media Queries 是为指定特性的浏览器视窗应用指定样式的手段，可以看成是 CSS 样式的过滤器或拦截器，通常情况下它可以通过 「@media 规则」结合「6 个查询参数」来拦截设备的浏览器特性（如显示类型、视窗高度、视窗宽度、横竖屏等），藉此可以为不同的特性应用不同的样式代码（相当于为不同的设备应用了不同的 CSS 样式）。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-个参数"}},[t._v("#")]),t._v(" 2.1 个参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名称")]),t._v(" "),a("th",[t._v("参数描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("max-width")]),t._v(" "),a("td",[t._v("当视窗宽度小于或等于指定值时，@media 规则下的样式将被应用")])]),t._v(" "),a("tr",[a("td",[t._v("min-width")]),t._v(" "),a("td",[t._v("当视窗宽度大于或等于指定值时，@media 规则下的样式将被应用")])]),t._v(" "),a("tr",[a("td",[t._v("min-height")]),t._v(" "),a("td",[t._v("当视窗高度大于或等于指定值时，@media 规则下的样式将被应用")])]),t._v(" "),a("tr",[a("td",[t._v("max-height")]),t._v(" "),a("td",[t._v("当视窗高度小于或等于指定值时，@media 规则下的样式将被应用")])]),t._v(" "),a("tr",[a("td",[t._v("orientation=portrait")]),t._v(" "),a("td",[t._v("当视窗高度大于或等于宽度时，@media 规则下的样式将被应用")])]),t._v(" "),a("tr",[a("td",[t._v("orientation=landscape")]),t._v(" "),a("td",[t._v("当视窗宽度大于高度时，@media 规则下的样式将被应用")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-种用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-种用法"}},[t._v("#")]),t._v(" 2.2 种用法")]),t._v(" "),a("p",[t._v("方法 1，使用 link 标签，根据指定特性引入特定的外部样式文件")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<link rel="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),t._v(" media="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(max-width: 640px)"')]),t._v(" href="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max-640px.css"')]),t._v(">\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("方法 2，直接在 style 标签或 样式文件内使用 @media 规则")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 640px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*当视窗宽度小于或等于 640px 时，这里的样式将生效*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-3-样式断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-样式断点"}},[t._v("#")]),t._v(" 2.3 样式断点")]),t._v(" "),a("p",[t._v("Media Queries 所使用的查询参数的临界值又可称为「样式断点」。 在响应式页面开发过程中，对于「样式断点」我们需要掌握 2 个重要的技巧：")]),t._v(" "),a("p",[t._v("依据目标设备的分辨率，制定一套合适的样式断点，并为不同的断点定制必要的 CSS 样式。 移动端优先的页面，可使用 min-width 查询参数从小到大来定义断点。 如果我们页面的响应式设计要涵盖从手机到高清大屏幕，什么样的「样式断点」比较合理呢？")]),t._v(" "),a("p",[t._v("我们可以从业界一些热门可靠的 CSS 框架中寻找参考答案，例如 "),a("a",{attrs:{href:"https://bulma.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bulma"),a("OutboundLink")],1),t._v("，其采用的「样式断点」有 5 个：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("断点名称")]),t._v(" "),a("th",[t._v("断点描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mobile")]),t._v(" "),a("td",[t._v("移动设备断点，视窗宽度 ≤ 768 px")])]),t._v(" "),a("tr",[a("td",[t._v("tablet")]),t._v(" "),a("td",[t._v("平板电脑设备断点，视窗宽度 ≥ 769 px")])]),t._v(" "),a("tr",[a("td",[t._v("desktop")]),t._v(" "),a("td",[t._v("桌面电脑断点，视窗宽度 ≥ 1024 px")])]),t._v(" "),a("tr",[a("td",[t._v("widescreen")]),t._v(" "),a("td",[t._v("宽屏电脑断点，视窗宽度 ≥ 1216 px")])]),t._v(" "),a("tr",[a("td",[t._v("fullhd")]),t._v(" "),a("td",[t._v("高清宽屏电脑断点，视窗宽度 ≥ 1408 px")])])])]),t._v(" "),a("p",[t._v("在实际工作中，「样式断点」的制定需要我们同视觉设计师一起沟通确认，因为视觉设计师可能需要根据不同的断点为页面设计不同的视觉表现。")]),t._v(" "),a("h3",{attrs:{id:"_2-4-一个小例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-一个小例子"}},[t._v("#")]),t._v(" 2.4 一个小例子")]),t._v(" "),a("p",[t._v("如果针对 tablet 及以上的设备定制样式，我们就可以这样写了：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 769px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tablet 及以上的设备，页面背景色设置为红色 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-5-课外作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-课外作业"}},[t._v("#")]),t._v(" 2.5 课外作业")]),t._v(" "),a("ol",[a("li",[t._v("使用桌面版的 Chrome 浏览器，打开 Google 的 "),a("a",{attrs:{href:"https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/media-queries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 Media Queries 例子"),a("OutboundLink")],1),t._v(" 直观感受下使用 Media Queries 的效果（请注意缩放浏览器窗口观察页面展示效果）")]),t._v(" "),a("li",[t._v("了解 "),a("a",{attrs:{href:"https://bulma.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bulma"),a("OutboundLink")],1),t._v(" 框架")])]),t._v(" "),a("h3",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),a("ul",[a("li",[t._v("Google "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Responsive Web Design Basic》"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_3-使用-viewport-单位及-rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-viewport-单位及-rem"}},[t._v("#")]),t._v(" 3.使用 Viewport 单位及 rem")]),t._v(" "),a("p",[t._v("Media Queries 只解决了「为不同特性的浏览器视窗使用不同的样式代码」的问题，而 Viewport 单位及 rem 的应用，则是为了解决第二个问题：让页面元素的尺寸能够依据浏览器视窗尺寸变化而平滑变化。")]),t._v(" "),a("p",[t._v("关于 Viewport 单位及 rem 单位的基本概念，可通过下面的扩展阅读进行回顾复习。")]),t._v(" "),a("p",[t._v("BTW：本文所提及的 Viewport，译为「视窗」，其含义与扩展阅读中相关文章中的「视口」一致。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-仅使用-vw-作为-css-长度单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-仅使用-vw-作为-css-长度单位"}},[t._v("#")]),t._v(" 3.1 仅使用 vw 作为 CSS 长度单位")]),t._v(" "),a("p",[t._v("在仅使用 vw 单位作为唯一 CSS 单位时，我们需遵守：")]),t._v(" "),a("ol",[a("li",[t._v("利用 Sass 函数将设计稿元素尺寸的像素单位转换为 vw 单位")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("// iPhone 6尺寸作为设计稿基准\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vw_base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 375"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$px / $vm_base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 100vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("无论是文本字号大小还是布局高宽、间距、留白等都使用 vw 作为 CSS 单位")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mod_nav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&_list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("15"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 内间距\n    &_item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 字体大小\n      &_logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 宽度\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 高度\n        img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("1 物理像素线（也就是普通屏幕下 1px ，高清屏幕下 0.5px 的情况）采用 transform 属性 scale 实现")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mod_grid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // 实现1物理像素的下边框线\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ddd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("only")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-min-device-pixel-ratio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50% 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("对于需要保持高宽比的图，应改用 padding-top 实现")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mod_banner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  // 使用padding-top 实现宽高比为 100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("750 的图片区域\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("percentage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100/750"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("由此，我们不需要增加其他任何额外的脚本代码就能够轻易实现一个常见布局的响应式页面，效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/8/16175d6ffdfe7c0e?w=1409&h=685&f=png&s=207733",alt:"vw和rem"}})]),t._v(" "),a("p",[t._v("体验地址："),a("a",{attrs:{href:"https://jdc.jd.com/demo/ting/vw_layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("视口单位布局 —— vw 单位"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("友情提醒：桌面版 Chrome 支持的字体大小默认不能小于 12PX，可通过 「chrome://settings/ 显示高级设置－网络内容－自定义字体－最小字号（滑到最小）」设置后再到模拟器里体验 DEMO。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-vw-搭配-rem-寻找最优解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-vw-搭配-rem-寻找最优解"}},[t._v("#")]),t._v(" 3.2 vw 搭配 rem，寻找最优解")]),t._v(" "),a("p",[t._v("方法 1 实现的响应式页面虽然看起来适配得很好，但是你会发现由于它是利用 Viewport 单位实现的布局，依赖于视窗大小而自动缩放，无论视窗过大还是过小，它也随着视窗过大或者过小，失去了最大最小宽度的限制，有时候不一定是我们所期待的展示效果。试想一下一个 750px 宽的设计稿在 1920px 的大屏显示器上的糟糕样子。")]),t._v(" "),a("p",[t._v("当然，你可以不在乎移动端页面在 PC 上的展现效果，但如果有低成本却有效的办法来修复这样的小瑕疵，是真切可以为部分用户提升体验的。")]),t._v(" "),a("p",[t._v("我们可以结合 rem 单位来实现页面的布局。rem 弹性布局的核心在于根据视窗大小变化动态改变根元素的字体大小，那么我们可以通过以下步骤来进行优化：")]),t._v(" "),a("ol",[a("li",[t._v("给根元素的字体大小设置随着视窗变化而变化的 vw 单位，这样就可以实现动态改变其大小")]),t._v(" "),a("li",[t._v("其他元素的文本字号大小、布局高宽、间距、留白都使用 rem 单位")]),t._v(" "),a("li",[t._v("限制根元素字体大小的最大最小值，配合 body 加上最大宽度和最小宽度，实现布局宽度的最大最小限制")])]),t._v(" "),a("p",[t._v("核心代码实现如下：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("// rem 单位换算：定为 75px 只是方便运算，750px-75px、640-64px、1080px-108px，如此类推\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vw_fontsize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 75"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // iPhone 6尺寸的根元素大小基准值\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$px / $vw_fontsize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 根元素大小使用 vw 单位\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vw_design")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 750"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$vw_fontsize / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$vw_design / 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 100vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    // 同时，通过Media Queries 限制根元素最大最小值\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 64px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 540px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 108px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小\nbody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 540px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("体验地址："),a("a",{attrs:{href:"https://jdc.jd.com/demo/ting/vw_rem_layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jdc.jd.com/demo/ting/vw_rem_layout.html"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-3-扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-扩展阅读"}},[t._v("#")]),t._v(" 3.3 扩展阅读")]),t._v(" "),a("ul",[a("li",[t._v("Mozilla"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/length",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Length》"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("凹凸实验室 "),a("a",{attrs:{href:"https://aotu.io/notes/2017/04/28/2017-4-28-CSS-viewport-units/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《利用视口单位实现适配布局》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);