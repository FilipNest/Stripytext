# Stripytext

Stripytext is a little bit of JavaScript that gives your HTML font stripes. It should work with any font/style. You choose the amount of stripes and the colours. You should even be able to animate them.

![Stripytext](http://filipnest.com/stripytext/demoimage.png)

No other libraries are necessary. Just add the stripytext.js file to your page. I've uploaded it to my server if you don't want to download such a silly thing before trying it:

```HTML

<script src="http://filipnest.com/stripytext/stripytext.js"></script>

```

Then give an element stripes by passing in the HTML element plus a number of stripes you want to the stripy() function.

```Javascript

stripy(document.querySelector("h1"), 8);

```

You can then do what you want with the stripes such as style them individually with CSS. For simple selecting they've all got unique data-stripe attribute numbers. Animating the colour changes with CSS transitions could be fun so I've left the colour choosing up to you.

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
  
That's it. It's probably buggy as it's just a doodle done in an evening but if you want to improve it just put in a pull request or shout at me.

If you make something pretty, please let me know as I'd love to see it.
