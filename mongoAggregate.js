    var mongo = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017/learnyoumongo';
    
    
    var totalPrice = 0;
    var avgPrice = 0;
    var query = {size: process.argv[2]};
    
    //console.log(query);
//    var filter = {_id: 0, name: 1, size: 0, price: 1, quantity: 0, meta: 0};
    var filter = {_id: 0, name: 0, size: 0, quantity:0, meta: 0};
    
    var size = "S";
    
    mongo.connect(url, function(err, db)
                                        {
                                            if (err) throw "Bad Bad Error Happened";
                                            var collectionName = db.collection('prices');
                                            
                                            
                                            collectionName.find(query, filter).toArray(function(err, documents)
                                                                                    {
                                                                                        if (err) throw "Bad Bad Error Happened";
                                                                                        //console.log("Following Documents in the Price collection");
                                                                                        //console.log(documents); 
                                                                                        documents.forEach( function(data, index)
                                                                                                                                {
                                                                                                                                    //console.log(data.price);
                                                                                                                                    
                                                                                                                                    totalPrice += data.price;
                                                                                                                                    //console.log(totalPrice);
                                                                                                                                }
                                                                                        
                                                                                            
                                                                                                          );
                                                                                                          
                                                                                        avgPrice = totalPrice/documents.length;
                                                                                        console.log(avgPrice.toFixed(2)); 
                                                                                        
                                                                                    }
                                                                                );
                                                                                
                                        db.close();    
                                        }
    
    
                );