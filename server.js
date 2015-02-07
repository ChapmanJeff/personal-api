var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9999;

app.use(bodyParser.json());

var user = {
	name: 'Jeff Chapman', 
	location: 'Walnut Creek, CA', 
	hobbies: ['Hangin with Marie, Outdoors Anything, Guitar'], 
	occupation: ['Realtor', 'Real Estate Investor', 'Coder'],
	mentions: ['http://www.linkedin.com/in/chapmanjeffrey','http://facebook.com/chapmanjeff'],
	references: ['Brett Blodgett', 'Marie Bates'],
	skills: [{
		id: 1,
		name: 'JavaScript',
		experience: 'Intermediate'
	},
	{
		id: 2,
		name: 'Ninja',
		experience: 'Expert'
	}]
};



app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/name', function (req, res) {
	res.json(user.name);
});

app.get('/location', function (req, res) {
	res.json(user.location);
});

app.put('/location', function (req, res) {
	user.location = req.body.location;
	res.json(user.location);
	console.log(user)
});

app.get('/hobbies', function (req, res) {
	res.json(user.hobbies);
});

app.get('/occupation', function (req, res) {
	if (req.query.order === 'desc') {
		res.json(user.occupation.sort())
	}
	if (req.query.order === 'asc') {
		res.json(user.occupation.reverse())
	} else {
	res.json(user.occupation);
	}
});

app.get('/occupation/latest', function (req, res) {
	res.json(user.occupation[user.occupation.length - 1]);
});

app.get('/mentions', function (req, res) {
	res.json(user.mentions);
});

app.post('/mentions', function (req, res) {
	user.mentions.push(req.body.mentions);
	res.json(user.mentions);
})

app.get('/references', function (req, res) {
	res.json(user.references);
});

app.post('/references', function (req, res) {
	user.references.push(req.body.references);
	res.json(user.references);
})

app.get('/skills', function (req, res) {
	if (req.query.experience === 'Beginner') {
		var resp = [];
		for (var i = user.skills.length - 1; i >=0; i--) {
			if (user.skills[i].experience === 'Beginner') {
				resp.push(user.skills[i])
			}
		}
		res.json(resp)
	}
	if (req.query.experience === 'Intermediate') {
		var resp = [];
		for (var i = user.skills.length - 1; i >=0; i--) {
			if (user.skills[i].experience === 'Intermediate') {
				resp.push(user.skills[i])
			}
		}
		res.json(resp)
	} 
	if (req.query.experience === 'Expert') {
		var resp = [];
		for (var i = user.skills.length - 1; i >=0; i--) {
			if (user.skills[i].experience === 'Expert') {
				resp.push(user.skills[i])
			}
		}
		res.json(resp)
	} 
	else {
	res.json(user.skills);
	}
});

app.post('/skills', function (req, res) {
	user.skills.push(req.body);
	res.json(user.skills);
})



app.listen(port);


