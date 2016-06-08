/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function(req, res) {
		var query = Preregistration
			.findOne(1)
			.populate('users').exec(function(err, preregistration) {
				console.log(preregistration);
			});;

		return res.ok('query');
	}
};
