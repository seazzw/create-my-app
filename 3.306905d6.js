(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8],{131:function(e,n,t){"use strict";t.r(n),function(e){var r=t(15),a=t.n(r),i=t(16),o=t.n(i),c=t(17),s=t.n(c),l=t(18),u=t.n(l),d=t(19),p=t.n(d),m=t(37),b=t.n(m),f=t(23),x=t.n(f),h=t(0),v=t.n(h),y=t(1),g=t.n(y),k=t(300),w=t(282),N=t.n(w),_=(t(283),t(284),t(285),function(n){function t(){var e,n;a()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),x()(b()(b()(n)),"state",{}),n}return p()(t,n),o()(t,[{key:"success",value:function(e,n,t){}},{key:"error",value:function(e){}},{key:"render",value:function(){for(var e=this.props,n=JSON.parse(e.sources),t=JSON.parse(e.tracks),r=[],a=[],i=0,o=n.length;i<o;i++){var c=n[i];r.push('<source src="'.concat(c.src,'" type="').concat(c.type,'">'))}for(var s=0,l=t.length;s<l;s++){var u=t[s];a.push('<track src="'.concat(u.src,'" kind="').concat(u.kind,'" srclang="').concat(u.lang,'"').concat(u.label?" label=".concat(u.label):"",">"))}var d="".concat(r.join("\n")).concat(a.join("\n")),p="video"===e.mediaType?'<video \n            id="'.concat(e.id,'" \n            width="').concat(e.width,'" \n            height="').concat(e.height,'"\n            ').concat(e.poster?"poster=".concat(e.poster):"","\n            ").concat(e.controls?"controls":"","\n            ").concat(e.preload?'preload="'.concat(e.preload,'"'):"",">\n            ").concat(d,"\n            </video>"):'<audio \n            id="'.concat(e.id,'" \n            width="').concat(e.width,'" \n            controls>\n            ').concat(d,"\n            </audio>");return v.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}})}},{key:"componentDidMount",value:function(){var n=this,t=e.MediaElementPlayer;if(t){var r=Object.assign({},JSON.parse(this.props.options),{pluginPath:"./static/media/",success:function(e,t,r){return n.success(e,t,r)},error:function(e,t){return n.error(e,t)}});window.flvjs=k.a,window.Hls=N.a,this.setState({player:new t(this.props.id,r)})}}},{key:"componentWillUnmount",value:function(){this.state.player&&(this.state.player.remove(),this.setState({player:null}))}}]),t}(h.Component));x()(_,"propTypes",{options:g.a.string,id:g.a.string}),n.default=_}.call(this,t(80))},266:function(e,n,t){"use strict";t(39),t(267)},267:function(e,n,t){var r=t(268);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(13)(r,a);r.locals&&(e.exports=r.locals)},268:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n/* put your code here */\n.next-breadcrumb {\n  display: block;\n  height: 16px;\n  line-height: 16px; }\n  .next-breadcrumb .next-breadcrumb-item {\n    display: inline-block; }\n    .next-breadcrumb .next-breadcrumb-item .next-breadcrumb-text {\n      display: inline-block;\n      text-decoration: none;\n      text-align: center;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      transition: all .2s ease-out; }\n      .next-breadcrumb .next-breadcrumb-item .next-breadcrumb-text > b {\n        font-weight: normal; }\n    .next-breadcrumb .next-breadcrumb-item .next-breadcrumb-separator {\n      display: inline-block;\n      vertical-align: top; }\n  .next-breadcrumb .next-breadcrumb-text {\n    height: 16px;\n    min-width: 16px;\n    font-size: 12px;\n    line-height: 16px; }\n  .next-breadcrumb .next-breadcrumb-separator {\n    height: 16px;\n    margin: 0 8px;\n    font-size: 8px;\n    line-height: 16px; }\n    .next-breadcrumb .next-breadcrumb-separator .next-icon:before {\n      width: 8px;\n      font-size: 8px;\n      line-height: inherit; }\n    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n      .next-breadcrumb .next-breadcrumb-separator .next-icon {\n        transform: scale(0.5);\n        margin-left: -4px;\n        margin-right: -4px; }\n        .next-breadcrumb .next-breadcrumb-separator .next-icon:before {\n          width: 16px;\n          font-size: 16px; } }\n  .next-breadcrumb .next-breadcrumb-text-ellipsis {\n    font-size: 12px; }\n  .next-breadcrumb .next-breadcrumb-text {\n    color: #666666; }\n    .next-breadcrumb .next-breadcrumb-text > b {\n      color: #5584FF; }\n    .next-breadcrumb .next-breadcrumb-text > a {\n      color: #666666;\n      text-decoration: none;\n      text-align: center; }\n  .next-breadcrumb .next-breadcrumb-text.activated {\n    color: #333333;\n    font-weight: normal; }\n    .next-breadcrumb .next-breadcrumb-text.activated > a {\n      color: #333333;\n      font-weight: normal; }\n  .next-breadcrumb .next-breadcrumb-text-ellipsis {\n    color: #666666;\n    cursor: default; }\n  .next-breadcrumb .next-breadcrumb-separator {\n    color: #A0A2AD; }\n  .next-breadcrumb .next-breadcrumb-text:not(.next-breadcrumb-text-ellipsis):hover > a {\n    color: #5584FF; }\n  .next-breadcrumb a.next-breadcrumb-text.activated:hover > a {\n    color: #5584FF; }\n  .next-breadcrumb a.next-breadcrumb-text:not(.next-breadcrumb-text-ellipsis):hover {\n    color: #5584FF; }\n    .next-breadcrumb a.next-breadcrumb-text:not(.next-breadcrumb-text-ellipsis):hover > b {\n      color: #5584FF; }\n  .next-breadcrumb a.next-breadcrumb-text.activated:hover {\n    color: #5584FF;\n    font-weight: normal; }\n',""])},269:function(e,n,t){"use strict";n.__esModule=!0;var r,a,i=h(t(5)),o=h(t(6)),c=h(t(2)),s=h(t(3)),l=h(t(4)),u=t(0),d=h(u),p=h(t(1)),m=h(t(8)),b=h(t(11)),f=h(t(21)),x=h(t(270));function h(e){return e&&e.__esModule?e:{default:e}}var v=(a=r=function(e){function n(){return(0,c.default)(this,n),(0,s.default)(this,e.apply(this,arguments))}return(0,l.default)(n,e),n.prototype.render=function(){var e=this.props,n=e.prefix,t=e.className,r=e.maxNode,a=e.children,c=e.separator,s=(0,o.default)(e,["prefix","className","maxNode","children","separator"]),l=(0,m.default)(n+"breadcrumb",t),p=void 0,b=u.Children.count(a);if(r>1&&b>r){var f=b-r+1;p=[],u.Children.forEach(a,function(e,t){var r={};t===b-1&&(r["aria-current"]="page"),t&&t===f?p.push(d.default.cloneElement(e,(0,i.default)({separator:c,prefix:n,key:t,activated:t===b-1},r,{className:n+"breadcrumb-text-ellipsis"}),"...")):(!t||t>f)&&p.push(d.default.cloneElement(e,(0,i.default)({separator:c,prefix:n,key:t},r,{activated:t===b-1})))})}else p=u.Children.map(a,function(e,t){var r={};return t===b-1&&(r["aria-current"]="page"),d.default.cloneElement(e,(0,i.default)({separator:c,prefix:n,activated:t===b-1},r,{key:t}))});return d.default.createElement("div",(0,i.default)({"aria-label":"Breadcrumb",className:l},s),p)},n}(u.Component),r.Item=x.default,r.propTypes={prefix:p.default.string,children:function(e,n){u.Children.forEach(e[n],function(e){if(!e||"function"!=typeof e.type||"breadcrumb_item"!==e.type._typeMark)throw new Error("Breadcrumb's children must be Breadcrumb.Item!")})},maxNode:p.default.number,separator:p.default.node,className:p.default.any},r.defaultProps={prefix:"next-",maxNode:100,separator:d.default.createElement(b.default,{type:"arrow-right"})},a);v.displayName="Breadcrumb",n.default=f.default.config(v),e.exports=n.default},270:function(e,n,t){"use strict";n.__esModule=!0;var r,a,i=f(t(5)),o=f(t(6)),c=f(t(2)),s=f(t(3)),l=f(t(4)),u=t(0),d=f(u),p=f(t(1)),m=f(t(8)),b=f(t(21));function f(e){return e&&e.__esModule?e:{default:e}}var x=(a=r=function(e){function n(){return(0,c.default)(this,n),(0,s.default)(this,e.apply(this,arguments))}return(0,l.default)(n,e),n.Separator=function(e){var n=e.prefix,t=e.children;return d.default.createElement("span",{className:n+"breadcrumb-separator"},t)},n.prototype.render=function(){var e=this.props,t=e.prefix,r=e.className,a=e.children,c=e.link,s=e.activated,l=e.separator,u=(0,o.default)(e,["prefix","className","children","link","activated","separator"]),p=(0,m.default)(t+"breadcrumb-text",r,{activated:s});return d.default.createElement("div",{className:t+"breadcrumb-item"},c?d.default.createElement("a",(0,i.default)({href:c,className:p},u),a):d.default.createElement("span",(0,i.default)({className:p},u),a),s?null:n.Separator({prefix:t,children:l}))},n}(u.Component),r.propTypes={prefix:p.default.string,link:p.default.string,activated:p.default.bool,separator:p.default.node,className:p.default.any,children:p.default.node},r.defaultProps={prefix:"next-"},r._typeMark="breadcrumb_item",a);x.displayName="Item",n.default=b.default.config(x),e.exports=n.default},271:function(e,n,t){var r=t(272);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(13)(r,a);r.locals&&(e.exports=r.locals)},272:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".breadcrumb__container {\n  background: #fff;\n  padding: 20px 20px 0;\n  border-bottom: 1px solid #e8e8e8; }\n  .breadcrumb__container .breadcrumb {\n    margin: 0 0 20px; }\n  .breadcrumb__container .title {\n    margin: 0 0 20px;\n    font-size: 20px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.85); }\n  .breadcrumb__container .summary {\n    margin-bottom: 20px;\n    font-size: 14px;\n    line-height: 1.5;\n    color: rgba(0, 0, 0, 0.65); }\n",""])},273:function(e,n,t){var r=t(274);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(13)(r,a);r.locals&&(e.exports=r.locals)},274:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".card__container {\n  background: white;\n  border-radius: 6px;\n  margin: 20px;\n  padding: 10px 20px 20px; }\n",""])},280:function(e,n,t){"use strict";t(266);var r=t(269),a=t.n(r),i=t(83),o=t.n(i),c=t(15),s=t.n(c),l=t(16),u=t.n(l),d=t(17),p=t.n(d),m=t(18),b=t.n(m),f=t(19),x=t.n(f),h=t(23),v=t.n(h),y=t(0),g=t.n(y),k=t(1),w=t.n(k),N=(t(271),function(e){function n(){return s()(this,n),p()(this,b()(n).apply(this,arguments))}return x()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.items,r=e.summary;return g.a.createElement("div",{className:"breadcrumb__container"},g.a.createElement(a.a,{className:"breadcrumb"},t.map(function(e,n){var t=e.link?{link:e.link}:{};return g.a.createElement(a.a.Item,o()({key:n},t),e.text)})),g.a.createElement("h3",{className:"title"},n),r&&g.a.createElement("p",{className:"summary"},r))}}]),n}(y.Component));v()(N,"displayName","CustomBreadcrumb"),v()(N,"propTypes",{items:w.a.array.isRequired,title:w.a.string.isRequired,summary:w.a.object}),v()(N,"defaultProps",{});var _=N,E=(t(273),function(e){function n(){return s()(this,n),p()(this,b()(n).apply(this,arguments))}return x()(n,e),u()(n,[{key:"render",value:function(){var e=this.props.children;return g.a.createElement("div",{className:"card__container"},e)}}]),n}(y.Component));E.propTypes={children:w.a.node};var F=E;t.d(n,"b",function(){return _}),t.d(n,"a",function(){return F})},56:function(e,n,t){"use strict";t.r(n);var r=t(15),a=t.n(r),i=t(16),o=t.n(i),c=t(17),s=t.n(c),l=t(18),u=t.n(l),d=t(19),p=t.n(d),m=t(23),b=t.n(m),f=t(0),x=t.n(f),h=(t(1),t(280)),v=t(131),y=function(e){function n(){return a()(this,n),s()(this,u()(n).apply(this,arguments))}return p()(n,e),o()(n,[{key:"render",value:function(){return x.a.createElement("div",null,x.a.createElement(h.b,{items:[{link:"/#/",text:"直播间管理"},{link:"",text:"直播房间"}],title:"直播房间"}),x.a.createElement(v.default,{id:"player1",mediaType:"video",preload:"none",controls:!0,width:"640",height:"360",poster:"",sources:JSON.stringify([{src:"rtmp://pili-live-rtmp.nanjids.com/nanjids/1",type:"video/rtmp"}]),options:JSON.stringify({}),tracks:JSON.stringify({})}))}}]),n}(f.Component);b()(y,"propTypes",{}),n.default=y}}]);