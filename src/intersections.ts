// Run: deno run src/intersections.ts
type Draggable ={
    drag: ()=>void;
}

// The & operator is used to combine two types into one.
type Resizable ={
    resize: ()=>void;
}

// The & operator is used to combine two types into one.
type UIWidget = Draggable & Resizable;

// when we use the & operator to combine two types, the resulting type will have all the properties and methods of both types.
let widget: UIWidget = {
    drag(){
        console.log("Dragging the widget.");
    },
    resize(){
        console.log("Resizing the widget.");
    }
};
widget.drag();
widget.resize();