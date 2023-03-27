function addingEventListener() {
    const input = document.getElementById('button');
  
    // Example 1: using an anonymous function as the event handler
    input.addEventListener('click', function() {
      alert('I was clicked (Example 1)!');
    });
  
    // Example 2: using a named function as the event handler
    function clickAlert() {
      alert('I was clicked (Example 2)!');
    }
    input.addEventListener('click', clickAlert);
  }