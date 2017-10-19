    var mongo = require('mongodb').MongoClient;
    
    var dbName = process.argv[2];
    
    var url = 'mongodb://localhost:27017/' + dbName;
    
    var collec = process.argv[3];
    
    var idNum = process.argv[4];
    
    console.log("ID to remove is: " + idNum);
    
    mongo.connect(url, function (err, db)
                                {
                                    var collectionName = db.collection(collec);
                                    collectionName.find({}).toArray(function(err, documents)
                                                                                    {
                                                                                        console.log("Following Documents before the delete in the collection");
                                                                                        console.log(documents); 
                                                                                    }
                                                                                );
                                    
                                    collectionName.remove({_id: idNum}, function(err,data)
                                                                                        {
                                                                                            console.log("Document is removed");
                                                                                            
                                                                                            collectionName.find({}).toArray(function(err, documents)
                                                                                                                            {
                                                                                                                                console.log("Following Documents after the delete in the collection");
                                                                                                                                console.log(documents); 
                                                                                                                                db.close();
                                                                                                                            }
                                                                                                                        );                                                                        
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                                        }
                                                        );
                                                        
                                    

                                    
                                    
                                }
    
    
                );
    
    


