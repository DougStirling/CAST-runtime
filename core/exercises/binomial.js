startExercise("exerciseNormalProg.BinomialCheckApplet", 500, 650);
addCoreParam("nVarsDisplayed", "4");
addCoreParam("nVars", "15");
addCoreParam("variable0", "true#Left-handed students#Just under 10% of people are left-handed in most populations. We are interested in the number who are left-handed out of a class of 30 students.#It is reasonable to assume that each of the 30 students independently has the same probability of being left-handed.");
addCoreParam("variable1", "true#Cars stopping#Researchers are interested in characteristics of drivers who do not come completely to a halt at stop signs on intersections. 90 young female drivers were observed and variable X is the number who failed to stop at a quiet intersection.#A fixed number of drivers was observed (90) and because they had similar age and gender, it is reasonable to assume that they independently have the same probability of stopping.");
addCoreParam("variable2", "false#Cars observed#Researchers are interested in characteristics of drivers who do not come completely to a halt at stop signs on intersections. The researchers decided to observe cars at a quiet intersection until they had seen 20 young female drivers who failed to stop. The variable X is the total number of cars observed.#This variable is a count but there is no finite limit to the number of cars that must be observed so the distribution cannot be binomial.");
addCoreParam("variable3", "false#Time observing cars#Researchers are interested in characteristics of drivers who do not come completely to a halt at stop signs on intersections. The researchers decided to observe cars at a quiet intersection until they had seen whether or not 90 young female drivers failed to stop. The variable X is the time until they had observed this number of cars.#The time is a continuous variable.");
addCoreParam("variable4", "true#Male children in family#A couple intends to have a total of four children; it can be assumed that male and female children are equally likely. The variable X is the total number of male children in their family.#There is a fixed number of children (4) and each independently has the same probability of being male.");
addCoreParam("variable5", "false#Children to first male#A couple decides to keep having children until their first male child is born and then stop; it can be assumed that male and female children are equally likely. The variable X is the total number of children that they will eventually have.#This variable is a count but there is no finite limit to the number of children that they may need so its distribution cannot be binomial.");
addCoreParam("variable6", "true#Chess wins by A#Two chess players, A and B, are equally matched and play 10 games with each other in a tournament. We are interested in the number of games won by A.#Assuming that successive games are independent (the probability of winning is not affected by previous results), there is a fixed number of 'trials' and the probabiity of 'success' is constant.");
addCoreParam("variable7", "false#Home wins#In a football league containing teams of different ability, each of the 11 teams plays each other once with half of the games being home games. We are interested in the number of home wins out of the 55 matches.#Some teams are likely to be better than others and therefore have higher probabilities of winning their home matches. The probability of 'success' is therefore not constant.");
addCoreParam("variable8", "true#Side-effects#A pharmaceutical company conducts a clinical trial of a new asthma drug with 1000 mild asthmatics. The variable X is the number who suffer side-effects in the trial.#There is a fixed number of independent trials (patients) and it is reasonable to assume that each has the same probability of success (side-effects).");
addCoreParam("variable9", "false#Asthma inhaler use#A pharmaceutical company conducts a clinical trial of a new asthma drug with 1000 mild asthmatics. The variable X is the number of times that a single patient needs to use her regular inhaler during a 2-week period.#There is no fixed number of 'trials' and there is no finite limit to the possible number of uses of the inhaler.");
addCoreParam("variable10", "false#Rainfall#Climatologists are interested in the total rainfall in the 30 days of June a region.#It has a continuous distribution.");
addCoreParam("variable11", "false#Rain days#Climatologists are interested in the number of days out of the 30 days in June in which there was any rain in a region.#Although the rainfall is a count out of 30 days, rainfall in successive days is not independent -- if it rains one day, it is more likely to rain in the next day too.");
addCoreParam("variable12", "false#Light bulb failures#An office contains 20 light bulbs and each is replaced as soon as it fails. We are interested in the number of replacements that might be needed in a year.#Although this variable is a count and there is a finite number of light bulbs (20), each can fail multiple times and there is no theoretical limit to the total failures. (If the bulbs were not replaced when they failed, the number of failures would be binomial.)");
addCoreParam("variable13", "true#Light bulbs remaining#An office contains 20 light bulbs and each is replaced as soon as it fails. We are interested in how many of the 20 bulbs that were in use at the start of the year are still working 12 months later.#There is a finite number of initial light bulbs (20) and each independently has the same probability of lasting for the whole year.");
addCoreParam("variable14", "false#Purchases of magazine in year#A popular photographic magazine is published monthly. The variable X is the number of issues of the magazine purchased in one year by a randomly selected adult.#Many adults have no interest in photography but photographers are likely to buy all 12 monthly issues. The probability of buying an issue therefore varies considerably from person to person.");

