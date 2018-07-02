# expanding_gallery
This is a simple js repository that allows you to make stunning and unique galleries for your images.

Feel free to use this reposotory for free!

# Instructions

To use simply insert a link to the css in the header ex: <link href='expanding_gallery/exp_gallery.css' rel='stylesheet'>
Add the js to the body ex: <script src="expanding_gallery/exp_gallery.js"></script>

Now it's time to make your gallery. In the html make a div where you want your gallery along with the desired width. In that div insert this shell:

:<div class="container">
:    <img class="the-topper" style="display:none;">
:    <div class="row" id="row1">
:        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
:        <img src="" class="1">
    </div>
    <div class="row" id="row2">
        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
        <img src="images/17.jpg" class="2">
    </div>
    <div class="row" id="row3">
        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
        <img src="" class="3">
    </div>
    <div class="row" id="row4">
        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
        <img src="" class="4">
    </div>
    <div class="row" id="row5">
        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
        <img src="" class="5">
    </div>
    <div class="row" id="row6">
        <!-- Duplicate line bellow for the quantity of images you want per row, fill out the source -->
        <img src="" class="6">
    </div>
</div>

Finally, you need to insert this anywhere in your body>:

<img id="uni_pic" style="display:none;">

Once you've done that, you have a fully functional expanding galellery.

Pro tip: make the sum of the height of the images in each row aproximitally the same.
