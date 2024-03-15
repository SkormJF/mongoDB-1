// CREATE DATABASE
db.createCollection('demo');

db.demo.insertMany([
    {
        name: 'Skorm',
        lastname: 'JF',
        email:'Skorm@gmail.com',
        age: 29,
        city: 'Rome',
        country: 'Italy',
        salary: 2500,
        height: 170,
        weight: 160
    },
    {
        name: 'Gen',
        lastname: 'VD',
        email:'Gen@gmail.com',
        age: 32,
        city: 'London',
        country: 'England',
        salary: 2500,
        height: 160,
        weight: 130
    },
    {
        name: 'Gato',
        lastname: 'Max',
        email:'Gato@gmail.com',
        age: 20,
        city: 'Berlin',
        country: 'Germany',
        salary: 3000,
        height: 180,
        weight: 160
    },
    {
        name: 'Edison',
        lastname: 'US',
        email:'Edison@gmail.com',
        age: 45,
        city: 'Paris',
        country: 'France',
        salary: 5000,
        height: 175,
        weight: 170
    },
]);

db.demo.insertOne({
    name: 'Mirio',
    lastname: 'Ack',
    age: 29,
    city: 'Toronto',
    country: 'Canada',
    salary: 3000,
    height: 175,
    weight: 170
});

db.demo.insertMany([
    {
        name: 'Itzu',
        lastname: 'JF',
        email:'Itzu@gmail.com',
        age: 22,
        city: 'Rome',
        country: 'Italy',
        salary: 2500,
        height: 170,
        weight: 160
    },
    {
        name: 'Skruld',
        lastname: 'VD',
        email:'Skruld@gmail.com',
        age: 32,
        city: 'London',
        country: 'England',
        salary: 2500,
        height: 160,
        weight: 130
    }
]);

//Bring age>18
db.demo.find({age:{$gt:18}});

//Bring users from paris or london
db.demo.find({
    $or:[
        {city:{$eq:'London'}},
        {city:{$eq:'Paris'}}
    ]
});

//Bring users that earn more than 2k and their age are under 30 years old
db.demo.find({
    $and:[
        {salary:{$gt:2000}},
        {age:{$lt:30}}
    ]
});

//Bring users that earn more than 3k and live in spain
db.demo.find({
    $and:[
        {salary:{$gt:3000}},
        {country:{$eq:'Spain'}}
    ]
});

//Bring users between 25 and 35 years old
db.demo.find({
    $and:[
        {age:{$gte:25}},
        {age:{$lte:35}}
    ]
});

//Users that not live in USA
db.demo.find({country:{$ne:'USA'}});


//Users that live in london earning above 2.5k or their age are over 30 years old
db.demo.find({
    $or:[
        {
            $and:[
                {country:{$eq:'London'}},
                {salary:{$gt:2500}}  //question to Robinson
            ]
        },
        {age:{$gt:30}}
    ]
})

//Users that live in Australia and their weight are over 140 pounds
db.demo.find({
    $and:[
        {country:'Australia'},
        {weight:{$gt:140}}
    ]
});

//Users that doesn't live in paris or london
db.demo.find({
    $nor:[
        {city:'Paris'},
        {city:'London'}
    ]
});

//Users that earn under 2k or their age are over 40
db.demo.find({
    $or:[
        {salary:{$lt:2000}},
        {age:{$gt:40}}
    ]
});

//Users that live in Canada earning above 4k or their height are over 180
db.demo.find({
    $or:[
        {
            $and:[
                {country:'Canada'},
                {salary:{$gt:3000}}
            ]
        },
        {height:{$gt:180}}
    ]
});

//Users that are from Italy and their age are between 20 and 30 years old
db.demo.find({
    $and:[
        {country:'Italy'},
        {
            $or:[
                {age:{$gt:20}},
                {age:{$lt:30}}
            ]
        }
    ]
});

//Users that are not registered an email address
db.demo.find({email:{$exists: false}});

//Users that are from France and their budget are between 3k and 5k
db.demo.find({
    $and:[
        {country:'France'},
        {
            $or:[
                {salary:{$gt:3000}},
                {salary:{$lt:5000}}
            ]
        }
    ]
});

//Users that are from Brazil and their weight are over 140 or less than 120 pounds
db.demo.find({
    $and:[
        {country:'Brazil'},
        {
            $or:[
                {weight:{$lt:120}},
                {weight:{$gt:140}}
            ]
        }
    ]
});

//Users that are from Argentina or Chile and their age are under 25 years old
db.demo.find({
    $and:[
        {
            $or:[
                {country:'Argentina'},
                {country:'Chile'}
            ]
        },
        {age:{$lt:25}}
    ]
});

//Users thar aren't from Spain or Mexico and earn under 3k
db.demo.find({
    $and:[
        {
            $nor:[
                {country:'Spain'},
                {country:'Mexico'}
            ]
        },
        {salary:{$lt:3000}}
    ]
});

//Users that are from Germany and under 4k or their age are over 35 years old
db.demo.find({
    $or:[
        {
            $and:[
                {country:'Germany'},
                {salary:{$lt:4000}}
            ]
        },
        {age:{$gt:35}}
    ]
})

//Users that aren't from Colombia and their height are under 170
db.demo.find({
    $and:[
        {country: {$not: {$eq: 'Colombia'}}},
        {height: {$lt:170}}
    ]
});

//Users from India and doesn't have email registred
db.demo.find({
    $and:[
        {country: 'India'},
        {email: {$exists:false}}
    ]
});

