var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Box plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot1')\">1. The need to summarise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example allows you to switch between various displays to compare five groups. Dot plots contain distracting detail; histograms are better; but box plots highlight the important differences between the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot2')\">2. Basic box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A diagram shows how a box plot splits the data into quarters. You can drag the quartiles to show how the box plot shape relates to the distribution of values in a dot plot. It can also show how the median and quartiles split a histogram area into quarters (approximately).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_boxPlot3')\">3. More about box plot shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sliders can change the centre, spread, skewness and tails of a data set, showing how these affect the shape of the box plot.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
