//test comment

console.log('Loading function');

exports.handler = function(event,context) {

    var param1 = '/tmp/' + Date.now();

	console.log(param1);
	context.succeed(param1);

}; 
