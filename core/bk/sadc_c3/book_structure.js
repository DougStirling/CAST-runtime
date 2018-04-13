
addBook('bk/sadc_c3', 'book_splash', "About this CAST e-book");

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

addChapter('bk/sadc_c3', 'ch_modelVar', "Modeling Variability");
addSection('bk/general', 'sec_infPopn', "Samples from distributions");
addPage_2('en/infPopn', 'infPopn1', "Data as representatives", 'static', 'en/infPopn', 's_infPopn1');
addPage_2('en/infPopn', 'infPopn2', "Randomness of data", 'interact', 'en/infPopn', 's_infPopn2');
addPage_2('en/infPopn', 'infPopn3', "Model to explain randomness", 'static', 'en/infPopn', 's_infPopn3');
addPage_2('en/infPopn', 'infPopn4', "Infinite populations (distributions)", 'interact', 'en/infPopn', 's_infPopn4');
addPage_2('en/infPopn', 'infPopn5', "Information from a sample", 'interact', 'en/infPopn', 's_infPopn5');
addSection('bk/general', 'sec_probDensity', "Probability &amp; probability density");
addPage_2('en/probDensity', 'probDensity1', "Finite populations", 'interact', 'en/probDensity', 's_probDensity1');
addPage_2('en/probDensity', 'probDensity2', "Probabilities with infinite populations", 'interact', 'en/probDensity', 's_probDensity2');
addPage_2('en/probDensity', 'probDensity3', "Bar charts of discrete probabilities", 'interact', 'en/probDensity', 's_probDensity3');
addPage_2('en/probDensity', 'probDensity4', "Probability density functions", 'interact', 'en/probDensity', 's_probDensity4');
addPage_2('en/probDensity', 'probDensity5', "Normal distributions", 'interact', 'en/probDensity', 's_probDensity5');
addPage_2('en/probDensity', 'probDensity6', "Probability and area under the pdf", 'interact', 'en/probDensity', 's_probDensity6');
addPage_2('en/probDensity', 'probDensity7', "Properties of probability", 'static', 'en/probDensity', 's_probDensity7');
addSection('bk/general', 'sec_probSim', "Simulation (optional)");
addPage_2('en/probSim', 'probSim1', "Probability models and simulation", 'interact', 'en/probSim', 's_probSim1');
addPage_2('en/probSim', 'probSim2', "Simulation: Will the best team win?", 'interact', 'en/probSim', 's_probSim2');
addPage_2('en/probSim', 'probSim3', "Is there evidence of skill in a league?", 'interact', 'en/probSim', 's_probSim3');
addPage_2('en/probSim', 'probSim4', "Assessing unusual features in data", 'interact', 'en/probSim', 's_probSim4');
addPage_2('en/probSim', 'probSim5', "Random numbers", 'interact', 'en/probSim', 's_probSim5');
addPage_2('en/probSim', 'probSim6', "Generating categorical values", 'interact', 'en/probSim', 's_probSim6');
addPage_2('en/probSim', 'probSim7', "Generating numerical values", 'interact', 'en/probSim', 's_probSim7');

addChapter('bk/general', 'ch_timeSeries', "Time Series", null, 'v_ch_timeSeries');
addSection('bk/general', 'sec_trend', "Long-term trend");
addPage_2('en/trend', 'trend1', "Linear trend", 'interact', 'en/trend', 's_trend1');
addPage_2('en/trend', 'trend2', "Quadratic trend", 'interact', 'en/trend', 's_trend2');
addPage_2('en/trend', 'trend3', "Forecasting", 'interact', 'en/trend', 's_trend3');
addPage_2('en/trend', 'trend4', "Polynomial trend", 'interact', 'en/trend', 's_trend4');
addPage_2('en/trend', 'trend5', "Detrending a time series", 'interact', 'en/trend', 's_trend5');
addSection('bk/general', 'sec_cyclic', "Short-term fluctuations");
addPage_2('en/cyclic', 'cyclic1', "Autocorrelation", 'interact', 'en/cyclic', 's_cyclic1');
addPage_2('en/cyclic', 'cyclic2', "AR(1) model for autocorrelation", 'interact', 'en/cyclic', 's_cyclic2');
addPage_2('en/cyclic', 'cyclic3', "AR(1) model and trend", 'interact', 'en/cyclic', 's_cyclic3');
addPage_2('en/cyclic', 'cyclic4', "Trend or autocorrelation?", 'interact', 'en/cyclic', 's_cyclic4');
addPage_2('en/cyclic', 'cyclic5', "Cyclical patterns", 'interact', 'en/cyclic', 's_cyclic5');
addSection('bk/general', 'sec_seasonal', "Seasonal data");
addPage_2('en/seasonal', 'seasonal1', "Seasonal patterns", 'interact', 'en/seasonal', 's_seasonal1');
addPage_2('en/seasonal', 'seasonal2', "Smoothing out seasonal variation", 'interact', 'en/seasonal', 's_seasonal2');
addPage_2('en/seasonal', 'seasonal3', "Estimating the seasonal effect", 'interact', 'en/seasonal', 's_seasonal3');
addPage_2('en/seasonal', 'seasonal4', "Deseasonalised data", 'interact', 'en/seasonal', 's_seasonal4');
addPage_2('en/seasonal', 'seasonal5', "Putting it all together", 'interact', 'en/seasonal', 's_seasonal5');
addPage_2('en/seasonal', 'seasonal6', "Forecasting with seasonal data", 'interact', 'en/seasonal', 's_seasonal6');

