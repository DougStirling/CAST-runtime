var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Median, quartiles & box plots</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Box plots highly summarise the distribution of values in a data set. They are useful for comparing different batches of values. </p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. The need to summarise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dot plots, stem and leaf plots and histograms contain detailed information that is distracting when two or more data sets are being compared.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Median, quartiles and box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and quartiles split a batch of values into four equal-sized sets of values. A box plot is a graphical display of the median, quartiles and extremes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot3')\">3. Interpreting a box plot's shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A box plot clearly shows the centre, spread and skewness of a data set. It splits the corresponding histogram into 4 approximately equal areas.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot1')\">4. Exercise: Draw a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page involves drawing box plots from sorted lists of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_boxPlot2')\">5. Exercise: Shape of a box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercises on this page involve matching the shape of box plots to the corresponding dot plots.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
