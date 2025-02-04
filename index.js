import express from 'express';
const app = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";

//CONFIGURAR O TEMPLATE PADRÃO
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

//CONFIGURAR O BODY PARSER PARA ENVIAR DADOS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('admin/index');
});

import aluno from './routes/aluno.js';
app.use('/aluno', aluno);

///ROTAS DO SISTEMA

app.listen(3006, ()=> console.log('Servidor Rodando em http://localhost:3006'))