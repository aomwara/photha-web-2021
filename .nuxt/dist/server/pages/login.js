exports.ids = [10];
exports.modules = {

/***/ 214:
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

/***/ 215:
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

/***/ 216:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("e23b7040", content, true)

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("cf87dc84", content, true)

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("4f4f805e", content, true)

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field--filled>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{background:#fff}.theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:hsla(0,0%,100%,.7)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.38)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:rgba(0,0,0,.86)}.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.26)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field--filled>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.08)}.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{background:#1e1e1e}.theme--dark.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:rgba(0,0,0,.6)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.24)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:#fff}.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.16)}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field__prefix,.v-text-field__suffix{line-height:20px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__control,.v-text-field .v-input__slot,.v-text-field fieldset{border-radius:inherit}.v-text-field.v-input--has-state .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-messages,.v-text-field .v-input__control,.v-text-field fieldset{color:inherit}.v-text-field.v-input--dense{padding-top:0}.v-text-field.v-input--dense .v-label{top:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:4px 0 2px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix{padding-right:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix{padding-left:4px}.v-text-field.v-input--dense[type=text]::-ms-clear{display:none}.v-text-field.v-input--dense .v-input__append-inner,.v-text-field.v-input--dense .v-input__prepend-inner{margin-top:0}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-application--is-ltr .v-text-field .v-input__append-inner,.v-application--is-rtl .v-text-field .v-input__prepend-inner{margin-left:auto;padding-left:4px}.v-application--is-rtl .v-text-field .v-input__append-inner{margin-right:auto;padding-right:4px}.v-text-field .v-counter{white-space:nowrap}.v-application--is-ltr .v-text-field .v-counter{margin-left:8px}.v-application--is-rtl .v-text-field .v-counter{margin-right:8px}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;white-space:nowrap;pointer-events:none}.v-application--is-ltr .v-text-field .v-label{transform-origin:top left}.v-application--is-rtl .v-text-field .v-label{transform-origin:top right}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75);pointer-events:auto}.v-text-field>.v-input__control>.v-input__slot{cursor:text}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-color:inherit;border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{background-color:currentColor;border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default;transition:color .3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-text-field__prefix{text-align:right;padding-right:4px}.v-application--is-rtl .v-text-field__prefix{text-align:left;padding-left:4px}.v-text-field__suffix{white-space:nowrap}.v-application--is-ltr .v-text-field__suffix{padding-left:4px}.v-application--is-rtl .v-text-field__suffix{padding-right:4px}.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-right:4px;padding-left:0}.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:4px;padding-right:0}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field:not(.v-text-field--is-booted) .v-label,.v-text-field:not(.v-text-field--is-booted) legend{transition:none}.v-text-field--filled,.v-text-field--full-width,.v-text-field--outlined{position:relative}.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outlined>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:52px}.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:40px}.v-text-field--outlined{border-radius:4px}.v-text-field--enclosed .v-input__append-inner,.v-text-field--enclosed .v-input__append-outer,.v-text-field--enclosed .v-input__prepend-inner,.v-text-field--enclosed .v-input__prepend-outer,.v-text-field--full-width .v-input__append-inner,.v-text-field--full-width .v-input__append-outer,.v-text-field--full-width .v-input__prepend-inner,.v-text-field--full-width .v-input__prepend-outer{margin-top:17px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer{margin-top:14px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer{margin-top:9px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer{margin-top:8px}.v-text-field--filled .v-label,.v-text-field--full-width .v-label{top:18px}.v-text-field--filled .v-label--active,.v-text-field--full-width .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--filled.v-input--dense .v-label,.v-text-field--full-width.v-input--dense .v-label{top:17px}.v-text-field--filled.v-input--dense .v-label--active,.v-text-field--full-width.v-input--dense .v-label--active{transform:translateY(-10px) scale(.75)}.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label{top:11px}.v-text-field--filled{border-radius:4px 4px 0 0}.v-text-field--filled:not(.v-text-field--single-line) input{margin-top:22px}.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input{margin-top:0}.v-text-field--filled .v-text-field__prefix,.v-text-field--filled .v-text-field__suffix{max-height:32px;margin-top:20px}.v-text-field--full-width{border-radius:0}.v-text-field--outlined .v-text-field__slot,.v-text-field--single-line .v-text-field__slot{align-items:center}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix{margin-top:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{padding-top:0;margin-bottom:8px}.v-application--is-ltr .v-text-field--reverse input{text-align:right}.v-application--is-rtl .v-text-field--reverse input{text-align:left}.v-application--is-ltr .v-text-field--reverse .v-label{transform-origin:top right}.v-application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--outlined>.v-input__control>.v-input__slot:after,.v-text-field--outlined>.v-input__control>.v-input__slot:before,.v-text-field--rounded>.v-input__control>.v-input__slot:after,.v-text-field--rounded>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outlined,.v-text-field--solo{border-radius:4px}.v-text-field--outlined{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outlined .v-label{top:18px}.v-text-field--outlined .v-label--active{transform:translateY(-24px) scale(.75)}.v-text-field--outlined.v-input--dense .v-label{top:10px}.v-text-field--outlined.v-input--dense .v-label--active{transform:translateY(-16px) scale(.75)}.v-text-field--outlined fieldset{border-collapse:collapse;border:1px solid;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:-5px;transition-duration:.3s;transition-property:color,border-width;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-text-field--outlined fieldset{padding-left:8px}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset,.v-application--is-rtl .v-text-field--outlined fieldset{padding-right:8px}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset{padding-left:8px}.v-text-field--outlined legend{line-height:11px;padding:0;transition:width .3s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-text-field--outlined legend{text-align:left}.v-application--is-rtl .v-text-field--outlined legend{text-align:right}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend{margin-left:auto}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend{margin-right:auto}.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend{margin-left:12px}.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend{margin-right:12px}.v-text-field--outlined>.v-input__control>.v-input__slot{background:transparent}.v-text-field--outlined .v-text-field__prefix{max-height:32px}.v-text-field--outlined .v-input__append-outer,.v-text-field--outlined .v-input__prepend-outer{margin-top:18px}.v-text-field--outlined.v-input--has-state fieldset,.v-text-field--outlined.v-input--is-focused fieldset{border:2px solid}.v-text-field--rounded{border-radius:28px}.v-text-field--rounded>.v-input__control>.v-input__slot{padding:0 24px}.v-text-field--shaped{border-radius:16px 16px 0 0}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo .v-input__control input{caret-color:auto}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:38px}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:7px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3dc908a0", content, true)

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.theme--light.v-counter{color:rgba(0,0,0,.6)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_572fcd07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-572fcd07],.use-text-title[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-572fcd07]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-572fcd07]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-572fcd07]{font-size:28px;line-height:44px}}.use-text-title2[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-572fcd07]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-572fcd07]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-572fcd07]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-572fcd07]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-572fcd07]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-572fcd07]{font-size:16px;line-height:24px}}.use-text-caption[data-v-572fcd07],.use-text-paragraph[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-572fcd07]{font-size:14px;line-height:22px}}.use-hidden[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-572fcd07]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-572fcd07]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-572fcd07]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-572fcd07]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-572fcd07]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-572fcd07]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-572fcd07]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}.title-main[data-v-572fcd07],a[data-v-572fcd07],body[data-v-572fcd07],h1[data-v-572fcd07],h2[data-v-572fcd07],h3[data-v-572fcd07],h4[data-v-572fcd07],h5[data-v-572fcd07],h6[data-v-572fcd07],html[data-v-572fcd07],p[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif}.title-main[data-v-572fcd07]{margin-bottom:24px}[dir=ltr] .title-main.align-left[data-v-572fcd07]{text-align:left}[dir=rtl] .title-main.align-left[data-v-572fcd07]{text-align:right}[dir=ltr] .title-main.align-left h4[data-v-572fcd07]:before{left:-4px}[dir=rtl] .title-main.align-left h4[data-v-572fcd07]:before{right:-4px}[dir=ltr] .title-main.align-right[data-v-572fcd07]{text-align:right}[dir=rtl] .title-main.align-right[data-v-572fcd07]{text-align:left}[dir=ltr] .title-main.align-right h4[data-v-572fcd07]:before{right:-4px}[dir=rtl] .title-main.align-right h4[data-v-572fcd07]:before{left:-4px}.title-main.align-center[data-v-572fcd07]{text-align:center}.title-main.align-center h4[data-v-572fcd07]:before{width:80%}[dir=ltr] .title-main.align-center h4[data-v-572fcd07]:before{left:10%}[dir=rtl] .title-main.align-center h4[data-v-572fcd07]:before{right:10%}.title-main h4[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;text-transform:capitalize;margin-bottom:8px;position:relative;display:inline-block}.theme--light .title-main h4[data-v-572fcd07]{color:rgba(0,0,0,.87)}.theme--dark .title-main h4[data-v-572fcd07]{color:#fff}.title-main h4 span[data-v-572fcd07]{position:relative}.theme--light .title-main h4.primary-color[data-v-572fcd07]:before{background-color:var(--v-primarylight-base)}.theme--dark .title-main h4.primary-color[data-v-572fcd07]:before{background-color:var(--v-primarydark-base)}.theme--light .title-main h4.secondary-color[data-v-572fcd07]:before{background-color:var(--v-secondarylight-base)}.theme--dark .title-main h4.secondary-color[data-v-572fcd07]:before{background-color:var(--v-secondarydark-base)}.title-main h4[data-v-572fcd07]:before{content:\"\";height:15px;width:90%;position:absolute;bottom:10px;z-index:0}[dir=ltr] .title-main h4[data-v-572fcd07]:before{left:0}[dir=rtl] .title-main h4[data-v-572fcd07]:before{right:0}@media(max-width:599px){.title-main h4[data-v-572fcd07]:before{height:8px}}.title-main.dark h4[data-v-572fcd07]{font-family:\"IBM Plex Thai\",sans-serif;color:#fff}.title-main.dark h4[data-v-572fcd07]:before{background-color:hsla(0,0%,100%,.5)!important}.title-main.dark .desc[data-v-572fcd07]{position:relative;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 228:
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("12a190a6", content, true)

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text,.use-text-title{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}.use-hidden{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a,body,h1,h2,h3,h4,h5,h6,html,p{font-family:\"IBM Plex Thai\",sans-serif}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4ecc147e", content, true, context)
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("13f9a1a1", content, true, context)
};

/***/ }),

