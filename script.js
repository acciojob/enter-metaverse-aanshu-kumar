//your JS code here. If required.

function enter()
{
	let status=document.getElementById("status");
	let heading=documet.createElement("h1");
	heading.textContent=status.textContent;
	status.parentNode.replaceChild(heading, status); 

}