package com.clearqa.test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import cucumber.api.PendingException;
import org.json.JSONException;
import org.json.JSONObject;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cucumber.api.java.en.*;

public class ImdbSteps {

    final Logger logger = LoggerFactory.getLogger(ImdbSteps.class);
    private String imdb_url;
    private JSONObject json_response;

    @Given("^I query movie by \"([^\"]*)\"$")
    public void I_query_movie_by_title(String key) throws UnsupportedEncodingException {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(key, "UTF-8") + "&y=&plot=short&r=json";
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get movie by \"([^\"]*)\"$")
    public void I_query_movie_by_id(String key) throws UnsupportedEncodingException {
        imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(key, "UTF-8") + "&plot=short&r=json";
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @When("^I make the rest call$")
    public void I_make_the_rest_call() throws IOException, JSONException {
        json_response = JsonReader.readJsonFromUrl(imdb_url);
        logger.info("Response = " + json_response.toString());
    }

    @Then("^response should contain:$")
    public void response_should_contain_JSON(String expected_json_str) throws JSONException {
        logger.info("Comparing reponse with" + expected_json_str);
        JSONObject expected_json = new JSONObject(expected_json_str);
        JSONAssert.assertEquals(expected_json, json_response, JSONCompareMode.LENIENT);
    }

    @Then("^response should contain \"(.+)\"")
    public void response_should_contain(String expected_json_str) throws JSONException {
        response_should_contain_JSON(expected_json_str);
    }

    @Given("^I get movie by \"([^\"]*)\" and \"([^\"]*)\"$")
    public void I_get_movie_by_title_and_id(String title, String year) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&y=" + URLEncoder.encode(year, "UTF-8") + "&plot=short&r=json";
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get movie by year \"([^\"]*)\"$")
    public void I_get_movie_by_year(String year) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + "&y=" + URLEncoder.encode(year, "UTF-8") + "&plot=short&r=json";
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get serie by \"([^\"]*)\"$")
    public void iGetSerieBy(String title) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&y=&plot=short&r=json";
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get serie by \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\"$")
    public void iGetSerieBy(String title, String season, String episode) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&Season=" + URLEncoder.encode(season, "UTF-8") + "&Episode=" + URLEncoder.encode(episode, "UTF-8");
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get serie by \"([^\"]*)\", \"([^\"]*)\"$")
    public void iGetSerieBy(String title, String season) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&Season=" + URLEncoder.encode(season, "UTF-8");
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I query serie by \"([^\"]*)\", \"([^\"]*)\"$")
    public void iQuerySerieBy(String title, String plot) throws Throwable {
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&plot=" + URLEncoder.encode(plot, "UTF-8");
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }

    @Given("^I get movie by \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iGetMovieByAndAnd(String title, String year, String plot) throws Throwable {
        //http://www.omdbapi.com/?t=Lion+king&y=1994&plot=full&r=json
        imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(title, "UTF-8") + "&y=" + URLEncoder.encode(year, "UTF-8") + "&plot=" + URLEncoder.encode(plot, "UTF-8");
        System.out.println("++++++++" + imdb_url + "++++++++");
        logger.info("http query = " + imdb_url);
    }
}