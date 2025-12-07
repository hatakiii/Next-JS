import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

const csvFile = path.join(process.cwd(), "books.csv");
const jsonFile = path.join(process.cwd(), "books.json");

const loadBooksFromCSV = () => {
  const data = fs.readFileSync(csvFile, "utf8").trim();
  const lines = data.split("\n").map((line) => line.replace(/\r/g, ""));
  const headers = lines[0].split(",");
  const books = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    let obj = {};
    headers.forEach((h, idx) => {
      obj[h] = h === "id" || h === "year" ? Number(values[idx]) : values[idx];
    });
    books.push(obj);
  }
  return books;
};

const saveBooksToJSON = () => {
  try {
    fs.writeFileSync(jsonFile, JSON.stringify(books, null, 2), "utf8");
  } catch (err) {
    console.error("books.json хадгалах үед алдаа гарлаа:", err);
  }
};

const loadBooks = () => {
  if (fs.existsSync(jsonFile)) {
    try {
      const data = fs.readFileSync(jsonFile, "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error(
        "books.json уншихад алдаа гарлаа, CSV-аас дахин үүсгэнэ:",
        err
      );
    }
  }

  const fromCsv = loadBooksFromCSV();

  try {
    fs.writeFileSync(jsonFile, JSON.stringify(fromCsv, null, 2), "utf8");
  } catch (err) {
    console.error("books.json анхны үүсгэхэд алдаа гарлаа:", err);
  }
  return fromCsv;
};

let books = loadBooks();

app.get("/books", (req, res) => {
  const q = req.query.q;
  if (q) {
    const qLower = q.toLowerCase();
    const result = books.filter((b) => {
      return (
        (b.title && b.title.toLowerCase().includes(qLower)) ||
        (b.author && b.author.toLowerCase().includes(qLower)) ||
        (b.description && b.description.toLowerCase().includes(qLower))
      );
    });
    return res.json(result);
  }
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Ном олдсонгүй" });
  }
  res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ error: "Гарчиг, зохиолч, болон жил шаардлагатай." });
  }

  const maxId = books.reduce((acc, b) => (b.id > acc ? b.id : acc), 0);

  const newBook = {
    id: maxId + 1,
    title,
    author,
    year: Number(year),
    description: req.body.description || "",
  };

  books.push(newBook);

  saveBooksToJSON();
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Ном олдсонгүй" });
  }

  const { title, author, year } = req.body;

  if (!title && !author && !year) {
    return res.status(400).json({ error: "Засах мэдээлэл оруулаагүй байна." });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = Number(year);
  if (req.body.description !== undefined)
    book.description = req.body.description;
  res.json(book);

  saveBooksToJSON();
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const initialLength = books.length;
  books = books.filter((b) => b.id !== id);

  if (books.length === initialLength) {
    return res.status(404).json({ error: "Ном олдсонгүй (Устгаж чадсангүй)." });
  }

  res.json({ message: `ID ${id}-тай номыг амжилттай устгалаа.` });

  saveBooksToJSON();
});

app.listen(3000, () => {
  console.log("Сервер ажиллаж байна: http://localhost:3000/books");
});