addVariation("general", "Which (if any) of the following variables are likely to have binomial distributions or distributions very close to binomial?", null, null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.ChooseBinomialApplet", 500, 600);

addVariation("generic", "Consider a series of n = #nTrials(10:30)# independent Bernouli trials, each of which has probability #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)# of being a 'success'. A researcher is interested in whether the number of #succ-fail(successes)#, X, will be less than #cut-off(:)#. Which of the following bar charts describes the binomial distribution of X?", "successes(successes)#failures(failures)#trials(trials)", null, 0);
addVariation("reptiles", "The gender of many reptiles is strongly affected by the ambient temperature when the embrio is developing in its egg and the probability of an embrio being male is #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)# at one particular temperature.\\nWe are interested in whether the number of #succ-fail[](males hatching*females hatching)#, X, out of n = #nTrials(10:30)# eggs will be less than #cut-off(:)#. Which of the following bar charts describes the distribution of X?", "successes(males hatching)#failures(females hatching)#trials(reptile eggs)", null, 0);
addVariation("hayfever", "From clinical trials of a drug to alleviate the symptoms of hayfever, it was estimated that the probability of side effects is #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)#.\\nWe are interested in whether the number of #succ-fail[](patients with side effects*patients without side effects)#, X, in a subsequent trial involving n = #nTrials(10:30)# patients will be less than #cut-off(:)#. Which of the following bar charts describes the distribution of X?", "successes(patients with side effects)#failures(patients without side effects)#trials(patients in the clinical trial)", null, 0);
addVariation("candidateSupport", "A local newspaper is interested in the level of support for the two candidates for mayor, A and B. We will assume that the overall proportion in the town who support A is #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)#.\\nA random sample of n = #nTrials(30:50)# people in the town are asked whether they support A or B and we are interested in whether the number of #succ-fail[](supporters of A*supporters of B)# in the sample, X, is less than #cut-off(:)#. Which of the following bar charts describes the distribution of X?", "successes(supporters of A)#failures(supporters of B)#trials(people asked)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.BinomialProbApplet", 500, 650);

addVariation("flooding", "Each year, the probability of a river flooding is #pi# = #pSuccess(0.2:0.8)#.\\nAssuming that the local climate does not change over the period, what is the probability that the number of years in the next #nTrials(10:30)# in which the river floods is #cut-offs(:)#?", "varName(years with flood)#trialsName(years)#maxValue(99.9)#maxSliderN(40)#intervalType(1:8)", null, 0);
addVariation("coldDrug", "A new drug has been developed to help reduce the symptoms of the common cold.\\nA clinical trial is conducted with #nTrials[](20,40,80)# female patients aged 20-30. If the probability that each patient reports an improvement is #pi# = #pSuccess(0.1:0.7)#, what is the probability that the total number reporting an improvement is #cut-offs(:)#?", "varName(patients reporting improvement)#trialsName(patients)#maxValue(999.9)#maxSliderN(100)#intervalType(1:8)", null, 0);
addVariation("crimeProsecution", "In a town, a proportion #pSuccess(0.20:0.60)# of reported crimes of violence have been found to result in successful prosecutions.\\nIf this is the probability of successful prosecutions, #pi#, in the next #nTrials[](40,60,80)# reported crimes of violence, what is the probability that there will be #cut-offs(:)# successful prosecutions?", "varName(successful prosecutions)#trialsName(reported crimes of violence)#maxValue(99.9)#maxSliderN(100)#intervalType(1:8)", null, 0);
addVariation("reptileGender", "The gender of many reptiles is strongly affected by the ambient temperature when the embrio is developing in its egg.\\nIf the probability of an embrio being male is #pi# = #pSuccess(0.10:0.90)# at one particular temperature, what is the probability that out of #nTrials(10:40)# eggs at this temperature, #cut-offs(:)# males will be hatched?", "varName(males hatching)#trialsName(years)#maxValue(99.9)#maxSliderN(50)#intervalType(1:8)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalApproxApplet", 500, 600);

addVariation("climate", "An electronics company manufactures circuit boards for use in digital music players. The circuit boards are thorougly tested before shipping and each independently has probability #pi# = #pSuccess[](0.03,0.04,0.05,0.06,0.07,0.08,0.09)# of being a defective.\\nConsider a batch of n = #nTrials[](500,1000,2000,3000)# circuit boards. What is the best normal approximation to the distribution of the #propn-count[index](proportion*number*proportion*number)# of #succ-fail[index](defectives*defectives*non-defectives*non-defectives)# in the batch?", "index(0:3)#successes(defectives)#failures(non-defectives)#trials(circuit boards)#maxTemplateValues(9999.99 99.999 9.99999)", null, 0);
addVariation("crimeAttidudes", "A political party conducts a telephone survey of a random sample of n = #nTrials[](100,200,300,400,500)# voters to determine attitudes towards longer sentences for crimes of violence.\\nIf each respondent has probability #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)# of agreeing to a statement promoting longer sentences, what is the distribution of the sample #propn-count[index](proportion*number*proportion*number)# of #succ-fail[index](people agreeing*people agreeing*people not agreeing*people not agreeing)# to the statement?", "index(0:3)#successes(people agreeing)#failures(people not agreeing)#trials(surveyed people)#maxTemplateValues(999.99 99.999 9.9999)", null, 0);
addVariation("fruitFlies", "Heat treatment is used to kill fruit flies on some types of fruit such as mangoes but the probability of survival depends on the temperature.\\nIf the probability of survival is #pi# = #pSuccess[](0.2,0.3,0.4,0.6,0.7,0.8)# at one particular temperature, and a biologist conducts an experiment with n = #nTrials[](100,200,300,400,500)# fruit flies, what is the distribution of the #propn-count[index](proportion*number*proportion*number)# of #succ-fail[index](survivors*survivors*fruit flies dying*fruit flies dying)#?", "index(0:3)#successes(survivors)#failures(fruit flies dying)#trials(fruit flies)#maxTemplateValues(999.99 99.999 9.9999)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalApproxProbApplet", 550, 750);

addVariation("crimeProsecution", "In a city, a proportion #pSuccess(0.20:0.60)# of reported crimes of violence have been found to result in successful prosecutions.\\nIf this is the probability of successful prosecutions, #pi#, in the next #nTrials[](50,100,200,400)# reported crimes of violence, what is the probability that there will be #cut-offs(0.05:0.95)# successful prosecutions?", "index(0:3)#varName(successful prosecutions)#trialsName(reported crimes of violence)#maxValue(99.999)#intervalType[index](1,2,3,6)#maxMeanSd(999.99 99.999)", null, 0);
addVariation("politicalPoll", "A newspaper conducts a survey of #nTrials[](50,100,150,200)# city residents before a local election.\\nIf each respondent has probability #pi# = #pSuccess(0.20:0.60)# of telling the newpaper that Candidate A is supported, what is the probability that the total number claiming to be supporters of A will be #cut-offs(0.01:0.99)#?", "index(0:3)#varName(supporters of A)#trialsName(surveyed people)#maxValue(99.999)#intervalType[index](1,2,3,6)#maxMeanSd(999.99 99.999)", null, 0);
addVariation("softwareSupport", "A large computer software company has found that a proportion #pSuccess(0.05:0.20)# of people buying an accounting program that they developed require subsequent support.\\nAssuming that there will be #nTrials[](200,400,800)# sales in the next month and that each of them has this probability, #pi#, of each requiring support, what is the probability that the total number of purchasers requiring support will be #cut-offs(0.05:0.95)#?", "index(0:3)#varName(people requiring support)#trialsName(purchasers of software)#maxValue(99.999)#intervalType[index](1,2,3,6)#maxMeanSd(999.99 99.999)", null, 0);
addVariation("defectives", "A factory produces plastic components, each of which independently has probability #pi# = #pSuccess(0.01:0.04)# of being defective.\\nIf #nTrials[](2000,4000,8000)# components are produced, what is the probability that the number of defectives will be #cut-offs(0.01:0.99)#?", "index(0:3)#varName(defective components)#trialsName(components produced)#maxValue(99.999)#intervalType[index](1,2,3,6)#maxMeanSd(9999.9 999.99)", null, 0);

//----------------------------------------------

