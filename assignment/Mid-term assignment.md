### Question 1  Outline your project and which extensions you are building on to the template. (400 words)

>Your answer should include:
>Which of the templates you are extending and why have you chosen to do it. 
>What extensions have you chosen to do. You should include in your answer: any complex >coding techniques you will need to use, (such as arrays of objects, constructor functions, >nested looping); the complexity of the extension; and any expected challenges you will have >implementing it.

1. I'm using draw app template
2. I'm working on the below extensions:
   1. Rectangle tool
      1. draw an rectangle from one corner when mouse clicked until the other corner when mouse released
      2. one more constructor "rectangleTool.js"
   2. Ellipse tool
      1. draw an Ellipse with mouse. press "Shift" key to draw a circle
      2. one more constructor "ellipseTool.js"
   3. Text input
      1. p5js DOM
      2. input / button / element
      3. extra function "greet" to display the text input
   4. Eraser tool
      1. erase the painting by other tools
      2. size could be changed
      3. one more constructor
   5. change line width
      1. line width adjustment options, could be used by other tools such as rectangle tool, ellipse tool, lineToTool etc
      2. add controls in "helperFunctions.js", by default width 3 px.
   6. Upload Image
      1. upload image as background
   7. Extend stamp tool
      1. more brush in stamp tool
3. Found a potential bug: "saveCanvas" in HelperFunctins.js is not working well sometimes, the downloaded jpg file are full black. I've changed to "png" format and runs well so far.






### Question 2 Discuss the progress you have made on your project so far. (400 words)
>Your answer should include:
>What design work and research you have done while developing your extensions. You can include diagrams here in support of your answer. This might include but not be limited to: brainstorming, interface designs, code diagrams, and notes on the ideas and code.
>You don’t have to include everything you have done up to this point but try and be selective and select the best examples of your process.
>How much of the code have you written so far. What do you intend to do next?

I have researched Microsoft paint app and photoshop, and found out rectangle tool, ellipse tool, text tool, eraser is quite standard, and stamp tool with various brush is interesting. uploading image and do further graph adjustment is interesting as well.

the structure of the app is shown in the brain map

around 60% of the code has been written so far. I plan to finish the rest of project before the final submission.





### Question 3 Discuss how you will organize you time for the rest of the project. (200 words)
>Your answer should be based around a Gantt chart or other time organization process. You can easily make this in a spreadsheet program and export an image or take a screenshot for inclusion here. Any words on the diagram do not count towards the word count.
>If you use a Gantt chart should include the total time of the projects in weeks. You will also need to divide up the parts of your program and submission into activities for allocating time to on the chart.
>Your timescales should include progress to this point as well as afterwards.
>You should discuss how you have decided on the time you have allocated to each activity and why you have allocated these amounts of time.
>You should make reference to your chart to clarify the points you make here.

the progress is shown in the Gantt chart

I've mainly plan to process the rectangle tool, ellipse tool, text input tool and change line width in the first half, and leave eraser tool, upload IMG, extend stamp tool as the 2nd half. because I wish to finish the most part in the 1st half and less work on the 2nd half.

### Question 4 List any external sources that you have actively utilised in your project. 

No there's no external sources

### Question 5 Upload your work in progress project files as a zip. Please don’t use any other compression file formats.