let defaultHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const docking = true
const address = ""

module.exports = function(type, url, params) {

	let urls = docking ? address + '/api/' + url : url;

	let ajaxOptions = {
		url: urls,
		type: type,
		data: type === 'get' ? params : JSON.stringify(params),
		contentType: 'application/json',
		dataType: 'json',
	}

	let appToken = window.localStorage.getItem('token');
	if (appToken) {
		ajaxOptions.headers = Object.assign(defaultHeaders, { token: appToken });
	}

	return new Promise((resolve, reject) => {
		let appToken = window.localStorage.getItem('token');
		if (!appToken) {
			//todo
			reject();
			return false;
		}
		$.ajax(Object.assign(ajaxOptions, {
			success: (res) => {
				if (res.code === 0) {
					resolve(res.data);
				} else if (res.code === 2) {
					//todo
				} else {
					reject(res);
				}
			},
			complete: () => {
				//todo
			},
			error: (err) => {
				//todo
			}
		}))
	});
}
