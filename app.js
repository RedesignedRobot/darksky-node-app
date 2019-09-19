const ac = require("./api-core");

ac.forecast("Riyadh", (e, d) => {
  if (e.code === 0) {
    console.table(d);
  } else {
    console.table(e);
  }
});

