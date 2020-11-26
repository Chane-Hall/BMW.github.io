var emailValue = document.getElementByName("email").value;
var cardValue = document.getElementByName("cardn").value;
var expValue = document.getElementByName("experationdate").value;
var secureValue = document.getElementByName("security").value;
var button = document.getInputsByValue("Submit");
var emailField = document.getElementByName("email");
var cardField = document.getElementByName("cardn");
var expField = document.getElementByName("experationdate");
var secureField = document.getElementByName("security");


//Test if the email field is empty and validate:
emailField.onblur = function () 
{
if (emailValue.include("@")) 
	{ emailM.innerHTML } 
else 
	{ emailMessage.innerHTML = "Email must include \"@\""; 
	return false;}
if (emailValue === "") 
		{ emailM.innerHTML = "Email field is empty!"; //id inside <p>
}
};

//Test if the card number field is empty:
cardField.onblur = function () 
{
if (cardValue === "") 
		{ cardM.innerHTML = "Card number field is empty!"; //id inside <p>
}
};

//Test if the Experation date field is empty and if card has expired:
expField.onblur = function () 
{
	var year = expValue.substring(0, 4);
	var year = expValue.substring(5, 6);
	if (year < getFullYear() && month < getMonth())
	{
		expM.innerHTML = "Your card has expired!";
	}
if (expValue === "") 
		{ expM.innerHTML = "The Experation date field is empty!"; //id inside <p>
}
};

//Test if the Security code field is empty:
secureField.onblur = function () 
{
if (secureValue === "") 
		{ secM.innerHTML = "Security code is empty"; //id inside <p>
}
};

// submit if:
button.onclick = function () { 
	if (secureValue === "" || expValue === "" || cardValue === "" || emailValue === "")
		return false;
	else
		document.getElementByValue("Submit").submit();
};








