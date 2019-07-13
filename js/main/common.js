$(document).ready(function() {
	componentAndPanelDisplay(); 
	documentTree(); 
	compTableSortable();
	getFundDataTable();
	getSelectedFundDataTable();
	getDualCalender();
	getCartCompDataTable();
	moveTopHeader();
	changeDocSteps();
	getCompactDataTable();
	getFullDataTable();
	onSelectRowStyle();
	contextMenu();
	/*dragAndDrop();*/


});
var compTable;

function getCompactDataTable(){
	
	    compTable =	$("#componentTable").DataTable({
		"paging" : false,
		"info" : false,
		"rowReorder":false,
		"bDestroy" : true,
		"ordering" : false,
		"searching" : true,
		"dom" : "t",
		"bJQueryUI" : true,
        "ajax": "/Ui_Redesign/js/main/compact.json",
        "searching":true,
        "bDeferRender" : true,		
 		"columns": [
 			{title: "Order",class:"componentTable-td"},	
 			{title: "Type",class:"componentTable-td"},
 			{title: "Indicator",class:"componentTable-td"},
 			{title: "Name",class:"componentTable-td comp-name"},
 			{title: "Attached",class:"componentTable-td"},
 			{title: "XBRL",class:"componentTable-td xbrl"},
 			{title: "Context",class:"componentTable-td context"},
 			{title: "Fund",class:"componentTable-td funds"}
  		], 
	        "columnDefs" : [{
	        	"targets" : 0,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {				
					return row.order;
				}		
			},
	
			{
				"targets" : 1,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.type;
				}			
			},
			{
				"targets" : 2,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.indicator;
				}			
			},
			{
				"targets" : 3,
				"visible" : true,
				"rowReorder":true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.name;
				}
			},
			{
				"targets" : 4,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.attached;
				}
			},
			{
				"targets" : 5,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return  row.xbrl;
				}
			},
			{
				"targets" : 6,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.context;
				}
			},
			{
				"targets" : 7,
				"visible" : true,
				"type" : "html",
				"paging" : false,
				"render" : function(data, type, row, meta) {
					return row.fund;
				}
			},
		]

	});
	$('#comptblsearchId').keyup(function() {
		compTable.search($(this).val()).draw();
	})
	
}


function notification(title){
	 $.notify.addStyle('compNotification', {
	    	
		  html:
			"<div>"
	        + "<div class='clearfix'>"
	        + "<div class='notifyIcon-notifictn'>"
	        + "<div class='cricle-notify'><i class='material-icons notifyIcon'>&#xe061;</i></div>"
	        + "<div class='title notify-title' data-notify-text/>"
	        + "</div>"
	        + "</div>"
	        + "</div>",
			
		  classes: {
			  compNotificationCustom: {
				  "color": "#FFFFFF",
			      "background-color": "#333333",
			      "height": "42px",
			      "padding": "13px 7px 7px 7px",
			      "margin-left" : "290px",
			      "font-family": "Roboto",
			      "font-style": "normal",
			      "font-weight": "500",
			      "font-size": "12px",
			      "line-height": "15px",
			      "letter-spacing": "0.025em",
			      "border-radius": "4px"
		     }
		  }
		});
	$.notify(
			title, 
			{ 
					globalPosition:"bottom left",					
					style: 'compNotification',
					className: 'compNotificationCustom',
					showAnimation: 'slideDown',
					hideAnimation: 'slideUp',
				}
			);
}



function getFullDataTable(){
	var temp = null;
	var fullview = $('#compFullDetailsID').DataTable(
	{
		"paging" : false,
		"info" : false,
		 "language": {
			    "zeroRecords": "No matching component found"
			  },
		"bDestroy" : true,
		"ordering" : false,
		"searching" : true,
		"dom" : "t",
		"bDeferRender" : true,	
		"ajax": "/Ui_Redesign/js/main/full.json",
		"drawCallback": function( settings ) {
			tooltipInit(); 
		},	
	"columnDefs" : [ {
		"targets" : 0,
		"render" : function(data, type, row, meta) {
		return row.compDetails;
		},
		}
		]
	});
		$('#comptblsearchId').keyup(function() {
			fullview.search($(this).val()).draw();
		});
		$('#compFullDetailsID').on("click",".remove-icon", function(){
			var	temp = $(this).parents('tr');
			bootbox.confirm({
				title:"Delete Component",
			    message: "Are you sure to delete this component ?",	
			    className: "modal-font",
			    buttons: {
			        confirm: {
			            label: 'Confirm',
			            className: 'btn btn-primary'
			        },
			        cancel: {
			            label: 'Cancel',
			            className: 'btn btn-secondary'
			        }
			    },
			    callback: function (result) {
			    	if(result){			    	
			    		fullview.row(temp).remove().draw();	
			    		notification("Component Deleted...");
			    	}
			    }
			});
		});
		
		
		var editComp;
		$("#compFullDetailsID").on('click', '.edit-icon', function(e){
			$("#editCompModal").modal('show');			
			editComp =$(this).closest('tr').find('.comp-description');
			$("#EditBody").val(editComp[0].innerText);
			tinymce.init({ selector:'textarea' });

		});
		$("#editCompModal").on('click', '.saveEditedComp', function(e){
			tinymce.remove();
			editComp.html($("#EditBody").val());
			$("#editCompModal").modal('hide');
			notification("Component Edited...");
		});
		
}




