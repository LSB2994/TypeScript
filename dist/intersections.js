"use strict";
// when we use the & operator to combine two types, the resulting type will have all the properties and methods of both types.
let widget = {
    drag() {
        console.log("Dragging the widget.");
    },
    resize() {
        console.log("Resizing the widget.");
    }
};
widget.drag();
widget.resize();
