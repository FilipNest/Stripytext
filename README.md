# Stripytext

Stripytext is a little bit of JavaScript that gives your HTML fonts stripes without the use of images, SVG, canvas or such. It should work with any font/style. You choose the amount of stripes and the colours (feel free to go **epic** and use it for making gradients). You should even be able to animate the stripes using CSS transitions or whatever else you want just by targetting them with CSS or JavaScript. The stripes will scale with the font size dynamically and shouldn't get lost if you do CSS transforms or other things to them. The extra HTML bits that are added to make the stripes are hidden for users of screenreaders as it'd be annoying if they weren't.

![Stripytext](http://filipnest.com/stripytext/demoimage.png)

No other libraries are necessary. Simply add the stripytext.js file to your page. I've uploaded it to my server if you don't want to download such a silly thing before trying it:

```HTML

<script src="http://filipnest.com/stripytext/stripytext.js"></script>

```

Then give an element stripes by passing in the HTML element (however you want to select it: pure JavaScript, jQuery...) plus a number of stripes you want to the stripy() function.

```Javascript

stripy(document.querySelector("h1"), 8);

```

You can then do what you want with the stripes such as style them individually with CSS. For simple selecting they've all got unique data-stripe attribute numbers.

```CSS

  h1 [data-stripe="1"] {
    color: orange;
  }
  
  h1 [data-stripe="2"] {
    color: green;
  }
  
  h1 [data-stripe="3"] {
    color: blue;
  }
  
  h1 [data-stripe="4"] {
    color: indigo;
  }
  
  h1 [data-stripe="5"] {
    color: violet;
  }
  
  h1 [data-stripe="6"] {
    color: white;
  }
  
  h1 [data-stripe="7"] {
    color: black;
  }
  
  ```
  
That's it. It's probably buggy as it's just a doodle done in an evening but if you want to improve it put in a pull request or shout at me.

If you make something pretty, please let me know as I'd love to see it.
