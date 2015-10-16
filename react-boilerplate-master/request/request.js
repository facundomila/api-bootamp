var $ = require('jquery');
var _ = require('lodash');

var API_KEY = 'cvkb5d4tufg3jxg7dh3qytqmnzywpt3p';
var LOCALE = 'en_US';

var RealmApi = function(apikey, locale, realm, guildName) {
    this.locale = locale || LOCALE;
    this.apikey = apikey || API_KEY;
    //this.fields_guild = fields_guild;
    this.realm = realm;
    this.guildName = guildName;
};

RealmApi.prototype = {
    constructor: RealmApi
};

RealmApi.prototype.onRequestError = function (xhr, status, error) {
    console.log(error);
    alert(error);
};

RealmApi.prototype.get = function (attr) {
    return this[attr];
};

RealmApi.prototype.set = function (attr, value) {
    this[attr] = value;
};

RealmApi.prototype.getRealmsStatus = function (callback) {
    $.ajax ({
        url: 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',
        type: 'get',
        dataType: 'json',
        success: function(response) {
            callback(response.realms);
            console.log(response.realms);

        },
        error: this.onRequestError,

        complete: function(jqXHR, response) {
            console.log(response);
        }
    })
};

RealmApi.prototype.getCharacterProfile = function (callback, realm, name) {
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


RealmApi.prototype.getGuildProfile = function (callback, realm, guildName) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/guild' + '/' + realm + '/' + guildName,
        //url: 'https://us.api.battle.net/wow/character/Ragnaros/DarkViciuz?fields=Champions+of+Tyrium&locale=en_US&apikey=cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',
        //url: 'https://us.api.battle.net/wow/guild/Ragnaros/Champions%20of%20Tyrium?locale=en_US&apikey=cvkb5d4tufg3jxg7dh3qytqmnzywpt3p',
        data: {
            locale: 'en_US',
            apikey: 'cvkb5d4tufg3jxg7dh3qytqmnzywpt3p'
            //Champions of Tyrium
        },
        success: function(response) {
            callback(response);
            /*console.log(response);*/
        },
        error: this.onRequestError
    })
};

module.exports = new RealmApi();
