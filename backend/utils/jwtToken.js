// Create Token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  res.cookie('token', token, {
    httpOnly: true, // cookie cannot be accessed from client-side scripts
    secure: process.env.NODE_ENV === 'production', // cookie should only be sent over HTTPS in production
    sameSite: 'strict', // cookie should only be sent for same-site requests
    maxAge: 5 * 60 * 60 * 1000 // 5hr
  });

  return res.status(200).json({
    success: true,
    user,
  });
};

module.exports = sendToken;
