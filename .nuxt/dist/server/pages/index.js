exports.ids = [9];
exports.modules = Array(214).concat([
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass
var VProgressLinear = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
 // Components

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(positionable["b" /* factory */])(['absolute', 'fixed', 'top', 'bottom']), proxyable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VProgressLinear_VProgressLinear = (baseMixins.extend({
  name: 'v-progress-linear',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0,
      isVisible: true
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(helpers["f" /* convertToUnit */])(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(helpers["f" /* convertToUnit */])(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(helpers["f" /* convertToUnit */])(this.normalizedValue, '%'),
        width: Object(helpers["f" /* convertToUnit */])(Math.max(0, this.normalizedBuffer - this.normalizedValue), '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        'v-progress-linear--visible': this.isVisible,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? transitions["c" /* VFadeTransition */] : transitions["d" /* VSlideXTransition */];
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(helpers["f" /* convertToUnit */])(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = Object(helpers["l" /* getSlot */])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(helpers["f" /* convertToUnit */])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js


/* harmony default export */ var components_VProgressLinear = (VProgressLinear_VProgressLinear);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ var loadable = __webpack_exports__["a"] = (external_vue_default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(components_VProgressLinear, {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Title; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=572fcd07&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title-main",class:['align-' + _vm.align, { dark: _vm.dark }]},[_vm._ssrNode("<h4"+(_vm._ssrClass("use-text-title",_vm.color+'-color'))+" data-v-572fcd07><span data-v-572fcd07>"+_vm._ssrEscape("\n      "+_vm._s(_vm.head)+"\n    ")+"</span></h4> <p class=\"desc use-text-subtitle2\" data-v-572fcd07>"+_vm._ssrEscape("\n    "+_vm._s(_vm.desc)+"\n  ")+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=572fcd07&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    },
    head: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Title/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(226)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "572fcd07",
  "5aa87d84"
  
)

/* harmony default export */ var Title = (component.exports);
// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f8c0c0da", content, true, context)
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("e23b7040", content, true)

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("cf87dc84", content, true)

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardSubtitle */
/* unused harmony export VCardText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("4f4f805e", content, true)

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field--filled>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{background:#fff}.theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:hsla(0,0%,100%,.7)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.38)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:rgba(0,0,0,.86)}.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.26)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field--filled>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.08)}.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{background:#1e1e1e}.theme--dark.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:rgba(0,0,0,.6)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.24)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:#fff}.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.16)}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field__prefix,.v-text-field__suffix{line-height:20px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__control,.v-text-field .v-input__slot,.v-text-field fieldset{border-radius:inherit}.v-text-field.v-input--has-state .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-messages,.v-text-field .v-input__control,.v-text-field fieldset{color:inherit}.v-text-field.v-input--dense{padding-top:0}.v-text-field.v-input--dense .v-label{top:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:4px 0 2px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix{padding-right:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix{padding-left:4px}.v-text-field.v-input--dense[type=text]::-ms-clear{display:none}.v-text-field.v-input--dense .v-input__append-inner,.v-text-field.v-input--dense .v-input__prepend-inner{margin-top:0}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-application--is-ltr .v-text-field .v-input__append-inner,.v-application--is-rtl .v-text-field .v-input__prepend-inner{margin-left:auto;padding-left:4px}.v-application--is-rtl .v-text-field .v-input__append-inner{margin-right:auto;padding-right:4px}.v-text-field .v-counter{white-space:nowrap}.v-application--is-ltr .v-text-field .v-counter{margin-left:8px}.v-application--is-rtl .v-text-field .v-counter{margin-right:8px}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;white-space:nowrap;pointer-events:none}.v-application--is-ltr .v-text-field .v-label{transform-origin:top left}.v-application--is-rtl .v-text-field .v-label{transform-origin:top right}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75);pointer-events:auto}.v-text-field>.v-input__control>.v-input__slot{cursor:text}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-color:inherit;border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{background-color:currentColor;border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default;transition:color .3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-text-field__prefix{text-align:right;padding-right:4px}.v-application--is-rtl .v-text-field__prefix{text-align:left;padding-left:4px}.v-text-field__suffix{white-space:nowrap}.v-application--is-ltr .v-text-field__suffix{padding-left:4px}.v-application--is-rtl .v-text-field__suffix{padding-right:4px}.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-right:4px;padding-left:0}.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:4px;padding-right:0}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field:not(.v-text-field--is-booted) .v-label,.v-text-field:not(.v-text-field--is-booted) legend{transition:none}.v-text-field--filled,.v-text-field--full-width,.v-text-field--outlined{position:relative}.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outlined>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:52px}.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:40px}.v-text-field--outlined{border-radius:4px}.v-text-field--enclosed .v-input__append-inner,.v-text-field--enclosed .v-input__append-outer,.v-text-field--enclosed .v-input__prepend-inner,.v-text-field--enclosed .v-input__prepend-outer,.v-text-field--full-width .v-input__append-inner,.v-text-field--full-width .v-input__append-outer,.v-text-field--full-width .v-input__prepend-inner,.v-text-field--full-width .v-input__prepend-outer{margin-top:17px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer{margin-top:14px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer{margin-top:9px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer{margin-top:8px}.v-text-field--filled .v-label,.v-text-field--full-width .v-label{top:18px}.v-text-field--filled .v-label--active,.v-text-field--full-width .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--filled.v-input--dense .v-label,.v-text-field--full-width.v-input--dense .v-label{top:17px}.v-text-field--filled.v-input--dense .v-label--active,.v-text-field--full-width.v-input--dense .v-label--active{transform:translateY(-10px) scale(.75)}.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label{top:11px}.v-text-field--filled{border-radius:4px 4px 0 0}.v-text-field--filled:not(.v-text-field--single-line) input{margin-top:22px}.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input{margin-top:0}.v-text-field--filled .v-text-field__prefix,.v-text-field--filled .v-text-field__suffix{max-height:32px;margin-top:20px}.v-text-field--full-width{border-radius:0}.v-text-field--outlined .v-text-field__slot,.v-text-field--single-line .v-text-field__slot{align-items:center}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix{margin-top:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{padding-top:0;margin-bottom:8px}.v-application--is-ltr .v-text-field--reverse input{text-align:right}.v-application--is-rtl .v-text-field--reverse input{text-align:left}.v-application--is-ltr .v-text-field--reverse .v-label{transform-origin:top right}.v-application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--outlined>.v-input__control>.v-input__slot:after,.v-text-field--outlined>.v-input__control>.v-input__slot:before,.v-text-field--rounded>.v-input__control>.v-input__slot:after,.v-text-field--rounded>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outlined,.v-text-field--solo{border-radius:4px}.v-text-field--outlined{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outlined .v-label{top:18px}.v-text-field--outlined .v-label--active{transform:translateY(-24px) scale(.75)}.v-text-field--outlined.v-input--dense .v-label{top:10px}.v-text-field--outlined.v-input--dense .v-label--active{transform:translateY(-16px) scale(.75)}.v-text-field--outlined fieldset{border-collapse:collapse;border:1px solid;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:-5px;transition-duration:.3s;transition-property:color,border-width;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-text-field--outlined fieldset{padding-left:8px}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset,.v-application--is-rtl .v-text-field--outlined fieldset{padding-right:8px}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset{padding-left:8px}.v-text-field--outlined legend{line-height:11px;padding:0;transition:width .3s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-text-field--outlined legend{text-align:left}.v-application--is-rtl .v-text-field--outlined legend{text-align:right}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend{margin-left:auto}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend{margin-right:auto}.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend{margin-left:12px}.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend{margin-right:12px}.v-text-field--outlined>.v-input__control>.v-input__slot{background:transparent}.v-text-field--outlined .v-text-field__prefix{max-height:32px}.v-text-field--outlined .v-input__append-outer,.v-text-field--outlined .v-input__prepend-outer{margin-top:18px}.v-text-field--outlined.v-input--has-state fieldset,.v-text-field--outlined.v-input--is-focused fieldset{border:2px solid}.v-text-field--rounded{border-radius:28px}.v-text-field--rounded>.v-input__control>.v-input__slot{padding:0 24px}.v-text-field--shaped{border-radius:16px 16px 0 0}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo .v-input__control input{caret-color:auto}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:38px}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:7px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3dc908a0", content, true)

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-counter{color:rgba(0,0,0,.6)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-572fcd07],.use-text-title[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-572fcd07]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-572fcd07]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-572fcd07]{font-size:28px;line-height:44px}}.use-text-title2[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-572fcd07]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-572fcd07]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-572fcd07]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-572fcd07]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-572fcd07]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-572fcd07]{font-size:16px;line-height:24px}}.use-text-caption[data-v-572fcd07],.use-text-paragraph[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-572fcd07]{font-size:14px;line-height:22px}}.use-hidden[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-572fcd07]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-572fcd07]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-572fcd07]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-572fcd07]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-572fcd07]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-572fcd07]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-572fcd07]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}.title-main[data-v-572fcd07],a[data-v-572fcd07],body[data-v-572fcd07],h1[data-v-572fcd07],h2[data-v-572fcd07],h3[data-v-572fcd07],h4[data-v-572fcd07],h5[data-v-572fcd07],h6[data-v-572fcd07],html[data-v-572fcd07],p[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}.title-main[data-v-572fcd07]{margin-bottom:24px}[dir=ltr] .title-main.align-left[data-v-572fcd07]{text-align:left}[dir=rtl] .title-main.align-left[data-v-572fcd07]{text-align:right}[dir=ltr] .title-main.align-left h4[data-v-572fcd07]:before{left:-4px}[dir=rtl] .title-main.align-left h4[data-v-572fcd07]:before{right:-4px}[dir=ltr] .title-main.align-right[data-v-572fcd07]{text-align:right}[dir=rtl] .title-main.align-right[data-v-572fcd07]{text-align:left}[dir=ltr] .title-main.align-right h4[data-v-572fcd07]:before{right:-4px}[dir=rtl] .title-main.align-right h4[data-v-572fcd07]:before{left:-4px}.title-main.align-center[data-v-572fcd07]{text-align:center}.title-main.align-center h4[data-v-572fcd07]:before{width:80%}[dir=ltr] .title-main.align-center h4[data-v-572fcd07]:before{left:10%}[dir=rtl] .title-main.align-center h4[data-v-572fcd07]:before{right:10%}.title-main h4[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;text-transform:capitalize;margin-bottom:8px;position:relative;display:inline-block}.theme--light .title-main h4[data-v-572fcd07]{color:rgba(0,0,0,.87)}.theme--dark .title-main h4[data-v-572fcd07]{color:#fff}.title-main h4 span[data-v-572fcd07]{position:relative}.theme--light .title-main h4.primary-color[data-v-572fcd07]:before{background-color:var(--v-primarylight-base)}.theme--dark .title-main h4.primary-color[data-v-572fcd07]:before{background-color:var(--v-primarydark-base)}.theme--light .title-main h4.secondary-color[data-v-572fcd07]:before{background-color:var(--v-secondarylight-base)}.theme--dark .title-main h4.secondary-color[data-v-572fcd07]:before{background-color:var(--v-secondarydark-base)}.title-main h4[data-v-572fcd07]:before{content:\"\";height:15px;width:90%;position:absolute;bottom:10px;z-index:0}[dir=ltr] .title-main h4[data-v-572fcd07]:before{left:0}[dir=rtl] .title-main h4[data-v-572fcd07]:before{right:0}@media(max-width:599px){.title-main h4[data-v-572fcd07]:before{height:8px}}.title-main.dark h4[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;color:#fff}.title-main.dark h4[data-v-572fcd07]:before{background-color:hsla(0,0%,100%,.5)!important}.title-main.dark .desc[data-v-572fcd07]{position:relative;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("987b72c2", content, true, context)
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("63c9496b", content, true)

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCounter/VCounter.sass
var VCounter = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/VCounter.js
// Styles
 // Mixins



/* @vue/component */

/* harmony default export */ var VCounter_VCounter = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-counter',
  functional: true,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    max: [Number, String]
  },

  render(h, ctx) {
    const {
      props
    } = ctx;
    const max = parseInt(props.max, 10);
    const value = parseInt(props.value, 10);
    const content = max ? `${value} / ${max}` : String(props.value);
    const isGreater = max && value > max;
    return h('div', {
      staticClass: 'v-counter',
      class: {
        'error--text': isGreater,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      }
    }, content);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/index.js


/* harmony default export */ var components_VCounter = (VCounter_VCounter);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(5);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/intersectable/index.js
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return external_vue_default.a.extend({
    name: 'intersectable',

    mounted() {
      intersect["a" /* default */].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      });
    },

    destroyed() {
      intersect["a" /* default */].unbind(this.$el);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          Object(console["c" /* consoleWarn */])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js + 2 modules
var loadable = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dom.js
var dom = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Directives


 // Utilities



 // Types


const baseMixins = Object(mixins["a" /* default */])(VInput["a" /* default */], intersectable({
  onVisible: ['onResize', 'tryAutofocus']
}), loadable["a" /* default */]);
const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* @vue/component */

/* harmony default export */ var VTextField_VTextField = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-text-field',
  directives: {
    resize: resize["a" /* default */],
    ripple: ripple["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: '$clear'
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    persistentPlaceholder: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    badInput: false,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: false,
    isClearing: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-text-field': true,
        'v-text-field--full-width': this.fullWidth,
        'v-text-field--prefix': this.prefix,
        'v-text-field--single-line': this.isSingle,
        'v-text-field--solo': this.isSolo,
        'v-text-field--solo-inverted': this.soloInverted,
        'v-text-field--solo-flat': this.flat,
        'v-text-field--filled': this.filled,
        'v-text-field--is-booted': this.isBooted,
        'v-text-field--enclosed': this.isEnclosed,
        'v-text-field--reverse': this.reverse,
        'v-text-field--outlined': this.outlined,
        'v-text-field--placeholder': this.placeholder,
        'v-text-field--rounded': this.rounded,
        'v-text-field--shaped': this.shaped
      };
    },

    computedColor() {
      const computedColor = validatable["a" /* default */].options.computed.computedColor.call(this);
      if (!this.soloInverted || !this.isFocused) return computedColor;
      return this.color || 'primary';
    },

    computedCounterValue() {
      if (typeof this.counterValue === 'function') {
        return this.counterValue(this.internalValue);
      }

      return [...(this.internalValue || '').toString()].length;
    },

    hasCounter() {
      return this.counter !== false && this.counter != null;
    },

    hasDetails() {
      return VInput["a" /* default */].options.computed.hasDetails.call(this) || this.hasCounter;
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', this.lazyValue);
      }

    },

    isDirty() {
      var _this$lazyValue;

      return ((_this$lazyValue = this.lazyValue) == null ? void 0 : _this$lazyValue.toString().length) > 0 || this.badInput;
    },

    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },

    isLabelActive() {
      return this.isDirty || dirtyTypes.includes(this.type);
    },

    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },

    isSolo() {
      return this.solo || this.soloInverted;
    },

    labelPosition() {
      let offset = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      if (this.labelValue && this.prependWidth) offset -= this.prependWidth;
      return this.$vuetify.rtl === this.reverse ? {
        left: offset,
        right: 'auto'
      } : {
        left: 'auto',
        right: offset
      };
    },

    showLabel() {
      return this.hasLabel && !(this.isSingle && this.labelValue);
    },

    labelValue() {
      return this.isFocused || this.isLabelActive || this.persistentPlaceholder;
    }

  },
  watch: {
    // labelValue: 'setLabelWidth', // moved to mounted, see #11533
    outlined: 'setLabelWidth',

    label() {
      this.$nextTick(this.setLabelWidth);
    },

    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },

    isFocused: 'updateValue',

    value(val) {
      this.lazyValue = val;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('box')) {
      Object(console["a" /* breaking */])('box', 'filled', this);
    }
    /* istanbul ignore next */


    if (this.$attrs.hasOwnProperty('browser-autocomplete')) {
      Object(console["a" /* breaking */])('browser-autocomplete', 'autocomplete', this);
    }
    /* istanbul ignore if */


    if (this.shaped && !(this.filled || this.outlined || this.isSolo)) {
      Object(console["c" /* consoleWarn */])('shaped should be used with either filled or outlined', this);
    }
  },

  mounted() {
    // #11533
    this.$watch(() => this.labelValue, this.setLabelWidth);
    this.autofocus && this.tryAutofocus();
    requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },

    /** @public */
    blur(e) {
      // https://github.com/vuetifyjs/vuetify/issues/5913
      // Safari tab order gets broken if called synchronous
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },

    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => this.internalValue = null);
    },

    genAppendSlot() {
      const slot = [];

      if (this.$slots['append-outer']) {
        slot.push(this.$slots['append-outer']);
      } else if (this.appendOuterIcon) {
        slot.push(this.genIcon('appendOuter'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    genPrependInnerSlot() {
      const slot = [];

      if (this.$slots['prepend-inner']) {
        slot.push(this.$slots['prepend-inner']);
      } else if (this.prependInnerIcon) {
        slot.push(this.genIcon('prependInner'));
      }

      return this.genSlot('prepend', 'inner', slot);
    },

    genIconSlot() {
      const slot = [];

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'inner', slot);
    },

    genInputSlot() {
      const input = VInput["a" /* default */].options.methods.genInputSlot.call(this);
      const prepend = this.genPrependInnerSlot();

      if (prepend) {
        input.children = input.children || [];
        input.children.unshift(prepend);
      }

      return input;
    },

    genClearIcon() {
      if (!this.clearable) return null; // if the text field has no content then don't display the clear icon.
      // We add an empty div because other controls depend on a ref to append inner

      if (!this.isDirty) {
        return this.genSlot('append', 'inner', [this.$createElement('div')]);
      }

      return this.genSlot('append', 'inner', [this.genIcon('clear', this.clearableCallback)]);
    },

    genCounter() {
      var _ref;

      if (!this.hasCounter) return null;
      const max = this.counter === true ? this.attrs$.maxlength : this.counter;
      const props = {
        dark: this.dark,
        light: this.light,
        max,
        value: this.computedCounterValue
      };
      return (_ref = this.$scopedSlots.counter == null ? void 0 : this.$scopedSlots.counter({
        props
      })) != null ? _ref : this.$createElement(components_VCounter, {
        props
      });
    },

    genControl() {
      return VInput["a" /* default */].options.methods.genControl.call(this);
    },

    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },

    genFieldset() {
      if (!this.outlined) return null;
      return this.$createElement('fieldset', {
        attrs: {
          'aria-hidden': true
        }
      }, [this.genLegend()]);
    },

    genLabel() {
      if (!this.showLabel) return null;
      const data = {
        props: {
          absolute: true,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(VLabel["a" /* default */], data, this.$slots.label || this.label);
    },

    genLegend() {
      const width = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0;
      const span = this.$createElement('span', {
        domProps: {
          innerHTML: '&#8203;'
        }
      });
      return this.$createElement('legend', {
        style: {
          width: !this.isSingle ? Object(helpers["f" /* convertToUnit */])(width) : undefined
        }
      }, [span]);
    },

    genInput() {
      const listeners = Object.assign({}, this.listeners$);
      delete listeners.change; // Change should not be bound externally

      const {
        title,
        ...inputAttrs
      } = this.attrs$;
      return this.$createElement('input', {
        style: {},
        domProps: {
          value: this.type === 'number' && Object.is(this.lazyValue, -0) ? '-0' : this.lazyValue
        },
        attrs: { ...inputAttrs,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.persistentPlaceholder || this.isFocused || !this.hasLabel ? this.placeholder : undefined,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(listeners, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: 'input',
        directives: [{
          name: 'resize',
          modifiers: {
            quiet: true
          },
          value: this.onResize
        }]
      });
    },

    genMessages() {
      if (!this.showDetails) return null;
      const messagesNode = VInput["a" /* default */].options.methods.genMessages.call(this);
      const counterNode = this.genCounter();
      return this.$createElement('div', {
        staticClass: 'v-text-field__details'
      }, [messagesNode, counterNode]);
    },

    genTextFieldSlot() {
      return this.$createElement('div', {
        staticClass: 'v-text-field__slot'
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
    },

    genAffix(type) {
      return this.$createElement('div', {
        class: `v-text-field__${type}`,
        ref: type
      }, this[type]);
    },

    onBlur(e) {
      this.isFocused = false;
      e && this.$nextTick(() => this.$emit('blur', e));
    },

    onClick() {
      if (this.isFocused || this.isDisabled || !this.$refs.input) return;
      this.$refs.input.focus();
    },

    onFocus(e) {
      if (!this.$refs.input) return;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root) return;

      if (root.activeElement !== this.$refs.input) {
        return this.$refs.input.focus();
      }

      if (!this.isFocused) {
        this.isFocused = true;
        e && this.$emit('focus', e);
      }
    },

    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      if (e.keyCode === helpers["p" /* keyCodes */].enter) this.$emit('change', this.internalValue);
      this.$emit('keydown', e);
    },

    onMouseDown(e) {
      // Prevent input from being blurred
      if (e.target !== this.$refs.input) {
        e.preventDefault();
        e.stopPropagation();
      }

      VInput["a" /* default */].options.methods.onMouseDown.call(this, e);
    },

    onMouseUp(e) {
      if (this.hasMouseDown) this.focus();
      VInput["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    setLabelWidth() {
      if (!this.outlined) return;
      this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0;
    },

    setPrefixWidth() {
      if (!this.$refs.prefix) return;
      this.prefixWidth = this.$refs.prefix.offsetWidth;
    },

    setPrependWidth() {
      if (!this.outlined || !this.$refs['prepend-inner']) return;
      this.prependWidth = this.$refs['prepend-inner'].offsetWidth;
    },

    tryAutofocus() {
      if (!this.autofocus || typeof document === 'undefined' || !this.$refs.input) return false;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root || root.activeElement === this.$refs.input) return false;
      this.$refs.input.focus();
      return true;
    },

    updateValue(val) {
      // Sets validationState from validatable
      this.hasColor = val;

      if (val) {
        this.initialValue = this.lazyValue;
      } else if (this.initialValue !== this.lazyValue) {
        this.$emit('change', this.lazyValue);
      }
    },

    onResize() {
      this.setLabelWidth();
      this.setPrefixWidth();
      this.setPrependWidth();
    }

  }
}));

/***/ }),
/* 237 */,
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_62fa9821_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_62fa9821_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_62fa9821_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_62fa9821_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_62fa9821_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-62fa9821],.use-text-title[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-62fa9821]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-62fa9821]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-62fa9821]{font-size:28px;line-height:44px}}.use-text-title2[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-62fa9821]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-62fa9821]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-62fa9821]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-62fa9821]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-62fa9821]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-62fa9821]{font-size:16px;line-height:24px}}.use-text-caption[data-v-62fa9821],.use-text-paragraph[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-62fa9821]{font-size:14px;line-height:22px}}.use-hidden[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-62fa9821]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-62fa9821]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-62fa9821]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-62fa9821]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-62fa9821]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-62fa9821]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-62fa9821]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}.notification[data-v-62fa9821],a[data-v-62fa9821],body[data-v-62fa9821],h1[data-v-62fa9821],h2[data-v-62fa9821],h3[data-v-62fa9821],h4[data-v-62fa9821],h5[data-v-62fa9821],h6[data-v-62fa9821],html[data-v-62fa9821],p[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif}.notification[data-v-62fa9821]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-62fa9821]{width:80%}}.notification[data-v-62fa9821]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:#fff;background:#424242}@media(min-width:600px){.notification[data-v-62fa9821]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-62fa9821]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-62fa9821]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-62fa9821]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-62fa9821]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-62fa9821]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-62fa9821]{width:100%}@media(min-width:600px){.notification .button.v-btn[data-v-62fa9821]{width:150px}}.action[data-v-62fa9821]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:599px){.action[data-v-62fa9821]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=62fa9821&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{staticClass:"notification",attrs:{"timeout":-1},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n    เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของผู้ใช้ การใช้เว็บไซต์ของเราแสดงว่าคุณยินยอมให้ใช้คุกกี้ทั้งหมดตามนโยบายคุกกี้ของเรา\n  ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"secondary"},on:{"click":function($event){_vm.snackbar = false}}},[_vm._v("\n    ยอมรับ\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=62fa9821&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(264);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62fa9821",
  "c7e52d28"
  
)

