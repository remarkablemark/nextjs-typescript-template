Feature: index page
  Scenario: visiting the index page
    When I visit "/"
    Then I see heading "Welcome to Next.js!"
