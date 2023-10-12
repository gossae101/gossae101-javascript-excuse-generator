window.onload = function() {
  let who = ["My dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed on ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  var rdm1 = Math.floor(Math.random() * who.length);
  var rdm2 = Math.floor(Math.random() * action.length);
  var rdm3 = Math.floor(Math.random() * what.length);
  var rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
};