addChapter('bk/african_c2', 'ch_sampDistn', "Distributions");
addSection('bk/general', 'sec_randomMean', "Distribution of sample mean");
addPage_2('en/randomMean', 'randomMean1', "Parameters and statistics", 'interact', 'en/randomMean', 's_randomMean1');
addPage_2('en/randomMean', 'randomMean2', "Variability of sample mean", 'interact', 'en/randomMean', 's_randomMean2');
addPage_2('en/randomMean', 'randomMean3', "Standard devn of sample mean", 'interact', 'en/randomMean', 's_randomMean3');
addPage_2('en/randomMean', 'randomMean4', "Means from normal populations", 'interact', 'en/randomMean', 's_randomMean4');
addPage_2('en/randomMean', 'randomMean5', "Large-sample normality of means", 'interact', 'en/randomMean', 's_randomMean5');
addPage_2('en/randomMean', 'randomMean6', "Distribution of mean from a sample", 'static', 'en/randomMean', 's_randomMean6');
addPage_2('en/randomMean', 'randomMean7', "Requirement of independence", 'interact', 'en/randomMean', 's_randomMean7');
addPage_2('en/randomMean', 'randomMean8', "Sampling from finite populations", 'interact', 'en/randomMean', 's_randomMean8');
addSection('bk/general', 'sec_randomPropn', "Distribution of sample proportion");
addPage_2('en/randomPropn', 'randomPropn1', "Proportion and probability", 'interact', 'en/randomPropn', 's_randomPropn1');
addPage_2('en/randomPropn', 'randomPropn2', "Properties of counts and proportions", 'interact', 'en/randomPropn', 's_randomPropn2');
addPage_2('en/randomPropn', 'randomPropn3', "Binomial distribution", 'interact', 'en/randomPropn', 's_randomPropn3');
addPage_2('en/randomPropn', 'randomPropn4', "Binomial probability examples", 'static', 'en/randomPropn', 's_randomPropn4');
addPage_2('en/randomPropn', 'randomPropn5', "Normal approximation to binomial", 'interact', 'en/randomPropn', 's_randomPropn5');
addPage_2('en/randomPropn', 'randomPropn6', "Normal approximation examples", 'static', 'en/randomPropn', 's_randomPropn6');

addChapter('bk/general', 'ch_estimation', "Estimating Parameters", null, 'v_ch_estimation');
addSection('bk/sadc_c3', 'sec_estIntro', "Introduction to estimation");
addPage_2('en/estIntro', 'estIntro_b1', "Interest in populations", 'static', 'en/estIntro', 's_estIntro_b1');
addPage_2('en/estIntro', 'estIntro_b2', "Interest in parameters", 'static', 'en/estIntro', 's_estIntro_b2');
addPage_2('en/estIntro', 'estIntro_m3', "Estimating a parameter", 'static', 'en/estIntro', 's_estIntro3');
addPage_2('en/estIntro', 'estIntro_m4', "Estimation error", 'static', 'en/estIntro', 's_estIntro4');
addPage_2('en/estIntro', 'estIntro5', "Distribution of errors", 'interact', 'en/estIntro', 's_estIntro5');
addPage_2('en/estIntro', 'estIntro6', "Standard error and bias", 'static', 'en/estIntro', 's_estIntro6');
addPage_2('en/estIntro', 'estIntro7', "Interval estimates", 'static', 'en/estIntro', 's_estIntro7');
addSection('bk/general', 'sec_seMean', "Standard error of mean");
addPage_2('en/seMean', 'seMean1', "Error distribution for mean", 'interact', 'en/seMean', 's_seMean1');
addPage_2('en/seMean', 'seMean2', "Standard error when \u03c3 is known", 'interact', 'en/seMean', 's_seMean2');
addPage_2('en/seMean', 'seMean3', "Interpreting the standard error", 'static', 'en/seMean', 's_seMean3');
addPage_2('en/seMean', 'seMean4', "Standard error when \u03c3 is unknown", 'static', 'en/seMean', 's_seMean4');
addPage_2('en/seMean', 'seMean5', "Standard error vs standard deviation", 'interact', 'en/seMean', 's_seMean5');
addPage_2('en/seMean', 'seMean6', "Using SEs to compare estimators", 'interact', 'en/seMean', 's_seMean6');
addPage_2('en/seMean', 'seMean7', "More about bias", 'interact', 'en/seMean', 's_seMean7');
addSection('bk/sadc_c3', 'sec_ciMean', "Confidence interval for mean");
addPage_2('en/ciMean', 'ciMean_m1', "Confidence interval from standard error", 'static', 'en/ciMean', 's_ciMean1');
addPage_2('en/ciMean', 'ciMean_b2', "Confidence interval for mean, known \u03c3", 'interact', 'en/ciMean', 's_ciMean2');
addPage_2('en/ciMean', 'ciMean3', "Confidence level", 'interact', 'en/ciMean', 's_ciMean3');
addPage_2('en/ciMean', 'ciMean4', "Confidence level if \u03c3 is replaced by s", 'interact', 'en/ciMean', 's_ciMean4');
addPage_2('en/ciMean', 'ciMean5', "Confidence interval for mean, unknown \u03c3", 'interact', 'en/ciMean', 's_ciMean5');
addPage_2('en/ciMean', 'ciMean6', "Properties of 95% confidence interval", 'interact', 'en/ciMean', 's_ciMean6');
addPage_2('en/ciMean', 'ciMean_b7', "Examples", 'static', 'en/ciMean', 's_ciMean_b7');
addSection('bk/general', 'sec_estPropn', "Estimating proportions");
addPage_2('en/estPropn', 'estPropn1', "General framework for estimation", 'static', 'en/estPropn', 's_estPropn1');
addPage_2('en/estPropn', 'estPropn2', "Estimating a proportion", 'interact', 'en/estPropn', 's_estPropn2');
addPage_2('en/estPropn', 'estPropn3', "Error distribution", 'interact', 'en/estPropn', 's_estPropn3');
addPage_2('en/estPropn', 'estPropn4', "Normal approximation to error distribution", 'interact', 'en/estPropn', 's_estPropn4');
addPage_2('en/estPropn', 'estPropn5', "Confidence interval for proportion", 'static', 'en/estPropn', 's_estPropn5');
addPage_2('en/estPropn', 'estPropn6', "Properties of 95% CI for proportion", 'interact', 'en/estPropn', 's_estPropn6');
addPage_2('en/estPropn', 'estPropn7', "Confidence interval examples", 'static', 'en/estPropn', 's_estPropn7');
addSection('bk/african_c2', 'sec_estOther', "Simulation and bootstrap");
addPage_2('en/estOther', 'estOther1', "Need for simulation", 'static', 'en/estOther', 's_estOther1');
addPage_2('en/estOther', 'estOther2', "Error distribution by simulation", 'interact', 'en/estOther', 's_estOther2');
addPage_2('en/estOther', 'estOther_m3', "Simulations with normal distns", 'interact', 'en/estOther', 's_estOther3');
addPage_2('en/estOther', 'estOther4', "Bootstrap error distribution", 'interact', 'en/estOther', 's_estOther4');
addPage_2('en/estOther', 'estOther5', "Standard error of correlation", 'interact', 'en/estOther', 's_estOther5');
addPage_2('en/estOther', 'estOther_m6', "CIs from simulation", 'interact', 'en/estOther', 's_estOther6');

