// script.js

$(document).ready(function() {
    // Smooth scroll for navbar links
    $('a.nav-link').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Contact button click event
    $('#contactButton').click(function() {
        window.location.href = 'https://getform.io/f/your-form-id';
    });
    $(document).ready(function() {
        // Load the modal content from the external file in the components folder
        $('body').append('<div id="modal-placeholder"></div>');
        $('#modal-placeholder').load('./components/form.html');

        // Form submission validation
        $(document).on('submit', '#contactForm', function(event) {
            if (!$('#consentCheckbox').is(':checked')) {
                alert('You must agree to the terms and conditions before submitting.');
                event.preventDefault();
            }
        });
    });

    // What We Do section hover effect
    $('#what-we-do .card').hover(
        function() {
            $(this).find('.card-body').addClass('fade-in').show();
        },
        function() {
            $(this).find('.card-body').removeClass('fade-in').hide();
        }
    );

    // Our Projects section click event
    const projectLinks = document.querySelectorAll('.project-link');
    const projectImage = document.getElementById('projectImage');

    function changeProject(imageSrc, element) {
        projectImage.src = imageSrc;

        // Remove active class from all project links
        projectLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked project link
        element.classList.add('active');
    }

    // Set the first project as active by default and display its image
    if (projectLinks.length > 0) {
        changeProject(projectLinks[0].getAttribute('data-image'), projectLinks[0]);
    }

    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            changeProject(imageSrc, this);
        });
    });
    

    // Company Growth section hover effect
    $('.growth-section').hover(
        function() {
            $(this).addClass('highlight');
        },
        function() {
            $(this).removeClass('highlight');
        }
    );

    // Load slider content
    $('#slider-container').load('components/slider.html');
});