/* harmony default export */ var Notification = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})

// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2dae4d2b", content, true, context)
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("71253d03", content, true, context)
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("efd00924", content, true, context)
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("55dac383", content, true, context)
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c20e5b86", content, true, context)
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("084d54e0", content, true, context)
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3f68e1a6", content, true, context)
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f8bd38ea", content, true, context)
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ad77db88", content, true, context)
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("14864010", content, true, context)
};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("61e2895f", content, true, context)
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fb35e9e", content, true, context)
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e238e1da", content, true, context)
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("57844a4f", content, true, context)
};

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "l"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "l"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          mouseenter: () => window.clearTimeout(this.activeTimeout),
          mouseleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("773a6f08", content, true, context)
};

/***/ }),
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_74c84c12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_74c84c12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_74c84c12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_74c84c12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_74c84c12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-74c84c12],.use-text-title[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-74c84c12]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-74c84c12]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-74c84c12]{font-size:28px;line-height:44px}}.use-text-title2[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-74c84c12]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-74c84c12]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-74c84c12]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-74c84c12]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-74c84c12]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-74c84c12]{font-size:16px;line-height:24px}}.use-text-caption[data-v-74c84c12],.use-text-paragraph[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-74c84c12]{font-size:14px;line-height:22px}}.use-hidden[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-74c84c12]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-74c84c12]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-74c84c12]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-74c84c12]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-74c84c12]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-74c84c12]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-74c84c12]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}.hero-content[data-v-74c84c12],a[data-v-74c84c12],body[data-v-74c84c12],h1[data-v-74c84c12],h2[data-v-74c84c12],h3[data-v-74c84c12],h4[data-v-74c84c12],h5[data-v-74c84c12],h6[data-v-74c84c12],html[data-v-74c84c12],p[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif}.hero-content[data-v-74c84c12]{position:relative}@media(max-width:599px){.hero-content[data-v-74c84c12]{background-size:50%}.theme--light .hero-content[data-v-74c84c12]{background-color:var(--v-primarylight-base);position:relative}.theme--light .hero-content[data-v-74c84c12]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;opacity:.7}.theme--dark .hero-content[data-v-74c84c12]{background-color:var(--v-primarydark-base);position:relative}.theme--dark .hero-content[data-v-74c84c12]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.7}}.hero-content>.container[data-v-74c84c12]{padding-left:0!important;padding-right:0!important;margin:0 auto}@media(min-width:1280px){.hero-content[data-v-74c84c12]{margin-bottom:0}[dir=ltr] .hero-content[data-v-74c84c12]{padding-left:48px}[dir=rtl] .hero-content[data-v-74c84c12]{padding-right:48px}}.banner-text[data-v-74c84c12],.banner-wrap[data-v-74c84c12]{position:relative}.banner-text[data-v-74c84c12]{z-index:4;padding:32px 0;margin-top:96px}@media(min-width:960px){.theme--light .banner-text[data-v-74c84c12]{color:rgba(0,0,0,.87)}.theme--dark .banner-text[data-v-74c84c12]{color:#fff}}@media(max-width:1279px){.banner-text[data-v-74c84c12]{padding:48px 0}}@media(max-width:959px){.banner-text[data-v-74c84c12]{padding:8px 0 32px;max-width:640px;margin-left:auto;margin-right:auto;text-align:center}}.title[data-v-74c84c12]{margin-top:96px;margin-bottom:24px;display:inline-block}.title[data-v-74c84c12],.title h3[data-v-74c84c12]{font-family:\"IBM Plex Thai\",sans-serif;position:relative}.title[data-v-74c84c12]:before{content:\"\";height:20px;width:90%;position:absolute;bottom:10px;z-index:0}.theme--light .title[data-v-74c84c12]:before{background:var(--v-secondarylight-base)}.theme--dark .title[data-v-74c84c12]:before{background:var(--v-secondarydark-base)}.theme--light .title[data-v-74c84c12]:before{opacity:1}.theme--dark .title[data-v-74c84c12]:before{opacity:.7}[dir=ltr] .title[data-v-74c84c12]:before{left:0}[dir=rtl] .title[data-v-74c84c12]:before{right:0}@media(max-width:599px){.title[data-v-74c84c12]:before{height:10px}[dir=ltr] .title[data-v-74c84c12]:before{left:5%}[dir=rtl] .title[data-v-74c84c12]:before{right:5%}}@media(max-width:1279px){.title[data-v-74c84c12]{margin-top:120px}}@media(max-width:599px){.title[data-v-74c84c12]{margin-top:40px}}.subtitle[data-v-74c84c12]{margin-bottom:24px;font-size:24px;font-weight:var(--font-regular)}@media(min-width:1280px){[dir=ltr] .subtitle[data-v-74c84c12]{padding-right:64px}[dir=rtl] .subtitle[data-v-74c84c12]{padding-left:64px}}@media(min-width:960px){.subtitle[data-v-74c84c12]{margin-bottom:40px}}@media(max-width:599px){.subtitle[data-v-74c84c12]{font-size:20px}}.deco-grid[data-v-74c84c12]{position:static}.deco-banner .artwork-bg[data-v-74c84c12]{position:absolute!important;top:-420px;border-radius:40px;transform:rotate(-10deg);width:120%;overflow:hidden;height:1024px}[dir=ltr] .deco-banner .artwork-bg[data-v-74c84c12]{left:-100px}[dir=rtl] .deco-banner .artwork-bg[data-v-74c84c12]{right:-100px}@media(max-width:959px){.deco-banner .artwork-bg[data-v-74c84c12]{height:1120px}}.theme--light .deco-banner .artwork-bg[data-v-74c84c12]{background-color:var(--v-primarylight-base);position:relative}.theme--light .deco-banner .artwork-bg[data-v-74c84c12]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;opacity:.7}.theme--dark .deco-banner .artwork-bg[data-v-74c84c12]{background-color:var(--v-primarydark-base);position:relative}.theme--dark .deco-banner .artwork-bg[data-v-74c84c12]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.7}.deco-banner .artwork-bg .oval[data-v-74c84c12]{width:250px;height:250px;border-radius:50%;position:absolute;bottom:60px}.theme--light .deco-banner .artwork-bg .oval[data-v-74c84c12]{background:var(--v-secondarylight-base)}.theme--dark .deco-banner .artwork-bg .oval[data-v-74c84c12]{background:var(--v-secondarydark-base)}[dir=ltr] .deco-banner .artwork-bg .oval[data-v-74c84c12]{right:27%}[dir=rtl] .deco-banner .artwork-bg .oval[data-v-74c84c12]{left:27%}@media(max-width:1279px){[dir=ltr] .deco-banner .artwork-bg .oval[data-v-74c84c12]{right:20%}[dir=rtl] .deco-banner .artwork-bg .oval[data-v-74c84c12]{left:20%}}.deco-banner .artwork-bg img[data-v-74c84c12]{z-index:5;position:absolute;bottom:-60px;width:400px;transform:rotate(10deg)}[dir=ltr] .deco-banner .artwork-bg img[data-v-74c84c12]{right:20%}[dir=rtl] .deco-banner .artwork-bg img[data-v-74c84c12]{left:20%}@media(max-width:1279px){[dir=ltr] .deco-banner .artwork-bg img[data-v-74c84c12]{right:5%}[dir=rtl] .deco-banner .artwork-bg img[data-v-74c84c12]{left:5%}}.parallax-scene[data-v-74c84c12]{transform:rotate(10deg);transform-origin:top;width:1200px;position:relative;margin:0 auto}[dir=ltr] .parallax-scene[data-v-74c84c12]{right:240px}[dir=rtl] .parallax-scene[data-v-74c84c12]{left:240px}.parallax-scene.back[data-v-74c84c12]{z-index:4}.parallax-scene.front[data-v-74c84c12]{z-index:6}.parallax-scene span[data-v-74c84c12]{display:block;position:relative}@media(max-width:1279px){.parallax-scene[data-v-74c84c12]{display:none}}.icon-one[data-v-74c84c12]{top:-1070px;width:510px;height:600px;background:url(/images/education/parallax-one.png) no-repeat}[dir=ltr] .icon-one[data-v-74c84c12]{right:-70%}[dir=rtl] .icon-one[data-v-74c84c12]{left:-70%}.icon-two[data-v-74c84c12]{width:450px;height:560px;top:-530px;background:url(/images/education/parallax-two.png) no-repeat}[dir=ltr] .icon-two[data-v-74c84c12]{right:-65%}[dir=rtl] .icon-two[data-v-74c84c12]{left:-65%}.icon-three[data-v-74c84c12]{width:400px;height:560px;top:600px;background:url(/images/education/parallax-three.png) no-repeat}[dir=ltr] .icon-three[data-v-74c84c12]{right:-80%}[dir=rtl] .icon-three[data-v-74c84c12]{left:-80%}.icon-four[data-v-74c84c12]{width:400px;height:560px;top:20px;background:url(/images/education/parallax-four.png) no-repeat}[dir=ltr] .icon-four[data-v-74c84c12]{right:-85%}[dir=rtl] .icon-four[data-v-74c84c12]{left:-85%}.search-banner[data-v-74c84c12]{margin-top:24px;font-size:18px;overflow:visible}@media(min-width:960px){.search-banner[data-v-74c84c12]{max-width:none}}@media(max-width:599px){.search-banner[data-v-74c84c12]{margin-top:32px}}.search-banner[data-v-74c84c12]  .v-text-field--filled>.v-input__control>.v-input__slot{background:none!important;min-height:0;border:none;padding:0!important}.search-banner[data-v-74c84c12]  .v-text-field--filled>.v-input__control>.v-input__slot .v-input__append-inner{margin-top:4px}.search-banner[data-v-74c84c12]  .v-text-field--filled>.v-input__control>.v-input__slot:after,.search-banner[data-v-74c84c12]  .v-text-field--filled>.v-input__control>.v-input__slot:before{display:none}.search-banner .v-text-field--full-width .v-label--active[data-v-74c84c12],.search-banner[data-v-74c84c12]  .v-text-field--filled .v-label--active{transform:translateY(-20px) scale(.85);transform-origin:top left}.search[data-v-74c84c12]{font-size:18px;width:100%}[data-v-74c84c12] .search.v-text-field input{margin:0;padding:16px;max-height:none;height:75px}@media(min-width:960px){.theme--is-ltr[data-v-74c84c12]  .search.v-text-field input{padding:32px 80px 24px 24px}.theme--is-rtl[data-v-74c84c12]  .search.v-text-field input{padding:32px 24px 24px 80px}}.search[data-v-74c84c12]  label{top:28px!important;font-size:20px}[dir=ltr] .search[data-v-74c84c12]  label{left:8px!important}[dir=rtl] .search[data-v-74c84c12]  label{right:8px!important}.action[data-v-74c84c12]{position:absolute;top:0;height:100%;display:flex;align-items:center;padding:16px}[dir=ltr] .action[data-v-74c84c12]{right:0}[dir=rtl] .action[data-v-74c84c12]{left:0}.button.v-btn:not(.v-btn--round).v-size--default[data-v-74c84c12]{width:48px;height:48px;align-items:center;color:var(--v-primary-base)}.button.v-btn:not(.v-btn--round).v-size--default i[data-v-74c84c12]{line-height:48px;font-size:42px}.btn-white[data-v-74c84c12]{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4de43e54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4de43e54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4de43e54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4de43e54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4de43e54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-4de43e54],.use-text-title[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-4de43e54]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4de43e54]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4de43e54]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4de43e54]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4de43e54]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4de43e54]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4de43e54]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4de43e54]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4de43e54]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4de43e54],.use-text-paragraph[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4de43e54]{font-size:14px;line-height:22px}}.use-hidden[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-4de43e54]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4de43e54]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4de43e54]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4de43e54]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4de43e54]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4de43e54]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4de43e54]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-4de43e54],body[data-v-4de43e54],h1[data-v-4de43e54],h2[data-v-4de43e54],h3[data-v-4de43e54],h4[data-v-4de43e54],h5[data-v-4de43e54],h6[data-v-4de43e54],html[data-v-4de43e54],p[data-v-4de43e54]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-4de43e54]{position:relative;width:100%}@media(min-width:600px){.root[data-v-4de43e54]{padding-bottom:20px}}@media(min-width:600px)and (max-width:959px){.root[data-v-4de43e54]{padding-top:80px}}@media(max-width:599px){.root[data-v-4de43e54]{padding-bottom:0}}.counter-item[data-v-4de43e54]{align-items:center;display:flex;margin:40px}@media(max-width:599px){.counter-item[data-v-4de43e54]{margin:16px 32px}}.counter-item figure[data-v-4de43e54]{border:1px solid var(--v-primary-base);border-radius:10px;transform:rotate(45deg);width:100px;height:100px;line-height:100px;text-align:center;vertical-align:middle}[dir=ltr] .counter-item figure[data-v-4de43e54]{margin-right:40px}[dir=rtl] .counter-item figure[data-v-4de43e54]{margin-left:40px}@media(max-width:599px){.counter-item figure[data-v-4de43e54]{width:70px;height:70px;line-height:70px}}.counter-item figure img[data-v-4de43e54]{transform:translateY(10px) rotate(-45deg);width:55%;max-height:55%;margin:0 auto}.theme--light .counter-item figure img[data-v-4de43e54]{filter:none}.theme--dark .counter-item figure img[data-v-4de43e54]{filter:invert(1)}.counter-item figure[data-v-4de43e54]:after{content:\"\";background:var(--v-primary-base);width:23px;height:23px;border-radius:5px;position:absolute;bottom:20px;right:-10px}@media(max-width:599px){.counter-item .text[data-v-4de43e54]{flex:1}}.counter-item h4[data-v-4de43e54]{font-size:36px}@media(max-width:959px){.counter-item h4[data-v-4de43e54]{margin-top:24px}}@media(max-width:599px){.counter-item h4[data-v-4de43e54]{font-size:24px}}.theme--light .counter-item h6[data-v-4de43e54]{color:rgba(0,0,0,.54)}.theme--dark .counter-item h6[data-v-4de43e54]{color:hsla(0,0%,100%,.7)}@media(min-width:600px)and (max-width:959px){.counter-item[data-v-4de43e54]{flex-direction:column;text-align:center}}@media(max-width:599px){.counter-item[data-v-4de43e54]{justify-content:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_e5bb8512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_e5bb8512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_e5bb8512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_e5bb8512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_e5bb8512_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-e5bb8512],.use-text-title[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-e5bb8512]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-e5bb8512]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-e5bb8512]{font-size:28px;line-height:44px}}.use-text-title2[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-e5bb8512]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-e5bb8512]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-e5bb8512]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-e5bb8512]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-e5bb8512]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-e5bb8512]{font-size:16px;line-height:24px}}.use-text-caption[data-v-e5bb8512],.use-text-paragraph[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-e5bb8512]{font-size:14px;line-height:22px}}.use-hidden[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-e5bb8512]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e5bb8512]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e5bb8512]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e5bb8512]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e5bb8512]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e5bb8512]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e5bb8512]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-e5bb8512],body[data-v-e5bb8512],h1[data-v-e5bb8512],h2[data-v-e5bb8512],h3[data-v-e5bb8512],h4[data-v-e5bb8512],h5[data-v-e5bb8512],h6[data-v-e5bb8512],html[data-v-e5bb8512],p[data-v-e5bb8512]{font-family:\"IBM Plex Thai\",sans-serif}.general-card[data-v-e5bb8512]{position:relative;width:250px;height:400px;padding:3px}.general-card figure[data-v-e5bb8512]{margin:0;width:100%;height:170px;border-radius:6px;overflow:hidden}.general-card figure img[data-v-e5bb8512]{width:100%;min-height:100%}.general-card .property[data-v-e5bb8512]{display:flex;justify-content:space-between;margin-bottom:16px}.general-card .property strong[data-v-e5bb8512]{font-weight:var(--font-bold)}.desc[data-v-e5bb8512]{padding:16px}.desc p[data-v-e5bb8512]{overflow:hidden;height:50px}.desc h6[data-v-e5bb8512]{font-family:\"Lato\",sans-serif!important;font-weight:var(--font-bold)}.desc .button[data-v-e5bb8512]{width:100%;border-width:2px;padding:4px 24px!important}.rating i[data-v-e5bb8512]{color:#ffc107}.category-card[data-v-e5bb8512]{border-radius:16px;margin-bottom:24px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base);text-align:center;display:flex}.theme--light .category-card[data-v-e5bb8512]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .category-card[data-v-e5bb8512]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-e5bb8512]{height:250px}@media(max-width:599px){.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-e5bb8512]{height:120px}}.category-card[data-v-e5bb8512]  .v-btn__content{width:100%;height:100%;display:block}.category-card .figure[data-v-e5bb8512]{margin:0;display:block}[dir=ltr] .category-card .figure[data-v-e5bb8512]{margin-left:-2px}[dir=rtl] .category-card .figure[data-v-e5bb8512]{margin-right:-2px}.category-card .figure img[data-v-e5bb8512]{width:100%;position:relative}@media(min-width:1280px){.category-card:hover .property[data-v-e5bb8512]{padding:32px 48px}.category-card:hover .property .title-category[data-v-e5bb8512]:after{width:80%}[dir=ltr] .category-card:hover .property .title-category[data-v-e5bb8512]:after{left:0}[dir=rtl] .category-card:hover .property .title-category[data-v-e5bb8512]:after{right:0}}@media(min-width:1280px)and (min-width:1280px){.category-card:hover .property[data-v-e5bb8512]{height:80%;bottom:0;opacity:1}.category-card:hover .property .desc-category[data-v-e5bb8512]{opacity:1;bottom:0;height:70px}}.category-card .property[data-v-e5bb8512]{transition:all .3s cubic-bezier(0,.81,1,.97);position:absolute;width:100%;height:25%;padding:16px 48px;bottom:0;border-radius:16px;color:#fff;-webkit-backdrop-filter:saturate(100%) blur(10px);backdrop-filter:saturate(100%) blur(10px);background:rgba(0,0,0,.32)}[dir=ltr] .category-card .property[data-v-e5bb8512]{text-align:left}[dir=rtl] .category-card .property[data-v-e5bb8512]{text-align:right}[dir=ltr] .category-card .property[data-v-e5bb8512]{left:0}[dir=rtl] .category-card .property[data-v-e5bb8512]{right:0}@media(max-width:1279px){.category-card .property[data-v-e5bb8512]{padding:16px;bottom:0}.category-card .property .desc-category[data-v-e5bb8512]{display:none}}@media(max-width:599px){.category-card .property[data-v-e5bb8512]{padding:4px 16px;border-radius:12px;height:30%}}.desc-category[data-v-e5bb8512]{margin-top:40px;font-size:22px;font-weight:var(--font-regular);white-space:normal;height:0;opacity:0;display:block;overflow:hidden}.title-category[data-v-e5bb8512]{font-weight:var(--font-bold);font-size:24px;white-space:nowrap;position:relative;display:block;text-overflow:ellipsis}@media(max-width:599px){.title-category[data-v-e5bb8512]{overflow:hidden;font-size:14px;text-align:center;line-height:28px}}.title-category[data-v-e5bb8512]:after{content:\"\";height:2px;background:var(--v-primary-base);width:0;position:absolute;bottom:-10px;z-index:0;transition:all .2s cubic-bezier(.42,.16,.21,.93);transition-delay:.3s}[dir=ltr] .title-category[data-v-e5bb8512]:after{left:50%}[dir=rtl] .title-category[data-v-e5bb8512]:after{right:50%}.card-wrap[data-v-e5bb8512]{position:relative}.card-wrap .fold[data-v-e5bb8512]:before{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:80%;bottom:-25px}.theme--light .card-wrap .fold[data-v-e5bb8512]:before{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-e5bb8512]:before{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-e5bb8512]:before{background-color:#fff}.theme--dark .card-wrap .fold[data-v-e5bb8512]:before{background-color:#424242}.theme--light .card-wrap .fold[data-v-e5bb8512]:before{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-e5bb8512]:before{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.card-wrap .fold[data-v-e5bb8512]:after{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:90%;bottom:-15px}.theme--light .card-wrap .fold[data-v-e5bb8512]:after{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-e5bb8512]:after{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-e5bb8512]:after{background-color:#fff}.theme--dark .card-wrap .fold[data-v-e5bb8512]:after{background-color:#424242}.theme--light .card-wrap .fold[data-v-e5bb8512]:after{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-e5bb8512]:after{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.blog-card[data-v-e5bb8512]{display:flex;margin-bottom:48px;align-items:center;position:relative}@media(max-width:599px){.blog-card[data-v-e5bb8512]{margin-bottom:24px}}.blog-card[data-v-e5bb8512]:before{border-radius:15px;content:\"\";width:100px;height:100px;transform:rotate(45deg);background:var(--v-secondary-base);opacity:.1;position:absolute;top:-10px}[dir=ltr] .blog-card[data-v-e5bb8512]:before{left:-25px}[dir=rtl] .blog-card[data-v-e5bb8512]:before{right:-25px}.blog-card .text a.v-btn[data-v-e5bb8512]{padding:0;position:relative;text-transform:none;z-index:1;white-space:inherit}.theme--light .blog-card .text a.v-btn[data-v-e5bb8512]{color:rgba(0,0,0,.87)}.theme--dark .blog-card .text a.v-btn[data-v-e5bb8512]{color:#fff}.blog-card .text>a.v-btn[data-v-e5bb8512]{font-weight:var(--font-regular)}.theme--light .blog-card .text>a.v-btn[data-v-e5bb8512]{color:rgba(0,0,0,.54)}.theme--dark .blog-card .text>a.v-btn[data-v-e5bb8512]{color:hsla(0,0%,100%,.7)}.blog-card .text h4[data-v-e5bb8512]{line-height:normal}.blog-card .text h4[data-v-e5bb8512]:before{border-radius:10px;content:\"\";width:50px;height:50px;transform:rotate(45deg);position:absolute;top:-6px}.theme--light .blog-card .text h4[data-v-e5bb8512]:before{background:var(--v-secondarylight-base)}.theme--dark .blog-card .text h4[data-v-e5bb8512]:before{background:var(--v-secondarydark-base)}[dir=ltr] .blog-card .text h4[data-v-e5bb8512]:before{left:-25px}[dir=rtl] .blog-card .text h4[data-v-e5bb8512]:before{right:-25px}.blog-card .text h4 a.v-btn[data-v-e5bb8512]{display:block;font-size:24px;font-weight:var(--font-medium);transition:all .3s ease;height:80px}@media(max-width:599px){.blog-card .text h4 a.v-btn[data-v-e5bb8512]{font-size:16px;line-height:22px}}.blog-card .text h4 a.v-btn[data-v-e5bb8512]:hover{color:var(--v-primary-base)}.blog-card .date[data-v-e5bb8512]{text-align:center}[dir=ltr] .blog-card .date[data-v-e5bb8512]{margin-left:24px}[dir=rtl] .blog-card .date[data-v-e5bb8512]{margin-right:24px}.theme--light .blog-card .date[data-v-e5bb8512]{color:rgba(0,0,0,.38)}.theme--dark .blog-card .date[data-v-e5bb8512]{color:hsla(0,0%,100%,.5)}.blog-card .date>*[data-v-e5bb8512]{display:block;line-height:normal;font-weight:var(--font-regular)}.blog-card .date h3[data-v-e5bb8512]{font-size:28px;text-transform:uppercase}@media(max-width:599px){.blog-card .date h3[data-v-e5bb8512]{font-size:20px}}.blog-card .date h2[data-v-e5bb8512]{font-size:46px}@media(max-width:599px){.blog-card .date h2[data-v-e5bb8512]{font-size:32px}}.blog-card .date h4[data-v-e5bb8512]{font-size:22px}@media(max-width:599px){.blog-card .date h4[data-v-e5bb8512]{font-size:16px}}.testimonial[data-v-e5bb8512]{height:260px;overflow:visible;border-radius:8px;border:3px solid;padding:32px 16px;position:relative}.theme--light .testimonial[data-v-e5bb8512]{background-color:#fff}.theme--dark .testimonial[data-v-e5bb8512]{background-color:#424242}.theme--light .testimonial[data-v-e5bb8512]{border-color:rgba(0,0,0,.12)}.theme--dark .testimonial[data-v-e5bb8512]{border-color:hsla(0,0%,100%,.12)}@media(min-width:600px){.testimonial[data-v-e5bb8512]{padding:64px}}.testimonial .icon[data-v-e5bb8512]{border-Radius:20px;transform:rotate(45deg);background:var(--v-primary-base);width:70px;height:70px;top:-30px;position:absolute;text-align:center;line-height:100px}[dir=ltr] .testimonial .icon[data-v-e5bb8512]{left:32px}[dir=rtl] .testimonial .icon[data-v-e5bb8512]{right:32px}@media(max-width:599px){.testimonial .icon[data-v-e5bb8512]{display:none}}.testimonial .icon i[data-v-e5bb8512]{transform:rotate(-45deg);font-size:70px;vertical-align:top;color:#fff}.testimonial h6[data-v-e5bb8512]{font-weight:var(--font-bold)}.testimonial .text[data-v-e5bb8512]{margin-bottom:32px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:72px}.theme--light .caption-title[data-v-e5bb8512]{color:rgba(0,0,0,.54)}.theme--dark .caption-title[data-v-e5bb8512]{color:hsla(0,0%,100%,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dot_vue_vue_type_style_index_0_id_7b2b3e5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dot_vue_vue_type_style_index_0_id_7b2b3e5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dot_vue_vue_type_style_index_0_id_7b2b3e5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dot_vue_vue_type_style_index_0_id_7b2b3e5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dot_vue_vue_type_style_index_0_id_7b2b3e5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-7b2b3e5c],.use-text-title[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-7b2b3e5c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7b2b3e5c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7b2b3e5c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7b2b3e5c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7b2b3e5c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7b2b3e5c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7b2b3e5c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7b2b3e5c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7b2b3e5c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7b2b3e5c],.use-text-paragraph[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7b2b3e5c]{font-size:14px;line-height:22px}}.use-hidden[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-7b2b3e5c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7b2b3e5c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7b2b3e5c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7b2b3e5c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7b2b3e5c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7b2b3e5c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7b2b3e5c]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-7b2b3e5c],body[data-v-7b2b3e5c],h1[data-v-7b2b3e5c],h2[data-v-7b2b3e5c],h3[data-v-7b2b3e5c],h4[data-v-7b2b3e5c],h5[data-v-7b2b3e5c],h6[data-v-7b2b3e5c],html[data-v-7b2b3e5c],p[data-v-7b2b3e5c]{font-family:\"IBM Plex Thai\",sans-serif}.parallax-wrap[data-v-7b2b3e5c]{position:absolute;width:100%;height:100%;overflow:hidden;left:0;z-index:0}.parallax-wrap.dots-wrap[data-v-7b2b3e5c]{top:-300px;height:750px}.parallax-wrap.dots-wrap svg[data-v-7b2b3e5c]{top:-200px}@media(max-width:1279px){.parallax-wrap[data-v-7b2b3e5c]{display:none}}.parallax-wrap[data-v-7b2b3e5c]  .Masthead{z-index:1}.inner-parallax[data-v-7b2b3e5c]{top:-400px}.inner-parallax[data-v-7b2b3e5c],.inner-parallax .figure[data-v-7b2b3e5c]{height:1800px;width:100%;position:absolute;display:block}.inner-parallax .figure[data-v-7b2b3e5c]  .Masthead,.inner-parallax .figure[data-v-7b2b3e5c]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-7b2b3e5c]{height:1800px;width:100%;display:block;position:absolute;top:0}.cross-wrap[data-v-7b2b3e5c]{z-index:10;top:-100px}[dir=ltr] .cross-wrap[data-v-7b2b3e5c]{right:-120px}[dir=rtl] .cross-wrap[data-v-7b2b3e5c]{left:-120px}[dir=ltr] .cross-wrap[data-v-7b2b3e5c]{left:auto}[dir=rtl] .cross-wrap[data-v-7b2b3e5c]{right:auto}.parallax-dot[data-v-7b2b3e5c]{width:1015px;height:1099px;opacity:.2;top:90px;transform:scale(.5);position:absolute;z-index:10}.theme--light .parallax-dot[data-v-7b2b3e5c]{fill:rgba(0,0,0,.38)}.theme--dark .parallax-dot[data-v-7b2b3e5c]{fill:hsla(0,0%,100%,.5)}[dir=ltr] .parallax-dot[data-v-7b2b3e5c]{left:0}[dir=rtl] .parallax-dot[data-v-7b2b3e5c]{right:0}.v-application--is-rtl .parallax-dot[data-v-7b2b3e5c]{transform-origin:top right}.v-application--is-ltr .parallax-dot[data-v-7b2b3e5c]{transform-origin:top left}.parallax-cross[data-v-7b2b3e5c]{background-position:0 -30px;background-repeat:repeat;width:445px;height:1099px;top:400px;transform:scale(.5);transform-origin:top left;position:absolute}.theme--light .parallax-cross[data-v-7b2b3e5c]{background-image:url(/images/decoration/cross-deco-light.png)}.theme--dark .parallax-cross[data-v-7b2b3e5c]{background-image:url(/images/decoration/cross-deco-dark.png)}[dir=ltr] .parallax-cross[data-v-7b2b3e5c]{right:0}[dir=rtl] .parallax-cross[data-v-7b2b3e5c]{left:0}.parallax-box[data-v-7b2b3e5c]{width:100%;height:350px;top:-2400px;position:absolute}[dir=ltr] .parallax-box[data-v-7b2b3e5c]{right:0}[dir=rtl] .parallax-box[data-v-7b2b3e5c]{left:0}.big-box[data-v-7b2b3e5c]{width:300px;height:250px;background:var(--v-secondary-base);opacity:.5;top:2420px;position:absolute}[dir=ltr] .big-box[data-v-7b2b3e5c]{left:-80px}[dir=rtl] .big-box[data-v-7b2b3e5c]{right:-80px}.small-box[data-v-7b2b3e5c]{width:150px;height:180px;background:var(--v-primary-base);opacity:.5;top:2550px;position:absolute}[dir=ltr] .small-box[data-v-7b2b3e5c]{right:-50px}[dir=rtl] .small-box[data-v-7b2b3e5c]{left:-50px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularCourse_vue_vue_type_style_index_0_id_446a3aa4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularCourse_vue_vue_type_style_index_0_id_446a3aa4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularCourse_vue_vue_type_style_index_0_id_446a3aa4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularCourse_vue_vue_type_style_index_0_id_446a3aa4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularCourse_vue_vue_type_style_index_0_id_446a3aa4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-446a3aa4],.use-text-title[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-446a3aa4]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-446a3aa4]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-446a3aa4]{font-size:28px;line-height:44px}}.use-text-title2[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-446a3aa4]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-446a3aa4]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-446a3aa4]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-446a3aa4]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-446a3aa4]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-446a3aa4]{font-size:16px;line-height:24px}}.use-text-caption[data-v-446a3aa4],.use-text-paragraph[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-446a3aa4]{font-size:14px;line-height:22px}}.use-hidden[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-446a3aa4]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-446a3aa4]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-446a3aa4]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-446a3aa4]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-446a3aa4]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-446a3aa4]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-446a3aa4]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-446a3aa4],body[data-v-446a3aa4],h1[data-v-446a3aa4],h2[data-v-446a3aa4],h3[data-v-446a3aa4],h4[data-v-446a3aa4],h5[data-v-446a3aa4],h6[data-v-446a3aa4],html[data-v-446a3aa4],p[data-v-446a3aa4]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-446a3aa4]{position:relative;padding:80px 0}@media(max-width:959px){.root[data-v-446a3aa4]{background:var(--v-primary-base)}}@media(max-width:599px){.root[data-v-446a3aa4]{padding:40px 0}}.root[data-v-446a3aa4]:before{content:\"\";width:80%;height:100%;position:absolute;top:0}.theme--light .root[data-v-446a3aa4]:before{background:var(--v-primary-base)}.theme--dark .root[data-v-446a3aa4]:before{background:var(--v-primarydark-base)}.v-application--is-ltr .root[data-v-446a3aa4]:before{border-top-right-radius:100px}.v-application--is-rtl .root[data-v-446a3aa4]:before{border-top-left-radius:100px}[dir=ltr] .root[data-v-446a3aa4]:before{left:0}[dir=rtl] .root[data-v-446a3aa4]:before{right:0}@media(max-width:959px){.root[data-v-446a3aa4]:before{display:none}}.parallax-wrap[data-v-446a3aa4]{position:absolute;height:100%;width:500px}[dir=ltr] .parallax-wrap[data-v-446a3aa4]{left:20px}[dir=rtl] .parallax-wrap[data-v-446a3aa4]{right:20px}@media(max-width:959px){.props[data-v-446a3aa4]{display:none!important}}.props>div[data-v-446a3aa4]{width:440px;height:2px}.props[data-v-446a3aa4]:focus{outline:none}[dir=ltr] .floating-title[data-v-446a3aa4]{text-align:left}[dir=rtl] .floating-title[data-v-446a3aa4]{text-align:right}@media(min-width:600px){.floating-title[data-v-446a3aa4]{padding:0 16px;width:300px}}@media(min-width:960px){.floating-title[data-v-446a3aa4]{position:absolute;top:120px;width:370px}[dir=ltr] .floating-title[data-v-446a3aa4]{left:3.5%}[dir=rtl] .floating-title[data-v-446a3aa4]{right:3.5%}}@media(max-width:959px){.floating-title[data-v-446a3aa4]{width:100%}}.carousel[data-v-446a3aa4]{position:relative;z-index:1}@media(min-width:960px){.carousel[data-v-446a3aa4]{margin-bottom:-20px}}.item[data-v-446a3aa4]{padding:0 8px;margin-bottom:40px}.item[data-v-446a3aa4]:focus{outline:none}.item>*[data-v-446a3aa4]{margin:0 auto}.link[data-v-446a3aa4]{padding:0}.link span[data-v-446a3aa4]{text-transform:none;font-weight:var(--font-regular)}.nav[data-v-446a3aa4]{position:absolute;top:50%;border-radius:50%;margin-top:-45px;width:36px;z-index:3;height:36px;padding:0;min-width:0;border:none;box-shadow:none}.theme--light .nav[data-v-446a3aa4]{background:#fff}.theme--dark .nav[data-v-446a3aa4]{background:#424242;box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .nav[data-v-446a3aa4]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.v-application--is-rtl .nav[data-v-446a3aa4]{transform:scale(-1.6)}.v-application--is-ltr .nav[data-v-446a3aa4]{transform:scale(1.6)}.theme--light .nav[data-v-446a3aa4]:hover{background-color:#fff}.theme--dark .nav[data-v-446a3aa4]:hover{background-color:#424242}.nav i[data-v-446a3aa4]{font-size:24px}.theme--light .nav i[data-v-446a3aa4]{color:rgba(0,0,0,.87)}.theme--dark .nav i[data-v-446a3aa4]{color:#fff}@media(max-width:959px){.nav[data-v-446a3aa4]{display:none}}[dir=ltr] .prev[data-v-446a3aa4]{left:0}[dir=ltr] .next[data-v-446a3aa4],[dir=rtl] .prev[data-v-446a3aa4]{right:0}[dir=rtl] .next[data-v-446a3aa4]{left:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_5ec303dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_5ec303dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_5ec303dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_5ec303dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_5ec303dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-5ec303dc],.use-text-title[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-5ec303dc]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5ec303dc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5ec303dc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5ec303dc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5ec303dc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5ec303dc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5ec303dc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5ec303dc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5ec303dc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5ec303dc],.use-text-paragraph[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5ec303dc]{font-size:14px;line-height:22px}}.use-hidden[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-5ec303dc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5ec303dc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5ec303dc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5ec303dc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5ec303dc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5ec303dc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5ec303dc]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-5ec303dc],body[data-v-5ec303dc],h1[data-v-5ec303dc],h2[data-v-5ec303dc],h3[data-v-5ec303dc],h4[data-v-5ec303dc],h5[data-v-5ec303dc],h6[data-v-5ec303dc],html[data-v-5ec303dc],p[data-v-5ec303dc]{font-family:\"IBM Plex Thai\",sans-serif}.general-card[data-v-5ec303dc]{position:relative;width:250px;height:400px;padding:3px}.general-card figure[data-v-5ec303dc]{margin:0;width:100%;height:170px;border-radius:6px;overflow:hidden}.general-card figure img[data-v-5ec303dc]{width:100%;min-height:100%}.general-card .property[data-v-5ec303dc]{display:flex;justify-content:space-between;margin-bottom:16px}.general-card .property strong[data-v-5ec303dc]{font-weight:var(--font-bold)}.desc[data-v-5ec303dc]{padding:16px}.desc p[data-v-5ec303dc]{overflow:hidden;height:50px}.desc h6[data-v-5ec303dc]{font-family:\"Lato\",sans-serif!important;font-weight:var(--font-bold)}.desc .button[data-v-5ec303dc]{width:100%;border-width:2px;padding:4px 24px!important}.rating i[data-v-5ec303dc]{color:#ffc107}.category-card[data-v-5ec303dc]{border-radius:16px;margin-bottom:24px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base);text-align:center;display:flex}.theme--light .category-card[data-v-5ec303dc]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .category-card[data-v-5ec303dc]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-5ec303dc]{height:250px}@media(max-width:599px){.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-5ec303dc]{height:120px}}.category-card[data-v-5ec303dc]  .v-btn__content{width:100%;height:100%;display:block}.category-card .figure[data-v-5ec303dc]{margin:0;display:block}[dir=ltr] .category-card .figure[data-v-5ec303dc]{margin-left:-2px}[dir=rtl] .category-card .figure[data-v-5ec303dc]{margin-right:-2px}.category-card .figure img[data-v-5ec303dc]{width:100%;position:relative}@media(min-width:1280px){.category-card:hover .property[data-v-5ec303dc]{padding:32px 48px}.category-card:hover .property .title-category[data-v-5ec303dc]:after{width:80%}[dir=ltr] .category-card:hover .property .title-category[data-v-5ec303dc]:after{left:0}[dir=rtl] .category-card:hover .property .title-category[data-v-5ec303dc]:after{right:0}}@media(min-width:1280px)and (min-width:1280px){.category-card:hover .property[data-v-5ec303dc]{height:80%;bottom:0;opacity:1}.category-card:hover .property .desc-category[data-v-5ec303dc]{opacity:1;bottom:0;height:70px}}.category-card .property[data-v-5ec303dc]{transition:all .3s cubic-bezier(0,.81,1,.97);position:absolute;width:100%;height:25%;padding:16px 48px;bottom:0;border-radius:16px;color:#fff;-webkit-backdrop-filter:saturate(100%) blur(10px);backdrop-filter:saturate(100%) blur(10px);background:rgba(0,0,0,.32)}[dir=ltr] .category-card .property[data-v-5ec303dc]{text-align:left}[dir=rtl] .category-card .property[data-v-5ec303dc]{text-align:right}[dir=ltr] .category-card .property[data-v-5ec303dc]{left:0}[dir=rtl] .category-card .property[data-v-5ec303dc]{right:0}@media(max-width:1279px){.category-card .property[data-v-5ec303dc]{padding:16px;bottom:0}.category-card .property .desc-category[data-v-5ec303dc]{display:none}}@media(max-width:599px){.category-card .property[data-v-5ec303dc]{padding:4px 16px;border-radius:12px;height:30%}}.desc-category[data-v-5ec303dc]{margin-top:40px;font-size:22px;font-weight:var(--font-regular);white-space:normal;height:0;opacity:0;display:block;overflow:hidden}.title-category[data-v-5ec303dc]{font-weight:var(--font-bold);font-size:24px;white-space:nowrap;position:relative;display:block;text-overflow:ellipsis}@media(max-width:599px){.title-category[data-v-5ec303dc]{overflow:hidden;font-size:14px;text-align:center;line-height:28px}}.title-category[data-v-5ec303dc]:after{content:\"\";height:2px;background:var(--v-primary-base);width:0;position:absolute;bottom:-10px;z-index:0;transition:all .2s cubic-bezier(.42,.16,.21,.93);transition-delay:.3s}[dir=ltr] .title-category[data-v-5ec303dc]:after{left:50%}[dir=rtl] .title-category[data-v-5ec303dc]:after{right:50%}.card-wrap[data-v-5ec303dc]{position:relative}.card-wrap .fold[data-v-5ec303dc]:before{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:80%;bottom:-25px}.theme--light .card-wrap .fold[data-v-5ec303dc]:before{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-5ec303dc]:before{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-5ec303dc]:before{background-color:#fff}.theme--dark .card-wrap .fold[data-v-5ec303dc]:before{background-color:#424242}.theme--light .card-wrap .fold[data-v-5ec303dc]:before{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-5ec303dc]:before{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.card-wrap .fold[data-v-5ec303dc]:after{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:90%;bottom:-15px}.theme--light .card-wrap .fold[data-v-5ec303dc]:after{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-5ec303dc]:after{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-5ec303dc]:after{background-color:#fff}.theme--dark .card-wrap .fold[data-v-5ec303dc]:after{background-color:#424242}.theme--light .card-wrap .fold[data-v-5ec303dc]:after{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-5ec303dc]:after{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.blog-card[data-v-5ec303dc]{display:flex;margin-bottom:48px;align-items:center;position:relative}@media(max-width:599px){.blog-card[data-v-5ec303dc]{margin-bottom:24px}}.blog-card[data-v-5ec303dc]:before{border-radius:15px;content:\"\";width:100px;height:100px;transform:rotate(45deg);background:var(--v-secondary-base);opacity:.1;position:absolute;top:-10px}[dir=ltr] .blog-card[data-v-5ec303dc]:before{left:-25px}[dir=rtl] .blog-card[data-v-5ec303dc]:before{right:-25px}.blog-card .text a.v-btn[data-v-5ec303dc]{padding:0;position:relative;text-transform:none;z-index:1;white-space:inherit}.theme--light .blog-card .text a.v-btn[data-v-5ec303dc]{color:rgba(0,0,0,.87)}.theme--dark .blog-card .text a.v-btn[data-v-5ec303dc]{color:#fff}.blog-card .text>a.v-btn[data-v-5ec303dc]{font-weight:var(--font-regular)}.theme--light .blog-card .text>a.v-btn[data-v-5ec303dc]{color:rgba(0,0,0,.54)}.theme--dark .blog-card .text>a.v-btn[data-v-5ec303dc]{color:hsla(0,0%,100%,.7)}.blog-card .text h4[data-v-5ec303dc]{line-height:normal}.blog-card .text h4[data-v-5ec303dc]:before{border-radius:10px;content:\"\";width:50px;height:50px;transform:rotate(45deg);position:absolute;top:-6px}.theme--light .blog-card .text h4[data-v-5ec303dc]:before{background:var(--v-secondarylight-base)}.theme--dark .blog-card .text h4[data-v-5ec303dc]:before{background:var(--v-secondarydark-base)}[dir=ltr] .blog-card .text h4[data-v-5ec303dc]:before{left:-25px}[dir=rtl] .blog-card .text h4[data-v-5ec303dc]:before{right:-25px}.blog-card .text h4 a.v-btn[data-v-5ec303dc]{display:block;font-size:24px;font-weight:var(--font-medium);transition:all .3s ease;height:80px}@media(max-width:599px){.blog-card .text h4 a.v-btn[data-v-5ec303dc]{font-size:16px;line-height:22px}}.blog-card .text h4 a.v-btn[data-v-5ec303dc]:hover{color:var(--v-primary-base)}.blog-card .date[data-v-5ec303dc]{text-align:center}[dir=ltr] .blog-card .date[data-v-5ec303dc]{margin-left:24px}[dir=rtl] .blog-card .date[data-v-5ec303dc]{margin-right:24px}.theme--light .blog-card .date[data-v-5ec303dc]{color:rgba(0,0,0,.38)}.theme--dark .blog-card .date[data-v-5ec303dc]{color:hsla(0,0%,100%,.5)}.blog-card .date>*[data-v-5ec303dc]{display:block;line-height:normal;font-weight:var(--font-regular)}.blog-card .date h3[data-v-5ec303dc]{font-size:28px;text-transform:uppercase}@media(max-width:599px){.blog-card .date h3[data-v-5ec303dc]{font-size:20px}}.blog-card .date h2[data-v-5ec303dc]{font-size:46px}@media(max-width:599px){.blog-card .date h2[data-v-5ec303dc]{font-size:32px}}.blog-card .date h4[data-v-5ec303dc]{font-size:22px}@media(max-width:599px){.blog-card .date h4[data-v-5ec303dc]{font-size:16px}}.testimonial[data-v-5ec303dc]{height:260px;overflow:visible;border-radius:8px;border:3px solid;padding:32px 16px;position:relative}.theme--light .testimonial[data-v-5ec303dc]{background-color:#fff}.theme--dark .testimonial[data-v-5ec303dc]{background-color:#424242}.theme--light .testimonial[data-v-5ec303dc]{border-color:rgba(0,0,0,.12)}.theme--dark .testimonial[data-v-5ec303dc]{border-color:hsla(0,0%,100%,.12)}@media(min-width:600px){.testimonial[data-v-5ec303dc]{padding:64px}}.testimonial .icon[data-v-5ec303dc]{border-Radius:20px;transform:rotate(45deg);background:var(--v-primary-base);width:70px;height:70px;top:-30px;position:absolute;text-align:center;line-height:100px}[dir=ltr] .testimonial .icon[data-v-5ec303dc]{left:32px}[dir=rtl] .testimonial .icon[data-v-5ec303dc]{right:32px}@media(max-width:599px){.testimonial .icon[data-v-5ec303dc]{display:none}}.testimonial .icon i[data-v-5ec303dc]{transform:rotate(-45deg);font-size:70px;vertical-align:top;color:#fff}.testimonial h6[data-v-5ec303dc]{font-weight:var(--font-bold)}.testimonial .text[data-v-5ec303dc]{margin-bottom:32px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:72px}.theme--light .caption-title[data-v-5ec303dc]{color:rgba(0,0,0,.54)}.theme--dark .caption-title[data-v-5ec303dc]{color:hsla(0,0%,100%,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_5d1ec732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_5d1ec732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_5d1ec732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_5d1ec732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_5d1ec732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-5d1ec732],.use-text-title[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-5d1ec732]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5d1ec732]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5d1ec732]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5d1ec732]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5d1ec732]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5d1ec732]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5d1ec732]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5d1ec732]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5d1ec732]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5d1ec732],.use-text-paragraph[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5d1ec732]{font-size:14px;line-height:22px}}.use-hidden[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-5d1ec732]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5d1ec732]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5d1ec732]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5d1ec732]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5d1ec732]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5d1ec732]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5d1ec732]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-5d1ec732],body[data-v-5d1ec732],h1[data-v-5d1ec732],h2[data-v-5d1ec732],h3[data-v-5d1ec732],h4[data-v-5d1ec732],h5[data-v-5d1ec732],h6[data-v-5d1ec732],html[data-v-5d1ec732],p[data-v-5d1ec732]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-5d1ec732]{padding:80px 0;position:relative}@media(max-width:599px){.root[data-v-5d1ec732]{padding:40px 0}}@media(min-width:960px){.theme--light .root.ltr[data-v-5d1ec732]{background-image:linear-gradient(270deg,hsla(0,0%,100%,0) 20%,var(--v-secondarylight-base) 0)}.theme--dark .root.ltr[data-v-5d1ec732]{background-image:linear-gradient(270deg,hsla(0,0%,100%,0) 20%,var(--v-secondarydark-base) 0)}.theme--light .root.rtl[data-v-5d1ec732]{background-image:linear-gradient(90deg,hsla(0,0%,100%,0) 20%,var(--v-secondarylight-base) 0)}.theme--dark .root.rtl[data-v-5d1ec732]{background-image:linear-gradient(90deg,hsla(0,0%,100%,0) 20%,var(--v-secondarydark-base) 0)}}.theme--light .root[data-v-5d1ec732]{position:relative}.theme--light .root[data-v-5d1ec732]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;opacity:.7}.theme--dark .root[data-v-5d1ec732]{position:relative}.theme--dark .root[data-v-5d1ec732]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#303030;opacity:.7}.root>*[data-v-5d1ec732]{position:relative}.massonry[data-v-5d1ec732]{margin-top:40px}.parallax-wrap[data-v-5d1ec732]{position:absolute;left:auto;top:300px;height:500px;overflow:visible;width:500px;z-index:0}[dir=ltr] .parallax-wrap[data-v-5d1ec732]{right:20px}[dir=rtl] .parallax-wrap[data-v-5d1ec732]{left:20px}.all-category-card[data-v-5d1ec732]{box-shadow:none;border-radius:16px;margin-bottom:24px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base)!important;text-align:center;display:flex}.all-category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-5d1ec732]{height:250px}@media(max-width:599px){.all-category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-5d1ec732]{height:120px}}.all-category-card[data-v-5d1ec732]  .v-btn__content{flex:auto;height:100%}.all-category-card:hover .property .title-category[data-v-5d1ec732]:after{width:100%}[dir=ltr] .all-category-card:hover .property i[data-v-5d1ec732]{right:-16px}[dir=rtl] .all-category-card:hover .property i[data-v-5d1ec732]{left:-16px}.all-category-card .figure[data-v-5d1ec732]{margin:0;display:inline-block}.all-category-card .figure img[data-v-5d1ec732]{width:100%;left:-1px;position:relative}.all-category-card .property[data-v-5d1ec732]{transition:all .5s cubic-bezier(.01,1.17,.59,1.04);position:relative;position:absolute;width:100%;height:100%;padding:16px 48px;bottom:0;color:#fff;display:flex;align-items:center}.all-category-card .property[data-v-5d1ec732]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--v-primarydark-base);opacity:.9}[dir=ltr] .all-category-card .property[data-v-5d1ec732]{text-align:left}[dir=rtl] .all-category-card .property[data-v-5d1ec732]{text-align:right}[dir=ltr] .all-category-card .property[data-v-5d1ec732]{left:0}[dir=rtl] .all-category-card .property[data-v-5d1ec732]{right:0}@media(max-width:1279px){.all-category-card .property[data-v-5d1ec732]{text-align:center;bottom:0}.all-category-card .property .desc[data-v-5d1ec732],.all-category-card .property i[data-v-5d1ec732]{display:none}}@media(max-width:599px){.all-category-card .property[data-v-5d1ec732]{padding:16px}}.all-category-card .property .desc[data-v-5d1ec732]{margin-top:40px;font-size:22px;font-weight:var(--font-regular);white-space:normal;height:0;opacity:0;display:block;overflow:hidden}.all-category-card .property i[data-v-5d1ec732]{position:relative;font-size:48px;transition:all .3s ease-out}[dir=ltr] .all-category-card .property i[data-v-5d1ec732]{right:0}[dir=rtl] .all-category-card .property i[data-v-5d1ec732]{left:0;transform:scale(-1)}.all-category-card .property .title-category[data-v-5d1ec732]{font-weight:var(--font-bold);font-size:32px;text-transform:uppercase;white-space:normal;position:relative;display:inline-block}@media(max-width:599px){.all-category-card .property .title-category[data-v-5d1ec732]{font-size:18px}}.all-category-card .property .title-category[data-v-5d1ec732]:after{content:\"\";height:4px;background:#fff;width:50%;position:absolute;bottom:-10px;z-index:0;transition:all .3s ease-out}[dir=ltr] .all-category-card .property .title-category[data-v-5d1ec732]:after{left:0}[dir=rtl] .all-category-card .property .title-category[data-v-5d1ec732]:after{right:0}.card-wrap[data-v-5d1ec732]{position:relative}.card-wrap .fold[data-v-5d1ec732]:before{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:80%;bottom:-25px}.theme--light .card-wrap .fold[data-v-5d1ec732]:before{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-5d1ec732]:before{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-5d1ec732]:before{background-color:#fff}.theme--dark .card-wrap .fold[data-v-5d1ec732]:before{background-color:#424242}.theme--light .card-wrap .fold[data-v-5d1ec732]:before{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-5d1ec732]:before{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.card-wrap .fold[data-v-5d1ec732]:after{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:90%;bottom:-15px}.theme--light .card-wrap .fold[data-v-5d1ec732]:after{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-5d1ec732]:after{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-5d1ec732]:after{background-color:#fff}.theme--dark .card-wrap .fold[data-v-5d1ec732]:after{background-color:#424242}.theme--light .card-wrap .fold[data-v-5d1ec732]:after{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-5d1ec732]:after{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_717afffc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_717afffc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_717afffc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_717afffc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_717afffc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-717afffc],.use-text-title[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-717afffc]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-717afffc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-717afffc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-717afffc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-717afffc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-717afffc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-717afffc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-717afffc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-717afffc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-717afffc],.use-text-paragraph[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-717afffc]{font-size:14px;line-height:22px}}.use-hidden[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-717afffc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-717afffc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-717afffc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-717afffc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-717afffc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-717afffc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-717afffc]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-717afffc],body[data-v-717afffc],h1[data-v-717afffc],h2[data-v-717afffc],h3[data-v-717afffc],h4[data-v-717afffc],h5[data-v-717afffc],h6[data-v-717afffc],html[data-v-717afffc],p[data-v-717afffc]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-717afffc]{background:url(/images/education/bg-pattern.png) repeat var(--v-primarydark-base);background-size:8%;position:relative;color:#fff;padding:96px 0}@media(max-width:599px){.root[data-v-717afffc]{text-align:center;padding:48px 0}}.root p[data-v-717afffc]{margin-bottom:40px}.root .v-btn.white[data-v-717afffc]{min-width:180px;font-size:18px;color:var(--v-primarydark-base)!important}.title-about[data-v-717afffc]{margin-bottom:24px}.title-about h3[data-v-717afffc]{margin-bottom:8px;font-weight:var(--font-bold);display:inline-block;line-height:normal}.title-about h3[data-v-717afffc],.title-about h3 span[data-v-717afffc]{position:relative}.title-about h3[data-v-717afffc]:before{content:\"\";height:15px;background-color:var(--v-secondary-base);width:90%;position:absolute;bottom:4px;z-index:0}[dir=ltr] .title-about h3[data-v-717afffc]:before{left:0}[dir=rtl] .title-about h3[data-v-717afffc]:before{right:0}.illu-wrap[data-v-717afffc]{position:static}@media(max-width:959px){.illu-wrap[data-v-717afffc]{display:none}}.illustration[data-v-717afffc]{box-shadow:0 0 18px 0 rgba(0,0,0,.17);position:absolute;border:15px solid var(--v-primary-base);background:var(--v-primary-base);border-radius:25px;transform:rotate(45deg);overflow:hidden}.illustration img[data-v-717afffc]{height:105%}.v-application--is-ltr .illustration img[data-v-717afffc]{transform:translateX(-20%) rotate(-45deg) scale(1.3)}.v-application--is-rtl .illustration img[data-v-717afffc]{transform:translateX(20%) rotate(-45deg) scale(1.3)}.illustration.one[data-v-717afffc]{border-radius:15px;width:60px;height:60px;top:-10px}[dir=ltr] .illustration.one[data-v-717afffc]{left:100px}[dir=rtl] .illustration.one[data-v-717afffc]{right:100px}.illustration.two[data-v-717afffc]{width:180px;height:180px;top:-10px}[dir=ltr] .illustration.two[data-v-717afffc]{left:300px}[dir=rtl] .illustration.two[data-v-717afffc]{right:300px}.illustration.three[data-v-717afffc]{width:160px;height:160px;top:130px;left:50px}[dir=ltr] .illustration.three[data-v-717afffc]{left:50px}[dir=rtl] .illustration.three[data-v-717afffc]{right:50px}.illustration.four[data-v-717afffc]{width:210px;height:210px;bottom:-30px;left:250px}[dir=ltr] .illustration.four[data-v-717afffc]{left:250px}[dir=rtl] .illustration.four[data-v-717afffc]{right:250px}.illustration.five[data-v-717afffc]{border-radius:15px;width:60px;height:60px;bottom:-30px}[dir=ltr] .illustration.five[data-v-717afffc]{right:10px}[dir=rtl] .illustration.five[data-v-717afffc]{left:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_id_8eea163a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_id_8eea163a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_id_8eea163a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_id_8eea163a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_id_8eea163a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-8eea163a],.use-text-title[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-8eea163a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-8eea163a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-8eea163a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-8eea163a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-8eea163a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-8eea163a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-8eea163a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-8eea163a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-8eea163a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-8eea163a],.use-text-paragraph[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-8eea163a]{font-size:14px;line-height:22px}}.use-hidden[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-8eea163a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-8eea163a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-8eea163a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-8eea163a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-8eea163a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-8eea163a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-8eea163a]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-8eea163a],body[data-v-8eea163a],h1[data-v-8eea163a],h2[data-v-8eea163a],h3[data-v-8eea163a],h4[data-v-8eea163a],h5[data-v-8eea163a],h6[data-v-8eea163a],html[data-v-8eea163a],p[data-v-8eea163a]{font-family:\"IBM Plex Thai\",sans-serif}.general-card[data-v-8eea163a]{position:relative;width:250px;height:400px;padding:3px}.general-card figure[data-v-8eea163a]{margin:0;width:100%;height:170px;border-radius:6px;overflow:hidden}.general-card figure img[data-v-8eea163a]{width:100%;min-height:100%}.general-card .property[data-v-8eea163a]{display:flex;justify-content:space-between;margin-bottom:16px}.general-card .property strong[data-v-8eea163a]{font-weight:var(--font-bold)}.desc[data-v-8eea163a]{padding:16px}.desc p[data-v-8eea163a]{overflow:hidden;height:50px}.desc h6[data-v-8eea163a]{font-family:\"Lato\",sans-serif!important;font-weight:var(--font-bold)}.desc .button[data-v-8eea163a]{width:100%;border-width:2px;padding:4px 24px!important}.rating i[data-v-8eea163a]{color:#ffc107}.category-card[data-v-8eea163a]{border-radius:16px;margin-bottom:24px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base);text-align:center;display:flex}.theme--light .category-card[data-v-8eea163a]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .category-card[data-v-8eea163a]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-8eea163a]{height:250px}@media(max-width:599px){.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-8eea163a]{height:120px}}.category-card[data-v-8eea163a]  .v-btn__content{width:100%;height:100%;display:block}.category-card .figure[data-v-8eea163a]{margin:0;display:block}[dir=ltr] .category-card .figure[data-v-8eea163a]{margin-left:-2px}[dir=rtl] .category-card .figure[data-v-8eea163a]{margin-right:-2px}.category-card .figure img[data-v-8eea163a]{width:100%;position:relative}@media(min-width:1280px){.category-card:hover .property[data-v-8eea163a]{padding:32px 48px}.category-card:hover .property .title-category[data-v-8eea163a]:after{width:80%}[dir=ltr] .category-card:hover .property .title-category[data-v-8eea163a]:after{left:0}[dir=rtl] .category-card:hover .property .title-category[data-v-8eea163a]:after{right:0}}@media(min-width:1280px)and (min-width:1280px){.category-card:hover .property[data-v-8eea163a]{height:80%;bottom:0;opacity:1}.category-card:hover .property .desc-category[data-v-8eea163a]{opacity:1;bottom:0;height:70px}}.category-card .property[data-v-8eea163a]{transition:all .3s cubic-bezier(0,.81,1,.97);position:absolute;width:100%;height:25%;padding:16px 48px;bottom:0;border-radius:16px;color:#fff;-webkit-backdrop-filter:saturate(100%) blur(10px);backdrop-filter:saturate(100%) blur(10px);background:rgba(0,0,0,.32)}[dir=ltr] .category-card .property[data-v-8eea163a]{text-align:left}[dir=rtl] .category-card .property[data-v-8eea163a]{text-align:right}[dir=ltr] .category-card .property[data-v-8eea163a]{left:0}[dir=rtl] .category-card .property[data-v-8eea163a]{right:0}@media(max-width:1279px){.category-card .property[data-v-8eea163a]{padding:16px;bottom:0}.category-card .property .desc-category[data-v-8eea163a]{display:none}}@media(max-width:599px){.category-card .property[data-v-8eea163a]{padding:4px 16px;border-radius:12px;height:30%}}.desc-category[data-v-8eea163a]{margin-top:40px;font-size:22px;font-weight:var(--font-regular);white-space:normal;height:0;opacity:0;display:block;overflow:hidden}.title-category[data-v-8eea163a]{font-weight:var(--font-bold);font-size:24px;white-space:nowrap;position:relative;display:block;text-overflow:ellipsis}@media(max-width:599px){.title-category[data-v-8eea163a]{overflow:hidden;font-size:14px;text-align:center;line-height:28px}}.title-category[data-v-8eea163a]:after{content:\"\";height:2px;background:var(--v-primary-base);width:0;position:absolute;bottom:-10px;z-index:0;transition:all .2s cubic-bezier(.42,.16,.21,.93);transition-delay:.3s}[dir=ltr] .title-category[data-v-8eea163a]:after{left:50%}[dir=rtl] .title-category[data-v-8eea163a]:after{right:50%}.card-wrap[data-v-8eea163a]{position:relative}.card-wrap .fold[data-v-8eea163a]:before{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:80%;bottom:-25px}.theme--light .card-wrap .fold[data-v-8eea163a]:before{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-8eea163a]:before{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-8eea163a]:before{background-color:#fff}.theme--dark .card-wrap .fold[data-v-8eea163a]:before{background-color:#424242}.theme--light .card-wrap .fold[data-v-8eea163a]:before{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-8eea163a]:before{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.card-wrap .fold[data-v-8eea163a]:after{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:90%;bottom:-15px}.theme--light .card-wrap .fold[data-v-8eea163a]:after{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-8eea163a]:after{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-8eea163a]:after{background-color:#fff}.theme--dark .card-wrap .fold[data-v-8eea163a]:after{background-color:#424242}.theme--light .card-wrap .fold[data-v-8eea163a]:after{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-8eea163a]:after{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.blog-card[data-v-8eea163a]{display:flex;margin-bottom:48px;align-items:center;position:relative}@media(max-width:599px){.blog-card[data-v-8eea163a]{margin-bottom:24px}}.blog-card[data-v-8eea163a]:before{border-radius:15px;content:\"\";width:100px;height:100px;transform:rotate(45deg);background:var(--v-secondary-base);opacity:.1;position:absolute;top:-10px}[dir=ltr] .blog-card[data-v-8eea163a]:before{left:-25px}[dir=rtl] .blog-card[data-v-8eea163a]:before{right:-25px}.blog-card .text a.v-btn[data-v-8eea163a]{padding:0;position:relative;text-transform:none;z-index:1;white-space:inherit}.theme--light .blog-card .text a.v-btn[data-v-8eea163a]{color:rgba(0,0,0,.87)}.theme--dark .blog-card .text a.v-btn[data-v-8eea163a]{color:#fff}.blog-card .text>a.v-btn[data-v-8eea163a]{font-weight:var(--font-regular)}.theme--light .blog-card .text>a.v-btn[data-v-8eea163a]{color:rgba(0,0,0,.54)}.theme--dark .blog-card .text>a.v-btn[data-v-8eea163a]{color:hsla(0,0%,100%,.7)}.blog-card .text h4[data-v-8eea163a]{line-height:normal}.blog-card .text h4[data-v-8eea163a]:before{border-radius:10px;content:\"\";width:50px;height:50px;transform:rotate(45deg);position:absolute;top:-6px}.theme--light .blog-card .text h4[data-v-8eea163a]:before{background:var(--v-secondarylight-base)}.theme--dark .blog-card .text h4[data-v-8eea163a]:before{background:var(--v-secondarydark-base)}[dir=ltr] .blog-card .text h4[data-v-8eea163a]:before{left:-25px}[dir=rtl] .blog-card .text h4[data-v-8eea163a]:before{right:-25px}.blog-card .text h4 a.v-btn[data-v-8eea163a]{display:block;font-size:24px;font-weight:var(--font-medium);transition:all .3s ease;height:80px}@media(max-width:599px){.blog-card .text h4 a.v-btn[data-v-8eea163a]{font-size:16px;line-height:22px}}.blog-card .text h4 a.v-btn[data-v-8eea163a]:hover{color:var(--v-primary-base)}.blog-card .date[data-v-8eea163a]{text-align:center}[dir=ltr] .blog-card .date[data-v-8eea163a]{margin-left:24px}[dir=rtl] .blog-card .date[data-v-8eea163a]{margin-right:24px}.theme--light .blog-card .date[data-v-8eea163a]{color:rgba(0,0,0,.38)}.theme--dark .blog-card .date[data-v-8eea163a]{color:hsla(0,0%,100%,.5)}.blog-card .date>*[data-v-8eea163a]{display:block;line-height:normal;font-weight:var(--font-regular)}.blog-card .date h3[data-v-8eea163a]{font-size:28px;text-transform:uppercase}@media(max-width:599px){.blog-card .date h3[data-v-8eea163a]{font-size:20px}}.blog-card .date h2[data-v-8eea163a]{font-size:46px}@media(max-width:599px){.blog-card .date h2[data-v-8eea163a]{font-size:32px}}.blog-card .date h4[data-v-8eea163a]{font-size:22px}@media(max-width:599px){.blog-card .date h4[data-v-8eea163a]{font-size:16px}}.testimonial[data-v-8eea163a]{height:260px;overflow:visible;border-radius:8px;border:3px solid;padding:32px 16px;position:relative}.theme--light .testimonial[data-v-8eea163a]{background-color:#fff}.theme--dark .testimonial[data-v-8eea163a]{background-color:#424242}.theme--light .testimonial[data-v-8eea163a]{border-color:rgba(0,0,0,.12)}.theme--dark .testimonial[data-v-8eea163a]{border-color:hsla(0,0%,100%,.12)}@media(min-width:600px){.testimonial[data-v-8eea163a]{padding:64px}}.testimonial .icon[data-v-8eea163a]{border-Radius:20px;transform:rotate(45deg);background:var(--v-primary-base);width:70px;height:70px;top:-30px;position:absolute;text-align:center;line-height:100px}[dir=ltr] .testimonial .icon[data-v-8eea163a]{left:32px}[dir=rtl] .testimonial .icon[data-v-8eea163a]{right:32px}@media(max-width:599px){.testimonial .icon[data-v-8eea163a]{display:none}}.testimonial .icon i[data-v-8eea163a]{transform:rotate(-45deg);font-size:70px;vertical-align:top;color:#fff}.testimonial h6[data-v-8eea163a]{font-weight:var(--font-bold)}.testimonial .text[data-v-8eea163a]{margin-bottom:32px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:72px}.theme--light .caption-title[data-v-8eea163a]{color:rgba(0,0,0,.54)}.theme--dark .caption-title[data-v-8eea163a]{color:hsla(0,0%,100%,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_644ee074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_644ee074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_644ee074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_644ee074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_644ee074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-644ee074],.use-text-title[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-644ee074]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-644ee074]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-644ee074]{font-size:28px;line-height:44px}}.use-text-title2[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-644ee074]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-644ee074]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-644ee074]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-644ee074]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-644ee074]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-644ee074]{font-size:16px;line-height:24px}}.use-text-caption[data-v-644ee074],.use-text-paragraph[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-644ee074]{font-size:14px;line-height:22px}}.use-hidden[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-644ee074]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-644ee074]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-644ee074]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-644ee074]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-644ee074]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-644ee074]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-644ee074]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-644ee074],body[data-v-644ee074],h1[data-v-644ee074],h2[data-v-644ee074],h3[data-v-644ee074],h4[data-v-644ee074],h5[data-v-644ee074],h6[data-v-644ee074],html[data-v-644ee074],p[data-v-644ee074]{font-family:\"IBM Plex Thai\",sans-serif}.carousel[data-v-644ee074],.root[data-v-644ee074]{position:relative}@media(min-width:600px){.carousel[data-v-644ee074]{padding:0 64px}}.item[data-v-644ee074]{padding:0 8px}@media(min-width:600px){.item[data-v-644ee074]{padding:56px 8px 0}}.item[data-v-644ee074]:focus{outline:none}.nav[data-v-644ee074]{position:absolute;top:50%;border-radius:50%;margin-top:-20px;width:36px;z-index:3;height:36px;padding:0;min-width:0;border:none;box-shadow:none}.theme--light .nav[data-v-644ee074]{background:#fff}.theme--dark .nav[data-v-644ee074]{background:#424242;box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .nav[data-v-644ee074]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.v-application--is-rtl .nav[data-v-644ee074]{transform:scale(-1.6)}.v-application--is-ltr .nav[data-v-644ee074]{transform:scale(1.6)}.theme--light .nav[data-v-644ee074]:hover{background-color:#fff}.theme--dark .nav[data-v-644ee074]:hover{background-color:#424242}.nav i[data-v-644ee074]{font-size:24px}.theme--light .nav i[data-v-644ee074]{color:rgba(0,0,0,.87)}.theme--dark .nav i[data-v-644ee074]{color:#fff}@media(max-width:959px){.nav[data-v-644ee074]{display:none}}[dir=ltr] .prev[data-v-644ee074]{left:0}[dir=ltr] .next[data-v-644ee074],[dir=rtl] .prev[data-v-644ee074]{right:0}[dir=rtl] .next[data-v-644ee074]{left:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_de576482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_de576482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_de576482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_de576482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_de576482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-de576482],.use-text-title[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-de576482]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-de576482]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-de576482]{font-size:28px;line-height:44px}}.use-text-title2[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-de576482]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-de576482]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-de576482]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-de576482]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-de576482]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-de576482]{font-size:16px;line-height:24px}}.use-text-caption[data-v-de576482],.use-text-paragraph[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-de576482]{font-size:14px;line-height:22px}}.use-hidden[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-de576482]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-de576482]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-de576482]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-de576482]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-de576482]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-de576482]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-de576482]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-de576482],body[data-v-de576482],h1[data-v-de576482],h2[data-v-de576482],h3[data-v-de576482],h4[data-v-de576482],h5[data-v-de576482],h6[data-v-de576482],html[data-v-de576482],p[data-v-de576482]{font-family:\"IBM Plex Thai\",sans-serif}.general-card[data-v-de576482]{position:relative;width:250px;height:400px;padding:3px}.general-card figure[data-v-de576482]{margin:0;width:100%;height:170px;border-radius:6px;overflow:hidden}.general-card figure img[data-v-de576482]{width:100%;min-height:100%}.general-card .property[data-v-de576482]{display:flex;justify-content:space-between;margin-bottom:16px}.general-card .property strong[data-v-de576482]{font-weight:var(--font-bold)}.desc[data-v-de576482]{padding:16px}.desc p[data-v-de576482]{overflow:hidden;height:50px}.desc h6[data-v-de576482]{font-family:\"Lato\",sans-serif!important;font-weight:var(--font-bold)}.desc .button[data-v-de576482]{width:100%;border-width:2px;padding:4px 24px!important}.rating i[data-v-de576482]{color:#ffc107}.category-card[data-v-de576482]{border-radius:16px;margin-bottom:24px;overflow:hidden;position:relative;text-transform:none!important;padding:0!important;background:var(--v-secondarylight-base);text-align:center;display:flex}.theme--light .category-card[data-v-de576482]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .category-card[data-v-de576482]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-de576482]{height:250px}@media(max-width:599px){.category-card.v-btn--contained:not(.v-btn--round).v-size--default[data-v-de576482]{height:120px}}.category-card[data-v-de576482]  .v-btn__content{width:100%;height:100%;display:block}.category-card .figure[data-v-de576482]{margin:0;display:block}[dir=ltr] .category-card .figure[data-v-de576482]{margin-left:-2px}[dir=rtl] .category-card .figure[data-v-de576482]{margin-right:-2px}.category-card .figure img[data-v-de576482]{width:100%;position:relative}@media(min-width:1280px){.category-card:hover .property[data-v-de576482]{padding:32px 48px}.category-card:hover .property .title-category[data-v-de576482]:after{width:80%}[dir=ltr] .category-card:hover .property .title-category[data-v-de576482]:after{left:0}[dir=rtl] .category-card:hover .property .title-category[data-v-de576482]:after{right:0}}@media(min-width:1280px)and (min-width:1280px){.category-card:hover .property[data-v-de576482]{height:80%;bottom:0;opacity:1}.category-card:hover .property .desc-category[data-v-de576482]{opacity:1;bottom:0;height:70px}}.category-card .property[data-v-de576482]{transition:all .3s cubic-bezier(0,.81,1,.97);position:absolute;width:100%;height:25%;padding:16px 48px;bottom:0;border-radius:16px;color:#fff;-webkit-backdrop-filter:saturate(100%) blur(10px);backdrop-filter:saturate(100%) blur(10px);background:rgba(0,0,0,.32)}[dir=ltr] .category-card .property[data-v-de576482]{text-align:left}[dir=rtl] .category-card .property[data-v-de576482]{text-align:right}[dir=ltr] .category-card .property[data-v-de576482]{left:0}[dir=rtl] .category-card .property[data-v-de576482]{right:0}@media(max-width:1279px){.category-card .property[data-v-de576482]{padding:16px;bottom:0}.category-card .property .desc-category[data-v-de576482]{display:none}}@media(max-width:599px){.category-card .property[data-v-de576482]{padding:4px 16px;border-radius:12px;height:30%}}.desc-category[data-v-de576482]{margin-top:40px;font-size:22px;font-weight:var(--font-regular);white-space:normal;height:0;opacity:0;display:block;overflow:hidden}.title-category[data-v-de576482]{font-weight:var(--font-bold);font-size:24px;white-space:nowrap;position:relative;display:block;text-overflow:ellipsis}@media(max-width:599px){.title-category[data-v-de576482]{overflow:hidden;font-size:14px;text-align:center;line-height:28px}}.title-category[data-v-de576482]:after{content:\"\";height:2px;background:var(--v-primary-base);width:0;position:absolute;bottom:-10px;z-index:0;transition:all .2s cubic-bezier(.42,.16,.21,.93);transition-delay:.3s}[dir=ltr] .title-category[data-v-de576482]:after{left:50%}[dir=rtl] .title-category[data-v-de576482]:after{right:50%}.card-wrap[data-v-de576482]{position:relative}.card-wrap .fold[data-v-de576482]:before{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:80%;bottom:-25px}.theme--light .card-wrap .fold[data-v-de576482]:before{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-de576482]:before{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-de576482]:before{background-color:#fff}.theme--dark .card-wrap .fold[data-v-de576482]:before{background-color:#424242}.theme--light .card-wrap .fold[data-v-de576482]:before{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-de576482]:before{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.card-wrap .fold[data-v-de576482]:after{content:\"\";position:absolute;border-radius:16px;border:1px solid;height:80px;left:50%;transform:translate(-50%);width:90%;bottom:-15px}.theme--light .card-wrap .fold[data-v-de576482]:after{border-color:rgba(0,0,0,.12)}.theme--dark .card-wrap .fold[data-v-de576482]:after{border-color:hsla(0,0%,100%,.12)}.theme--light .card-wrap .fold[data-v-de576482]:after{background-color:#fff}.theme--dark .card-wrap .fold[data-v-de576482]:after{background-color:#424242}.theme--light .card-wrap .fold[data-v-de576482]:after{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.theme--dark .card-wrap .fold[data-v-de576482]:after{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.blog-card[data-v-de576482]{display:flex;margin-bottom:48px;align-items:center;position:relative}@media(max-width:599px){.blog-card[data-v-de576482]{margin-bottom:24px}}.blog-card[data-v-de576482]:before{border-radius:15px;content:\"\";width:100px;height:100px;transform:rotate(45deg);background:var(--v-secondary-base);opacity:.1;position:absolute;top:-10px}[dir=ltr] .blog-card[data-v-de576482]:before{left:-25px}[dir=rtl] .blog-card[data-v-de576482]:before{right:-25px}.blog-card .text a.v-btn[data-v-de576482]{padding:0;position:relative;text-transform:none;z-index:1;white-space:inherit}.theme--light .blog-card .text a.v-btn[data-v-de576482]{color:rgba(0,0,0,.87)}.theme--dark .blog-card .text a.v-btn[data-v-de576482]{color:#fff}.blog-card .text>a.v-btn[data-v-de576482]{font-weight:var(--font-regular)}.theme--light .blog-card .text>a.v-btn[data-v-de576482]{color:rgba(0,0,0,.54)}.theme--dark .blog-card .text>a.v-btn[data-v-de576482]{color:hsla(0,0%,100%,.7)}.blog-card .text h4[data-v-de576482]{line-height:normal}.blog-card .text h4[data-v-de576482]:before{border-radius:10px;content:\"\";width:50px;height:50px;transform:rotate(45deg);position:absolute;top:-6px}.theme--light .blog-card .text h4[data-v-de576482]:before{background:var(--v-secondarylight-base)}.theme--dark .blog-card .text h4[data-v-de576482]:before{background:var(--v-secondarydark-base)}[dir=ltr] .blog-card .text h4[data-v-de576482]:before{left:-25px}[dir=rtl] .blog-card .text h4[data-v-de576482]:before{right:-25px}.blog-card .text h4 a.v-btn[data-v-de576482]{display:block;font-size:24px;font-weight:var(--font-medium);transition:all .3s ease;height:80px}@media(max-width:599px){.blog-card .text h4 a.v-btn[data-v-de576482]{font-size:16px;line-height:22px}}.blog-card .text h4 a.v-btn[data-v-de576482]:hover{color:var(--v-primary-base)}.blog-card .date[data-v-de576482]{text-align:center}[dir=ltr] .blog-card .date[data-v-de576482]{margin-left:24px}[dir=rtl] .blog-card .date[data-v-de576482]{margin-right:24px}.theme--light .blog-card .date[data-v-de576482]{color:rgba(0,0,0,.38)}.theme--dark .blog-card .date[data-v-de576482]{color:hsla(0,0%,100%,.5)}.blog-card .date>*[data-v-de576482]{display:block;line-height:normal;font-weight:var(--font-regular)}.blog-card .date h3[data-v-de576482]{font-size:28px;text-transform:uppercase}@media(max-width:599px){.blog-card .date h3[data-v-de576482]{font-size:20px}}.blog-card .date h2[data-v-de576482]{font-size:46px}@media(max-width:599px){.blog-card .date h2[data-v-de576482]{font-size:32px}}.blog-card .date h4[data-v-de576482]{font-size:22px}@media(max-width:599px){.blog-card .date h4[data-v-de576482]{font-size:16px}}.testimonial[data-v-de576482]{height:260px;overflow:visible;border-radius:8px;border:3px solid;padding:32px 16px;position:relative}.theme--light .testimonial[data-v-de576482]{background-color:#fff}.theme--dark .testimonial[data-v-de576482]{background-color:#424242}.theme--light .testimonial[data-v-de576482]{border-color:rgba(0,0,0,.12)}.theme--dark .testimonial[data-v-de576482]{border-color:hsla(0,0%,100%,.12)}@media(min-width:600px){.testimonial[data-v-de576482]{padding:64px}}.testimonial .icon[data-v-de576482]{border-Radius:20px;transform:rotate(45deg);background:var(--v-primary-base);width:70px;height:70px;top:-30px;position:absolute;text-align:center;line-height:100px}[dir=ltr] .testimonial .icon[data-v-de576482]{left:32px}[dir=rtl] .testimonial .icon[data-v-de576482]{right:32px}@media(max-width:599px){.testimonial .icon[data-v-de576482]{display:none}}.testimonial .icon i[data-v-de576482]{transform:rotate(-45deg);font-size:70px;vertical-align:top;color:#fff}.testimonial h6[data-v-de576482]{font-weight:var(--font-bold)}.testimonial .text[data-v-de576482]{margin-bottom:32px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:72px}.theme--light .caption-title[data-v-de576482]{color:rgba(0,0,0,.54)}.theme--dark .caption-title[data-v-de576482]{color:hsla(0,0%,100%,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_22d5b716_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_22d5b716_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_22d5b716_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_22d5b716_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_22d5b716_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-22d5b716],.use-text-title[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-22d5b716]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-22d5b716]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-22d5b716]{font-size:28px;line-height:44px}}.use-text-title2[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-22d5b716]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-22d5b716]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-22d5b716]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-22d5b716]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-22d5b716]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-22d5b716]{font-size:16px;line-height:24px}}.use-text-caption[data-v-22d5b716],.use-text-paragraph[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-22d5b716]{font-size:14px;line-height:22px}}.use-hidden[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-22d5b716]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-22d5b716]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-22d5b716]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-22d5b716]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-22d5b716]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-22d5b716]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-22d5b716]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-22d5b716],body[data-v-22d5b716],h1[data-v-22d5b716],h2[data-v-22d5b716],h3[data-v-22d5b716],h4[data-v-22d5b716],h5[data-v-22d5b716],h6[data-v-22d5b716],html[data-v-22d5b716],p[data-v-22d5b716]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-22d5b716]{position:static}@media(max-width:1279px){.blog-list[data-v-22d5b716]{padding:40px 0 0}}@media(max-width:959px){.blog-list[data-v-22d5b716]{margin-top:48px}}.deco[data-v-22d5b716]{position:absolute;width:80%;height:640px;top:240px;border:2px solid var(--v-secondary-base);border-left:none;border-radius:0 100px 100px 0}[dir=ltr] .deco[data-v-22d5b716]{left:0}[dir=rtl] .deco[data-v-22d5b716]{right:0}.v-application--is-rtl .deco[data-v-22d5b716]{transform:scale(-1)}.more[data-v-22d5b716]{font-size:18px;padding:0!important}[dir=ltr] .more[data-v-22d5b716]{margin-left:-8px}[dir=rtl] .more[data-v-22d5b716]{margin-right:-8px}.video-wrap[data-v-22d5b716]{position:relative;display:flex;align-items:center;height:100%}@media(max-width:599px){.video-wrap[data-v-22d5b716]{max-width:320px;margin:0 auto}}.video-carousel[data-v-22d5b716]{width:100%;overflow:hidden;border-radius:30px;height:420px;position:relative;z-index:5}.theme--dark .video-carousel[data-v-22d5b716]{box-shadow:0 7px 9px -4px rgba(50,50,50,.2),0 14px 21px 2px rgba(50,50,50,.14),0 5px 26px 4px rgba(50,50,50,.12)}.theme--light .video-carousel[data-v-22d5b716]{box-shadow:0 7px 9px -4px hsla(0,0%,50.2%,.2),0 14px 21px 2px hsla(0,0%,50.2%,.14),0 5px 26px 4px hsla(0,0%,50.2%,.12);background-color:rgba(0,0,0,.87)}.theme--dark .video-carousel[data-v-22d5b716]{background-color:hsla(0,0%,100%,.7)}@media(min-width:1280px){.video-carousel[data-v-22d5b716]{margin:0 32px}}@media(max-width:959px){.video-carousel[data-v-22d5b716]{height:360px}}@media(max-width:599px){.video-carousel[data-v-22d5b716]{height:220px}}.video-carousel[data-v-22d5b716]  .slick-dots{bottom:32px}@media(max-width:599px){.video-carousel[data-v-22d5b716]  .slick-dots{visibility:hidden}}.video-carousel[data-v-22d5b716]  .slick-dots li{width:15px;height:15px;background:#fff;border-color:#fff;border-radius:15px;transition:all .5s ease-out}.video-carousel[data-v-22d5b716]  .slick-dots li.slick-active{width:40px}.video-carousel[data-v-22d5b716]  .slick-dots li:hover{opacity:.5}.video-carousel[data-v-22d5b716]  .slick-dots li button:before{display:none}.video-carousel[data-v-22d5b716]  .slick-current .item{opacity:1;transition-delay:.3s}.video-carousel[data-v-22d5b716]  .slick-current .item .play-btn{display:block;z-index:100}.item[data-v-22d5b716]{overflow:hidden;opacity:0;transition:opacity .7s ease-out;height:420px}.item.v-card[data-v-22d5b716]{background-color:#000}@media(max-width:959px){.item[data-v-22d5b716]{height:360px}}@media(max-width:599px){.item[data-v-22d5b716]{height:220px}}.item img[data-v-22d5b716]{width:100%;min-height:100%;display:block}.play-btn[data-v-22d5b716]{border-radius:10px;-webkit-backdrop-filter:saturate(100%) blur(10px);backdrop-filter:saturate(100%) blur(10px);background:rgba(0,0,0,.32);opacity:1;-webkit-backdrop-filter:saturate(90%) blur(5px);backdrop-filter:saturate(90%) blur(5px);position:absolute;width:80px;height:80px;top:calc(50% - 40px);padding:0;line-height:normal}[dir=ltr] .play-btn[data-v-22d5b716]{left:calc(50% - 40px)}[dir=rtl] .play-btn[data-v-22d5b716]{right:calc(50% - 40px)}.play-btn i.v-icon[data-v-22d5b716]{color:#fff;font-size:80px}.video-popup[data-v-22d5b716]{max-width:none}@media(min-width:600px){.video-popup[data-v-22d5b716]{width:690px}}.video-popup[data-v-22d5b716]  iframe{width:100%}.close-btn[data-v-22d5b716]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-22d5b716]{right:4px}[dir=rtl] .close-btn[data-v-22d5b716]{left:4px}.headline .title-main[data-v-22d5b716]{font-size:1.25rem;font-weight:var(--font-medium);line-height:2rem;letter-spacing:.0125em;width:100%;display:flex;justify-content:space-between}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("2065bca8", content, true)

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_0c3e905a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(262);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_0c3e905a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_0c3e905a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_0c3e905a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_0c3e905a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-0c3e905a],.use-text-title[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-0c3e905a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0c3e905a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0c3e905a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-0c3e905a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0c3e905a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0c3e905a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0c3e905a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0c3e905a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0c3e905a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0c3e905a],.use-text-paragraph[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0c3e905a]{font-size:14px;line-height:22px}}.use-hidden[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-0c3e905a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-0c3e905a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-0c3e905a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-0c3e905a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0c3e905a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-0c3e905a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-0c3e905a]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-0c3e905a],body[data-v-0c3e905a],h1[data-v-0c3e905a],h2[data-v-0c3e905a],h3[data-v-0c3e905a],h4[data-v-0c3e905a],h5[data-v-0c3e905a],h6[data-v-0c3e905a],html[data-v-0c3e905a],p[data-v-0c3e905a]{font-family:\"IBM Plex Thai\",sans-serif}.root[data-v-0c3e905a]{position:relative;text-align:center;height:570px}.parallax-wrap[data-v-0c3e905a]{position:absolute;width:100%;height:100%}.form[data-v-0c3e905a]{max-width:700px;border-radius:20px;margin:0 auto;top:250px;width:100%;display:block;position:relative;bottom:-80px;padding:40px 80px}.theme--light .form[data-v-0c3e905a]{background-color:#fff}.theme--dark .form[data-v-0c3e905a]{background-color:#424242}.theme--light .form[data-v-0c3e905a]{color:rgba(0,0,0,.54)}.theme--dark .form[data-v-0c3e905a]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.form[data-v-0c3e905a]{padding:40px 16px}}.form h4[data-v-0c3e905a]{margin-bottom:24px}.theme--light .form h4[data-v-0c3e905a]{color:rgba(0,0,0,.87)}.theme--dark .form h4[data-v-0c3e905a]{color:#fff}.field[data-v-0c3e905a]{margin:24px 0 32px}.v-btn.v-size--large.button[data-v-0c3e905a]{margin:0 auto;min-width:185px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0cd63bd9", content, true)

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_4860e1d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_4860e1d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_4860e1d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_4860e1d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_4860e1d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-4860e1d8],.use-text-title[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-4860e1d8]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4860e1d8]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4860e1d8]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4860e1d8]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4860e1d8]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4860e1d8]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4860e1d8]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4860e1d8]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4860e1d8]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4860e1d8],.use-text-paragraph[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4860e1d8]{font-size:14px;line-height:22px}}.use-hidden[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-4860e1d8]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4860e1d8]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4860e1d8]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4860e1d8]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4860e1d8]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4860e1d8]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4860e1d8]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-4860e1d8],body[data-v-4860e1d8],h1[data-v-4860e1d8],h2[data-v-4860e1d8],h3[data-v-4860e1d8],h4[data-v-4860e1d8],h5[data-v-4860e1d8],h6[data-v-4860e1d8],html[data-v-4860e1d8],p[data-v-4860e1d8]{font-family:\"IBM Plex Thai\",sans-serif}.fab.v-btn[data-v-4860e1d8]{transform:scale(.5);transition:all .5s ease;opacity:0;border-radius:10px;position:absolute;bottom:0;font-weight:var(--font-bold)}[dir=ltr] .fab.v-btn[data-v-4860e1d8]{right:0}[dir=rtl] .fab.v-btn[data-v-4860e1d8]{left:0}.fab.v-btn .icon[data-v-4860e1d8]{color:#fff;font-size:40px}.page-nav[data-v-4860e1d8]{z-index:200;position:fixed;bottom:40px;width:56px}[dir=ltr] .page-nav[data-v-4860e1d8]{right:40px}[dir=rtl] .page-nav[data-v-4860e1d8]{left:40px}.page-nav nav[data-v-4860e1d8]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-4860e1d8]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-4860e1d8]{margin-bottom:56px;padding:4px 0;position:relative}[dir=ltr] .page-nav .section-nav section[data-v-4860e1d8]{margin-left:22px}[dir=rtl] .page-nav .section-nav section[data-v-4860e1d8]{margin-right:22px}.page-nav .section-nav a[data-v-4860e1d8]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border-radius:4px;transform:rotate(45deg);background:hsla(0,0%,100%,.3);border:1px solid var(--v-secondarydark-base);display:block;transition:all .4s ease;color:transparent}.theme--dark .page-nav .section-nav a[data-v-4860e1d8]{box-shadow:0 1px 3px 0 rgba(50,50,50,.2),0 1px 1px 0 rgba(50,50,50,.14),0 2px 1px -1px rgba(50,50,50,.12)}.theme--light .page-nav .section-nav a[data-v-4860e1d8]{box-shadow:0 1px 3px 0 hsla(0,0%,50.2%,.2),0 1px 1px 0 hsla(0,0%,50.2%,.14),0 2px 1px -1px hsla(0,0%,50.2%,.12);border-color:rgba(0,0,0,.38)}.theme--dark .page-nav .section-nav a[data-v-4860e1d8]{border-color:hsla(0,0%,100%,.5)}.page-nav .section-nav a.active[data-v-4860e1d8]{background:var(--v-primarydark-base)}.page-nav:hover nav[data-v-4860e1d8]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-4860e1d8]{opacity:1;top:0!important}.tooltip[data-v-4860e1d8]{text-transform:capitalize;font-size:14px;border-radius:0!important;opacity:1!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("dc0628f2", content, true)

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70fc1fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70fc1fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70fc1fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70fc1fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70fc1fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-a70fc1fa],.use-text-title[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-a70fc1fa]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-a70fc1fa]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-a70fc1fa]{font-size:28px;line-height:44px}}.use-text-title2[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-a70fc1fa]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-a70fc1fa]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-a70fc1fa]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-a70fc1fa]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-a70fc1fa]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-a70fc1fa]{font-size:16px;line-height:24px}}.use-text-caption[data-v-a70fc1fa],.use-text-paragraph[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-a70fc1fa]{font-size:14px;line-height:22px}}.use-hidden[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-a70fc1fa]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a70fc1fa]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a70fc1fa]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a70fc1fa]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a70fc1fa]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a70fc1fa]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a70fc1fa]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}.main-wrap[data-v-a70fc1fa],a[data-v-a70fc1fa],body[data-v-a70fc1fa],h1[data-v-a70fc1fa],h2[data-v-a70fc1fa],h3[data-v-a70fc1fa],h4[data-v-a70fc1fa],h5[data-v-a70fc1fa],h6[data-v-a70fc1fa],html[data-v-a70fc1fa],p[data-v-a70fc1fa]{font-family:\"IBM Plex Thai\",sans-serif}.main-wrap[data-v-a70fc1fa]{position:relative;width:100%;overflow:hidden}.theme--dark .main-wrap[data-v-a70fc1fa]{background-color:#303030;font-family:\"IBM Plex Thai\",sans-serif}.theme--light .main-wrap[data-v-a70fc1fa]{background-color:#fff;font-family:\"IBM Plex Thai\",sans-serif}.space-bottom[data-v-a70fc1fa]{padding-bottom:160px}@media(max-width:1279px){.space-bottom[data-v-a70fc1fa]{padding-bottom:120px}}.space-bottom-short[data-v-a70fc1fa]{padding-bottom:80px}.space-top[data-v-a70fc1fa]{padding-top:160px}@media(max-width:1279px){.space-top[data-v-a70fc1fa]{padding-top:120px}}@media(max-width:599px){.space-top[data-v-a70fc1fa]{padding-top:60px}}.space-top-short[data-v-a70fc1fa]{padding-top:80px}.container-wrap>section[data-v-a70fc1fa]{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a70fc1fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-a70fc1fa>","</div>",[_c('header-main'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-a70fc1fa>","</div>",[_vm._ssrNode("<section id=\"home\" data-v-a70fc1fa>","</section>",[_c('banner')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"testimonials\" class=\"space-top\" data-v-a70fc1fa>","</section>",[_c('testimonials')],1),_vm._ssrNode(" "),_c('footer-main')],2),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('notification')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a70fc1fa&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 39 modules
var Header = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=template&id=74c84c12&scoped=true&
var Bannervue_type_template_id_74c84c12_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-content"},[_c('v-container',{class:{ 'fixed-width': _vm.isDesktop }},[_c('v-row',{staticClass:"banner-wrap"},[_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","lg":"6","md":"7"}},[_c('div',{staticClass:"banner-text"},[_c('div',{staticClass:"title"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              โรงเรียนโพธาวัฒนาเสนี\n            ")])]),_vm._v(" "),_c('h5',{staticClass:"subtitle"},[_vm._v("\n            \" นตฺถิ ปญฺญา สมา อาภา \""),_c('br'),_vm._v(" "),_c('font',{attrs:{"color":"#999"}},[_vm._v("แสงสว่างใดเสมอด้วยปัญญาไม่มี")])],1),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"primary","width":"200","href":"#feature"}},[_c('div',{staticClass:"btn-white"},[_vm._v("\n            เข้าสู่เว็บไซต์\n          ")])]),_vm._v(" "),_c('br'),_c('br'),_c('br')],1)]),_vm._v(" "),(_vm.isTablet)?_c('v-col',{staticClass:"md-5 pa-6 deco-grid",attrs:{"lg":"6","cols":"12"}},[_c('div',{staticClass:"deco-banner"},[_c('div',{staticClass:"artwork-bg"},[_c('div',{staticClass:"oval"}),_vm._v(" "),_c('img',{attrs:{"src":"/images/education/banner-artwork.png","alt":"artwork"}}),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"parallax-scene front"},[_c('kinesis-container',{attrs:{"duration":1500,"easing":"cubic-bezier(0.23, 1, 0.32, 1)"}},[_c('kinesis-element',{attrs:{"strength":10,"type":"translate","tag":"div"}},[_c('span',{staticClass:"icon-two"})]),_vm._v(" "),_c('kinesis-element',{attrs:{"strength":15,"type":"translate","tag":"div"}},[_c('span',{staticClass:"icon-one"})])],1)],1):_vm._e()])])]):_vm._e()],1)],1),_vm._ssrNode(" <div id=\"watched_counter\" data-v-74c84c12></div>")],2)}
var Bannervue_type_template_id_74c84c12_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=template&id=74c84c12&scoped=true&

