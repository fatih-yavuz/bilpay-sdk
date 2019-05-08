"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}
addStyleString('\n' +
    '@-webkit-keyframes scaleAnimation {\n' +
    '  0% {\n' +
    '    opacity: 0;\n' +
    '    -webkit-transform: scale(1.5);\n' +
    '            transform: scale(1.5);\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 1;\n' +
    '    -webkit-transform: scale(1);\n' +
    '            transform: scale(1);\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    '@keyframes scaleAnimation {\n' +
    '  0% {\n' +
    '    opacity: 0;\n' +
    '    -webkit-transform: scale(1.5);\n' +
    '            transform: scale(1.5);\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 1;\n' +
    '    -webkit-transform: scale(1);\n' +
    '            transform: scale(1);\n' +
    '  }\n' +
    '}\n' +
    '@-webkit-keyframes drawCircle {\n' +
    '  0% {\n' +
    '    stroke-dashoffset: 151px;\n' +
    '  }\n' +
    '  100% {\n' +
    '    stroke-dashoffset: 0;\n' +
    '  }\n' +
    '}\n' +
    '@keyframes drawCircle {\n' +
    '  0% {\n' +
    '    stroke-dashoffset: 151px;\n' +
    '  }\n' +
    '  100% {\n' +
    '    stroke-dashoffset: 0;\n' +
    '  }\n' +
    '}\n' +
    '@-webkit-keyframes drawCheck {\n' +
    '  0% {\n' +
    '    stroke-dashoffset: 36px;\n' +
    '  }\n' +
    '  100% {\n' +
    '    stroke-dashoffset: 0;\n' +
    '  }\n' +
    '}\n' +
    '@keyframes drawCheck {\n' +
    '  0% {\n' +
    '    stroke-dashoffset: 36px;\n' +
    '  }\n' +
    '  100% {\n' +
    '    stroke-dashoffset: 0;\n' +
    '  }\n' +
    '}\n' +
    '@-webkit-keyframes fadeOut {\n' +
    '  0% {\n' +
    '    opacity: 1;\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 0;\n' +
    '  }\n' +
    '}\n' +
    '@keyframes fadeOut {\n' +
    '  0% {\n' +
    '    opacity: 1;\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 0;\n' +
    '  }\n' +
    '}\n' +
    '@-webkit-keyframes fadeIn {\n' +
    '  0% {\n' +
    '    opacity: 0;\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 1;\n' +
    '  }\n' +
    '}\n' +
    '@keyframes fadeIn {\n' +
    '  0% {\n' +
    '    opacity: 0;\n' +
    '  }\n' +
    '  100% {\n' +
    '    opacity: 1;\n' +
    '  }\n' +
    '}\n' +
    '#successAnimationCircle {\n' +
    '  stroke-dasharray: 151px 151px;\n' +
    '  stroke: #000;\n' +
    '}\n' +
    '\n' +
    '#successAnimationCheck {\n' +
    '  stroke-dasharray: 36px 36px;\n' +
    '  stroke: #888;\n' +
    '}\n' +
    '\n' +
    '#successAnimationResult {\n' +
    '  fill: rgba(23,162,184,.5);\n' +
    '  opacity: 0;\n' +
    '}\n' +
    '\n' +
    '#successAnimation.animated {\n' +
    '  -webkit-animation: 1s ease-out 0s 1 both scaleAnimation;\n' +
    '          animation: 1s ease-out 0s 1 both scaleAnimation;\n' +
    '}\n' +
    '#successAnimation.animated #successAnimationCircle {\n' +
    '  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;\n' +
    '          animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle, 0.3s linear 0.9s 1 both fadeOut;\n' +
    '}\n' +
    '#successAnimation.animated #successAnimationCheck {\n' +
    '  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;\n' +
    '          animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck, 0.3s linear 0.9s 1 both fadeOut;\n' +
    '}\n' +
    '#successAnimation.animated #successAnimationResult {\n' +
    '  -webkit-animation: 0.3s linear 0.9s both fadeIn;\n' +
    '          animation: 0.3s linear 0.9s both fadeIn;\n' +
    '}\n' +
    '\n' +
    '#replay {\n' +
    '  background: rgba(255, 255, 255, 0.2);\n' +
    '  border: 0;\n' +
    '  border-radius: 3px;\n' +
    '  bottom: 100px;\n' +
    '  color: #888;\n' +
    '  left: 50%;\n' +
    '  outline: 0;\n' +
    '  padding: 10px 30px;\n' +
    '  position: absolute;\n' +
    '  -webkit-transform: translateX(-50%);\n' +
    '          transform: translateX(-50%);\n' +
    '}\n' +
    '#replay:active {\n' +
    '  background: rgba(255, 255, 255, 0.1);\n' +
    '}' +
    '' +
    '@-webkit-keyframes rotation {\n' +
    '    from {\n' +
    '        -webkit-transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '        -webkit-transform: rotate(359deg);\n' +
    '    }\n' +
    '}\n' +
    '@-moz-keyframes rotation {\n' +
    '    from {\n' +
    '        -moz-transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '        -moz-transform: rotate(359deg);\n' +
    '    }\n' +
    '}\n' +
    '@-o-keyframes rotation {\n' +
    '    from {\n' +
    '        -o-transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '        -o-transform: rotate(359deg);\n' +
    '    }\n' +
    '}\n' +
    '@keyframes rotation {\n' +
    '    from {\n' +
    '        transform: rotate(0deg);\n' +
    '    }\n' +
    '    to {\n' +
    '        transform: rotate(359deg);\n' +
    '    }\n' +
    '}' +
    '' +
    '' +
    '.bilpay-loading {\n' +
    '    -webkit-animation: rotation .75s infinite linear;\n' +
    '    -moz-animation: rotation .75s infinite linear;\n' +
    '    -o-animation: rotation .75s infinite linear;\n' +
    '    animation: rotation .75s infinite linear;\n' +
    '}' +
    '' +
    '\n');
var modal = jquery_1.default('<div>\n' +
    '    <div class="modal-content">\n' +
    '        <canvas id="canvas"></canvas>' +
    '<svg id="successAnimation"  xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 70 70">\n' +
    '  <path id="successAnimationResult" fill="rgba(23,162,184,.5)" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>\n' +
    '  <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>\n' +
    '  <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>\n' +
    '</svg>' +
    '<img id="error" style="position: absolute; width: 308px; height: 308px; opacity: 0.5" src="https://img.icons8.com/ultraviolet/100/000000/close-window.png">' +
    '<img id="loading" src="data:image/png;base64,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">' +
    '    </div>' +
    '</div>\n');
jquery_1.default('.modal-content', modal).css({
    width: '400px',
    height: '400px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'background-color': 'white',
    padding: '1rem 1.5rem',
    'border-radius': '0.5rem',
    'justify-content': 'center',
    'align-items': 'center'
});
var hideModal = {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    'background-color': 'rgba(0, 0, 0, 0.5)',
    opacity: '0',
    visibility: 'hidden',
    transform: 'scale(1.1)',
    transition: 'visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s',
};
var showModal = {
    'opacity': '1',
    'visibility': 'visible',
    'transform': 'scale(1.0)',
    'transition': 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s'
};
var animation = jquery_1.default('#successAnimation', modal);
animation.css({
    position: 'absolute'
});
modal.hide = function () {
    modal.isOpen = false;
    hideLoading();
    modal.css(hideModal);
};
var resetCheck = function () {
    hideLoading();
    animation.hide();
    animation.removeClass('animated');
};
var initCheck = function () {
    hideLoading();
    animation.show();
    animation.addClass('animated');
};
var hideLoading = function () {
    jquery_1.default('#loading', modal).hide();
};
var showLoading = function () {
    jquery_1.default('#error', modal).hide();
    jquery_1.default('#loading', modal).addClass('bilpay-loading');
    jquery_1.default('#loading', modal).show();
};
modal.show = function () {
    modal.isOpen = true;
    resetCheck();
    modal.css(showModal);
};
modal.success = function () {
    modal.isOpen = false;
    hideLoading();
    jquery_1.default('canvas', modal).css({
        opacity: 0.1
    });
    initCheck();
    setTimeout(modal.hide, 1500);
};
modal.fail = function (message) {
    if (modal.isOpen) {
        hideLoading();
        jquery_1.default('#error', modal).fadeIn(500);
        jquery_1.default('canvas', modal).css({
            opacity: 0.1
        });
        setTimeout(function () {
            alert(message);
        }, 1000);
    }
};
modal.loading = function () {
    showLoading();
};
modal.hideQR = function () {
    showLoading();
    jquery_1.default('canvas', modal).hide();
};
modal.showQR = function () {
    hideLoading();
    jquery_1.default('canvas', modal).show();
    jquery_1.default('canvas', modal).css({
        opacity: 1
    });
};
(function () {
    modal.hide();
    jquery_1.default('body').append(modal);
    modal.click(function () {
        modal.hide();
    });
    jquery_1.default('.modal-content', modal).click(function (e) {
        console.log("content clicked");
        e.stopPropagation();
    });
    jquery_1.default(document).keyup(function (e) {
        if (e.keyCode === 27)
            modal.hide();
    });
})();
exports.default = modal;
//# sourceMappingURL=modal.js.map