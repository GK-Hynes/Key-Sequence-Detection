# Key Sequence Detection

A page made to practice working with key sequence detection, in this case the Konami code. Built for Wes Bos' [JavaScript 30](https://javascript30.com/) course.

![Screenshot of key sequence detection page, with Konami logo](https://res.cloudinary.com/gerhynes/image/upload/v1515946849/Screenshot-2018-1-14_Key_Detection_2_hfubj8.png)

## Notes

Create an empty array, `pressed`.
Create a secret code, here the Konami code.

Listen for the keyup event on the window. Log `e.key` to record the key that was pressed.

Whenever someone presses a key push its value into the `pressed` array.

Splice the array elements, starting from the end, and only take the amount needed to trigger the secret code.

```js
pressed.splice(-secretCode.length, pressed.length - secretCode.length);
```

Turn the array into a string and check if it includes the secret code.

At this stage run something fun, for example cornify.js to add unicorns and rainbows.

```js
if (pressed.join("").includes(secretCode)) {
  console.log("DING DING!");
  cornify_add();
}
```

### Personal refactor

Since cornify.js does not use https you may run into problems.

One alternative is to show a gif when the secret code is entered.

Here the logo, keycode and (initially hidden) gif are selected. Then a function, `replaceLogo`, is run. This function adds classes of hidden to the standard logo and keycode and active to the secret gif, which sets the standard logo and keycode to `display: none;` and the secret gif to `display: block;`
