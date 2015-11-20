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

      | title        | year | genre                                    |
      | Finding Nemo | 2003 | {"Genre":"Animation, Adventure, Comedy"} |
      | Inception    | 2010 | {"Genre":"Action, Mystery, Sci-Fi"}      |

    Examples: Special characters in movie titles

      | title  | year | genre                                    |
      | WALL�E | 2008 | {"Genre":"Animation, Adventure, Family"} |
      | 8�     | 2013 | {"Genre":"Crime, Drama"}                 |

  Scenario: Get error when searching a movie just by year
    Given I get movie by year "2010"
    When I make the rest call
    Then response should contain:
      """
      {
      "Response":"False",
      "Error":"Something went wrong"
      }
      """

  Scenario: Get error when introducing wrong name
    Given I query movie by "ajkshd kjhasj"
    When I make the rest call
    Then response should contain:
      """
      {"Response":"False","Error":"Movie not found!"}
      """

  Scenario: Get error when inserting text search by year
    Given I get movie by year "jsadkhj"
    When I make the rest call
    Then response should contain:
      """
      {
      "Response":"False",
      "Error":"Something went wrong"
      }
      """

  Scenario: Get error when introducing correct movie name and wrong year
    Given I get movie by "Lion King" and "1990"
    When I make the rest call
    Then response should contain:
      """
      {"Response":"False","Error":"Movie not found!"}
      """

  Scenario: Get Serie by title
    Given I get serie by "Friends"
    When I make the rest call
    Then response should contain:
       """
       {
       "Title":"Friends",
       "Genre":"Comedy, Romance",
       "Year":"1994–2004"
       }
       """

  Scenario: Get Serie by title, season and episode
    Given I get serie by "Friends", "1" , "1"
    When I make the rest call
    Then response should contain:
       """
       {
       "Title":"The One Where Monica Gets a Roommate",
       "Genre":"Comedy, Romance",
       "Year":"1994"
       }
       """

  Scenario: Get Serie by title and season
    Given I get serie by "Friends", "1"
    When I make the rest call
    Then response should contain:
       """
       {
       "Title":"Friends",
       "Season":"1"
       }
       """

  Scenario: Get Serie by title with full plot
    Given I query serie by "Friends", "full"
    When I make the rest call
    Then response should contain:
       """
       {
       "Title":"Friends",
       "Plot":"In this 1994 sitcom, Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are all friends, living off of one another in the heart of NY. Over the course of 8 years, these average group of buddys go through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend."
       }
       """

  Scenario: Get Movie by title and year with full plot
    Given I get movie by "Lion King" and "1994" and "full"
    When I make the rest call
    Then response should contain:
       """
       {
       "Title":"The Lion King",
       "Plot":"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron fist, the prince grows up beyond the savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young Prince must decide his fate: will he remain an outcast, or face his demons and become what he needs to be?"
       }
       """
