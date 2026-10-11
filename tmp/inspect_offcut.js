const https = require("https");
https.get("https://offcut-flucxzz.vercel.app/", res => {
  let data = "";
  res.on("data", chunk => { data += chunk; });
  res.on("end", () => {
    console.log("STATUS:", res.statusCode);
    const fonts = data.match(/https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com)[^"'\s>]+/g) || [];
    console.log("FONTS:", Array.from(new Set(fonts)));
    const css = data.match(/href="[^"]+\.css"/g) || [];
    console.log("CSS:", css);
    console.log("TITLE & HEAD:", data.substring(0, 1500));
    console.log("BODY EXCERPT:", data.substring(data.indexOf("<body"), data.indexOf("<body") + 2500));
  });
}).on("error", err => console.log("ERR:", err.message));
