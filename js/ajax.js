async function ajax(action, data, callback){
	const url = 'server.php';
	let dataString = {
		action: action,
		data: data
	};
	const requestData = JSON.stringify(dataString);
	console.log(requestData);
	try {
		const request = await fetch(url, {
		    method: 'POST',
		    body: requestData,
		    headers: {
		    	'Content-Type': 'application/json'
		    }
		});
		const response = await request.json();
		callback(response);
	} catch (error) {
		callback('Error: ' + error);
	}
}
