var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Context & the statistical process</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_m1')\">1. Importance of context</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The focus of statistics is to answer questions that are expressed in the language of some application area. Statistical methods for analysis of data are a core part of statistics, but the context of the data is most important.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_m2')\">2. Statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Statistical analysis is a process that involves identifying the questions of interest, data collection and analysis and producing a report. In real-life problems, the data collection and analysis steps may be repeated more than once.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('context_b3')\">3. The statistical process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many applications, the cycle of data collection and analysis is a central part of the quest for improvement to systems and processes.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
