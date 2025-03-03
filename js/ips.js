
  var t = new XMLHttpRequest;
  t.onreadystatechange = function() {
    if (4 == this.readyState && 200 == this.status) {
      var a = JSON.parse(this.responseText);
      ipadd = a.ip;
      city = a.city;
      country = a.country;
      isp = a.connection.isp;
      var b = new Date;
      currtime = a.timezone.current_time;
      document.getElementById("ip_add").textContent = "Address IP: " + ipadd + " " + b.toLocaleString("EN-US", currtime);
    }
  };
  t.open("GET", "https://ipwho.is/?lang=en", !0);
  t.send();
