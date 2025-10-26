const http = require("http");

http
  .get("http://localhost:3000/health", (res) => {
    if (res.statusCode === 200) {
      console.log("✅ Test Passed");
      process.exit(0);
    } else {
      console.error("❌ Test Failed");
      process.exit(1);
    }
  })
  .on("error", () => {
    console.error("❌ Test Failed");
    process.exit(1);
  });