addChapter('bk/african_c2', 'ch_testProp', "Testing a Proportion");
addSection('bk/general', 'sec_testIntro', "Introduction to hypothesis tests");
addPage_2('en/testIntro', 'testIntro1', "Inference", 'static', 'en/testIntro', 's_testIntro1');
addPage_2('en/testIntro', 'testIntro2', "Soccer league simulation", 'interact', 'en/testIntro', 's_testIntro2');
addPage_2('en/testIntro', 'testIntro3', "Simulation to test a proportion", 'interact', 'en/testIntro', 's_testIntro3');
addPage_2('en/testIntro', 'testIntro4', "Test for a mean", 'interact', 'en/testIntro', 's_testIntro4');
addPage_2('en/testIntro', 'testIntro5', "Randomisation tests", 'interact', 'en/testIntro', 's_testIntro5');
addPage_2('en/testIntro', 'testIntro6', "Randomisation test for correlation", 'interact', 'en/testIntro', 's_testIntro6');
addPage_2('en/testIntro', 'testIntro7', "Common patterns in tests", 'static', 'en/testIntro', 's_testIntro7');
addSection('bk/general', 'sec_testPropn', "Tests about proportions");
addPage_2('en/testPropn', 'testPropn1', "Inference about parameters", 'static', 'en/testPropn', 's_testPropn1');
addPage_2('en/testPropn', 'testPropn2', "P-value for testing proportion", 'interact', 'en/testPropn', 's_testPropn2');
addPage_2('en/testPropn', 'testPropn3', "Another example", 'interact', 'en/testPropn', 's_testPropn3');
addPage_2('en/testPropn', 'testPropn4', "One- and two-tailed tests", 'interact', 'en/testPropn', 's_testPropn4');
addPage_2('en/testPropn', 'testPropn5', "Normal approximation", 'interact', 'en/testPropn', 's_testPropn5');
addPage_2('en/testPropn', 'testPropn6', "Statistical distance", 'static', 'en/testPropn', 's_testPropn6');
addPage_2('en/testPropn', 'testPropn7', "Tests based on statistical distance", 'interact', 'en/testPropn', 's_testPropn7');

addChapter('bk/african_c2', 'ch_testMean', "Testing a Mean");
addSection('bk/general', 'sec_testMean', "Tests about means");
addPage_2('en/testMean', 'testMean1', "Introduction", 'static', 'en/testMean', 's_testMean1');
addPage_2('en/testMean', 'testMean2', "Test for mean (known \u03c3)", 'static', 'en/testMean', 's_testMean2');
addPage_2('en/testMean', 'testMean3', "P-value from statistical distance", 'interact', 'en/testMean', 's_testMean3');
addPage_2('en/testMean', 'testMean4', "The t distribution", 'interact', 'en/testMean', 's_testMean4');
addPage_2('en/testMean', 'testMean5', "The t test for a mean", 'interact', 'en/testMean', 's_testMean5');
addSection('bk/general', 'sec_testPValue', "Properties of p-values");
addPage_2('en/testPValue', 'testPValue1', "Null and alternative hypotheses", 'interact', 'en/testPValue', 's_testPValue1');
addPage_2('en/testPValue', 'testPValue2', "Consistency with null hypothesis", 'interact', 'en/testPValue', 's_testPValue2');
addPage_2('en/testPValue', 'testPValue3', "Distribution of p-values", 'interact', 'en/testPValue', 's_testPValue3');
addPage_2('en/testPValue', 'testPValue4', "Interpretation of a p-value", 'interact', 'en/testPValue', 's_testPValue4');
addPage_2('en/testPValue', 'testPValue5', "P-values for other tests", 'interact', 'en/testPValue', 's_testPValue5');

