
addBook('bk/sadc_c1', 'book_splash', "About this CAST e-book");

addChapter('bk/general', 'ch_preface', "Preface", null, 'v_ch_preface');
addSection('bk/general', 'sec_aboutCast', "About CAST");
addPage_2('en/aboutCast', 'aboutCast1', "What is CAST?", 'static');
addPage_2('en/aboutCast', 'aboutCast2', "Structure and navigation", 'static');
addPage_2('en/aboutCast', 'aboutCast3', "Copyright and licence", 'static');
addPage_2('en/aboutCast', 'aboutCast4', "Acknowledgements", 'static');
addPage_2('en/aboutCast', 'aboutCast5', "About the author", 'static');
addSection('bk/general', 'sec_otherInfo', "Other Information");
addPage_2('en/otherInfo', 'otherInfo1', "Browsers and Java", 'static');
addPage_2('en/otherInfo', 'otherInfo2', "Problems?", 'static');
addPage_2('en/otherInfo', 'otherInfo3', "Printing", 'static');
addPage_2('en/otherInfo', 'otherInfo4', "Recent changes to CAST", 'static');
addPage_2('en/otherInfo', 'otherInfo5', "Possible future developments", 'static');

addChapter('bk/african_c1', 'ch_intro', "Introduction: About Data");
addSection('bk/sadc_c1', 'sec_context', "Context & the statistical process");
addPage_2('en/context', 'context_o1', "Importance of context", 'static', 'en/context', 's_context1');
addPage_2('en/context', 'context_o2', "Statistics", 'static', 'en/context', 's_context2');
addPage_2('en/context', 'context3', "The statistical process", 'static', 'en/context', 's_context3');
addSection('bk/sadc_c1', 'sec_structures', "Standard data structures");
addPage_2('en/structures', 'structures_a1', "Variables and individuals", 'interact', 'en/structures', 's_structures1');
addPage_2('en/structures', 'structures_a2', "Types of variable", 'interact', 'en/structures', 's_structures2');
addPage_2('en/structures', 'structures_o3', "Categorical variables and groups", 'interact', 'en/structures', 's_structures3');
addPage_2('en/structures', 'structures_a4', "Meaningful variables", 'interact', 'en/structures', 's_structures4');
addSection('bk/sadc_c1', 'sec_variation', "Variation");
addPage_2('en/variation', 'variation1', "Signal and noise", 'interact', 'en/variation', 's_variation1');
addPage_2('en/variation', 'variation2', "Natural variability", 'interact', 'en/variation', 's_variation2');
addPage_2('en/variation', 'variation3', "Variability caused by experiments", 'interact', 'en/variation', 's_variation3');

addChapter('bk/sadc_c1', 'ch_cat', "Categorical Data");
addSection('bk/african_c1', 'sec_freqTable', "Frequency tables");
addPage_2('en/freqTable', 'freqTable1', "Frequency tables", 'interact', 'en/freqTable', 's_freqTable1');
addPage_2('en/freqTable', 'freqTable_a2', "Proportions and percentages", 'interact', 'en/freqTable', 's_freqTable_a2');
addPage_2('en/tableDisplay', 'tableDisplay_a1', "Gridlines and white space", 'static', 'en/tableDisplay', 's_tableDisplay1');
addPage_2('en/tableDisplay', 'tableDisplay3', "Significant digits and data noise", 'interact', 'en/tableDisplay', 's_tableDisplay3');
addPage_2('en/freqTable', 'freqTable3', "Recognising frequency tables", 'static', 'en/freqTable', 's_freqTable3');
addPage_2('en/freqTable', 'freqTable4', "Changes to the categories", 'interact', 'en/freqTable', 's_freqTable4');
addSection('bk/african_c1', 'sec_bar', "Bar charts");
addPage_2('en/univarCat', 'univarCat_a1', "Bar charts", 'interact', 'en/univarCat', 's_univarCat1');
addPage_2('en/univarCat', 'univarCat2', "Pareto diagrams", 'interact', 'en/univarCat', 's_univarCat2');
addPage_2('en/univarCat', 'univarCat_a3', "Chartjunk and misleading bar charts", 'static', 'en/univarCat', 's_univarCat_a3');
addSection('bk/sadc_c1', 'sec_pie', "Pie charts");
addPage_2('en/univarCat', 'univarCat4', "Stacked bar charts and pie charts", 'interact', 'en/univarCat', 's_univarCat4');
addPage_2('en/univarCat', 'univarCat5', "Comparison of bar and pie charts", 'interact', 'en/univarCat', 's_univarCat5');
addPage_2('en/univarCat', 'univarCat6', "Chartjunk for pie charts", 'static', 'en/univarCat', 's_univarCat6');

