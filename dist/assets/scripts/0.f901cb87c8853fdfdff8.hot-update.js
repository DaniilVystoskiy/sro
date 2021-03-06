webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _slickCarousel = __webpack_require__(5);
	
	var _slickCarousel2 = _interopRequireDefault(_slickCarousel);
	
	var _select = __webpack_require__(6);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		function initModals() {
			// Show modal
			(0, _jquery2.default)('[data-link="modal"]').on('click', function () {
				var link = (0, _jquery2.default)(this).attr('href') || (0, _jquery2.default)(this).data('href');
				var modal = (0, _jquery2.default)(link);
	
				(0, _jquery2.default)(modal).addClass('active');
			});
			// Hide modal on cross click
			(0, _jquery2.default)('.modal').on('click', '.close', function () {
				(0, _jquery2.default)(this).closest('.modal').removeClass('active');
			});
			// Hide modal on empty place click
			(0, _jquery2.default)(document).on('click', function (e) {
				var target = e.target;
	
				if ((0, _jquery2.default)(target).hasClass('modal')) {
					(0, _jquery2.default)('.modal').removeClass('active');
				}
			});
		}
	
		function megaMenusScrollHandle() {
			var yOffset = -(0, _jquery2.default)(window).scrollTop() + 15;
			var megaMenus = (0, _jquery2.default)('.js-mega-menu');
	
			_jquery2.default.each(megaMenus, function (idx, elem) {
				if ((0, _jquery2.default)(elem).css('position') === 'fixed') {
					(0, _jquery2.default)(elem).css('transform', 'translateY(' + yOffset + 'px)');
				}
			});
		}
	
		function initSliders() {
			(0, _jquery2.default)('.slider.single-item').slick({
				dots: true,
				infinite: false
			});
	
			(0, _jquery2.default)('.slider.items').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: true,
				infinite: false,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}, {
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			});
		}
	
		function initSelect2() {
			(0, _jquery2.default)('#choose-city').select2({
				minimumResultsForSearch: Infinity
			});
		}
	
		function isMobile() {
			if ((0, _jquery2.default)(window).width() < 1140) {
				var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	
				if (touch) {
					// remove all :hover stylesheets
					try {
						// prevent exception on browsers not supporting DOM styleSheets properly
						for (var si in document.styleSheets) {
							var styleSheet = document.styleSheets[si];
							if (!styleSheet.rules) {
								continue;
							}
	
							for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
								if (!styleSheet.rules[ri].selectorText) {
									continue;
								}
	
								if (styleSheet.rules[ri].selectorText.match(':hover')) {
									styleSheet.deleteRule(ri);
								}
							}
						}
					} catch (ex) {}
				}
				return true;
			} else {
				return false;
			}
		}
	
		function handleClickOnMenu() {
			(0, _jquery2.default)(this).toggleClass('active');
			(0, _jquery2.default)(this).children('.dropdown').toggle();
		}
	
		function dropdownToggleActivation() {
			if (isMobile()) {
				(0, _jquery2.default)('.hasDropdown').on('click', handleClickOnMenu);
			} else {
				(0, _jquery2.default)('.hasDropdown').off('click', handleClickOnMenu);
			}
		}
	
		function initJsDropdown() {
			(0, _jquery2.default)('[data-item="dropdown"]').on('click', function (e) {
				e.preventDefault();
				var target = (0, _jquery2.default)(this).attr('href');
	
				(0, _jquery2.default)(this).toggleClass('folded');
				(0, _jquery2.default)(target).toggle();
			});
		}
	
		(0, _jquery2.default)(document).ready(function () {
			(0, _svg4everybody2.default)();
			initModals();
			initSliders();
			initSelect2();
			dropdownToggleActivation();
			initJsDropdown();
	
			// let docWidth = document.documentElement.offsetWidth;
	
			// [].forEach.call(
			// 	document.querySelectorAll('*'),
			// 	function(el) {
			// 		if (el.offsetWidth > docWidth) {
			// 			console.log(el);
			// 		}
			// 	}
			// );
	
			(0, _jquery2.default)(window).on('scroll', megaMenusScrollHandle);
		});
	});

/***/ })
])
//# sourceMappingURL=0.f901cb87c8853fdfdff8.hot-update.js.map