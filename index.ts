import { KiteConnect } from "kiteconnect";

const apiKey = "";
let access_token = ""
const kc = new KiteConnect({ api_key: apiKey });


console.log(kc.getLoginURL())
async function init() {
  try {
    kc.setAccessToken(access_token)
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();