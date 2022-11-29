const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/index');
const boletosRouter = require('./routes/boletos');
const alunosRouter = require('./routes/alunos');
const instrutoresRouter = require('./routes/instrutores');
const planosRouter = require('./routes/planos');

const url = 'mongodb+srv://gabrielduarteds:271097@cluster0.jccbhhm.mongodb.net/teste?retryWrites=true&w=majority'

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/boletos', boletosRouter);
app.use('/alunos', alunosRouter);
app.use('/instrutores', instrutoresRouter);
app.use('/planos', planosRouter);

mongoose.connect(url).then(app.listen(3000, ()=> {
    console.log('API está ON na porta 3000!')
})).catch(error => console.log('Deu ruim', error));