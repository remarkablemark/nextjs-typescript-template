Feature: 404
  Scenario: Visiting the page
    When I visit "/404" without failing
    Then I see text "This page could not be found."
