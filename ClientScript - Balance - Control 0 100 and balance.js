/*
Keystone April 2015

Balance on shore % (u_balance_on_shore) 
Need to control the value has to be between 0 and 100

Balance off shore % (u_balance_off_shore)
Read only. Value has to be 100 - Balance on shore
 */

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue == '')
		return;


	var percent = g_form.getIntValue('u_balance_on_shore'); //Get the probability number

	if (percent <= 0)
		percent = 0;		
	else if (percent >= 100)
		percent = 100;
	
	if (g_form.getValue('u_balance_on_shore') != percent) 
		g_form.setValue('u_balance_on_shore', percent);

	var balance100 = 100 - percent;
	g_form.setValue('u_balance_off_shore', balance100);

}
