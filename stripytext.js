  var stripy = function (element, stripes) {

    element.style.position = "relative";
    element.style.display = "block";

    var text = element.innerHTML;

    var newstripe = function (size, name) {

      var stripe = document.createElement("span");

      stripe.setAttribute("data-stripe", name);

      stripe.style.position = "absolute";

      stripe.style.height = size + "%";

      stripe.style.overflow = "hidden";
      
      stripe.innerHTML = text;

      return stripe;

    };

    var percent = 100 / stripes;

    var current = 0;

    var i = 0;

    while (current < 100) {

      current += percent;

      current = Math.floor(current);
      element.insertBefore(newstripe(current, i), element.firstChild);
      
      i += 1;

    };

  };