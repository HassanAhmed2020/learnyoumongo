    var mongo = require('mongodb').MongoClient;
    
    var url = 'mongodb://localhost:27017/learnyoumongo';
    var age = parseInt(process.argv[2]);
    

    mongo.connect(url, function(err, db) 
                                        {
                                            // db gives access to the database
                                            var parrots = db.collection('parrots');
//                                            console.log(parrots);
                                            db.close();
                                        }
                );

    
    