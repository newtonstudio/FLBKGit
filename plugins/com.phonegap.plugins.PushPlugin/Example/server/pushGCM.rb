require 'rubygems'
require 'pushmeup'
GCM.host = 'https://android.googleapis.com/gcm/send'
GCM.format = :json
GCM.key = "AIzaSyDberbka9T02QGUFO9vFs_3WQ1AWofr6o0"
destination = ["APA91bGM-iNVRowcA2m173ZxpYeBlcmQ5Ogm81hbw10QWw0PBaKMawTH6vv4pibbgNq2D04coYvKM9aOUPGpE-1Yx558WMp_skZV66PSSOaj2SKWkEQ5Wxd-4y-r2218ao_-6RW4_aArGJKejN4bQlm0Zxiy-Vreiw"]
data = {:message => "PhoneGap Build rocks!", :msgcnt => "1", :soundname => "beep.wav", :type => "msg", :id => "1" }

GCM.send_notification( destination, data)
