    var mongo = require('mongodb').MongoClient;
    
    var dbName = process.argv[2];
    
    var url = 'mongodb://localhost:27017/' + dbName;
    
    console.log("DBName is" + url);
    
        mongo.connect(url, function(err, db) 
                                        {
                                            if (err) throw "Bad Bad Error Happened";
                                            var collectionName = db.collection('users');
                                            collectionName.update(
                                                                {
                                                                    name: "Tina"
                                                                }, 
                                                                
                                                                {
                                                                  $set: {
                                                                            age: 40
                                                                        }
                                                                }, function(err, data)
                                                                            {
                                                                                console.log("Done Updating");
                                                                                collectionName.find({name: "Tina"}).toArray(function(err, documents)
                                                                                                                                    {
                                                                                                                                       console.log(documents); 
                                                                                                                                    }
                                                                                                                            );        
                                                                                //console.log(data);
                                                                                db.close();
                                                                            }
                                                                
                                                                
                                                                )

                                            
                                        }
                    );
    
    