addChapter('bk/african_c2', 'ch_twoMeans', "Comparing Two Means");
addSection('bk/general', 'sec_twoGroupModel', "Models for two groups");
addPage_2('en/twoGroupModel', 'twoGroupModel1', "Interest in underlying population", 'static', 'en/twoGroupModel', 's_twoGroupModel1');
addPage_2('en/twoGroupModel', 'twoGroupModel2', "Model for two groups", 'interact', 'en/twoGroupModel', 's_twoGroupModel2');
addPage_2('en/twoGroupModel', 'twoGroupModel3', "Parameters of the normal model", 'interact', 'en/twoGroupModel', 's_twoGroupModel3');
addPage_2('en/twoGroupModel', 'twoGroupModel4', "Parameter estimates", 'interact', 'en/twoGroupModel', 's_twoGroupModel4');
addPage_2('en/twoGroupModel', 'twoGroupModel5', "Difference between means", 'interact', 'en/twoGroupModel', 's_twoGroupModel5');
addSection('bk/general', 'sec_sumDiff', "Distn of sums and differences");
addPage_2('en/sumDiff', 'sumDiff1', "Means and sums of samples", 'interact', 'en/sumDiff', 's_sumDiff1');
addPage_2('en/sumDiff', 'sumDiff2', "Sum and difference", 'interact', 'en/sumDiff', 's_sumDiff2');
addPage_2('en/sumDiff', 'sumDiff3', "Sum and difference (cont)", 'interact', 'en/sumDiff', 's_sumDiff3');
addPage_2('en/sumDiff', 'sumDiff4', "Probabilities for sums and differences", 'static', 'en/sumDiff', 's_sumDiff4');
addSection('bk/african_c2', 'sec_ciDiff', "Confidence interval for difference");
addPage_2('en/twoGroupInf', 'twoGroupInf1', "Distn of difference between means", 'interact', 'en/twoGroupInf', 's_twoGroupInf1');
addPage_2('en/twoGroupInf', 'twoGroupInf_b2', "SE of difference between means", 'static', 'en/twoGroupInf', 's_twoGroupInf2');
addPage_2('en/twoGroupInf', 'twoGroupInf_b3', "CI for difference between means", 'interact', 'en/twoGroupInf', 's_twoGroupInf3');
addSection('bk/african_c2', 'sec_testDiff', "Hypothesis test for difference");
addPage_2('en/twoGroupInf', 'twoGroupInf_b4', "Testing a hypothesis", 'interact', 'en/twoGroupInf', 's_twoGroupInf4');
addPage_2('en/twoGroupInf', 'twoGroupInf_b5', "One-tailed tests for differences", 'interact', 'en/twoGroupInf', 's_twoGroupInf5');
addSection('bk/general', 'sec_testPaired', "Paired t test");
addPage_2('en/testPaired', 'testPaired1', "Paired data", 'static', 'en/testPaired', 's_testPaired1');
addPage_2('en/testPaired', 'testPaired2', "Analysis of differences", 'interact', 'en/testPaired', 's_testPaired2');
addPage_2('en/testPaired', 'testPaired3', "Paired t-test", 'interact', 'en/testPaired', 's_testPaired3');
addPage_2('en/testPaired', 'testPaired4', "Pairing and experimental design", 'interact', 'en/testPaired', 's_testPaired4');

addChapter('bk/african_c2', 'ch_twoPropns', "Comparing Two Proportions");
addSection('bk/african_c2', 'sec_ciPropnDiff', "Confidence interval for difference");
addPage_2('en/twoGroupPropn', 'twoGroupPropn1', "Modelling two proportions", 'interact', 'en/twoGroupPropn', 's_twoGroupPropn1');
addPage_2('en/twoGroupPropn', 'twoGroupPropn2', "Distribution of difference in proportions", 'interact', 'en/twoGroupPropn', 's_twoGroupPropn2');
addPage_2('en/twoGroupPropn', 'twoGroupPropn3', "CI for difference in proportions", 'static', 'en/twoGroupPropn', 's_twoGroupPropn3');
addSection('bk/african_c2', 'sec_testPropnDiff', "Hypothesis test for difference");
addPage_2('en/twoGroupPropn', 'twoGroupPropn4', "Testing for difference in probabilities", 'static', 'en/twoGroupPropn', 's_twoGroupPropn4');

addChapter('bk/general', 'ch_independence', "Independence", null, 'v_ch_independence');
addSection('bk/general', 'sec_bivarCat', "Bivariate categorical distributions");
addPage_2('en/bivarCat', 'bivarCat1', "Relationships between variables", 'static', 'en/bivarCat', 's_bivarCat1');
addPage_2('en/bivarCat', 'bivarCat2', "3-dimensional bar charts", 'interact', 'en/bivarCat', 's_bivarCat2');
addPage_2('en/bivarCat', 'bivarCat3', "Clustered bar charts", 'interact', 'en/bivarCat', 's_bivarCat3');
addPage_2('en/bivarCat', 'bivarCat4', "Marginal distributions", 'interact', 'en/bivarCat', 's_bivarCat4');
addPage_2('en/bivarCat', 'bivarCat5', "Conditional distributions", 'interact', 'en/bivarCat', 's_bivarCat5');
addPage_2('en/bivarCat', 'bivarCat6', "More about conditional distributions", 'interact', 'en/bivarCat', 's_bivarCat6');
addPage_2('en/bivarCat', 'bivarCat7', "Conditional vs marginal distns", 'interact', 'en/bivarCat', 's_bivarCat7');
addSection('bk/african_c2', 'sec_indep', "Independence");
addPage_2('en/indep', 'indep_b1', "Association", 'static', 'en/indep', 's_indep1');
addPage_2('en/indep', 'indep2', "Independence", 'static', 'en/indep', 's_indep2');
addSection('bk/african_c2', 'sec_testIndep', "Testing for independence");
addPage_2('en/indep', 'indep3', "Independence from samples", 'static', 'en/indep', 's_indep3');
addPage_2('en/indep', 'indep4', "Testing for independence", 'interact', 'en/indep', 's_indep4');
addPage_2('en/indep', 'indep5', "Chi-squared test statistic", 'interact', 'en/indep', 's_indep5');
addPage_2('en/indep', 'indep6', "P-value for chi-squared test", 'interact', 'en/indep', 's_indep6');
addPage_2('en/indep', 'indep7', "Examples", 'static', 'en/indep', 's_indep7');
addPage_2('en/indep', 'indep8', "Comparing groups", 'static', 'en/indep', 's_indep8');

