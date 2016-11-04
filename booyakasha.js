//////////////////////////////////////////////////////////////////////////
// Instructions:
// 1. Edit booyakasha.js to include your credentials
// 2. Run on your local mongo instance
//
//
// In place of 'NAME', use the name you would 
// like your local copy of the database to be. 
// Then change the db.copyDatabase() arguments 
// to match your credentials. For more detail see:
// https://docs.mongodb.com/v3.2/reference/method/db.copyDatabase/#db.copyDatabase
//
//
// Usage:
// $ mongo localhost:27017 booyakasha.js
//
//
// This is the best mongodb script everyone says so:
//////////////////////////////////////////////////////////////////////////


var db = connect('localhost:27017/NAME');

db.copyDatabase('fromdb', 'NAME', 'fromhost:port', 'username', 'password');
