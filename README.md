# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

Desktop window size:
![Desktop Size Solution](./images/readme/desktop-normal.png)
![Desktop Size Solution](./images/readme/desktop-active.png)
![Desktop Size Solution](./images/readme/desktop-new.png)

Mobile window size at the top of the page:
![Mobile Size Solution](./images/readme/mobile-normal.png)
![Mobile Size Solution](./images/readme/mobile-active.png)
![Mobile Size Solution](./images/readme/mobile-new.png)

### Links

- Solution URL: [My solution URL](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub/interactive-rating-component-pindB_kto)
- Live Site URL: [My product URL](https://puppychan.github.io/InteractiveRating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

I learned how to use flex box fluently, as well as using clamp() to adjust responsive easier, and Javascript to display and undisplay the cards. Secondly, I also learned how to check if the element is currently displayed.

To see how you can add code snippets, see below:

```html
    <div class="card hide"><\div>
```
```css
.proud-of-this-css {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;

  font-size: clamp(3em, 1.5vw, 5em);
}
.card.hide {
    display: none;
}
```
```js
//display
document.querySelector('.card').classList.remove('hide');
//hide
document.querySelector('.card').classList.add('hide');
//check if current element is displayed
if (window.getComputedStyle(x).display !== "none") // while x is that element
```

### Continued development

I will create multiple cards like this and display in a grid in future.

## Author

- Website - [Tran Mai Nhung](https://github.com/Puppychan)
- Frontend Mentor - [@Puppychan](https://frontendmentor.io/profile/Puppychan)
