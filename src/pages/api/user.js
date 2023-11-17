// pages/api/user.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Get user data from the request body
        const data = req.body;
  
        // Validate required fields
        if (!data.username || !data.email) {
          return res.status(400).json({ error: 'Username and email are required' });
        }
  
        // Create a user object
        const user = {
          username: data.username,
          email: data.email,
          // Add other user-related fields as needed
        };
  
        // In a real-world scenario, you might want to store the user in a database
  
        // Return success response
        return res.status(200).json({ message: 'User created successfully' });
      } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  
    // If the request method is not POST
    return res.status(500).json({ error: 'Only POST method allowed' });
  }
  