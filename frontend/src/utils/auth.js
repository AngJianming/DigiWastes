// Auth utility functions
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    // Set axios default header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  
  try {
    // Parse the JWT payload
    const payload = JSON.parse(atob(token.split('.')[1]));
    // Check if token is expired
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const getAuthUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  delete axios.defaults.headers.common['Authorization'];
};
