
// It took me of hours trial and error to get this working the way I wanted! It looks simple now. 
// Got some good info from https://www.tutorialspoint.com/javascript/javascript_dialog_boxes.htm

function getConfirmation()
{
var username = document.getElementById("username").value
var email = document.getElementById("email").value
var message = document.getElementById("message").value;

var confirmation = confirm("You have entered the following information,\n\nName: "+username+"\nEmail: "+email+"\nMessage: "+message+"\n\nIf this is correct please click OK. \nAlternatively, please click CANCEL to re-enter your information. ");
if(confirmation == true ) 
				{showAlert1();
			}
else 
				{showAlert2();
            }
}

function showAlert1(){
alert("\nThanks. We'll be in touch soon!");
window.location ='contact.html';
}

function showAlert2(){
alert("\nYour information has not been sent. Please try again.");
}




/*
Function below from www.toddmotto.com - responsive ready and javascript detection
*/

(function() {
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
	}
	
	// Fallback for required attribute
	if(!supports.required) {
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
	}	
}
)




//sticky footer option- /*editted from Curtis Griffin https://codepen.io/griffininsight/pen/OMexrW */
document.createElement('header'); 
document.createElement('footer'); 
document.createElement('section'); 
document.createElement('article'); 
document.createElement('aside'); 
document.createElement('nav');





//social media in footer - https://stackoverflow.com/questions/18032220/css-change-image-src-on-imghover

function hover(footer_top) {
  footer_top.setAttribute('src', 'images/new_social_bar_hover.PNG');
}

function unhover(footer_top) {
  footer_top.setAttribute('src', 'images/new_social_bar.PNG');
}

