		var itemNameArray = ["Accordion","Button","Button Bar",
								"Browser","CheckBox","Combo Box","Date Picker","Date Stepper","Format Bar",
								"Image","Link Bar","List","Menu","Radio Button","Search",
								"Section Title","Tab Bar","Table","TextField","Text Box"];
								
		//var saveJason = {items:[{itemID: "test",itemWidth:""}]}
		var statesArray = [];
		var statesCounter = 0;
		var currentState = 0;
	   
	    $(document).ready(function(){
            $( init );
            //library tabs register
            $("#tabs nav ul li").each(function(){
                //register event for each tab
                var placeholder = $(this);
                var cat = placeholder.attr("data-category");
                
                //set it all hidden
                
                placeholder.bind("click",function(ev){
                    
                    $("#tabs nav ul li").removeClass("selected");
                    $(this).addClass("selected");
                    
                    $("#elementContainer .draggable .resizeable").parent().hide();
                    
                    if(cat == "recently") {
                        var eventTime = ev.timeStamp;
                        var largestDelta = 0;
                        var leastRecent;
                        for(var k=0; k < $("#elementContainer .draggable .resizeable").length; k++) {
                            $("#elementContainer .draggable .resizeable").each(function(){
                                var target = $(this);
                                var target_cat = target.attr("data-category").split(' ');
                                if(target_cat.length == 3 && target.parent().css("display") != "block" && (eventTime - target_cat[2] > largestDelta)) {
                                    largestDelta = eventTime - target_cat[2];
                                    leastRecent = target.parent();
                                }
                            });
                            largestDelta = 0;
                            leastRecent.prependTo("#elementContainer");
                            leastRecent.show();
                        }
                    } else {
                        $("#elementContainer .draggable .resizeable").each(function(){
                            var target = $(this);
                            var target_cat = target.attr("data-category").split(' ');
                            for(var j=0; j < target_cat.length; j++){
                                if(cat == target_cat[j]){
                                    target.parent().show();
                                    break;
                                }
                            }
                        });
                    }
                });
                
            });	
            
            //palette tabs register
            $("#palette fieldset").hide();
            $("#palette fieldset[data-category=coord]").show();
            $("#palette footer ul li").each(function(){
                //register event for each tab
                var placeholder = $(this);
                var cat = placeholder.attr("data-category");
                
                //set it all hidden
                
                placeholder.bind("click",function(){
                    
                    $("#palette footer ul li").removeClass("selected");
                    $(this).addClass("selected");
                    
                    $("fieldset").hide();
                
                    $("#palette fieldset").each(function(){
                        var target = $(this);
                        var target_cat = target.attr("data-category");
                            if(cat == target_cat){
                                target.show();
                            }
                    });
                });
                
            });
            
            //tool tips!
			$("label#width").qtip({
				content: 'Width of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#height").qtip({
				content: 'Height of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#x").qtip({
				content: 'X coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#y").qtip({
				content: 'Y coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for quickadd
			$("i.icon-plus-sign").qtip({
				content: 'Quickly add any element to your website just by typing the name', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for search
			$("div#searchBox").qtip({
				content: 'Search for any element', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for library elements
			$("div#drag1").qtip({
				content: 'Button - try dragging to the canvas!', //button text
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#drag2").qtip({ //mock browser
				content: 'Web browser - try dragging to the canvas!', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#drag3").qtip({
				content: 'Image - try drgging to the canvas!', //image
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#drag4").qtip({
				content: 'Text box - try dragging to the canvas!', //text box
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#drag5").qtip({
				content: 'Button bar box - try dragging to the canvas!', //button bar
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#drag6").qtip({
				content: 'Search box - try dragging to the canvas!', //search box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("h1.libHeader").qtip({
				content: 'Header - try dragging to the canvas!', //header box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
		});
        
        var libClicked;
        
        function init() {
			alert("hello");
            //Counter
            counter = 0;

			document.getElementById("itemWidth").value = "";
			document.getElementById("itemHeight").value = "";
			document.getElementById("itemX").value = "";
			document.getElementById("itemY").value = "";
			
			/*$( "#searchBoxField" ).autocomplete({
				source: itemNameArray
			});*/
			
			$('#palette').draggable();
            
            $('.drag').draggable({
                helper: 'clone',
                appendTo: '#pad',
                containment: '#pad',
                stop: function (ev, ui) {
                
                    // Keep track of time of use.
                    var target_cat = $(this).parent().attr("data-category").split(' ');
                    $(this).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+ev.timeStamp);
                    
                    var pos = ui.position;
                    objName = "#clonediv" + counter
                    $(objName).css({
                        "left": pos.left,
                        "top": pos.top,
                        "position": "absolute"
                    });
                    $(objName).removeClass("drag");
                    $(objName).addClass("resize ui-widget-content");// resize
                    $( ".resize" ).resizable();
                    //When an existiung object is dragged
                    $(objName).draggable({
                        containment: 'parent',
                        stop: function (ev, ui) {
                            var pos = $(ui.helper).offset();
                            console.log($(this).attr("id"));
                            console.log(pos.left)
                            console.log(pos.top)
                        }
                    });
                    
                }  
            });
            
            $('#pad').droppable({
                drop: function (ev, ui) {
                    if (ui.helper.attr('id').search(/drag[0-9]+/) != -1) {
                        counter++;
                        var element = $(ui.draggable).clone();
                        element.addClass("tempclass");
                        $(this).append(element);
                        $(".tempclass").attr("id", "clonediv" + counter);
                        $("#clonediv" + counter).removeClass("tempclass");
                        //Get the dynamically item id
                        draggedNumber = ui.helper.attr('id').search(/drag([0-9]+)/)
                        itemDragged = "dragged" + RegExp.$1
                        console.log(itemDragged)
                        $("#clonediv" + counter).addClass(itemDragged);
                        

                    }
                    
                }
            });
            
            $("#pad").click(function(e){
                if(libClicked != null) {
                    var clone = $(libClicked).clone();
                    clone.attr("style", "left: " + e.offsetX + "px; top: " + e.offsetY + "px; position : absolute;");
                    $("#pad").append(clone);
                    libClicked = null;
                    //alert(e.pageX +', '+ e.pageY);
                }
            });
        }
								
		var currentItem = "";	//id for current selected item
		var copyed;
	
		function copy(){
			copyed = $(".currItem");
		}

		function past() {
            copyed.removeClass("currItem");
			var paste = copyed.clone();
            paste.attr("style", copyed.attr("style"));
            paste.css({
                        "left": 0,
                        "top": 0,
                        "position": "absolute"
                    });
            paste.attr("id", "clonediv" + (++counter));
            paste.find('.ui-resizable-handle').remove();
            paste.addClass("resize ui-widget-content");// resize
            paste.resizable();
			$("#pad").append(paste);
			paste.draggable({
                containment: 'parent',
                stop: function (ev, ui) {
                    paste.addClass("resize ui-widget-content");// resize
                    paste.resizable();
                    var pos = $(ui.helper).offset();
                    console.log($(this).attr("id"));
                    console.log(pos.left)
                    console.log(pos.top)
                }
            });
		}
		
		function selectedItem(obj) {
			//init attributes bar
			$('#boldButton').removeClass("selectedStyle");
			$('#italicButton').removeClass("selectedStyle");
			$('#underlineButton').removeClass("selectedStyle");
			$('#strikethroughButton').removeClass("selectedStyle");
			$('#lockButton').removeClass("selectedStyle");
		
			if($('#'+obj.id).hasClass("resize")){
				if(currentItem!="") {
					$('#'+currentItem).removeClass("currItem");
					currentItem=obj.id;	
					document.getElementById(currentItem).className += " currItem"; 
				} else {
				//obj.style.width = "100%";
				currentItem=obj.id;	
				document.getElementById(currentItem).className += " currItem"; 
				}
				
				//set attributes bar
				document.getElementById("itemWidth").value = $(obj).width();
				document.getElementById("itemHeight").value = $(obj).height();;
				document.getElementById("itemX").value = $(obj).position().left;
				document.getElementById("itemY").value = $(obj).position().top;
				
				if($("#"+currentItem).css("font-weight")==700) {
					document.getElementById("boldButton").className += " selectedStyle";
				}
				if($("#"+currentItem).css("font-style")=="italic") {
					document.getElementById("italicButton").className += " selectedStyle";
				}
				if($("#"+currentItem).css("text-decoration")=="underline") {
					document.getElementById("underlineButton").className += " selectedStyle";
				}
				if($("#"+currentItem).css("text-decoration")=="line-through") {
					//alert("1");
					document.getElementById("strikethroughButton").className += " selectedStyle";
				}
				if($('#'+currentItem).hasClass("lockedItem")) {
					document.getElementById('lockButton').className += " selectedStyle";	
				}
			} else {
                libClicked = obj;
            }
		}
		
		function changeItemWidth(obj, event) {
			//alert("!");
			if(event.keyCode==13 && obj.value!="" && currentItem!="") {
			//alert("!");
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				
				$("#"+currentItem).width(obj.value);
				//obj.value="";
			}
		}
		function changeItemHeight(obj, event) {
			if(event.keyCode==13 && obj.value!="" && currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				$("#"+currentItem).height(obj.value);
				//obj.value="";
			}
		}
		function changeItemX(obj, event) {
			if(event.keyCode==13 && obj.value!="" && currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				//alert("test");
				$("#"+currentItem).css({
					position: "relative",
					//top: obj.value + "px",
					left: obj.value + "px"
				})
				//obj.value="";
			}
		}
		function changeItemY(obj, event) {
			if(event.keyCode==13 && obj.value!="" && currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				$("#"+currentItem).css({
					position: "relative",
					top: obj.value + "px",
					//left: obj.value + "px"
				})
				//obj.value="";
			}
		}
		function cleanWindow(obj) {
			obj.value="";
		}
		function searchItem(keyword, event) {
			//alert(event.keyCode);
			//alert(keyword);
			if (keyword == "") {
                //document.getElementById("ulItems").style.display = "none";
				$("#ulItems").css({
					display: "none"
				})
                return;
            } else {	
				var liLength = document.getElementById("ulItems").getElementsByTagName("li").length;
				if(event.keyCode==13 && liLength>0) {															
					addItemToPad(document.getElementById("li_0").innerHTML);
					//alert(document.getElementById("li_0").innerHTML);
					document.getElementById("searchfield").value="";
					$("#ulItems").css({
						display: "none"
					})
				}else {
					autoComplete(keyword);
					//document.getElementById("ulItems").style.display = "";
					$("#ulItems").css({
						display: "block"
					})
				}
			}
		}
		
		function autoComplete(keyword) {
			var count = 0;
			var liHtmlFirst = "<li style=\"color:black;\" id=\"li_";
			var liHtmlSecond = "\">"
			var liHtmlThird = "</li>";
			var liHtml = "";
			
			var i = 0;
			var j = 0;
			var showUp = true;
			for(i = 0; i < itemNameArray.length; i++) {
				for(j = 0; j < keyword.length; j++) {
					if(keyword[j].toUpperCase()!=itemNameArray[i][j] && keyword[j].toLowerCase()!=itemNameArray[i][j]) {
						showUp = false;
					}
				}
				if(showUp) {
					liHtml = liHtml+liHtmlFirst+count.toString()+liHtmlSecond+itemNameArray[i]+liHtmlThird;
					count++;
				}
				showUp = true;
			}

            document.getElementById("ulItems").innerHTML = liHtml;
            
        }
		
		function addItemToPad(itemName) {
			switch(itemName) {
				case "Accordion":
					copyed = $("#drag11");
					break;
				case "Button":
					copyed = $("#drag1");
					break;
				case "Button Bar":
					copyed = $("#drag5");
					break;
				case "Browser":
					copyed = $("#drag2");
					break;
				case "CheckBox":
					copyed = $("#drag8");
					break;
				case "Combo Box":
					copyed = $("#drag10");
					break;
				case "Date Picker":
					copyed = $("#drag19");
					break;
				case "Date Stepper":
					copyed = $("#drag21");
					break;
				case "Format Bar":
					copyed = $("#drag16");
					break;
				case "Image":
					copyed = $("#drag3");
					break;
				case "Link Bar":
					copyed = $("#drag13");
					break;
				case "List":
					copyed = $("#drag20");
					break;
				case "Menu":
					copyed = $("#drag17");
					break;
				case "Radio Button":
					copyed = $("#drag9");
					break;
				case "Search":
					copyed = $("#drag6");
					break;
				case "Section Title":
					copyed = $("#drag7");
					break;
				case "Tab Bar":
					copyed = $("#drag12");
					break;
				case "Table":
					copyed = $("#drag15");
					break;
				case "TextField":
					copyed = $("#drag4");
					break;
				case "Text Box":
					copyed = $("#drag18");
					break;
			}
			past();
			//document.getElementById("pad").innerHTML = "<div id=\"sbtn\" class=\"ui-draggable\" data-lib-width=\"108\" data-lib-height=\"20\" onclick=\"test()\"><span class=\"sbtntext\">Button Text</span></div>";
		}
		
		function setAttributesVisibility(b) {
			/*if(b) {
				document.getElementById("palette").style.display="block";
			} else {
				document.getElementById("palette").style.display="none";
			}*/
			var el = document.getElementById("palette");
			if(el.style.display == "none"){
				el.style.display = "block";
			} else {
				el.style.display = "none";
			}
				
		}
		
		
		var computedStyle = function (el,style) {
        	var cs;
       		if (typeof el.currentStyle != 'undefined'){
            	cs = el.currentStyle;
        	} else {
            	cs = document.defaultView.getComputedStyle(el,null);
        	}
        	return  cs[style];
    	}  
		
		function setItemBold() {
			//alert("!");
			if(currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				saveCurrentState();
				//alert($("#"+currentItem).css("font-weight"));
				if($("#"+currentItem).css("font-weight")==700) {
					$('#boldButton').removeClass("selectedStyle");
					$("#"+currentItem).css("font-weight", "normal");
				} else {
					document.getElementById("boldButton").className += " selectedStyle";				
					$("#"+currentItem).css("font-weight", "bold");
				}
			}
		}
		
		function setItemItalic() {
			//alert("!");
			if(currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				
				saveCurrentState();
				
				if($("#"+currentItem).css("font-style")=="italic") {
					$('#italicButton').removeClass("selectedStyle");
					$("#"+currentItem).css("font-style", "normal");
				} else {
					document.getElementById("italicButton").className += " selectedStyle";
					$("#"+currentItem).css("font-style", "italic");
				}
			}
		}
		
		function setItemUnderline() {
			if(currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				//alert($("#"+currentItem).css("text-decoration"));
				saveCurrentState();
				if($("#"+currentItem).css("text-decoration")=="underline") {
					$("#"+currentItem).css("text-decoration", "none");
					$('#underlineButton').removeClass("selectedStyle");
					//$('#strikethroughButton').removeClass("selectedStyle");
				} else {
					//$('#underlineButton').removeClass("selectedStyle");
					$('#strikethroughButton').removeClass("selectedStyle");
					$("#"+currentItem).css("text-decoration", "underline");
					document.getElementById("underlineButton").className += " selectedStyle";
				}
			}
		}
		
		function setItemStrikeThrough() {
			if(currentItem!="") {
				if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				saveCurrentState();
				//alert($("#"+currentItem).css("text-decoration"));
				if($("#"+currentItem).css("text-decoration")=="line-through") {
					$("#"+currentItem).css("text-decoration", "none");
					//$('#underlineButton').removeClass("selectedStyle");
					$('#strikethroughButton').removeClass("selectedStyle");
				} else {
					$('#underlineButton').removeClass("selectedStyle");
					//$('#strikethroughButton').removeClass("selectedStyle");
					$("#"+currentItem).css("text-decoration", "line-through");
					document.getElementById("strikethroughButton").className += " selectedStyle";
				}
			}
		}
		
		function lockItem() {
			if(currentItem!="") {
				//alert("!");
				if($('#'+currentItem).hasClass("lockedItem")) {
					$('#'+currentItem).removeClass("lockedItem");
					$('#lockButton').removeClass("selectedStyle");
				} else {
					//alert(currentItem);
					document.getElementById(currentItem).className += " lockedItem";
					document.getElementById('lockButton').className += " selectedStyle";
				}
			}
		}
		
		function removeItem() {
			if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}
				
			$('#'+currentItem).remove();
		}
		
		var itemArray=[];
		function saveToJason() {
			var temp = document.getElementsByClassName("resize");
			var i = 0;
			for(i=0;i<temp.length;i++) {
				//alert(itemArray[i]);
				itemArray[i]=$(temp[i]).clone();
			}
		}
		
		function loadFromJason() {
			//var itemArray = document.getElementsByClassName("resize");
			//alert("!");
			alert("you are going to lost your current process");
			cleanItemsOnPad();
			var i = 0;
			for(i=0;i<itemArray.length;i++) {
				//alert(itemArray[i]);
				$("#pad").append(itemArray[i]);
			}
		}
		
		function cleanItemsOnPad() {
			var temp = document.getElementsByClassName("resize");
			var i = 0;
			for(i=0;i<temp.length;i++) {
				//alert(itemArray[i]);
				$(temp[i]).remove();
			}
		}
		
		function saveItemProcess() {
		}
		
		var tempTextObj;
		function changeTextInsideItem(obj) {
			//alert(obj.innerHTML);
			event.stopPropagation();
			tempTextObj = obj;
			document.getElementById("itemTextBox").style.display="block";
			document.getElementById("itemText").value=obj.innerHTML.toString();
		}
		
		function changeItemText(obj,event) {
			if(event.keyCode==13 && obj.value!="" && currentItem!="") {
				/*if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}*/
				
				//alert(tempTextObj.innerHTML);
				tempTextObj.innerHTML=obj.value;
				//tempTextObj="";
				document.getElementById("itemTextBox").style.display="none";
			}
		}
		
		function saveCurrentState(){
			statesArray.push($('#pad').clone());
			currentState++;
			//alert(statesArray[currentState-1].innerHTML);
			//if(b) {
				//go to next state
			//} else {
				//go to previous state
			//}
		}
		
		function undoPad(){
			//alert(currentState);
			//document.getElementById("pad")=statesArray[--currentState];
			if(currentState==0) { return }
			$('#pad').replaceWith(statesArray[--currentState]);
			init();
		}
		
