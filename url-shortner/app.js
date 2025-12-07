require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db.config");
const urlRouter = require("./Router/url.routes");
const Urls = require("./Models/url.models");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const PORT = process.env.PORT || 8001;

app.use("/api/url", urlRouter);

app.get("/", async (req, res) => {
  const allUrls = await Urls.find();
  return res.render("home", { urls: allUrls });
});

// app.get("/", async (req, res) => {
//   const allUrls = await Urls.find();
//   const html = `<h1 style="text-align: center; margin-top: 20%;">URL Shortener API</h1>
//   <p style="text-align: center;">Use the /api/url endpoint to create short URLs.</p>

//   <div style="width:100%; display:flex; align-items:center; justify-content:center; margin-top:30px;">
//     <table>
//       <tr>
//         <th style="padding: 10px; border: 1px solid black;">shortCode</th>
//         <th style="padding: 10px; border: 1px solid black;">redirectUrl</th>
//         <th style="padding: 10px; border: 1px solid black;">numberofClicks</th>
//       </tr>
//       ${
//         allUrls.length > 0
//           ? allUrls.map(
//               (url, index) =>
//                 `<tr key=${index}>
//               <td style="padding: 10px; border: 1px solid black;">${url.shortCode}</td>
//               <td style="padding: 10px; border: 1px solid black;">${url.redirectUrl}</td>
//               <td style="padding: 10px; border: 1px solid black;">${url.numberofClicks}</td>
//             </tr>`
//             )
//           : `<tr> <td colspan="3" style="text-align: center; padding: 10px; border: 1px solid black;">No URLs found</td> </tr>`
//       }
//     </table>
//   </div>
//   `;
//   res.send(html);
//   //res.send("Welcome to URL Shortener API");
// });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
