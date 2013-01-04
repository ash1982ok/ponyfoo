var mongoose = require('mongoose'),
    models = require('../models/all.js');

module.exports = {
    put: function(req,res){
        var collection = models.entry,
            document = req.body.entry,
            query = { date: document.date },
            opts = { upsert: true },
            done = function(err){
                res.end();
            };

        collection.findOneAndUpdate(query, document, opts, done);
    },
	
	get: function(req,res){
        var collection = models.entry,
            callback = function(err,documents){
                var json = JSON.stringify({
                    entries: documents
                });
                res.end(json);
            };

        collection.find({}).sort('-date').limit(8).exec(callback);
	},
	
	del: function(req,res){
		console.log(req.body.id);
	}
};