Feature: 404
  Scenario: Visiting 404 page
    When I visit "/404" without failing
    Then I see text "This page could not be found."
