import syntaxfunction from "./syntax.js";

const requestHandler = (req, res) => {
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
};

export default requestHandler;
