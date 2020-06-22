# my REST api server

TASK

Create REST API server with bearer token auth. Setup CORS to allow access from any domain. DB - any. 
Token should have expiration time 10 mins and extend it on any user request (except singin/logout)
API (JSON): 
	•	/signin [POST] - request for bearer token by id and password - ok
	•	/signup [POST] - creation of new user
		⁃ Fields id and password. Id - phone number or email. After signup add field `id_type` - phone or email
		⁃	In case of successful signup - return token - ok
	•	/info [GET] - returns user id and id type - ok
	•	/latency [GET] - returns service server latency for google.com
	•	/logout [GET] - with param `all`:
		⁃	true - removes all users bearer tokens
		⁃	false - removes only current token
