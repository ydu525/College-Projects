$(document).ready(function(){
            $( init );
            
            $.fn.qtip.zindex = 100000;
            
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
            
            $("i.icon-undo").qtip({
				content: 'Undo', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-repeat").qtip({
				content: 'Redo', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-circle-arrow-up").qtip({
				content: 'Move up one level', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-circle-arrow-down").qtip({
				content: 'Move down one level', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-lock").qtip({
				content: 'Lock', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-group").qtip({
				content: 'Group', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
            
            $("i.icon-remove").qtip({
				content: 'Remove', 
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
        var padClicked = null;
        var dragging = 0;
        
        function init() {
            //Counter
            counter = 0;
                      
			document.getElementById("itemWidth").value = "";
			document.getElementById("itemHeight").value = "";
			document.getElementById("itemX").value = "";
			document.getElementById("itemY").value = "";
			document.getElementById("searchfield").value="";
			
			$('#palette').draggable();
            
            
            $('.drag').draggable({
                helper: 'clone',
                appendTo: '#pad',
                containment: '#pad',
                drag: function () {
                    dragging = 1;
                },
                stop: function (ev, ui) {
                
                    // Keep track of time of use.
                    var target_cat = $(this).parent().attr("data-category").split(' ');
                    $(this).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+ev.timeStamp);
                    
                    var pos = ui.position;
                    var objName = "#clonediv" + counter
                    $(objName).css({
                        "left": pos.left,
                        "top": pos.top,
                        "z-index": 5000 + counter,
                        "position": "absolute"
                    });
                    $(objName).removeClass("drag");
                    $(objName).addClass("resize ui-widget-content");// resize
                    $( ".resize" ).resizable({
						start: function () {
							saveCurrentState();
						}
					});
                    //When an existiung object is dragged
                    $(objName).draggable({
                        containment: 'parent',
                        drag: function(){
                            dragging = 1;
                        },
                        stop: function(){
                            padClicked = null;
                        },
                        start: function(){
                            saveCurrentState();
                        }
                    });
                    $(objName).click(function(e) {
                        if(padClicked == null && libClicked == null) {
                            padClicked = $(objName);
                            e.stopPropagation();
                        }
                    });   
                }  
            });
            
			
			
            $(document).mouseup(function(){
				//alert("!");
				clearTimeout(itemTimer);
                dragging = 0;
                $(document).unbind('mousemove');
            });
            
            $('#pad').droppable({		
					drop: function (ev, ui) {
						if (ui.helper.attr('id').search(/drag[0-9]+/) != -1) {
							counter++;
							var element = $(ui.draggable).clone();
							$(ui.helper).remove();
							saveCurrentState();
							element.addClass("tempclass");
							$(this).append(element);
							$(".tempclass").attr("id", "clonediv" + counter);
							$("#clonediv" + counter).removeClass("tempclass");
							//Get the dynamically item id
							draggedNumber = ui.helper.attr('id').search(/drag([0-9]+)/)
							itemDragged = "dragged" + RegExp.$1
							//console.log(itemDragged)
							$("#clonediv" + counter).addClass(itemDragged);
                    }                  
                }					
			});		
            
            $("#pad").click(function(e){
                if (dragging == 0 && libClicked != null){
                    counter++;
                    
                    // Keep track of time of use.
                    var target_cat = $(libClicked).parent().attr("data-category").split(' ');
                    $(libClicked).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+e.timeStamp);
                    
                    var clone = $(libClicked).clone();
                    draggedNumber = clone.attr('id').search(/drag([0-9]+)/);
                    itemDragged = "dragged" + RegExp.$1;
                    clone.attr("id", "clonediv" + counter);
                    clone.attr("style", $(libClicked).attr("style"));
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    clone.css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "z-index": 5000 + counter,
                        "position": "absolute"
                    });
                    clone.removeClass("drag");
                    clone.addClass(itemDragged);
					
					saveCurrentState();
					
                    $("#pad").append(clone);
                    clone.addClass("resize ui-widget-content");// resize
                    clone.resizable({
						start: function () {
							saveCurrentState();
						}
					});
                    clone.draggable({
                        containment: 'parent',
                        drag: function () {
                            dragging = 1;
                        }
                    });
                    clone.click(function(e) {
                        if(padClicked == null && libClicked == null) {
                            padClicked = clone;
                            e.stopPropagation();
                        }
                    });
                    libClicked = null;
                } else if (dragging == 0 && padClicked != null && !$(padClicked).hasClass("lockedItem")) {
				
					saveCurrentState();
					
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    $(padClicked).css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "position": "absolute"
                    });
                    padClicked = null;
                }
            });
        }

		var itemNameArray = ["Accordion","Application","Button","Button Bar",
								"Browser","CheckBox","Combo Box","Date Picker","Date Steper","Format Bar",
								"Image","ipad","Link Bar","List","Menu","Radio Button","Search",
								"Section Title","Tab Bar","Table","TextField","Text Box","Vertical Tab"];
								
		var currentItem = "";	//id for current selected item
		var copyed;
	
		function copy(){
			copyed = $(".currItem");
		}
        
        function cut(){
			copyed = $(".currItem");
			saveCurrentState();
            $(".currItem").remove();
		}

		function paste() {
            copyed.removeClass("currItem");
			var paste = copyed.clone();
            draggedNumber = paste.attr('id').search(/drag([0-9]+)/);
            itemDragged = "dragged" + RegExp.$1;
            paste.attr("id", "clonediv" + counter);
            paste.attr("style", copyed.attr("style"));
            paste.css({
                        "left": 0,
                        "top": 0,
                        "position": "absolute"
                    });
            paste.attr("id", "clonediv" + (++counter));
            paste.find('.ui-resizable-handle').remove();
            paste.removeClass("drag");
            paste.addClass(itemDragged);
            paste.addClass("resize ui-widget-content");// resize
            paste.resizable({
				start: function () {
					saveCurrentState();
				}
			});
			
			saveCurrentState();
			
			$("#pad").append(paste);
			paste.draggable({
                containment: 'parent',
                drag: function () {
                    dragging = 1;
                },
                stop: function(){
                    padClicked = null;
                },
                start: function(){
                    saveCurrentState();
                }
            });
            paste.click(function(e) {
                if(padClicked == null && libClicked == null) {
                    padClicked = paste;
                    e.stopPropagation();
                }
            });
		}
		
		function selectedItem(obj) {
			$('#boldButton').removeClass("selectedStyle");
			$('#italicButton').removeClass("selectedStyle");
			$('#underlineButton').removeClass("selectedStyle");
			$('#strikethroughButton').removeClass("selectedStyle");
			$('#lockButton').removeClass("selectedStyle");
			
			if($('#'+obj.id,'#pad').length == 1){
				if(currentItem!="") {
					$('#'+currentItem).removeClass("currItem");
					currentItem=obj.id;	
					document.getElementById(currentItem).className += " currItem"; 
				} else {
                    currentItem=obj.id;	
                    document.getElementById(currentItem).className += " currItem"; 
				}
				
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
				
				saveCurrentState();
				
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
				
				saveCurrentState();
				
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
				saveCurrentState();
				
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
				
				saveCurrentState();
				
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
					addItemToPad(document.getElementById("li_0").innerHTML,event);
					//alert(document.getElementById("li_0").innerHTML);
					document.getElementById("searchfield").value="";
					$("#ulItems").css({
						display: "none"
					})
				}else {
					autoComplete(keyword);
					//document.getElementById("ulItems").style.display = "";
                    //if(liLength > 0) {
                        $("#ulItems").css({
                            display: "block"
                        })
                    /*} else {
                        $("#ulItems").css({
                            display: "none"
                        })
                    }*/
					
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
		
		function addItemToPad(itemName,e) {
			//saveCurrentState();
			
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
				case "ipad":
					copyed = $("#drag23");
					break;
				case "Application":
					copyed = $("#drag22");
					break;
			}
            // Keep track of time of use.
            var target_cat = copyed.parent().attr("data-category").split(' ');
            copyed.parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+e.timeStamp);
			paste();
			//document.getElementById("pad").innerHTML = "<div id=\"sbtn\" class=\"ui-draggable\" data-lib-width=\"108\" data-lib-height=\"20\" onclick=\"test()\"><span class=\"sbtntext\">Button Text</span></div>";
		}
		
		function setAttributesVisibility(b) {
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
		function toggleGrid(){
			var el = document.getElementById("pad");
			if(el.style.background == "white")
				el.style.background = "url(./images/grid_20px.gif)";
			else
				el.style.background = "white";
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
				
				//saveCurrentState();
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
				saveCurrentState();
				//alert($("#"+currentItem).css("text-decoration"));
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
				//alert($("#"+currentItem).css("text-decoration"));
				saveCurrentState();
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
				saveCurrentState();
				
				if($('#'+currentItem).hasClass("lockedItem")) {
					$('#'+currentItem).removeClass("lockedItem");
					$('#lockButton').removeClass("selectedStyle");
                    $('#'+currentItem).draggable("option","disabled", false);
                    $('#'+currentItem).resizable("option","disabled", false);
				} else {
					document.getElementById(currentItem).className += " lockedItem";
					document.getElementById('lockButton').className += " selectedStyle";
                    $('#'+currentItem).draggable("option","disabled", true);
                    $('#'+currentItem).resizable("option","disabled", true);
				}
			}
		}
		
		function removeItem() {
			saveCurrentState();
			
			if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
				}				
			$('#'+currentItem).remove();
		}
		
		var tempTextObj;
		var itemTimer;
		
		function changeTextInsideItem(obj, event) {
			//alert("func");
			//clearTimeout(itemTimer);
			itemTimer = setTimeout(function(){
				//alert("func");
				//alert(event);
				//clearTimeout(itemTimer);
                if(dragging != 1) {
                    padClicked = null;
                    event.stopPropagation();
                    tempTextObj = obj;
                    document.getElementById("itemTextBox").style.display="block";
                    
					
					var prevTextValue = obj.innerHTML.toString();
					document.getElementById("itemText").value=prevTextValue;
                    //alert(event.keyCode);
                    $("#itemText").keypress(function(e) {
                        //alert(e.which);
						//saveCurrentState();
                        if(e.which==13) {
							//saveCurrentState();
							var newTextValue = document.getElementById("itemText").value;
                            padClicked = null;
                            if(newTextValue != "" && newTextValue != prevTextValue) {
                                //saveCurrentState();
								tempTextObj.innerHTML=newTextValue;
                            } 
                            document.getElementById("itemTextBox").style.display="none";
                        }
                    });	
                }	
			},1000);
		}
        
        function moveDown() {
            var next_idx = 0;
            var next_ptr = false;
			if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
			}
			
			saveCurrentState();
            
            $("#pad>div").each(function () {
                if( $(this).attr('id') != $('#'+currentItem).attr('id') &&
                    next_idx < $(this).css('z-index') &&
                    $(this).css('z-index') < $('#'+currentItem).css('z-index')
                ){
                    next_idx = $(this).css('z-index');
                    next_ptr = $(this);
                }
            });
            
            if(next_ptr) {
                $('#'+currentItem).css({"z-index" : next_ptr.css('z-index')});
                next_ptr.css({'z-index' : Number(next_ptr.css('z-index'))+1})
            } 
        }
        
        function moveUp() {
            var next_idx = 9999;
            var next_ptr = false;
			if($('#'+currentItem).hasClass("lockedItem")) {
					alert("selected item is locked");
					return
			}
			
			saveCurrentState();
            
            $("#pad>div").each(function () {
                if( $(this).attr('id') != $('#'+currentItem).attr('id') &&
                    next_idx > $(this).css('z-index') &&
                    $(this).css('z-index') > $('#'+currentItem).css('z-index')
                ){
                    next_idx = $(this).css('z-index');
                    next_ptr = $(this);
                }
            });
            
            if(next_ptr) {
                $('#'+currentItem).css({"z-index" : next_ptr.css('z-index')});
                next_ptr.css({'z-index' : Number(next_ptr.css('z-index'))-1})
            } 
        }
        
        /*save and load functions */
        function savePage() {
        	var script = document.createElement('script');
        	var dataKey = 'save1';
        	var dataContent = document.getElementById('pad').innerHTML;
        	script.src = 'http://198.101.235.162/save?groupKey=group10_MC45NTMyMDkzMDE0NTY4MDk&dataKey=' + encodeURIComponent(dataKey) + '&content=' + encodeURIComponent(dataContent) + '&respVarName=serverResponse';
        	script.onload = function() {
        				//alert(JSON.parse(serverResponse).success);
        				//console.log(serverResponse);
        				//console.log(JSON.parse(serverResponse));
        			};
        	document.getElementById('scriptZone').appendChild(script);
        
        }
        
        function loadPage() {
        	var script = document.createElement('script');
        	var dataKey = 'save1';
        	script.src = 'http://198.101.235.162/load?groupKey=group10_MC45NTMyMDkzMDE0NTY4MDk&dataKey=' + encodeURIComponent(dataKey) + '&respVarName=serverResponse';
        	script.onload = function() {
        				counter=0;
        				//alert(JSON.parse(serverResponse).content);
        				//console.log(serverResponse);
        				//console.log(JSON.parse(serverResponse));
        				document.getElementById('pad').innerHTML=JSON.parse(serverResponse).content;
        				
        				
        				
        				$("#pad > .ui-draggable").each(function(){
        					
        							counter++;
        							var tempItem = $(this);
        							
        							//alert(tempItem.id);
        							tempItem.find('.ui-resizable-handle').remove();
        							//tempItem.removeClass("drag");
        							//tempItem.addClass(itemDragged);
        							tempItem.addClass("resize ui-widget-content");// resize
        							tempItem.resizable({
										start: function () {
											saveCurrentState();
										}
									});
        							
        							tempItem.draggable({
        								containment: 'parent',
        								drag: function () {
        									dragging = 1;
        								},
                                        stop: function(){
                                            padClicked = null;
                                        },
                                        start: function(){
                                            saveCurrentState();
                                        }
        							});
        							tempItem.click(function(e) {
        								if(padClicked == null && libClicked == null) {
        									padClicked = tempItem;
        									e.stopPropagation();
        								}
        							});
        				    	});
        				    	
        				    	$('#pad').droppable({		
									drop: function (ev, ui) {
										if (ui.helper.attr('id').search(/drag[0-9]+/) != -1) {
											counter++;
											var element = $(ui.draggable).clone();
											$(ui.helper).remove();
											saveCurrentState();
											element.addClass("tempclass");
											$(this).append(element);
											$(".tempclass").attr("id", "clonediv" + counter);
											$("#clonediv" + counter).removeClass("tempclass");
											//Get the dynamically item id
											draggedNumber = ui.helper.attr('id').search(/drag([0-9]+)/)
											itemDragged = "dragged" + RegExp.$1
											//console.log(itemDragged)
											$("#clonediv" + counter).addClass(itemDragged);
										}                  
									}					
								});

								$("#pad").click(function(e){
								if (dragging == 0 && libClicked != null){
									counter++;
									
									// Keep track of time of use.
									var target_cat = $(libClicked).parent().attr("data-category").split(' ');
									$(libClicked).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+e.timeStamp);
									
									var clone = $(libClicked).clone();
									draggedNumber = clone.attr('id').search(/drag([0-9]+)/);
									itemDragged = "dragged" + RegExp.$1;
									clone.attr("id", "clonediv" + counter);
									clone.attr("style", $(libClicked).attr("style"));
									var posX = 0;
									var posY = 0;
									if($(e.target).attr('id') != 'pad') {
										var tmp = $(e.target);
										while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
											var pos = tmp.position();
											posX += pos.left;
											posY += pos.top;
											tmp = tmp.parent();
										}
										var pos = tmp.position();
										posX += pos.left;
										posY += pos.top;
									}
									
									var offX, offY;
									if (!(e.offsetX || e.offsetY)) {
										offX = e.pageX - $(e.target).offset().left;
										offY = e.pageY - $(e.target).offset().top;
									}
									else {
										offX = e.offsetX;
										offY = e.offsetY;
									}
									
									clone.css({
										"left": offX + posX,
										"top": offY + posY,
										"z-index": 5000 + counter,
										"position": "absolute"
									});
									clone.removeClass("drag");
									clone.addClass(itemDragged);
									
									saveCurrentState();
									
									$("#pad").append(clone);
									clone.addClass("resize ui-widget-content");// resize
									clone.resizable({
										start: function () {
											saveCurrentState();
										}
									});
									clone.draggable({
										containment: 'parent',
										drag: function () {
											dragging = 1;
										},
                                        stop: function(){
                                            padClicked = null;
                                        },
                                        start: function(){
                                            saveCurrentState();
                                        }
									});
									clone.click(function(e) {
										if(padClicked == null && libClicked == null) {
											padClicked = clone;
											e.stopPropagation();
										}
									});
									libClicked = null;
								} else if (dragging == 0 && padClicked != null && !$(padClicked).hasClass("lockedItem")) {
									saveCurrentState();
									var posX = 0;
									var posY = 0;
									if($(e.target).attr('id') != 'pad') {
										var tmp = $(e.target);
										while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
											var pos = tmp.position();
											posX += pos.left;
											posY += pos.top;
											tmp = tmp.parent();
										}
										var pos = tmp.position();
										posX += pos.left;
										posY += pos.top;
									}
									var offX, offY;
									if (!(e.offsetX || e.offsetY)) {
										offX = e.pageX - $(e.target).offset().left;
										offY = e.pageY - $(e.target).offset().top;
									}
									else {
										offX = e.offsetX;
										offY = e.offsetY;
									}
									
									$(padClicked).css({
										"left": offX + posX,
										"top": offY + posY,
										"position": "absolute"
									});
									padClicked = null;
								}
							});       				    	        				    	
        			};
			document.getElementById('scriptZone').appendChild(script);       	
        }
		
		function saveCurrentState(){
			//alert("!");
			//var pad = $('#pad').clone();
			//$('#pad>#drag1, #pad>#drag4').remove();
			
			statesArray[currentState]=($('#pad').clone());
			//currentState++;
			//alert(statesArray[currentState-1].innerHTML);
			//if(b) {
				//go to next state
			boundryState=currentState;
			currentState++;
				
			//} else {
				//go to previous state
				//currentState--;
			//}
		}
		
		function undoPad(){
			//alert(currentState);
			//alert(statesArray[0].innerHTML);
			//document.getElementById("pad")=statesArray[--currentState];
			if(currentState==0) { return }
			statesArray[currentState]=($('#pad').clone());
			currentState--;
			//currentState--;
			//alert(currentState);
			$('#pad').replaceWith(statesArray[currentState]);
			
			$("#pad>.ui-draggable").each(function(){
				var tempItem = $(this);
				tempItem.find('.ui-resizable-handle').remove();
				//tempItem.removeClass("drag");
				//tempItem.addClass(itemDragged);
				tempItem.addClass("resize ui-widget-content");// resize
				tempItem.resizable({
					start: function () {
						saveCurrentState();
					}
				});
				
				tempItem.draggable({
					containment: 'parent',
					drag: function () {
						dragging = 1;
					},
                    stop: function(){
                        padClicked = null;
                    },
                    start: function(){
                        saveCurrentState();
                    }
				});
				tempItem.click(function(e) {
					if(padClicked == null && libClicked == null) {
						padClicked = tempItem;
						e.stopPropagation();
					}
				});
            });
			
			$('#pad').droppable({		
				drop: function (ev, ui) {
					if (ui.helper.attr('id').search(/drag[0-9]+/) != -1) {
							counter++;
							var element = $(ui.draggable).clone();
							$(ui.helper).remove();
							saveCurrentState();
							element.addClass("tempclass");
							$(this).append(element);
							$(".tempclass").attr("id", "clonediv" + counter);
							$("#clonediv" + counter).removeClass("tempclass");
							//Get the dynamically item id
							draggedNumber = ui.helper.attr('id').search(/drag([0-9]+)/)
							itemDragged = "dragged" + RegExp.$1
							//console.log(itemDragged)
							$("#clonediv" + counter).addClass(itemDragged);
                    }                  
                }					
			});	

			$("#pad").click(function(e){
                if (dragging == 0 && libClicked != null){
                    counter++;
                    
                    // Keep track of time of use.
                    var target_cat = $(libClicked).parent().attr("data-category").split(' ');
                    $(libClicked).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+e.timeStamp);
                    
                    var clone = $(libClicked).clone();
                    draggedNumber = clone.attr('id').search(/drag([0-9]+)/);
                    itemDragged = "dragged" + RegExp.$1;
                    clone.attr("id", "clonediv" + counter);
                    clone.attr("style", $(libClicked).attr("style"));
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    clone.css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "z-index": 5000 + counter,
                        "position": "absolute"
                    });
                    clone.removeClass("drag");
                    clone.addClass(itemDragged);
					
					saveCurrentState();
					
                    $("#pad").append(clone);
                    clone.addClass("resize ui-widget-content");// resize
                    clone.resizable({
						start: function () {
							saveCurrentState();
						}
					});
                    clone.draggable({
                        containment: 'parent',
                        drag: function () {
                            dragging = 1;
                        },
                        stop: function(){
                            padClicked = null;
                        },
                        start: function(){
                            saveCurrentState();
                        }
                    });
                    clone.click(function(e) {
                        if(padClicked == null && libClicked == null) {
                            padClicked = clone;
                            e.stopPropagation();
                        }
                    });
                    libClicked = null;
                } else if (dragging == 0 && padClicked != null && !$(padClicked).hasClass("lockedItem")) {
					saveCurrentState();
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    $(padClicked).css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "position": "absolute"
                    });
                    padClicked = null;
                }
            });
		}
		
		function redoPad(){
			//alert(currentState);
			//alert(statesArray[0].innerHTML);
			//document.getElementById("pad")=statesArray[--currentState];
			//if(currentState==0) { return }
			//saveCurrentState();
			//currentState--;
			//alert(currentState);
			if(currentState>boundryState){return;}
			statesArray[currentState]=($('#pad').clone());
			currentState++;
			$('#pad').replaceWith(statesArray[currentState]);
			
			$("#pad>.ui-draggable").each(function(){
				var tempItem = $(this);
				tempItem.find('.ui-resizable-handle').remove();
				//tempItem.removeClass("drag");
				//tempItem.addClass(itemDragged);
				tempItem.addClass("resize ui-widget-content");// resize
				tempItem.resizable({
					start: function () {
						saveCurrentState();
					}
				});
				
				tempItem.draggable({
					containment: 'parent',
					drag: function () {
						dragging = 1;
					},
                    stop: function(){
                        padClicked = null;
                    },
                    start: function(){
                        saveCurrentState();
                    }
				});
				tempItem.click(function(e) {
					if(padClicked == null && libClicked == null) {
						padClicked = tempItem;
						e.stopPropagation();
					}
				});
            });
			
			$('#pad').droppable({		
				drop: function (ev, ui) {
					if (ui.helper.attr('id').search(/drag[0-9]+/) != -1) {
							counter++;
							var element = $(ui.draggable).clone();
							$(ui.helper).remove();
							saveCurrentState();
							element.addClass("tempclass");
							$(this).append(element);
							$(".tempclass").attr("id", "clonediv" + counter);
							$("#clonediv" + counter).removeClass("tempclass");
							//Get the dynamically item id
							draggedNumber = ui.helper.attr('id').search(/drag([0-9]+)/)
							itemDragged = "dragged" + RegExp.$1
							//console.log(itemDragged)
							$("#clonediv" + counter).addClass(itemDragged);
                    }                  
                }					
			});	

			$("#pad").click(function(e){
                if (dragging == 0 && libClicked != null){
                    counter++;
                    
                    // Keep track of time of use.
                    var target_cat = $(libClicked).parent().attr("data-category").split(' ');
                    $(libClicked).parent().attr("data-category", target_cat[0] + ' ' + target_cat[1] +' '+e.timeStamp);
                    
                    var clone = $(libClicked).clone();
                    draggedNumber = clone.attr('id').search(/drag([0-9]+)/);
                    itemDragged = "dragged" + RegExp.$1;
                    clone.attr("id", "clonediv" + counter);
                    clone.attr("style", $(libClicked).attr("style"));
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    clone.css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "z-index": 5000 + counter,
                        "position": "absolute"
                    });
                    clone.removeClass("drag");
                    clone.addClass(itemDragged);
					
					saveCurrentState();
					
                    $("#pad").append(clone);
                    clone.addClass("resize ui-widget-content");// resize
                    clone.resizable({
						start: function () {
							saveCurrentState();
						}
					});
                    clone.draggable({
                        containment: 'parent',
                        drag: function () {
                            dragging = 1;
                        },
                        stop: function(){
                            padClicked = null;
                        },
                        start: function(){
                            saveCurrentState();
                        }
                    });
                    clone.click(function(e) {
                        if(padClicked == null && libClicked == null) {
                            padClicked = clone;
                            e.stopPropagation();
                        }
                    });
                    libClicked = null;
                } else if (dragging == 0 && padClicked != null && !$(padClicked).hasClass("lockedItem")) {
					saveCurrentState();
                    var posX = 0;
                    var posY = 0;
                    if($(e.target).attr('id') != 'pad') {
                        var tmp = $(e.target);
                        while(tmp.attr('id').search(/clonediv[0-9]+/) == -1) {
                            var pos = tmp.position();
                            posX += pos.left;
                            posY += pos.top;
                            tmp = tmp.parent();
                        }
                        var pos = tmp.position();
                        posX += pos.left;
                        posY += pos.top;
                    }
                    var offX, offY;
                    if (!(e.offsetX || e.offsetY)) {
                        offX = e.pageX - $(e.target).offset().left;
                        offY = e.pageY - $(e.target).offset().top;
                    }
                    else {
                        offX = e.offsetX;
                        offY = e.offsetY;
                    }
                    
                    $(padClicked).css({
                        "left": offX + posX,
                        "top": offY + posY,
                        "position": "absolute"
                    });
                    padClicked = null;
                }
            });
		}

		var statesArray = [];
		var currentState = 0;
		var boundryState = 0;

		
		
	