//Keystone November 2014
//A request with the "Review status" on "Requested" should be prevented to be resolved / closed

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue == '') {
		return;
	}

	//If the user is trying to Resolve the Request
	//State: 6 > Resolved
	if (newValue == '6') {
		var reviewStatus = g_form.getValue('u_review_status');//Review status
		//And the review status is still requested
		//Review status: "Requested"
		if(reviewStatus == "Requested"){
				g_form.showFieldMsg('u_review_status','You cant resolve or close a request with the "Requested" Review status','info'); //Show an alert message
				g_form.flash("u_cs_hr.u_review_status", "#FFFACD", -4); //And make it flash
				g_form.flash("u_cs_hr.state", "#FFFACD", -4); //And make it flash
				g_form.setValue('state',oldValue); //Reset the state value
		}
	}
}
