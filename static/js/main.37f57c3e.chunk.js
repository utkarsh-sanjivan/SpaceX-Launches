(this["webpackJsonpspacex-launches"]=this["webpackJsonpspacex-launches"]||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var c={};a.r(c),a.d(c,"getLaunchList",(function(){return G}));var n=a(0),s=a.n(n),r=a(13),l=a.n(r),i=a(31),u=a(30),o=a(64),p=a.n(o),m=a(8),d=a(72),h=a(10),f=a.n(h),E=a(12),b=a(66),L=a(67),v=a.n(L).a.create({baseURL:"https://api.spacexdata.com/v3/",headers:{"Content-Type":"application/json"}});function x(e){return Object.keys(e).reduce((function(t,a){return""!==e[a]?"".concat(t,"&").concat(a,"=").concat(e[a]):t}),"launches?limit=100")}function y(e){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(t),e.next=3,v.get(a,{});case 3:if(c=e.sent,!(c.status>=200&&c.status<300)){e.next=7;break}return e.abrupt("return",c.data);case 7:throw c.status;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=f.a.mark(g),N=f.a.mark(_);function g(e){var t,a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(E.b)(y,e.payload);case 3:return t=c.sent,c.next=6,Object(E.d)({type:"GET_LAUNCH_LIST_SUCCESS",payload:t});case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(0),a={status:c.t0.request.status,message:c.t0.message},c.next=13,Object(E.d)({type:"GET_LAUNCH_LIST_ERRORED",payload:a});case 13:case 14:case"end":return c.stop()}}),O,null,[[0,8]])}function _(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.e)("GET_LAUNCH_LIST_REQUESTED",g)]);case 2:case"end":return e.stop()}}),N)}var T=f.a.mark(k);function k(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(_);case 2:case"end":return e.stop()}}),T)}var S=a(11),C={launchListLoading:!1,launchListErrored:!1,launchList:[]};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LAUNCH_LIST_REQUESTED":return Object(S.a)(Object(S.a)({},e),{},{launchListLoading:!0,launchListErrored:!1,launchList:[]});case"GET_LAUNCH_LIST_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{launchListLoading:!1,launchListErrored:!1,launchList:t.payload});case"GET_LAUNCH_LIST_ERRORED":return Object(S.a)(Object(S.a)({},e),{},{launchListLoading:!1,launchListErrored:!0,launchList:[]});default:return Object(S.a)({},e)}}var U=function(e){return Object(m.c)({launchList:w})},D=a(24),R=a(68),A=a(69),I=a(73),H=a(74);function G(e){return{type:"GET_LAUNCH_LIST_REQUESTED",payload:e}}var M=a(20),F=(a(110),function(e){return s.a.createElement("div",{className:"spacex-card"},e.launchDetails.links.mission_patch?s.a.createElement("img",{class:"spacex-card-image",alt:"Unavailable",src:e.launchDetails.links.mission_patch}):s.a.createElement(M.a,{className:"spacex-card-empty-image",description:"Image Unavailable",image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{width:"100%"}}),s.a.createElement("div",{className:"spacex-card-content"},s.a.createElement("div",{className:"spacex-card-name"},e.launchDetails.mission_name," #",e.launchDetails.flight_number),s.a.createElement("div",{className:"spacex-card-mission-text"},"Mission Ids:"),s.a.createElement("div",{className:"spacex-card-mission-list"},"{ list Mission Ids }"),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("p",{className:"spacex-card-title"},"Launch Year:"),s.a.createElement("p",{className:"spacex-card-sub-title"},e.launchDetails.launch_year)),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("p",{className:"spacex-card-title"},"Successful Launch:"),s.a.createElement("p",{className:"spacex-card-sub-title"},e.launchDetails.launch_success?"true":"false")),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("p",{className:"spacex-card-title"},"Successful Landing:"),s.a.createElement("p",{style:{cursor:"pointer"},className:"spacex-card-sub-title"},"{ launch landing }"))))}),Q=(a(112),function(e){return s.a.createElement("div",{className:"launch-list-conatainer"},e.launches.map((function(e){return s.a.createElement(F,{launchDetails:e})})))}),B=a(140),J=(a(113),function(e){return s.a.createElement(B.a,Object.assign({},e,{className:e.isSelected?"selected-color":"unselected-color"}))}),P=(a(135),function(e){return s.a.createElement("div",{className:"filters-conatainer"},s.a.createElement("div",{className:"filters-title"},"Filters"),s.a.createElement("div",{className:"filter-type-text"},"Launch Year"),s.a.createElement("div",{style:{gridTemplateRows:"30px 30px 30px 30px 30px 30px 30px 30px"},className:"filter-type-buttons"},Array(15).fill(null).map((function(t,a){return s.a.createElement("div",{className:"filter-button-div",key:a+2006},s.a.createElement(J,{isSelected:e.filterObj.launch_year===(a+2006).toString(),onClick:function(){return e.filterClicked("launch_year",(a+2006).toString())}},a+2006))}))),s.a.createElement("div",{className:"filter-type-text"},"Successful Launch"),s.a.createElement("div",{style:{gridTemplateRows:"30px"},className:"filter-type-buttons"},[{text:"True",checkText:"true",filterType:"launch_success"},{text:"False",checkText:"false",filterType:"launch_success"}].map((function(t,a){return s.a.createElement("div",{className:"filter-button-div",key:a},s.a.createElement(J,{isSelected:e.filterObj.launch_success===t.checkText,onClick:function(){return e.filterClicked(t.filterType,t.checkText)}},t.text))}))),s.a.createElement("div",{className:"filter-type-text"},"Successful Landing"),s.a.createElement("div",{style:{gridTemplateRows:"30px"},className:"filter-type-buttons"},[{text:"True",checkText:"true",filterType:"land_success"},{text:"False",checkText:"false",filterType:"land_success"}].map((function(t,a){return s.a.createElement("div",{className:"filter-button-div",key:a},s.a.createElement(J,{isSelected:e.filterObj.land_success===t.checkText,onClick:function(){return e.filterClicked(t.filterType,t.checkText)}},t.text))}))))}),Y=(a(136),function(){return s.a.createElement("i",{class:"fas fa-spin fa-cog spacex-loader"})}),q=(a(137),function(e){Object(I.a)(a,e);var t=Object(H.a)(a);function a(e){var c;return Object(R.a)(this,a),(c=t.call(this,e)).filterClicked=function(e,t){c.setState((function(a){return{filterObj:Object(S.a)(Object(S.a)({},a.filterObj),{},Object(D.a)({},e,a.filterObj[e]===t?"":t))}}),(function(){c.props.launchListActions.getLaunchList(c.state.filterObj)}))},c.state={launchList:[],filterObj:{launch_year:"",launch_success:"",land_success:""}},c}return Object(A.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"launch-list-container"},s.a.createElement("div",{className:"launch-list-body"},s.a.createElement("div",{className:"launch-list-title"},"SpaceX Launch Programs"),s.a.createElement("div",{className:"launch-list-content"},s.a.createElement("div",{className:"launch-list-filter"},s.a.createElement(P,{filterObj:this.state.filterObj,filterClicked:this.filterClicked})),s.a.createElement("div",{className:"launch-list-cards"},this.props.launchList.launchListLoading?s.a.createElement(Y,null):s.a.createElement(Q,{launches:this.state.launchList}))),s.a.createElement("div",{className:"launch-list-footer"},"Developer By: ",s.a.createElement("span",{style:{color:"blue",fontWeight:"400"}},"Utkarsh Sanjivan"))))}},{key:"componentDidMount",value:function(){this.props.launchListActions.getLaunchList({})}},{key:"componentDidUpdate",value:function(e){e.launchList.launchListLoading&&!this.props.launchList.launchListLoading&&this.setState({launchList:this.props.launchList.launchList})}}]),a}(s.a.Component));var z=Object(u.b)((function(e){return{launchList:e.launchList}}),(function(e){return{launchListActions:Object(m.b)(c,e)}}))(q),W=(a(138),p()()),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(d.a)(t={}),c=Object(i.b)(e),n=Object(m.e)(U(),t,Object(m.d)(Object(m.a)(a,c)));return a.run(k),n}(W,{});l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u.a,{store:X},s.a.createElement(i.a,{history:W},s.a.createElement(z,null)))),document.getElementById("root"))},79:function(e,t,a){e.exports=a(139)}},[[79,1,2]]]);
//# sourceMappingURL=main.37f57c3e.chunk.js.map