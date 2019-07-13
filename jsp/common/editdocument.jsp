<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<!-- adding bootstrap css -->				
<link rel="stylesheet" href="/Ui_Redesign/bootstrap/css/bootstrap.min.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.contextMenu.min.css">

<!-- adding datatble bootstrap css -->
<link rel="stylesheet" href="/Ui_Redesign/datatable/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="/Ui_Redesign/datatable/select.dataTables.min.css">
				
<!-- cdn for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<!-- adding local css -->
<link rel="stylesheet" type="text/css"	href="/Ui_Redesign/css/common/common.css">
<link href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" rel="stylesheet">

<!-- cdn for roboto font -->				
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"	rel="stylesheet">

<!-- adding jquery js -->				
<script src="/Ui_Redesign/js/jquery/jquery-3.3.1.min.js"></script>
<script src="/Ui_Redesign/js/jquery/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.contextMenu.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.ui.position.js"></script>

	<!-- adding notify js -->	
<script type="text/javascript" src="/Ui_Redesign/js/notify/notify.js"></script>
<script type="text/javascript" src="/Ui_Redesign/js/notify/notify.min.js"></script>
	
<!-- adding fancytree js -->					
<script src="/Ui_Redesign/js/fancytreejs/jquery.fancytree-all.min.js"></script>
	
<!-- including popper js -->						
<script	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
	
<!-- adding bootstrap js -->								
<script src="/Ui_Redesign/bootstrap/js/bootstrap.min.js"></script>

<!-- adding dataTable js -->								
<script src="/Ui_Redesign/datatable/dataTables.bootstrap4.min.js"></script>		
<script src="/Ui_Redesign/datatable/jquery.dataTables.min.js"></script>

<!-- adding bootbox js -->								
<script src="/Ui_Redesign/js/bootbox/bootbox.all.min.js"></script>		
<script src="/Ui_Redesign/js/bootbox/bootbox.locales.min.js"></script>
<script src="/Ui_Redesign/js/bootbox/bootbox.min.js"></script>


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.0.3/jquery.tinymce.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.0.3/tinymce.min.js"></script>
  
<!-- adding local js -->				
<script src="/Ui_Redesign/js/main/common.js"></script>

	
<title>UI_REDESIGN</title>
</head>

