module.exports = function (app, passport) {



app.get('/api/user/facebookLogin', passport.authenticate('facebook-passport'), function(req, res){});

app.get('/auth/facebook/callback', passport.authenticate('facebook-passport', {
	successRedirect : 'profile',
	failureRedirect	: "error", 
	}), function(req, res) {
		res.redirect('index.html');
	}
});

app.get('/logout', function(req, res){ 
	req.logout();
	res.redirect('/')
});


}