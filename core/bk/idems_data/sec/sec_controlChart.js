var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Control charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many business and industrial processes are continuously monitored in order to detect problems early.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart2')\">2. Run charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A run chart plots regular measurements from a process against time. Extreme values indicate problems with the process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart3')\">3. Control limits</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For most distributions, almost all values are within 3 standard deviations of the mean. Control limits 3s on each side of the sample mean from training data can be used to indicate problems with the process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart4')\">4. Other signals of being out-of-control</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Runs of successive values that are s or 2s from the mean can also be used to indicate problems in the process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart5')\">5. False alarms</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>False alarms occasionally happen even when the process is in control. Several successive triggers give a clearer indication of problems.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart6')\">6. Examples of run charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Control limits are set from variation when a process is under control then applied to future observations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart7')\">7. Control charts for means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Control charts are often based on regular small samples rather than individual values. If individual values have a skew distribution, the +/-ï¿½3s limits may be exceeded in 2% or more of values. Sample means are closer to normal, so a control chart for means rarely exceeds its control limits when the process is under control.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart8')\">8. Control charts for ranges</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A control chart for the range of successive samples can indicate increases in process variability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('controlChart9')\">9. Finding the cause of problems</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a problem is detected in a process, brainstorming and cause-and-effect diagrams can help to determine the cause of the problem.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