addChapter('bk/african_c2', 'ch_modelVar', "Sampling and Variability");
addSection('bk/african_c2', 'sec_popSamp', "Finite populations");
addPage_2('en/popSamp', 'popSamp_a1', "Census or sample?", 'interact', 'en/popSamp', 's_popSamp1');
addPage_2('en/popSamp', 'popSamp2', "Variability in a sample", 'interact', 'en/popSamp', 's_popSamp2');
addPage_2('en/popSamp', 'popSamp_a3', "Sampling error", 'interact', 'en/popSamp', 's_popSamp3');
addPage_2('en/popSamp', 'popSamp_b4', "Sampling error and sample size", 'interact', 'en/popSamp', 's_popSamp4');
addPage_2('en/popSamp', 'popSamp_b5', "Sampling from finite populations", 'interact', 'en/popSamp', 's_popSamp5');
addPage_2('en/popSamp', 'popSamp6', "Selecting a random sample", 'interact', 'en/popSamp', 's_popSamp6');
addSection('bk/african_c2', 'sec_sampSchemes', "Sampling schemes");
addPage_2('en/sampPractice', 'sampPractice_b1', "Stratified sampling", 'interact', 'en/sampPractice', 's_sampPractice1');
addPage_2('en/sampPractice', 'sampPractice2', "Cluster sampling", 'interact', 'en/sampPractice', 's_sampPractice2');
addPage_2('en/sampPractice', 'sampPractice3', "Two-stage sampling", 'interact', 'en/sampPractice', 's_sampPractice3');

addChapter('bk/african_c2', 'ch_sampSurv', "Sample Surveys");
addSection('bk/african_c2', 'sec_sampErr', "Sampling & non-sampling errors");
addPage_2('en/sampPractice', 'sampPractice4', "Sampling and non-sampling errors", 'static', 'en/sampPractice', 's_sampPractice4');
addPage_2('en/sampPractice', 'sampPractice_b5', "Coverage and non-response errors", 'static', 'en/sampPractice', 's_sampPractice5');
addPage_2('en/sampPractice', 'sampPractice_b6', "Interviewer and instrument errors", 'interact', 'en/sampPractice', 's_sampPractice6');
addSection('bk/african_c2', 'sec_survey', "Conducting a sample survey");
addPage_2('en/sampPractice', 'sampPractice7', "Survey design issues", 'static', 'en/sampPractice', 's_sampPractice7');

addChapter('bk/sadc_c3', 'ch_relns', "Describing Relationships");
addSection('bk/general', 'sec_correlation', "Correlation");
addPage_2('en/correlation', 'correlation1', "Units for X and Y", 'interact', 'en/correlation', 's_correlation1');
addPage_2('en/correlation', 'correlation2', "Units-free variables (z-scores)", 'interact', 'en/correlation', 's_correlation2');
addPage_2('en/correlation', 'correlation3', "Correlation coefficient", 'interact', 'en/correlation', 's_correlation3');
addPage_2('en/correlation', 'correlation4', "Scatterplots and the value of r", 'interact', 'en/correlation', 's_correlation4');
addPage_2('en/correlation', 'correlation5', "Nonlinear relationships", 'interact', 'en/correlation', 's_correlation5');
addPage_2('en/correlation', 'correlation6', "R does not tell the whole story", 'interact', 'en/correlation', 's_correlation6');
addSection('bk/african_c1', 'sec_leastSqrs', "Least squares");
addPage_2('en/leastSqrs', 'leastSqrs_b1', "Predicting Y from X", 'interact', 'en/leastSqrs', 's_leastSqrs1');
addPage_2('en/leastSqrs', 'leastSqrs2', "Linear models", 'interact', 'en/leastSqrs', 's_leastSqrs2');
addPage_2('en/leastSqrs', 'leastSqrs3', "Fitted values and residuals", 'interact', 'en/leastSqrs', 's_leastSqrs3');
addPage_2('en/leastSqrs', 'leastSqrs4', "Least squares", 'interact', 'en/leastSqrs', 's_leastSqrs4');
addSection('bk/african_c1', 'sec_simpleDiag', "Simple diagnostics");
addPage_2('en/leastSqrs', 'leastSqrs5', "Curvature and outliers", 'interact', 'en/leastSqrs', 's_leastSqrs5');
addPage_2('en/leastSqrs', 'leastSqrs6', "Residual plots", 'interact', 'en/leastSqrs', 's_leastSqrs6');
addPage_2('en/leastSqrs', 'leastSqrs7', "Predicting Y and predicting X", 'interact', 'en/leastSqrs', 's_leastSqrs7');
addSection('bk/general', 'sec_curvature', "Nonlinear relationships");
addPage_2('en/curvature', 'curvature1', "Transformations and correlation", 'interact', 'en/curvature', 's_curvature1');
addPage_2('en/curvature', 'curvature2', "Transformations and models", 'interact', 'en/curvature', 's_curvature2');
addPage_2('en/curvature', 'curvature3', "Quadratic models", 'interact', 'en/curvature', 's_curvature3');
addPage_2('en/curvature', 'curvature4', "Dangers of extrapolation", 'interact', 'en/curvature', 's_curvature4');
addSection('bk/general', 'sec_regnGroups', "Groups and regression");
addPage_2('en/regnGroups', 'regnGroups1', "Additional variables in regression", 'interact', 'en/regnGroups', 's_regnGroups1');
addPage_2('en/regnGroups', 'regnGroups2', "Displaying groups", 'interact', 'en/regnGroups', 's_regnGroups2');
addPage_2('en/regnGroups', 'regnGroups3', "Regression with grouped data", 'interact', 'en/regnGroups', 's_regnGroups3');
addPage_2('en/regnGroups', 'regnGroups4', "Parallel regression lines", 'interact', 'en/regnGroups', 's_regnGroups4');
addPage_2('en/regnGroups', 'regnGroups5', "Transformed variables and groups", 'interact', 'en/regnGroups', 's_regnGroups5');
addPage_2('en/regnGroups', 'regnGroups6', "Grouping with a numerical variable", 'interact', 'en/regnGroups', 's_regnGroups6');
addPage_2('en/regnGroups', 'regnGroups7', "Scatterplot matrix with groups", 'interact', 'en/regnGroups', 's_regnGroups7');

