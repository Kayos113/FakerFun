const faker = require("faker");
const _ = require('lodash');



let fakerFun = faker.fake("{{name.jobDescriptor}}\n{{name.jobTitle}}\n{{name.jobArea}}\n{{name.jobType}}");
console.log(fakerFun);



fakerFun = faker.fake("{{lorem.sentences}}");
console.log(fakerFun);



fakerFun = faker.datatype.number(3); // first argument is maximum, inclusive of 0 and max
console.log(fakerFun);



function Job() {
  this.title = faker.fake("{{name.jobDescriptor}} {{name.jobTitle}}");
  this.descriptor = faker.fake("{{name.jobArea}} {{name.jobType}} in charge of {{lorem.sentence}}");
}
const numOfJobs = faker.datatype.number(2)+1;
let tempJob = new Job();
console.log(tempJob.title);



fakerFun = faker.fake("{{commerce.department}}\n{{commerce.productAdjective}}\n{{commerce.productDescription}}");
console.log(fakerFun);


fakerFun = faker.fake("{{company.companyName}}");
console.log(fakerFun);

fakerFun = faker.fake("You can be sure our {{commerce.productName}} is {{company.catchPhraseNoun}} {{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}}");
//console.log(fakerFun);

fakerFun = faker.fake("{{company.bsAdjective}} {{company.catchPhrase}}");
console.log(_.capitalize(fakerFun));
