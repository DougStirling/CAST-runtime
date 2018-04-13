var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean_c1')\">1. Confidence interval from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The estimation error for any unbiased estimator, has approximately 0.95 probability of being between -2SE and +2SE. An approximate 95% confidence interval for the parameter is therefore the estimate &plusmn;2SE.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean2')\">2. Confidence interval for mean, known σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the population standard deviation is known, the standard error can be found exactly. A 95% confidence interval is the sample mean &plusmn; twice this. (Or more exactly, 1.96 times the standard error.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean3')\">3. Confidence level</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that 95% confidence intervals are random — they vary from sample to sample. About 95% of samples give confidence intervals that include the true parameter.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean4')\">4. Confidence level if σ is replaced by s</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In practice, the population standard deviation is usually unknown. If the population sd is simply replaced by its sample equivalent, the interval estimate has a lower confidence level than 95%.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean5')\">5. Confidence interval for mean, unknown σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To get a 95% confidence level, a t-value from tables must replace the constant 1.96.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean6')\">6. Properties of 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that the resulting 95% confidence intervals have probability 0.95 of including the population mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciExtra4a')\">7. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All earlier confidence intervals had 95% confidence level. Replacing 1.96 (or a value from t tables) with other values gives interval estimates with different confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('ciMean_c7')\">8. Examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some examples of 95% confidence intervals for population means are given and interpreted.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean1')\">9. Exercise: Find approx 95% CI from standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays an estimate and standard error and asks for an approximate 95% confidence interval. Various different types of parameters are estimated (not just means).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean4')\">10. Exercise: Find confidence intervals, known &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, confidence intervals are requested with a mixture of 90%, 95% and 99% confidence levels, but with known population standard deviation</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean5')\">11. Exercise: Find CIs, known and unknown &sigma;</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the questions involve a mixture of types with known and unknown population standard deviation and with 90%, 95% and 99% confidence levels.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean6')\">12. Exercise: What affects width of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks how the sample size, sample standard deviation and confidence level affect the width of a CI for the mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_ciMean7')\">13. Exercise: Interpret a 95% confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you must choose which of four statements correctly interprets the meaning of a 95% confidence interval.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