// EXTERNAL MODULE: external "vue-kinesis"
var external_vue_kinesis_ = __webpack_require__(196);

// CONCATENATED MODULE: ./static/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  education: ['https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/270x320/189a96/FFFFFF', 'https://via.placeholder.com/364x258/189a96/FFFFFF', 'https://via.placeholder.com/456x304/36a2c9/FFFFFF', 'https://via.placeholder.com/237x158/98ad25/FFFFFF', 'https://via.placeholder.com/317x211/d03c3c/FFFFFF', 'https://via.placeholder.com/700x462/8e8e8e/FFFFFF', 'https://via.placeholder.com/700x462/52596b/FFFFFF', 'https://via.placeholder.com/700x463/8e8e8e/FFFFFF', 'https://via.placeholder.com/700x463/52596b/FFFFFF', 'https://via.placeholder.com/1200x801/9a7a4f/FFFFFF']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    KinesisContainer: external_vue_kinesis_["KinesisContainer"],
    KinesisElement: external_vue_kinesis_["KinesisElement"]
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleScroll: function () {
      if (window.scrollY > 80) {
        return this.fixed = true;
      }

      return this.fixed = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    },
    handleToggleOpen: function () {
      console.log(this.openDrawer);
      this.openDrawer = !this.openDrawer;
    }
  },
  computed: {
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./components/Banner/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Banner_Bannervue_type_script_lang_js_,
  Bannervue_type_template_id_74c84c12_scoped_true_render,
  Bannervue_type_template_id_74c84c12_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "74c84c12",
  "165f90cc"
  
)

