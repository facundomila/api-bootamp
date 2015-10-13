var $ = require('jquery');
var _ = require('lodash');

var API_KEY = 'cvkb5d4tufg3jxg7dh3qytqmnzywpt3p';
var LOCALE = 'en_US';

var RealmStatusApi = function(apikey, locale) {
    this.locale = locale || LOCALE;
    this.apikey = apikey || API_KEY;
    //this.fields_guild = fields_guild;
};

RealmStatusApi.prototype = {
    constructor: RealmStatusApi
};

RealmStatusApi.prototype.onRequestError = function (xhr, status, error) {
    console.log(error);
    alert(error);
};

RealmStatusApi.prototype.get = function (attr) {
    return this[attr];
};

RealmStatusApi.prototype.set = function (attr, value) {
    this[attr] = value;
};

RealmStatusApi.prototype.getRealmsStatus = function (callback) {
    $.ajax ({
        url: 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',
        type: 'get',
        dataType: 'json',
        success: function(response) {
            callback(response.realms);

        },
        error: this.onRequestError,

        complete: function(jqXHR, response) {
            console.log(response);
        }
    })
};

RealmStatusApi.prototype.getCharacterProfile = function (callback, realm, name) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/character' + '/'+ realm + '/'+ name,
        data: {
            type: 'json',
            locale: this.locale,
            apikey: this.apikey
        },
        success: function(response) {
            callback(response);
        },
        error: this.onRequestError
        })
};


RealmStatusApi.prototype.getguildProfile = function (callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/character' + '/'+ (this.fields_guild)+'/'+(this.realm) +  '/'+ (this.name),
        /*url: 'https://us.api.battle.net/wow/character/Ragnaros/DarkViciuz?fields=Champions+of+Tyrium&locale=en_US&apikey=cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',*/
        data: {
            type: 'json',
            locale: 'en_US',
            apikey: 'cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',
        },
        success: function(response) {
            callback(response);
        },
        error: this.onRequestError
    })
};

module.exports = new RealmStatusApi();
