function processJSON(){
	var rawFile=new XMLHttpRequest();

	var allText ='';
	rawFile.onreadystatechange = function ()
	{
	if(rawFile.readyState === 4)
	{
    if (rawFile.status === 200 || rawFile.status == 0)
	{
	allText = rawFile.responseText;
	alert(allText);
	}
	}
	}
	rawFile.send(null);
	

	
	
}