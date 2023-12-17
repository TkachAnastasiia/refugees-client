import { decodeToken } from 'react-jwt'

export default () => {
  const storedToken = localStorage.getItem('token');
  try {
    // Decode the token
    return decodeToken(storedToken);
  } catch (error) {
    console.error('Error decoding token:', error.message);
  }
}
