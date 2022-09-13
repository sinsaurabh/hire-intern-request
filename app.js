const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  // const email = req.body.email;
  // const firstName = req.body.pname;
  // const lastName = req.body.cname;
  //
  // const data = {
  //   members: [
  //     {
  //       email_address: email,
  //       status: "subscribed",
  //       merge_fields: {
  //         FNAME: firstName,
  //         LNAME: lastName
  //       }
  //     }
  //   ]
  // };
  const client = require("mailchimp-marketing");

client.setConfig({
  apiKey: "5ae2ab459f5b6e3ff6ff42abc1d0469f",
  server: "us-12",
});

const run = async () => {
  const response = await client.lists.createList({
    name: "list2",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "city",
      country: "country",
    },
    campaign_defaults: {
      from_name: "list1",
      from_email: "sinsaurabh13@gmail.com",
      subject: "intern",
      language: "language",
    },
  });
  console.log(response);
};

run();



const jsonData = JSON.stringify(data);
const url ="https://us12.api.mailchimp.com/3.0/lists/c7e6ead428";
const options = {
  method: "POST",
  auth: "username:5ae2ab459f5b6e3ff6ff42abc1d0469f-us12"
}

 const request = https.request(url, options, function(response) {

   if (response.statusCode === 200) {
     re.sendFile(__dirname + "/success.html");
   } else {
     res.sendFile(__dirname + "/failure.html");
   }


  response.on("data", function(data){
    console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();

});
app.post("/failure", function(req, res){
  res.redirect("/");
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");

});
//apikey
//5ae2ab459f5b6e3ff6ff42abc1d0469f-us12
//c7e6ead428. - listID
