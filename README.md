# Key Sequence Detection

A page made to practice working with key sequence detection, in this case the Konami code. Built for Wes Bos' [JavaScript 30](https://javascript30.com/) course.

![Screenshot of key sequence detection page, with unicorns](https://res.cloudinary.com/gerhynes/image/upload/v1515923608/Screenshot-2018-1-14_Key_Detection_rqryph.png)

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
