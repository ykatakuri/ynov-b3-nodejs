const { DateTime } = require("luxon");

const now = DateTime.now();
const tenYearsInTheFuture = now.plus({ year: 10 });

console.log(tenYearsInTheFuture.toFormat("dd/MM/yyyy HH:mm:ss"));