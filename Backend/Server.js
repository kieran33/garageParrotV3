const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

// On initialise notre serveur
const app = express();

const port = 3001;

app.use(cors());
app.use(bodyParser.json());

/*const admin = mysql.createUser({
    email: 'vincent@parrot',
    password: 'admin'
});*/

const admin = "INSERT INTO employes (email, password) VALUES (vincent@parrot2, admin2)";

// Paramètres de connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // remplacez par votre utilisateur
    password: 'root1234', // remplacez par votre mot de passe
    database: 'garage' // remplacez par le nom de votre base de données
});

//Connectez vous à MySQL
db.connect(err => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

app.listen(port, () => {
    console.log('server en écoute');
});

app.post('/CreateUser', (req, res) => {
    const { email, password } = req.body;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {

        if (err) {
            return res.status(500).send('Erreur lors du hashage')
        }

        const query = "INSERT INTO employes (email, password) VALUES (?, ?)";

        db.query(query, [email, hash], (err, result) => {
            if (err) {
                res.status(500).send('Erreur lors de la création de l\'employé');
            } else {
                console.log('Employé créer avec succès');
                res.status(201).send('Employé créer avec succès');
            }
        })
    })
});

app.get("/api/get", (req, res) => {
    const request = "SELECT * FROM employes"
    db.query(request, (error, result) => {
        res.send(result);
    })
})

app.delete('/api/remove/:email', (req, res) => {
    const { email } = req.params
    const request = 'DELETE FROM employes WHERE email = ?'
    db.query(request, email, (error, result) => {
        if (error) {
            console.log(error)
        }
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Je me connecte');

    db.query("SELECT * FROM employes WHERE email = ?", [email], (err, results) => {
        if (err) {
            res.status(500).send('Erreur dans la recherche du compte employé');
        } if (results.length === 0) {
            console.log('Utilisateur non trouvé');
            res.status(401).send('Utilisateur non trouvé');
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.status(200).json({ success: true, message: "connexion réussis" });
            } else {
                res.status(401).json({ success: false, message: "mot de passe incorrect" });
            }
        })
    })
});