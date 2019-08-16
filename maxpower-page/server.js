const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const verifier = require('email-verify');
const mysql = require('mysql');

function connectionSQL(){
    const con = mysql.createConnection({
        host: "localhost",
        user: "maxpower_francoadinapoli",
        password: "Fa42904558.;",
        database: "maxpower_db" ,
        multipleStatements: true
    });
    return con;
}

const a = connectionSQL();

//email auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'francoadinapoli@gmail.com',
      pass: 'f42904558'
    }
});

const app = express();
const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir:'views/layouts'
    // helpers: {
    //     state: (a, b) =>{
    //         if(a == 1)
    //             return '<div class="tm-status-circle moving"></div>Created';
    //         else if(a == 2)
    //             return '<div class="tm-status-circle pending"></div>Pending';
    //         else if(a == 3)
    //             return '<div class="tm-status-circle cancelled"></div>Test';
    //     }
    // }
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
//import folders
app.use('/css', express.static(__dirname + '/css'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/contactform', express.static(__dirname + '/contactform'));
//body-parser for responses
app.use(bodyParser.json({limit:'50mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb', extended:true}));




//redirects
app.get('/', (req, resp)=>{
    resp.render('index', {title: "MaxPower Industrial Automation"});
});

app.get('/about', (req, resp)=>{
    resp.render('about', {title: "Sobre Nosotros"});
});

app.get('/productos', (req, resp) => {
    resp.render('productos', {title: "Categoría de Productos"});
});

app.get('/productos-electricos', (req, resp) => {
    resp.render('productos-electricos', {title: "Productos Eléctricos"});
});

app.get('/productos-electronicos', (req, resp) => {
    const con = connectionSQL();
    const sql =  'SELECT `id_electronicos`,`Nombre`,`Imagen` FROM `p_electronicos` ORDER BY `id_electronicos` ASC; SELECT DISTINCT `Categoria` FROM `p_electronicos`; SELECT DISTINCT `Marca` FROM `p_electronicos`;';
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          resp.render('new-elect', {title: "Productos Electrónicos", prod: result[0], category: result[1], marc: result[2]});
          con.end();
        });
    });
    // resp.render('productos-electronicos', {title: "Productos Electrónicos", prod: result});
});

app.get('/productos-seguridad', (req, resp) => {

    
    const con = connectionSQL();
    const sql =  'SELECT `id_seguridad`,`Nombre`,`Img`,`Codigo` FROM `p_seguridad` ORDER BY `id_seguridad` ASC; SELECT DISTINCT `Categoria` FROM `p_seguridad`; SELECT DISTINCT `Marca` FROM `p_seguridad`;';
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, [1, 2, 3], function (err, result, fields) {
            if (err) throw err;
            resp.render('products-new', {title: "Productos de seguridad", prod: result[0], category: result[1], marc: result[2]});
            con.end();
        });

    });

});


app.get('/productos-seguridad/:id', (req, resp) => {
    const id = req.params.id;
    const con = connectionSQL();
    const sql =  'SELECT * FROM `p_seguridad` WHERE `id_seguridad` = ' + id;
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          con.end();
          resp.render('producto-detallado', {
              dou:true, name:result[0].Nombre, db:"Productos de seguridad", desc: result[0].Descripcion, img: result[0].Img, mod: result[0].Modelo, cod: result[0].Codigo
          });
            
        });
    });
    // resp.render('prod', {dou: true});
});

app.get("/productos-electronicos/:id", (req, resp) => {
    const id = req.params.id;
    const con = connectionSQL();
    const sql =  'SELECT * FROM `p_electronicos` WHERE `id_electronicos` = ' + id;
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          con.end();
          resp.render('producto-detallado', {dou: true, layout:false, name: result[0].Nombre, db: "Productos electrónicos", desc: result[0].Descripcion, img: result[0].Imagen});
        });
    });
    
});

app.get('/products-electricos', (req, resp)=>{
    resp.render('products-electricos', {title: "Productos electricos"});
});


app.get('/services', (req, resp)=>{
    resp.render('services', {title: "Servicios"});
});

