function htmlskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-danger");
    document.getElementById("skillContent1").innerHTML = "HTML5";
    document.getElementById("skillContent2").innerHTML = "HTML beheers ik voldoende. bekend met W3C";
}

function css3skillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-info");
    document.getElementById("skillContent1").innerHTML = "CSS3";
    document.getElementById("skillContent2").innerHTML = "Voldoende begrip van CSS3. Interesse in \"The Grid\". Een kennismaking staat in de planning.";
}

function jsskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-warning");
    document.getElementById("skillContent1").innerHTML = "javaScript";
    document.getElementById("skillContent2").innerHTML = "Bezig met o.a. Frontend scripting, jQuery, Node-js, React Native. ";
}

function phpskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-success");
    document.getElementById("skillContent1").innerHTML = "PhP";
    document.getElementById("skillContent2").innerHTML = "Concrete4 CMS draait op PhP en mySQL. Concrete kan ik handmatig installeren en uitbouwen. Mijn interesse gaat uit naar javaScript...";
}

function designskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-dark");
    document.getElementById("skillContent1").innerHTML = "Design";
    document.getElementById("skillContent2").innerHTML = "The Gimp, Inkscape, Photoshop, Druk technieken, Schetsen, Prototyping";
}

function moreskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-primary");
    document.getElementById("skillContent1").innerHTML = "Meer interessante kennis:";
    document.getElementById("skillContent2").innerHTML = "Git, Scrum, ITIL, Bootstrap, Skeleton, CRM, VM, Didactiek";
}
