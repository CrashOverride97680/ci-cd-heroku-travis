// IMPORT MODULES NODEJS
    const express = require('express');
// GENERAL VARIABLE AND SETTING CONF
    const port =  process.env.port || process.env.PORT || 9000;
// INIZIALIZE FUNCTION, CLASS, ELEMENT AND MODULES
    const app = express();
    app.set('PORT', port);
// INIZIALIZE SERVER
    // app.listen(app.get('PORT'), 'localhost');
    app.get('/test', (req, resp) => {
        resp
            .status(600)
            .json({
                data: "IT WORKS!"
            });
    })
    app.listen(app.get('PORT'), () => console.log("SERVER RUN ON PORT:", app.get('PORT')));
    // console.log(lang.LABEL_SERVER, app.get('PORT'));
// EXPORTING APP FOR TESTING
    module.exports = app;
