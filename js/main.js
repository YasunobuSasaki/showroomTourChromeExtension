window.onload = function () {
  function liveLoad() {

    $.get({
      url: "https://www.showroom-live.com/api/live/onlives",
      data: "",
    }).done(function (data, textStatus, jqXHR) {
      //console.log(data["onlives"][0]["lives"].slice(0, 20));
      var array = data["onlives"][0]["lives"].slice(0, 20)
      for (var i = array.length - 1; i >= 0; i--){
        var rand = Math.floor( Math.random() * ( i + 1 ) );
        [array[i], array[rand]] = [array[rand], array[i]]
      }
      console.log(array[0]["room_url_key"]);
      location.href = "https://www.showroom-live.com/" + array[0]["room_url_key"];
      

    }).fail(function (jqXHR, textStatus, errorThrown) {
      wait(5).done(function () {
        liveLoad();
      });
    });

  }

  function wait(sec) {
    var objDef = new $.Deferred;
    setTimeout(function () {
      objDef.resolve(sec);

    }, sec * 1000);
    return objDef.promise();
  };

  wait(30).done(function () {
    liveLoad();
  });

}