    var mongo = require('mongodb').MongoClient;
    
    var url = 'mongodb://localhost:27017/learnyoumongo';
    var givenAge = parseInt(process.argv[2]);
    
    var query = { age: {$gt: givenAge} };
    







    mongo.connect(url, function(err, db) 
                                        {
                                            // db gives access to the database
                                            if (err) throw "Bad Bad Error Happened";
                                            var parrots = db.collection('parrots');
                                            parrots.find(query).toArray(function(err, documents) 

                                                                                  {
//                                                                                 console.log("Find it!!!!")
                                                                                   console.log(documents);
                                                                                   db.close();
                                                                                   }
                                                                        );

                                            
                                            
                                            
                                            
                                            
                                        }
                );




