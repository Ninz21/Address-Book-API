module.exports = (app) => {
   
    const records = require('../controllers/records.js')
    

    app.post('/records' , records.create);


    app.get('/' , records.findall);


    app.get('/records/:recordId' , records.findone);


    app.put('/records/:recordId' , records.update);


    app.delete('/records/:recordId' , records.delete);
}

