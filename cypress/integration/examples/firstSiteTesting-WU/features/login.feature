 @allTestLunch

Feature: WU - Login Page

    Feature Description

    Scenario: Login using invalid credentials
        Given I acces the Webdriver University Login portal page
        When I enter a username zelimir
        And I enter a password zelimir1972
        And I click on login button
        Then I should be presented with the following message validation failed

    Scenario: Login using valid credentials
        Given I acces the Webdriver University Login portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on login button
        Then I should be presented with the following message validation succeeded

    @multipleLogin
    Scenario Outline: Test Login on WU site
        Given I acces the Webdriver University Login portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | zelimir   | zelimir1972  | validation failed    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver321 | validation failed    |
            | webdri    | webdriver321 | validation failed    |
            | webd      | webdriver321 | validation failed    |
