function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi!");
    } else {
      reject("We can only talk to Google!");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}

async function doWork(item) {
  try {
    const response = await makeRequest(item);
    console.log("Response Received");
    const processedResponce = await processRequest(response);
    console.log(processedResponce);
  } catch (err) {
    console.log(err);
  }
}

doWork("Google");
