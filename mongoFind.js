    var mongo = require('mongodb').MongoClient;
    
    var url = 'mongodb://localhost:27017/learnyoumongo';
    var age = parseInt(process.argv[2]);
    
    var query = { age: 10 };
    







    mongo.connect(url, function(err, db) 
                                        {
                                            // db gives access to the database
                                            var parrots = db.collection('parrots');
//                                            console.log(parrots);
//                                            console.log(process.argv[2]);
                                            
//                                            console.log(parrots.find(query));
                                            
//                                            parrots.find(  { age: 10} ).toArray(function(err, documents) 
                                            parrots.find(  { age: { $gt:3} } ).toArray(function(err, documents) 
                                                                                                            {
//                                                                                                                console.log("Find it!!!!")
                                                                                                                console.log(documents);
                                                                                                                db.close();
                                                                                                            }
                                                                                        );

                                            
                                            
                                            
                                            
                                            
                                        }
                );








/*


    mongo.connect(url, function(err, db) {
//                                            if(err) throw err;
                                            var parrots = db.collection('parrots');
                                            console.log(parrots);
                                            parrots.find({
                                                            age: { $gt: +process.argv[2] }
                                                        }).toArray(function(err, docs)
                                                                                        {
                                                                                        if(err) throw err;
                                                                                        console.log(docs);
                                                                                        db.close();
                                                                                        });
        

                                        }   
                );
    
*/    