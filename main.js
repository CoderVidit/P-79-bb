menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza" , "Double Cheese Margherita Pizza" , "Farm House Pizza" , "Peppy Paneer Pizza" , "Chicken Dominator Pizza"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<ol>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
    console.log("insideadd_item")
var htmldata;
var item=document.getElementById("add_item").value;
console.log(item)
menu_list_array.push(item)
console.log()
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_toppings(){
    var item=document.getElementById("display_addedmenu").value;
    menu_list_array.push(item);
	display_addedmenu();
}