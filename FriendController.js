var friendlyApp = angular.module('friendlyApp', [
  ]);

friendlyApp.controller('friendlyController', function($scope) {
  $scope.test = "Hello World!";
  $scope.friends = [
  {
    "name": "Preston McNeil",
    "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg",
    "current_location": {
      "city": "Houston",
      "state": "Texas",
      "country": "United States",
      "zip": "",
      "latitude": "29.7629",
      "longitude": "-95.3832",
      "id": "115963528414384",
      "name": "Houston, Texas"
    },
    "status": null,
    "friend_count": 628,
    "$$hashKey": "005"
  },
  {
    "name": "Ryan Rasmussen",
    "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg",
    "current_location": {
      "city": "New York",
      "state": "New York",
      "country": "United States",
      "zip": "",
      "latitude": "40.7167",
      "longitude": "-74",
      "id": "108424279189115",
      "name": "New York, New York"
    },
    "status": null,
    "friend_count": 994,
    "$$hashKey": "008"
  },
    {
    "name": "Terri Ruff",
    "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg",
    "current_location": {
      "city": "Sandy",
      "state": "Utah",
      "country": "United States",
      "zip": "",
      "latitude": "40.5724",
      "longitude": "-111.86",
      "id": "105496622817769",
      "name": "Sandy, Utah"
    },
    "status": {
      "message": "Cannot wait for Hawaii! Excited to b away from work! I'm getting tired of all the drama!! Big news coming soon!!!",
      "time": "1381115766",
      "status_id": "10101839870247153",
      "comment_count": "0"
    },
    "friend_count": 268,
    "$$hashKey": "009"
  }
  ];
});





