$(document).ready(function () {
  $(".collapsible-tab").each(function () {
    var $tab = $(this);
    if (!$tab.find(".collapsible-tab__text").length) {
      $tab.parents(".product-block--collapsible-tab").hide();
    }
  });

  $(".moreless-button").click(function () {
    $(this).prev(".moretext").slideToggle();
    if ($(this).text() == "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });
  // Pageloader
  $(".page-loader").fadeOut(1000);

  ////// Product Shippinig variant /////

  window.onload = function () {
    // Assuming you have an element with the attribute data-default-shipping
    const FormElement = document.querySelector("[data-product-form]");
    const defaultShipping = FormElement.getAttribute("data-default-shipping");

    // Append the shipping time to another div
    const shippingTimeElement = document.querySelector(
      ".shipping-text-dynamic .key-details__wrapper p"
    );
    shippingTimeElement.textContent = defaultShipping;
  };

  const shippingMetafieldWrap = document.querySelector(
    ".shipping-metafield-wrap"
  );
  const childSpans = shippingMetafieldWrap.querySelectorAll("span");

  if (childSpans.length > 0) {
    // Add the JavaScript code here
    const spans = document.querySelectorAll(".shipping-metafield-wrap span");
    const inputs = document.querySelectorAll(
      ".options-selection__option-value-input"
    );

    spans.forEach((span) => {
      const variantTitle = span.getAttribute("data-variant-title");
      const shippingTime = span.textContent;

      inputs.forEach((input) => {
        const inputVal = input.value;

        if (variantTitle === inputVal) {
          input.setAttribute("data-shipping-time", shippingTime);
        }
      });
    });

    // Get all the radio buttons
    const radios = document.querySelectorAll(
      ".options-selection__option-value-input"
    );

    // Add an event listener to each radio button
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        // Get the checked radio button
        const checkedRadio = document.querySelector(
          ".options-selection__option-value-input:checked"
        );

        // Get the shipping time from the checked radio button
        const shippingTime = checkedRadio.getAttribute("data-shipping-time");

        // Append the shipping time to another div
        const shippingTimeDiv = document.querySelector(
          ".shipping-text-dynamic .key-details__wrapper p"
        );
        shippingTimeDiv.textContent = shippingTime;
      });
    });

    // Get the checked radio button on window load
    window.addEventListener("load", () => {
      const checkedRadio = document.querySelector(
        ".options-selection__option-value-input:checked"
      );
      if (checkedRadio) {
        // Get the shipping time from the checked radio button
        const shippingTime = checkedRadio.getAttribute("data-shipping-time");

        // Append the shipping time to another div
        const shippingTimeDiv = document.querySelector(
          ".shipping-text-dynamic .key-details__wrapper p"
        );
        shippingTimeDiv.textContent = shippingTime;
      } else {
        // Get the first radio button and append its shipping time to the div
        const firstRadio = document.querySelector(
          ".options-selection__option-value-input"
        );
        const shippingTime = firstRadio.getAttribute("data-shipping-time");
        const shippingTimeDiv = document.querySelector(
          ".shipping-text-dynamic .key-details__wrapper p"
        );
        shippingTimeDiv.textContent = shippingTime;
      }
    });
  } else {
  }

  ////// Product Shippinig variant /////
});

$(document).on(
  "change",
  ".options-selection__option-values input",
  function () {
    var Thisvalue = $(this).attr("value");

    if (Thisvalue == "Personalise") {
      $(".custom-product-attr").show();
    } else if (Thisvalue == "NoPersonalisation") {
      $(".custom-product-attr").hide();
    }
  }
);

(function () {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  }
  window.addEventListener("keydown", handleFirstTab);
})();