function getDualCalender() {
	var date = null;
	$(".eff-exp-input").datepicker({
		dateFormat : 'mm/dd/yy',
		numberOfMonths : 1,
		rangeSelect : true,
		minDate : 0,
		/*uiLibrary: 'bootstrap4',*/
		onSelect : function(dateText, inst) {
			date = dateText;
		},
		onClose : function() {
			$(".exp-input").datepicker("option", "minDate", date);
			$(".exp-input").datepicker('show');
			}
	});
	$(".exp-input").datepicker({
		dateFormat : 'mm/dd/yy',
		numberOfMonths : 1
	});
}



function getSelectedFundDataTable() {
	var selectedfundDataTable = $('#selectedfundNameID')
			.DataTable(
					{
						"paging" : false,
						"info" : false,
						"bDestroy" : true,
						"ordering" : false,
						"searching" : true,
						"dom" : "t",
						"columnDefs" : [ {
							"render" : function(data, type, row, meta) {
								var html = "<div id='selectedfundNameDetailsID' class='selectedfundNameDetails'><div class='selectedfundNameContent'><div class='fundType-top'>Closed-end funds</div><div class='asset-classFund'><div class='assetClass'>JHEIF</div><div class='assetFund'>John Hancock Hedged Equity & Income Fund</div></div><div class='fundType-bottom'>Closed-end funds</div></div></div>";
								return html;
							},							 
							"targets" : 0,
							"width" : "100%",
							"orderable" : false,
							"className" : "selectedfund-doclist-table",
							"visible" : true,
							"type" : "html",
							"paging" : false,
						}
						]
					});
	$('#selectedfundNameID tbody').on(
			'click',
			'tr',
			function() {
				$(this).toggleClass('selected');
				if ($(this).hasClass('selected')) {
					$(this).addClass(
							"selectedfundNameDetailsOnSelect");
				} else {
					$("#selectedfundNameDetailsID").removeClass(
							"selectedfundNameDetailsOnSelect");
				}
				var rowSelected = selectedfundDataTable.rows('.selected')
						.data().length;
				$(".selectedselection-count").html(rowSelected + " SELECTED");
			});
	$('#selectedfundSearchInputID').keyup(function() {
		selectedfundDataTable.search($(this).val()).draw();
	})
}



