// Generated by CoffeeScript 2.0.0
var TestCase;

TestCase = require("./test-base");

//###############################################################################
// calculation (add,sub) tests
//###############################################################################
exports.test_addition = async function(test) {
	var bot;
	bot = new TestCase(test, `
		+ test counter
		- <set counter=0>counter set

		+ show
		- counter = <get counter>

		+ add
		- <add counter=1>adding

		+ sub
		- <sub counter=1>subbing

		+ div
		- <set counter=10>
		^ <div counter=2>
		^ divving

		+ mult
		- <set counter=10>
		^ <mult counter=2>
		^ multing
	`);
	await bot.reply("test counter", "counter set");
	await bot.reply("show", "counter = 0");
	await bot.reply("add", "adding");
	await bot.reply("show", "counter = 1");
	await bot.reply("sub", "subbing");
	await bot.reply("show", "counter = 0");
	await bot.reply("div", "divving");
	await bot.reply("show", "counter = 5");
	await bot.reply("mult", "multing");
	await bot.reply("show", "counter = 20");
	return test.done();
};