/***/ 236:
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_e64c8e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_e64c8e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_e64c8e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_e64c8e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_e64c8e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-e64c8e28],.use-text-title[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-e64c8e28]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-e64c8e28]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-e64c8e28]{font-size:28px;line-height:44px}}.use-text-title2[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-e64c8e28]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-e64c8e28]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-e64c8e28]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-e64c8e28]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-e64c8e28]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-e64c8e28]{font-size:16px;line-height:24px}}.use-text-caption[data-v-e64c8e28],.use-text-paragraph[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-e64c8e28]{font-size:14px;line-height:22px}}.use-hidden[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-e64c8e28]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e64c8e28]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e64c8e28]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e64c8e28]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e64c8e28]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e64c8e28]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e64c8e28]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-e64c8e28],body[data-v-e64c8e28],h1[data-v-e64c8e28],h2[data-v-e64c8e28],h3[data-v-e64c8e28],h4[data-v-e64c8e28],h5[data-v-e64c8e28],h6[data-v-e64c8e28],html[data-v-e64c8e28],p[data-v-e64c8e28]{font-family:\"IBM Plex Thai\",sans-serif}.form-page .page-wrap[data-v-e64c8e28]{text-align:center;min-height:100%;position:relative;background-image:url(/images/education/bg-pattern.png);background-repeat:repeat;width:100%;align-items:center;padding:88px 40px;background-size:15%}.theme--light .form-page .page-wrap[data-v-e64c8e28]{background-color:var(--v-secondarylight-base)}.theme--dark .form-page .page-wrap[data-v-e64c8e28]{background-color:#303030}@media(min-width:960px){.form-page .page-wrap[data-v-e64c8e28]{background-size:8%}}@media(max-width:959px){.form-page .page-wrap[data-v-e64c8e28]{padding:32px 0}}.form-page .page-wrap .title-contact[data-v-e64c8e28]{font-weight:var(--font-bold)}@media(max-width:599px){.form-page .page-wrap .title-contact[data-v-e64c8e28]{font-size:32px}}.form-page .page-wrap a[data-v-e64c8e28]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .form-page .page-wrap a[data-v-e64c8e28]{color:var(--v-secondarydark-base)}.theme--dark .form-page .page-wrap a[data-v-e64c8e28]{color:var(--v-secondarylight-base)}.form-page .inner-wrap[data-v-e64c8e28]{position:relative}[dir=ltr] .form-page .inner-wrap[data-v-e64c8e28]{text-align:left}[dir=rtl] .form-page .inner-wrap[data-v-e64c8e28]{text-align:right}@media(min-width:960px){.form-page .inner-wrap[data-v-e64c8e28]:before{content:\"\";box-shadow:0 0 12px 2px rgba(0,0,0,.05);width:100%;height:100%;background:var(--v-primary-base);transform:scale(.95) rotate(-10deg);position:absolute;border-radius:40px;top:0;left:0}}.form-page .full-form-wrap[data-v-e64c8e28]{padding:72px 0;color:#fff}.form-page .card.form-box[data-v-e64c8e28]{border-radius:40px;box-shadow:0 0 12px 2px rgba(0,0,0,.05);background:url(/images/education/plane.png) no-repeat 90% bottom var(--v-primarydark-base);overflow:hidden}@media(min-width:960px){.form-page .card.form-box[data-v-e64c8e28]{overflow:visible}}.form-page .desc[data-v-e64c8e28]{font-size:20px;text-align:center;padding:0 80px}@media(max-width:959px){.form-page .desc[data-v-e64c8e28]{padding:0 40px}}@media(max-width:599px){.form-page .desc[data-v-e64c8e28]{padding:0 16px;font-size:16px}}.form-page .input[data-v-e64c8e28]{width:100%}[dir=ltr] .form-page .input label[data-v-e64c8e28]{left:4px}[dir=rtl] .form-page .input label[data-v-e64c8e28]{right:4px}.form-page .input[data-v-e64c8e28]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .form-page .input[data-v-e64c8e28]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .form-page .input[data-v-e64c8e28]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .form-page .input[data-v-e64c8e28]  .v-input__slot input,[dir=ltr] .form-page .input[data-v-e64c8e28]  .v-input__slot select,[dir=ltr] .form-page .input[data-v-e64c8e28]  .v-input__slot textarea{left:16px}[dir=rtl] .form-page .input[data-v-e64c8e28]  .v-input__slot input,[dir=rtl] .form-page .input[data-v-e64c8e28]  .v-input__slot select,[dir=rtl] .form-page .input[data-v-e64c8e28]  .v-input__slot textarea{right:16px}.form-page .input[data-v-e64c8e28]  .v-input__slot input:focus,.form-page .input[data-v-e64c8e28]  .v-input__slot input:hover,.form-page .input[data-v-e64c8e28]  .v-input__slot select:focus,.form-page .input[data-v-e64c8e28]  .v-input__slot select:hover,.form-page .input[data-v-e64c8e28]  .v-input__slot textarea:focus,.form-page .input[data-v-e64c8e28]  .v-input__slot textarea:hover{background:none}.form-page .input.light[data-v-e64c8e28]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.form-page .input.light[data-v-e64c8e28]  .v-input__slot .v-label,.form-page .input.light[data-v-e64c8e28]  .v-input__slot input,.form-page .input.light[data-v-e64c8e28]  .v-input__slot select,.form-page .input.light[data-v-e64c8e28]  .v-input__slot textarea{color:#fff}.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot input:focus,.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot select:focus,.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot input:focus,.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot select:focus,.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot input:hover,.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot select:hover,.theme--light .form-page .input.light[data-v-e64c8e28]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot input:hover,.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot select:hover,.theme--dark .form-page .input.light[data-v-e64c8e28]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form-page .form[data-v-e64c8e28]{position:relative;margin-top:24px;padding:0 120px 80px}[dir=ltr] .form-page .form[data-v-e64c8e28]{text-align:left}[dir=rtl] .form-page .form[data-v-e64c8e28]{text-align:right}@media(max-width:959px){.form-page .form[data-v-e64c8e28]{padding:0 48px 80px}}@media(max-width:599px){.form-page .form[data-v-e64c8e28]{padding:0 16px 80px}}.form-page .form-helper[data-v-e64c8e28]{display:flex;justify-content:space-between;align-items:flex-start}@media(max-width:599px){.form-page .form-helper[data-v-e64c8e28]{flex-direction:column;align-items:center}}.form-page .flex[data-v-e64c8e28]{flex:1}@media(min-width:600px){.form-page .btn-area[data-v-e64c8e28]{display:flex;align-items:center;justify-content:space-between}}@media(max-width:599px){.form-page .btn-area[data-v-e64c8e28]{text-align:center}.form-page .btn-area button[data-v-e64c8e28]{width:100%}}@media(max-width:599px){.form-page .btn-area span[data-v-e64c8e28]{font-size:14px}}.form-page .btn-area span a.link[data-v-e64c8e28]{display:block;text-decoration:none!important}.form-page .btn-area .flex[data-v-e64c8e28]{flex:1}.form-page .white-label[data-v-e64c8e28]  label{color:#fff}[dir=ltr] .form-page .right-icon[data-v-e64c8e28]{margin-left:8px}[dir=rtl] .form-page .right-icon[data-v-e64c8e28]{margin-right:8px}.form-page .check svg[data-v-e64c8e28]{fill:var(--v-secondary-base)}.form-page .auth-frame[data-v-e64c8e28]{display:block;position:relative}.form-page .auth-frame .row>div[data-v-e64c8e28]{padding:0}.form-page .greeting[data-v-e64c8e28]{padding:240px 48px;height:100%;text-align:center;color:#fff;position:relative}.form-page .greeting h6[data-v-e64c8e28]{font-weight:var(--font-regular)}@media(max-width:1279px){.form-page .deco[data-v-e64c8e28]{display:none}}.form-page .deco>*[data-v-e64c8e28]{z-index:4;box-shadow:0 0 18px 0 rgba(0,0,0,.17);position:absolute;transform:rotate(45deg)}.form-page .deco .primary-light[data-v-e64c8e28]{border-radius:15px;width:70px;height:70px;top:50%;border:10px solid;border-color:var(--v-primarylight-base)}[dir=ltr] .form-page .deco .primary-light[data-v-e64c8e28]{left:-20px}[dir=rtl] .form-page .deco .primary-light[data-v-e64c8e28]{right:-20px}.form-page .deco .secondary-main[data-v-e64c8e28]{border-radius:10px;width:50px;height:50px;top:-20px;border:10px solid;border-color:var(--v-secondary-base)}[dir=ltr] .form-page .deco .secondary-main[data-v-e64c8e28]{right:-10px}[dir=rtl] .form-page .deco .secondary-main[data-v-e64c8e28]{left:-10px}.form-page .deco .secondary-light[data-v-e64c8e28]{width:100px;height:100px;border-radius:25px;bottom:-60px;border:12px solid;border-color:var(--v-secondarylight-base)}[dir=ltr] .form-page .deco .secondary-light[data-v-e64c8e28]{right:60px}[dir=rtl] .form-page .deco .secondary-light[data-v-e64c8e28]{left:60px}.form-page .logo[data-v-e64c8e28]{text-align:center;margin-bottom:16px}.form-page .logo.logo-header[data-v-e64c8e28]{flex-direction:column;align-items:center;position:relative;z-index:10}.form-page .logo img[data-v-e64c8e28]{width:90px}.form-page .logo p[data-v-e64c8e28],.form-page .logo span[data-v-e64c8e28]{display:block;font-size:18px;padding-bottom:4px;margin-bottom:0;color:#fff;font-weight:var(--font-bold)}[dir=ltr] .form-page .logo p[data-v-e64c8e28],[dir=ltr] .form-page .logo span[data-v-e64c8e28]{margin-left:8px}[dir=rtl] .form-page .logo p[data-v-e64c8e28],[dir=rtl] .form-page .logo span[data-v-e64c8e28]{margin-right:8px}.form-page .head[data-v-e64c8e28]{display:flex;justify-content:space-between;align-items:flex-start}.form-page .head a[data-v-e64c8e28]{margin-top:16px;box-shadow:none}[dir=rtl] .form-page .head a i[data-v-e64c8e28]{transform:scale(-1)}@media(min-width:960px){.form-page .head[data-v-e64c8e28]{margin-bottom:40px}}@media(max-width:959px){.form-page .head[data-v-e64c8e28]{margin-top:16px;justify-content:center}.form-page .head a[data-v-e64c8e28]{display:none}}.form-page .form-wrap[data-v-e64c8e28]{position:relative;padding:16px 16px 80px;min-height:760px;overflow:hidden}.theme--light .form-page .form-wrap[data-v-e64c8e28]{background-color:#fff}.theme--dark .form-page .form-wrap[data-v-e64c8e28]{background-color:#424242}.v-application--is-ltr .form-page .form-wrap[data-v-e64c8e28]{border-radius:0 40px 40px 0}.v-application--is-rtl .form-page .form-wrap[data-v-e64c8e28]{border-radius:40px 0 0 40px}.form-page .form-wrap .frm-deco[data-v-e64c8e28]{transform:translateX(-72%);bottom:-105px}[dir=ltr] .form-page .form-wrap .frm-deco[data-v-e64c8e28]{left:58.333333%}[dir=rtl] .form-page .form-wrap .frm-deco[data-v-e64c8e28]{right:58.333333%}@media(min-width:600px){.form-page .form-wrap[data-v-e64c8e28]{padding:40px}}@media(min-width:1280px){.form-page .form-wrap[data-v-e64c8e28]{padding:64px}}@media(max-width:959px){.form-page .form-wrap[data-v-e64c8e28]{padding:40px}}.form-page .socmed-side-login[data-v-e64c8e28]{display:flex;justify-content:space-around}@media(max-width:1279px){.form-page .socmed-side-login[data-v-e64c8e28]{justify-content:center}}@media(max-width:599px){.form-page .socmed-side-login[data-v-e64c8e28]{display:block}}.form-page .socmed-side-login>button[data-v-e64c8e28]{color:#fff;padding:8px;line-height:18px;width:160px}@media(max-width:1279px){.form-page .socmed-side-login>button[data-v-e64c8e28]{margin:0 4px}}@media(max-width:599px){.form-page .socmed-side-login>button[data-v-e64c8e28]{margin:0 0 16px;width:100%}}.form-page .socmed-side-login i[data-v-e64c8e28]{font-size:16px;color:#fff}[dir=ltr] .form-page .socmed-side-login i[data-v-e64c8e28]{margin-right:8px}[dir=rtl] .form-page .socmed-side-login i[data-v-e64c8e28]{margin-left:8px}.form-page .blue-btn[data-v-e64c8e28]{background:#28aae1!important}.form-page .blue-btn[data-v-e64c8e28]:hover{background:#146a8f!important}.form-page .navi-btn[data-v-e64c8e28]{background:#3b579d!important}.form-page .navi-btn[data-v-e64c8e28]:hover{background:#1f2e53!important}.form-page .red-btn[data-v-e64c8e28]{background:#dd493c!important}.form-page .red-btn[data-v-e64c8e28]:hover{background:#98251b!important}.form-page .separator[data-v-e64c8e28]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.form-page .separator p[data-v-e64c8e28]{font-size:12px}}.form-page .separator[data-v-e64c8e28]:after,.form-page .separator[data-v-e64c8e28]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .form-page .separator[data-v-e64c8e28]:after,.theme--light .form-page .separator[data-v-e64c8e28]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .form-page .separator[data-v-e64c8e28]:after,.theme--dark .form-page .separator[data-v-e64c8e28]:before{border-top-color:hsla(0,0%,100%,.5)}.form-page .separator[data-v-e64c8e28]:before{left:0}.form-page .separator[data-v-e64c8e28]:after{right:0}.form-page .form-control-label[data-v-e64c8e28]{flex:1}.form-page .form-control-label[data-v-e64c8e28]  .v-messages{min-height:0}.form-page .form-control-label a[data-v-e64c8e28]{position:relative}[dir=ltr] .form-page .form-control-label a[data-v-e64c8e28]{left:3px}[dir=rtl] .form-page .form-control-label a[data-v-e64c8e28]{right:3px}.form-page .form-control-label>div[data-v-e64c8e28]{display:inline-block;margin-top:0}.form-page .backtohome[data-v-e64c8e28]{width:80px;height:80px;line-height:80px;position:absolute;margin-top:20px;z-index:4;border-radius:50%}[dir=ltr] .form-page .backtohome[data-v-e64c8e28]{margin-left:20px}[dir=rtl] .form-page .backtohome[data-v-e64c8e28]{margin-right:20px}@media(max-width:959px){.form-page .backtohome[data-v-e64c8e28]{top:40px;margin:0}[dir=ltr] .form-page .backtohome[data-v-e64c8e28]{left:calc(50% - 40px)}[dir=rtl] .form-page .backtohome[data-v-e64c8e28]{right:calc(50% - 40px)}}@media(max-width:959px){.form-page .backtohome[data-v-e64c8e28]{display:none}}.form-page .backtohome i[data-v-e64c8e28]{font-size:32px;line-height:80px!important;color:#fff}.form-page .backtohome>span i[data-v-e64c8e28]:first-child{opacity:1;transition:opacity .3s ease}.form-page .backtohome>span i[data-v-e64c8e28]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .form-page .backtohome>span i[data-v-e64c8e28]:last-child{right:0}[dir=rtl] .form-page .backtohome>span i[data-v-e64c8e28]:last-child{left:0}.form-page .backtohome[data-v-e64c8e28]:hover{background:rgba(0,0,0,.05)}.form-page .backtohome:hover>span i[data-v-e64c8e28]:first-child{opacity:0}.form-page .backtohome:hover>span i[data-v-e64c8e28]:last-child{opacity:1}[dir=ltr] .form-page .backtohome:hover>span i[data-v-e64c8e28]:last-child{right:30px}[dir=rtl] .form-page .backtohome:hover>span i[data-v-e64c8e28]:last-child{left:30px}.toast[data-v-e64c8e28]{border-radius:4px;width:auto}[dir=ltr] .toast[data-v-e64c8e28]{padding-right:8px}[dir=rtl] .toast[data-v-e64c8e28]{padding-left:8px}[dir=ltr] .toast .toast-action[data-v-e64c8e28]{margin-right:0}[dir=rtl] .toast .toast-action[data-v-e64c8e28]{margin-left:0}.toast i.material-icons[data-v-e64c8e28]{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_99d9d4b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_99d9d4b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_99d9d4b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_99d9d4b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_99d9d4b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-99d9d4b2],.use-text-title[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-99d9d4b2]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-99d9d4b2]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-99d9d4b2]{font-size:28px;line-height:44px}}.use-text-title2[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-99d9d4b2]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-99d9d4b2]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-99d9d4b2]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-99d9d4b2]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-99d9d4b2]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-99d9d4b2]{font-size:16px;line-height:24px}}.use-text-caption[data-v-99d9d4b2],.use-text-paragraph[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-99d9d4b2]{font-size:14px;line-height:22px}}.use-hidden[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-99d9d4b2]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-99d9d4b2]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-99d9d4b2]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-99d9d4b2]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-99d9d4b2]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-99d9d4b2]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-99d9d4b2]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-99d9d4b2],body[data-v-99d9d4b2],h1[data-v-99d9d4b2],h2[data-v-99d9d4b2],h3[data-v-99d9d4b2],h4[data-v-99d9d4b2],h5[data-v-99d9d4b2],h6[data-v-99d9d4b2],html[data-v-99d9d4b2],p[data-v-99d9d4b2]{font-family:\"IBM Plex Thai\",sans-serif}.form-page .page-wrap[data-v-99d9d4b2]{text-align:center;min-height:100%;position:relative;background-image:url(/images/education/bg-pattern.png);background-repeat:repeat;width:100%;align-items:center;padding:88px 40px;background-size:15%}.theme--light .form-page .page-wrap[data-v-99d9d4b2]{background-color:var(--v-secondarylight-base)}.theme--dark .form-page .page-wrap[data-v-99d9d4b2]{background-color:#303030}@media(min-width:960px){.form-page .page-wrap[data-v-99d9d4b2]{background-size:8%}}@media(max-width:959px){.form-page .page-wrap[data-v-99d9d4b2]{padding:32px 0}}.form-page .page-wrap .title-contact[data-v-99d9d4b2]{font-weight:var(--font-bold)}@media(max-width:599px){.form-page .page-wrap .title-contact[data-v-99d9d4b2]{font-size:32px}}.form-page .page-wrap a[data-v-99d9d4b2]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .form-page .page-wrap a[data-v-99d9d4b2]{color:var(--v-secondarydark-base)}.theme--dark .form-page .page-wrap a[data-v-99d9d4b2]{color:var(--v-secondarylight-base)}.form-page .inner-wrap[data-v-99d9d4b2]{position:relative}[dir=ltr] .form-page .inner-wrap[data-v-99d9d4b2]{text-align:left}[dir=rtl] .form-page .inner-wrap[data-v-99d9d4b2]{text-align:right}@media(min-width:960px){.form-page .inner-wrap[data-v-99d9d4b2]:before{content:\"\";box-shadow:0 0 12px 2px rgba(0,0,0,.05);width:100%;height:100%;background:var(--v-primary-base);transform:scale(.95) rotate(-10deg);position:absolute;border-radius:40px;top:0;left:0}}.form-page .full-form-wrap[data-v-99d9d4b2]{padding:72px 0;color:#fff}.form-page .card.form-box[data-v-99d9d4b2]{border-radius:40px;box-shadow:0 0 12px 2px rgba(0,0,0,.05);background:url(/images/education/plane.png) no-repeat 90% bottom var(--v-primarydark-base);overflow:hidden}@media(min-width:960px){.form-page .card.form-box[data-v-99d9d4b2]{overflow:visible}}.form-page .desc[data-v-99d9d4b2]{font-size:20px;text-align:center;padding:0 80px}@media(max-width:959px){.form-page .desc[data-v-99d9d4b2]{padding:0 40px}}@media(max-width:599px){.form-page .desc[data-v-99d9d4b2]{padding:0 16px;font-size:16px}}.form-page .input[data-v-99d9d4b2]{width:100%}[dir=ltr] .form-page .input label[data-v-99d9d4b2]{left:4px}[dir=rtl] .form-page .input label[data-v-99d9d4b2]{right:4px}.form-page .input[data-v-99d9d4b2]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .form-page .input[data-v-99d9d4b2]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .form-page .input[data-v-99d9d4b2]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .form-page .input[data-v-99d9d4b2]  .v-input__slot input,[dir=ltr] .form-page .input[data-v-99d9d4b2]  .v-input__slot select,[dir=ltr] .form-page .input[data-v-99d9d4b2]  .v-input__slot textarea{left:16px}[dir=rtl] .form-page .input[data-v-99d9d4b2]  .v-input__slot input,[dir=rtl] .form-page .input[data-v-99d9d4b2]  .v-input__slot select,[dir=rtl] .form-page .input[data-v-99d9d4b2]  .v-input__slot textarea{right:16px}.form-page .input[data-v-99d9d4b2]  .v-input__slot input:focus,.form-page .input[data-v-99d9d4b2]  .v-input__slot input:hover,.form-page .input[data-v-99d9d4b2]  .v-input__slot select:focus,.form-page .input[data-v-99d9d4b2]  .v-input__slot select:hover,.form-page .input[data-v-99d9d4b2]  .v-input__slot textarea:focus,.form-page .input[data-v-99d9d4b2]  .v-input__slot textarea:hover{background:none}.form-page .input.light[data-v-99d9d4b2]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.form-page .input.light[data-v-99d9d4b2]  .v-input__slot .v-label,.form-page .input.light[data-v-99d9d4b2]  .v-input__slot input,.form-page .input.light[data-v-99d9d4b2]  .v-input__slot select,.form-page .input.light[data-v-99d9d4b2]  .v-input__slot textarea{color:#fff}.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot input:focus,.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot select:focus,.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot input:focus,.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot select:focus,.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot input:hover,.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot select:hover,.theme--light .form-page .input.light[data-v-99d9d4b2]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot input:hover,.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot select:hover,.theme--dark .form-page .input.light[data-v-99d9d4b2]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form-page .form[data-v-99d9d4b2]{position:relative;margin-top:24px;padding:0 120px 80px}[dir=ltr] .form-page .form[data-v-99d9d4b2]{text-align:left}[dir=rtl] .form-page .form[data-v-99d9d4b2]{text-align:right}@media(max-width:959px){.form-page .form[data-v-99d9d4b2]{padding:0 48px 80px}}@media(max-width:599px){.form-page .form[data-v-99d9d4b2]{padding:0 16px 80px}}.form-page .form-helper[data-v-99d9d4b2]{display:flex;justify-content:space-between;align-items:flex-start}@media(max-width:599px){.form-page .form-helper[data-v-99d9d4b2]{flex-direction:column;align-items:center}}.form-page .flex[data-v-99d9d4b2]{flex:1}@media(min-width:600px){.form-page .btn-area[data-v-99d9d4b2]{display:flex;align-items:center;justify-content:space-between}}@media(max-width:599px){.form-page .btn-area[data-v-99d9d4b2]{text-align:center}.form-page .btn-area button[data-v-99d9d4b2]{width:100%}}@media(max-width:599px){.form-page .btn-area span[data-v-99d9d4b2]{font-size:14px}}.form-page .btn-area span a.link[data-v-99d9d4b2]{display:block;text-decoration:none!important}.form-page .btn-area .flex[data-v-99d9d4b2]{flex:1}.form-page .white-label[data-v-99d9d4b2]  label{color:#fff}[dir=ltr] .form-page .right-icon[data-v-99d9d4b2]{margin-left:8px}[dir=rtl] .form-page .right-icon[data-v-99d9d4b2]{margin-right:8px}.form-page .check svg[data-v-99d9d4b2]{fill:var(--v-secondary-base)}.form-page .auth-frame[data-v-99d9d4b2]{display:block;position:relative}.form-page .auth-frame .row>div[data-v-99d9d4b2]{padding:0}.form-page .greeting[data-v-99d9d4b2]{padding:240px 48px;height:100%;text-align:center;color:#fff;position:relative}.form-page .greeting h6[data-v-99d9d4b2]{font-weight:var(--font-regular)}@media(max-width:1279px){.form-page .deco[data-v-99d9d4b2]{display:none}}.form-page .deco>*[data-v-99d9d4b2]{z-index:4;box-shadow:0 0 18px 0 rgba(0,0,0,.17);position:absolute;transform:rotate(45deg)}.form-page .deco .primary-light[data-v-99d9d4b2]{border-radius:15px;width:70px;height:70px;top:50%;border:10px solid;border-color:var(--v-primarylight-base)}[dir=ltr] .form-page .deco .primary-light[data-v-99d9d4b2]{left:-20px}[dir=rtl] .form-page .deco .primary-light[data-v-99d9d4b2]{right:-20px}.form-page .deco .secondary-main[data-v-99d9d4b2]{border-radius:10px;width:50px;height:50px;top:-20px;border:10px solid;border-color:var(--v-secondary-base)}[dir=ltr] .form-page .deco .secondary-main[data-v-99d9d4b2]{right:-10px}[dir=rtl] .form-page .deco .secondary-main[data-v-99d9d4b2]{left:-10px}.form-page .deco .secondary-light[data-v-99d9d4b2]{width:100px;height:100px;border-radius:25px;bottom:-60px;border:12px solid;border-color:var(--v-secondarylight-base)}[dir=ltr] .form-page .deco .secondary-light[data-v-99d9d4b2]{right:60px}[dir=rtl] .form-page .deco .secondary-light[data-v-99d9d4b2]{left:60px}.form-page .logo[data-v-99d9d4b2]{text-align:center;margin-bottom:16px}.form-page .logo.logo-header[data-v-99d9d4b2]{flex-direction:column;align-items:center;position:relative;z-index:10}.form-page .logo img[data-v-99d9d4b2]{width:90px}.form-page .logo p[data-v-99d9d4b2],.form-page .logo span[data-v-99d9d4b2]{display:block;font-size:18px;padding-bottom:4px;margin-bottom:0;color:#fff;font-weight:var(--font-bold)}[dir=ltr] .form-page .logo p[data-v-99d9d4b2],[dir=ltr] .form-page .logo span[data-v-99d9d4b2]{margin-left:8px}[dir=rtl] .form-page .logo p[data-v-99d9d4b2],[dir=rtl] .form-page .logo span[data-v-99d9d4b2]{margin-right:8px}.form-page .head[data-v-99d9d4b2]{display:flex;justify-content:space-between;align-items:flex-start}.form-page .head a[data-v-99d9d4b2]{margin-top:16px;box-shadow:none}[dir=rtl] .form-page .head a i[data-v-99d9d4b2]{transform:scale(-1)}@media(min-width:960px){.form-page .head[data-v-99d9d4b2]{margin-bottom:40px}}@media(max-width:959px){.form-page .head[data-v-99d9d4b2]{margin-top:16px;justify-content:center}.form-page .head a[data-v-99d9d4b2]{display:none}}.form-page .form-wrap[data-v-99d9d4b2]{position:relative;padding:16px 16px 80px;min-height:760px;overflow:hidden}.theme--light .form-page .form-wrap[data-v-99d9d4b2]{background-color:#fff}.theme--dark .form-page .form-wrap[data-v-99d9d4b2]{background-color:#424242}.v-application--is-ltr .form-page .form-wrap[data-v-99d9d4b2]{border-radius:0 40px 40px 0}.v-application--is-rtl .form-page .form-wrap[data-v-99d9d4b2]{border-radius:40px 0 0 40px}.form-page .form-wrap .frm-deco[data-v-99d9d4b2]{transform:translateX(-72%);bottom:-105px}[dir=ltr] .form-page .form-wrap .frm-deco[data-v-99d9d4b2]{left:58.333333%}[dir=rtl] .form-page .form-wrap .frm-deco[data-v-99d9d4b2]{right:58.333333%}@media(min-width:600px){.form-page .form-wrap[data-v-99d9d4b2]{padding:40px}}@media(min-width:1280px){.form-page .form-wrap[data-v-99d9d4b2]{padding:64px}}@media(max-width:959px){.form-page .form-wrap[data-v-99d9d4b2]{padding:40px}}.form-page .socmed-side-login[data-v-99d9d4b2]{display:flex;justify-content:space-around}@media(max-width:1279px){.form-page .socmed-side-login[data-v-99d9d4b2]{justify-content:center}}@media(max-width:599px){.form-page .socmed-side-login[data-v-99d9d4b2]{display:block}}.form-page .socmed-side-login>button[data-v-99d9d4b2]{color:#fff;padding:8px;line-height:18px;width:160px}@media(max-width:1279px){.form-page .socmed-side-login>button[data-v-99d9d4b2]{margin:0 4px}}@media(max-width:599px){.form-page .socmed-side-login>button[data-v-99d9d4b2]{margin:0 0 16px;width:100%}}.form-page .socmed-side-login i[data-v-99d9d4b2]{font-size:16px;color:#fff}[dir=ltr] .form-page .socmed-side-login i[data-v-99d9d4b2]{margin-right:8px}[dir=rtl] .form-page .socmed-side-login i[data-v-99d9d4b2]{margin-left:8px}.form-page .blue-btn[data-v-99d9d4b2]{background:#28aae1!important}.form-page .blue-btn[data-v-99d9d4b2]:hover{background:#146a8f!important}.form-page .navi-btn[data-v-99d9d4b2]{background:#3b579d!important}.form-page .navi-btn[data-v-99d9d4b2]:hover{background:#1f2e53!important}.form-page .red-btn[data-v-99d9d4b2]{background:#dd493c!important}.form-page .red-btn[data-v-99d9d4b2]:hover{background:#98251b!important}.form-page .separator[data-v-99d9d4b2]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.form-page .separator p[data-v-99d9d4b2]{font-size:12px}}.form-page .separator[data-v-99d9d4b2]:after,.form-page .separator[data-v-99d9d4b2]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .form-page .separator[data-v-99d9d4b2]:after,.theme--light .form-page .separator[data-v-99d9d4b2]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .form-page .separator[data-v-99d9d4b2]:after,.theme--dark .form-page .separator[data-v-99d9d4b2]:before{border-top-color:hsla(0,0%,100%,.5)}.form-page .separator[data-v-99d9d4b2]:before{left:0}.form-page .separator[data-v-99d9d4b2]:after{right:0}.form-page .form-control-label[data-v-99d9d4b2]{flex:1}.form-page .form-control-label[data-v-99d9d4b2]  .v-messages{min-height:0}.form-page .form-control-label a[data-v-99d9d4b2]{position:relative}[dir=ltr] .form-page .form-control-label a[data-v-99d9d4b2]{left:3px}[dir=rtl] .form-page .form-control-label a[data-v-99d9d4b2]{right:3px}.form-page .form-control-label>div[data-v-99d9d4b2]{display:inline-block;margin-top:0}.form-page .backtohome[data-v-99d9d4b2]{width:80px;height:80px;line-height:80px;position:absolute;margin-top:20px;z-index:4;border-radius:50%}[dir=ltr] .form-page .backtohome[data-v-99d9d4b2]{margin-left:20px}[dir=rtl] .form-page .backtohome[data-v-99d9d4b2]{margin-right:20px}@media(max-width:959px){.form-page .backtohome[data-v-99d9d4b2]{top:40px;margin:0}[dir=ltr] .form-page .backtohome[data-v-99d9d4b2]{left:calc(50% - 40px)}[dir=rtl] .form-page .backtohome[data-v-99d9d4b2]{right:calc(50% - 40px)}}@media(max-width:959px){.form-page .backtohome[data-v-99d9d4b2]{display:none}}.form-page .backtohome i[data-v-99d9d4b2]{font-size:32px;line-height:80px!important;color:#fff}.form-page .backtohome>span i[data-v-99d9d4b2]:first-child{opacity:1;transition:opacity .3s ease}.form-page .backtohome>span i[data-v-99d9d4b2]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .form-page .backtohome>span i[data-v-99d9d4b2]:last-child{right:0}[dir=rtl] .form-page .backtohome>span i[data-v-99d9d4b2]:last-child{left:0}.form-page .backtohome[data-v-99d9d4b2]:hover{background:rgba(0,0,0,.05)}.form-page .backtohome:hover>span i[data-v-99d9d4b2]:first-child{opacity:0}.form-page .backtohome:hover>span i[data-v-99d9d4b2]:last-child{opacity:1}[dir=ltr] .form-page .backtohome:hover>span i[data-v-99d9d4b2]:last-child{right:30px}[dir=rtl] .form-page .backtohome:hover>span i[data-v-99d9d4b2]:last-child{left:30px}.toast[data-v-99d9d4b2]{border-radius:4px;width:auto}[dir=ltr] .toast[data-v-99d9d4b2]{padding-right:8px}[dir=rtl] .toast[data-v-99d9d4b2]{padding-left:8px}[dir=ltr] .toast .toast-action[data-v-99d9d4b2]{margin-right:0}[dir=rtl] .toast .toast-action[data-v-99d9d4b2]{margin-left:0}.toast i.material-icons[data-v-99d9d4b2]{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=template&id=99d9d4b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-page"},[_vm._ssrNode("<div class=\"page-wrap\" data-v-99d9d4b2>","</div>",[_c('hidden',{attrs:{"point":"mdUp"}},[_c('div',{staticClass:"logo logo-header"},[_c('a',{attrs:{"href":_vm.routerLink.education.home}},[_c('img',{attrs:{"src":"/images/education-logo.svg","alt":"logo"}})])])]),_vm._ssrNode(" "),_c('v-container',{staticClass:"max-lg inner-wrap"},[_c('v-card',{staticClass:"card form-box fragment-fadeUp"},[_c('v-btn',{staticClass:"backtohome",attrs:{"href":_vm.routerLink.education.home,"icon":""}},[_c('i',{staticClass:"ion-ios-home-outline"}),_vm._v(" "),_c('i',{staticClass:"ion-ios-arrow-thin-left"})]),_vm._v(" "),_c('div',{staticClass:"auth-frame"},[_c('v-row',[_c('v-col',{attrs:{"md":"5","cols":"12"}},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"greeting"},[_c('div',{staticClass:"deco"},[_c('div',{staticClass:"primary-light"}),_vm._v(" "),_c('div',{staticClass:"secondary-main"}),_vm._v(" "),_c('div',{staticClass:"secondary-light"})]),_vm._v(" "),_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":"/images/education-logo.svg","alt":"logo"}}),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n                      "+_vm._s(_vm.brand.education.projectName)+"\n                    ")])]),_vm._v(" "),_c('h4',{staticClass:"use-text-title2 pb-2"},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                  ")]),_vm._v(" "),_c('h6',{staticClass:"use-text-paragraph"},[_vm._v("\n                    "+_vm._s(_vm.subtitle)+"\n                  ")])])])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"7","cols":"12"}},[_c('div',{staticClass:"form-wrap"},[_vm._t("default")],2)])],1)],1)],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=template&id=99d9d4b2&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(20);

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(39);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AuthFramevue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      brand: brand["a" /* default */],
      routerLink: text_link["a" /* default */]
    };
  },

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_AuthFramevue_type_script_lang_js_ = (AuthFramevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_AuthFramevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99d9d4b2",
  "75a638bc"
  
)

/* harmony default export */ var AuthFrame = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/SocialAuth.vue?vue&type=template&id=e64c8e28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"socmed-side-login"},[_c('v-btn',{staticClass:"navi-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-social-facebook"}),_vm._v("\n    Facebook\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"blue-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-social-twitter"}),_vm._v("\n    Twitter\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"red-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-social-google"}),_vm._v("\n    Google\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue?vue&type=template&id=e64c8e28&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(212);

// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e64c8e28",
  "4ee83088"
  
)

/* harmony default export */ var SocialAuth = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("28e0f063", content, true, context)
};

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_28baa036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_28baa036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_28baa036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_28baa036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_28baa036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text[data-v-28baa036],.use-text-title[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif}.use-text-title[data-v-28baa036]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-28baa036]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-28baa036]{font-size:28px;line-height:44px}}.use-text-title2[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif;font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-28baa036]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-28baa036]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-28baa036]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-28baa036]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-28baa036]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-28baa036]{font-size:16px;line-height:24px}}.use-text-caption[data-v-28baa036],.use-text-paragraph[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif;font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-28baa036]{font-size:14px;line-height:22px}}.use-hidden[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif}@media(max-width:1919px){.use-hidden-lg-down[data-v-28baa036]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-28baa036]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-28baa036]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-28baa036]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-28baa036]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-28baa036]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-28baa036]{display:none}}@font-face{font-family:\"IBM Plex Thai\";src:url(/font/ibmplexthai-regular.woff2) format(\"woff2\")}a[data-v-28baa036],body[data-v-28baa036],h1[data-v-28baa036],h2[data-v-28baa036],h3[data-v-28baa036],h4[data-v-28baa036],h5[data-v-28baa036],h6[data-v-28baa036],html[data-v-28baa036],p[data-v-28baa036]{font-family:\"IBM Plex Thai\",sans-serif}.form-page .page-wrap[data-v-28baa036]{text-align:center;min-height:100%;position:relative;background-image:url(/images/education/bg-pattern.png);background-repeat:repeat;width:100%;align-items:center;padding:88px 40px;background-size:15%}.theme--light .form-page .page-wrap[data-v-28baa036]{background-color:var(--v-secondarylight-base)}.theme--dark .form-page .page-wrap[data-v-28baa036]{background-color:#303030}@media(min-width:960px){.form-page .page-wrap[data-v-28baa036]{background-size:8%}}@media(max-width:959px){.form-page .page-wrap[data-v-28baa036]{padding:32px 0}}.form-page .page-wrap .title-contact[data-v-28baa036]{font-weight:var(--font-bold)}@media(max-width:599px){.form-page .page-wrap .title-contact[data-v-28baa036]{font-size:32px}}.form-page .page-wrap a[data-v-28baa036]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .form-page .page-wrap a[data-v-28baa036]{color:var(--v-secondarydark-base)}.theme--dark .form-page .page-wrap a[data-v-28baa036]{color:var(--v-secondarylight-base)}.form-page .inner-wrap[data-v-28baa036]{position:relative}[dir=ltr] .form-page .inner-wrap[data-v-28baa036]{text-align:left}[dir=rtl] .form-page .inner-wrap[data-v-28baa036]{text-align:right}@media(min-width:960px){.form-page .inner-wrap[data-v-28baa036]:before{content:\"\";box-shadow:0 0 12px 2px rgba(0,0,0,.05);width:100%;height:100%;background:var(--v-primary-base);transform:scale(.95) rotate(-10deg);position:absolute;border-radius:40px;top:0;left:0}}.form-page .full-form-wrap[data-v-28baa036]{padding:72px 0;color:#fff}.form-page .card.form-box[data-v-28baa036]{border-radius:40px;box-shadow:0 0 12px 2px rgba(0,0,0,.05);background:url(/images/education/plane.png) no-repeat 90% bottom var(--v-primarydark-base);overflow:hidden}@media(min-width:960px){.form-page .card.form-box[data-v-28baa036]{overflow:visible}}.form-page .desc[data-v-28baa036]{font-size:20px;text-align:center;padding:0 80px}@media(max-width:959px){.form-page .desc[data-v-28baa036]{padding:0 40px}}@media(max-width:599px){.form-page .desc[data-v-28baa036]{padding:0 16px;font-size:16px}}.form-page .input[data-v-28baa036]{width:100%}[dir=ltr] .form-page .input label[data-v-28baa036]{left:4px}[dir=rtl] .form-page .input label[data-v-28baa036]{right:4px}.form-page .input[data-v-28baa036]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .form-page .input[data-v-28baa036]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .form-page .input[data-v-28baa036]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .form-page .input[data-v-28baa036]  .v-input__slot input,[dir=ltr] .form-page .input[data-v-28baa036]  .v-input__slot select,[dir=ltr] .form-page .input[data-v-28baa036]  .v-input__slot textarea{left:16px}[dir=rtl] .form-page .input[data-v-28baa036]  .v-input__slot input,[dir=rtl] .form-page .input[data-v-28baa036]  .v-input__slot select,[dir=rtl] .form-page .input[data-v-28baa036]  .v-input__slot textarea{right:16px}.form-page .input[data-v-28baa036]  .v-input__slot input:focus,.form-page .input[data-v-28baa036]  .v-input__slot input:hover,.form-page .input[data-v-28baa036]  .v-input__slot select:focus,.form-page .input[data-v-28baa036]  .v-input__slot select:hover,.form-page .input[data-v-28baa036]  .v-input__slot textarea:focus,.form-page .input[data-v-28baa036]  .v-input__slot textarea:hover{background:none}.form-page .input.light[data-v-28baa036]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.form-page .input.light[data-v-28baa036]  .v-input__slot .v-label,.form-page .input.light[data-v-28baa036]  .v-input__slot input,.form-page .input.light[data-v-28baa036]  .v-input__slot select,.form-page .input.light[data-v-28baa036]  .v-input__slot textarea{color:#fff}.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot input:focus,.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot select:focus,.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot input:focus,.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot select:focus,.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot input:hover,.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot select:hover,.theme--light .form-page .input.light[data-v-28baa036]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot input:hover,.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot select:hover,.theme--dark .form-page .input.light[data-v-28baa036]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form-page .form[data-v-28baa036]{position:relative;margin-top:24px;padding:0 120px 80px}[dir=ltr] .form-page .form[data-v-28baa036]{text-align:left}[dir=rtl] .form-page .form[data-v-28baa036]{text-align:right}@media(max-width:959px){.form-page .form[data-v-28baa036]{padding:0 48px 80px}}@media(max-width:599px){.form-page .form[data-v-28baa036]{padding:0 16px 80px}}.form-page .form-helper[data-v-28baa036]{display:flex;justify-content:space-between;align-items:flex-start}@media(max-width:599px){.form-page .form-helper[data-v-28baa036]{flex-direction:column;align-items:center}}.form-page .flex[data-v-28baa036]{flex:1}@media(min-width:600px){.form-page .btn-area[data-v-28baa036]{display:flex;align-items:center;justify-content:space-between}}@media(max-width:599px){.form-page .btn-area[data-v-28baa036]{text-align:center}.form-page .btn-area button[data-v-28baa036]{width:100%}}@media(max-width:599px){.form-page .btn-area span[data-v-28baa036]{font-size:14px}}.form-page .btn-area span a.link[data-v-28baa036]{display:block;text-decoration:none!important}.form-page .btn-area .flex[data-v-28baa036]{flex:1}.form-page .white-label[data-v-28baa036]  label{color:#fff}[dir=ltr] .form-page .right-icon[data-v-28baa036]{margin-left:8px}[dir=rtl] .form-page .right-icon[data-v-28baa036]{margin-right:8px}.form-page .check svg[data-v-28baa036]{fill:var(--v-secondary-base)}.form-page .auth-frame[data-v-28baa036]{display:block;position:relative}.form-page .auth-frame .row>div[data-v-28baa036]{padding:0}.form-page .greeting[data-v-28baa036]{padding:240px 48px;height:100%;text-align:center;color:#fff;position:relative}.form-page .greeting h6[data-v-28baa036]{font-weight:var(--font-regular)}@media(max-width:1279px){.form-page .deco[data-v-28baa036]{display:none}}.form-page .deco>*[data-v-28baa036]{z-index:4;box-shadow:0 0 18px 0 rgba(0,0,0,.17);position:absolute;transform:rotate(45deg)}.form-page .deco .primary-light[data-v-28baa036]{border-radius:15px;width:70px;height:70px;top:50%;border:10px solid;border-color:var(--v-primarylight-base)}[dir=ltr] .form-page .deco .primary-light[data-v-28baa036]{left:-20px}[dir=rtl] .form-page .deco .primary-light[data-v-28baa036]{right:-20px}.form-page .deco .secondary-main[data-v-28baa036]{border-radius:10px;width:50px;height:50px;top:-20px;border:10px solid;border-color:var(--v-secondary-base)}[dir=ltr] .form-page .deco .secondary-main[data-v-28baa036]{right:-10px}[dir=rtl] .form-page .deco .secondary-main[data-v-28baa036]{left:-10px}.form-page .deco .secondary-light[data-v-28baa036]{width:100px;height:100px;border-radius:25px;bottom:-60px;border:12px solid;border-color:var(--v-secondarylight-base)}[dir=ltr] .form-page .deco .secondary-light[data-v-28baa036]{right:60px}[dir=rtl] .form-page .deco .secondary-light[data-v-28baa036]{left:60px}.form-page .logo[data-v-28baa036]{text-align:center;margin-bottom:16px}.form-page .logo.logo-header[data-v-28baa036]{flex-direction:column;align-items:center;position:relative;z-index:10}.form-page .logo img[data-v-28baa036]{width:90px}.form-page .logo p[data-v-28baa036],.form-page .logo span[data-v-28baa036]{display:block;font-size:18px;padding-bottom:4px;margin-bottom:0;color:#fff;font-weight:var(--font-bold)}[dir=ltr] .form-page .logo p[data-v-28baa036],[dir=ltr] .form-page .logo span[data-v-28baa036]{margin-left:8px}[dir=rtl] .form-page .logo p[data-v-28baa036],[dir=rtl] .form-page .logo span[data-v-28baa036]{margin-right:8px}.form-page .head[data-v-28baa036]{display:flex;justify-content:space-between;align-items:flex-start}.form-page .head a[data-v-28baa036]{margin-top:16px;box-shadow:none}[dir=rtl] .form-page .head a i[data-v-28baa036]{transform:scale(-1)}@media(min-width:960px){.form-page .head[data-v-28baa036]{margin-bottom:40px}}@media(max-width:959px){.form-page .head[data-v-28baa036]{margin-top:16px;justify-content:center}.form-page .head a[data-v-28baa036]{display:none}}.form-page .form-wrap[data-v-28baa036]{position:relative;padding:16px 16px 80px;min-height:760px;overflow:hidden}.theme--light .form-page .form-wrap[data-v-28baa036]{background-color:#fff}.theme--dark .form-page .form-wrap[data-v-28baa036]{background-color:#424242}.v-application--is-ltr .form-page .form-wrap[data-v-28baa036]{border-radius:0 40px 40px 0}.v-application--is-rtl .form-page .form-wrap[data-v-28baa036]{border-radius:40px 0 0 40px}.form-page .form-wrap .frm-deco[data-v-28baa036]{transform:translateX(-72%);bottom:-105px}[dir=ltr] .form-page .form-wrap .frm-deco[data-v-28baa036]{left:58.333333%}[dir=rtl] .form-page .form-wrap .frm-deco[data-v-28baa036]{right:58.333333%}@media(min-width:600px){.form-page .form-wrap[data-v-28baa036]{padding:40px}}@media(min-width:1280px){.form-page .form-wrap[data-v-28baa036]{padding:64px}}@media(max-width:959px){.form-page .form-wrap[data-v-28baa036]{padding:40px}}.form-page .socmed-side-login[data-v-28baa036]{display:flex;justify-content:space-around}@media(max-width:1279px){.form-page .socmed-side-login[data-v-28baa036]{justify-content:center}}@media(max-width:599px){.form-page .socmed-side-login[data-v-28baa036]{display:block}}.form-page .socmed-side-login>button[data-v-28baa036]{color:#fff;padding:8px;line-height:18px;width:160px}@media(max-width:1279px){.form-page .socmed-side-login>button[data-v-28baa036]{margin:0 4px}}@media(max-width:599px){.form-page .socmed-side-login>button[data-v-28baa036]{margin:0 0 16px;width:100%}}.form-page .socmed-side-login i[data-v-28baa036]{font-size:16px;color:#fff}[dir=ltr] .form-page .socmed-side-login i[data-v-28baa036]{margin-right:8px}[dir=rtl] .form-page .socmed-side-login i[data-v-28baa036]{margin-left:8px}.form-page .blue-btn[data-v-28baa036]{background:#28aae1!important}.form-page .blue-btn[data-v-28baa036]:hover{background:#146a8f!important}.form-page .navi-btn[data-v-28baa036]{background:#3b579d!important}.form-page .navi-btn[data-v-28baa036]:hover{background:#1f2e53!important}.form-page .red-btn[data-v-28baa036]{background:#dd493c!important}.form-page .red-btn[data-v-28baa036]:hover{background:#98251b!important}.form-page .separator[data-v-28baa036]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.form-page .separator p[data-v-28baa036]{font-size:12px}}.form-page .separator[data-v-28baa036]:after,.form-page .separator[data-v-28baa036]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .form-page .separator[data-v-28baa036]:after,.theme--light .form-page .separator[data-v-28baa036]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .form-page .separator[data-v-28baa036]:after,.theme--dark .form-page .separator[data-v-28baa036]:before{border-top-color:hsla(0,0%,100%,.5)}.form-page .separator[data-v-28baa036]:before{left:0}.form-page .separator[data-v-28baa036]:after{right:0}.form-page .form-control-label[data-v-28baa036]{flex:1}.form-page .form-control-label[data-v-28baa036]  .v-messages{min-height:0}.form-page .form-control-label a[data-v-28baa036]{position:relative}[dir=ltr] .form-page .form-control-label a[data-v-28baa036]{left:3px}[dir=rtl] .form-page .form-control-label a[data-v-28baa036]{right:3px}.form-page .form-control-label>div[data-v-28baa036]{display:inline-block;margin-top:0}.form-page .backtohome[data-v-28baa036]{width:80px;height:80px;line-height:80px;position:absolute;margin-top:20px;z-index:4;border-radius:50%}[dir=ltr] .form-page .backtohome[data-v-28baa036]{margin-left:20px}[dir=rtl] .form-page .backtohome[data-v-28baa036]{margin-right:20px}@media(max-width:959px){.form-page .backtohome[data-v-28baa036]{top:40px;margin:0}[dir=ltr] .form-page .backtohome[data-v-28baa036]{left:calc(50% - 40px)}[dir=rtl] .form-page .backtohome[data-v-28baa036]{right:calc(50% - 40px)}}@media(max-width:959px){.form-page .backtohome[data-v-28baa036]{display:none}}.form-page .backtohome i[data-v-28baa036]{font-size:32px;line-height:80px!important;color:#fff}.form-page .backtohome>span i[data-v-28baa036]:first-child{opacity:1;transition:opacity .3s ease}.form-page .backtohome>span i[data-v-28baa036]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .form-page .backtohome>span i[data-v-28baa036]:last-child{right:0}[dir=rtl] .form-page .backtohome>span i[data-v-28baa036]:last-child{left:0}.form-page .backtohome[data-v-28baa036]:hover{background:rgba(0,0,0,.05)}.form-page .backtohome:hover>span i[data-v-28baa036]:first-child{opacity:0}.form-page .backtohome:hover>span i[data-v-28baa036]:last-child{opacity:1}[dir=ltr] .form-page .backtohome:hover>span i[data-v-28baa036]:last-child{right:30px}[dir=rtl] .form-page .backtohome:hover>span i[data-v-28baa036]:last-child{left:30px}.toast[data-v-28baa036]{border-radius:4px;width:auto}[dir=ltr] .toast[data-v-28baa036]{padding-right:8px}[dir=rtl] .toast[data-v-28baa036]{padding-left:8px}[dir=ltr] .toast .toast-action[data-v-28baa036]{margin-right:0}[dir=rtl] .toast .toast-action[data-v-28baa036]{margin-left:0}.toast i.material-icons[data-v-28baa036]{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=07c11088&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('login-form')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=07c11088&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=template&id=28baa036&scoped=true&
var Loginvue_type_template_id_28baa036_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('AuthFrame',{attrs:{"title":_vm.$t('common.login_title'),"subtitle":_vm.$t('common.login_subtitle')}},[_c('div',[_c('div',{staticClass:"head"},[_c('title-main',{attrs:{"head":_vm.$t('common.login'),"align":"left","color":"secondary"}}),_vm._v(" "),_c('v-btn',{staticClass:"button-link",attrs:{"href":_vm.routerLink.education.register,"text":"","small":""}},[_c('v-icon',{staticClass:"icon signArrow"},[_vm._v("\n          mdi-arrow-right\n        ")]),_vm._v("\n        "+_vm._s(_vm.$t('common.login_create'))+"\n      ")],1)],1),_vm._v(" "),_c('social-auth'),_vm._v(" "),_c('div',{staticClass:"separator"},[_c('p',[_vm._v("\n        "+_vm._s(_vm.$t('common.login_or'))+"\n      ")])]),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing3"},[_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.login_email'),"rules":_vm.emailRules,"color":"secondary","name":"email","filled":"","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.login_password'),"rules":_vm.requiredRules,"color":"secondary","type":"password","name":"email","filled":"","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"form-helper"},[_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"label":_vm.$t('common.login_remember'),"color":"secondary"},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}})],1),_vm._v(" "),_c('v-btn',{staticClass:"button-link",attrs:{"small":"","text":"","href":"#"}},[_vm._v("\n          "+_vm._s(_vm.$t('common.login_forgot'))+"\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-area mt-10"},[_c('v-btn',{attrs:{"large":"","block":"","color":"secondary"},on:{"click":_vm.handleSubmit}},[_vm._v("\n          "+_vm._s(_vm.$t('common.continue'))+"\n        ")])],1)],1)],1)])}
var Loginvue_type_template_id_28baa036_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=template&id=28baa036&scoped=true&

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(39);

// EXTERNAL MODULE: ./components/Title/index.js + 5 modules
var Title = __webpack_require__(215);

// EXTERNAL MODULE: ./components/Forms/SocialAuth.vue + 2 modules
var SocialAuth = __webpack_require__(246);

// EXTERNAL MODULE: ./components/Forms/AuthFrame.vue + 4 modules
var AuthFrame = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  components: {
    SocialAuth: SocialAuth["a" /* default */],
    'title-main': Title["a" /* default */],
    AuthFrame: AuthFrame["a" /* default */]
  },

  data() {
    return {
      routerLink: text_link["a" /* default */],
      valid: true,
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    };
  },

  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
      }
    }

  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(236);

// CONCATENATED MODULE: ./components/Forms/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_28baa036_scoped_true_render,
  Loginvue_type_template_id_28baa036_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "28baa036",
  "c8423234"
  
)

/* harmony default export */ var Login = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCheckbox: VCheckbox["a" /* default */],VCol: VCol["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    LoginForm: Login
  },

  head() {
    return {
      title: brand["a" /* default */].education.name + ' - Login'
    };
  }

});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e20b990"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (login_component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map