function getCartCompDataTable(){
	var cartCompNameDataTable = $('#cartCompNameID').DataTable({
	"paging" : false,
	"info" : false,
	"bDestroy" : true,
	"ordering" : false,
	"searching" : true,
	"dom":"t",
	"bDeferRender" : true,	
	"ajax": "/Ui_Redesign/js/main/cart.json",
	
	drawCallback: function () {/*
	     $("#cartCompNameID tr").draggable({
	     helper: function(){
	       var selected = $('tr.selectedRow');
	       if (selected.length === 0) {
	         selected = $(this).closest('tr').addClass('selectedRow');
	       }
	       var container = $('<div/>').attr('id', 'draggingContainer');
	       container.append(selected.clone().removeClass("selectedRow"));
	       return container;
	       }
	     });
	*/},
	
	"columns": [
		{
			class:"cartCompName"
				},
				],
				"columnDefs" : [{
					"targets" : 0,
					"render" : function(data, type, row, meta) {
						return row.cartcompDetails;
						},
						}
				]
	});
	
	 var componentName;
	$('#cartCompNameID tbody').on('dragstart click', 'tr', function() {
    var componentName = $(this).find(".cartComp-name").text();
	$(this).toggleClass('selected');
	if ($(this).hasClass('selected')) {
		$("#cartCompDateIndID").removeClass("cartCompDateIndID");
		$("#cartCompDateIndID").addClass("cartCompDateIndOnSelect");
		$("#cartComp-typeID").addClass("cartComp-typeOnSelect");
		}
	else{
		$("#cartCompDateIndID").removeClass("cartCompDateIndOnSelect");
		$("#cartCompDateIndID").addClass("cartCompDateIndID");
		$("#cartComp-typeID").removeClass("cartComp-typeOnSelect");
		}
	
	var rowSelected = cartCompNameDataTable.rows('.selected').data().length;
	$(".cartCompSelectedCount").html(rowSelected + " SELECTED OUT OF 22");
	
	
	if($("#viewDropDown").text() == "Compact View"){
	
		$("tbody.selectComp").sortable({
				 connectWith:".selectComp",
				});
		 
			  $("#componentTable").droppable({
				
				  /*Working logic with datatable*/
				  
				  drop: function (event, ui) {
					   //var currentPage = compTable.page();
					    var CompName = ui.helper.text().substr(0,12);
					    var indexForDrop = $(".ui-sortable-placeholder").index();
					   	var dropTable = $(this).DataTable();
					   	var compactCompCount = dropTable.rows()[0].length+1;
					   	var newRow = dropTable.rows.add([{
					   	     "order": compactCompCount,
					         "type": "TX",
					         "indicator": "<span class='indicator-grp' data-original-title='' title=''><span class='yellow-indicator'></span><span class='red-indicator'></span><span class='blue-indicator'></span></span>",
					         "name": CompName,
					         "attached": "1 footnote",
					         "xbrl": "search",
					         "context":"fund summary",
					         "fund": "3 more"	
					       	 }, 
					       	 ]).draw();
					   	     var index = indexForDrop,
					         rowCount = dropTable.data().length-1,
					         insertedRow = dropTable.row(rowCount).data(),
					         tempRow;

					     for (var i=rowCount;i>index;i--) {
					         tempRow = dropTable.row(i-1).data();
					         dropTable.row(i).data(tempRow);
					         dropTable.row(i-1).data(insertedRow);
					     }     
					     //refresh the page
					     //dropTable.page(currentPage).draw(false);
					   
					   cartCompNameDataTable.rows(".selectedRow").remove();
					   notification("New component added...");
					   }
				  
				  
				  
				  
				  /*working logic in normal table*/
				  
				  /*  drop: function(e, ui) {
				    var CompName = ui.helper.text().substr(0,12);
				    $("#componentTable").append(ui.draggable);
		 
				    var indexForDrop = $(".ui-sortable-placeholder").index();
				    var currentPage = compTable.page();
				   
				    $('#componentTable > tbody > tr').eq(indexForDrop).after('<tr role="row" class="odd"><td class=" componentTable-td">1</td><td class=" componentTable-td">TX</td><td class=" componentTable-td"><span class="indicator-grp" data-original-title="" title=""><span class="yellow-indicator"></span><span class="red-indicator"></span><span class="blue-indicator"></span></span></td><td class=" componentTable-td comp-name">'+CompName+'</td><td class=" componentTable-td">1 footnote</td><td class=" componentTable-td xbrl">check</td><td class=" componentTable-td context">fund summary</td><td class=" componentTable-td funds">3 more</td></tr>');
				    ui.draggable.remove();
				    }*/
			  });

	
			  
			  /*1ST LOGIC ADD ROW AT LAST POSITION*/
			  
	/*$("#componentTable").droppable({
	    drop: function (event, ui) {
	       
	    	var dropTable = $(this).DataTable();
	    	var compactCompCount = dropTable.rows()[0].length+1;
	    	var newRow = dropTable.rows.add( [ {
	    	  "order": compactCompCount,
	          "type": "TX",
	          "indicator": "<span class='indicator-grp' data-original-title='' title=''><span class='yellow-indicator'></span><span class='red-indicator'></span><span class='blue-indicator'></span></span>",
	          "name": componentName,
	          "attached": "1 footnote",
	          "xbrl": "search",
	          "context":"fund summary",
	          "fund": "3 more"	
	        	  }, 
	        	  ]).draw();
	    
	    cartCompNameDataTable.rows(".selectedRow").remove().draw();
	    
	    var objDiv = document.getElementById("scrollbarCompTblID"); //on drop scroll to bottom
	    objDiv.scrollTop = objDiv.scrollHeight;
	    notification("New component added...");
	    }
	
	});
	*/}
	
	else{
		
		$("tbody.selectComp").sortable({
			 connectWith:".selectComp",
			});
	 
		  $("#compFullDetailsID").droppable({
			   
			  
			  drop: function (event, ui) {
				   //var currentPage = compTable.page();
				    var CompNameFull = ui.helper.text().substr(0,12);
				    var indexForDropFull = $(".ui-sortable-placeholder").index();
				    var dropTableFull = $(this).DataTable();
				   	var compCountFull = dropTableFull.rows()[0].length+1;
				   	var newRowFull = dropTableFull.rows.add([{
				    	"compDetails": "<div class='compDetails-fullView' id='comp1'><div class='row'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 compDateInd'><div class='component-type'><span> <input type='text' class='comp-type' value='TX' /></span></div><div class='date-indicator'><div class='date-details'><span class='date'>10-10-2018 - 12-10-2018</span> <span class='last-update'>Last updated on 10-10-2018 by dcisupportjhf </span></div><span class='indicator-grp'><span class='yellow-indicator'></span><span class='red-indicator'></span><span class='blue-indicator'></span></span></div></div><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 fund_sum_label'><div class='fullView-xbrl-details'><label class='fullView-xbrl-tag'>XBRL: RISK RETURN</label> <label class='fullView-fund-summary'>FUND SUMMARY</label><label class='fullView-total-funds'>3+ FUNDS</label><div><span class='more'><i class='material-icons'>more_vert</i></span></div></div></div></div><div class='row'><div class='col-xs-1 col-lg-1 col-sm-1 col-md-1 compCountfull'><div class='comp-count'>1</div></div><div class='col compName-full'><div class='comp-name-full'>"+ CompNameFull +"</div></div></div><div class='row comp-full-details'><div class='col-xs-12 col-lg-12 col-sm-12 col-md-12 insideComp-full-details'><span class='comp-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. </span></div> <div class='row compBottomIcon'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 insideCompBottomIcon'><div class='embedded-comp'><div class='embedded-comp'><label class='ambedded-comp-details'>5 footnote</label></div><div class='footnote-comp'><label class='footnote-count'>5 footnote</label></div></div></div><div class='col'><div class='edit-option edit-option-toggle'><span class='edit-option-icon'><i class='material-icons edit-icon'>border_color</i></span> <span class='edit-option-icon comment-icon'><i class='material-icons' data-toggle='modal' data-target='#commentModalCenter'>mode_comment </i></span><span class='edit-option-icon'><i class='material-icons remove-icon'>delete</i></span> <span class='edit-option-icon'><i class='material-icons eye-icon'>remove_red_eye</i></span><span class='edit-option-icon'><input type='text' class='compExpired' value='120' /></span></div></div></div></div></div>"
		    		 }, 
				       	 ]).draw();
				   	
				   	     var indexFull = indexForDropFull,
				         rowCountFull = dropTableFull.data().length-1,
				         insertedRowFull = dropTableFull.row(rowCountFull).data(),
				         tempRowFull;

				     for (var j=rowCountFull;j>indexFull;j--) {
				    	 tempRowFull = dropTableFull.row(j-1).data();
				    	 dropTableFull.row(j).data(tempRowFull);
				    	 dropTableFull.row(j-1).data(insertedRowFull);
				     }     
				     //refresh the page
				     //dropTable.page(currentPage).draw(false);
				   
				   cartCompNameDataTable.rows(".selectedRow").remove();
				   notification("New component added...");
				   }
			  
			  /*Logic working with normal table*/
			  
			  /*drop: function(e, ui) {
			    var dropFullTable = $(this).DataTable();
			    var CompName = ui.helper.text().substr(0,12);
			    $("#compFullDetailsID").append(ui.draggable);
	 
			    var indexForDrop = $(".ui-sortable-placeholder").index();
			    
			    $('#compFullDetailsID > tbody > tr').eq(indexForDrop).after("<tr role='row' class='odd'><td><div class='compDetails-fullView' id='comp1'><div class='row'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 compDateInd'><div class='component-type'><span> <input type='text' class='comp-type' value='TX'></span></div><div class='date-indicator'><div class='date-details'><span class='date'>10-10-2018 - 12-10-2018</span> <span class='last-update'>Last updated on 10-10-2018 by dcisupportjhf </span></div><span class='indicator-grp' data-original-title='' title=''><span class='yellow-indicator'></span><span class='red-indicator'></span><span class='blue-indicator'></span></span></div></div><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 fund_sum_label'><div class='fullView-xbrl-details'><label class='fullView-xbrl-tag'>XBRL: RISK RETURN</label> <label class='fullView-fund-summary'>FUND SUMMARY</label><label class='fullView-total-funds'>3+ FUNDS</label><div><span class='more'><i class='material-icons'>more_vert</i></span></div></div></div></div><div class='row'><div class='col-xs-1 col-lg-1 col-sm-1 col-md-1 compCountfull'><div class='comp-count'>1</div></div><div class='col compName-full'><div class='comp-name-full'>Component Name</div></div></div><div class='row comp-full-details'><div class='col-xs-12 col-lg-12 col-sm-12 col-md-12 insideComp-full-details'><span class='comp-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. </span></div> <div class='row compBottomIcon'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 insideCompBottomIcon'><div class='embedded-comp'><div class='embedded-comp'><label class='ambedded-comp-details'>5 footnote</label></div><div class='footnote-comp'><label class='footnote-count'>5 footnote</label></div></div></div><div class='col'><div class='edit-option edit-option-toggle'><span class='edit-option-icon'><i class='material-icons edit-icon edit-icon' data-original-title='' title=''>border_color</i></span> <span class='edit-option-icon comment-icon' data-original-title='' title=''><i class='material-icons' data-toggle='modal' data-target='#commentModalCenter'>mode_comment </i></span><span class='edit-option-icon'><i class='material-icons remove-icon' data-original-title='' title=''>delete</i></span> <span class='edit-option-icon'><i class='material-icons eye-icon' data-original-title='' title=''>remove_red_eye</i></span><span class='edit-option-icon'><input type='text' class='compExpired' value='120'></span></div></div></div></div></div></td></tr>");
			    ui.draggable.remove();
			    }*/
			  });
		
		
		  /*Working Logic add row at last position*/
		
		  /*$("#compFullDetailsID").droppable({
		    drop: function (event, ui) {
		       
		    	var dropTable = $(this).DataTable();
		    	var CompCount = dropTable.rows()[0].length+1;		    	
		    	var newRow = dropTable.rows.add( [ {
		    	"compDetails": "<div class='compDetails-fullView' id='comp1'><div class='row'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 compDateInd'><div class='component-type'><span> <input type='text' class='comp-type' value='TX' /></span></div><div class='date-indicator'><div class='date-details'><span class='date'>10-10-2018 - 12-10-2018</span> <span class='last-update'>Last updated on 10-10-2018 by dcisupportjhf </span></div><span class='indicator-grp'><span class='yellow-indicator'></span><span class='red-indicator'></span><span class='blue-indicator'></span></span></div></div><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 fund_sum_label'><div class='fullView-xbrl-details'><label class='fullView-xbrl-tag'>XBRL: RISK RETURN</label> <label class='fullView-fund-summary'>FUND SUMMARY</label><label class='fullView-total-funds'>3+ FUNDS</label><div><span class='more'><i class='material-icons'>more_vert</i></span></div></div></div></div><div class='row'><div class='col-xs-1 col-lg-1 col-sm-1 col-md-1 compCountfull'><div class='comp-count'>"+CompCount +"</div></div><div class='col compName-full'><div class='comp-name-full'>"+ componentName +"</div></div></div><div class='row comp-full-details'><div class='col-xs-12 col-lg-12 col-sm-12 col-md-12 insideComp-full-details'><span class='comp-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. </span></div> <div class='row compBottomIcon'><div class='col-xs-6 col-lg-6 col-sm-6 col-md-6 insideCompBottomIcon'><div class='embedded-comp'><div class='embedded-comp'><label class='ambedded-comp-details'>5 footnote</label></div><div class='footnote-comp'><label class='footnote-count'>5 footnote</label></div></div></div><div class='col'><div class='edit-option edit-option-toggle'><span class='edit-option-icon'><i class='material-icons edit-icon'>border_color</i></span> <span class='edit-option-icon comment-icon'><i class='material-icons' data-toggle='modal' data-target='#commentModalCenter'>mode_comment </i></span><span class='edit-option-icon'><i class='material-icons remove-icon'>delete</i></span> <span class='edit-option-icon'><i class='material-icons eye-icon'>remove_red_eye</i></span><span class='edit-option-icon'><input type='text' class='compExpired' value='120' /></span></div></div></div></div></div>"
		    		 }, 
		        	  ]).draw();
		    
		    cartCompNameDataTable.rows(".selectedRow").remove().draw();		   
		    var objDiv = document.getElementById("scrollbarCompTblID");  //on drop scroll to bottom
		    objDiv.scrollTop = objDiv.scrollHeight;
		    $.notify("New component added successfully","success",{blur:0.2},{class:'my-class'});
		    notification("New component added...");
		    }
		});
	*/}
	
	});
	
	$('.cartAndFavSearch').keyup(function() {
		cartCompNameDataTable.search($(this).val()).draw();
		});
	}

