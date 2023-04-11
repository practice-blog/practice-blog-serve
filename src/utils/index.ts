let nodemailer = require('nodemailer')
// let fs = require("fs");
// let path = require("path");
let ejs = require('ejs');
// 
async function send() {
  let transporter = nodemailer.createTransport({
    service: 'qq',
    post: 465,
    auth: {
      user: '1017858799@qq.com',
      pass: 'kylohugdictjbfhe',
    }
  })

   
  var html = ''

 ejs.renderFile('./view/hello.ejs',{},function (err, str) {
    html = str
  });

  let info = await transporter.sendMail({
    // <1017858799@qq.com>
    from: '"Fred Foo 👻" <1017858799@qq.com>', // sender address
    to: "edgelive@yeah.net", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: html, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default { send }
