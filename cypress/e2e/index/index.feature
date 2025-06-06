Feature: Homepage
  Scenario: Visiting homepage
    Given I visit "/"
    Then I see heading "Welcome to Next.js!"
