$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/clearqa/test/imdb_rest.feature");
formatter.feature({
  "line": 1,
  "name": "IMDB rest api gets",
  "description": "",
  "id": "imdb-rest-api-gets",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Get movie by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-movie-by-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I query movie by \"Finding Nemo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response should contain:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": "{\r\n\"Title\":\"Finding Nemo\",\r\n\"Genre\":\"Animation, Adventure, Comedy\",\r\n\"Year\":\"2003\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 81665819,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 661157411,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 5060112,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I query movie by \"Finding Nemo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Comedy\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 157673,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 97730451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Animation, Adventure, Comedy\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 283317,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I query movie by \"Inception\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "response should contain \"{\"Genre\":\"Action, Mystery, Sci-Fi\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Inception",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 144051,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 94278496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Action, Mystery, Sci-Fi\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 190430,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I query movie by \"WALL�E\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Family\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WALL�E",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 217657,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 94422454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Animation, Adventure, Family\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 167683,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I query movie by \"8�\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "response should contain \"{\"Genre\": \"Mystery, Sci-Fi, Thriller\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8�",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 177592,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 121240265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Mystery, Sci-Fi, Thriller\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 198994,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Get movie by id",
  "description": "",
  "id": "imdb-rest-api-gets;get-movie-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I get movie by \"tt0154789\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "response should contain:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 36,
    "value": "{\r\n\"Title\":\"Lord of the Rings\",\r\n\"Genre\":\"Adventure, Fantasy\",\r\n\"Year\":\"1990\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "tt0154789",
      "offset": 16
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_id(String)"
});
formatter.result({
  "duration": 223657,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 99752355,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 178805,
  "status": "passed"
});
});