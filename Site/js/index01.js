	function validate(forma)
	{
	x = document.getElementById("registrationBlock").getElementsByTagName("span");
	for (var i=x.length-1; i>=0; i--)
	{
		x[i].parentNode.removeChild(x[i]);
		//console.log(i)
	}
	//console.log(forma.ima)
	
	var ima = isFullText(forma.ima);
	var family = isFullText(forma.family);
	var login = isCorrectLogin(forma.login);
	var pass1 = isCorrectPass1(forma.pass1);
	var pass1pass2 = isCorrectPass1Pass2(forma.pass1,forma.pass2);
	var mail = isCorrectMail(forma.mail);
	//return false;
	return ima && family && login && pass1 && pass1pass2 && mail;
	}
	
	function isFullText(text)
	{text.style.backgroundColor = "white";
		//console.log(text);
		if (text.value == "")
		{
			var item = document.createElement("span");
			item.innerHTML = "<br>Поле не должно быть пустым.";
			text.style.backgroundColor = "#72E2D4";
			text.parentNode.appendChild(item);
			return false;
		}
		return true;
	}
	
	function isCorrectLogin (text)
	{
		var reg = /\w/gi;
		var array = text.value;
		text.style.backgroundColor = "white";
		for (var i = 0; i < array.length; i++)
		{
			var regTesting = reg.test(array[i]);
			if (regTesting == false)
			{
				var item = document.createElement("span");
				item.innerHTML = "<br>В логине могут быть только цифры и буквы латинского алфавита.";
				text.style.backgroundColor = "#72E2D4";
				text.parentNode.appendChild(item);
				return false;
			}
			return true;
		}
		if (text.value == "")
		{
			var item = document.createElement("span");
			item.innerHTML = "<br>Поле не должно быть пустым.";
			text.style.backgroundColor = "#72E2D4";
			text.parentNode.appendChild(item);
			return false;
		}
		return true;
		
	}
	
	function isCorrectPass1(text)
	{
		var num = text.value;
		var item = document.createElement("span");
		if (num =="")
		{
			item.innerHTML = "<br>Поле не должно быть пустым.";
			text.style.backgroundColor = "#72E2D4";
			text.parentNode.appendChild(item);
			return false;
		}
		else if (num.length<=6)
		{
			//console.log(num);
			
			item.innerHTML = "<br>Пароль должен быть более, чем 6 символов.  ";
			text.style.backgroundColor = "#72E2D4";
			text.parentNode.appendChild(item);
			return false;
		}
		return true;
	}
				
	function isCorrectPass1Pass2(text1,text2)
	{
		var item1 = document.createElement("span");
		var item2 = document.createElement("span");
		
		if (text2.value == "")
		{
			item2.innerHTML = "<br>Поле не должно быть пустым.";
			text2.style.backgroundColor = "#72E2D4";
			text2.parentNode.appendChild(item2);
			return false;
		}
	
		else if (text1.value !== text2.value)
		{
			item2.innerHTML = "<br>Пароль и повтор пароля должны совпадать:)";
			text2.style.backgroundColor = "#72E2D4";
			text2.parentNode.appendChild(item2);
			return false;
		}
		return true;
	}
	
	function isCorrectMail(text)
	{
		var reg = /\w+@\w+\.[a-z]{2,3}/gi;
		var array = text.value;
		text.style.backgroundColor = "white";
		var regTesting = reg.test(array);
			if (text.value == "")
			{
				return true;
			}
			else if (regTesting == false)
			{
				var item = document.createElement("span");
				item.innerHTML = "<br>E-mail записан неверно:)";
				text.style.backgroundColor = "#72E2D4";
				text.parentNode.appendChild(item);
				return false;
			}
		return true;
	}
	

