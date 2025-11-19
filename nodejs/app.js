import http from "http";
import syntaxfunction from "./syntax.js";

const name = "";
const gender = "";

const server = http.createServer((req, res) => {
  syntaxfunction();
  console.log(req.url);
  res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my website</title>
</head>
<body>
    <h1>Enter your details</h1>
    <form>
        <label for="name">Name :</label>
        <input type="text" id="name" name="name">
        <br />
        <label for="gender">Sex :</label>
        <input type="radio" id="male" name="gender" value="Male">Male</input>
        <input type="radio" id="female" name="gender" value="Female">Female</input>
        <br/>
        <button>Submit</button>
    </form>
</body>
</html>
        `);
  res.end();
  console.log(
    res.statusMessage,
    res.statusCode,
    res._expect_continue,
    res.getHeader("host"),
    res.getHeader("connection")
  );
});

server.listen(3000, () => {
  console.log(`server is listening at http://localhost:${3000}`);
});
