const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`),
);
