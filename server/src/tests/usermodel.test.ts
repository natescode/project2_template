import { UserModel } from "../models/usermodel";

// Creating a UserModel instance with valid username, password, and isAdmin values
it('should create a UserModel instance with valid properties when provided valid inputs', () => {
    const user = new UserModel('testuser', 'password123', true);
    expect(user).toBeInstanceOf(UserModel);
    expect(user.Username).toBe('testuser');
    expect(user.Password).toBe('password123');
    expect(user.IsAdmin).toBe(true);
});