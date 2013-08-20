/**
 * Phonegap LocalNotification Plugin Copyright (c) Greg Allen 2011 Updates Drew
 * Dahlman 2012
 * 
 * MIT Licensed
 * 
 * Usage: plugins.localNotification.add({ date: new Date(), message: 'This is a
 * notification', badge: 1, id: 123,
 * sound:'sub.caf',background:'app.background()',foreground:'app.running()' });
 * plugins.localNotification.cancel(123); plugins.localNotification.cancelAll();
 */
var cordovaRef = window.PhoneGap || window.Cordova || window.cordova;

var LocalNotification = function() {
};

LocalNotification.prototype.add = function(options) {
	var defaults = {
		date : false,
		message : '',
		hasAction : true,
		action : 'View',
		repeat : '',
		badge : 0,
		id : 0,
		sound : '',
		background : '',
		foreground : ''
	};
	for ( var key in defaults) {
		if (typeof options[key] !== "undefined")
			defaults[key] = options[key];
	}
	if (typeof defaults.date == 'object') {
		defaults.date = Math.round(defaults.date.getTime() / 1000);
	}
	cordovaRef.exec(null, null, "LocalNotification", "addNotification", [defaults]);
};

LocalNotification.prototype.cancel = function(id) {
	cordovaRef.exec(null, null, "LocalNotification", "cancelNotification", [id]);
};

LocalNotification.prototype.cancelAll = function() {
	cordovaRef.exec(null, null, "LocalNotification", "cancelAllNotifications", null);
};

if (cordovaRef) {
	if (!window.plugins) {
		window.plugins = {};
	}
	if (!window.plugins.localNotification) {
		window.plugins.localNotification = new LocalNotification();
	}
}
