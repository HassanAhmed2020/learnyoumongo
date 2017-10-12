    var mongo = require('mongodb').MongoClient;
    
    var url = 'mongodb://localhost:27017/learnyoumongo';
    var givenAge = parseInt(process.argv[2]);
    
    var query = [{age: {$gt: givenAge}}, {name: 1, age: 1, _id: 0 }];
 
    







    mongo.connect(url, function(err, db) 
                                        {
                                            // db gives access to the database
                                            var parrots = db.collection('parrots');
                                            parrots.find(query[0],query[1]).toArray(function(err, documents) 

                                                                                  {
//                                                                                 console.log("Find it!!!!")
                                                                                   console.log(documents);
                                                                                   db.close();
                                                                                   }
                                                                        );

                                            
                                            
                                            
                                            
                                            
                                        }
                );

