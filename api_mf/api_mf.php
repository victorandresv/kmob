<?php

class api_mf {

    var $app_id;
    var $app_key;
    var $api_url_get_session_token = 'https://www.mediafire.com/api/user/get_session_token.php';

    public function __construct($app_id, $app_key) {
        if ($app_id and $app_key) {
            $this->app_id = $app_id;
            $this->app_key = $app_key;
        } else {
            die('Error ID:KEY');
        }
    }

    protected function get_session_token_by_twitter_token($tw_oauth_token, $tw_oauth_token_secret) {
        if ($tw_oauth_token and $tw_oauth_token_secret) {
            $url = $this->api_url_get_session_token;
            $url .= '?tw_oauth_token=' . $tw_oauth_token . '&tw_oauth_token_secret=' . $tw_oauth_token_secret . '&application_id=' . $this->app_id . '&signature=' . $this->signature_email_password($email, $password) . '&response_format=json';
            $json = file_get_contents($url);
            return json_decode($json);
        } else {
            die('Error EMAIL:PASSWORD - GET SESSION');
        }
    }

    protected function get_session_token_by_facebook_token($fb_access_token) {
        if ($fb_access_token) {
            $url = $this->api_url_get_session_token;
            $url .= '?fb_access_token=' . $fb_access_token . '&application_id=' . $this->app_id . '&signature=' . $this->signature_email_password($email, $password) . '&response_format=json';
            $json = file_get_contents($url);
            return json_decode($json);
        } else {
            die('Error FACEBOOK TOKEN - GET SESSION');
        }
    }

    protected function get_session_token_by_email_password($email, $password) {
        if ($email and $password) {
            $url = $this->api_url_get_session_token;
            $url .= '?email=' . $email . '&password=' . $password . '&application_id=' . $this->app_id . '&signature=' . $this->signature_email_password($email, $password) . '&response_format=json';
            $json = file_get_contents($url);
            return json_decode($json);
        } else {
            die('Error EMAIL:PASSWORD - GET SESSION');
        }
    }

    protected function signature_facebook_token($fb_access_token = false) {
        if ($fb_access_token) {
            return $this->signature($fb_access_token);
        } else {
            die('Error EMAIL:PASSWORD - Signature');
        }
    }

    protected function signature_twitter_token($tw_oauth_token = false, $tw_oauth_token_secret = false) {
        if ($tw_oauth_token and $tw_oauth_token_secret) {
            return $this->signature($tw_oauth_token . $tw_oauth_token_secret);
        } else {
            die('Error EMAIL:PASSWORD - Signature');
        }
    }

    protected function signature_email_password($email = false, $password = false) {
        if ($email and $password) {
            return $this->signature($email . $password);
        } else {
            die('Error EMAIL:PASSWORD - Signature');
        }
    }

    protected function signature($string = false) {
        if ($string) {
            return sha1($string . $this->app_id . $this->app_key);
        } else {
            die("Error SIGNATURE");
        }
    }

}