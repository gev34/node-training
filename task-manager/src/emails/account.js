const sgMail = require('@sendgrid/mail')

const sendGridApiKey = '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'
sgMail.setApiKey(sendGridApiKey)
sgMail.send({
    to: "gevorg.karapetyan.01@list.ru",
    from: "gevorg.karapetyan.01@list.ru",
    subject: "This is my first creation!", 
    text: "aAAa",
});
