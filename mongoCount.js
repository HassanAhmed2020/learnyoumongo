    var mongo = require('mongodb').MongoClient;
    
    var dbName = 'learnyoumongo';
    
    var url = 'mongodb://localhost:27017/' + dbName;
    
    var givenAge = parseInt(process.argv[2]);
    
    var query = {age: {$gt: givenAge}};
    
    //console.log(query);

    
    mongo.connect(url, function (err, db)
                                {
                                    if (err) throw "Bad Bad Error Happened";
                                    //console.log("open database");
                                    var collectionName = db.collection('parrots');
                                    
                                    
                                    collectionName.find(query).toArray(function(err, documents)
                                                                                    {
                                                                                        //console.log("Following Documents before the delete in the collection");
                                                                                        //console.log(documents); 
                                                                                    }
                                                                                );
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    collectionName.count(query, function(err, count)    
                                                                            {
                                                                                if (err) throw "Bad Bad Error Happened";
                                                                                console.log(count);
                                                                                db.close();
    
                                                                            }
                                                                
                                                )

                                    
                                    
                                }
                );