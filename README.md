# Flashcards Project

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This application is a quiz-style game that runs in the terminal. The user is prompted to select an answer from a list of multiple choices for each of the set of 30 questions. The user recieves feedback on the accuracy of each answer. At the end of all questions, the user recieves a "round over" message that includes a percentage of their accurate answers and total time elapsed to complete the quiz. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository.
2. Clone your new, forked repo to your local machine.
3. `cd` into the project's parent-level repository on your local machine for all of the following:
- Run `npm install` in your terminal.
- Run `node index.js` in your terminal to start the quiz.
- Run `npm test test/<test-file-name>` in your terminal to run a unit test.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

<img width="1350" alt="flashcards_pg1" src="https://user-images.githubusercontent.com/108169988/195733354-838c8cc5-8a63-4338-bfc1-b474e940a288.png">
<img width="1350" alt="flashcards_pg2" src="https://user-images.githubusercontent.com/108169988/195733369-e2adadf1-69e9-4d86-a97f-040f2f78e0e8.png">

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

This project was an assignment for the first week of the second module of Turing's front-end software engineering program. I spent approximately 8 hours completing it. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

[Sam Rice](https://github.com/sam-rice)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

The learning goals of this project included learning to write unit tests (with Mocha/Chai, specifically), learning to integrate added functionality with a pre-existing codebase, programming a terminal-based application, and continuing to refine workflow/styling of "vanilla" JavaScript (class-to-class interactions, especially).

### Wins & Challenges
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

- The biggest challenge I faced while making this project was getting a handle on how the various utility files, datasets, class sheets, etc. were interconnected. This was the first project of the program in which we were required to build an application that runs in the terminal, and as a result, I had to trial-and-error a handful of different debugging methods throughout the project. Ultimately, that process gave me a few new tools to try in the future.

- One "win" I experienced came from debugging the `.endRound()` method in the `Round` class. I couldn't get the "round over" message to display at the end of the round, and initially thought the method was never being invoked due to a condition never being met in `util.js`, which is a file that was pre-written and includes syntax that we haven't learned yet. After spending time researching/testing how different pieces of `util.js` worked, I realized I'd forgotten a `console.log()` in the `.endRound()` method. I wasn't used to being in situations where a missing `console.log()` would make a difference in an app's functionality, since I've mostly used `console.log()`s for debugging when working with the DOM/browser console. Despite spending time trying to debug what ended up being a pretty simple syntax error, the experience gave me an oppurtunity to dive into some of the syntax that we'll be learning later on in the program.

