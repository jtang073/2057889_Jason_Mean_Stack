function addBlog() {
	let title = document.getElementById("title").value;
	let article = document.getElementById("article").value;
	let image = document.getElementById("image").value;
    console.log(title);
    console.log(article);
    console.log(image);
    let tempMediaDiv = document.createElement("div");
    tempMediaDiv.setAttribute("class", "media");
    let tempIMG = document.createElement("img");
    tempIMG.setAttribute("class", "img-fluid");
    tempIMG.setAttribute("src", image);
    tempIMG.setAttribute("alt", image);
    tempMediaDiv.appendChild(tempIMG);
    let tempBodyDiv = document.createElement("div");
    tempBodyDiv.setAttribute("class", "media-body");
    let tempTitle = document.createElement("h5");
    tempTitleContent = document.createTextNode(title);
    tempTitle.appendChild(tempTitleContent);
    tempBodyDiv.appendChild(tempTitle);
    let tempArticle = document.createElement("p");
    tempArticleContent = document.createTextNode(article);
    tempArticle.appendChild(tempArticleContent);
    tempBodyDiv.appendChild(tempArticle);
    tempMediaDiv.appendChild(tempBodyDiv);
    let tempBreak = document.createElement("br");
    document.getElementById("mainBody").appendChild(tempBreak);
    document.getElementById("mainBody").appendChild(tempMediaDiv);

    alert("Successfully added new blog below!");
	return true;
}

