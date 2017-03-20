var axios = require('axios');

var id = 'e41ce27ed4ec6da04b7f';
var sec = '263aee645167b679bd24facb14322ebbb2c6127e';
var param = '?client_id=' + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function() {
      console.warn('Error in getPlayersInfo', err)
    })
  }
};

module.exports = helpers;
