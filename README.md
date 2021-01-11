# To add android (if not exits)

- ionic capacitor add android

# To generate version update Android files

- ionic capacitor build android
- for a signed version go to build -> generate signed bundle apk -> use the certificates under the folder "certificates" to sign it
- go to android\app\release to get the .apk file

# live reload to debugging

- ionic capacitor run android -l --host=YOUR_IP_ADDRESS
