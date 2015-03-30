// JavaScript Document
// CREATE TABLE IF NOT EXISTS log (id INTEGER PRIMARY KEY AUTOINCREMENT, lat REAL, lon REAL, image TEXT, comment TEXT)

var geo = undefined;
var geoPosition = undefined;
var map = undefined;
var mapMarker = undefined;
var db = undefined;

$(document).bind("mobileinit", init);

function init()
{
	
}

var app = {
	//Application Constructor
	initialize: function(){
		this.bindEvents();
	},
	bindEvents: function(){
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function(){
		navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
	},
	
	onSuccess: function(position){
		alert(position.coords.longitude);
	},
	
	onError: function(error){
		alert('code: '+error.code +'\n'+'message: '+error.message+'\n');
	}
};
