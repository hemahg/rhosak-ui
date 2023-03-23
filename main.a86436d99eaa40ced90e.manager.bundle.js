(self.webpackChunkui=self.webpackChunkui||[]).push([[179],{33314:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(34769),__webpack_require__(74083),__webpack_require__(34115),__webpack_require__(18145),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886),__webpack_require__(32501),__webpack_require__(26936),__webpack_require__(27233),__webpack_require__(43450),__webpack_require__(39529),__webpack_require__(31235);var TableComposable=__webpack_require__(29710),Thead=__webpack_require__(30534),Tr=__webpack_require__(15207),Th=__webpack_require__(75565),Tbody=__webpack_require__(84985),Td=__webpack_require__(61397),esm=__webpack_require__(27186),types=__webpack_require__(31665),dist_esm=__webpack_require__(98918),react=(__webpack_require__(12300),__webpack_require__(54600),__webpack_require__(2784)),ADDON_ID="ouia-panel",PANEL_ID=("".concat(ADDON_ID,"/tool"),"".concat(ADDON_ID,"/panel")),EVENTS_RENDERED=("".concat(ADDON_ID,"/tab"),"".concat(ADDON_ID,"/rendered")),Alert=__webpack_require__(92355),AlertActionLink=__webpack_require__(60726),TextContent=__webpack_require__(62824),ClipboardCopy=__webpack_require__(90850),_excluded=["active"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var OUIAPanel=function OUIAPanel(_ref){var _useChannel,active=_ref.active,_useAddonState2=(_objectWithoutProperties(_ref,_excluded),_slicedToArray((0,dist_esm.jt)(ADDON_ID,[]),2)),nodes=_useAddonState2[0],setNodes=_useAddonState2[1];return(0,dist_esm.EM)(((_useChannel={})[EVENTS_RENDERED]=function(_ref2){var nodes=_ref2.nodes;setNodes(nodes)},_useChannel)),active?react.createElement(TableComposable.X,null,react.createElement(Thead.h,null,react.createElement(Tr.Tr,null,react.createElement(Th.Th,{hasRightBorder:!0,colSpan:2},"OUIA"),react.createElement(Th.Th,null,"Pendo")),react.createElement(Tr.Tr,null,react.createElement(Th.Th,{isSubheader:!0},"OUIA id"),react.createElement(Th.Th,{isSubheader:!0},"OUIA type"),react.createElement(Th.Th,{isSubheader:!0},"Selector"))),react.createElement(Tbody.p,null,nodes.map((function(node,rowIndex){return react.createElement(Tr.Tr,{key:rowIndex},react.createElement(Td.Td,null,node.id),react.createElement(Td.Td,null,node.type),react.createElement(Td.Td,null,react.createElement(Selector,{selector:node.selector})))})))):null},Selector=function Selector(_ref3){var selector=_ref3.selector,isSelectorSafe=!selector.includes("OUIA-Generated"),_useState2=_slicedToArray((0,react.useState)(isSelectorSafe),2),showSelector=_useState2[0],setShowSelector=_useState2[1];return react.createElement(react.Fragment,null,!isSelectorSafe&&react.createElement(Alert.b,{variant:"warning",isInline:!0,title:"Selector not safe to be used on Pendo!",actionLinks:react.createElement(react.Fragment,null,react.createElement(AlertActionLink.Q,{onClick:function onClick(){return setShowSelector(!0)}},"I understand, show anyway"))},react.createElement(TextContent.D,null,react.createElement("p",null,"This selector contains references to automatically generated OUIA ids. These ids are generated when the component is added on the page. It is ",react.createElement("strong",null,"very likely")," these ids will be different in the final application."),react.createElement("p",null,"It is advised ",react.createElement("strong",null,"not")," to use this selector to track the feature on Pendo. Open an issue to ask the developers to statically define the id."))),showSelector&&react.createElement(ClipboardCopy.M5,{isReadOnly:!0,hoverTip:"Copy",clickTip:"Copied",variant:ClipboardCopy.oo.expansion},selector))};esm.KP.register(ADDON_ID,(function(api){esm.KP.add(PANEL_ID,{type:types.V.PANEL,title:"OUIA",render:function render(_ref4){var active=_ref4.active,key=_ref4.key;return react.createElement(OUIAPanel,{active,key})}})}))},53260:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[722],(()=>(__webpack_exec__(47513),__webpack_exec__(52195),__webpack_exec__(92812),__webpack_exec__(49157),__webpack_exec__(91867),__webpack_exec__(80763),__webpack_exec__(35852),__webpack_exec__(12101),__webpack_exec__(47121),__webpack_exec__(63464),__webpack_exec__(33027),__webpack_exec__(72815),__webpack_exec__(9251),__webpack_exec__(79878),__webpack_exec__(25107),__webpack_exec__(33314))));__webpack_require__.O()}]);