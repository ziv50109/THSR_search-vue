(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,m=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0212":function(t,e,r){"use strict";var n=r("9a21"),a=r.n(n);a.a},3771:function(t,e,r){"use strict";var n=r("9769"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",[r("News"),r("Panel")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",lg:"10"}},[r("v-card",[r("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("時刻查詢")]),r("v-tab",[t._v("特定班次"),r("br",{staticClass:"mobile-show"}),t._v("停靠站查詢")]),r("v-tab",[t._v("特定車站"),r("br",{staticClass:"mobile-show"}),t._v("座位查詢")])],1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-container",[r("Timetable"),r("TimetableInfo")],1)],1),r("v-tab-item",[r("v-container",[r("TrainNo"),r("TrainNoInfo")],1)],1),r("v-tab-item",[r("v-container",[r("AvailableSeat"),r("AvailableSeatInfo")],1)],1)],1)],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.stationList,label:"出發站",required:"",rules:[function(t){return!!t||"請選擇出發站"},function(e){return e!==t.form.station[1]||"不得與到達站相同"}]},model:{value:t.form.station[0],callback:function(e){t.$set(t.form.station,0,e)},expression:"form.station[0]"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.stationList,label:"到達站",required:"",rules:[function(t){return!!t||"請選擇到達站"},function(e){return e!==t.form.station[0]||"不得與出發站相同"}]},model:{value:t.form.station[1],callback:function(e){t.$set(t.form.station,1,e)},expression:"form.station[1]"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","min-width":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{label:"日期","prepend-inner-icon":"mdi-calendar-range",readonly:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}},n))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[r("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-menu",{ref:"timePicker",attrs:{"close-on-content-click":!1,"offset-y":"","min-width":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{label:"時間","prepend-inner-icon":"mdi-clock-outline",readonly:""},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}},n))]}}]),model:{value:t.timeMenu,callback:function(e){t.timeMenu=e},expression:"timeMenu"}},[t.timeMenu?r("v-time-picker",{attrs:{format:"24hr"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}}):t._e()],1)],1),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{items:t.wayList},model:{value:t.form.way,callback:function(e){t.$set(t.form,"way",e)},expression:"form.way"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary"},on:{click:t.submit}},[t._v("查詢")])],1)],1)],1)},l=[],u=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("ade3")),f=r("5a0c"),m=r.n(f),b=r("2f62");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"Timetable",data:function(){return{valid:!0,dateMenu:!1,timeMenu:!1,wayList:[{text:"出發",value:"OriginStopTime"},{text:"抵達",value:"DestinationStopTime"}],form:{station:[],date:m()().format("YYYY-MM-DD"),time:m()().format("HH:mm"),way:"OriginStopTime"}}},computed:v({},Object(b["c"])(["stationList","timetableList"])),watch:{"form.station":{handler:function(t){t[0]!==t[1]&&this.$refs.form.resetValidation()}}},mounted:function(){this.getStation()},methods:v({},Object(b["b"])(["getStation","getTimetable"]),{submit:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=3;break}return t.next=3,regeneratorRuntime.awrap(this.getTimetable({form:this.form}));case 3:case"end":return t.stop()}}),null,this)}})},y=d,O=r("2877"),h=r("6544"),w=r.n(h),g=r("8336"),j=r("62ad"),T=r("2e4b"),S=r("4bd4"),_=r("e449"),x=r("0fd9"),P=r("b974"),D=r("8654"),N=r("c964"),k=Object(O["a"])(y,c,l,!1,null,null,null),I=k.exports;w()(k,{VBtn:g["a"],VCol:j["a"],VDatePicker:T["a"],VForm:S["a"],VMenu:_["a"],VRow:x["a"],VSelect:P["a"],VTextField:D["a"],VTimePicker:N["b"]});var V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{items:t.todayDailyTrainInfoList,label:"車次號碼","no-data-text":"找不到結果",required:"",rules:[function(t){return!!t||"請輸入車次號碼"}]},model:{value:t.form.trainNo,callback:function(e){t.$set(t.form,"trainNo",e)},expression:"form.trainNo"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary"},on:{click:t.submit}},[t._v("查詢")])],1)],1)],1)},L=[];function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $={name:"TrainNo",data:function(){return{valid:!0,form:{trainNo:""}}},computed:C({},Object(b["c"])(["todayDailyTrainInfoList","todayTrainNoList"])),mounted:function(){this.getTodayDailyTrainInfo()},methods:C({},Object(b["b"])(["getTodayDailyTrainInfo","getTodayTrainNo"]),{submit:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=3;break}return t.next=3,regeneratorRuntime.awrap(this.getTodayTrainNo({TrainNo:this.form.trainNo}));case 3:case"end":return t.stop()}}),null,this)}})},A=$,E=(r("0212"),r("c6a6")),M=Object(O["a"])(A,V,L,!1,null,null,null),q=M.exports;w()(M,{VAutocomplete:E["a"],VBtn:g["a"],VCol:j["a"],VForm:S["a"],VRow:x["a"]});var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:t.stationList,label:"車站",required:"",rules:[function(t){return!!t||"請選擇車站"}]},model:{value:t.form.station,callback:function(e){t.$set(t.form,"station",e)},expression:"form.station"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary"},on:{click:t.submit}},[t._v("查詢")])],1)],1)],1)},Y=[];function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={name:"AvailableSeat",data:function(){return{valid:!0,form:{station:""}}},computed:H({},Object(b["c"])(["stationList","availableSeatList"])),methods:H({},Object(b["b"])(["getAvailableSeat"]),{submit:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=3;break}return t.next=3,regeneratorRuntime.awrap(this.getAvailableSeat({StationID:this.form.station}));case 3:case"end":return t.stop()}}),null,this)}})},Z=B,J=Object(O["a"])(Z,U,Y,!1,null,null,null),z=J.exports;w()(J,{VBtn:g["a"],VCol:j["a"],VForm:S["a"],VRow:x["a"],VSelect:P["a"]});var G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.timetableList.length?r("div",[r("hr"),r("v-simple-table",{staticClass:"mt-3",attrs:{"fixed-header":"",height:"530px"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",[t._v("車次")]),r("th",[t._v("出發時間")]),r("th",[t._v("到達時間")]),r("th",[t._v("行車時間")])])]),r("tbody",t._l(t.timetableList,(function(e){return r("tr",{key:e.trainNo},[r("td",[t._v(t._s(e.trainNo))]),r("td",[t._v(t._s(e.startTime))]),r("td",[t._v(t._s(e.endTime))]),r("td",[t._v(t._s(e.diffTime[0]))])])})),0)]},proxy:!0}],null,!1,2684191775)})],1):t._e()},K=[];function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var X={name:"TimetableInfo",computed:W({},Object(b["c"])(["timetableList"]))},tt=X,et=r("1f4f"),rt=Object(O["a"])(tt,G,K,!1,null,null,null),nt=rt.exports;w()(rt,{VSimpleTable:et["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.todayTrainNoList.length?r("div",[r("v-timeline",t._l(t.todayTrainNoList,(function(e,n){return r("v-timeline-item",{key:e.station,class:n%2!==0?"text-right":"",attrs:{small:"",color:"red lighten-1"}},[t._v(t._s(e.station)+" "+t._s(e.time))])})),1)],1):t._e()},ot=[];function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ct={name:"TrainNoInfo",computed:st({},Object(b["c"])(["todayTrainNoList"]))},lt=ct,ut=(r("3771"),r("8414")),ft=r("1e06"),mt=Object(O["a"])(lt,at,ot,!1,null,"07294367",null),bt=mt.exports;w()(mt,{VTimeline:ut["a"],VTimelineItem:ft["a"]});var pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableSeatList.length?r("div",[r("hr"),r("v-simple-table",{staticClass:"mt-3",scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",[t._v("車次")]),r("th",[t._v("終點站")]),r("th",[t._v("停靠站")]),r("th",[t._v("標準席"),r("br",{staticClass:"mobile-show"}),t._v("剩餘座位")]),r("th",[t._v("商務席"),r("br",{staticClass:"mobile-show"}),t._v("剩餘座位")])])]),t._l(t.availableSeatList,(function(e){return r("tbody",{key:e.trainNo},t._l(e.stopStations,(function(n){return r("tr",{key:n.StationID},[r("td",[t._v(t._s(e.trainNo))]),r("td",[t._v(t._s(e.endingStation))]),r("td",[t._v(t._s(n.StationName.Zh_tw))]),r("td",{class:n.BusinessSeatStatus},[t._v(t._s(t.seatStatus[n.BusinessSeatStatus]))]),r("td",{class:n.StandardSeatStatus},[t._v(t._s(t.seatStatus[n.StandardSeatStatus]))])])})),0)}))]},proxy:!0}],null,!1,4284140075)})],1):t._e()},vt=[];function dt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ot={name:"AvailableSeatInfo",computed:yt({},Object(b["c"])(["availableSeatList"])),data:function(){return{seatStatus:{Available:"尚有座位",Limited:"座位有限",Full:"已無座位"}}}},ht=Ot,wt=(r("e96a"),Object(O["a"])(ht,pt,vt,!1,null,"16344c31",null)),gt=wt.exports;w()(wt,{VSimpleTable:et["a"]});var jt={name:"Panel",components:{Timetable:I,TrainNo:q,AvailableSeat:z,TimetableInfo:nt,TrainNoInfo:bt,AvailableSeatInfo:gt},data:function(){return{tab:null}}},Tt=jt,St=r("b0af"),_t=r("a523"),xt=r("71a3"),Pt=r("c671"),Dt=r("fe57"),Nt=r("aac8"),kt=Object(O["a"])(Tt,i,s,!1,null,null,null),It=kt.exports;w()(kt,{VCard:St["a"],VCol:j["a"],VContainer:_t["a"],VRow:x["a"],VTab:xt["a"],VTabItem:Pt["a"],VTabs:Dt["a"],VTabsItems:Nt["a"]});var Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",lg:"10"}},[r("v-card",[r("v-card-text",[r("h3",{staticClass:"news-title"},[t._v("最新消息")])]),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(t.newsList,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"news-date"},[t._v(t._s(e.date))]),r("td",[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])])])})),0)]},proxy:!0}])})],1)],1)],1)},Lt=[];function Rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Rt(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $t={name:"News",data:function(){return{}},computed:Ct({},Object(b["c"])(["newsList"])),mounted:function(){this.getNews()},methods:Ct({},Object(b["b"])(["getNews"]))},At=$t,Et=(r("6377"),r("99d9")),Mt=Object(O["a"])(At,Vt,Lt,!1,null,"b7052a44",null),qt=Mt.exports;w()(Mt,{VCard:St["a"],VCardText:Et["a"],VCol:j["a"],VRow:x["a"],VSimpleTable:et["a"]});var Ut={name:"App",components:{Panel:It,News:qt}},Yt=Ut,Ft=(r("5c0b"),r("7496")),Ht=Object(O["a"])(Yt,a,o,!1,null,null,null),Bt=Ht.exports;w()(Ht,{VApp:Ft["a"],VContainer:_t["a"]});r("d81d"),r("99af");var Zt=r("d4ec"),Jt=r("bee2"),zt=r("bc3a"),Gt=r.n(zt),Kt=function(){function t(e){Object(Zt["a"])(this,t),this.baseUrl=e.baseUrl,this.params=e.params}return Object(Jt["a"])(t,[{key:"getInsideConfig",value:function(){var t={baseURL:this.baseUrl,params:this.params,headers:{}};return t}},{key:"interceptors",value:function(t,e){t.interceptors.response.use((function(t){var e=t.data,r=t.status;return{data:e,status:r}}),(function(t){return Promise.reject(t)}))}},{key:"request",value:function(t){var e=Gt.a.create();return t=Object.assign(this.getInsideConfig(),t),this.interceptors(e,t.url),e(t)}}]),t}(),Qt=Kt,Wt={baseUrl:{dev:"https://ptx.transportdata.tw/MOTC/v2/Rail/THSR",prod:"https://ptx.transportdata.tw/MOTC/v2/Rail/THSR"}},Xt=Wt.baseUrl.prod,te={$format:"JSON"},ee=new Qt({baseUrl:Xt,params:te}),re=ee,ne=function(){return re.request({url:"News",params:{$top:5},method:"get"})},ae=function(){return re.request({url:"Station",method:"get"})},oe=function(t){var e=t.OriginStationID,r=t.DestinationStationID,n=t.TrainDate;return re.request({url:"DailyTimetable/OD/".concat(e,"/to/").concat(r,"/").concat(n),method:"get"})},ie=function(){return re.request({url:"DailyTrainInfo/Today",method:"get"})},se=function(t){var e=t.TrainNo;return re.request({url:"DailyTimetable/Today/TrainNo/".concat(e),method:"get"})},ce=function(t){var e=t.StationID;return re.request({url:"AvailableSeatStatusList/".concat(e),method:"get"})},le={state:{news:[]},mutations:{setNews:function(t,e){t.news=e}},getters:{newsList:function(t){return t.news.map((function(t){return{id:t.NewsID,date:m()(t.PublishTime).format("YYYY/MM/DD"),title:t.Title,url:t.NewsUrl}}))}},actions:{getNews:function(t){var e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,regeneratorRuntime.awrap(ne());case 3:r=n.sent,e("setNews",r.data);case 5:case"end":return n.stop()}}))}}},ue=(r("7db0"),r("4e827"),r("e25e"),r("1276"),function(t){return t.split(":")}),fe=function(t){return parseInt(60*ue(t)[0])+parseInt(ue(t)[1])},me=function(t,e){return fe(t)>fe(e)},be=function(t,e){var r=fe(t)-fe(e),n=Math.floor(r/60),a=r-60*n;return["".concat(n,":").concat(a<10?"0"+a:a),n,a]},pe={state:{station:[],form:{},timetable:[],todayDailyTrainInfo:[],todayTrainNo:[],availableSeat:[]},mutations:{setStation:function(t,e){t.station=e},setTimetable:function(t,e){t.timetable=e},setForm:function(t,e){t.form=e},setTodayDailyTrainInfo:function(t,e){t.todayDailyTrainInfo=e},setTodayTrainNo:function(t,e){t.todayTrainNo=e},setAvailableSeat:function(t,e){t.availableSeat=e}},getters:{stationList:function(t){return t.station.map((function(t){return{text:t.StationName.Zh_tw,value:t.StationID}}))},timetableList:function(t){var e=t.form,r=e.way,n=e.time;return t.timetable.filter((function(t){return"OriginStopTime"===r?me(t[r].ArrivalTime,n):me(n,t[r].ArrivalTime)})).map((function(t){return{trainNo:t.DailyTrainInfo.TrainNo,startTime:t.OriginStopTime.ArrivalTime,endTime:t.DestinationStopTime.ArrivalTime,diffTime:be(t.DestinationStopTime.ArrivalTime,t.OriginStopTime.ArrivalTime)}})).sort((function(t,e){return fe(t.startTime)-fe(e.startTime)}))},todayDailyTrainInfoList:function(t){return t.todayDailyTrainInfo.map((function(t){return t.TrainNo}))},todayTrainNoList:function(t){return t.todayTrainNo.length?t.todayTrainNo[0].StopTimes.map((function(t){return{station:t.StationName.Zh_tw,time:t.ArrivalTime}})):[]},availableSeatList:function(t){if(!t.availableSeat.length)return[];var e=t.availableSeat[0].AvailableSeats,r=m()().format("HH:mm");return[e.find((function(t){return me(t.DepartureTime,r)}))].map((function(t){return{trainNo:t.TrainNo,endingStation:t.EndingStationName.Zh_tw,stopStations:t.StopStations}}))}},actions:{getStation:function(t){var e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,regeneratorRuntime.awrap(ae());case 3:r=n.sent,e("setStation",r.data);case 5:case"end":return n.stop()}}))},getTimetable:function(t,e){var r,n,a,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return r=t.commit,n=e.form,a={OriginStationID:n.station[0],DestinationStationID:n.station[1],TrainDate:n.date},i.next=5,regeneratorRuntime.awrap(oe(a));case 5:o=i.sent,r("setTimetable",o.data),r("setForm",n);case 8:case"end":return i.stop()}}))},getTodayDailyTrainInfo:function(t){var e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,regeneratorRuntime.awrap(ie());case 3:r=n.sent,e("setTodayDailyTrainInfo",r.data);case 5:case"end":return n.stop()}}))},getTodayTrainNo:function(t,e){var r,n,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return r=t.commit,n=e.TrainNo,o.next=4,regeneratorRuntime.awrap(se({TrainNo:n}));case 4:a=o.sent,r("setTodayTrainNo",a.data);case 6:case"end":return o.stop()}}))},getAvailableSeat:function(t,e){var r,n,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return r=t.commit,n=e.StationID,o.next=4,regeneratorRuntime.awrap(ce({StationID:n}));case 4:a=o.sent,r("setAvailableSeat",a.data);case 6:case"end":return o.stop()}}))}}};n["a"].use(b["a"]);var ve=new b["a"].Store({state:{},mutations:{},actions:{},modules:{thsr:pe,news:le}}),de=r("f309");n["a"].use(de["a"]);var ye=new de["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:ve,vuetify:ye,render:function(t){return t(Bt)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("7694"),a=r.n(n);a.a},6377:function(t,e,r){"use strict";var n=r("e0c8"),a=r.n(n);a.a},7694:function(t,e,r){},9769:function(t,e,r){},"9a21":function(t,e,r){},ccdf:function(t,e,r){},e0c8:function(t,e,r){},e96a:function(t,e,r){"use strict";var n=r("ccdf"),a=r.n(n);a.a}});
//# sourceMappingURL=app.c968cf68.js.map