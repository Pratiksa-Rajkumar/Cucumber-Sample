Feature: Register, Login and Add items to cart in TestMeApp

@Registration @regression
Scenario: User registration in TestMeApp
	Given User process to registration page
	When user enters username "pratiksa3"
	And user enters firstname "pratiksa" And lastname "Rajkumar"
	And enters password "user123" And confirmpassword "user123"
	And choose gender "female" 
	And enter the username "pratiksa@gmail.com"
	And mobile number "8754701018" And DOB "16/05/1998"
	And address "Perungalathur Chennai"
	And security question "What is your Birth Place?"
	And answer "Coimbatore"
	Then clicks register button
	
	
	@login @regression
	Scenario Outline: Login in TestMeApp
		When User enters "<uname>"
		And User enters password "<pass>"
		Then clicks login button
		
	Examples:
	|pratiksa3| user123|