addChapter('bk/african_c2', 'ch_regnModel', "Regression Models");
addSection('bk/general', 'sec_regnModel', "Linear regression models");
addPage_2('en/regnModel', 'regnModel1', "Interest in generalising from data", 'interact', 'en/regnModel', 's_regnModel1');
addPage_2('en/regnModel', 'regnModel2', "Distribution of Y for each X", 'interact', 'en/regnModel', 's_regnModel2');
addPage_2('en/regnModel', 'regnModel3', "Normal linear model", 'interact', 'en/regnModel', 's_regnModel3');
addPage_2('en/regnModel', 'regnModel4', "Another way to describe the model", 'interact', 'en/regnModel', 's_regnModel4');
addPage_2('en/regnModel', 'regnModel5', "Model parameters", 'interact', 'en/regnModel', 's_regnModel5');
addSection('bk/african_c2', 'sec_regnEst', "Estimating parameters");
addPage_2('en/regnEst', 'regnEst1', "Estimating the slope and intercept", 'interact', 'en/regnEst', 's_regnEst1');
addPage_2('en/regnEst', 'regnEst2', "Estimating the error standard devn", 'interact', 'en/regnEst', 's_regnEst2');
addSection('bk/african_c2', 'sec_regnCi', "Confidence intervals");
addPage_2('en/regnEst', 'regnEst3', "Distn of least squares estimates", 'interact', 'en/regnEst', 's_regnEst3');
addPage_2('en/regnEst', 'regnEst4', "Standard error of least squares slope", 'static', 'en/regnEst', 's_regnEst4');
addPage_2('en/regnEst', 'regnEst5', "95% confidence interval for slope", 'static', 'en/regnEst', 's_regnEst5');
addPage_2('en/regnEst', 'regnEst6', "Properties of confidence interval", 'interact', 'en/regnEst', 's_regnEst6');
addPage_2('en/regnEst', 'regnEst7', "Influences on accuracy", 'interact', 'en/regnEst', 's_regnEst7');
addSection('bk/general', 'sec_regnTest', "Testing regression parameters");
addPage_2('en/regnTest', 'regnTest1', "Importance of zero slope", 'interact', 'en/regnTest', 's_regnTest1');
addPage_2('en/regnTest', 'regnTest2', "Testing whether slope is zero", 'static', 'en/regnTest', 's_regnTest2');
addPage_2('en/regnTest', 'regnTest3', "Strength of evidence and relationship", 'static', 'en/regnTest', 's_regnTest3');
addPage_2('en/regnTest', 'regnTest4', "Properties of p-values", 'interact', 'en/regnTest', 's_regnTest4');
addSection('bk/general', 'sec_regnPred', "Predicting the response");
addPage_2('en/regnPred', 'regnPred1', "Estimated response distn at X", 'interact', 'en/regnPred', 's_regnPred1');
addPage_2('en/regnPred', 'regnPred2', "Variability of estimate at X", 'interact', 'en/regnPred', 's_regnPred2');
addPage_2('en/regnPred', 'regnPred3', "Estimating the mean vs prediction", 'interact', 'en/regnPred', 's_regnPred3');
addPage_2('en/regnPred', 'regnPred4', "Confidence and prediction intervals", 'interact', 'en/regnPred', 's_regnPred4');
addSection('bk/general', 'sec_regnProblem', "Linear model assumptions");
addPage_2('en/regnProblem', 'regnProblem1', "Assumptions in a normal linear model", 'interact', 'en/regnProblem', 's_regnProblem1');
addPage_2('en/regnProblem', 'regnProblem2', "Curvature &mdash; transforming X", 'interact', 'en/regnProblem', 's_regnProblem2');
addPage_2('en/regnProblem', 'regnProblem3', "Curvature and non-constant variance", 'interact', 'en/regnProblem', 's_regnProblem3');
addPage_2('en/regnProblem', 'regnProblem4', "Transformations and prediction", 'interact', 'en/regnProblem', 's_regnProblem4');
addPage_2('en/regnProblem', 'regnProblem5', "Outliers and leverage", 'interact', 'en/regnProblem', 's_regnProblem5');
addPage_2('en/regnProblem', 'regnProblem6', "Non-normal errors", 'interact', 'en/regnProblem', 's_regnProblem6');
addPage_2('en/regnProblem', 'regnProblem7', "Correlated errors", 'interact', 'en/regnProblem', 's_regnProblem7');

