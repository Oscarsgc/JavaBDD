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
  "duration": 88241777,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 340086067,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 3696225,
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
  "duration": 115987,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 117296186,
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
  "duration": 203538,
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
  "duration": 192210,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 98517626,
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
  "duration": 178087,
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
  "duration": 224968,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 345179099,
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
  "duration": 216997,
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
  "duration": 178951,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 201142443,
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
  "duration": 160816,
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
  "duration": 150048,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 95581282,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 180902,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Get many movies by id",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-id;no-special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I get movie by \"tt0154789\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "response should contain \"{\"Genre\":\"Adventure, Fantasy\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
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
  "duration": 130092,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 158317412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Adventure, Fantasy\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 210498,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Get many movies by id",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-id;no-special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I get movie by \"tt1285016\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "response should contain \"{\"Genre\":\"Biography, Drama\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tt1285016",
      "offset": 16
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_id(String)"
});
formatter.result({
  "duration": 162968,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 194328280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Biography, Drama\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 241967,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Get many movies by id",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-id;special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I get movie by \"tt0910970\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Family\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tt0910970",
      "offset": 16
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_id(String)"
});
formatter.result({
  "duration": 145779,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 154666048,
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
  "duration": 187599,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Get many movies by id",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-id;special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I get movie by \"tt1745873\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "response should contain \"{\"Genre\":\"Crime\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tt1745873",
      "offset": 16
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_id(String)"
});
formatter.result({
  "duration": 168490,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 360014464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Crime\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 171791,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Get movie by title and year",
  "description": "",
  "id": "imdb-rest-api-gets;get-movie-by-title-and-year",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I get movie by \"The Lord of the Rings\" and \"1992\"",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "response should contain:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 64,
    "value": "{\r\n\"Title\":\"The Lord of the Rings: Vol. II\",\r\n\"Genre\":\"Action\",\r\n\"Year\":\"1992\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "The Lord of the Rings",
      "offset": 16
    },
    {
      "val": "1992",
      "offset": 44
    }
  ],
  "location": "ImdbSteps.I_get_movie_by_title_and_id(String,String)"
});
formatter.result({
  "duration": 200902,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 129439084,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 156933,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Get many movies by title and year",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title-and-year;no-special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I get movie by \"Finding Nemo\" and \"2003\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Comedy\"}\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 16
    },
    {
      "val": "2003",
      "offset": 35
    }
  ],
  "location": "ImdbSteps.I_get_movie_by_title_and_id(String,String)"
});
formatter.result({
  "duration": 168509,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 93519230,
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
  "duration": 218655,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Get many movies by title and year",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title-and-year;no-special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I get movie by \"Inception\" and \"2010\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "response should contain \"{\"Genre\":\"Action, Mystery, Sci-Fi\"}\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Inception",
      "offset": 16
    },
    {
      "val": "2010",
      "offset": 32
    }
  ],
  "location": "ImdbSteps.I_get_movie_by_title_and_id(String,String)"
});
formatter.result({
  "duration": 193597,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 110338184,
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
  "duration": 138881,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Get many movies by title and year",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title-and-year;special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I get movie by \"WALL�E\" and \"2008\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Family\"}\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WALL�E",
      "offset": 16
    },
    {
      "val": "2008",
      "offset": 29
    }
  ],
  "location": "ImdbSteps.I_get_movie_by_title_and_id(String,String)"
});
formatter.result({
  "duration": 128450,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 219621495,
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
  "duration": 153416,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Get many movies by title and year",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title-and-year;special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I get movie by \"8�\" and \"2013\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "response should contain \"{\"Genre\":\"Crime, Drama\"}\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8�",
      "offset": 16
    },
    {
      "val": "2013",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.I_get_movie_by_title_and_id(String,String)"
});
formatter.result({
  "duration": 234528,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 106656285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Crime, Drama\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 143760,
  "status": "passed"
});
});