startExercise("exerciseTestProg.NormTestApplet", 550, 770);

addVariation("milkVolume", "From previous records, it is known that the volume of milk in 2-litre containers has standard deviation #sigma# = #sd(0.02)# litres. If working to specifications, the filling machine should have a mean fill volume of#?:string[tail]( at least * equal to * no higher than * equal to * * )##nullMean[index](2.05,2.06,2.07,2.08,2.09,2.10)# litres.\\nIn a sample of size n = #sampleSize[](4,9,16,25)#, the sample mean was #observedMean(:)# litres. Perform a test for whether the population mean, #mu#, is now #?:string[tail](less than*less than*more than*more than*different from*not equal to)# #?:string[index](2.05*2.06*2.07*2.08*2.09*2.10)#.", "index(0:5)#tail[](0,1,2,3,4,4)#meanDecimals(3)#valueName(volume)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)", null, 0);
addVariation("waterDischarge", "An #?:string[tail](environmental group*environmental group*industrial concern*industrial concern*environmental group*industrial concern)# claims that #?:string[tail]( at least * equal to * no higher than * equal to * * )##nullMean[index](500,1000,1500,2000)# litres of wastewater per hour are discharged by a factory into a nearby lake.\\nIf it can be assumed that the standard deviation of the hourly discharge is #sigma# = #sd[index](150,200,250,400)# litres and a random sample of n = #sampleSize[](4,9,16,25)# hours gives a mean discharge of #observedMean(:)# litres per hour, perform a test for whether the population mean, #mu#, is now #?:string[tail](less than*less than*more than*more than*different from*not equal to)# #?:string[index](500*1000*1500*2000)#.", "index(0:3)#tail[](0,1,2,3,4,4)#meanDecimals(0)#valueName(hourly discharge volume)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)", null, 0);
addVariation("serumCreatinine", "The mean and standard deviation of serum-creatinine in the general population are #mu# = #nullMean[index](0.9,1.0,1.1)# mg/dL and #sigma# = #sd[index](0.25,0.3,0.35)# mg/dL.\\nA group of n = #sampleSize[](4,9,16,25)# patients are given a new antibiotic and had a mean serum-creatinine level of #observedMean(:)# mg/dL. Test whether #mu# is now #?:string[tail](???*less than*???*more than*different from)# #?:string[index](0.9*1.0*1.1)# mg/dL.", "index(0:2)#tail[](1,3,4)#meanDecimals(3)#valueName(serum-creatinine level)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)", null, 0);

//----------------------------------------------

startExercise("exerciseTestProg.TTestApplet", 550, 770);

addVariation("weightGain", "A treatment for anorexic girls has been claimed to result in a mean weight gain of #nullMean[index](2,2.5,3,3.5,4,4.5,5)#kg.\\nA sample of #sampleSize[](9,16,25,36)# girls who were given this treatment had weight gains with standard deviation s = #sd(3:5)#kg and a mean weight gain of #observedMean(:)#kg. Perform a test for whether the mean weight gain for this treatment, #mu#, is #?:string[tail](???*less than*???*more than*not equal to)# #nullMean#kg.", "index(0:6)#tail[](1,3,4)#meanDecimals(2)#valueName(weight gain)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)", null, 0);
addVariation("supermarketSpending", "A supermarket chain has reported that the average amount spent by customers nationally is $#nullMean[index](100,120,140,160,180,200)#.\\nIn a city centre supermarket from this chain, a sample of #sampleSize[](9,16,25,36)# shoppers had bills with standard deviation s = $#sd[](20,30,40)# and mean $#observedMean(:)#. Test whether the average amount spent by customers in that supermarket is #?:string[tail](???*less than*???*more than*different from)# the national average.", "index(0:5)#tail[](1,3,4)#meanDecimals(0)#valueName(amount spent)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)", null, 0);
addVariation("appleWeight", "The mean weight of Granny Smith apples produced in region was #nullMean[index](130,140,150)# grams in 2009.\\nIn the following year, #sampleSize[](9,16,25,36)# Granny Smith apples were randomly selected and their weights had standard deviation s = #sd[](20,30,40)# grams and mean #observedMean(:)# grams. Test whether the average apple weight is now #?:string[tail](???*less than*???*more than*different from)# #nullMean# grams.", "index(0:2)#valueName(apple weight)#meanDecimals(0)#conclusions(There_is_no_evidence_that_H%sub1%_is_true There_is_only_weak_evidence_that_H%sub1%_is_true There_is_moderately_strong_evidence_that_H%sub1%_is_true There_is_very_strong_evidence_that_H%sub1%_is_true It_is_almost_certain_that_H%sub1%_is_true)#tail[](1,3,4)", null, 0);

//----------------------------------------------

