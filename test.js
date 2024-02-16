// Function to handle when the tab becomes hidden
function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      // Tab is hidden, reopen the same webpage
      window.open(location.href, '_blank');
    }
  }
  //prevents to use the inspect key
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
  //prevents to use the developer option
  function handleKeyDown(event) {
    // Check if Ctrl+Shift+I is pressed
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73) {
      // Prevent the default behavior
      event.preventDefault();
      // Optionally, you can also display a message to the user
      alert("Developer tools are not allowed!");
    }
  }

  // Add event listener to detect keyboard shortcuts
  document.addEventListener("keydown", handleKeyDown);


  // Function to handle beforeunload event
  function handleBeforeUnload(event) {
    // Cancel the event to prevent tab from closing
    event.preventDefault();
    // Open a new tab with the same webpage
    window.open(location.href, '_blank');
  }

  // Prevent tab switching or browser minimization
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Prevent browser close
  window.addEventListener("beforeunload", handleBeforeUnload);