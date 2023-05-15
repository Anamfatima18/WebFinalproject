import  jwt from  'jsonwebtoken';

 export const authorize = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('token');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, 'secret');

    // Pass the decoded payload (user information) to the next middleware or route handler
    req.user = decoded.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