app.get('/contact', (req, resp)=>{
    resp.render('contact', {title: "Contacto"});
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
app.get('/contactores-8', (req, resp)=>{
    resp.sendFile('contactores-8.html', {root: path.join(__dirname, './files/productos-electricos/contactores')});
});


app.get('/convertidor-1', (req, resp)=>{
    resp.sendFile('convertidor-1.html', {root: path.join(__dirname, './files/productos-electricos/convertidores-de-frecuencia')});
});
app.get('/convertidor-2', (req, resp)=>{
    resp.sendFile('convertidor-2.html', {root: path.join(__dirname, './files/productos-electricos/convertidores-de-frecuencia')});
});
app.get('/convertidor-3', (req, resp)=>{
    resp.sendFile('convertidor-3.html', {root: path.join(__dirname, './files/productos-electricos/convertidores-de-frecuencia')});
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


app.get('/motores-1', (req, resp)=>{
    resp.sendFile('motores-1.html', {root: path.join(__dirname, './files/productos-electricos/motores')});
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

app.get('/variador-1', (req, resp)=>{
    resp.sendFile('variador-1.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-2', (req, resp)=>{
    resp.sendFile('variador-2.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-3', (req, resp)=>{
    resp.sendFile('variador-3.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-4', (req, resp)=>{
    resp.sendFile('variador-4.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-5', (req, resp)=>{
    resp.sendFile('variador-5.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-6', (req, resp)=>{
    resp.sendFile('variador-6.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-7', (req, resp)=>{
    resp.sendFile('variador-7.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});
app.get('/variador-8', (req, resp)=>{
    resp.sendFile('variador-8.html', {root: path.join(__dirname, './files/productos-electricos/variadores')});
});



app.get('/admin', (req, resp) => {
    resp.render('admin', {layout: false});
});

app.get('/register', (req, resp) => {
    resp.render('register', {layout: false});
});

app.get('/insert', (req, resp) => {
    resp.render('insert', {layout: false});
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
    if(where == 'productos' || where == 'productos-electricos' || where == 'productos-electronicos' || where == 'productos-seg-industrial'){
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
    if(data.user == user.usr && (data.pwd == user.pwd || data.pwd == user.pwd2))
        resp.redirect('/insert');
    else
        resp.redirect('/admin');

});

app.post('/db', (req, resp) => {
    // console.log(req.body);
    const data = req.body;
    if(data.db == 'p_seguridad'){
        const con = connectionSQL();
        const sql = `INSERT INTO ${data.db} (Nombre, Modelo, Marca, Descripcion, Img, Codigo, Categoria) VALUES ('${data.name}', '${data.mod}', '${data.marca}', '${data.desc}', '${data.img}', '${data.cod}', '${data.cat}')`;
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            resp.redirect('/insert');
            con.destroy();
            });
        });
    }else if(data.db == 'p_electronicos' || data.db == 'electricos'){
        const con = connectionSQL();
        const sql = `INSERT INTO ${data.db} (Nombre, Modelo, Marca, Descripcion, Imagen, Categoria) VALUES ('${data.name}', '${data.mod}', '${data.marca}', '${data.desc}', '${data.img}', '${data.cat}')`;
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            resp.redirect('/insert');
            con.destroy();
            });
        });
    }
});

app.get("/electronicos/:cat", (req, resp)=> {
    const con = connectionSQL();
    const sql =  'SELECT `id_electronicos`,`Nombre`,`Imagen` FROM `p_electronicos` WHERE `Categoria` = "' + req.params.cat+ '" ORDER BY `id_electronicos` ASC; SELECT DISTINCT `Categoria` FROM `p_electronicos`; SELECT DISTINCT `Marca` FROM `p_electronicos`;';
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          resp.render('new-elect', {dou: true,title: "Productos Electrónicos", prod: result[0], category: result[1], marc: result[2]});
          con.end();
        });
    });
});

app.get("/seguridad-cat/:cat", (req, resp) => {
    const con = connectionSQL();
    const sql =  'SELECT `id_seguridad`,`Nombre`,`Img`,`Codigo` FROM `p_seguridad` WHERE `Categoria` = "'+req.params.cat+'" ORDER BY `id_seguridad` ASC; SELECT DISTINCT `Categoria` FROM `p_seguridad`; SELECT DISTINCT `Marca` FROM `p_seguridad`;';
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, [1, 2, 3], function (err, result, fields) {
            if (err) throw err;
            resp.render('products-new', {dou:true, title: "Productos de seguridad", prod: result[0], category: result[1], marc: result[2]});
            con.end();
        });

    });
});
app.get("/seguridad-marca/:marca", (req, resp) => {
    const con = connectionSQL();
    const sql =  'SELECT `id_seguridad`,`Nombre`,`Img`,`Codigo` FROM `p_seguridad` WHERE `Marca` = "'+req.params.marca+'" ORDER BY `id_seguridad` ASC; SELECT DISTINCT `Categoria` FROM `p_seguridad`; SELECT DISTINCT `Marca` FROM `p_seguridad`;';
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, [1, 2, 3], function (err, result, fields) {
            if (err) throw err;
            resp.render('products-new', {dou: true, title: "Productos de seguridad", prod: result[0], category: result[1], marc: result[2]});
            con.end();
        });

    });
});

app.get("/:cat", (req, resp) => {
    const cat = req.params.cat;
    const prod = {
        arr:[
            {img: 'example0.jpg', name: "Arrancadores suaves", href:'arrancadores-suaves-1'},
            {img: 'example1.jpg', name: "Arranque suaves Altistar 01", href:'arrancadores-suaves-2'},
            {img: 'example4.jpg', name: "Arranque suaves Altistar 48", href:'arrancadores-suaves-3'},
            {img: 'example2.png', name: "Arranque suaves Exigente SIRIUS 3RW44", href:'arrancadores-suaves-4'},
            {img: 'example3.jpg', name: "Arranque suaves Exigente SIRIUS 3RW30", href:'arrancadores-suaves-5'}

        ],
        cont:[
            {img: 'example5.jpg', name:'Contactores A-Line', href:'contactores-1'},
            {img: 'example6.jpg', name:'Contactores de Vacio SIEMENS', href:'contactores-2'},
            {img: 'example7.png', name:'Contatores tripolares 3RT', href:'contactores-3'},
            {img: 'example8.jpg', name:'Contatores tripolares 3RT Mini', href:'contactores-4'},
            {img: 'example9.jpg', name:'Contactores Serie F', href:'contactores-5'},
            {img: 'example10.jpg', name:'Contactores Serie D', href:'contactores-6'},
            {img: 'example11.jpeg', name:'Contactores Telemecanique', href:'contactores-7'},
            {img: 'example12a.jpg', name:'Minicontactores Telemecanique', href:'contactores-8'}
        ],
        frec:[
            {img: 'ACS150.jpg', name:'Convertidores de frecuencia ACS150', href:'convertidor-1'},
            {img: 'ACS355.jpg', name:'Convertidores de frecuencia ACS355', href:'convertidor-2'},
            {img: 'ACS880.jpg', name:'Convertidores de frecuencia ACS880', href:'convertidor-3'}
        ],
        guard:[
            {img: 'example12.jpg', name:'Guardamotores ABB', href:'guardamotor-1'},
            {img: 'example13.jpg', name:'Guardamotores Telemecanique GV', href:'guardamotor-2'},
            {img: 'example14.jpg', name:'Guardamotores 3RV', href:'guardamotor-3'}
        ],
        int:[
            {img: 'example22.jpg', name:'Interruptores diferenciales', href:'interruptor-1'},
            {img: 'example23.jpg', name:'Interruptores Tmax', href:'interruptor-2'},
            {img: 'example24.jpg', name:'Interruptores Termomagneticos', href:'interruptor-3'},
            {img: 'example25.jpg', name:'Interruptores SACE Emax2', href:'interruptor-4'},
            {img: 'example26.jpg', name:'Interruptores Automaticos Merlin-Gerin', href:'interruptor-5'},
            {img: 'example27.jpg', name:'Interruptores manuales 3LD2', href:'interruptor-6'},
            {img: 'example28.jpg', name:'Interruptor compacto Sentron', href:'interruptor-7'},
            {img: 'example29.jpg', name:'Seccionadores tripolares bajo carga 3NP4', href:'interruptor-8'},
            {img: 'example30.jpg', name:'CInterruptor de posicion SIGUARD', href:'interruptor-9'},
            {img: 'example31.jpg', name:'Interruptores Termomagneticos', href:'interruptor-10'},
        ],
        mot:[
            {img: 'example15.jpg', name:'Motores de aplicación general en hierro fundido', href:'motores-1'}
        ],
        plc:[
            {img: 'example16.jpg', name:'Zelio Logic – Relés programables de 10 a 40 I/O', href:'plc-1'},
            {img: 'example17.jpg', name:'PLC-SIMATIC S7-300', href:'plc-2'},
            {img: 'example18.jpg', name:'PLC SIMATIC S7-200', href:'plc-3'},
            {img: 'example19.jpg', name:'Pantallas Gráficas SIMATIC HMI', href:'plc-4'},
            {img: 'example20.png', name:'Miniautómata LOGO!', href:'plc-5'},
            {img: 'example21.jpg', name:'Fuentes SITOP', href:'plc-6'}
        ],
        var:[
            {img: 'example32.jpg', name:'Convertidores de frecuencia de baja tensión de CA', href:'variador-1'},
            {img: 'example33.jpg', name:'Variador ATV71', href:'variador-2'},
            {img: 'example34.jpg', name:'Variador ATV312', href:'variador-3'},
            {img: 'example35.jpg', name:'Variador ATV12', href:'variador-4'},
            {img: 'example36.jpg', name:'Variador Process ATV600', href:'variador-5'},
            {img: 'example39.jpg', name:'Variadores SINAMICS G110', href:'variador-6'},
            {img: 'example37.png', name:'Variadores MICROMASTER 430', href:'variador-7'},
            {img: 'example38.jpg', name:'Variadores MICROMASTER 420', href:'variador-8'}
        ]
    };
    if(cat == "arrancadores-suaves"){
        resp.render('electricos-new', {prod: prod.arr});
    }else if(cat == "contactores"){
        resp.render('electricos-new', {prod: prod.cont});
    }else if(cat == "convertidores-de-frecuencia"){
        resp.render('electricos-new', {prod: prod.frec});
    }else if(cat == "guardamotor"){
        resp.render('electricos-new', {prod: prod.guard});
    }else if(cat == "interruptores-en-caja-moldeada"){
        resp.render('electricos-new', {prod: prod.int});
    }else if(cat == "motores"){
        resp.render('electricos-new', {prod: prod.mot});
    }else if(cat == "plc"){
        resp.render('electricos-new', {prod: prod.plc});
    }else if(cat == "variadores"){
        resp.render('electricos-new', {prod: prod.var});
    }
});

app.get("/test", (req, resp) => {
    resp.render('electricos-new', {img:"example1.jpg"});
});

// server on port 3000
app.listen(3010, () => console.log('Server running'));
