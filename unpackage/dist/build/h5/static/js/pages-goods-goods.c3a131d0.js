(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"4dd9":function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-list[data-v-63548952]{background-color:#eee}.isOver[data-v-63548952]{width:100%;height:50px;line-height:50px;text-align:center;font-size:%?28?%}',""]),t.exports=n},"72c9":function(t,n,o){"use strict";o.r(n);var e=o("c47a"),s=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=s.a},"78b7":function(t,n,o){var e=o("4dd9");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=o("4f06").default;s("af21a54a",e,!0,{sourceMap:!1,shadowMode:!1})},8027:function(t,n,o){"use strict";var e={goodsList:o("53b3").default},s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"goods-list"},[o("goods-list",{attrs:{goodsList:t.goodsList},on:{goGoodsDetail:function(n){arguments[0]=n=t.$handleEvent(n),t.goGoodsDetail.apply(void 0,arguments)}}}),t.flag?o("v-uni-view",{staticClass:"isOver"},[t._v("-----已经触底了------")]):t._e()],1)},a=[];o.d(n,"b",(function(){return s})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}))},c47a:function(t,n,o){"use strict";var e=o("ee27");o("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("96cf");var s=e(o("c964")),a=e(o("53b3")),r={components:{goodsList:a.default},data:function(){return{page:1,count:8,goodsList:[],flag:!1,totalPage:1}},onLoad:function(){this.getGoodsList()},onReachBottom:function(){this.page!=this.totalPage?(console.log(123123),this.page++,this.getGoodsList()):this.flag=!0},onPullDownRefresh:function(){var t=this;this.page=1,this.goodsList=[],this.flag=!1,setTimeout((function(){t.getGoodsList((function(){uni.stopPullDownRefresh()}))}),1e3)},methods:{getGoodsList:function(t){var n=this;return(0,s.default)(regeneratorRuntime.mark((function o(){var e;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,n.$myRuquest({url:"api/goods_list?type=1&page="+n.page+"&count="+n.count}).then((function(t){return t.data.data}));case 2:e=o.sent,n.totalPage=Math.ceil(e.total/n.count),n.goodsList=n.goodsList.concat(e.goods),t&&t();case 6:case"end":return o.stop()}}),o)})))()},goGoodsDetail:function(t){console.log(t),uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};n.default=r},e587:function(t,n,o){"use strict";o.r(n);var e=o("8027"),s=o("72c9");for(var a in s)"default"!==a&&function(t){o.d(n,t,(function(){return s[t]}))}(a);o("fc12");var r,i=o("f0c5"),u=Object(i["a"])(s["default"],e["b"],e["c"],!1,null,"63548952",null,!1,e["a"],r);n["default"]=u.exports},fc12:function(t,n,o){"use strict";var e=o("78b7"),s=o.n(e);s.a}}]);