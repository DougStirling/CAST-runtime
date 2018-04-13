var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing several means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup1')\">1. Model with common standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To compare the means of several groups, a model of normal distributions in all groups is used but all group standard deviations must be assumed to be the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup2')\">2. Schätzung der gemeinsamen Standardabweichung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample standard deviations in the separate groups can be combined to give a pooled estimate of the common standard deviation, &sigma;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup3')\">3. Inference about two groups</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Earlier CIs and tests for equality of two group means can be improved when the group standard deviations are known to be the same. However this refinement is not recommended for general use.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup4')\">4. Differenzen zwischen Gruppen schätzen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Both variability between group means and variability within groups must be used to assess whether the groups differ.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup5')\">5. Quadratsummen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variability within groups and between groups are described by sums of squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup6')\">6. Coefficient of determination</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The coefficient of determination (R-squared) is the ratio of the between-groups and total sums of squares. It is the proportion of variation that can be explained by differences between the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup7')\">7. Test für Gruppendifferenzen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F-ratio is a test statistic that is based on the between- and within-groups sums of squares. The associated p-value tests whether all groups have the same mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup8')\">8. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The F-test is applied to a few data sets.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
