var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear regression models</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>A normal linear model explains how the distribution of a response variable, Y, depends on an explanatory variable, X.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel_b1')\">1. Interest in generalising from data</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Some bivariate data sets describe complete populations. Others are 'representative' of an underlying population or process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnModel2')\">2. Distribution of Y for each X</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Bivariate data can be modelled by specifying a response distribution for each possible X.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
