var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'teste'
  };

  setTimeout(() => {
    callback(user) ;
  }, 3000);
};

getUser(123, (userObject) => {
    console.log(userObject);
});
//maps.googleapis.com/maps/api/geocode/json