/* harmony default export */ var Banner = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Banner/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=template&id=4de43e54&scoped=true&
var Featurevue_type_template_id_4de43e54_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"max-md"},[_c('title-main',{attrs:{"head":_vm.$t('educationLanding.feature_title'),"desc":_vm.$t('educationLanding.feature_desc'),"align":"center","color":"primary"}}),_vm._v(" "),_c('v-row',{staticClass:"spacing8 grid"},[_c('v-col',{staticClass:"px-8",attrs:{"sm":"6"}},[_c('div',{staticClass:"counter-item"},[_c('figure',[_c('img',{attrs:{"src":"/images/education/hd-video.svg","alt":"hd-video"}})]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h4',{staticClass:"use-text-title"},[_vm._v("\n              +"),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 100,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 100,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}),_vm._v("K\n            ")]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("\n              "+_vm._s(_vm.$t('educationLanding.counter_videos'))+"\n            ")])]):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"px-8",attrs:{"sm":"6"}},[_c('div',{staticClass:"counter-item"},[_c('figure',[_c('img',{attrs:{"src":"/images/education/presenter.svg","alt":"presenter"}})]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h4',{staticClass:"use-text-title"},[_vm._v("\n              +"),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 200,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 200,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("\n              "+_vm._s(_vm.$t('educationLanding.counter_mentors'))+"\n            ")])]):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"px-8",attrs:{"sm":"6"}},[_c('div',{staticClass:"counter-item"},[_c('figure',[_c('img',{attrs:{"src":"/images/education/money.svg","alt":"money"}})]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h4',{staticClass:"use-text-title"},[_vm._v("\n              $"),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 500,
                  options: { duration: 2 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 500,\n                  options: { duration: 2 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("\n              "+_vm._s(_vm.$t('educationLanding.counter_save'))+"\n            ")])]):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"px-8",attrs:{"sm":"6"}},[_c('div',{staticClass:"counter-item"},[_c('figure',[_c('img',{attrs:{"src":"/images/education/unlimited.svg","alt":"unlimited"}})]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h4',{staticClass:"use-text-title"},[_vm._v("Free")]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("\n              "+_vm._s(_vm.$t('educationLanding.counter_free'))+"\n            ")])]):_vm._e()])])],1)],1)],1)}
var Featurevue_type_template_id_4de43e54_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=template&id=4de43e54&scoped=true&

// EXTERNAL MODULE: ./components/Title/index.js + 5 modules
var Title = __webpack_require__(215);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Featurevue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature_Featurevue_type_script_lang_js_ = (Featurevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Feature/Feature.vue



function Feature_injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature_component = Object(componentNormalizer["a" /* default */])(
  Feature_Featurevue_type_script_lang_js_,
  Featurevue_type_template_id_4de43e54_scoped_true_render,
  Featurevue_type_template_id_4de43e54_scoped_true_staticRenderFns,
  false,
  Feature_injectStyles,
  "4de43e54",
  "275625ba"
  
)

/* harmony default export */ var Feature = (Feature_component.exports);

/* vuetify-loader */




installComponents_default()(Feature_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Feature/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PopularCourse/PopularCourse.vue?vue&type=template&id=446a3aa4&scoped=true&
var PopularCoursevue_type_template_id_446a3aa4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"parallax-wrap\" data-v-446a3aa4>","</div>",[_c('dot-parallax')],1),_vm._ssrNode(" "),_c('v-container',[_c('div',{staticClass:"floating-title"},[_c('title-main',{attrs:{"head":_vm.$t('educationLanding.popular_title'),"desc":_vm.$t('educationLanding.popular_desc'),"align":_vm.isMobile ? 'center' : 'left',"dark":"","color":"primary"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"slider-wrap\" data-v-446a3aa4>","</div>",[(_vm.loaded)?_vm._ssrNode("<div class=\"carousel\" data-v-446a3aa4>","</div>",[_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},[_c('div',{staticClass:"props item-props-first"},[_c('div')]),_vm._v(" "),_vm._l((_vm.courseData),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('general-card',{attrs:{"img":item.img,"title":item.title,"desc":item.desc,"rating":item.rating,"price":item.price}})],1)}),_vm._v(" "),_c('div',{staticClass:"props item-props-last"},[_c('div')])],2)],1):_vm._e(),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav prev",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.prev()}}},[_c('i',{staticClass:"ion-ios-arrow-left"})]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav next",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.next()}}},[_c('i',{staticClass:"ion-ios-arrow-right"})])],2)],2)}
var PopularCoursevue_type_template_id_446a3aa4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PopularCourse/PopularCourse.vue?vue&type=template&id=446a3aa4&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/General.vue?vue&type=template&id=e5bb8512&scoped=true&
var Generalvue_type_template_id_e5bb8512_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"general-card"},[_c('figure',[_c('img',{attrs:{"src":_vm.img,"alt":_vm.title}})]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('h6',{staticClass:"title pb-2"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("\n      "+_vm._s(_vm.desc)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"property"},[_c('div',{staticClass:"rating"},_vm._l((_vm.rating),function(index){return _c('v-icon',{key:index,staticClass:"star-icon"},[_vm._v("\n          mdi-star\n        ")])}),1),_vm._v(" "),_c('strong',[_vm._v("$"+_vm._s(_vm.price))])]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"href":"#","block":"","outlined":"","color":"primary"}},[_vm._v("\n      Explore\n    ")])],1)])}
var Generalvue_type_template_id_e5bb8512_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/General.vue?vue&type=template&id=e5bb8512&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/General.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Generalvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/General.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Generalvue_type_script_lang_js_ = (Generalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(54);

// CONCATENATED MODULE: ./components/Cards/General.vue



function General_injectStyles (context) {
  
  var style0 = __webpack_require__(277)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var General_component = Object(componentNormalizer["a" /* default */])(
  Cards_Generalvue_type_script_lang_js_,
  Generalvue_type_template_id_e5bb8512_scoped_true_render,
  Generalvue_type_template_id_e5bb8512_scoped_true_staticRenderFns,
  false,
  General_injectStyles,
  "e5bb8512",
  "0bf490d9"
  
)

/* harmony default export */ var General = (General_component.exports);

/* vuetify-loader */




installComponents_default()(General_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Dot.vue?vue&type=template&id=7b2b3e5c&scoped=true&
var Dotvue_type_template_id_7b2b3e5c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap dots-wrap"},[_vm._ssrNode("<div class=\"inner-parallax\" data-v-7b2b3e5c>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-7b2b3e5c>","</div>",[(_vm.loaded)?_vm._ssrNode("<div data-v-7b2b3e5c>","</div>",[_c('parallax',{attrs:{"speed-factor":0.5,"section-height":800,"direction":"down"}},[_c('svg',{staticClass:"parallax-vertical parallax-dot",attrs:{"fill":"#cccccc","width":"902px","height":"1042px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/dot-deco.svg#dot"}})])])],1):_vm._e()])])])}
var Dotvue_type_template_id_7b2b3e5c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Dot.vue?vue&type=template&id=7b2b3e5c&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(197);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Dot.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Dotvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Dot.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Dotvue_type_script_lang_js_ = (Dotvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Dot.vue



function Dot_injectStyles (context) {
  
  var style0 = __webpack_require__(279)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Dot_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Dotvue_type_script_lang_js_,
  Dotvue_type_template_id_7b2b3e5c_scoped_true_render,
  Dotvue_type_template_id_7b2b3e5c_scoped_true_staticRenderFns,
  false,
  Dot_injectStyles,
  "7b2b3e5c",
  "78f817f8"
  
)

/* harmony default export */ var Dot = (Dot_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PopularCourse/PopularCourse.vue?vue&type=script&lang=js&
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




const courseData = [{
  img: images_imgAPI.education[9],
  title: 'Vivamus sit amet',
  rating: 5,
  price: 50,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.education[5],
  title: 'Vivamus sit amet',
  rating: 4,
  price: 10,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.education[3],
  title: 'Vivamus sit amet',
  rating: 5,
  price: 50,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.education[4],
  title: 'Vivamus sit amet',
  rating: 3,
  price: 25,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.education[8],
  title: 'Vivamus sit amet',
  rating: 5,
  price: 50,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.education[7],
  title: 'Vivamus sit amet',
  rating: 5,
  price: 40,
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}];
/* harmony default export */ var PopularCoursevue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    DotParallax: Dot,
    GeneralCard: General,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 211, 7))
  },

  data() {
    return {
      imgAPI: images_imgAPI,
      loaded: false,
      courseData: courseData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        variableWidth: true,
        responsive: [{
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px

    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.courseData.length + props - this.slickOptions.slidesToShow);
        this.$refs.slick.goTo(lastSlide);
      }
    }, 200);
  },

  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  },
  methods: {
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    }
  }
});
// CONCATENATED MODULE: ./components/PopularCourse/PopularCourse.vue?vue&type=script&lang=js&
 /* harmony default export */ var PopularCourse_PopularCoursevue_type_script_lang_js_ = (PopularCoursevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/PopularCourse/PopularCourse.vue



function PopularCourse_injectStyles (context) {
  
  var style0 = __webpack_require__(281)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PopularCourse_component = Object(componentNormalizer["a" /* default */])(
  PopularCourse_PopularCoursevue_type_script_lang_js_,
  PopularCoursevue_type_template_id_446a3aa4_scoped_true_render,
  PopularCoursevue_type_template_id_446a3aa4_scoped_true_staticRenderFns,
  false,
  PopularCourse_injectStyles,
  "446a3aa4",
  "69f8b594"
  
)

/* harmony default export */ var PopularCourse = (PopularCourse_component.exports);

/* vuetify-loader */



installComponents_default()(PopularCourse_component, {VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/PopularCourse/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Explore/Explore.vue?vue&type=template&id=5d1ec732&scoped=true&
var Explorevue_type_template_id_5d1ec732_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root",class:[_vm.isRtl ? 'rtl' : 'ltr']},[_vm._ssrNode("<div class=\"parallax-wrap\" data-v-5d1ec732>","</div>",[_c('dot-parallax')],1),_vm._ssrNode(" "),_c('v-container',{class:{ 'fixed-width': _vm.isDesktop }},[_c('div',{staticClass:"px-6"},[_c('title-main',{attrs:{"head":_vm.$t('educationLanding.explore_title'),"desc":_vm.$t('educationLanding.explore_desc'),"align":_vm.isMobile ? 'center' : 'left',"color":"primary"}})],1),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"massonry"},[_c('u-animate-container',[_c('v-row',[_vm._l((_vm.categoriesData),function(item,index){return _c('v-col',{key:index,staticClass:"pa-sm-6 pa-2",attrs:{"cols":"6","lg":"4","sm":"6"}},[_c('u-animate',{attrs:{"delay":(index * 0.2) + 's',"name":"fadeInUpShort","duration":"0.4s"}},[_c('div',[_c('category-card',{attrs:{"img":item.img,"title":item.title,"desc":item.desc}})],1)])],1)}),_vm._v(" "),_c('v-col',{staticClass:"pa-sm-6 pa-2",attrs:{"cols":"6","lg":"4","sm":"6"}},[_c('u-animate',{attrs:{"delay":(_vm.categoriesData.length * 0.2) + 's',"name":"fadeInUpShort","duration":"0.4s"}},[_c('div',{staticClass:"card-wrap"},[_c('span',{staticClass:"fold"}),_vm._v(" "),_c('v-btn',{staticClass:"all-category-card",attrs:{"href":"#"}},[_c('span',{staticClass:"figure"},[_c('img',{attrs:{"src":_vm.imgAPI.education[10],"alt":"img"}})]),_vm._v(" "),_c('span',{staticClass:"property"},[_c('span',{staticClass:"title-category"},[_vm._v("ALL COURSE")]),_vm._v(" "),_c('v-icon',[_vm._v("mdi-arrow-right")])],1)])],1)])],1)],2)],1)],1):_vm._e()])],2)}
var Explorevue_type_template_id_5d1ec732_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Explore/Explore.vue?vue&type=template&id=5d1ec732&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Category.vue?vue&type=template&id=5ec303dc&scoped=true&
var Categoryvue_type_template_id_5ec303dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-wrap"},[_vm._ssrNode("<span class=\"fold\" data-v-5ec303dc></span> "),_c('v-btn',{staticClass:"category-card",attrs:{"href":"#"}},[_c('span',{staticClass:"figure"},[_c('img',{attrs:{"src":_vm.img,"alt":"img"}})]),_vm._v(" "),_c('span',{staticClass:"property"},[_c('span',{staticClass:"title-category"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('span',{staticClass:"desc-category"},[_vm._v("\n        "+_vm._s(_vm.desc)+"\n      ")])])])],2)}
var Categoryvue_type_template_id_5ec303dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/Category.vue?vue&type=template&id=5ec303dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Category.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Categoryvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/Category.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Categoryvue_type_script_lang_js_ = (Categoryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Category.vue



function Category_injectStyles (context) {
  
  var style0 = __webpack_require__(283)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Category_component = Object(componentNormalizer["a" /* default */])(
  Cards_Categoryvue_type_script_lang_js_,
  Categoryvue_type_template_id_5ec303dc_scoped_true_render,
  Categoryvue_type_template_id_5ec303dc_scoped_true_staticRenderFns,
  false,
  Category_injectStyles,
  "5ec303dc",
  "3624625d"
  
)

/* harmony default export */ var Category = (Category_component.exports);

/* vuetify-loader */


installComponents_default()(Category_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Explore/Explore.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Explorevue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    CategoryCard: Category,
    DotParallax: Dot
  },

  data() {
    return {
      loaded: false,
      imgAPI: images_imgAPI,
      isRtl: false,
      categoriesData: [{
        img: images_imgAPI.education[0],
        title: 'Photography',
        desc: 'Nulla lobortis nunc vitae nisi semper semper.'
      }, {
        img: images_imgAPI.education[4],
        title: 'Artificial Intelligence',
        desc: 'Nulla lobortis nunc vitae nisi semper semper.'
      }, {
        img: images_imgAPI.education[7],
        title: 'Architect',
        desc: 'Nulla lobortis nunc vitae nisi semper semper.'
      }, {
        img: images_imgAPI.education[2],
        title: 'Geography',
        desc: 'Nulla lobortis nunc vitae nisi semper semper.'
      }, {
        img: images_imgAPI.education[6],
        title: 'Art',
        desc: 'Nulla lobortis nunc vitae nisi semper semper.'
      }]
    };
  },

  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        this.isRtl = true;
      }
    }, 200);
  },

  computed: {
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Explore/Explore.vue?vue&type=script&lang=js&
 /* harmony default export */ var Explore_Explorevue_type_script_lang_js_ = (Explorevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Explore/Explore.vue



function Explore_injectStyles (context) {
  
  var style0 = __webpack_require__(285)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Explore_component = Object(componentNormalizer["a" /* default */])(
  Explore_Explorevue_type_script_lang_js_,
  Explorevue_type_template_id_5d1ec732_scoped_true_render,
  Explorevue_type_template_id_5d1ec732_scoped_true_staticRenderFns,
  false,
  Explore_injectStyles,
  "5d1ec732",
  "42e28af4"
  
)

/* harmony default export */ var Explore = (Explore_component.exports);

/* vuetify-loader */






installComponents_default()(Explore_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Explore/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=template&id=717afffc&scoped=true&
var Aboutvue_type_template_id_717afffc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"fixed-width"},[_c('u-animate-container',[_c('v-row',[_c('v-col',{staticClass:"illu-wrap",attrs:{"md":"6","cols":"12"}},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"illustration one"}),_vm._v(" "),_c('figure',{staticClass:"illustration two"},[_c('img',{attrs:{"src":_vm.imgAPI.education[11],"alt":"about"}})]),_vm._v(" "),_c('figure',{staticClass:"illustration three"},[_c('img',{attrs:{"src":_vm.imgAPI.education[12],"alt":"about"}})]),_vm._v(" "),_c('figure',{staticClass:"illustration four"},[_c('img',{attrs:{"src":_vm.imgAPI.education[13],"alt":"about"}})]),_vm._v(" "),_c('div',{staticClass:"illustration five"})])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"6","cols":"12"}},[_c('u-animate',{attrs:{"offset":-100,"delay":"0.2s","name":"fadeInRight","duration":"0.6s"}},[_c('div',[_c('div',{staticClass:"title-about"},[_c('h3',{staticClass:"use-text-title"},[_c('span',[_vm._v(_vm._s(_vm.$t('educationLanding.about_title')))])])]),_vm._v(" "),_c('p',{staticClass:"use-text.paragraph"},[_vm._v("\n                "+_vm._s(_vm.$t('educationLanding.about_desc'))+"\n              ")]),_vm._v(" "),_c('v-btn',{staticClass:"white",attrs:{"href":_vm.link.education.login}},[_vm._v("\n                "+_vm._s(_vm.$t('educationLanding.about_join'))+"\n              ")])],1)])],1)],1)],1)],1)],1)}
var Aboutvue_type_template_id_717afffc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/About.vue?vue&type=template&id=717afffc&scoped=true&

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    'title-main': Title["a" /* default */]
  },
  data: () => ({
    imgAPI: images_imgAPI,
    link: text_link["a" /* default */]
  })
});
// CONCATENATED MODULE: ./components/About/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/About/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(287)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  About_Aboutvue_type_script_lang_js_,
  Aboutvue_type_template_id_717afffc_scoped_true_render,
  Aboutvue_type_template_id_717afffc_scoped_true_staticRenderFns,
  false,
  About_injectStyles,
  "717afffc",
  "7fdbe2e8"
  
)

