window.onload = function () {
  function liveLoad() {

    $.get({
      url: "https://www.showroom-live.com/api/live/onlives",
      data: "",
    }).done(function (data, textStatus, jqXHR) {
  
      var array = data["onlives"][0]["lives"].slice(0, 50)
      var random = array[Math.floor(Math.random() * array.length)];
      location.href = "https://www.showroom-live.com/" + random["room_url_key"];
      

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