function getFundDataTable() {
	var fundDataTable = $('#fundNameID')
			.DataTable(
					{
						"paging" : false,
						"info" : false,
						"bDestroy" : true,
						"ordering" : false,
						"searching" : true,
						"dom" : "t",
						"columnDefs" : [ {

							"render" : function() {
								var html = "<div id='fundNameDetailsID' class='fundNameDetails'><div class='fundNameContent'><div class='fundType-top'>Closed-end funds</div><div class='asset-classFund'><div class='assetClass'>JHEIF</div><div class='assetFund'>John Hancock Hedged Equity & Income Fund</div></div><div class='fundType-bottom'>Closed-end funds</div></div></div>";
								return html;
							},
							createdCell: function (td, cellData, rowData, row, col) {
						          $(td).addClass('draggable_tr');
						        },
							"targets" : 0,
							"width" : "100%",
							"className" : "fund-doclist-table",
							"visible" : true,
							"type" : "html"
						}
						]
					});
	$('#fundNameID tbody').on('click', 'tr', function() {
		$(this).toggleClass('selected');
		if ($(this).hasClass('selected')) {
			$("#fundNameDetailsID").addClass("fundNameDetailsOnSelect");
		} else {
			$("#fundNameDetailsID").removeClass("fundNameDetailsOnSelect");
		}
		var rowSelected = fundDataTable.rows('.selected').data().length;
		$(".selection-count").html(rowSelected + " SELECTED");
	});
	$('#fundSearchInputID').keyup(function() {
		fundDataTable.search($(this).val()).draw();
	})
}

