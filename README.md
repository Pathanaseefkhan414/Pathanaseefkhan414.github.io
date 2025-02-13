# Plagiarism Checker

This is a simple Plagiarism Checker application where users can log in, sign up, and check the similarity between two texts. The app compares the inputted texts using basic substring matching logic and calculates a similarity percentage. It also highlights any matching words between the two texts.

## Features

- ** User Authentication **: Users can sign up and log in to use the plagiarism checker. 
- ** Plagiarism Checking **: Users can input two texts, and the app calculates the similarity between them.
- ** Similarity Percentage**: The app returns the percentage of similarity based on matched substrings.
- ** Matched Text **: The app displays the matched text between the two input texts.
- ** Logout **: Users can log out after using the app.

## Technologies Used

- ** HTML **: Markup for the structure of the pages.
- ** CSS **: Basic styling for the layout of the app (linked in `style.css`).
- ** JavaScript **: Logic for user authentication, text comparison, and similarity calculation.
- ** localStorage **: Used for storing user credentials for a demo signup and login process.

## Files Structure

- ** index.html **: Main page where the plagiarism checker tool resides.
- ** login.html **: Login page for users to sign in.
- ** signup.html **: Signup page for new users to create an account.
- ** auth.js **: Contains JavaScript functions for user authentication (signup, login, logout).
- ** script.js **: Contains the logic to check for plagiarism by calculating the similarity between two texts.
- ** style.css **: Stylesheet for page layouts and design.

## Getting Started

### Prerequisites

Ensure you have a modern web browser (such as Chrome, Firefox, or Safari) to view and use the app.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/plagiarism-checker.git
   ```

2. Navigate to the project folder:

   ```bash
   cd plagiarism-checker
   ```

3. Open the `index.html` file in your preferred browser to access the plagiarism checker.

### Usage

1. **Sign Up**: If you're a new user, go to the **signup.html** page, create an account by providing a username and password, and click the "Sign Up" button.
2. **Login**: Once you have an account, go to the **login.html** page, log in using your username and password.
3. **Check Plagiarism**: After logging in, you can go to the main plagiarism checker page (**index.html**) and enter two texts to compare. The app will return a percentage of similarity and highlight matched words between the texts.
4. **Logout**: You can log out from the app using the logout button in the main page, which will redirect you to the login page.

### Example

1. User A signs up with the username "alice" and password "1234".
2. User A logs in with the credentials "alice" and "1234".
3. On the main page, User A enters two texts:
   - Text 1: "The quick brown fox"
   - Text 2: "The quick fox jumped over"
4. The app will show a similarity percentage, e.g., `Similarity: 50.00%`, and highlight the matching words.

### Notes

- This app stores user credentials in `localStorage` for demo purposes. For production applications, you should use a more secure method (e.g., a server-side database and hashing).
- The plagiarism check is based on basic substring matching and does not account for advanced techniques like semantic similarity or paraphrasing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Your Name
```

### Explanation:

- The `README.md` provides an overview of the Plagiarism Checker, its features, and how to use it.
- The structure explains the technology stack and file structure of the project.
- The "Getting Started" section explains how to set up and run the project locally.
- Example usage and notes on security and limitations are included for clarity.

