function addData() {

	let cName = document.getElementById("cName").value;
	let pName = document.getElementById("pName").value;
	let budget = document.getElementById("budget").value;
	let tempString = "{\"cName\": \"" + cName.toString() + "\", \"pName\": \"" + pName.toString() + "\", \"budget\": \"" + budget.toString() + "\"}";
	sessionStorage.setItem(String(cName), tempString);
	alert("Successfully added new budget!");
	return true;
}

function displayData() {
	document.write("<div style=\"margin-top: 150px; text-align: center\"><div><b style=\"font-size:48px;\">Finance Teams</b><br/><br/><br/><p style=\"color: blue; font-size: 28px;\">Annual Budget</p><center><table border=2px style=\"text-align: center; font-size: 28px;\"><tr><td>Client Name</td><td>Project Name</td><td>Budget</td></tr>")
	let totalBudget = 0;
	for (let i = 0; i < sessionStorage.length; ++i) {
		let tempJson = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
		document.write("<tr><td>" + tempJson.cName);
		document.write("<td>" + tempJson.pName);
		document.write("<td>$" + tempJson.budget + "<tr/>");
		totalBudget += parseInt(tempJson.budget);
	}
	document.write("</table><br/><p style=\"font-size: 28px\"> Total Budget: $" + totalBudget + "</p><input type=\"button\" value=\"Back\" style=\"margin-right: 345px; font-size: 18px;\" onclick=\"window.location='teamFinanceIndex.html';\"/></center></div></div>");
	return true;
}