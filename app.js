// IMPORT MODULES NODEJS
    const express = require('express');
// GENERAL VARIABLE AND SETTING CONF
    const port =  process.env.port || process.env.PORT || 9000;
    app.set('PORT', port);
// INIZIALIZE SERVER
    // app.listen(app.get('PORT'), 'localhost');
    app.listen(app.get('PORT'), () => console.log(lang.LABEL_SERVER, app.get('PORT')));
    // console.log(lang.LABEL_SERVER, app.get('PORT'));
// EXPORTING APP FOR TESTING
    module.exports = app;
