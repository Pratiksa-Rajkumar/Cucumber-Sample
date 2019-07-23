package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature/feature1.feature",glue="Package1",
					//tags= {"@login"},
					//tags= {"@regression"},
					//tags= {"@login,@regression"}//OR 
					
					//plugin="html:target\\htmlreport"
					plugin="json:target\\Jsonreport.json"
					//plugin="junit:target\\XMLreport.xml"
					)
public class RunnerClass {

}
