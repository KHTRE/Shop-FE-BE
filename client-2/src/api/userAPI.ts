import { jwtDecode } from "jwt-decode";
import { baseUrl } from "./endpoints";

// export const registration = async (email, password) => {
//   const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
//   localStorage.setItem('token', data.token)
//   return jwtDecode(data.token)
// }

// export const login = async (email, password) => {
//   const {data} = await $host.post('api/user/login', {email, password})
//   localStorage.setItem('token', data.token)
//   return jwtDecode(data.token)
// }

// export const check = async () => {
//   const {data} = await $authHost.get('api/user/auth' )
//   localStorage.setItem('token', data.token)
//   return jwtDecode(data.token)
// }

export const customFetch = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  console.log(' token: ', token);

  // Add authorization header if token exists
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Perform the fetch request
  const response = await fetch(url, options);
  console.log(' response: ', response);

  // Check if the response was successful
  if (!response.ok) {
    throw new Error('Request failed');
  }

  // Parse and return the response data
  return response.json();
};

export const check = async () => {
  try {
    const data = await customFetch(baseUrl + 'api/user/auth', {
      method: 'GET',
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token); // Assuming jwtDecode is available globally
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const data = await customFetch(baseUrl + 'api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token); // Assuming jwtDecode is available globally
  } catch (error) {
    console.error(error);
  }
};

export const registration = async (email: string, password: string) => {
  try {
    const data = await customFetch(baseUrl + 'api/user/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role: 'USER' }),
    });

    // Assuming the response contains a token
    localStorage.setItem('token', data.token);

    // Optionally, you can decode the JWT token here if needed
    return jwtDecode(data.token); // Assuming jwtDecode is available globally
  } catch (error) {
    console.error('Registration failed:', error);
  }
};











// export const registration = async (email: string, password: string) => {
//   console.log(123213)
//   const response = await fetch('http://localhost:5000/api/user/registration', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       role: 'ADMIN',
//     }),
//   });
//   console.log(' response: ', response);

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || 'Registration failed');
//   }

//   const data = await response.json();
//   console.log(' data: ', data);
//   localStorage.setItem('token', data.token);
//   return data;
// };













// export const registration = async (email: string, password: string) => {
//   const response = await fetch("http://localhost:5000/api/user/registration", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password, role: "ADMIN" }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to register user");
//   }

//   const data = await response.json();
//   localStorage.setItem("token", data.token);
//   return jwtDecode(data.token); // Assuming jwtDecode is available globally
// };

// export const login = async (email: string, password: string) => {
//   const response = await fetch("http://localhost:5000/api/user/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to log in");
//   }

//   const data = await response.json();
//   localStorage.setItem("token", data.token);
//   return jwtDecode(data.token); // Assuming jwtDecode is available globally
// };

// export const check = async () => {
//   const token = localStorage.getItem("token");
//   const response = await fetch("http://localhost:5000/api/user/auth", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to check authentication status");
//   }

//   const data = await response.json();
//   localStorage.setItem("token", data.token);
//   return jwtDecode(data.token); // Assuming jwtDecode is available globally
// };