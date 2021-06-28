exports.ids = [8];
exports.modules = {

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("12320e3c", content, true, context)
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_3dbcf674_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_3dbcf674_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_3dbcf674_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_3dbcf674_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_3dbcf674_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-3dbcf674],.use-text-title[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-3dbcf674]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3dbcf674]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3dbcf674]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3dbcf674]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3dbcf674]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3dbcf674]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3dbcf674]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3dbcf674]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3dbcf674]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3dbcf674],.use-text-paragraph[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3dbcf674]{font-size:14px;line-height:22px}}.use-hidden[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-3dbcf674]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3dbcf674]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3dbcf674]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3dbcf674]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3dbcf674]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3dbcf674]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3dbcf674]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-3dbcf674],body[data-v-3dbcf674],h1[data-v-3dbcf674],h2[data-v-3dbcf674],h3[data-v-3dbcf674],h4[data-v-3dbcf674],h5[data-v-3dbcf674],h6[data-v-3dbcf674],html[data-v-3dbcf674],p[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif}.header[data-v-3dbcf674]{color:#39c}.box[data-v-3dbcf674]{padding-left:15%;padding-right:8%;margin-top:50px}.box-content[data-v-3dbcf674]{padding:20px 30px}hr[data-v-3dbcf674]{opacity:.5;margin-top:5px;margin-bottom:10px;box-shadow:1px #999;width:100%}@media only screen and (max-width:600px){.box[data-v-3dbcf674]{padding-left:0}.box[data-v-3dbcf674],.space-top[data-v-3dbcf674]{margin-top:0}hr[data-v-3dbcf674]{opacity:.5;margin-top:5px;box-shadow:#999;width:100%}}main-wrap[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;position:relative;width:100%;overflow:hidden}.theme--light main-wrap[data-v-3dbcf674]{color:rgba(0,0,0,.87)}.theme--dark main-wrap[data-v-3dbcf674]{color:#fff;background-color:#303030}.theme--light main-wrap[data-v-3dbcf674]{background-color:#fff}.space-bottom[data-v-3dbcf674]{margin-bottom:160px}.space-top[data-v-3dbcf674]{margin-top:50px}.container-wrap[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;margin-top:80px;padding:32px}.container-wrap>section[data-v-3dbcf674]{font-family:\"IBM Plex Thai\",sans-serif;position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/history.vue?vue&type=template&id=3dbcf674&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"home\" data-v-3dbcf674></section> "),_vm._ssrNode("<div class=\"main-wrap\" data-v-3dbcf674>","</div>",[_c('main-header',{attrs:{"invert":""}}),_vm._ssrNode(" <div class=\"container-wrap\" data-v-3dbcf674><section class=\"space-top\" data-v-3dbcf674><div class=\"box\" data-v-3dbcf674><h1 class=\"header\" data-v-3dbcf674>ประวัติโรงเรียน</h1> <hr data-v-3dbcf674> <div class=\"box-content\" data-v-3dbcf674>\n                      โรงเรียนโพธาวัฒนาเสนีเป็นโรงเรียนมัธยมศึกษาประจำอำเภอโพธารามแห่งแรก\n            และเป็นโรงเรียนประจำอำเภอแห่งแรกของไทย[2]\n            เดิมเล่าเรียนกันโดยอาศัยศาลาวัดโพธาราม\n            ต่อมานักเรียนได้เพิ่มจำนวนคนมากขึ้นจึงได้ขยายที่เรียน ครั้งนั้นมี\n            เจ้าพระคุณธรรมเสนานี (พระแดง)เจ้าอธิการ และพระครูโพธาภิรมย์(ชื่น)\n            รองเจ้าอธิการวัดโพธาราม และหลวงราษฎร์โพธาภิบาล นายอำเภอ\n            ได้ประกาศเรี่ยรายบุญก่อสร้างอาคารเรียนที่วัดโพธารามหนึ่งหลัง\n            รวมเป็นเงิน 1532 บาท ในปี พ.ศ. 2449 โดยใช้ชื่อว่า\n            &quot;โรงเรียนวัดโพธาราม&quot;\n          </div> <div class=\"box-content\" data-v-3dbcf674>\n                      ก่อตั้งขึ้นเมื่อวันที่\n            21 มิถุนายน 2451 (ร.ศ. 127) ตามประกาศในราชกิจจานุเบกษา เล่มที่ 25\n            หน้าที่ 380 ซึ่งคัดลอกโดยนายสังเวียน รัตนมุง\n            อดีตผู้พิพากษาศาลจังหวัดสมุทรสาคร มีใจความดังนี้\n            <br data-v-3dbcf674><br data-v-3dbcf674> <i style=\"color: #999\" data-v-3dbcf674>\n              &quot; ด้วยใบรับบอกมณฑลราชบุรีที่ 3/1590 ลงวันที่ 19 พฤษภาคม ร.ศ.127\n              (พ.ศ. 2451) กล่าวว่าโรงเรียนวัด โพธาราม เมืองราชบุรี\n              เดิมได้อาศัยวัดเป็นที่เล่าเรียน แต่เป็นที่คับแคบมาก\n              ด้วยมีนักเรียนทวีมากขึ้น ครั้งเมื่อ ร.ศ. 125 (พ.ศ. 2449)\n              เจ้าพระคุณธรรมเสนานี(พระแดง)\n              เจ้าอธิการและพระครูโพธาภิรมย์(พระชื่น) รองเจ้าอธิการวัดโพธาราม\n              พร้อมด้วยหลวงราษฎร์โพธาภิบาล นายอำเภอโพธาราม\n              ได้บอกบุญเรี่ยไรเงินแก่ข้าราชการ และราษฎรรวมเป็นเงิน 1,532 บาท\n              และได้ทำการจัดสร้างโรงเรียนขึ้นที่วัดโพธาราม โดยใช้ชื่อว่า &quot;\n              โรงเรียนวัดโพธาราม &quot; โดยมีความกว้าง 4 วา 2 ศอก ยาว 6 วา 2 ศอก\n              และสูง 1 วา 3 ศอกคืบ ใช้เสาไม้เต็งรัง พื้นไม้สิงคโปร์\n              เครื่องบนไม้สัก หลังคามุงสังกะสี ฝาไม้กระยาเลยทาสีขาว\n              กับทำม้านั่งสำหรับนักเรียนนั่งได้ 2 คน\n              โดยใช้ไม้กระยาเลยและไม้สักรวม 37 ม้านั่งและนั่งได้คนเดียวอีก 20\n              ม้านั่ง และได้ทำโต๊ะสำหรับวางหนังสือเรียน 22 โต๊ะ\n              ใช้ไม้กระยาเลยและไม้สัก เมื่อแล้วเสร็จในเดือนมีนาคม ร.ศ.126\n              (พ.ศ. 2450) ได้จัดการฉลองและนิมนต์พระสงฆ์สวดพระพุทธมนต์ 50 รูป\n              และถวายอาหารบิณฑบาตกับได้มีการมโหรสพด้วย 3 วัน\n              เมื่อเสร็จการฉลองแล้ว\n              ได้เปิดโรงเรียนให้นักเรียนศึกษาเล่าเรียนต่อไป &quot;\n            </i></div></div></section></div> "),_vm._ssrNode("<section class=\"spaceTop\" data-v-3dbcf674>","</section>",[_c('main-footer')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/history.vue?vue&type=template&id=3dbcf674&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 39 modules
var Header = __webpack_require__(65);

// EXTERNAL MODULE: ./components/Footer/index.js + 9 modules
var Footer = __webpack_require__(66);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/history.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].education.name + ' - Blank Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/history.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/history.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3dbcf674",
  "51247923"
  
)

/* harmony default export */ var pages_history = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=history.js.map