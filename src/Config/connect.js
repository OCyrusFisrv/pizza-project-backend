const snowflake = require("snowflake-sdk");

const connection = snowflake.createConnection({
  account: "FISERVBANKSOLUTIONSAWSLOW1.us-east-1",

  username: "F9454EV",

  password: "Welcome123!",

  database: "FR_DEV_TECHNICAL_TRAINEE_DEVELOPER",
 
  warehouse: "DEV_TECHNICAL_TRAINEE_WH",

  schema: "BCORONEL",
});

connection.connect((err, conn) => {
  if (err) {
    console.error("Unable to connect: " + err.message);
  } else {
    console.log("Successfully connected to Snowflake.");
  }
});

