var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Practical issues in design</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim1')\">1. Purpose</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Why is the experiment being conducted and how will the results be used?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim_c2')\">2. Experimental units and measurements</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>In an experiment, what experimental units will be used? What response variable will be recorded? Which variables will be controlled?</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designPrelim3')\">3. Experiments with human subjects</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Other practical issues are involved when conducting experiments on human subjects.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
