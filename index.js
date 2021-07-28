const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const faker = require("faker");
const _ = require("lodash");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

function makePhoneNumber() {
  const phoneNumber = faker.fake("{{phone.phoneNumber}}");
  return phoneNumber
}

// console.log(_.upperFirst(faker.fake("{{vehicle.color}} {{vehicle.type}}")));

// Making Job Array
function Job() {
  this.company = faker.fake("{{company.companyName}}");
  this.title = faker.fake("{{name.jobDescriptor}} {{name.jobTitle}}");
  this.descriptor = faker.fake("{{name.jobArea}} {{name.jobType}} in charge of {{commerce.productAdjective}} {{commerce.productName}}. With my input {{random.words}} and {{random.words}} were vastly improved, and {{commerce.productDescription}}.");
}
function makeJobs() {
  const numOfJobs = faker.datatype.number(2)+2;
  let jobs = [];
  for(let i=0; i<=numOfJobs; i++) {
    let tempJob = new Job();
    jobs.push(tempJob);
  }
  return jobs;
}
//console.log(_)

app.get("/", (req, res) => {
  res.render("index", {
    avatar: faker.image.avatar(),//faker.internet.avatar(),
    personName: faker.fake("{{name.prefix}} {{name.lastName}}, {{name.title}}"),
    personPhone: makePhoneNumber(),
    emailAddress: faker.fake("{{internet.email}}"),
    jobs: makeJobs()
  })
});

let port = 3000;
app.listen(3000, (err) => {
  console.log("Spinning up server on port: " + port);
  if(!err)
  {
    console.log("Server running successfully");
  } else {
    console.log("ERROR:");
    console.log(err);
  }
})
