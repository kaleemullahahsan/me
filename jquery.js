$(document).ready(function(){
    $('.copyBtn').on('click', function() {
        var email = 'kaleemullahahsan0@gmail.com';

        // Create a temporary input element
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(email).select();

        // Copy the email to clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        tempInput.remove();

        // Change button text to 'Copied' while keeping the SVG intact
        $(this).html(`
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z"
                    stroke="#464455" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Copied
        `);

        // Optional: Reset the text and SVG back to 'Copy Email' after 2 seconds
        var button = $(this);
        setTimeout(function(){
            button.html(`
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z"
                        stroke="#464455" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Copy Email
            `);
        }, 2000);
    });
});
