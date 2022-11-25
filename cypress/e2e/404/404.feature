Feature: 404 page
  Scenario: visiting 404 page
    When I visit "/404"
    Then I see text "This page could not be found."