/* harmony default export */ var About = (About_component.exports);

/* vuetify-loader */





installComponents_default()(About_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/About/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=template&id=644ee074&scoped=true&
var Testimonialsvue_type_template_id_644ee074_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('title-main',{attrs:{"head":_vm.$t('educationLanding.testimonials_title'),"desc":_vm.$t('educationLanding.testimonials_desc'),"align":"center","color":"primary"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"slider-wrap\" data-v-644ee074>","</div>",[(_vm.loaded)?_vm._ssrNode("<div class=\"carousel\" data-v-644ee074>","</div>",[_c('slick',{ref:"slider",attrs:{"options":_vm.slickOptions}},_vm._l((_vm.testiContent),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('testi-card',{attrs:{"text":item.text,"name":item.name,"title":item.title}})],1)}),0),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav prev",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.slickPrev()}}},[_c('i',{staticClass:"ion-ios-arrow-left"})]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav next",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.slickNext()}}},[_c('i',{staticClass:"ion-ios-arrow-right"})])],2):_vm._e()])],2)}
var Testimonialsvue_type_template_id_644ee074_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=template&id=644ee074&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Testimonial.vue?vue&type=template&id=8eea163a&scoped=true&
var Testimonialvue_type_template_id_8eea163a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial"},[_vm._ssrNode("<div class=\"icon\" data-v-8eea163a>","</div>",[_c('v-icon',[_vm._v("mdi-format-quote-close")])],1),_vm._ssrNode(" <p class=\"text\" data-v-8eea163a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.text)+"\n  ")+"</p> <h6 class=\"title\" data-v-8eea163a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.name)+"\n  ")+"</h6> <p class=\"caption-title\" data-v-8eea163a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.title)+"\n  ")+"</p>")],2)}
var Testimonialvue_type_template_id_8eea163a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/Testimonial.vue?vue&type=template&id=8eea163a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Testimonial.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Testimonialvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/Testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Testimonialvue_type_script_lang_js_ = (Testimonialvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Testimonial.vue



function Testimonial_injectStyles (context) {
  
  var style0 = __webpack_require__(289)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonial_component = Object(componentNormalizer["a" /* default */])(
  Cards_Testimonialvue_type_script_lang_js_,
  Testimonialvue_type_template_id_8eea163a_scoped_true_render,
  Testimonialvue_type_template_id_8eea163a_scoped_true_staticRenderFns,
  false,
  Testimonial_injectStyles,
  "8eea163a",
  "9b3cb6e0"
  
)

/* harmony default export */ var Testimonial = (Testimonial_component.exports);

/* vuetify-loader */


installComponents_default()(Testimonial_component, {VIcon: VIcon["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
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


const testiData = [{
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  name: 'John Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  name: 'Jean Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  name: 'Jena Doe',
  title: 'Graphic Designer'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  name: 'Jihan Doe',
  title: 'CEO Software House'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}];
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    TestiCard: Testimonial,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 211, 7))
  },

  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 2,
        arrows: false,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    slickNext() {
      this.$refs.slider.next();
    },

    slickPrev() {
      this.$refs.slider.prev();
    }

  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue



function Testimonials_injectStyles (context) {
  
  var style0 = __webpack_require__(291)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_644ee074_scoped_true_render,
  Testimonialsvue_type_template_id_644ee074_scoped_true_staticRenderFns,
  false,
  Testimonials_injectStyles,
  "644ee074",
  "3fa3afe8"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);

/* vuetify-loader */


installComponents_default()(Testimonials_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./components/Testimonials/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=template&id=22d5b716&scoped=true&
var Blogvue_type_template_id_22d5b716_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-dialog',{attrs:{"max-width":"690"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',{staticClass:"video-popup"},[_c('v-card-title',{staticClass:"headline"},[_c('h2',{staticClass:"title-main"},[_vm._v("\n          "+_vm._s(_vm.$t('educationLanding.blog_video'))+"\n          "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoClose()}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1)]),_vm._v(" "),(_vm.yt)?_c('div',{staticClass:"text-center"},[_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":_vm.playerVars,"width":640,"height":360}})],1):_vm._e()],1)],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"deco"})]),_vm._ssrNode(" "),_c('v-container',{staticClass:"fixed-width"},[_c('div',{staticClass:"pa-md-8 pa-2"},[_c('title-main',{attrs:{"head":_vm.$t('educationLanding.blog_title'),"desc":_vm.$t('educationLanding.blog_desc'),"align":_vm.isMobile ? 'center' : 'left',"color":"secondary"}})],1),_vm._v(" "),_c('v-row',{class:[_vm.isDesktop ? 'row-reverse' : '']},[_c('v-col',{staticClass:"pa-md-8",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"video-wrap"},[(_vm.loaded)?_c('div',{staticClass:"video-carousel"},[_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},[_c('v-card',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.education[14],"alt":"cover"}}),_vm._v(" "),_c('v-btn',{staticClass:"play-btn",attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoOpen('HBeJA3q19mk')}}},[_c('v-icon',[_vm._v("mdi-play")])],1)],1),_vm._v(" "),_c('v-card',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.education[15],"alt":"cover"}}),_vm._v(" "),_c('v-btn',{staticClass:"play-btn",attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoOpen('6p0VM-yUpGk')}}},[_c('v-icon',[_vm._v("mdi-play")])],1)],1),_vm._v(" "),_c('v-card',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.education[16],"alt":"cover"}}),_vm._v(" "),_c('v-btn',{staticClass:"play-btn",attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoOpen('HBeJA3q19mk')}}},[_c('v-icon',[_vm._v("mdi-play")])],1)],1),_vm._v(" "),_c('v-card',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.education[17],"alt":"cover"}}),_vm._v(" "),_c('v-btn',{staticClass:"play-btn",attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoOpen('6p0VM-yUpGk')}}},[_c('v-icon',[_vm._v("mdi-play")])],1)],1)],1)],1):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"pa-md-10 pa-4",attrs:{"md":"6","cols":"12"}},[(_vm.loaded)?_c('div',{staticClass:"blog-list"},[_c('u-animate-container',[_vm._l((_vm.blogData),function(item,index){return _c('div',{key:index},[_c('u-animate',{attrs:{"offset":-200,"delay":(index *0.2) + 's',"name":"fadeInLeftShort","duration":"0.6s"}},[_c('blog-card',{attrs:{"category":item.category,"title":item.title,"date":item.date}})],1)],1)}),_vm._v(" "),_c('v-btn',{staticClass:"more",attrs:{"text":"","color":"secondary"}},[_vm._v("more")])],2)],1):_vm._e()])],1)],1)],2)}
var Blogvue_type_template_id_22d5b716_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=template&id=22d5b716&scoped=true&

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Blog.vue?vue&type=template&id=de576482&scoped=true&
var Blogvue_type_template_id_de576482_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-card"},[_vm._ssrNode("<div class=\"text\" data-v-de576482>","</div>",[_c('v-btn',{attrs:{"text":"","href":"#"}},[_vm._v("\n      "+_vm._s(_vm.category)+"\n    ")]),_vm._ssrNode(" "),_vm._ssrNode("<h4 data-v-de576482>","</h4>",[_c('v-btn',{attrs:{"text":"","href":"#"}},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])],1)],2),_vm._ssrNode(" <div class=\"date\" data-v-de576482><h3 data-v-de576482>"+_vm._ssrEscape(_vm._s(_vm.month))+"</h3> <h2 data-v-de576482>"+_vm._ssrEscape(_vm._s(_vm.day))+"</h2> <h4 data-v-de576482>"+_vm._ssrEscape(_vm._s(_vm.year))+"</h4></div>")],2)}
var Blogvue_type_template_id_de576482_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/Blog.vue?vue&type=template&id=de576482&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Blog.vue?vue&type=script&lang=js&
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
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  data() {
    return {
      dateRaw: new Date(this.date)
    };
  },

  computed: {
    month() {
      return month[this.dateRaw.getMonth()];
    },

    day() {
      return this.dateRaw.getDate() < 10 ? '0' + this.dateRaw.getDate() : this.dateRaw.getDate();
    },

    year() {
      return this.dateRaw.getFullYear();
    }

  },
  props: {
    category: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Blog.vue



function Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Blog_component = Object(componentNormalizer["a" /* default */])(
  Cards_Blogvue_type_script_lang_js_,
  Blogvue_type_template_id_de576482_scoped_true_render,
  Blogvue_type_template_id_de576482_scoped_true_staticRenderFns,
  false,
  Blog_injectStyles,
  "de576482",
  "7b0842fe"
  
)

/* harmony default export */ var Blog = (Blog_component.exports);

/* vuetify-loader */


installComponents_default()(Blog_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=script&lang=js&
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





const blogData = [{
  title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
  category: 'Science - Math',
  date: 'Feb 08 2021'
}, {
  title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
  category: 'Science - Math',
  date: 'Feb 08 2021'
}, {
  title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
  category: 'Science - Math',
  date: 'Feb 08 2021'
}];
/* harmony default export */ var Blog_Blogvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    Hidden: Hidden["a" /* default */],
    BlogCard: Blog,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 211, 7))
  },

  data() {
    return {
      dialog: false,
      imgAPI: images_imgAPI,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUpGk',
      blogData: blogData,
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
        fade: true,
        arrows: false
      },
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8011'
      }
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleVideoOpen(id) {
      this.videoId = id;
      this.dialog = true;

      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player;
          this.player.playVideo();
        }, 100);
      }
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    }

  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },

    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_Blogvue_type_script_lang_js_ = (Blog_Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDialog/VDialog.sass
var VDialog = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js
var VThemeProvider = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js + 2 modules
var overlayable = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/returnable/index.js
var returnable = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/stackable/index.js
var stackable = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
// Styles
 // Components

 // Mixins







 // Directives

 // Helpers




const baseMixins = Object(mixins["a" /* default */])(activatable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], overlayable["a" /* default */], returnable["a" /* default */], stackable["a" /* default */], toggleable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VDialog_VDialog = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: {
      type: [String, Number],
      default: 'none'
    },
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      isActive: !!this.value,
      stackMinZIndex: 200,
      previousActiveElement: null
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        var _this$previousActiveE;

        this.removeOverlay();
        this.unbind();
        (_this$previousActiveE = this.previousActiveElement) == null ? void 0 : _this$previousActiveE.focus();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(util_console["e" /* removed */])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        overlayable["a" /* default */].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(); // Double nextTick to wait for lazy content to be generated

      this.$nextTick(() => {
        this.$nextTick(() => {
          this.previousActiveElement = document.activeElement;
          this.$refs.content.focus();
          this.bind();
        });
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === helpers["p" /* keyCodes */].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && // It isn't the document or the dialog body
      ![document, this.$refs.content].includes(target) && // It isn't inside the dialog body
      !this.$refs.content.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
          // Find and focus the first available element inside the dialog
          const focusable = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          const el = [...focusable].find(el => !el.hasAttribute('disabled'));
          el && el.focus();
        }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(VThemeProvider["a" /* default */], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'document',
          tabindex: this.isActive ? 0 : undefined,
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: this.maxWidth === 'none' ? undefined : Object(helpers["f" /* convertToUnit */])(this.maxWidth),
          width: this.width === 'auto' ? undefined : Object(helpers["f" /* convertToUnit */])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      attrs: {
        role: 'dialog'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./components/Blog/Blog.vue



function Blog_Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(295)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Blog_Blog_component = Object(componentNormalizer["a" /* default */])(
  components_Blog_Blogvue_type_script_lang_js_,
  Blogvue_type_template_id_22d5b716_scoped_true_render,
  Blogvue_type_template_id_22d5b716_scoped_true_staticRenderFns,
  false,
  Blog_Blog_injectStyles,
  "22d5b716",
  "7ff2c1cc"
  
)

/* harmony default export */ var Blog_Blog = (Blog_Blog_component.exports);

/* vuetify-loader */









installComponents_default()(Blog_Blog_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["a" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog_VDialog,VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Blog/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SubscribeForm/SubscribeForm.vue?vue&type=template&id=0c3e905a&scoped=true&
var SubscribeFormvue_type_template_id_0c3e905a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"parallax-wrap\" data-v-0c3e905a>","</div>",[_c('v-parallax',{attrs:{"src":_vm.imgAPI.education[18],"height":570}})],1),_vm._ssrNode(" "),_c('v-container',{staticClass:"fixed-width"},[_c('v-card',{staticClass:"form"},[_c('h4',{staticClass:"use-text-title2"},[_vm._v("\n        "+_vm._s(_vm.$t('educationLanding.subscribe_title'))+"\n      ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n        "+_vm._s(_vm.$t('educationLanding.subscribe_subtitle'))+"\n      ")]),_vm._v(" "),_c('form',[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('educationLanding.subscribe_input'),"color":"primary","filled":"","required":""}}),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"large":"","color":"primary"}},[_vm._v("\n          "+_vm._s(_vm.$t('educationLanding.subscribe_subscribe'))+"\n        ")])],1)])],1)],2)}
var SubscribeFormvue_type_template_id_0c3e905a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue?vue&type=template&id=0c3e905a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubscribeForm/SubscribeForm.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SubscribeFormvue_type_script_lang_js_ = ({
  data: () => ({
    imgAPI: images_imgAPI
  })
});
// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var SubscribeForm_SubscribeFormvue_type_script_lang_js_ = (SubscribeFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VParallax/VParallax.sass
var VParallax = __webpack_require__(301);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/translatable/index.js

