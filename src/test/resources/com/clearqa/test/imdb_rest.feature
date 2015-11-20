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

  Scenario Outline: Get many movies by id
    Given I get movie by "<id>"
    When I make the rest call
    Then response should contain "<Genre>"

    Examples: No special characters in movie titles

      | id        | Genre                          |
      | tt0154789 | {"Genre":"Adventure, Fantasy"} |
      | tt1285016 | {"Genre":"Biography, Drama"}   |

    Examples: Special characters in movie titles
      | id        | Genre                                    |
      | tt0910970 | {"Genre":"Animation, Adventure, Family"} |
      | tt1745873 | {"Genre":"Crime"}                        |

  Scenario: Get movie by title and year
    Given I get movie by "The Lord of the Rings" and "1992"
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"The Lord of the Rings: Vol. II",
      "Genre":"Action",
      "Year":"1992"
      }
      """

  Scenario Outline: Get many movies by title and year
    Given I get movie by "<title>" and "<year>"
    When I make the rest call
    Then response should contain "<genre>"

    Examples: No special characters in movie titles

      | title        | year | genre                          |
      | Finding Nemo | 2003 | {"Genre":"Animation, Adventure, Comedy"} |
      | Inception    | 2010 | {"Genre":"Action, Mystery, Sci-Fi"}      |

    Examples: Special characters in movie titles

      | title  | year | genre                                    |
      | WALL�E | 2008 | {"Genre":"Animation, Adventure, Family"} |
      | 8�     | 2013 | {"Genre":"Crime, Drama"}                        |