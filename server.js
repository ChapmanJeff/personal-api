var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9999;

app.use(bodyParser.json());

var user = {
	name: 'Jeff Chapman', 
	location: 'Walnut Creek, CA', 
	hobbies: [{hobby: 'Hangin with Marie'},{hobby: 'Outdoors Anything'}, {hobby: 'Guitar'}], 
	occupation: [{occupation: 'Realtor'},{occupation: 'Real Estate Investor'},{occupation:'Coder'}],
	mentions: [{mention:'http://www.linkedin.com/in/chapmanjeffrey'},{mention:'http://facebook.com/chapmanjeff'}],
	references: [{reference:'Brett Blodgett'},{reference:'Marie Bates'}],
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
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.options('/', function(req, res) {			// Could use /api/
	res.send();
})


app.get('/user', function (req, res) {		// Could use /api/user so that normal user couldnt go see 
	res.json(user);														// your data. Hides it one more level
});

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
	user.mentions.push(req.body);
	res.json(user.mentions);
})

app.get('/references', function (req, res) {
	res.json(user.references);
});

app.post('/references', function (req, res) {
	user.references.push(req.body);
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

/* OR
responseArr[];
if(rew.query.experience) {
	for(var i = 0; i < user.skills.length; i ++) {
	if(req.query.experience == user.skills[i].experience) {
	responseArr.push(me.skills[i])
	}
	}
	res.json(responseArr)
} else {
	res.json(user.skills);
	}
*/

app.post('/skills', function (req, res) {
	user.skills.push(req.body);
	res.json(user.skills);
})



app.listen(port);