function componentAndPanelDisplay() {
	// display document navigation and document edit functionality.
	if ($("#componentTable").is(":visible")) {
		$('.fullView-details').hide();
		$('.rightPanel-docEditContainer').hide();
	}
}
function tooltipInit() {/* tooltip initialization */
	$('.indicator-grp').tooltip({
		title : "<span class='tooltiptext'><div class='ind-text'><span class='un-resolved-dot'></span>Un-resolved</div><div class='ind-text'><span class='expired-dot'></span>Expired</div><div class='ind-text'><span class='version-dot'></span>New version</div></span>",
		container : ".fullView-details",
		html : true,
		placement : "auto"
	});
	$('.remove-icon').tooltip({
		title : "<span class='icon-tooltip'>Delete</span>",
		container : ".fullView-details",
		html : true,
		placement : "auto"
	});
	$('.comment-icon').tooltip({
		title : "<span class='icon-tooltip'>Comment</span>",
		container : ".fullView-details",
		html : true,
		placement : "auto"
	});
	$('.edit-icon').tooltip({
		title : "<span class='icon-tooltip'>Edit component</span>",
		container : ".fullView-details",
		html : true,
		placement : "auto"
	});
	$('.eye-icon').tooltip({
		title : "<span class='icon-tooltip'>View</span>",
		container : ".fullView-details",
		html : true,
		placement : "top"
	});
}
function documentTree() {
	/* document tree initialization. */
	var count = 1;
	$("#tree")
			.fancytree(
					{
						rootVisible : false,
						checkbox : false,
						selectMode : 1,
						clickFolderMode : 4,
						debugLevel : 0,
						source : [
								{
									title : "<div class='doc-parent'><div class='parent-docname'><span class='treenode'>Front Cover</span></div><div class='doc-tree-icon'><i class='material-icons'>&#xe5d3;</i><div></div>",
									children : [ {
										title : "<span class='grey-dot'></span><span class='doc-child treenode'>Front Cover-child</span>"
									} ]
								},

								{
									title : "<div class='doc-parent'><div class='parent-docname'><span class='treenode'>Front Summary</span></div><div class='doc-tree-icon'><i class='material-icons'>&#xe5d3;</i><div></div>",
									children : [
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Summary</span>"
											},
											{
												title : "<span class='dot-grp'><span class='yellow-dot'></span><span class='red-dot'></span><span class='blue-dot'></span></span><span class='doc-child treenode'>Money Market Fund</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 1</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 2</span>"
											} ]
								},
								{
									title : "<div class='doc-parent'><div class='parent-docname'><span class='treenode'>Front perfomance</span></div><div class='doc-tree-icon'><i class='material-icons'>&#xe5d3;</i><div></div>",
									children : [
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Summary</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Money Market Fund</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 1</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 2</span>"
											} ]
								},
								{
									title : "<div class='doc-parent'><div class='parent-docname'><span class='treenode'>Front perfomance</span></div><div class='doc-tree-icon'><i class='material-icons'>&#xe5d3;</i><div></div>",
									children : [
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Summary</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Money Market Fund</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 1</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-child treenode'>Fund 2</span>"
											} ]
								},

								{
									title : "<div class='doc-refparent'><div class='parent-refdocname'><span class='treenode'>Front perfomance</span></div><div class='doc-tree-icon'><i class='material-icons'>&#xe5d3;</i><div></div>",
									children : [
											{
												title : "<span class='grey-dot'></span><span class='doc-refchild treenode'>Summary</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-refchild treenode'>Performance</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-refchild treenode'>Fund Fact</span>"
											},
											{
												title : "<span class='grey-dot'></span><span class='doc-refchild treenode'>Disclosure</span>"
											}, ]
								}, ],			
								 
						extensions : [ "dnd","edit" ],
						dnd : {
							autoExpandMS : 400,
							focusOnClick : false,
							preventVoidMoves : true, // Prevent dropping nodes 'before self'etc.
							preventRecursiveMoves : true, // Prevent dropping
															// nodes on own
															// descendants
							dragStart : function(node, data) {
							
								return true;
							},
							dragEnter : function(node, data) {
								return true;
							},
							dragDrop : function(node, data) {
								if (!data.otherNode) {
									var title = $(data.draggable.element)
											.text()
											+ " (" + (count)++ + ")";
									node.addNode({
										title : title
									}, data.hitMode);
									return;
								}
								data.otherNode.moveTo(node, data.hitMode);
							}
						},
						 edit: {
							    // Available options with their default:
							    adjustWidthOfs: 4,   // null: don't adjust input size to content
							    inputCss: { 
							    	minWidth: "6em",background: "#3E3E3E",height: "2rem", color:"#FFFFFF",padding:"0rem 0rem 0rem 0.9375rem"							    	
							    },
							    triggerStart: ["shift+click"],
							    beforeEdit: function(event, data){
							    	 /*data.input.val();*/
							    	
							      },  // Return false to prevent edit mode
							    edit: function(event, data){
							    	 /*data.input.val();*/
							    	
							    	return true;
							      },        // Editor was opened (available as data.input)
							    beforeClose: $.noop,  // Return false to prevent cancel/save (data.input is available)
							    save: $.noop,         // Save data.input.val() or return false to keep editor open
							    close: $.noop,        // Editor was removed
							  },
					});
	$("#tree").fancytree("getTree").visit(function(node) {
		node.setExpanded(true);
	});
	$(".doc-parent").click(function(){
		$("#tree").fancytree("getTree").visit(function(node){
			node.setSelected(true);
		});
		return true;
	});
}

