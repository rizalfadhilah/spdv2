var canvas, stage, exportRoot;
function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.MapNew();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);	    
	//Code to support hidpi screens and responsive scaling.
	(function(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = w*sRatio+'px';			
			canvas.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	})(true,'both',false,2);	
}


(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 2560,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/MapNew_1.jpg?1517699860550", id:"MapNew_1"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.MapNew_1 = function() {
	this.initialize(img.MapNew_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1200);


(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,105,173,0.898)").s().p("AslDgQhdAAhBhCQgugugOg7IhOg1IBOgzQAOg8AuguQBBhCBdAAIaTAAQBdAABBBCQBCBCAABbQAABdhCBBQhBBChdAAg");
	this.shape.setTransform(110.2,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,44.8);


(lib.Uzbekistan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(25.3,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Uzbekistan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgCgDQgCgEgDgCQgFgCgFAAQgGAAgDACQgGACgEADIgGAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIATAAIAAANIgBAIIABAAIAEgHIAIgIQAFgEAGgCQAFgCAIAAQAJAAAGACQAHADAEAEQAEAFACAIQACAHABAJIAAA/g");
	this.shape_1.setTransform(221.2,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgUAzQgFgCgGgFQgEgEgDgFQgDgGAAgHQAAgHACgEQACgFADgEQAFgCAMgHQANgEAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgCQgDgDgEgBIgJgBQgOAAgMAJIgIgNQAOgNAWAAQAJAAAIADQAIACAEAGQAFAFADAHQADAIAAAJIAAA+IgSAAIAAgJIAAgJQgJAUgVAAQgHAAgHgBgAgGAEQgIADgDADQgEAEgBAHQAAAGAGAFIAFADQAEACAEAAQAFAAAFgDQAFgDADgFQAEgFABgFQACgGAAgFIAAgDIgEAAQgSAAgGACg");
	this.shape_2.setTransform(209.5,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgEgGIgDgJIgBgMIAAgtIgNAAIAAgQIAOAAIAAgdIARAAIAAAdIAYAAIAAAQIgYAAIAAArQAAAIACAEQACAFAEACQAFAEAJAAIAEAAIAAARIgHABQgQgCgGgFg");
	this.shape_3.setTransform(201,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMALAPAAQAHAAAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgCIgQgIQgMgFgGgEQgDgDgCgFQgDgFAAgGQAAgGADgGQADgGAFgDQAFgEAGgBQAHgCAGgBQAWAAAKAMIgIAOQgIgJgQAAQgGAAgEADQgFADAAAHQAAADACACQACADAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAHgDAEQgCAGgFAEQgFAEgHACQgGADgJgBQgWABgOgPg");
	this.shape_4.setTransform(192.9,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgyIAAgTIARAAIAAATg");
	this.shape_5.setTransform(186,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAVBGIgdgvIgOAAIAAAvIgUAAIAAiLIAUAAIAABLIAOAAIAZgjIAXAAIgiArIAAAAIAlA4g");
	this.shape_6.setTransform(178.9,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgOAxQgJgFgIgHQgHgHgEgJQgEgLAAgKQAAgLAEgJQAEgKAHgHQAHgHAJgEQAJgEAJAAQAKAAAJAEQAIAEAGAHQAFAFADAKQADAIAAAKIgBAGIhIAAQABAIADAHQADAGAFAEQAEAEAGACQAEACAHAAQASAAAMgLIAIAOQgPAOgYAAQgNgBgHgCgAAbgLQAAgFgCgFQgCgFgDgEQgEgDgEgCQgEgBgFAAQgEAAgFABQgFACgEAEQgEADgCAFQgDAFgBAFIA0AAIAAAAg");
	this.shape_7.setTransform(167.4,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgcA2IgBAAIABAHIAAAIIgTAAIAAiLIAUAAIAAAuIgBAIIABAAQAIgRAWAAQAKAAAJAEQAIAEAGAHQAFAHAEAKQADAHAAAMQAAAMgEAKQgDAKgGAHQgHAHgIADQgIAEgKAAQgVAAgJgRgAgKgOQgFACgEAFQgEAEgCAFQgDAHAAAKIACANQACAGADAFQAEAGAFACQAGAEAGAAQAFAAAFgDQAFgCAEgFQAFgFACgGQACgHAAgJQAAgIgCgHQgCgEgEgFQgEgFgFgCQgFgDgGAAQgEAAgGACg");
	this.shape_8.setTransform(156.2,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgqAyIAAgLIAxg+IAIgJIAAgBIgKABIgtAAIAAgRIBRAAIAAALIgxA+IgIAJIAAABIAKgBIAxAAIAAARg");
	this.shape_9.setTransform(144.8,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgVBDQgKgDgIgHQgHgHgEgKQgDgGgBgPIAAhZIAUAAIAABZQAAAIACAGQADAHAEAEQAFAEAHADQAGACAHAAQAIAAAGgCQAHgDAEgEQAFgFADgGQACgHAAgIIAAhYIAUAAIAABZQgBAPgDAGQgEAKgHAHQgIAHgKADQgKAEgMAAQgLAAgKgEg");
	this.shape_10.setTransform(132.3,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(172.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.8,50.5,50.5);


(lib.Turkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(25.3,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Turkey
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgwBBIAHgPQAFAEAGAAQAGAAAFgEQAFgDADgIIAFgLIgrhiIAWAAIAZBCIACAKIABAAIADgKIAZhCIAVAAIgwB1QgCAGgCAEQgDAFgEADIgJAEQgFACgGAAQgLAAgIgGg");
	this.shape_1.setTransform(201.3,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgOAxQgJgFgIgHQgHgHgEgJQgEgLAAgKQAAgLAEgJQAEgKAHgHQAHgHAJgEQAJgEAJAAQAKAAAJAEQAIAEAGAHQAFAFADAKQADAIAAAKIgBAGIhIAAQABAIADAHQADAGAFAEQAEAEAGACQAEACAHAAQASAAAMgLIAIAOQgPAOgYAAQgNgBgHgCgAAbgLQAAgFgCgFQgCgFgDgEQgEgDgEgCQgEgBgFAAQgEAAgFABQgFACgEAEQgEADgCAFQgDAFgBAFIA0AAIAAAAg");
	this.shape_2.setTransform(190.6,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAUBGIgcgvIgPAAIAAAvIgTAAIAAiLIATAAIAABLIAPAAIAagjIAVAAIghArIAAAAIAlA4g");
	this.shape_3.setTransform(180.5,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgbAzIAAhjIATAAIAAARIAAAIIAAAAQACgGAEgFIAFgIQADgEAGgCQAFgCAFAAIAGABIAAATIgGgBQgFAAgEACIgJAFIgEAHQgDAFgBAFQgDAHAAAJIAAAqg");
	this.shape_4.setTransform(171.4,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgYAxQgHgCgEgFQgFgFgCgHQgCgIAAgKIAAg+IATAAIAAA6QABANADAFQACADAEACQAEACAFAAQAGAAAGgDQAGgDAFgFQAEgGACgHQACgHAAgFIAAgvIAUAAIAABjIgTAAIAAgOIAAgHIAAAAQgHALgGAEQgFAEgGACQgEACgHAAQgJAAgGgCg");
	this.shape_5.setTransform(161.1,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgIBGIAAh6IgxAAIAAgRIBzAAIAAARIgxAAIAAB6g");
	this.shape_6.setTransform(149.2,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(169.7,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.8,50.5,50.5);


(lib.Thailand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Thailand
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgVBDQgIgDgGgIQgGgHgDgJQgDgKAAgMQAAgMAEgIQADgJAGgHQAGgHAJgEQAIgEAKAAQAWAAAHAQIABAAIgBgHIAAguIAUAAIAACLIgTAAIAAgKIABgHIgBAAQgIATgXAAQgKAAgJgEgAgJgOQgFADgEAEQgEAFgDAFQgCAHAAAIQAAAIACAHQACAHAEAFQAEAEAFADQAGACAEAAQAGAAAFgCQAFgCAEgEQAEgFADgGQACgIAAgJIgCgNQgCgFgDgFQgEgFgFgDQgGgDgHAAQgEAAgFACg");
	this.shape_1.setTransform(144.6,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgCgDQgDgEgEgCQgEgCgGAAQgFAAgDACQgFACgEADIgIAIIgFAKQgBAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAHAAQAJAAAHACQAHADAEAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_2.setTransform(133,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgTAyQgHgCgEgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAHADAGAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQAEAAAEgDQAFgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_3.setTransform(121.3,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgGBBQgEgDgDgFQgCgGAAgJIAAhvIARAAIAABrQAAAJADAEQADACAFAAIADAAIAAARIgGABQgKgBgGgFg");
	this.shape_4.setTransform(114.1,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_5.setTransform(108.6,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgUAyQgGgCgFgDQgEgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAFgDAMgFQANgFAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAKAAAHACQAIADAEAFQAFAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgWgBQgHAAgHgCgAgGAEQgIADgDADQgEAEgBAHQAAAGAGAEIAFAFQAEABAEAAQAFAAAEgDQAGgDADgEQAEgGABgFQACgGAAgGIAAgCIgEAAQgSgBgGADg");
	this.shape_6.setTransform(100.5,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAaBGIAAg9IgBgJQgBgDgCgEQgCgDgEgCQgDgCgHAAQgFAAgDACIgKAFIgHAHIgEAJQgCAFAAAJIAAAvIgUAAIAAiLIAUAAIAAAzIAAAJIAAAAIAFgIQADgEAFgDQAFgDAGgCQAEgCAIAAQAIAAAHACQAGADAFAEQAEAFACAHQADAIAAAHIAABBg");
	this.shape_7.setTransform(89.6,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgIBGIAAh6IgxAAIAAgRIBzAAIAAARIgxAAIAAB6g");
	this.shape_8.setTransform(77.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Tajikistan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Tajikistan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgCgDQgDgEgEgCQgDgCgHAAQgFAAgDACQgGACgDADIgIAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_1.setTransform(148.8,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgGgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAGAFQAEABAFAAQADAAAFgDQAFgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_2.setTransform(137.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgEgGIgCgJIgBgLIAAguIgOAAIAAgPIAOAAIAAgeIARAAIAAAeIAYAAIAAAPIgYAAIAAArQAAAHACAGQACADAEADQAFAEAIAAIAFAAIAAARIgHABQgQgBgGgGg");
	this.shape_3.setTransform(128.6,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAKgOQALAMAPAAQAHgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgCgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAHgBQAGgCAGAAQAWAAALALIgIAOQgKgJgQAAQgEAAgFADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgCAFQgDAGgFAEQgFAEgGACQgHACgJAAQgXAAgNgOg");
	this.shape_4.setTransform(120.5,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_5.setTransform(113.6,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAUBGIgcgvIgPAAIAAAvIgTAAIAAiLIATAAIAABLIAPAAIAagjIAVAAIghArIAAAAIAlA4g");
	this.shape_6.setTransform(106.5,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_7.setTransform(98.1,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgVBaIAAgRIAEABQAIAAAGgEQADgCABgFQACgFAAgGIAAhmIATAAIAABnQAAAIgEAMQgEAHgGAFQgIAEgOABIgHAAgAADhGIAAgTIATAAIAAATg");
	this.shape_8.setTransform(91.9,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgUAyQgGgCgEgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAPgLAVAAQAKAAAHACQAIADAEAFQAFAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgVgBQgHAAgHgCgAgGAEQgIADgDADQgEAEgBAHQAAAGAGAEIAFAFQAEABAEAAQAFAAAEgDQAGgDADgEQAEgGACgFQABgGAAgGIAAgCIgEAAQgSgBgGADg");
	this.shape_9.setTransform(85.1,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgIBGIAAh6IgxAAIAAgRIBzAAIAAARIgxAAIAAB6g");
	this.shape_10.setTransform(74.2,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Russia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-29.1,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Russia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgTAyQgGgCgGgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQgBgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAEAEIAHAFQADABAFAAQADAAAGgDQAEgDAEgEQAEgGABgFQACgGABgGIAAgCIgFAAQgSgBgHADg");
	this.shape_1.setTransform(135,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_2.setTransform(127.6,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgkAmIAKgOQALAMAPAAQAHgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgGgEQgDgEgDgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAHgBQAGgCAGAAQAWAAALALIgJAOQgJgJgQAAQgEAAgFADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgCAFQgDAGgFAEQgFAEgGACQgIACgIAAQgXAAgNgOg");
	this.shape_3.setTransform(120.6,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMAMAQAAQAGgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgCgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAAKALIgHAOQgKgJgPAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgDAFQgCAGgFAEQgFAEgHACQgHACgHAAQgXAAgOgOg");
	this.shape_4.setTransform(111.7,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgYAxQgHgCgEgFQgFgFgCgHQgCgIAAgKIAAg+IATAAIAAA6QABANADAFQACADAEACQAEACAFAAQAGAAAGgDQAGgDAFgFQAEgGACgHQACgHAAgFIAAgvIAUAAIAABjIgTAAIAAgOIAAgHIAAAAQgHALgGAEQgFAEgGACQgEACgHAAQgJAAgGgCg");
	this.shape_5.setTransform(101.2,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAcBGIgcg4IgeAAIAAA4IgUAAIAAiLIAsAAQAMAAAMADQAFACAFADQAEAEADAFQAEAFABAGQACAHAAAGQAAAHgCAGQgCAGgDAFQgDAEgFADQgFADgGACIAAABIAFAGIAeA3gAgegCIAdAAQADAAAFgBQAFgCADgEQADgCACgGQACgEAAgGQAAgIgDgFQgDgGgGgDQgIgDgJAAIgXAAg");
	this.shape_6.setTransform(89.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-1.3,50.5,50.5);


(lib.Philippines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-30.4,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// The Philippines
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMAMAQAAQAGgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgBgEQgDgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAAKALIgIAOQgIgJgQAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgDAFQgCAGgFAEQgFAEgHACQgGACgIAAQgXAAgOgOg");
	this.shape_1.setTransform(177.3,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgOAwQgJgDgIgIQgHgHgEgJQgEgLAAgKQAAgKAEgLQAEgJAHgHQAHgHAJgEQAJgEAJABQAKgBAJAEQAIAEAGAGQAFAHADAJQADAIAAAKIgBAGIhIAAQABAJADAGQADAGAFAEQAEAEAGACQAEACAHABQASAAAMgMIAIAOQgPAOgYAAQgNgBgHgDgAAbgLQAAgGgCgFQgCgEgDgEQgEgDgEgBQgEgCgFAAQgEAAgFACQgFABgEADQgEAEgCAEQgDAFgBAGIA0AAIAAAAg");
	this.shape_2.setTransform(167.2,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgCgDQgCgEgEgCQgDgCgHAAQgFAAgDACQgGACgEADIgHAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIAUAAIAAANIgBAIIABAAIAEgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQADAHAAAJIAAA/g");
	this.shape_3.setTransform(155.8,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_4.setTransform(147.2,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgvBHIAAiLIASAAIAAAJIAAAHIAAAAQAJgSAXAAQAKAAAJAEQAIADAGAHQAFAHAEAKQADAKAAAMQAAALgEAJQgDAJgGAHQgGAHgJAEQgIAEgKAAQgUAAgJgRIgBAAIABAJIAAAtgAgKgzQgFACgEAEQgEAFgCAGQgDAIAAAJQAAAHACAGQACAFAEAFQADAFAGADQAFADAGAAQAFAAAFgCQAFgDAEgEQAFgFACgFQACgHAAgIQAAgIgCgHQgCgHgEgFQgEgEgFgDQgFgCgGAAQgEAAgGACg");
	this.shape_5.setTransform(139,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgvBHIAAiLIASAAIAAAJIAAAHIAAAAQAJgSAXAAQAKAAAJAEQAIADAGAHQAFAHAEAKQADAKAAAMQAAALgEAJQgDAJgGAHQgGAHgJAEQgIAEgKAAQgUAAgJgRIgBAAIABAJIAAAtgAgKgzQgFACgEAEQgEAFgCAGQgDAIAAAJQAAAHACAGQACAFAEAFQADAFAGADQAFADAGAAQAFAAAFgCQAFgDAEgEQAFgFACgFQACgHAAgIQAAgIgCgHQgCgHgEgFQgEgEgFgDQgFgCgGAAQgEAAgGACg");
	this.shape_6.setTransform(127,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_7.setTransform(118.2,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgGBBQgEgDgDgFQgCgGAAgJIAAhvIARAAIAABrQAAAJADAEQADACAFAAIADAAIAAARIgGABQgKgBgGgFg");
	this.shape_8.setTransform(113.6,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_9.setTransform(108,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AAaBGIAAg9IgBgJQgBgDgCgEQgCgDgDgCQgFgCgGAAQgFAAgDACIgKAFIgHAHIgEAJQgCAFAAAJIAAAvIgTAAIAAiLIATAAIAAAzIAAAJIAAAAIAFgIQADgEAFgDQAFgDAGgCQAEgCAIAAQAJAAAGACQAHADAEAEQAEAFACAHQACAIABAHIAABBg");
	this.shape_10.setTransform(99.6,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AguBGIAAiLIAxAAQAKAAAIADQAIADAGAGQAGAGAEAIQACAIAAAKQAAAKgCAIQgEAHgGAFQgGAGgIAEQgIADgKAAIgdAAIAAA0gAgaAAIAaAAQAHAAAEAAQAFgBAEgEQAEgDACgFQABgGABgGQgBgHgBgFQgCgEgEgEQgEgEgFgBQgFgCgGAAIgaAAg");
	this.shape_11.setTransform(88.1,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgOAwQgJgDgIgIQgHgHgEgJQgEgLAAgKQAAgKAEgLQAEgJAHgHQAHgHAJgEQAJgEAJABQAKgBAJAEQAIAEAGAGQAFAHADAJQADAIAAAKIgBAGIhIAAQABAJADAGQADAGAFAEQAEAEAGACQAEACAHABQASAAAMgMIAIAOQgPAOgYAAQgNgBgHgDgAAbgLQAAgGgCgFQgCgEgDgEQgEgDgEgBQgEgCgFAAQgEAAgFACQgFABgEADQgEAEgCAEQgDAFgBAGIA0AAIAAAAg");
	this.shape_12.setTransform(70.7,24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AAaBGIAAg9IgBgJQAAgDgCgEQgDgDgEgCQgDgCgHAAQgFAAgDACIgJAFIgIAHIgEAJQgCAFAAAJIAAAvIgUAAIAAiLIAUAAIAAAzIgBAJIABAAIAFgIQAEgEAEgDQAFgDAGgCQAEgCAIAAQAIAAAHACQAGADAFAEQAEAFACAHQACAIAAAHIAABBg");
	this.shape_13.setTransform(59.3,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AgIBGIAAh6IgxAAIAAgRIBzAAIAAARIgxAAIAAB6g");
	this.shape_14.setTransform(47.2,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-1.3,50.5,50.5);


(lib.Pakistan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Pakistan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgDgDQgCgEgDgCQgFgCgFAAQgGAAgDACQgFACgFADIgGAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIATAAIAAANIgBAIIABAAIAEgHIAIgIQAFgEAGgCQAFgCAHAAQAKAAAGACQAGADAFAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_1.setTransform(145.3,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgGgCgGgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAFAFQAGAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAFAEIAGAFQADABAEAAQAEAAAGgDQAFgDADgEQAEgGABgFQACgGAAgGIAAgCIgEAAQgSgBgHADg");
	this.shape_2.setTransform(133.6,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgDgGIgEgJIgBgLIAAguIgNAAIAAgPIAOAAIAAgeIARAAIAAAeIAYAAIAAAPIgYAAIAAArQAAAHACAGQACADAEADQAFAEAJAAIAEAAIAAARIgHABQgQgBgGgGg");
	this.shape_3.setTransform(125,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMAMAQAAQAGgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgBgEQgDgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAAKALIgIAOQgIgJgQAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgDAFQgCAGgFAEQgFAEgHACQgGACgIAAQgXAAgOgOg");
	this.shape_4.setTransform(117,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_5.setTransform(110,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAVBGIgdgvIgOAAIAAAvIgUAAIAAiLIAUAAIAABLIAOAAIAZgjIAXAAIgiArIAAAAIAlA4g");
	this.shape_6.setTransform(102.9,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgTAyQgHgCgEgDQgGgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQAAgGgDgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAOgLAWAAQAKAAAHACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQAEAAAFgDQAEgDAEgEQAEgGABgFQADgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_7.setTransform(91.5,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AguBGIAAiLIAyAAQAJAAAIADQAIADAGAGQAGAGADAIQADAIAAAKQAAAKgDAIQgDAHgGAFQgGAGgIAEQgIADgJAAIgfAAIAAA0gAgbAAIAbAAQAGAAAFAAQAGgBADgEQADgDACgFQACgGAAgGQAAgHgCgFQgCgEgDgEQgDgEgGgBQgEgCgHAAIgbAAg");
	this.shape_8.setTransform(81.1,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Myanmar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Myanmar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgaAzIAAhjIATAAIAAARIgBAIIABAAQABgGADgFIAFgIQAFgEAEgCQAGgCAFAAIAFABIAAATIgFgBQgFAAgEACIgJAFIgEAHQgDAFgCAFQgCAHAAAJIAAAqg");
	this.shape_1.setTransform(151.6,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgGgCgGgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAFAFQAGAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAFAEIAGAFQADABAEAAQAEAAAGgDQAFgDADgEQAEgGABgFQACgGAAgGIAAgCIgEAAQgSgBgHADg");
	this.shape_2.setTransform(141.7,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AA5AzIAAg6IAAgKIgDgIIgFgGQgFgCgFAAQgFAAgFACQgFACgDAEIgHAIIgDAKIgCAMIAAAuIgRAAIAAg6QAAgMgDgGQgCgEgEgCQgDgCgGAAQgFAAgFACQgEACgFAEQgDAEgCAFQgEAEgBAGQgBAFAAAGIAAAuIgTAAIAAhjIATAAIAAANIgBAIIABAAQACgFADgEQADgEAFgDQAFgEAFgBQAFgCAHAAQAFAAAGABQAFACADACQACADADAFQACAEABAGIABAAIAGgJIAIgHQAFgEAGgCQAFgBAGAAQAIAAAHACQAGADAFAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_3.setTransform(127.7,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgBgDQgDgEgDgCQgEgCgGAAQgGAAgDACQgFACgEADIgHAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIASAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAHAAQAKAAAGACQAGADAFAEQAEAFACAIQADAHgBAJIAAA/g");
	this.shape_4.setTransform(112.5,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgTAyQgHgCgFgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQgBgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAFAEIAGAFQADABAFAAQADAAAGgDQAEgDAEgEQAEgGABgFQACgGABgGIAAgCIgGAAQgRgBgHADg");
	this.shape_5.setTransform(100.8,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgwBBIAHgPQAFAEAGAAQAGAAAFgDQAFgFADgHIAFgLIgrhiIAWAAIAZBCIACAKIABAAIADgKIAZhCIAVAAIgwB1QgCAGgCAEQgDAFgEADIgJAFQgFABgGAAQgLAAgIgGg");
	this.shape_6.setTransform(90.7,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AA0BGIgHhXQgBgJAAgMIAAAAIgIAVIgcA9IgPAAIgcg9IgIgVIgBAVIgHBXIgTAAIALiLIAVAAIAgBKIAGATIAAAAIAHgTIAghKIAVAAIALCLg");
	this.shape_7.setTransform(77,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Mongolia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Mongolia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgUAzQgFgCgFgFQgFgEgDgFQgDgGAAgHQAAgHACgEQACgFADgEQAEgCANgHQANgEAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgCQgDgDgEgBIgJgBQgNAAgNAJIgIgNQAOgNAWAAQAKAAAHADQAIACAFAGQAEAFADAHQADAIAAAJIAAA+IgSAAIAAgJIAAgJQgJAUgVAAQgHAAgHgBgAgGAEQgIADgDADQgEAEAAAHQAAAGAEAFIAGADQAEACAEAAQAEAAAFgDQAFgDAEgFQAEgFACgFQABgGAAgFIAAgDIgFAAQgRAAgGACg");
	this.shape_1.setTransform(149.4,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgyIAAgTIARAAIAAATg");
	this.shape_2.setTransform(141.9,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgGBBQgEgCgDgGQgCgGAAgJIAAhvIARAAIAABsQAAAIADADQADADAFAAIADAAIAAARIgGABQgKgCgGgEg");
	this.shape_3.setTransform(137.3,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgUAxQgKgFgHgGQgIgIgEgJIgDgKIgBgLQAAgHAEgNQAEgJAIgIQAHgHAKgDQAKgEAKgBQALABAKAEQAJADAIAHQAHAIAFAJQAEANAAAHIgBALIgDAKQgFAJgHAIQgIAGgJAFQgKADgLAAQgKAAgKgDgAgMggQgHACgEAFQgFAFgCAHQgEAGAAAHQAAAHAEAHQACAHAFAEQAEAFAHADQAHACAFAAQAHAAAGgCQAGgDAFgFQAFgEADgHQACgHAAgHQAAgHgCgGQgDgHgFgFQgFgFgGgCQgGgDgHAAQgFAAgHADg");
	this.shape_4.setTransform(128,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgUBGQgJgCgIgEIAHgPQANAGAPAAQAEAAAGgBQAGgCAEgDQAEgEADgFQACgFAAgIIAAgHIAAgHQgEAIgIAEQgHAEgJAAQgKAAgIgEQgJgEgGgHQgGgHgDgHQgDgKAAgLQAAgLADgJQADgJAFgHQAGgHAJgEQAIgDAKAAQAWAAAIAPIABAAIAAgEIAAgJIASAAIAABfQAAAGgCAGIgDAJQgDAJgIAGQgHAFgJADQgJACgIAAQgJAAgJgCgAgLg0QgEACgEAEQgDAFgDAGQgCAGAAAIQABAIACAGQACAHADACQAEAFAGADQAGACAEAAQAFAAAFgBQAFgCAEgEQADgFACgEQADgHAAgKQAAgJgDgHQgCgGgDgEQgEgEgFgCQgFgCgGAAQgFAAgGADg");
	this.shape_5.setTransform(115.5,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgBgDQgDgEgDgCQgEgCgGAAQgGAAgDACQgFACgEADIgHAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIATAAIAAANIgBAIIABAAIAEgHIAIgIQAFgEAGgCQAFgCAHAAQAKAAAGACQAGADAFAEQAEAFACAIQADAHgBAJIAAA/g");
	this.shape_6.setTransform(104,24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgUAxQgJgFgJgGQgHgIgEgJIgDgKIgBgLQAAgHAEgNQAEgJAHgIQAJgHAJgDQAKgEAKgBQAKABALAEQAJADAIAHQAIAIAEAJQAEANAAAHIgBALIgDAKQgEAJgIAIQgIAGgJAFQgLADgKAAQgKAAgKgDgAgMggQgHACgEAFQgFAFgCAHQgDAGgBAHQABAHADAHQACAHAFAEQAEAFAHADQAHACAFAAQAHAAAGgCQAGgDAFgFQAFgEADgHQACgHAAgHQAAgHgCgGQgDgHgFgFQgFgFgGgCQgGgDgHAAQgFAAgHADg");
	this.shape_7.setTransform(91.7,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AA0BGIgHhXQgBgJAAgMIAAAAIgIAVIgcA9IgPAAIgcg9IgIgVIgBAVIgHBXIgTAAIALiLIAVAAIAgBKIAGATIAAAAIAHgTIAghKIAVAAIALCLg");
	this.shape_8.setTransform(76.8,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-1.3,50.5,50.5);


(lib.Malaysia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Malaysia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgUAyQgFgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAKAAAHACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgVgBQgHAAgHgCgAgGAEQgIADgDADQgEAEAAAHQAAAGAEAEIAGAFQAEABAEAAQAEAAAFgDQAFgDAEgEQAEgGACgFQABgGAAgGIAAgCIgFAAQgRgBgGADg");
	this.shape_1.setTransform(147.1,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_2.setTransform(139.7,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMAMAQAAQAGgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgBgEQgDgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAAKALIgIAOQgIgJgQAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgDAFQgCAGgFAEQgFAEgHACQgGACgIAAQgXAAgOgOg");
	this.shape_3.setTransform(132.7,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgwBBIAHgPQAFAEAGAAQAGAAAFgDQAFgFADgHIAFgLIgrhiIAWAAIAZBCIACAKIABAAIADgKIAZhCIAVAAIgwB1QgCAGgCAEQgDAFgEADIgJAFQgFABgGAAQgLAAgIgGg");
	this.shape_4.setTransform(123.1,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgUAyQgFgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAKAAAHACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgVgBQgHAAgHgCgAgGAEQgIADgDADQgEAEAAAHQAAAGAEAEIAGAFQAEABAEAAQAEAAAFgDQAFgDAEgEQAEgGACgFQABgGAAgGIAAgCIgFAAQgRgBgGADg");
	this.shape_5.setTransform(112.5,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgGBBQgEgDgDgFQgCgGAAgJIAAhvIARAAIAABrQAAAJADAEQADACAFAAIADAAIAAARIgGABQgKgBgGgFg");
	this.shape_6.setTransform(105.3,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgTAyQgGgCgGgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAFAFQAGAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAFAEIAGAFQADABAEAAQAEAAAGgDQAFgDADgEQAEgGABgFQACgGAAgGIAAgCIgEAAQgSgBgHADg");
	this.shape_7.setTransform(96.7,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AA0BGIgHhXQgBgJAAgMIAAAAIgIAVIgcA9IgPAAIgcg9IgIgVIgBAVIgHBXIgTAAIALiLIAVAAIAgBKIAGATIAAAAIAHgTIAghKIAVAAIALCLg");
	this.shape_8.setTransform(83.1,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Kyrgystan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-31.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Kyrgystan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgCgDQgDgEgEgCQgDgCgHAAQgFAAgDACQgGACgDADIgIAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_1.setTransform(151.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgGgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAGAFQAEABAFAAQADAAAFgDQAFgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_2.setTransform(139.4,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgEgGIgCgJIgBgLIAAguIgOAAIAAgPIAOAAIAAgeIARAAIAAAeIAYAAIAAAPIgYAAIAAArQAAAHACAGQACADAEADQAFAEAIAAIAFAAIAAARIgHABQgQgBgGgGg");
	this.shape_3.setTransform(130.8,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAKgOQALAMAPAAQAHgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgCgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAHgBQAGgCAGAAQAWAAALALIgIAOQgKgJgQAAQgEAAgFADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgCAFQgDAGgFAEQgFAEgGACQgHACgJAAQgXAAgNgOg");
	this.shape_4.setTransform(122.8,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgwBBIAHgPQAFAEAGAAQAGAAAFgDQAFgFADgHIAFgLIgrhiIAWAAIAZBCIACAKIABAAIADgKIAZhCIAVAAIgwB1QgCAGgCAEQgDAFgEADIgJAFQgFABgGAAQgLAAgIgGg");
	this.shape_5.setTransform(113.2,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgVBGQgIgCgIgEIAGgPQANAGAPAAQAGAAAFgBQAGgCAEgDQAFgEACgFQACgFABgIIAAgHIAAgHQgGAIgHAEQgHAEgJAAQgKAAgJgEQgIgEgGgHQgGgHgDgHQgDgKAAgLQAAgLADgJQADgJAGgHQAGgHAHgEQAJgDAKAAQAXAAAHAPIABAAIAAgEIAAgJIASAAIAABfQAAAGgBAGIgEAJQgEAJgHAGQgHAFgKADQgIACgIAAQgJAAgKgCgAgLg0QgFACgDAEQgDAFgCAGQgCAGAAAIQAAAIACAGQABAHAEACQAFAFAFADQAFACAFAAQAGAAAEgBQAFgCAEgEQADgFADgEQACgHAAgKQAAgJgCgHQgDgGgDgEQgEgEgFgCQgFgCgGAAQgFAAgGADg");
	this.shape_6.setTransform(101.9,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgaAzIAAhjIATAAIAAARIgBAIIABAAQABgGADgFIAFgIQAFgEAEgCQAGgCAFAAIAFABIAAATIgFgBQgFAAgEACIgJAFIgEAHQgDAFgCAFQgCAHAAAJIAAAqg");
	this.shape_7.setTransform(93.1,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgwBBIAHgPQAFAEAGAAQAGAAAFgDQAFgFADgHIAFgLIgrhiIAWAAIAZBCIACAKIABAAIADgKIAZhCIAVAAIgwB1QgCAGgCAEQgDAFgEADIgJAFQgFABgGAAQgLAAgIgGg");
	this.shape_8.setTransform(83.6,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AAcBGIgkhBIgVAAIAABBIgUAAIAAiLIAUAAIAAA7IAVAAIAig7IAVAAIgpBDIAsBIg");
	this.shape_9.setTransform(73.1,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-2.6,50.5,50.5);


(lib.Korea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Korea
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgUAyQgFgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAKAAAHACQAIADAEAFQAFAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgVgBQgHAAgHgCgAgGAEQgIADgDADQgEAEAAAHQAAAGAEAEIAGAFQAEABAEAAQAEAAAFgDQAFgDAEgEQAEgGACgFQABgGAAgGIAAgCIgFAAQgRgBgGADg");
	this.shape_1.setTransform(130.9,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgOAwQgJgDgIgIQgHgHgEgJQgEgLAAgKQAAgKAEgLQAEgJAHgHQAHgHAJgEQAJgEAJABQAKgBAJAEQAIAEAGAGQAFAHADAJQADAIAAAKIgBAGIhIAAQABAJADAGQADAGAFAEQAEAEAGACQAEACAHABQASAAAMgMIAIAOQgPAOgYAAQgNgBgHgDgAAbgLQAAgGgCgFQgCgEgDgEQgEgDgEgBQgEgCgFAAQgEAAgFACQgFABgEADQgEAEgCAEQgDAFgBAGIA0AAIAAAAg");
	this.shape_2.setTransform(120.4,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgbAzIAAhjIAUAAIAAARIgBAIIABAAQABgGADgFIAGgIQAEgEAFgCQAFgCAFAAIAGABIAAATIgGgBQgFAAgEACIgJAFIgEAHQgDAFgBAFQgDAHAAAJIAAAqg");
	this.shape_3.setTransform(111.7,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgUAwQgKgEgHgGQgIgIgEgJIgDgKIgBgLQAAgHAEgNQAEgJAIgIQAHgHAKgEQAKgDAKAAQAKAAAKADQAKAEAIAHQAHAIAEAJQAFANAAAHIgBALIgEAKQgEAJgHAIQgIAGgKAEQgKAEgKAAQgKAAgKgEgAgMggQgHADgEAFQgFAEgDAHQgCAGAAAHQAAAHACAHQADAGAFAFQAEAGAHACQAGADAGAAQAGAAAHgDQAGgCAFgGQAFgFACgGQADgHAAgHQAAgHgDgGQgCgHgFgEQgFgFgGgDQgHgDgGAAQgGAAgGADg");
	this.shape_4.setTransform(101.2,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAbBGIgjhBIgVAAIAABBIgUAAIAAiLIAUAAIAAA7IAVAAIAhg7IAXAAIgqBDIAsBIg");
	this.shape_5.setTransform(89.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Kazakhstan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-31.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Kazakhstan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgCgDQgDgEgEgCQgDgCgHAAQgFAAgDACQgGACgDADIgIAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQACAHAAAJIAAA/g");
	this.shape_1.setTransform(160.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgGgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAGAFQAEABAFAAQADAAAFgDQAFgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_2.setTransform(148.4,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgEgGIgCgJIgBgLIAAguIgOAAIAAgPIAOAAIAAgeIARAAIAAAeIAYAAIAAAPIgYAAIAAArQAAAHACAGQACADAEADQAFAEAIAAIAFAAIAAARIgHABQgQgBgGgGg");
	this.shape_3.setTransform(139.8,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAKgOQALAMAPAAQAHgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgGgEQgEgEgCgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAHgBQAGgCAGAAQAWAAALALIgIAOQgKgJgQAAQgEAAgFADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgCAFQgDAGgFAEQgFAEgGACQgHACgJAAQgXAAgNgOg");
	this.shape_4.setTransform(131.8,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAaBGIAAg9IgBgJQAAgDgCgEQgDgDgEgCQgDgCgHAAQgFAAgDACIgJAFIgIAHIgEAJQgCAFAAAJIAAAvIgUAAIAAiLIAUAAIAAAzIgBAJIABAAIAFgIQAEgEAEgDQAFgDAGgCQAEgCAIAAQAIAAAHACQAGADAFAEQAEAFACAHQACAIAAAHIAABBg");
	this.shape_5.setTransform(121.4,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAUBGIgcgvIgPAAIAAAvIgTAAIAAiLIATAAIAABLIAPAAIAagjIAVAAIghArIAAAAIAlA4g");
	this.shape_6.setTransform(110.6,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgUAyQgGgCgFgDQgEgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAFgDAMgFQANgFAWAAIAEAAIAAgCQAAgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAKAAAHACQAIADAEAFQAFAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgWgBQgHAAgHgCgAgGAEQgIADgDADQgEAEgBAHQAAAGAGAEIAFAFQAEABAEAAQAFAAAEgDQAGgDADgEQAEgGABgFQACgGAAgGIAAgCIgEAAQgSgBgGADg");
	this.shape_7.setTransform(99.2,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgqAyIAAgLIAxg+IAIgJIAAgBIgKABIgtAAIAAgRIBRAAIAAALIgxA+IgIAJIAAABIAKgBIAxAAIAAARg");
	this.shape_8.setTransform(89.1,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgTAyQgHgCgFgDQgFgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQgBgGgCgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAPgLAVAAQAJAAAIACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEAAAHQABAGAFAEIAGAFQADABAFAAQADAAAGgDQAEgDAEgEQAEgGABgFQACgGABgGIAAgCIgGAAQgRgBgHADg");
	this.shape_9.setTransform(78.3,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AAcBGIgkhBIgVAAIAABBIgUAAIAAiLIAUAAIAAA7IAVAAIAig7IAVAAIgoBDIArBIg");
	this.shape_10.setTransform(67.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-2.6,50.5,50.5);


(lib.Indonesia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Indonesia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgUAyQgFgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQABgFAEgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAIADAFAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgWgBQgGAAgHgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQADAAAFgDQAFgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_1.setTransform(152,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_2.setTransform(144.5,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgkAmIAJgOQAMAMAPAAQAHgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgGgEQgEgEgBgEQgDgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAAKALIgIAOQgIgJgQAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgDAFQgCAGgFAEQgFAEgHACQgGACgJAAQgWAAgOgOg");
	this.shape_3.setTransform(137.6,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgOAwQgJgDgIgIQgHgHgEgJQgEgLAAgKQAAgKAEgLQAEgJAHgHQAHgHAJgEQAJgEAJABQAKgBAJAEQAIAEAGAGQAFAHADAJQADAIAAAKIgBAGIhIAAQABAJADAGQADAGAFAEQAEAEAGACQAEACAHABQASAAAMgMIAIAOQgPAOgYAAQgNgBgHgDgAAbgLQAAgGgCgFQgCgEgDgEQgEgDgEgBQgEgCgFAAQgEAAgFACQgFABgEADQgEAEgCAEQgDAFgBAGIA0AAIAAAAg");
	this.shape_4.setTransform(127.5,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgDgDQgCgEgEgCQgDgCgHAAQgFAAgDACQgGACgEADIgHAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQADAHAAAJIAAA/g");
	this.shape_5.setTransform(116.1,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgUAwQgKgEgIgGQgHgIgEgJIgDgKIgBgLQAAgHAEgNQAEgJAHgIQAIgHAKgEQAKgDAKAAQAKAAAKADQALAEAHAHQAHAIAEAJQAFANAAAHIgBALIgEAKQgEAJgHAIQgHAGgLAEQgKAEgKAAQgKAAgKgEgAgMggQgHADgEAFQgFAEgDAHQgCAGAAAHQAAAHACAHQADAGAFAFQAEAGAHACQAGADAGAAQAGAAAHgDQAGgCAFgGQAFgFACgGQADgHAAgHQAAgHgDgGQgCgHgFgEQgFgFgGgDQgHgDgGAAQgGAAgGADg");
	this.shape_6.setTransform(103.8,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgVBDQgIgDgGgIQgGgHgDgJQgDgKAAgMQAAgMAEgIQADgJAGgHQAGgHAJgEQAIgEAKAAQAWAAAHAQIABAAIgBgHIAAguIAUAAIAACLIgTAAIAAgKIABgHIgBAAQgIATgXAAQgKAAgJgEgAgJgOQgFADgEAEQgEAFgDAFQgCAHAAAIQAAAIACAHQACAHAEAFQAEAEAFADQAGACAEAAQAGAAAFgCQAFgCAEgEQAEgFADgGQACgIAAgJIgCgNQgCgFgDgFQgEgFgFgDQgGgDgHAAQgEAAgFACg");
	this.shape_7.setTransform(91.2,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgDgDQgCgEgDgCQgFgCgFAAQgGAAgDACQgFACgFADIgGAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIATAAIAAANIgBAIIABAAIAEgHIAIgIQAFgEAGgCQAFgCAHAAQAKAAAGACQAGADAFAEQAEAFACAIQACAHABAJIAAA/g");
	this.shape_8.setTransform(79.6,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgIBGIAAiLIARAAIAACLg");
	this.shape_9.setTransform(70.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Azerbaijan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Azerbaijan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQAAgFgDgDQgCgEgEgCQgDgCgHAAQgFAAgDACQgGACgDADIgIAIIgEAKQgCAGAAAGIAAAvIgUAAIAAhjIATAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAIAAQAIAAAHACQAGADAFAEQAEAFACAIQADAHAAAJIAAA/g");
	this.shape_1.setTransform(153.9,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgUAyQgFgCgFgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAEAAIAAgCQAAgGgBgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAKAAAHACQAIADAEAFQAFAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgJAVgVgBQgHAAgHgCgAgGAEQgIADgDADQgEAEAAAHQAAAGAEAEIAGAFQAEABAEAAQAEAAAFgDQAFgDAEgEQAEgGACgFQABgGAAgGIAAgCIgFAAQgRgBgGADg");
	this.shape_2.setTransform(142.2,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgVBaIAAgRIAEABQAIAAAGgEQADgCABgFQACgFAAgGIAAhmIATAAIAABnQAAAIgEAMQgEAHgGAFQgIAEgOABIgHAAgAADhGIAAgTIATAAIAAATg");
	this.shape_3.setTransform(133.4,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_4.setTransform(129.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgTAyQgHgCgEgDQgFgFgDgFQgDgGAAgIQAAgFACgFQACgFADgEQAEgDANgFQANgFAWAAIAFAAIAAgCQAAgGgCgEQgCgFgDgDQgDgCgEgBIgJgBQgNAAgNAKIgIgPQAOgLAWAAQAJAAAIACQAHADAGAFQAEAEADAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQAEAAAFgDQAEgDAEgEQAEgGACgFQACgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_5.setTransform(121.7,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgcA2IgBAAIABAHIAAAIIgTAAIAAiLIAUAAIAAAuIgBAIIABAAQAIgRAWAAQAKAAAJAEQAIAEAGAHQAFAHAEAKQADAHAAAMQAAAMgEAKQgDAKgGAHQgHAHgIADQgIAEgKAAQgVAAgJgRgAgKgOQgFACgEAFQgEAEgCAFQgDAHAAAKIACANQACAGADAFQAEAGAFACQAGAEAGAAQAFAAAFgDQAFgCAEgFQAFgFACgGQACgHAAgJQAAgIgCgHQgCgEgEgFQgEgFgFgCQgFgDgGAAQgEAAgGACg");
	this.shape_6.setTransform(111.1,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgbAzIAAhjIATAAIAAARIAAAIIAAAAQACgGAEgFIAFgIQADgEAGgCQAFgCAGAAIAEABIAAATIgFgBQgFAAgEACIgIAFIgFAHQgDAFgBAFQgDAHAAAJIAAAqg");
	this.shape_7.setTransform(101.6,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgOAwQgJgDgIgIQgHgHgEgJQgEgLAAgKQAAgKAEgLQAEgJAHgHQAHgHAJgEQAJgEAJABQAKgBAJAEQAIAEAGAGQAFAHADAJQADAIAAAKIgBAGIhIAAQABAJADAGQADAGAFAEQAEAEAGACQAEACAHABQASAAAMgMIAIAOQgPAOgYAAQgNgBgHgDgAAbgLQAAgGgCgFQgCgEgDgEQgEgDgEgBQgEgCgFAAQgEAAgFACQgFABgEADQgEAEgCAEQgDAFgBAGIA0AAIAAAAg");
	this.shape_8.setTransform(91.7,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgqAyIAAgLIAxg+IAIgJIAAgBIgJABIguAAIAAgRIBSAAIAAALIgyA+IgIAJIAAABIAKgBIAxAAIAAARg");
	this.shape_9.setTransform(81,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AAoBGIgOgoIgzAAIgOAoIgVAAIAziLIATAAIAzCLgAAVANIgQgrIgFgUIAAAAIgEAUIgQArIApAAg");
	this.shape_10.setTransform(69.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


(lib.Afghanistan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape.setTransform(-27.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Afghanistan
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgBgDQgDgEgEgCQgEgCgFAAQgGAAgDACQgFACgEADIgHAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIASAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAHAAQAJAAAHACQAGADAFAEQAEAFACAIQADAHgBAJIAAA/g");
	this.shape_1.setTransform(161.7,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgTAyQgHgCgEgDQgGgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQAAgGgDgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAOgLAWAAQAKAAAHACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQAEAAAFgDQAEgDAEgEQAEgGABgFQADgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_2.setTransform(150,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAAA6QgHgFgDgGIgEgJIgBgLIAAguIgNAAIAAgPIAOAAIAAgeIARAAIAAAeIAYAAIAAAPIgYAAIAAArQAAAHACAGQACADAEADQAFAEAJAAIAEAAIAAARIgHABQgQgBgGgGg");
	this.shape_3.setTransform(141.4,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgkAmIAKgOQALAMAQAAQAGgBAFgDQAFgDAAgGQAAgEgCgCQgCgCgEgDIgQgIQgMgEgFgEQgFgEgCgEQgCgFAAgGQAAgHADgFQADgFAFgEQAFgEAGgBQAHgCAGAAQAWAAALALIgIAOQgKgJgPAAQgGAAgEADQgFAEAAAGQAAADACADQACACAEACIAQAIQAMAEAGAEIAGAIQACAFAAAGQAAAGgCAFQgDAGgFAEQgFAEgHACQgHACgHAAQgXAAgOgOg");
	this.shape_4.setTransform(133.4,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgIBGIAAhjIARAAIAABjgAgIgxIAAgUIARAAIAAAUg");
	this.shape_5.setTransform(126.4,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAaAzIAAg6IgBgKQgBgFgBgDQgDgEgEgCQgEgCgFAAQgGAAgDACQgFACgEADIgHAIIgGAKQgBAGAAAGIAAAvIgTAAIAAhjIASAAIAAANIAAAIIAAAAIAFgHIAIgIQAFgEAGgCQAFgCAHAAQAJAAAHACQAGADAFAEQAEAFACAIQADAHgBAJIAAA/g");
	this.shape_6.setTransform(118,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgTAyQgHgCgEgDQgGgFgCgFQgDgGAAgIQAAgFACgFQABgFAEgEQAFgDAMgFQANgFAWAAIAFAAIAAgCQAAgGgDgEQgBgFgDgDQgDgCgEgBIgJgBQgOAAgMAKIgIgPQAOgLAWAAQAKAAAHACQAHADAGAFQAFAEACAIQADAHAAAKIAAA+IgSAAIAAgKIAAgIQgIAVgXgBQgGAAgGgCgAgHAEQgGADgEADQgFAEABAHQAAAGAEAEIAHAFQADABAFAAQAEAAAFgDQAEgDAEgEQAEgGABgFQADgGAAgGIAAgCIgGAAQgRgBgHADg");
	this.shape_7.setTransform(106.3,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AAaBGIAAg9IgBgJQgBgDgBgEQgDgDgDgCQgEgCgGAAQgGAAgDACIgJAFIgHAHIgGAJQgBAFAAAJIAAAvIgTAAIAAiLIATAAIAAAzIgBAJIABAAIAFgIQAEgEAEgDQAFgDAGgCQAEgCAHAAQAKAAAGACQAGADAFAEQAEAFACAHQADAIgBAHIAABBg");
	this.shape_8.setTransform(95.4,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgVBGQgIgCgHgEIAFgPQANAGAPAAQAGAAAFgBQAGgCAEgDQAFgEACgFQACgFABgIIAAgHIAAgHQgFAIgHAEQgIAEgIAAQgLAAgJgEQgIgEgGgHQgGgHgDgHQgDgKAAgLQAAgLADgJQADgJAGgHQAGgHAHgEQAJgDAKAAQAXAAAHAPIAAAAIAAgEIAAgJIATAAIAABfQAAAGgBAGIgDAJQgFAJgHAGQgHAFgKADQgIACgIAAQgJAAgKgCgAgLg0QgFACgDAEQgDAFgCAGQgCAGAAAIQAAAIACAGQACAHAEACQAEAFAFADQAGACAEAAQAFAAAFgBQAFgCAEgEQAEgFACgEQACgHAAgKQAAgJgCgHQgCgGgFgEQgDgEgFgCQgFgCgGAAQgFAAgGADg");
	this.shape_9.setTransform(83.1,26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgPBHIAAhTIgNAAIAAgPIANAAIAAgFQAAgJAEgLQAEgHAHgEQAFgGAQAAIAHAAIAAARIgEgBQgJAAgFADQgDADgCAEQgCAFAAAGIAAAFIAXAAIAAAPIgXAAIAABTg");
	this.shape_10.setTransform(74.5,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AAoBGIgOgoIgzAAIgOAoIgVAAIAziLIATAAIAzCLgAAVANIgQgrIgFgUIAAAAIgEAUIgQArIApAAg");
	this.shape_11.setTransform(64.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// bubbles
	this.instance = new lib.bubbles();
	this.instance.setTransform(110.2,22.4,1,1,0,0,0,110.2,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-4,50.5,50.5);


// stage content:



(lib.MapNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.russia.addEventListener("click", fl_ClickToGoToWebPage_a);
		
		function fl_ClickToGoToWebPage_a() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.indonesia.addEventListener("click", fl_ClickToGoToWebPage_b);
		
		function fl_ClickToGoToWebPage_b() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.mongolia.addEventListener("click", fl_ClickToGoToWebPage_c);
		
		function fl_ClickToGoToWebPage_c() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
			
		this.korea.addEventListener("click", fl_ClickToGoToWebPage_d);
		
		function fl_ClickToGoToWebPage_d() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.myanmar.addEventListener("click", fl_ClickToGoToWebPage_e);
		
		function fl_ClickToGoToWebPage_e() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.thailand.addEventListener("click", fl_ClickToGoToWebPage_f);
		
		function fl_ClickToGoToWebPage_f() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.malaysia.addEventListener("click", fl_ClickToGoToWebPage_g);
		
		function fl_ClickToGoToWebPage_g() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.philippines.addEventListener("click", fl_ClickToGoToWebPage_h);
		
		function fl_ClickToGoToWebPage_h() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.pakistan.addEventListener("click", fl_ClickToGoToWebPage_i);
		
		function fl_ClickToGoToWebPage_i() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.afghanistan.addEventListener("click", fl_ClickToGoToWebPage_j);
		
		function fl_ClickToGoToWebPage_j() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.kyrgystan.addEventListener("click", fl_ClickToGoToWebPage_k);
		
		function fl_ClickToGoToWebPage_k() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.tajikistan.addEventListener("click", fl_ClickToGoToWebPage_l);
		
		function fl_ClickToGoToWebPage_l() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.uzbekistan.addEventListener("click", fl_ClickToGoToWebPage_m);
		
		function fl_ClickToGoToWebPage_m() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.azerbaijan.addEventListener("click", fl_ClickToGoToWebPage_n);
		
		function fl_ClickToGoToWebPage_n() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.turkey.addEventListener("click", fl_ClickToGoToWebPage_o);
		
		function fl_ClickToGoToWebPage_o() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
		
		this.kazakhstan.addEventListener("click", fl_ClickToGoToWebPage_p);
		
		function fl_ClickToGoToWebPage_p() {
			window.open("http://www.aacc.com/indonesia.html", "_parent");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.turkey = new lib.Turkey();
	this.turkey.setTransform(327.8,484.4,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.turkey, 0, 1, 1);

	this.azerbaijan = new lib.Azerbaijan();
	this.azerbaijan.setTransform(611.2,457.1,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.azerbaijan, 0, 1, 1);

	this.uzbekistan = new lib.Uzbekistan();
	this.uzbekistan.setTransform(742.8,396.8,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.uzbekistan, 0, 1, 1);

	this.kazakhstan = new lib.Kazakhstan();
	this.kazakhstan.setTransform(864.7,290.1,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.kazakhstan, 0, 1, 1);

	this.kyrgystan = new lib.Kyrgystan();
	this.kyrgystan.setTransform(1030.6,413.6,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.kyrgystan, 0, 1, 1);

	this.tajikistan = new lib.Tajikistan();
	this.tajikistan.setTransform(969.2,468.1,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.tajikistan, 0, 1, 1);

	this.afghanistan = new lib.Afghanistan();
	this.afghanistan.setTransform(908.6,557.4,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.afghanistan, 0, 1, 1);

	this.pakistan = new lib.Pakistan();
	this.pakistan.setTransform(973.1,620.5,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.pakistan, 0, 1, 1);

	this.indonesia = new lib.Indonesia();
	this.indonesia.setTransform(1626.2,1130.3,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.indonesia, 0, 1, 1);

	this.malaysia = new lib.Malaysia();
	this.malaysia.setTransform(1552.2,990.6,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.malaysia, 0, 1, 1);

	this.thailand = new lib.Thailand();
	this.thailand.setTransform(1519.8,820.7,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.thailand, 0, 1, 1);

	this.myanmar = new lib.Myanmar();
	this.myanmar.setTransform(1430.7,734.4,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.myanmar, 0, 1, 1);

	this.philippines = new lib.Philippines();
	this.philippines.setTransform(1852.8,820.7,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.philippines, 0, 1, 1);

	this.korea = new lib.Korea();
	this.korea.setTransform(1891.2,469.8,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.korea, 0, 1, 1);

	this.mongolia = new lib.Mongolia();
	this.mongolia.setTransform(1455.4,309.5,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.mongolia, 0, 1, 1);

	this.russia = new lib.Russia();
	this.russia.setTransform(1416.9,130,1,1,0,0,0,110.2,22.4);
	new cjs.ButtonHelper(this.russia, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.russia},{t:this.mongolia},{t:this.korea},{t:this.philippines},{t:this.myanmar},{t:this.thailand},{t:this.malaysia},{t:this.indonesia},{t:this.pakistan},{t:this.afghanistan},{t:this.tajikistan},{t:this.kyrgystan},{t:this.kazakhstan},{t:this.uzbekistan},{t:this.azerbaijan},{t:this.turkey}]}).wait(1));

	// Layer_1
	this.instance = new lib.MapNew_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1280,600,2560,1200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;