addChapter('bk/sadc_c1', 'ch_num', "Numerical Data");
addSection('bk/sadc_c1', 'sec_dotPlot', "Dot plots");
addPage_2('en/valueDisplay', 'valueDisplay_b1', "Analysing variation", 'interact', 'en/valueDisplay', 's_valueDisplay1');
addPage_2('en/valueDisplay', 'valueDisplay_b2', "Basic dot plot", 'interact', 'en/valueDisplay', 's_valueDisplay2');
addPage_2('en/valueDisplay', 'valueDisplay_m3', "Jittered dot plot", 'interact', 'en/valueDisplay', 's_valueDisplay3');
addPage_2('en/valueDisplay', 'valueDisplay_m4', "Stacked dot plots", 'interact', 'en/valueDisplay', 's_valueDisplay4');
addSection('bk/sadc_c1', 'sec_stemLeaf', "Stem and leaf plots");
addPage_2('en/valueDisplay', 'valueDisplay_a5', "Stem and leaf plots", 'interact', 'en/valueDisplay', 's_valueDisplay5');
addPage_2('en/valueDisplay', 'valueDisplay_m6', "Splitting the stems", 'interact', 'en/valueDisplay', 's_valueDisplay6');
addPage_2('en/valueDisplay', 'valueDisplay_m7', "Drawing stem and leaf plots", 'interact', 'en/valueDisplay', 's_valueDisplay7');
addSection('bk/sadc_c1', 'sec_displayInterp', "What can you learn?");
addPage_2('en/displayInterp', 'displayInterp_b1', "Outliers", 'static', 'en/displayInterp', 's_displayInterp1');
addPage_2('en/displayInterp', 'displayInterp_b2', "Clusters", 'interact', 'en/displayInterp', 's_displayInterp2');
addPage_2('en/displayInterp', 'displayInterp3', "Distribution of values", 'static', 'en/displayInterp', 's_displayInterp3');
addPage_2('en/displayInterp', 'displayInterp_b4', "Extra information about individuals", 'interact', 'en/displayInterp', 's_displayInterp4');
addPage_2('en/displayInterp', 'displayInterp5', "Distinguishing known groups", 'interact', 'en/displayInterp', 's_displayInterp5');
addPage_2('en/displayInterp', 'displayInterp6', "Dangers of overinterpretation", 'interact', 'en/displayInterp', 's_displayInterp6');

var language = "en";
var logoGif = "logo_sadc.gif";
var homeDir = "bk/sadc_c1";
var versionGif = "images/castSadc_c1";
var isLecturingVersion = false;
var isModule = false;
var hasSummaries = true;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "4";

var localVideos = true;

var fullTextString = 'Text';
var summaryTextString = 'In brief';
var videoTextString = 'Video';
var appletTextString = 'Text';
fullTabTooltip = 'Text version of page';
summaryTabTooltip = 'Summarised version of page';
videoTabTooltip = 'Version of page with videos';
appletTabTooltip = 'Text version of page with interaction';
var chapterString = 'Chapter';

var versionName = {'_o': 'Official stats', '_g': 'General', '_b': 'Biometric', '_c': 'Business', '_m': 'Climatic', '_a': 'African'};
var versions = {};
versions['context1'] = new Array('_o', '_g', '_b', '_c', '_m');
versions['context2'] = new Array('_o', '_g', '_m');
versions['context3'] = new Array('_g', '_b');
versions['structures1'] = new Array('_a', '_g', '_b', '_c');
versions['structures2'] = new Array('_a', '_g', '_b', '_c');
versions['structures3'] = new Array('_o', '_g', '_c');
versions['structures4'] = new Array('_a', '_g', '_c');
versions['freqTable1'] = new Array('_g', '_c');
versions['freqTable2'] = new Array('_a', '_g', '_b');
versions['tableDisplay1'] = new Array('_a', '_g');
versions['univarCat1'] = new Array('_a', '_g', '_b');
versions['univarCat3'] = new Array('_a', '_g', '_b');
versions['univarCat4'] = new Array('_g', '_b', '_c');
versions['univarCat5'] = new Array('_g', '_b', '_c');
versions['univarCat6'] = new Array('_g', '_b', '_c');
versions['valueDisplay1'] = new Array('_b', '_g', '_c', '_m');
versions['valueDisplay2'] = new Array('_b', '_g', '_c', '_m');
versions['valueDisplay3'] = new Array('_m', '_g', '_b', '_c');
versions['valueDisplay4'] = new Array('_m', '_g', '_b', '_c');
versions['valueDisplay5'] = new Array('_a', '_g', '_b', '_c', '_m');
versions['valueDisplay6'] = new Array('_m', '_g', '_c');
versions['valueDisplay7'] = new Array('_m', '_g', '_c');
versions['displayInterp1'] = new Array('_b', '_g', '_c');
versions['displayInterp2'] = new Array('_b', '_g', '_c', '_m');
versions['displayInterp3'] = new Array('_g', '_c', '_m');
versions['displayInterp4'] = new Array('_b', '_g');
versions['displayInterp6'] = new Array('_g', '_b', '_c');

bookLoaded = true;
