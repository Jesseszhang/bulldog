/**
 * @description to judge whether element hasClass
 * @export
 * @param {any} el -> element
 * @param {any} cls -> current class
 * @returns Boolean
 */
export function hasClass(el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(' ') !== -1) {
		throw new Error('className has space!');
	}
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (' ' + el.className + ' ')
			.indexOf(' ' + cls + ' ') > -1;
	}
};
/**
 * @description remove class form element
 * @export
 * @param {any} el
 * @param {any} cls
 * @returns
 */
export function addClass(el, cls) {
	if (!el) return;
	var curClass = el.className;
	var classes = (cls || '')
		.split(' ');

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else {
			if (!hasClass(el, clsName)) {
				curClass += ' ' + clsName;
			}
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
};
/**
 * @description remove class form element
 * @export
 * @param {any} el element
 * @param {any} cls class
 * @returns
 */
export function removeClass(el, cls) {
	if (!el || !cls) return;
	var classes = cls.split(' ');
	var curClass = ' ' + el.className + ' ';

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else {
			if (hasClass(el, clsName)) {
				curClass = curClass.replace(' ' + clsName + ' ', ' ');
			}
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
};
/**
 * delete space
 * @param {*} string
 */
const trim = function(string) {
	return (string || '')
		.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