<body>
	<!-- Start of  Wrapper div -->	
	<div class="wrapper">
	
		<!-- Start of  Container-fluid div	 -->
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 col-sm-12 col-md-12">
					<div class="row">
						<div class="col-lg-12 col-sm-12 col-md-12">
						
					
					
					<!-- Start of Top header div -->
                            <div class="topHeaderSection">
								<div class="insideTopHeaderSection">
									<div class="row topHeaderSectionUl">
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Document</a></div>
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Library</a></div>
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Proofs</a></div>
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Funds</a></div>
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Service Desk</a></div>
										<div class="topHeaderPanelList"><a href="#" class="topHeaderPanelListLink">Supplements</a></div>
									</div>
								</div>
							</div>
					    <!-- End of top header div -->
							
						</div>
					</div>
						<!-- End of client details, document link and name div -->
					
					
					
					<div class="row topDocDetails">
						<div class="col-lg-12 col-sm-12 col-md-12">
						
					<!-- Start of edit document link div -->
                            <div class="row" id="document_details">
								<div class="col-lg-12 col-sm-12 col-md-12">
									<div class="sub_options">
									<a class="document-href" href="url">Document</a> / 
									<a class="proofs-href" href="url"> proofs</a> / 
									<a class="eproofs-href" href="url">Existing Proofs</a> / 
									<a class="edit-href" href="url">Edit Document</a>
								   </div>
							   </div>
						    </div>
					<!-- End of edit document link div -->
							
							
							
					<!-- Start of  icon , document name and status div -->
							<div class="row">
								<div class="col-lg-6 col-sm-6 col-md-6">
								  <div class="row">
									
								<!-- Start of menu icon div -->
									    <div class="col-lg-1 col-sm-1 col-md-1" id="menu_icon">
											<span id="togglebutton" onclick="togglebutton()"> 
											  <i class="material-icons topIcon">&#xe5d2;</i>
											</span>
										</div>
								<!-- End of menu icon div -->
										
									
								<!-- Start of star icon div -->
									  <div class="col-lg-1 col-sm-1 col-md-1" id="fav_icon">
											<i class="material-icons topIcon-star">&#xe838;</i>
									  </div>
								<!-- End of star icon div  -->
									
									
								<!-- Start of document name div -->
									  <div class="col-lg-7 col-sm-7 col-md-7" id="doc_name">
										<div class="dname">Short Duration Credit Opportunities Fund_ACI25565_SP</div></div>
								<!-- End of document name div -->
									
									
								<!-- Start of document Status dropdown div -->
									  <div class="col-lg-2 col-sm-2 col-md-2 docStatus">
											<!-- <select id="doc_status">
												<option class="docStatusOpn" value="inprogress">Inprogress</option>
												<option class="docStatusOpn" value="approve">Approve</option>
												<option class="docStatusOpn" value="review">Review</option>
												<option class="docStatusOpn" value="published">Published</option>
											</select> -->
											<div class="dropdown show">
												<div class="btn btn-secondary dropdown-toggle" role="button" id="doc_status" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false">Inprogress</div>
												<div class="dropdown-menu docStatusDropDownMenu" aria-labelledby="dropdownMenuLink">
													<div class="dropdown-item" id="Inprogress">Inprogress</div>
													<div class="dropdown-item" id="Review">Review</div>
													<div class="dropdown-item" id="Published">Published</div>
													<div class="dropdown-item" id="Approve">Approve</div>												
												</div>
											</div>


										</div>
								<!-- End of document Status dropdown div -->
									
									</div>
								</div>
								<!--End of  icon , document name and status div -->
						
						
						
						        <!-- Start of  icon , global search and client logo div -->
                                     <div class="col-lg-6 col-sm-6 col-md-6">
									    <div class="row right_side_clientinfo">
										   <div class="cricle">
											  <div class="cricle-icon"> <i class="material-icons">&#xe061;</i></div>
								           </div>
										
										   <div class="cricle">
											  <div class="cricle-icon"> <i class="material-icons">&#xe061;</i></div>
										   </div>
										
										   <div class="cricle">
											 <div class="cricle-icon"> <i class="material-icons">&#xe061;</i></div>
										   </div>
										
										   <div class="cricle">
											 <div class="cricle-icon"> <i class="material-icons">&#xe061;</i></div>
										   </div>
										
										   <div class="form-group" id="client_info">
											 <input class="form-control" id="client_name" placeholder="John Hancock">
										   </div>
										
										   <div class="" id="client_logo">
											 <img class="img-responsive" id="logo" border="0" src="/Ui_Redesign/logo/jhfLogo.jpg" alt="">
										   </div>
									     </div>
								      </div>
								 <!-- End of  icon , global search and client logo div -->
							  </div>
						   </div>
					    </div>
					<!-- End of  client details, document link and name div -->
					
					
					
					<div class="row panels">
				      <!-- Start of  leftPanel div -->
						<div class="col-lg-1 col-sm-1 col-md-1 leftPanel">
						    <!-- Start of  leftPanel icon div -->
							  <div class="iconsList">
								<div class="note_add-icon">
									<i class="material-icons icon-style" data-toggle="modal" data-target="#myModal">note_add</i>
								</div>
								
								<div class="search-icon">
									<i class="material-icons icon-style">search</i>
								</div>
								
								<div class="cached-icon">
									<i class="material-icons icon-style">cached</i>
								</div>
								
								<div class="check_circle-icon">
									<i class="material-icons icon-style">check_circle</i>
								</div>
							 </div>
						    <!-- End of  leftPanel icon div -->
						</div>
					 <!-- End of  leftPanel div -->
					
					
					 <!-- Start of  middlePanel div -->
						<div class="col-lg-2 col-sm-2 col-md-2 middlePanel">
							<div class="docNav">
	
								<div class="selectdiv">								
								<div class="dropdown show">
                                   <div class="btn btn-secondary dropdown-toggle" role="button" id="NavigationDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DOCUMENT NAVIGATION</div>
                                       <div  class="dropdown-menu navDropDownMenu" aria-labelledby="dropdownMenuLink">
                                          <div class="NavDropDown-item dropdown-item" id="EDIT DOCUMENT">EDIT DOCUMENT</div>
                                          <div class="NavDropDown-item dropdown-item" id="DOCUMENT NAVIGATION">DOCUMENT NAVIGATION</div>
									   </div>
								 </div>
							    </div>
							</div>

							<div Class="tblContent">
								<label class="tblContentLabel">TABLE OF CONTENT</label>
							</div>

							<div class="tblContentSearch">
								<input id="list-input" onkeyup="doctreesearch()" class="form-control custom-input" type="text" placeholder="Search">
							</div>

							<div class="search-content">
								<div class="scrollbar scrollbar-deep-purple bordered-deep-purple thin">
									<div id="tree"></div>
								</div>
							</div>
						</div>
					<!--End of  middlePanel div -->
				
				
				    <!-- Start of  Right Panel div -->
						<div class="col rightpanel">
						
					    <!-- Start of  Right Panel Container div used for document navigation -->
					       <div class="rightPanel-docNavContainer">
							
					        <!-- Start of  fund summary div -->
					         <div class="fund-summary">
								<div class="fund-details">
									<div class="fund-name">Money Market Fund</div>
								</div>
								
								<div class="fund-summary-nav">
									<span> <i class="material-icons fund-summary-nav-up">keyboard_arrow_up </i></span>
									<span> <i class="material-icons fund-summary-nav-down"> keyboard_arrow_down </i></span>
								</div>
								
								<div id="xbrltagdetailsId" class="xbrl-tag-details">
									<div class="xbrl-tag">XBRL TAG</div>
									<div class="xbrl-tag-info">Risk & Returns</div>
								</div>

								<div class="category-details">
									<div class="category">CATEGORY</div>
									<div class="category-info">Fund Summary</div>
								</div>

								<div class="fund-details">
									<div class="fund">FUND</div>
									<div class="fund-info">Blue Chip Growth Fund</div>
								</div>

								<div class="component-detail" id="status">
									<input type="text" class="comp-type" value="1" /> 
									<input type="text" class="unresolved" value="1" />
									<input type="text" class="expired" value="1" />
									<input type="text" class="new" value="1" />
								</div>
							</div>
					<!-- End of  fund summary div -->		
					
					
				<!-- Start of component table Div -->	
							<div class="row componentTbl" data-spy="scroll" data-target=".paginationDiv">
								<div class="col">
									<div class="content-view">
										<div class="content-search">
											<input id="comptblsearchId"
												class="input-width form-control" type="text"
												placeholder="Search for content">
										</div>										
										<div class="viewType">
											<div class="viewStreamIcon">
												<i class="material-icons viewIcon">view_stream</i>
											</div>											
											<div class="viewTypedetails">												
													<div class="dropdown show">
														<div class="btn btn-secondary dropdown-toggle" role="button" id="viewDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Compact View</div>
														<div class="dropdown-menu viewDropDownMenu" aria-labelledby="dropdownMenuLink">
															<div class="viewDropDown-item dropdown-item"	id="Full View">Full View</div>
															<div class="viewDropDown-item dropdown-item"	id="Compact View">Compact View</div>
														</div>
													</div>
											</div>											
										</div>
										
									
									<!-- Start of table container (full and compact table) -->
						                   <div class="table-container">
											  <div id="scrollbarCompTblID" class="scrollbarCompTbl scrollbar-deep-purple bordered-deep-purple thin">
											
							        <!-- Start of full View-details div-->
							               <div class="fullView-details">
												<div class="container">
													
							        <!-- Start of component Full view div-->
				                           <table class="compFullDetails" id="compFullDetailsID">
				                           <tbody class="selectComp"></tbody>
				                           </table>
														
										<!-- Start of component Full view div      -->				
									</div>
								</div>
							<!-- End of fullView-details div  -->
										
												<table class="table comptbl" id="componentTable">
													<thead class="table-header">
														<tr class="table-header-tr">
															<th class="table-header-th">Order</th>
															<th class="table-header-th">Type</th>
															<th class="table-header-th">Indicator</th>
															<th class="table-header-th">Name</th>
															<th class="table-header-th">Attached</th>
															<th class="table-header-th">XBRL</th>
															<th class="table-header-th">Context</th>
															<th class="table-header-th">Fund</th>
														</tr>
													</thead>
											        <tbody class="abcd selectComp">
											        <tr class="table-body-tr"></tr>
											        </tbody>
												</table>
											</div>
										</div>
							         
							         <!-- End of table container (full and compact tables )-->
									
									</div>
								</div>
								
									<!-- 	Start of right side pagination and icon div -->
								
									<div id="scrollBarIconId" class="col-lg-1 col-sm-1 col-md-1 scrollBarIcon">
									<div class="row ">
										<div class="cartDetails col-lg-1 col-sm-1 col-md-1">
										<div class="menuIcon" onclick="verticalsplit()">
											<i class="material-icons ">vertical_split </i>
										</div>
										<div class="menuIcon">
											<i class="material-icons" id="cart"> shopping_cart</i>
										</div>
										<div class="menuIcon" onclick="favComponent()">
											<i class="material-icons" id="fav"> star </i>
										</div>
										
										<!-- 	Start of right side pagination div -->
											
											<div class="paginationDiv" id="myNavbar">
												<ul id="paginacao" class="pagination">
													<li><a class="scrollNum" href="#comp1">1</a></li>
													<li><a class="scrollNum" href="#comp2">2</a></li>
													<li><a class="scrollNum" href="#comp3">3</a></li>
													<li><a class="scrollNum" href="#comp4">4</a></li>
													<li><a class="scrollNum" href="#comp5">5</a></li>
													<li><a class="scrollNum" href="#comp6">6</a></li>
													<li><a class="scrollNum" href="#comp7">7</a></li>
													<li><a class="scrollNum" href="#comp8">8</a></li>
													<li><a class="scrollNum" href="#comp9">9</a></li>
													<li><a class="scrollNum" href="#comp10">10</a></li>
												</ul>
											</div>										
										<!-- 	End of right side pagination div -->									
									</div>
										
									<div class="col cartComp">
										<div class="cartNameIcon">
											<div class="cartDiv">
												<div class="cartName">CART</div>
											</div>
											<div class="cartMoreIcon">
													<i class="material-icons">more_vert</i>
											</div>
										</div>
										<div class="cartCompSelected">
											<span class="cartCompSelectedCount">0 SELECTED OUT OF 22</span>
										</div>
										
										<div class="cartAndFavSearchDiv" onclick="cartFavSearch()">
											<input type="text" class="cartAndFavSearch">
										</div>
										
										  <div id="cartscrollbarID" class="scrollbar-deep-purple bordered-deep-purple thin">
										<div class="cartCompName">
												<table id="cartCompNameID">
												<tbody class="selectComp"></tbody>
												</table> 	  
												  																	
										</div>	
										</div>
									</div>	
									
									
											<div class="col favComp">
										<div class="cartNameIcon">
											<div class="cartDiv">
												<div class="cartName">FAV</div>
											</div>
											<div class="cartMoreIcon">
													<i class="material-icons">more_vert</i>
											</div>
										</div>
										<div class="cartCompSelected">
											<span class="cartCompSelectedCount">0 SELECTED OUT OF 22</span>
										</div>
										
										<div class="cartAndFavSearchDiv">
											<input type="text" class="cartAndFavSearch">
										</div>
										  <div id="cartscrollbarID" class="scrollbar-deep-purple bordered-deep-purple thin">
										<div class="cartCompName">
												<table id="favCompNameID">
												   <thead>
												  	<th></th>
												   </thead>
												   	<tbody>
													   	<tr>
														   	<td></td>
														 </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
													   	</tr>
												   	</tbody>					
    											</table> 	    																	
										</div>	
										</div>
									</div>	
									
									
								</div>						
								<!-- 	End of right side pagination and icon div -->
								</div>
								
							</div>
							<!-- 	End of component table Div     -->	
						</div>
						
						<!-- 	End of Right Panel Container div used for document navgation div-->
						
						<!-- 	Start of Right Panel Container div used for document Edit div -->
						<div class="rightPanel-docEditContainer">
						
							<!-- 	Start of document type,locale and expiration div -->
							
								<div class="docType-locale-exp">
									<div class="docEdit-docType">
										<div class="docEdit-Type">Type</div>
										<div class="docEdit-TypeDetails">JHVIT Prospectus</div>
									</div>
									<div class="docEdit-docLocale">
										<div class="docEdit-Locale">Local</div>
										<div class="docEdit-LocaleDetails">English</div>
									</div>
									<div class="docEdit-doc-eff-exp">
										<div class="docEdit-eff-exp">From-To</div>
										<div class="docEdit-eff-exp-Details"><input class="eff-exp-input form-control" type="text" value="MM/DD/YY">
										<input class="exp-input form-control" type="text" value="MM/DD/YY"></div>
									</div>
								</div>	
							<!-- 	End of document type,locale and expiration div -->
							<!-- 	Start of document Steps div -->
								<div class="docEdit-Steps">
									<div class="docSteps">
										<div class="docStepsOne">Step1</div>
										<div class="docStepsTwo">Step2</div>
										<div class="docStepsThree">Step3</div>								
									</div>							
								</div>
							<!-- 	End of document Steps div -->
								<div class="row fund-association">
									<div class="col-lg-6">
									
									<div class="editDocfund">
											<div class="indsidefunds">Funds</div>
											<div class="fund-selection">
												<div class="fund-count">SHOWING 332 OF 332 FUNDS</div>
												<div class="selection-count">0 SELECTED</div>
												<div class="fundSelection">SELECT ALL/CLEAR</div>
												<div class="fund-more-icon"><i class="material-icons">more_horiz</i></div>
											</div>
											<div class="fundSearch">
												<input id="fundSearchInputID" class="fundSearchInput form-control" type="text">
											</div>
											<div class="editDocScrollbar scrollbar-deep-purple bordered-deep-purple thin">
											<div class="fundName">
												<table id="fundNameID">
												   <thead>
												  
												  	 <th></th>
												   
												   </thead>
												   	<tbody>
													   	<tr>
														   	<td></td>
														 </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
													   	</tr>
												   	</tbody>					
    											</table>												
											</div>	
											</div>										
										</div>
										
										
										</div>
										<div class="col-lg-6">
										
										
									
										
										<div class="editDocselectedfund">
											<div class="indsideselectedfunds">Selected Funds</div>
											<div class="selectedfund-selection">
												<div class="selectedfund-count">SHOWING 332 OF 332 FUNDS</div>
												<div class="selectedselection-count">0 SELECTED</div>
												<div class="selectedfundSelection">SELECT ALL/CLEAR</div>
												<div class="selectedfund-more-icon"><i class="material-icons">more_horiz</i></div>
											</div>
											<div class="fundSearch">
												<input id="selectedfundSearchInputID" class="selectedfundSearchInput form-control" type="text">
											</div>
											<div class="editDocScrollbar scrollbar-deep-purple bordered-deep-purple thin">
											<div class="selectedfundName">
												<table id="selectedfundNameID">
												   <thead>
												   
												  	 <th></th>
												   
												   </thead>
												  	<tbody>
													   	<tr>
														   	<td></td>
														 </tr>
														  <tr>
														   	<td></td>
														  </tr>
														  <tr>
														   	<td></td>
													   	</tr> 
												   	</tbody> 			
    											</table>												
											</div>	
											</div>										
										</div>
										
										
										
										</div>
									</div>
									
								</div>
							
							
						</div>
						<!-- 	End of Right Panel Container div used for document Edit div-->
						
					</div>
					<!-- 	End of  right Panel div -->
					
				</div>
			</div>


		</div>
		<!-- 		End of  Container-fluid div    -->	
	</div>
<!-- 		End of wrapper div    -->	


	<!-- The Modal -->
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content" style="width: 677px; height: 566px;">

				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<div class="description" style="font-size: 12px;">
						<span>For now this is blank</span>
					</div>
				</div>

				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>

			</div>
		</div>
	</div>

	
	<!-- Comment Modal -->
	<div class="modal fade" id="commentModalCenter" tabindex="-1"
		role="dialog" aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Add
						Comments</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<textarea  rows="5" cols="63"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Add Comments</button>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade modal-font" id="editCompModal" tabindex="-1"
		role="dialog" aria-labelledby="editCompModalTitle"
		aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Edit Component</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<textarea id='EditBody' class='editbodyTxtArea'></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary saveEditedComp">Save</button>
				</div>
			</div>
		</div>
	</div> 
	
	

</body>

</html>