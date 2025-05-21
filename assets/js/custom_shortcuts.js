document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'f' and no modifier keys are active
  if (event.key === 'f' && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    // Prevent the default action for the key press
    event.preventDefault();

    // Attempt to find the HTML element
    const foodLink = document.querySelector("a[href='/food']");

    if (foodLink) {
      // Simulate a click on the element
      foodLink.click();
      console.log("Food tab shortcut pressed, element found and clicked.");
    } else {
      console.log("Food tab shortcut pressed, element a[href='/food'] not found.");
    }
  }
});
