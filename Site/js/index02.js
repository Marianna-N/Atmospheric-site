	var imageArray = [
	"images/bracelets/bracelet_01.jpg",
	"images/bracelets/bracelet_02.jpg",
	"images/bracelets/bracelet_03.jpg",
	"images/bracelets/bracelet_04.jpg",
	"images/bracelets/bracelet_05.jpg",
	"images/bracelets/bracelet_06.jpg",
	"images/bracelets/bracelet_07.jpg",
	"images/bracelets/bracelet_08.jpg"
	];	
	var counter = 0;
	var imageCount = imageArray.length;
	window.onload = function()
			{
				gallery(imageArray[0]);
			}
	function gallery(obj)
	{
		var images_block = document.getElementById("images_block");
		var tmp = "<img src='"+obj+"' alt='image'>";
		images_block.innerHTML = tmp;
		document.getElementById("num_img").innerHTML = counter + 1 + '/' + imageCount;
		//console.log(tmp);
	}
	function flipping(num)
	{
		if(num == 1)
		{
			if(counter < imageCount - 1)
			{
				counter++;
				gallery(imageArray[counter]);
				document.getElementById("num_img").innerHTML = counter + 1 + '/' + imageCount;
				console.log(counter);
				console.log(imageCount);
			}
			else if(counter == imageCount - 1)
			{
				counter=0;
				gallery(imageArray[0]);
			}
		}
		else
		{
			if(counter > 0)
			{
				counter--;
				gallery(imageArray[counter]);
				document.getElementById("num_img").innerHTML = counter + 1 + '/' + imageCount;
			}
			else if(counter == 0)
			{
				counter=imageCount-1;
				gallery(imageArray[imageCount-1]);
			}
			
		}		
	}