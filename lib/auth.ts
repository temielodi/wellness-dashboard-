// This file now just provides mock data for components that might need it
// No actual authentication is performed

// Mock user data
export const mockUser = {
  id: "1",
  name: "Demo User",
  email: "demo@example.com",
  image: null,
}

// Simple function to get mock session data
export async function getSession() {
  return {
    user: mockUser,
  }
}

export async function login(email: string, password: string): Promise<{ success: boolean }> {
  // In a real application, you would authenticate against a database or auth provider
  // For this demo, we'll just return a successful login
  if (email === "demo@example.com" && password === "password") {
    return { success: true }
  } else {
    return { success: false }
  }
}

export async function register(name: string, email: string, password: string): Promise<{ success: boolean }> {
  // In a real application, you would create a new user in a database
  // For this demo, we'll just return a successful registration
  return { success: true }
}
