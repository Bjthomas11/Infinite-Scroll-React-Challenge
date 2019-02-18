module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "735d7926271ecc613823b084e081e2456d50cfad5f983a7be3f88983831920c2",
  SECRET:
    process.env.SECRET ||
    "f6aad31a34d17500f49b32919b0a0810a3ac7af8e19f5e21666dd6ad42893b18",
  // running client side on 3000
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
