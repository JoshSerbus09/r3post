import React, { Component } from 'react';
import axios from 'axios';

var base_api_url=REACT_APP_REDDIT_TOKEN_URL;

class RedditAPIService extends Component {
	callRedditAPI() {
		axios.get(this.base_api_url);
	}
}

export default RedditAPIService;