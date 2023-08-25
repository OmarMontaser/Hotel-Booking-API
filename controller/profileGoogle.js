

module.exports = {
    getProfile: (req, res) => {
        if (req.isAuthenticated()) {
            // User is authenticated, render the profile page
            res.render('profile', { user: req.user });
        } else {
            // User is not authenticated, redirect to the login page
            res.redirect('/');
        }
    },
};