function compTableSortable() {
	$(".componentTable-body").sortable();
}
// fancyTree search function.
function doctreesearch() {
	$("#list-input").keyup(function() {
		var filter = $(this).val();
		$("#tree ul li").each(function() {
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).hide();
			} else {
				$(this).show()
			}
		});
	});
}
// component search in compact view table
function compTblSearch() {
	$("#comptblsearchId").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#componentTable .componentTable-tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
}
// middle panel toggle functionality function
function togglebutton() {
	$('.middlePanel').toggle();

	if (!($(".middlePanel").is(":visible"))) {
		$('#xbrltagdetailsId').removeClass('xbrl-tag-details'); 
		$('#xbrltagdetailsId').addClass('xbrl-tag-details-toggle');
		$('#scrollbarCompTblID').removeClass('scrollbarCompTbl'); 
		$('#scrollbarCompTblID').addClass('scrollbarCompTbl-toggle');
		$('#componentTable').removeClass('comptbl'); 
		$('#componentTable').addClass('comptbl-toggle');
		$('#input-widthId').removeClass('input-width'); 
		$('#input-widthId').addClass('input-width-toggle');
		$(".componentTable-td").addClass('componentTable-td-toggle');
		$('.componentTable-td-toggle').removeClass('componentTable-td');
	} else {
		$('#xbrltagdetailsId').removeClass('xbrl-tag-details-toggle');
		$('#xbrltagdetailsId').addClass('xbrl-tag-details');
		$('#scrollbarCompTblID').removeClass('scrollbarCompTbl-toggle');
		$('#scrollbarCompTblID').addClass('scrollbarCompTbl');
		$('#componentTable').removeClass('comptbl-toggle'); 
		$('#componentTable').addClass('comptbl');
		$('#input-widthId').removeClass('input-width-toggle');
		$('#input-widthId').addClass('input-width'); 
		$(".componentTable-td-toggle").addClass('componentTable-td');
		$('.componentTable-td').removeClass('componentTable-td-toggle');

	}

}
function verticalsplit() {

	if ($("#scrollBarIconId").hasClass("col-lg-1 col-sm-1 col-md-1")) {
			$('#scrollBarIconId').removeClass('scrollBarIcon col-lg-1 col-sm-1 col-md-1');
			$(".edit-option").addClass("edit-option-toggle");
			$('.cartComp').fadeIn(700);
			$('#scrollBarIconId').addClass('scrollBarIcon-split col-lg-3 col-sm-3 col-md-3');

	} else {
			$(".edit-option-toggle").removeClass("edit-option-toggle");
			$('.cartComp').fadeOut(400);
			$('.favComp').hide();
			$('#scrollBarIconId').removeClass('scrollBarIcon-split col-lg-3 col-sm-3 col-md-3');
			$('#scrollBarIconId').addClass('scrollBarIcon col-lg-1 col-sm-1 col-md-1');

	}
	}