/* harmony default export */ var translatable = (external_vue_default.a.extend({
  name: 'translatable',
  props: {
    height: Number
  },
  data: () => ({
    elOffsetTop: 0,
    parallax: 0,
    parallaxDist: 0,
    percentScrolled: 0,
    scrollTop: 0,
    windowHeight: 0,
    windowBottom: 0
  }),
  computed: {
    imgHeight() {
      return this.objHeight();
    }

  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.translate, false);
    window.removeEventListener('resize', this.translate, false);
  },

  methods: {
    calcDimensions() {
      const offset = this.$el.getBoundingClientRect();
      this.scrollTop = window.pageYOffset;
      this.parallaxDist = this.imgHeight - this.height;
      this.elOffsetTop = offset.top + this.scrollTop;
      this.windowHeight = window.innerHeight;
      this.windowBottom = this.scrollTop + this.windowHeight;
    },

    listeners() {
      window.addEventListener('scroll', this.translate, false);
      window.addEventListener('resize', this.translate, false);
    },

    /** @abstract **/
    objHeight() {
      throw new Error('Not implemented !');
    },

    translate() {
      this.calcDimensions();
      this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight);
      this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
    }

  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VParallax/VParallax.js
// Style
 // Mixins



const VParallax_baseMixins = Object(mixins["a" /* default */])(translatable);
/* @vue/component */

/* harmony default export */ var VParallax_VParallax = (VParallax_baseMixins.extend().extend({
  name: 'v-parallax',
  props: {
    alt: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 500
    },
    src: String,
    srcset: String
  },
  data: () => ({
    isBooted: false
  }),
  computed: {
    styles() {
      return {
        display: 'block',
        opacity: this.isBooted ? 1 : 0,
        transform: `translate(-50%, ${this.parallax}px)`
      };
    }

  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const img = this.$refs.img;
      if (!img) return;

      if (img.complete) {
        this.translate();
        this.listeners();
      } else {
        img.addEventListener('load', () => {
          this.translate();
          this.listeners();
        }, false);
      }

      this.isBooted = true;
    },

    objHeight() {
      return this.$refs.img.naturalHeight;
    }

  },

  render(h) {
    const imgData = {
      staticClass: 'v-parallax__image',
      style: this.styles,
      attrs: {
        src: this.src,
        srcset: this.srcset,
        alt: this.alt
      },
      ref: 'img'
    };
    const container = h('div', {
      staticClass: 'v-parallax__image-container'
    }, [h('img', imgData)]);
    const content = h('div', {
      staticClass: 'v-parallax__content'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-parallax',
      style: {
        height: `${this.height}px`
      },
      on: this.$listeners
    }, [container, content]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(236);

// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue



function SubscribeForm_injectStyles (context) {
  
  var style0 = __webpack_require__(299)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SubscribeForm_component = Object(componentNormalizer["a" /* default */])(
  SubscribeForm_SubscribeFormvue_type_script_lang_js_,
  SubscribeFormvue_type_template_id_0c3e905a_scoped_true_render,
  SubscribeFormvue_type_template_id_0c3e905a_scoped_true_staticRenderFns,
  false,
  SubscribeForm_injectStyles,
  "0c3e905a",
  "3503476a"
  
)

/* harmony default export */ var SubscribeForm = (SubscribeForm_component.exports);

/* vuetify-loader */






installComponents_default()(SubscribeForm_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VContainer: VContainer["a" /* default */],VParallax: VParallax_VParallax,VTextField: VTextField["a" /* default */]})

// CONCATENATED MODULE: ./components/SubscribeForm/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 9 modules
var Footer = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=4860e1d8&scoped=true&
var PageNavvue_type_template_id_4860e1d8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"page-nav",class:{ show: _vm.show }},[_vm._ssrNode("<nav class=\"section-nav\" data-v-4860e1d8>","</nav>",[_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"section"}},_vm._l((_vm.menuList),function(item,index){return _c('a',{key:index,staticClass:"anchor-link scrollactive-item",style:({ top: 50 * (_vm.menu.length - item.id) + 'px' }),attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-tooltip',{attrs:{"nudge-top":23,"left":!_vm.isRtl,"right":_vm.isRtl},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('span',_vm._g({},on),[_vm._v(_vm._s(_vm.$t('educationLanding.header_'+item.name)))])]}}],null,true)},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('educationLanding.header_'+item.name)))])])],1)}),0)],1),_vm._ssrNode(" "),_c('v-tooltip',{attrs:{"nudge-top":25,"left":!_vm.isRtl,"right":_vm.isRtl},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('scrollactive',{attrs:{"tag":"div"}},[_c('v-btn',_vm._g({staticClass:"fab anchor-link scrollactive-item",attrs:{"fab":"","color":"secondary","href":"#home"}},on),[_c('v-icon',{staticClass:"icon",attrs:{"dark":""}},[_vm._v("mdi-arrow-up")])],1)],1)]}}])},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v("To Top")])])],2)}
var PageNavvue_type_template_id_4860e1d8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=4860e1d8&scoped=true&

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&
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

let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    isRtl: false,
    show: false,
    menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3])]
  }),

  mounted() {
    if (this.$vuetify.rtl) {
      this.isRtl = true;
    }
  },

  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins






 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], menuable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["f" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["f" /* convertToUnit */])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["m" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(util_console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === helpers["p" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(74);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(45);

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function PageNav_injectStyles (context) {
  
  var style0 = __webpack_require__(303)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageNav_component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  PageNavvue_type_template_id_4860e1d8_scoped_true_render,
  PageNavvue_type_template_id_4860e1d8_scoped_true_staticRenderFns,
  false,
  PageNav_injectStyles,
  "4860e1d8",
  "28bdd3f6"
  
)

/* harmony default export */ var PageNav = (PageNav_component.exports);

/* vuetify-loader */




installComponents_default()(PageNav_component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VTooltip: VTooltip_VTooltip})


/* vuetify-loader */


installDirectives_default()(PageNav_component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(244);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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














/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'header-main': Header["a" /* default */],
    Banner: Banner,
    Feature: Feature,
    PopularCourse: PopularCourse,
    Explore: Explore,
    About: About,
    Testimonials: Testimonials,
    Blog: Blog_Blog,
    SubscribeForm: SubscribeForm,
    'footer-main': Footer["a" /* default */],
    PageNav: PageNav,
    Hidden: Hidden["a" /* default */],
    Notification: Notification["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].education.name + ' - Home Page'
    };
  },

  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown;
      return mdDown.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(307)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "a70fc1fa",
  "016fffbe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map