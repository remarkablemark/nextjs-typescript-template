Feature: API
  Scenario: Hello
    Given I make a "GET" request to "/api/hello"
    Then I see response status 200
      And I see response body '{"name":"John Doe"}'
