async function menuList(){

    //keeping this variable for readability
    let menuArray = await (await fetch("/Menu", { method: "GET" })).json();

    menuitem = document.getElementById("menulist");

    menuArray.forEach(drink => {
        menuitem.appendChild(document.createElement("br"));
        
        //create the radio button with attributes
        radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", drink.drink_name);
        radio.setAttribute("name", "menu_selection");
        radio.setAttribute("value", drink.drink_name);

        //create label for radio button
        label = document.createElement("label");
        label.setAttribute("for", drink.drink_name);
        label.appendChild(document.createTextNode(drink.drink_name + " Price: " + drink.drink_price));

        //append radio and label to form
        menuitem.appendChild(radio);
        menuitem.appendChild(label);
        
    });
}

//call the menu function
menuList();

