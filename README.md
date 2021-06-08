# [Rick and Morty - The memory game](https://acommentucci.github.io/memory-game/)
# Intro
This is the II Milestone Project for Code Institute Full Stack Developer Course.  It's based on HTML, CSS and Javascript.

![](./assets/img/Am_I_Responsive_screenshot.png)

**A live demo can be found [here](https://acommentucci.github.io/memory-game/)**

# Table of Contents
-  Intro
-  Description
-  UX
   -  User Stories
   -  Strategy
   -  Scope
   -  Structure
   -  Skeleton
   -  Surface 
-  Features
   -   Features to implement
-  Technologies
   - Frameworks
   - Libraries and programs
   - Other resources
-  Testing
   - User stories Testing
   - Website Testing
-  Project barrier and solutions
-  Deployment
-  Credits

# Description
It's a memory card game based on the animated series "Rick and Morty" wich I love. The game consists of guessing where the matching pairs of cards are hidden in the shortest possible time and using the least number of attempts. The images of the cards are those of the characters from the animated series.

# UX
## User Stories
- As a visitor, I want to:
    - have fun playing a simple and straightforward card memory game.
    - know what's the story behind this game? What's "Rick and Morty"?;
    - know what are the rules to play the game;
    - play different level, challenging myself to solve the game quicker;

## Strategy
The game was designed to be simple and straightforward. I've given up on adding sound effects to make the experience as friendly as possible. I want the visitor to be able to start playing immediately and have another chance easily when the game is over.
## Scope
The website is meant to be a familiar environment for those who already know the *Rick and Morty* tv show. The fan will be able to grasp references to the various characters, for example in the choice of difficulty levels, and references to the animated series. For visitors who ignore the show, however, it will be possible to have fun playing and, if desired, learn more about the contents of the sci-fi cartoon.
## Structure
The structure is the same for each device. It opens on the main page where you immediately understand the content of the game.
The user has two choices through two buttons: "How to play" or "START". 
Depending on your choice, three different panels will open with the home page remaining on the opaque background.
Once the player starts the game he will have a number of cards proportionate to the chosen difficulty level. A timer and an attempts counter will be visible.
At the end of the game, a summary panel will be displayed your result.
## Skeleton
[Desktop wireframes](./assets/wireframes/memory_game_desktop_wireframes.pdf)

[Mobile wireframes](./assets/wireframes/memory_game_mobile_wireframes.pdf)
## Surface
![color palette](./assets/rick_and_morty_palette.png)
The colors chosen for the project were selected from the cover image of the series and represent the colors of space science fiction with that pulpy and slightly hallucinatory taste typical of *Rick and Morty*.

From [Free fonts vault](https://freefontsvault.com/) I was able to download the typical font from the series "Get Schwifty Font" and use it in my project along with the more user friendly "Roboto".

# Features
The background image changes depending on whether the game is displayed on a smartphone or desktop.

There are three different levels of difficulty.

The time taken by the player to finish the game is calculated.

At any time during the game, you can exit the game by clicking on the outside of the modal or on the cross at the top right. In this way the game and the timer will be reset ensuring a user friendly experience.

All the cards have been chosen from among the most beloved characters of the animated series.

## Features to implement
A ranking of the best player performances

# Technologies
## Languages
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/CSS)
## Frameworks, Libraries & Programs
-   [Google Fonts:](https://fonts.google.com/)
    -   Google fonts were used to import "Lobster" fonts.
-   [Font Awesome:](https://fontawesome.com/)
    - Used for providing icons.
-   [Git:](https://git-scm.com/)
    - Version Control.
-   [GitHub:](https://github.com/)
    - Save the project online.
-   [Balsamic:](https://balsamiq.com/)
    - Design the wireframes
-   [AmIResponsive:](http://ami.responsivedesign.is/)
    - Check the responsiveness of the website.
-   [Coolors:](https://coolors.co/)
    - Color scheme generator.

## Other Resources
- [YouTube](https://www.youtube.com/)
- [W3Schools](https://www.w3schools.com/)
- [Stack-Overflow](https://stackoverflow.com/)
- [CSS-Tricks](https://css-tricks.com/)
# Testing
## User Stories Testing
- As a visitor, I can:
    - have fun playing a *Rick and Morty* theme memory card game;
    - understand the rules of the game very easily by clicking on how to play button;
    - play directly by clicking on Start;
    - Play three different levels of the game, Easy(12 cards), Medium(16 cards), Hard(20 cards);
## Links
-  I checked that the button on the home page work correctly, both "How To Play" and "Start.
-  I checked that the three difficoult level cards links work correctly.
-  I checked that the exit button in each one of the modal works correctly and clicking outside the modals reset the game as well.
## Responsive Design
- Tested responsiveness of the wireframe using Dev Tools and confirmed basic structure looks and works well on all mobile decides from 320px, up to desktop size.
## HTML Validator
I ran [HTML Validator](https://validator.w3.org/) and there were no errors.
## CSS Validator
The [CSS Validator](https://jigsaw.w3.org/css-validator/) did not find any errors.
## CSS Autoprefixer
Ran CSS through [Autoprefixer](https://autoprefixer.github.io/) and copied new CSS code back into style.css doc.
## Grammar and spelling
ran the readme.md and the website content through [online-spellcheck](https://www.online-spellcheck.com/).
## Lighthouse
The Lighthouse Test  gave the following results:
-  Performance: 98
-  Accessibility: 93
-  Best Practices: 100
-  SEO: 89
# Project barrier and solutions
Where to write the cards - One of the first problems I encountered in planning the project was whether to insert the memory game cards in the Html code or in the Javascript. I looked at several tutorials and they were shown both ways. So I asked the Stack Overflow community and decided to put my cards in the Javascript document as it seemed to be the most consistent and clean choice.

How to install a custom font - I've never added a font family to my designs anywhere other than Google's fonts but, for this specific project, I found a free custom font that was Rick and Morty's original graphic design. I found out how to use the "@ font-face" function in CSS. I also used a [webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator) to make the font compatible with various browsers.

Selecting the n child of an element :nth-child()

After built two different modal I had to make it work with javascript. Close icon working for both modals. Gave the close button two different Ids.

reset game

creating board

# Deployment
# Credits
All images were taken from [Rick and Morty Fandom website](https://rickandmorty.fandom.com/wiki/Rickipedia), except for the background photo that is from [Wallpaper Cave](https://wallpapercave.com/w/wp5015262)

I used [Adobe Photoshop Express](https://photoshop.adobe.com/) to resize the images to 100px width and 178px height cards