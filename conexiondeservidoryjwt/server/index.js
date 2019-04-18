require('./config');

const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs);
hbsUtils.registerPartials(`${__dirname}/views/partials`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

const router = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(cors({
    exposedHeaders: 'authorization'
}));
app.use(express.json());

/**
 * __filename -> ruta desde / hasta el archivo actual.
 * __dirname  -> ruta desde / hasta la carpeta del archivo.
 */
app.use('/', express.static(`${__dirname}/public`));
app.use(router);

app.get('/hbs', (req, res) => {
    res.render('prueba.hbs', {
        title: 'Prueba',
        users: [{
                id: 1,
                name: 'Ivan'
            },
            {
                id: 2,
                name: 'Xavi'
            },
            {
                id: 3,
                name: 'Juan'
            }
        ],
        admin: {
            name: 'Adrian',
            fullName: 'Ivan Ruiz'
        },
        layout: 'template'
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});