/* This function 'memorizes' that the Splash screens should be skipped
 * despite an engine restart. */
$(document).one(':enginerestart', function (ev) {
    if(recall("skipSplash", false)) {
    //memorize("skipSplash", true);
		}
});

/* This function bypasses the Splash screens on an engine restart. */
Config.navigation.override = function (destinationPassage) {
    if ((passage() == "") && recall("skipSplash", false)) {
        forget("skipSplash");
        //destinationPassage = "Start0";
			  destinationPassage = "title";
    }
    return destinationPassage;
};