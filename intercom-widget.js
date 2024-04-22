window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "kzckt5c2",
  name: "John Doe",
  user_id: "123456",
  email: "john@example.com",
  created_at: 1631755238,
};

var w = window;
var ic = w.Intercom;
if (typeof ic === "function") {
  ic("reattach_activator");
  ic("update", w.intercomSettings);
} else {
  var d = document;
  var i = function () {
    i.c(arguments);
  };
  i.q = [];
  i.c = function (args) {
    i.q.push(args);
  };
  w.Intercom = i;
  var l = function () {
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.intercom.io/widget/kzckt5c2";
    var x = d.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  };
  if (document.readyState === "complete") {
    l();
  } else if (w.attachEvent) {
    w.attachEvent("onload", l);
  } else {
    w.addEventListener("load", l, false);
  }
}
