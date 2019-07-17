const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const verifier = require('email-verify');

//email auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ventas@maxpowerautomation.com',
      pass: 'MICA1997'
    }
});

const app = express();
//import folders
app.use('/css', express.static(__dirname + '/css'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/contactform', express.static(__dirname + '/contactform'));
//body-parser for responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//redirects
app.get('/', (req, resp)=>{
    resp.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.get('/about', (req, resp)=>{
    resp.sendFile('about.html', {root: path.join(__dirname, './files')});
});

app.get('/productos', (req, resp) => {
    resp.sendFile('productos.html', {root: path.join(__dirname, './files')})
});

app.get('/productos-electricos', (req, resp) => {
    resp.sendFile('productos-electricos.html', {root: path.join(__dirname, './files')})
});

app.get('/productos-electronicos', (req, resp) => {
    resp.sendFile('productos-electronicos.html', {root: path.join(__dirname, './files')})
});

app.get('/producto-detallado', (req, resp) => {
    resp.sendFile('producto-detallado.html', {root: path.join(__dirname, './files')})
});
app.get('/productos-seguridad', (req, resp) => {
    resp.sendFile('productos-seguridad.html', {root: path.join(__dirname, './files')})
});

app.get('/services', (req, resp)=>{
    resp.sendFile('services.html', {root: path.join(__dirname, './files')});
});

app.get('/contact', (req, resp)=>{
    resp.sendFile('contact.html', {root: path.join(__dirname, './files')});
});

app.get('/motores', (req, resp)=>{
    resp.sendFile('motores.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/arrancadores-suaves', (req, resp)=>{
    resp.sendFile('arrancadores-suaves.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/altistar01', (req, resp)=>{
    resp.sendFile('altistar01.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/altistar48', (req, resp)=>{
    resp.sendFile('altistar48.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/sirius-3rw44', (req, resp)=>{
    resp.sendFile('sirius-3rw44.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/sirius-3rw30', (req, resp)=>{
    resp.sendFile('sirius-3rw30.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/contactores-a-line', (req, resp)=>{
    resp.sendFile('contactores-a-line.html', {root: path.join(__dirname, './files/productos-electricos')});
});

app.get('/contactores-de-vacio', (req, resp)=>{
    resp.sendFile('contactores-de-vacio.html', {root: path.join(__dirname, './files/productos-electricos')});
});







app.get('/capacitores', (req, resp)=>{
    resp.sendFile('capacitores.html', {root: path.join(__dirname, './files')});
});

app.get('/controladores', (req, resp)=>{
    resp.sendFile('controladores.html', {root: path.join(__dirname, './files')});
});

app.get('/fusibles', (req, resp)=>{
    resp.sendFile('fusibles.html', {root: path.join(__dirname, './files')});
});

app.get('/fusibles2', (req, resp)=>{
    resp.sendFile('fusibles2.html', {root: path.join(__dirname, './files')});
});

app.get('/puents', (req, resp)=>{
    resp.sendFile('puentes.html', {root: path.join(__dirname, './files')});
});

app.get('/relays', (req, resp)=>{
    resp.sendFile('relays.html', {root: path.join(__dirname, './files')});
});

app.get('/relays2', (req, resp)=>{
    resp.sendFile('relays2.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores', (req, resp)=>{
    resp.sendFile('sensores.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores2', (req, resp)=>{
    resp.sendFile('sensores2.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores3', (req, resp)=>{
    resp.sendFile('sensores3.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores4', (req, resp)=>{
    resp.sendFile('sensores4.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores5', (req, resp)=>{
    resp.sendFile('sensores5.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores6', (req, resp)=>{
    resp.sendFile('sensores6.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores7', (req, resp)=>{
    resp.sendFile('sensores7.html', {root: path.join(__dirname, './files')});
});

app.get('/sensores8', (req, resp)=>{
    resp.sendFile('sensores8.html', {root: path.join(__dirname, './files')});
});

app.get('/sopladores', (req, resp)=>{
    resp.sendFile('sopladores.html', {root: path.join(__dirname, './files')});
});

app.get('/termostatos', (req, resp)=>{
    resp.sendFile('termostatos.html', {root: path.join(__dirname, './files')});
});

app.get('/tiristores', (req, resp)=>{
    resp.sendFile('tiristores.html', {root: path.join(__dirname, './files')});
});

app.get('/transistores', (req, resp)=>{
    resp.sendFile('transistores.html', {root: path.join(__dirname, './files')});
});

app.get('/ventiladores-industriales', (req, resp)=>{
    resp.sendFile('ventiladores-industriales.html', {root: path.join(__dirname, './files')});
});

app.get('/single-portfolio-1', (req, resp)=>{
    resp.sendFile('single-portfolio-1.html', {root: path.join(__dirname, './files')});
});

app.get('/admin', (req, resp) => {
    resp.sendFile('admin.html', {root: path.join(__dirname, './files')});
});


//search

//cambiar por query a db
const prod = [
    'a' , 'ab', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh', 'abcdefghi'
];

app.post('/search', (req, response) => {
    let word = req.body.word;
    let where = req.body.where;
    let find = [];
    
    //si se hacen distintas tablas, camb∂iar el or
    if(where == 'productos' || where == 'products-electrics' || where == 'products-electronic' || where == 'products-seg-industrial'){
        //query a db
        for(let p of prod){
            if(p.substring(0, word.length) == word)
                find.push(p);
        }
    }else if(where == 'about')
        console.log('search about');
    else if(where == 'services')
        console.log('search serv');

    if(find.length > 0){
        response.json({
            find: find
        });

    }else{
        response.json({
            find:['Not found']
        });
    }

});


//send emails
app.post('/email', (req, resp) => {
    const email = req.body;
    console.log(email);
    const mailOptions = {
        from: 'ventas@maxpowerautomation.com',
        to: 'ventas@maxpowerautomation.com',
        subject: email.sub,
        text: `Nombre: ${email.name}\nEmail: ${email.email}\nEmpresa: ${email.ent}\nTeléfono: ${email.tel}\n\n\n${email.msg}`
    };

    verifier.verify( email.email, ( err, info ) => {
        if( err ) console.log(err);
        else{
            const verif = info.success;
            console.log( "Info: " + info.info );
            if(verif){
                transporter.sendMail(mailOptions, (error, info) => {
                    if(error) {
                        resp.json({status: false});
                        console.error(error);
                    }else {
                        resp.json({status: true});
                        console.log('Email sent: ' + info.response);
                    }
                });
            }else{
                resp.json({status: false});
            }
        }
    });

});

//admin page
app.post('/adLog', (req, resp) => {
    const user = {
        usr:'infAdmin',
        pwd: 't42720482',
        pwd2: 'f42904558'
    };
    const data = req.body;
    if(data.usr == user.usr && (data.pwd == user.pwd || data.pwd == user.pwd2))
        resp.json({status:true});
    else
        resp.json({status:false});

});



// server on port 3000
app.listen(3000, () => console.log('Server running'));