interface User {
    username: string;
    // Add other user properties as needed
  }
  
  const USER_KEY = 'tranchify_user';
  
  export const auth = {
    //Check if user is authenticated
    isAuthenticated(): boolean {
      return localStorage.getItem(USER_KEY) !== null;
    },
  
    //Login user - stores user data in localStorage
    login(username: string, password: string): boolean {
      // Would normally be API validation but for this I have it so that it accept any non-empty credentials
      if (username && password) {
        const user: User = { username };
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return true;
      }
      return false;
    },
  
    //Logout user - clears localStorage
    logout(): void {
      localStorage.removeItem(USER_KEY);
    },
  
    /**
     * Get current user data
     */
    getUser(): User | null {
      const userStr = localStorage.getItem(USER_KEY);
      if (userStr) {
        try {
          return JSON.parse(userStr);
        } catch {
          return null;
        }
      }
      return null;
    }
  };