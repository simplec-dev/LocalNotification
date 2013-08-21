PHONEGAP LOCALNOTIFICATION 

Adapted from https://github.com/DrewDahlman/Phonegap-LocalNotification/tree/master/cordova2.3%2B

Cordova Local Notification Plugin
=================================

A Cordova 2.3.0+ plugin to create local notifications on iOs by Olivier Lesnicki.


Installing the plugin
---------------------

1. Place `LocalNotification.m` and LocalNotification.h in your `Plugins` folder
2. Place `cordova.localNotification.js` in your `www` folder
3. Link your index page to `cordova.localNotification.js`
4. In `config.xml` add the following within the `<plugins>` tag

    	<plugin name="LocalNotification" value="LocalNotification" />

In order to enable the notification listener we need to uncomment a number of lines in `CDVPlugin.m` and `CDVPlugin.h

5. In `CordovaLib/Classes/CDVPlugin.m` uncomment the following line in `initWithWebView`

		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didReceiveLocalNotification:) name:CDVLocalNotification object:nil];

6. In `CordovaLib/Classes/CDVPlugin.m` uncomment the following lines at the end of the file

		- (void)didReceiveLocalNotification:(NSNotification *)notification {}

7. In `CordovaLib/Classes/CDVPlugin.h` uncomment the following line

		 - (void)didReceiveLocalNotification:(NSNotification *)notification;

8. Place your `.caf sound in your App `Resources` folder (not the `www` folder)


Using the plugin
----------------

	// Schedules a local notification to be triggered after 5 seconds
    window.plugins.localNotification.add({
		fireDate        : Math.round(new Date().getTime()/1000 + 5),
		alertBody       : "This is a local notification.",
		action			: "View",
		repeatInterval  : "daily",
		soundName       : "beep.caf",
		badge           : 0,
		notificationId  : 123,
		foreground      : function(notificationId){ 
			alert("Hello World! This alert was triggered by notification " + notificationId); 
		},
		background	: function(notificationId){
			alert("Hello World! This alert was triggered by notification " + notificationId);
		}    		
	});

	// cancel notificationId = 1234
    window.plugins.localNotification.cancel(1234, callback);
    
    // cancel all notifications
    window.plugins.localNotification.cancelAll(callback);
    
    // set badge number to 3
    window.plugins.localNotification.setBadgeNumber(3);

To Do
-----

- Implement badges (currently property is ignored)
- JavaScript validation

