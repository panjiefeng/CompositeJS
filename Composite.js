//

function GraphicComponent(name){
	this.name = name;
}
GraphicComponent.prototype.add = function(){
	console.log("GraphicComponent add 该方法未重写");
};
GraphicComponent.prototype.remove = function(){
	console.log("GraphicComponent remove 该方法未重写");
};
GraphicComponent.prototype.getChild = function(){
	console.log("GraphicComponent getChild 该方法未重写");
};
GraphicComponent.prototype.draw = function(){
	console.log("GraphicComponent draw 该方法未重写");
};


function Picture(name){
	this.children = [];
	GraphicComponent.call(this, name);
}
Picture.prototype = new GraphicComponent();
Picture.prototype.add = function(graphic){
	this.children.push(graphic);
};
Picture.prototype.remove = function(graphic){
	for(var i=0; i<this.children.length; i++){
		if(this.children[i] == graphic){
			this.children.splice(i, 1);
		}
	}
};
Picture.prototype.getChild = function(index){
	return this.children[index];
};
Picture.prototype.draw = function(){
	console.log("Picture draw");
	for(var i=0 ; i<this.children.length; i++){
		this.children[i].draw();
	}
};


function Image(name){
	GraphicComponent.call(this, name);
}
Image.prototype = new GraphicComponent();
Image.prototype.add = function(){
	console.log("Image add 没有子孩子");
};
Image.prototype.remove = function(){
	console.log("Image remove 没有子孩子");
};
Image.prototype.getChild = function(){
	console.log("Image getChild 没有子孩子");
};
Image.prototype.draw = function(){
	console.log("Image draw");
};
var pic = new Picture("rqq");
var image = new Image("pp");
pic.add(image);
pic.draw();