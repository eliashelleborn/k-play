# K-Play
Live: https://kplay-g2.netlify.com/

Yrgo project made by [Elias Johansson](https://github.com/eliasjohansson) and [Sofia Garcia Rashid](https://github.com/sof1agarc1a).

### Run locally
Requires Firebase credentials to run locally.

```ssh
  $ npm install
  $ npm start
```
## Review from group 1

1.  Comments are needed. Especially for us looking at this with fresh eyes.
2.  pages/Home/index.js is very messy, you could put the array of objects in .JSON files somewhere to get it more managable.
3.  Menu is a little bit crowded too, alot of styled-components, maybe break out some code into seperate components.
4.  Remove console.log eg. /components/Player/index.js
5.  Long files ListHomeCard/index.js, makes it hard to read.
6.  alot of repetitive font-size declarations, since youre using global style and themeprovider maybe its better to declare global values for paragraphs and headers. 
7.  98 declarations of media queries in 29 files, try to put components into their own files.
8.  .prettierrc have different tab length than the other files.
9.  Const Layout should be in a seperate file instead of part of App.js
10. Player.js is long, and hard to read.
11. In ListHomeCard there is 5 different targets of button:nth-child(n) following each other. Try to make it more readable and easier to adjust.
12. List/index.js is not really a react component, but two different css styles
13. Modals/Share.js you target elements with "> div div button", and it's hard to see what it target when the file is as long as it is.
14. You import icons different throughout the project, by deconstructing from index.js and directly from the component. Try to stick to one and only.
15. Naming your components Share and Share2 is not a good practice.
16. There are alot of files that are long and very hard to read. You tend to use Styled versions of different components in the same file and much of the css is repeated. Try to make more components or make them more dynamic so you can re-use the code more.
17. Based on the same problems there is some advanced targeting in the css and overwriting css written earlier. 
18. Make use of more html-elements, there are more than only div; section, article, main. Can make the html tree more readable.
19. You left almost all the alt="" empty, for more accessibility on the web please use these.
20. LightGrey in theme is not being used
21. Graphql is listed in dependencies but is not being used,

