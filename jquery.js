  $(document).ready(function(){
      var textArray = ['Front-End Developer', 'Creative Coder', 'Web Designer'];
      var currentIndex = 0;
      var currentChar = 0;
      var isDeleting = false;
      var typingSpeed = 100; // Typing speed in milliseconds

      function typeText() {
          // Select the current text
          var currentText = textArray[currentIndex];

          // Update the visible part of the text
          $('#type-it').text(currentText.substring(0, currentChar));

          // Adjust typing speed for the next frame
          var speed = typingSpeed;

          if (isDeleting) {
              speed /= 2; // Speed up deletion
          }

          // Typing or Deleting logic
          if (!isDeleting && currentChar < currentText.length) {
              currentChar++;
          } else if (isDeleting && currentChar > 0) {
              currentChar--;
          } else {
              // Change the direction (start deleting or typing the next string)
              if (!isDeleting) {
                  speed = 2000; // Pause at the end of typing
                  isDeleting = true;
              } else {
                  isDeleting = false;
                  currentIndex = (currentIndex + 1) % textArray.length; // Cycle through the textArray
              }
          }

          // Continue typing/deleting
          setTimeout(typeText, speed);
      }

      // Start typing
      typeText();
  });

  $(document).ready(function(){
    var owl = $(".owl-carousel");

    // Initialize the Owl Carousel
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        loop: true,
        margin: 24,
        nav: false, // Enable navigation buttons (previous/next)
        dots: true, // Enable dots
        responsive: {
            0: {
                items: 1 // 1 slide on mobile devices
            },
            768: {
                items: 2 // 2 slides on tablets
            },
            1024: {
                items: 3 // 3 slides on desktops
            }
        }
    });

    // Custom dot styling (Optional: Can modify in CSS instead)
    $(".owl-dot").each(function(index) {
        $(this).html("<span></span>"); // Add span inside each dot for styling
    });
});


$(document).ready(function() {
    // Flag to check if the counter has been animated
    let counterAnimated = false;

    // Function to animate the counter
    function animateCounters() {
        if (!counterAnimated) {
            $('.a-count').each(function() {
                const $count = $(this).find('.count');
                const endCount = $(this).data('count');
                let currentCount = 0;

                // Animate the count
                const interval = setInterval(function() {
                    if (currentCount < endCount) {
                        currentCount++;
                        $count.text(currentCount.toLocaleString()); // Add comma for thousands
                    } else {
                        clearInterval(interval);
                    }
                }, 1); // Adjust speed by changing the interval time (ms)
            });
            counterAnimated = true; // Prevent re-animation
        }
    }

    // Scroll event
    $(window).scroll(function() {
        const offset = $('.row').offset().top; // Get the offset of the row
        const windowScroll = $(window).scrollTop() + $(window).height(); // Current scroll position

        // Check if the user has scrolled to the divs
        if (windowScroll > offset) {
            animateCounters();
            $(window).off('scroll'); // Unbind the scroll event
        }
    });
});