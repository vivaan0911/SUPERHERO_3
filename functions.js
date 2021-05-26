var canvas = new fabric.Canvas('myCanvas');

player_x= 10;
player_y= 10;

image_height= 30;
image_width= 30;

var player_object="";
var block_images="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_images = Img;

    block_images.scaleToWidth(image_width);
    block_images.scaleToHeight(image_height);
    block_images.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_images);

    });

} 

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey ==true && keyPressed =='80'){
        console.log("p key and shift key is pressed together");
        image_width= image_width+10;
        image_height= image_height+10;
        document.getElementById("current_width").innerHTML= "Current Width  = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m key and shift key is pressed together");
        image_width= image_width-10;
        image_height= image_height-10;
        document.getElementById("current_width").innerHTML= "Current Width = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(keyPressed=='38'){
        up();
        console.log("up key");
        
    }

    if(keyPressed =='40'){        //Error single = 
        down();
        console.log("down key");
        
    }

    if(keyPressed =='37'){     //Error single = rather than ==
        left();
        console.log("left key");
        
    }

    if(keyPressed =='39'){  //Error single =
        right();
        console.log("right key");
        
    }


    if(keyPressed == '70'){
        new_image('thor_face.png');
        console.log("f key for face");
    }

    if(keyPressed == '66'){
        new_image('ironman_body.png');
        console.log("b key for body");
    }

    if(keyPressed == '76'){
        new_image('spiderman_legs.png');
        console.log("l key for legs");
    }

    if(keyPressed == '82'){
        new_image('hulk_right_hand.png');
        console.log("r key for right hand");
    }

    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h key for left hand");
    }
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - image_height;
        console.log("block image height = " + image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + image_height;
        console.log("block image height = " + image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - image_width;
        console.log("block image width = " + image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + image_width;
        console.log("block image width = " + image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}