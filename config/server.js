module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "ffeb4bef575e2074edaef68fea1d1b562c8986932c39819dfbb07b28dc7ccfef",
  SECRET:
    process.env.SECRET ||
    "85459c602aaa97a614dba285cb268574da1d3ff4ae6191f04ccaf8952dab7e59",
  // running client side on 3000
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
