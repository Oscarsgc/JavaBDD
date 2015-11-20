Feature: IMDB rest api gets

  Scenario: Get movie by title
    Given I query movie by "Finding Nemo"
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Finding Nemo",
      "Genre":"Animation, Adventure, Comedy",
      "Year":"2003"
      }
      """

  Scenario Outline: Get many movies by title
    Given I query movie by "<title>"
    When I make the rest call
    Then response should contain "<Genre>"

    Examples: No special characters in movie titles

      | title        | Genre                                    |
      | Finding Nemo | {"Genre":"Animation, Adventure, Comedy"} |
      | Inception    | {"Genre":"Action, Mystery, Sci-Fi"}      |

    Examples: Special characters in movie titles
      | title  | Genre                                    |
      | WALL�E | {"Genre":"Animation, Adventure, Family"} |
      | 8�     | {"Genre": "Mystery, Sci-Fi, Thriller"}   |


  Scenario: Get movie by id
    Given I get movie by "tt0154789"
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Lord of the Rings",
      "Genre":"Adventure, Fantasy",
      "Year":"1990"
      }
      """