addChapter('bk/regn', 'ch_multipleRegn', "Multiple Regression");
addSection('bk/regn', 'sec_leastSqrsTwo', "Least squares for Y vs (X and Z)");
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo1', "More than one explanatory variable", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo2', "Three-dimensional scatterplots", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo3', "Linear equation and least squares plane", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo4', "Understanding the parameters", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo5', "Fitted values and residuals", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo6', "Estimating the parameters", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo7', "Least squares estimation", 'interact');
addPage_2('en/leastSqrsTwo', 'leastSqrsTwo8', "Interpreting the coefficients", 'interact');
addSection('bk/regn', 'sec_regnInfTwo', "Normal linear model and inference");
addPage_2('en/regnInfTwo', 'regnInfTwo1', "Normal linear model", 'interact');
addPage_2('en/regnInfTwo', 'regnInfTwo2', "Sampling variability of least squares plane", 'interact');
addPage_2('en/regnInfTwo', 'regnInfTwo3', "Distribution of estimated coefficients", 'interact');
addPage_2('en/regnInfTwo', 'regnInfTwo4', "Estimate of error standard deviation", 'interact');
addPage_2('en/regnInfTwo', 'regnInfTwo5', "95% confidence intervals for coefficients", 'interact');
addPage_2('en/regnInfTwo', 'regnInfTwo6', "Hypothesis tests for coefficients", 'interact');
addSection('bk/general', 'sec_randBlock', "Randomised blocks");
addPage_2('en/randBlock', 'randBlock1', "Generalising the idea of paired data", 'static', 'en/randBlock', 's_randBlock1');
addPage_2('en/randBlock', 'randBlock2', "Example with baseline treatment", 'interact', 'en/randBlock', 's_randBlock2');
addPage_2('en/randBlock', 'randBlock3', "Use of blocking information", 'interact', 'en/randBlock', 's_randBlock3');
addPage_2('en/randBlock', 'randBlock4', "Randomised block designs", 'interact', 'en/randBlock', 's_randBlock4');
addPage_2('en/randBlock', 'randBlock5', "Model for randomised blocks", 'interact', 'en/randBlock', 's_randBlock5');
addPage_2('en/randBlock', 'randBlock6', "Removing block effects", 'interact', 'en/randBlock', 's_randBlock6');
addPage_2('en/randBlock', 'randBlock7', "Sums of squares", 'interact', 'en/randBlock', 's_randBlock7');
addPage_2('en/randBlock', 'randBlock8', "Anova table and examples", 'static', 'en/randBlock', 's_randBlock8');

addChapter('bk/african_c2', 'ch_manyMeans', "Comparing Many Means");
addSection('bk/african_c2', 'sec_commonSD', "Model with common SD");
addPage_2('en/multiGroup', 'multiGroup_b1', "Model", 'interact', 'en/multiGroup', 's_multiGroup1');
addPage_2('en/multiGroup', 'multiGroup2', "Parameter estimates", 'interact', 'en/multiGroup', 's_multiGroup2');
addSection('bk/african_c2', 'sec_ssqF', "Sums of squares and F test");
addPage_2('en/multiGroup', 'multiGroup_b3', "Revisiting two groups", 'static', 'en/multiGroup', 's_multiGroup3');
addPage_2('en/multiGroup', 'multiGroup4', "Variation between and within groups", 'interact', 'en/multiGroup', 's_multiGroup4');
addPage_2('en/multiGroup', 'multiGroup5', "Sums of squares", 'interact', 'en/multiGroup', 's_multiGroup5');
addPage_2('en/multiGroup', 'multiGroup_b6', "Coefficient of determination", 'static', 'en/multiGroup', 's_multiGroup_b6');
addPage_2('en/multiGroup', 'multiGroup7', "Test for differences between groups", 'interact', 'en/multiGroup', 's_multiGroup7');
addPage_2('en/multiGroup', 'multiGroup_b8', "Examples", 'static', 'en/multiGroup', 's_multiGroup_b8');

var language = "en";
var logoGif = "logo_sadc.gif";
var homeDir = "bk/sadc_c3";
var versionGif = "images/castSadc_c3";
var isLecturingVersion = false;
var isModule = false;
var hasSummaries = true;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "16";

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

