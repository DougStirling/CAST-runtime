var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability and applications</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob1')\">1. Joint probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows a simulation of samples from a model with known joint probabilities then presents a real data set where the underlying probabilities are unknown.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob_b2')\">2. Marginal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This 3-dimensional bar chart shows the stacking of the bars representing joint probabilities to give the marginal probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob_b3')\">3. Conditional probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this 3-dimensional bar chart, the rows (or columns) of bars are separately scaled to give the conditional distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob_b4')\">4. Graphical display of probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram graphically displays joint, marginal and conditional probabilities and shows the relationships beween the three sets of probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob5')\">5. Calculations with probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the calculations involved in Bayes theorem.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_prob6')\">6. Calculations with probabilities (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how P(x given y) can be low when P(y given x) is high.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