function changeDocSteps() {	
	$(".NavDropDown-item").on('click',function(event){
		$("#NavigationDropDown").html($(this).attr("id"));
		if ($(this).attr("id") == "DOCUMENT NAVIGATION") {
			$(".rightPanel-docEditContainer").hide();
			$('.rightPanel-docNavContainer').fadeIn(1000);
		} else if ($(this).attr("id") == "EDIT DOCUMENT") {
			$(".rightPanel-docNavContainer").hide();
			$('.rightPanel-docEditContainer').fadeIn(1000);
		}
	})
	$(".viewDropDown-item").on('click',function(event){
		$("#viewDropDown").html($(this).attr("id"));
		
		if ($(this).attr("id") == "Full View") {
				$("#componentTable").hide();
				$('.fullView-details').fadeIn(1000);
			} else if ($(this).attr("id") == "Compact View") {
				$('.fullView-details').hide();
				$("#componentTable").fadeIn(1000);		
			}
	})
	$(".docStatusDropDownMenu .dropdown-item").on('click',function(event){
		$("#doc_status").html($(this).attr("id"));
		var notifyTitle =	"Document status changed to "+ $("#doc_status").text()+"...";
		notification(notifyTitle);		
	});
	
}
function moveTopHeader(){

	$("#scrollbarCompTblID").on( 'DOMMouseScroll mousewheel', function(event){
		if(event.originalEvent.wheelDelta /120 > 0 || event.originalEvent.detail < 0) {
			$(".fund-summary").slideDown();			
			setTimeout(function(){
				$("#scrollbarCompTblID").removeClass("scrollbarCompTblScrollUp");	
				$("#scrollBarIconId").removeClass("scrollBarIconScrollUp");
				$("#scrollBarIconId").removeClass("scrollBarIcon-splitScrollUp");
				$(".cartComp").removeClass("cartCompScrollUp");
				$(".favComp").removeClass("favCompScrollUp");
			}, 200);					
		}
		else{
			$(".fund-summary").slideUp();         		
			$("#scrollbarCompTblID").addClass("scrollbarCompTblScrollUp");
			$("#scrollBarIconId").addClass("scrollBarIconScrollUp");
			$("#scrollBarIconId").addClass("scrollBarIcon-splitScrollUp");
			$(".cartComp").addClass("cartCompScrollUp");
			$(".favComp").addClass("favCompScrollUp");
			
		}
		
	});
}

