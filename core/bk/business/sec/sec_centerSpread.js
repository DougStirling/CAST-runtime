var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre and spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The centre of a distribution is a 'typical value'. The spread describes how far the values are from the centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread2')\">2. Median, range and IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median is a summary of the centre of a distribution. The range and inter-quartile range both describe spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_c3')\">3. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and mean are alternative measures of the centre of a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Properties of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a data set is not symmetric, the mean and median may differ substantially.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread5')\">5. Standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation is the most commonly used numerical summary of the spread of values in a data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread6')\">6. Rules of thumb for st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The 70-95-100 rule-of-thumb is useful for understanding the numerical value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_c7')\">7. Understanding means and st devns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is possible to roughly guess the mean and standard deviation from a histogram and roughly sketch a symmetric histogram matching any given mean and standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread8')\">8. Warnings about mean &amp; st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation cannot give any indication of the existance of outliers, skewness or clusters. A dot plot or histogram should be examined before reporting these numerical summaries.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
