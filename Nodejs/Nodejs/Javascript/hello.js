// exports.world = function() {
//  console.log("hello world");
// }

function hello() {
	this.sayHello = function () {
		console.log("hello");
	}
}
module.exports = hello;
