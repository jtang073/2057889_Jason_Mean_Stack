var cartValuea = 15;
var itemJsona = [];
function addData(item, price) {
    itemJsona.push(item);
    var quantity = 0;
    if (sessionStorage.length > 0) {
        for (var i = 0; i < sessionStorage.length; ++i) {
            var tempJson = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
            if (tempJson.item == String(item)) {
                quantity = tempJson.quantity;
            }
        }
    }
    ++quantity;
    var tempString = "{\"item\": \"" + item.toString() + "\", \"price\": \"" + price.toString() + "\", \"quantity\": \"" + quantity.toString() + "\"}";
    sessionStorage.setItem(String(item), tempString);
    updateCart();
}
function updateCart() {
    var cartTotal = 0;
    for (var i = 0; i < sessionStorage.length; ++i) {
        var tempJson = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        cartTotal += parseInt(tempJson.quantity);
    }
    document.getElementById("cartValue").innerHTML = String(cartTotal);
}
function displayData() {
    document.write("<div style=\"margin-top: 150px; text-align: center\"><div><b style=\"font-size:48px;\">Checkout</b><br/><br/><br/><p style=\"color: blue; font-size: 28px;\">Cart</p><center><table border=2px style=\"text-align: center; font-size: 28px;\"><tr><td>Item</td><td>Price</td><td>Quantity</td></tr>");
    var totalCost = 0;
    for (var i = 0; i < sessionStorage.length; ++i) {
        var tempJson = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        document.write("<tr><td>" + tempJson.item);
        document.write("<td>$" + tempJson.price);
        document.write("<td>" + tempJson.quantity + "<tr/>");
        totalCost += Number(tempJson.price * tempJson.quantity);
    }
    document.write("</table><br/><p style=\"font-size: 28px\"> Total Cost: $" + totalCost + "</p><input type=\"button\" value=\"Back\" style=\"margin-right: 345px; font-size: 18px;\" onclick=\"window.location='cmIndex.html';\"/></center></div></div>");
    return true;
}
