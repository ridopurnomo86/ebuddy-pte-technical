/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    firebaseApiKey: process.env.FIREBASE_APIKEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTHDOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECTID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGEBUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    firebaseAppId: process.env.FIREBASE_APPID,
    userCookie: process.env.USER_COOKIE,
    backendUrl: process.env.BACKEND_URL,
  },
  pageExtensions: ["ts", "tsx"],
};

export default nextConfig;