function favComponent(){
		$(".cartComp").hide();
		$(".favComp").fadeIn(1000);
			var favCompNameDataTable = $('#favCompNameID').DataTable({
				"paging" : false,
				"info" : false,
				"bDestroy" : true,
				"ordering" : false,
				"searching" : true,
				"dom" : "t",
				"bDeferRender" : true,	
				"ajax": "/Ui_Redesign/js/main/fav.json",	
				
				"columns": [
						{
							class:"cartCompName"
						},
					],
				"columnDefs" : [ {
						"targets" : 0,
						"render" : function(data, type, row, meta) {
							return row.favcompDetails;
						},
					}
					]
	});
	
	
	$('#cartCompNameID tbody').on('click', 'tr', function() {
			var componentName = $(this).find(".cartComp-name").text();
			$(this).toggleClass('selected');
			if ($(this).hasClass('selected')) {
					$("#cartCompDateIndID").removeClass("cartCompDateIndID");
					$("#cartCompDateIndID").addClass("cartCompDateIndOnSelect");
					$("#cartComp-typeID").addClass("cartComp-typeOnSelect");
			}else{
					$("#cartCompDateIndID").removeClass("cartCompDateIndOnSelect");
					$("#cartCompDateIndID").addClass("cartCompDateIndID");
					$("#cartComp-typeID").removeClass("cartComp-typeOnSelect");
			}
			var rowSelected = cartCompNameDataTable.rows('.selected').data().length;
				$(".cartCompSelectedCount").html(rowSelected + " SELECTED OUT OF 22");
		});
	
	$('.cartAndFavSearch').keyup(function() {
		favCompNameDataTable.search($(this).val()).draw();
	})
}


function onSelectRowStyle(){
	$("#compFullDetailsID tbody").on('click','.compDetails-fullView',function(){
		$(this).toggleClass("compDetails-fullView-select");
	});
	
	$(".abcd").on('click','tr',function(){
		$(this).find('td:first').toggleClass("componentTable-td-select");
	});
}


function contextMenu(){
	$(function(){
	    $.contextMenu({
	        selector: '.abcd tr', /*selectComp*/
	        trigger: 'right',
	        callback: function(key, options) {
	            var m = "clicked: " + key;
	            window.console && console.log(m) || alert(m); 
	        },
	        items: {
	            "edit": {name: "Edit", icon: "edit"},
	            "cut": {name: "Cut", icon: "cut"},
	            "copy": {name: "Copy", icon: "copy"},
	            "paste": {name: "Paste", icon: "paste"},
	            "delete": {name: "Delete", icon: "delete"},
	            "sep1": "---------",
	            "quit": {name: "Quit", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
	        }
	    });
	});
}


/*function dragAndDrop(){
 var componentName = null;
 var $tabs = $('#cartCompNameID tr , #compFullDetailsID')
	  $("tbody.abcd").sortable({
		 connectWith:".abcd",
		 helper: "clone",
		});

 $('#cartCompNameID tbody').on('click dragstart', 'tr', function() {
		 componentName = $(this).find(".cartComp-name").text();
 });
 
	  $("#componentTable").droppable({
		    drop: function(e, ui) {
		    $("#componentTable").append(ui.draggable);
 
		    var indexForDrop = $(".ui-sortable-placeholder").index();
		    
		    $('#componentTable > tbody > tr').eq(indexForDrop).after('<tr role="row" class="odd"><td class=" componentTable-td">1</td><td class=" componentTable-td">TX</td><td class=" componentTable-td"><span class="indicator-grp" data-original-title="" title=""><span class="yellow-indicator"></span><span class="red-indicator"></span><span class="blue-indicator"></span></span></td><td class=" componentTable-td comp-name">'+componentName+'</td><td class=" componentTable-td">1 footnote</td><td class=" componentTable-td xbrl">check</td><td class=" componentTable-td context">fund summary</td><td class=" componentTable-td funds">3 more</td></tr>');
		    ui.draggable.remove();
		    }
	  });
	  }*/   	

