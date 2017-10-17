

    var mongo = require('mongodb').MongoClient;
    
    var url = 'mongodb://localhost:27017/learnyoumongo';
    var firstName = process.argv[2];
    var lastName = process.argv[3];
    
//    var query = [{age: {$gt: givenAge}}, {name: 1, age: 1, _id: 0 }];
    var nameObj = {'firstName': firstName,'lastName': lastName};
    console.log(JSON.stringify(nameObj));
//    console.log("hahahhaha");







    mongo.connect(url, function(err, db) 
                                        {
                                            // db gives access to the database
                                            if (err) throw "Bad Bad Error Happened";
                                            var collenctionName = db.collection('docs');
                                            collenctionName.insert(nameObj, function(err, data) 
                                                                        {
                                                                        // handle error
                                                                        if (err) throw "Bad Bad Error Happened";
//                                                                        console.log("Insert Is Done");
//                                                                        console.log(data);
                                                                        db.close();
                                                                        }
                                                                    );
                
                                            
                                            
                                            
                                            
                                            
                                        }    
                                            
                );                            
                                            
