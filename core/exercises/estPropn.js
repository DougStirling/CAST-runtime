startExercise("exerciseEstimProg.FindPropnSeApplet", 500, 640);

addVariation("chocolate", "A random sample of n=#noOfValues[](100,200,300,400)# shoppers in a supermarket are asked which of three brands of chocolate was preferred. The pie chart and frequency table below summarise the results.\\nFind the standard error of the proportion who prefer #catLabels[targetCat]# chocolate.", "varName(Chocolate preference)#catLabels(Cadbury Nestle Hershey)#probs(0.45 0.35 0.2)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("leftHanded", "In a class of n=#noOfValues(100:200)# students, the lecturer determined the number who were left- and right-handed. The pie chart and frequency table below summarise the results.\\nFind the standard error of the proportion of #catLabels[targetCat]# students.", "varName(Preferred hand)#catLabels(Left-handed Right-handed)#probs(0.08 0.92)#targetCat(0:1)#maxPropn(0.0001)", null, 0);
addVariation("obesity", "In a study of obesity in the USA, the body mass index of a random sample of n=#noOfValues[](200,300,400,500)# adults in one county was calculated and each was classified as normal/underweight, overweight or obese. The pie chart and frequency table below summarise the results.\\nFind the standard error of the proportion of adults who are #catLabels[targetCat]#.", "varName(Weight)#catLabels(Normal/underweight Overweight Obese)#probs(0.5 0.35 0.15)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("beeColor", "In an experiment, a biologist placed containers of five colours in a large box and released honeybees into the box. The colours of the containers that attracted the bees were recorded and are shown in the chart and table below.\\nFind the standard error of the proportion of honeybees who choose containers of colour #catLabels[targetCat]#.", "noOfValues[](200,300,400,500)#varName(Colour chosen)#catLabels(UV UV-blue Blue Blue-green Green)#probs(0.1 0.4 0.25 0.05 0.2)#targetCat(0:4)#maxPropn(0.0001)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.FindPropn95CiApplet", 500, 640);

addVariation("chocolate", "A random sample of n=#noOfValues[](100,200,300,400)# shoppers in a supermarket are asked which of three brands of chocolate was preferred. The pie chart and frequency table below summarise the results.\\nFind a 95% confidence interval for the probability that a shopper in this supermarket prefers #catLabels[targetCat]# chocolate.", "varName(Chocolate preference)#catLabels(Cadbury Nestle Hershey)#probs(0.45 0.35 0.2)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("leftHanded", "In a class of n=#noOfValues(100:200)# students, the lecturer determined the number who were left- and right-handed. The pie chart and frequency table below summarise the results.\\nFind a 95% confidence interval for the probability that a student in a similar class is #catLabels[targetCat]#.", "varName(Preferred hand)#catLabels(Left-handed Right-handed)#probs(0.08 0.92)#targetCat(0:1)#maxPropn(0.0001)", null, 0);
addVariation("obesity", "In a study of obesity in the USA, the body mass index of a random sample of n=#noOfValues[](200,300,400,500)# adults in one county was calculated and each was classified as normal/underweight, overweight or obese. The pie chart and frequency table below summarise the results.\\nFind a 95% confidence interval for the proportion of adults in the whole population who are #catLabels[targetCat]#.", "varName(Weight)#catLabels(Normal/underweight Overweight Obese)#probs(0.5 0.35 0.15)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("beeColor", "In an experiment, a biologist placed containers of five colours in a large box and released honeybees into the box. The colours of the containers that attracted the bees were recorded and are shown in the chart and table below.\\nFind a 95% confidence interval for the probability that a honeybee will choose a container of colour #catLabels[targetCat]#.", "noOfValues[](200,300,400,500)#varName(Colour chosen)#catLabels(UV UV-blue Blue Blue-green Green)#probs(0.1 0.4 0.25 0.05 0.2)#targetCat(0:4)#maxPropn(0.0001)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.FindPropnCiApplet", 500, 700);

addVariation("chocolate", "A random sample of n=#noOfValues[](100,200,300,400)# shoppers in a supermarket are asked which of three brands of chocolate was preferred. The pie chart and frequency table below summarise the results.\\nFind a #ciLevel[](90,95,99)#% confidence interval for the probability that a shopper in this supermarket prefers #catLabels[targetCat]# chocolate.", "varName(Chocolate preference)#catLabels(Cadbury Nestle Hershey)#probs(0.45 0.35 0.2)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("leftHanded", "In a class of n=#noOfValues(100:200)# students, the lecturer determined the number who were left- and right-handed. The pie chart and frequency table below summarise the results.\\nFind a #ciLevel[](90,95,99)#% confidence interval for the probability that a student in a similar class is #catLabels[targetCat]#.", "varName(Preferred hand)#catLabels(Left-handed Right-handed)#probs(0.08 0.92)#targetCat(0:1)#maxPropn(0.0001)", null, 0);
addVariation("obesity", "In a study of obesity in the USA, the body mass index of a random sample of n=#noOfValues[](200,300,400,500)# adults in one county was calculated and each was classified as normal/underweight, overweight or obese. The pie chart and frequency table below summarise the results.\\nFind a #ciLevel[](90,95,99)#% confidence interval for the proportion of adults in the whole population who are #catLabels[targetCat]#.", "varName(Weight)#catLabels(Normal/underweight Overweight Obese)#probs(0.5 0.35 0.15)#targetCat(0:2)#maxPropn(0.0001)", null, 0);
addVariation("beeColor", "In an experiment, a biologist placed containers of five colours in a large box and released honeybees into the box. The colours of the containers that attracted the bees were recorded and are shown in the chart and table below.\\nFind a #ciLevel[](90,95,99)#% confidence interval for the probability that a honeybee will choose a container of colour #catLabels[targetCat]#.", "noOfValues[](200,300,400,500)#varName(Colour chosen)#catLabels(UV UV-blue Blue Blue-green Green)#probs(0.1 0.4 0.25 0.05 0.2)#targetCat(0:4)#maxPropn(0.0001)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.CiWidthInfluencesPApplet", 600, 650);
addCoreParam("noOfStatements", "3");
addCoreParam("statementStart0", "A #?:string[ciLevel](90*95*95*99)#% confidence interval for the proportion of #successName# has been calculated from a random sample of n=#?:int[](200,300,400,500)# #trialsName#. If the confidence level is changed from #?:string[ciLevel](90% to 95%*95% to 99%*95% to 90%*99% to 95%)#, the width of the confidence interval will ...");
addCoreParam("messages0", "If we make our confidence interval #?:string[ciLevel](wider*wider*narrower*narrower)#, it contains #?:string[ciLevel](more*more*fewer*fewer)# values so there is #?:string[ciLevel](more*more*less*less)# chance that it will include the population parameter. We must therefore #?:string[ciLevel](increase*increase*decrease*decrease)# the width of the confidence interval to get a #?:string[ciLevel](higher*higher*lower*lower)# confidence level.");
addCoreParam("statementStart1", "A #?:string[](90%*95%*99%)# confidence interval for the proportion of #successName# has been found from a random sample of n=#?:string[sampleSize](100*200*200*300)# #trialsName#. If the sample size had been n=#?:string[sampleSize](200*300*100*200)# instead, we would have expected the confidence interval to have been ...");
addCoreParam("messages1", "#?:string[sampleSize](More*More*Less*Less)# data implies #?:string[sampleSize](more*more*less*less)# information about the population parameter so we should be able to estimate it #?:string[sampleSize](more*more*less*less)# accurately. We would therefore expect #?:string[sampleSize](a decrease*a decrease*an increase*an increase)# in the width of the confidence interval.");
addCoreParam("statementStart2", "Random samples of n=#?:int[](200,300,400,500)# #trialsName# are selected from each of two #popnName#s. If the proportion of #successName# in #popnName# A is #?:string[spread](closer to 0.5*closer to 0.5*further from 0.5*further from 0.5)# than that in #popnName# B, we would expect the #?:string[](90%*95%*99%)# confidence interval for the proportion of #successName# in #popnName# A to be ...");
addCoreParam("statementEnd2", "that from population B.");
addCoreParam("messages2", "If the proportion of successes in population #?:string[spread](A*A*B*B)# is closer to 0.5 than that in population #?:string[spread](B*B*A*A)#, population #?:string[spread](A*A*B*B)#'s sample proportion of successes will be more variable. The confidence interval from population #?:string[spread](A*A*B*B)# will therefore be wider.");

addVariation("lizardGender", "The three statements below relate to the proportion of #successName# in a random sample of lizards that hatch from eggs at one temperature.\\nUse the pop-up menus to complete the following three statements.", "successName[](male lizards*female lizards)#trialsName(lizards)#popnName(location)#ciLevel(0:3)#sampleSize(0:3)#spread(0:3)#menuLevel(remain_the_same increase decrease)#menuSampleSize(approximately_the_same_width narrower wider)#menuSpread(approximately_the_same_width_as wider_than narrower_than)", null, 0);
addVariation("votingPoll", "In a public opinion poll, a random sample of voters is selected and each is asked whether he or she intends to vote for Party X or Party Y in an election.\\nUse the pop-up menus to complete the following three statements about a confidence interval for the proportion of #successName#.", "successName[](votes for Party X*votes for Party Y)#trialsName(voters)#popnName(town)#ciLevel(0:3)#sampleSize(0:3)#spread(0:3)#menuLevel(remain_the_same increase decrease)#menuSampleSize(approximately_the_same_width narrower wider)#menuSpread(approximately_the_same_width_as wider_than narrower_than)", null, 0);
addVariation("defects", "Quality control engineers select a random sample of items from the output of a production line and test whether each has defects.\\nUse the pop-up menus to complete the following three statements about a confidence interval for the proportion of defective items.", "successName(defective items)#trialsName(items)#popnName(production line)#ciLevel(0:3)#sampleSize(0:3)#spread(0:3)#menuLevel(remain_the_same increase decrease)#menuSampleSize(approximately_the_same_width narrower wider)#menuSpread(approximately_the_same_width_as wider_than narrower_than)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.CiInterpPApplet", 500, 540);

addVariation("infectedPlants", "A botanist randomly samples n=#?:int[](30,40,50,60)# plants in an area and counts the number that are affected by a particular virus. A 95% confidence interval for the proportion that are infected is from #lowLimit[index](0.137,0.063)# to #highLimit[index](0.260,0.119)#.\\nWhich of the following statements correctly interprets the confidence interval?", "index(0:1)#popnValues(the plants in the whole area)#sampleValues(the plants in the sample)#success(infected by the virus)#newSample(plants in a new sample of the same size)#samples(new samples of plants of the same size)", null, 0);
addVariation("cancerSurvival", "A health researcher conducted a study of n=#?:int(80:120)# male patients who had been diagnosed with #?:string[index](melanoma*prostate cancer*colon cancer*brain cancer)# and used a sample of patients to estimate survival rates. A 95% confidence interval for the proportion who were still alive five years after diagnosis was between #lowLimit[index](0.742,0.537,0.433,0.114)# and #highLimit[index](0.811,0.670,0.495,0.151)#.\\nWhich of the following statements correctly interprets the confidence interval?", "index(0:3)#popnValues(males diagnosed with this type of cancer in general)#sampleValues(patients examined in this study)#success(still alive after 5 years)#newSample(another sample of the same  number of males who are diagnosed with this cancer)#samples(further samples of males with this cancer of the same size)", null, 0);
addVariation("cerealBoxWeight", "One day, quality control inspectors examined a sample of n=#?:int[index](50,100,200)# boxes of #?:string[](cornflakes*rice cereal*wheat flakes)# coming off a production line and a 95% confidence interval for the proportion of overweight boxes was #lowLimit[index](0.788,0.879,0.932)# to #highLimit[index](0.972,0.981,0.988)#.\\nWhich of the following statements correctly interprets the confidence interval?", "index(0:2)#popnValues(all boxes coming off the production line that day)#sampleValues(the boxes sampled in the study)#success(overweight)#newSample(a different sample of the same  number of boxes from the production line)#samples(new samples of boxes from the production line)", null, 0);

//----------------------------------------------
