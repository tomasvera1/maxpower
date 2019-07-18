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


app.get('/arrancadores-suaves-1', (req, resp)=>{
    resp.sendFile('arrancadores-suaves-1.html', {root: path.join(__dirname, './files/productos-electricos/arrancadores')});
});
app.get('/arrancadores-suaves-2', (req, resp)=>{
    resp.sendFile('arrancadores-suaves-2.html', {root: path.join(__dirname, './files/productos-electricos/arrancadores')});
});
app.get('/arrancadores-suaves-3', (req, resp)=>{
    resp.sendFile('arrancadores-suaves-3.html', {root: path.join(__dirname, './files/productos-electricos/arrancadores')});
});
app.get('/arrancadores-suaves-4', (req, resp)=>{
    resp.sendFile('arrancadores-suaves-4.html', {root: path.join(__dirname, './files/productos-electricos/arrancadores')});
});
app.get('/arrancadores-suaves-5', (req, resp)=>{
    resp.sendFile('arrancadores-suaves-5.html', {root: path.join(__dirname, './files/productos-electricos/arrancadores')});
});



app.get('/contactores-1', (req, resp)=>{
    resp.sendFile('contactores-1.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-2', (req, resp)=>{
    resp.sendFile('contactores-2.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-3', (req, resp)=>{
    resp.sendFile('contactores-3.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-4', (req, resp)=>{
    resp.sendFile('contactores-4.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-5', (req, resp)=>{
    resp.sendFile('contactores-5.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-6', (req, resp)=>{
    resp.sendFile('contactores-6.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});
app.get('/contactores-7', (req, resp)=>{
    resp.sendFile('contactores-7.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});


app.get('/convertidor-1', (req, resp)=>{
    resp.sendFile('convertidor-1.html', {root: path.join(__dirname, './files/productos-electricos/convertidores')});
});
app.get('/convertidor-2', (req, resp)=>{
    resp.sendFile('convertidor-2.html', {root: path.join(__dirname, './files/productos-electricos/convertidores')});
});
app.get('/convertidor-3', (req, resp)=>{
    resp.sendFile('convertidor-3.html', {root: path.join(__dirname, './files/productos-electricos/convertidores')});
});


app.get('/guardamotor-1', (req, resp)=>{
    resp.sendFile('guardamotor-1.html', {root: path.join(__dirname, './files/productos-electricos/guardamotores')});
});
app.get('/guardamotor-2', (req, resp)=>{
    resp.sendFile('guardamotor-2.html', {root: path.join(__dirname, './files/productos-electricos/guardamotores')});
});
app.get('/guardamotor-3', (req, resp)=>{
    resp.sendFile('guardamotor-3.html', {root: path.join(__dirname, './files/productos-electricos/guardamotores')});
});


app.get('/interruptor-1', (req, resp)=>{
    resp.sendFile('interruptor-1.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-2', (req, resp)=>{
    resp.sendFile('interruptor-2.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-3', (req, resp)=>{
    resp.sendFile('interruptor-3.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-4', (req, resp)=>{
    resp.sendFile('interruptor-4.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-5', (req, resp)=>{
    resp.sendFile('interruptor-5.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-6', (req, resp)=>{
    resp.sendFile('interruptor-6.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-7', (req, resp)=>{
    resp.sendFile('interruptor-7.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-8', (req, resp)=>{
    resp.sendFile('interruptor-8.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-9', (req, resp)=>{
    resp.sendFile('interruptor-9.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});
app.get('/interruptor-10', (req, resp)=>{
    resp.sendFile('interruptor-10.html', {root: path.join(__dirname, './files/productos-electricos/interruptores')});
});


app.get('/motores', (req, resp)=>{
    resp.sendFile('motores.html', {root: path.join(__dirname, './files/productos-electricos/motores')});
});


app.get('/plc-1', (req, resp)=>{
    resp.sendFile('plc-1.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-2', (req, resp)=>{
    resp.sendFile('plc-2.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-3', (req, resp)=>{
    resp.sendFile('plc-3.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-4', (req, resp)=>{
    resp.sendFile('plc-4.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-5', (req, resp)=>{
    resp.sendFile('plc-5.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-6', (req, resp)=>{
    resp.sendFile('plc-6.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});
app.get('/plc-7', (req, resp)=>{
    resp.sendFile('plc-7.html', {root: path.join(__dirname, './files/productos-electricos/plc')});
});



app.get('/capacitores', (req, resp)=>{
    resp.sendFile('capacitores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/controladores', (req, resp)=>{
    resp.sendFile('controladores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/diodos-rectificadores', (req, resp)=>{
    resp.sendFile('diodos-rectificadores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/fusibles-1', (req, resp)=>{
    resp.sendFile('fusibles.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/fusibles-2', (req, resp)=>{
    resp.sendFile('fusibles-2.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/interruptores-termicos', (req, resp)=>{
    resp.sendFile('interruptores-termicos.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/puentes', (req, resp)=>{
    resp.sendFile('puentes.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/relays-1', (req, resp)=>{
    resp.sendFile('relays-1.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/relays-2', (req, resp)=>{
    resp.sendFile('relays-2.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-1', (req, resp)=>{
    resp.sendFile('sensores-1.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-2', (req, resp)=>{
    resp.sendFile('sensores-2.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-3', (req, resp)=>{
    resp.sendFile('sensores-3.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-4', (req, resp)=>{
    resp.sendFile('sensores-4.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-5', (req, resp)=>{
    resp.sendFile('sensores-5.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-6', (req, resp)=>{
    resp.sendFile('sensores-6.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-7', (req, resp)=>{
    resp.sendFile('sensores-7.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sensores-8', (req, resp)=>{
    resp.sendFile('sensores-8.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/sopladores', (req, resp)=>{
    resp.sendFile('sopladores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/termostatos', (req, resp)=>{
    resp.sendFile('termostatos.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/tiristores', (req, resp)=>{
    resp.sendFile('tiristores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/transistores', (req, resp)=>{
    resp.sendFile('transistores.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/ventiladores-industriales', (req, resp)=>{
    resp.sendFile('ventiladores-industriales.html', {root: path.join(__dirname, './files/productos-electronicos')});
});

app.get('/proteccion-auditiva', (req, resp)=>{
    resp.sendFile('proteccion-auditiva', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/proteccion-facial', (req, resp)=>{
    resp.sendFile('proteccion-facial', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/proteccion-manos', (req, resp)=>{
    resp.sendFile('proteccion-manos', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/proteccion-ocular', (req, resp)=>{
    resp.sendFile('proteccion-ocular', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/proteccion-respiratoria', (req, resp)=>{
    resp.sendFile('proteccion-respiratoria', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/zapatos-seguridad', (req, resp)=>{
    resp.sendFile('zapatos-seguridad', {root: path.join(__dirname, './files/productos-seguridad')});
});
app.get('/ropa-trabajo', (req, resp)=>{
    resp.sendFile('ropa-trabajo', {root: path.join(__dirname, './files/productos-seguridad')});
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