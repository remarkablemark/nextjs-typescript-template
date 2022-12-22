Feature: Homepage
  Scenario: Visiting homepage
    When I visit "/"
    Then I see text "Welcome to Next.js!"
