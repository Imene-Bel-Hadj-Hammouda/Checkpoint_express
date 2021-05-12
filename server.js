const express = require('express');
const app = express();
const {usersList}= require('./usersList');

//static express

//body parser
app.use(express.json());
app.get('/users',(req,res)=> {
    res.json(usersList);
});
//post
app.post('/users',(re,res)=>{
    const newUser = req.body
    const newUsersList = [...usersList,newUser]
    res.json(newUsersList);
});
//delete
app.delete('/user/:userid',(req,res)=>{
    const newUsersList=usersList.filter(users=>usersList.id != req.params.userid);
res.json(newUsersList);
});
//put
app.put('/user/:id',(req,res)=> {
    const newUpdatedUserList = usersList.map(users => user.id == req.params.id? {...user, ...req.body}:user);
    res.json(newUpdatedUserList);
});





// app.use(express.static(__dirname + '/public'));

// const authMiddleware = (req,res,next)=> {
// const auth = true;
// if(auth){
//     console.log('user authorized');
//     next()
// }
// else{
//     res.send('user is not authorized');
// }
//     console.log(middleware);
// next();
// };
// app.use(authMiddleware);
// //routes:

//home route
app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/public/home.html');
});

//services route
app.get('/services',(req,res)=> {
    res.sendFile(__dirname + '/public/services.html');
});

//contact services
app.get('/contact',(req,res)=> {
    res.sendFile(__dirname + '/public/contact.html');
});

//css
    app.get('/public/css/style.css',(req,res)=>{
        res.sendFile(__dirname + '/public/css/style.css');
    })

// app.use('/views', require('./routes/views'))

app.listen(5000,(err)=> {
    if(err)console.log(err)
    else console.log('<h2> server is running </h2>')
    
});