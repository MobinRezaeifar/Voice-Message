var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/VoiceMessage.js",
  output: {
    path: path.resolve(__dirname, "build"), // تغییر این خط برای قطعیت مسیر ساخت فایل خروجی
    filename: "VoiceMessage.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] // استفاده از فرمت جدید برای اعلام loader ها
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // استفاده از فرمت جدید برای اعلام loader ها
      }
    ]
  },
  externals: {
    react: "react" // تعیین کردن react به عنوان یک external
  }
};
