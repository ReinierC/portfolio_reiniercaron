function htmlskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-danger");
    document.getElementById("skillContent1").innerHTML = "HTML5";
    document.getElementById("skillContent2").innerHTML = "HTML5 beheers ik voldoende; bekend met W3C richtlijnen";
}

function css3skillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-info");
    document.getElementById("skillContent1").innerHTML = "CSS3";
    document.getElementById("skillContent2").innerHTML = "Flexbox, CSS-Grid, Media Queries, Frameworks, Viewport.";
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
    document.getElementById("skillContent2").innerHTML = "Basis kennis van PHP. Gewerkt met Twig templating engine";
}

function designskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-dark");
    document.getElementById("skillContent1").innerHTML = "Design";
    document.getElementById("skillContent2").innerHTML = "The Gimp, Inkscape, Photoshop, Druktechnieken, Schetsen, Prototyping";
}

function moreskillFunction() {
  var element = document.getElementById("skillContent1");
    element.classList.remove('text-danger', 'text-warning', 'text-info', 'text-success', 'text-primary', 'text-dark');
    element.classList.add("text-primary");
    document.getElementById("skillContent1").innerHTML = "Meer interessante kennis:";
    document.getElementById("skillContent2").innerHTML = "Git, Scrum, Markdown, Yaml, ITIL, Bootstrap, Skeleton, Grav-CMS, CRM, VM, Didactiek";
}
