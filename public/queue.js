async function deleteOrder(id){
    await fetch("/Order/" + id, { method: "DELETE" });
}

async function orderList(){

    //keeping this variable for readability
    let orderArray = await (await fetch("/Order", { method: "GET" })).json();

    orderForm = document.getElementById("orderlist");

    orderArray.forEach(order => {

        //only give delete option to front of queue
        if(order == orderArray[0]){
            let label = document.getElementById("currentlabel");
            label.appendChild(document.createTextNode(order.order_name + " wants: " + order.menu_selection));

            let button = document.getElementById("currentbutton");
            button.addEventListener("click", function (e){
                e.preventDefault();
                deleteOrder(order._id);
                window.location.reload();
            });
        } else {
            let nextOrders = document.createElement("p");
            nextOrders.appendChild(document.createTextNode(order.order_name + " wants: " + order.menu_selection));
            orderForm.appendChild(nextOrders);
        }
    });
}

orderList();