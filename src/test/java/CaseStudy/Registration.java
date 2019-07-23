package CaseStudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Registration {
	WebDriver driver;
	@Given("User process to registration page")
	public void user_process_to_registration_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Selium 3.0\\Selium 3.0\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.findElement(By.partialLinkText("SignUp")).click();
	}

	@When("user enters username {string}")
	public void user_enters_username(String un) {
	    driver.findElement(By.name("userName")).sendKeys(un);
	}

	@When("user enters firstname {string} And lastname {string}")
	public void user_enters_firstname_And_lastname(String fn, String ln) {
	   driver.findElement(By.name("firstName")).sendKeys(fn);
	   driver.findElement(By.name("lastName")).sendKeys(ln);
	}

	@When("enters password {string} And confirmpassword {string}")
	public void enters_password_And_confirmpassword(String pwd, String cpwd) {
		 driver.findElement(By.name("password")).sendKeys(pwd);
		   driver.findElement(By.name("confirmPassword")).sendKeys(cpwd);
	}

	@When("choose gender {string}")
	public void choose_gender(String string) {
	   driver.findElement(By.xpath("//input[@value='Female']")).click();
	}

	@When("enter the username {string}")
	public void enter_the_username(String mail) {
		driver.findElement(By.name("emailAddress")).sendKeys(mail);
	}

	@When("mobile number {string} And DOB {string}")
	public void mobile_number_And_DOB(String num, String db) {
		driver.findElement(By.name("mobileNumber")).sendKeys(num);
		   driver.findElement(By.name("dob")).sendKeys(db);
	}

	@When("address {string}")
	public void address(String add) {
		driver.findElement(By.name("address")).sendKeys(add);
	}

	@When("security question {string}")
	public void security_question(String sq) {
		driver.findElement(By.name("securityQuestion")).sendKeys(sq);
	}

	@When("answer {string}")
	public void answer(String ans) {
		driver.findElement(By.name("answer")).sendKeys(ans);
	}

	@Then("clicks register button")
	public void clicks_register_button() {
		driver.findElement(By.name("Submit")).click();
	}

	@When("User enters {string}")
	public void username(String uname) {
		System.setProperty("webdriver.chrome.driver", "C:\\Selium 3.0\\Selium 3.0\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
		driver.findElement(By.name("userName")).sendKeys(uname);
		
	}
	@And("User enters password {word}")
	public void password(String pass) {
		
		driver.findElement(By.id("password")).sendKeys(pass);
		
	}
	@Then("clicks login button")
	public void login() {
		driver.findElement(By.name("Login")).click();
	}

}
