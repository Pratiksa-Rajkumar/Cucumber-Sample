$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/feature_registration.feature");
formatter.feature({
  "name": "Register, Login and Add items to cart in TestMeApp",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User registration in TestMeApp",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User process to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_process_to_registration_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.41 seconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CDC2-D-4TKJX52\u0027, ip: \u002710.237.54.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat CaseStudy.Registration.user_process_to_registration_page(Registration.java:17)\r\n\tat ✽.User process to registration page(feature/feature_registration.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username \"pratiksa3\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname \"pratiksa\" And lastname \"Rajkumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_enters_firstname_And_lastname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters password \"user123\" And confirmpassword \"user123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.enters_password_And_confirmpassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose gender \"female\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.choose_gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the username \"pratiksa@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.enter_the_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "mobile number \"8754701018\" And DOB \"16/05/1998\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.mobile_number_And_DOB(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "address \"Perungalathur Chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "security question \"What is your Birth Place?\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.security_question(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "answer \"Coimbatore\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.answer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks register button",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.clicks_register_button()"
});
formatter.result({
  "status": "skipped"
});
});