var versionName = {'_g': 'General', '_b': 'Biometric', '_c': 'Business', '_z': 'Other', '_m': 'Climatic', '_a': 'African'};
var versions = {};
versions['infPopn1'] = new Array('_g', '_b', '_c');
versions['infPopn2'] = new Array('_g', '_b', '_c', '_z');
versions['infPopn3'] = new Array('_g', '_b', '_c');
versions['infPopn5'] = new Array('_g', '_c');
versions['probDensity1'] = new Array('_g', '_b');
versions['probDensity2'] = new Array('_g', '_b', '_c');
versions['probDensity5'] = new Array('_g', '_c');
versions['probDensity7'] = new Array('_g', '_c');
versions['probSim4'] = new Array('_g', '_b', '_c');
versions['probSim6'] = new Array('_g', '_c');
versions['seasonal1'] = new Array('_g', '_m', '_z');
versions['seasonal2'] = new Array('_g', '_m', '_z');
versions['seasonal3'] = new Array('_g', '_m', '_z');
versions['seasonal4'] = new Array('_g', '_m', '_z');
versions['seasonal5'] = new Array('_g', '_m', '_z');
versions['seasonal6'] = new Array('_g', '_m', '_z');
versions['randomMean1'] = new Array('_g', '_b', '_c');
versions['randomMean6'] = new Array('_g', '_b', '_c');
versions['randomMean7'] = new Array('_g', '_b');
versions['randomPropn1'] = new Array('_g', '_c');
versions['randomPropn2'] = new Array('_g', '_c');
versions['randomPropn3'] = new Array('_g', '_b', '_c');
versions['randomPropn4'] = new Array('_g', '_b', '_c');
versions['randomPropn6'] = new Array('_g', '_b', '_c');
versions['estIntro1'] = new Array('_b', '_g', '_c');
versions['estIntro2'] = new Array('_b', '_g', '_c');
versions['estIntro3'] = new Array('_m', '_g');
versions['estIntro4'] = new Array('_m', '_g', '_c');
versions['estIntro5'] = new Array('_g', '_b', '_c');
versions['seMean1'] = new Array('_g', '_b', '_c');
versions['seMean2'] = new Array('_g', '_b');
versions['seMean3'] = new Array('_g', '_b');
versions['seMean4'] = new Array('_g', '_b', '_c');
versions['seMean6'] = new Array('_g', '_b', '_c');
versions['ciMean1'] = new Array('_m', '_g', '_c');
versions['ciMean2'] = new Array('_b', '_g');
versions['ciMean7'] = new Array('_b', '_g', '_c');
versions['estPropn1'] = new Array('_g', '_m');
versions['estPropn3'] = new Array('_g', '_b', '_c');
versions['estPropn4'] = new Array('_g', '_b', '_c');
versions['estPropn5'] = new Array('_g', '_b', '_c');
versions['estPropn7'] = new Array('_g', '_b', '_c');
versions['estOther3'] = new Array('_m', '_g', '_c');
versions['estOther5'] = new Array('_g', '_b');
versions['estOther6'] = new Array('_m', '_g', '_c');
versions['testIntro1'] = new Array('_g', '_b');
versions['testIntro3'] = new Array('_g', '_b', '_c');
versions['testIntro5'] = new Array('_g', '_b');
versions['testIntro7'] = new Array('_g', '_b', '_c');
versions['testPropn1'] = new Array('_g', '_b', '_c');
versions['testPropn2'] = new Array('_g', '_b', '_c');
versions['testPropn3'] = new Array('_g', '_b', '_c');
versions['testPropn4'] = new Array('_g', '_b', '_c');
versions['testPropn5'] = new Array('_g', '_b');
versions['testPropn7'] = new Array('_g', '_b');
versions['testMean1'] = new Array('_g', '_c');
versions['testMean2'] = new Array('_g', '_c');
versions['testMean3'] = new Array('_g', '_b');
versions['testMean4'] = new Array('_g', '_c');
versions['testMean5'] = new Array('_g', '_c');
versions['testPValue1'] = new Array('_g', '_c');
versions['testPValue2'] = new Array('_g', '_b', '_c');
versions['testPValue5'] = new Array('_g', '_b', '_c');
versions['twoGroupModel1'] = new Array('_g', '_b', '_c');
versions['twoGroupModel2'] = new Array('_g', '_b', '_c');
versions['twoGroupModel4'] = new Array('_g', '_c');
versions['twoGroupModel5'] = new Array('_g', '_c');
versions['twoGroupInf1'] = new Array('_g', '_c');
versions['twoGroupInf2'] = new Array('_b', '_g', '_c');
versions['twoGroupInf3'] = new Array('_b', '_g', '_c');
versions['twoGroupInf4'] = new Array('_b', '_g', '_c');
versions['twoGroupInf5'] = new Array('_b', '_g', '_c');
versions['testPaired1'] = new Array('_g', '_b', '_c');
versions['testPaired2'] = new Array('_g', '_b', '_c');
versions['testPaired3'] = new Array('_g', '_c');
versions['twoGroupPropn1'] = new Array('_g', '_c');
versions['twoGroupPropn3'] = new Array('_g', '_c');
versions['twoGroupPropn4'] = new Array('_g', '_c');
versions['bivarCat1'] = new Array('_g', '_b', '_c');
versions['indep1'] = new Array('_b', '_g', '_c');
versions['indep2'] = new Array('_g', '_c');
versions['indep3'] = new Array('_g', '_c');
versions['indep4'] = new Array('_g', '_c');
versions['indep7'] = new Array('_g', '_c');
versions['indep8'] = new Array('_g', '_c');
versions['popSamp1'] = new Array('_a', '_g', '_b', '_c');
versions['popSamp2'] = new Array('_g', '_c');
versions['popSamp3'] = new Array('_a', '_g', '_b', '_c');
versions['popSamp4'] = new Array('_b', '_g');
versions['popSamp5'] = new Array('_b', '_g', '_c');
versions['sampPractice1'] = new Array('_b', '_g');
versions['sampPractice5'] = new Array('_b', '_g', '_c');
versions['sampPractice6'] = new Array('_b', '_g');
versions['correlation1'] = new Array('_g', '_b', '_c');
versions['leastSqrs1'] = new Array('_b', '_g', '_c');
versions['leastSqrs3'] = new Array('_g', '_c');
versions['leastSqrs6'] = new Array('_g', '_c');
versions['leastSqrs7'] = new Array('_g', '_c');
versions['curvature1'] = new Array('_g', '_c');
versions['curvature2'] = new Array('_g', '_c');
versions['curvature3'] = new Array('_g', '_c');
versions['curvature4'] = new Array('_g', '_c');
versions['regnGroups7'] = new Array('_g', '_c');
versions['regnModel1'] = new Array('_g', '_b', '_c');
versions['regnModel2'] = new Array('_g', '_c');
versions['regnModel5'] = new Array('_g', '_b', '_c');
versions['regnEst1'] = new Array('_g', '_c');
versions['regnEst2'] = new Array('_g', '_c');
versions['regnEst4'] = new Array('_g', '_c');
versions['regnEst5'] = new Array('_g', '_c');
versions['regnTest1'] = new Array('_g', '_c');
versions['regnTest2'] = new Array('_g', '_c');
versions['regnPred1'] = new Array('_g', '_b', '_c');
versions['regnPred3'] = new Array('_g', '_b', '_c');
versions['regnPred4'] = new Array('_g', '_b');
versions['regnProblem3'] = new Array('_g', '_b');
versions['regnProblem4'] = new Array('_g', '_c');
versions['regnProblem6'] = new Array('_g', '_c');
versions['multiGroup1'] = new Array('_b', '_g', '_c');
versions['multiGroup3'] = new Array('_b', '_g', '_c');
versions['multiGroup4'] = new Array('_g', '_a');
versions['multiGroup6'] = new Array('_b', '_g', '_a', '_c');
versions['multiGroup7'] = new Array('_g', '_a');
versions['multiGroup8'] = new Array('_b', '_g', '_c');

bookLoaded = true;
