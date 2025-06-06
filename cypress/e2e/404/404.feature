Feature: 404
  Scenario: Visiting 404 page
    Given I visit "/404"
      | failOnStatusCode | false |
    Then I see text "This page could not be found."
