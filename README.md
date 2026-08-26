# Fake-News-Detection

## Overview

**Fake News Detection** is a web-based application designed to help users analyze news content and identify whether the information may be **real or fake**.

The application provides a simple interface where users can enter news content, view the analysis result, access previous analysis history, and learn more about the platform.

The main objective of this project is to help users identify potentially misleading information and promote awareness about misinformation.

## Features

### Fake News Detection

* Enter or paste news content for analysis.
* Analyze submitted news content.
* Identify whether news is potentially **Real** or **Fake**.
* Display analysis results clearly.
* Simple and easy-to-use verification process.

### Result Page

* Displays the result of the analyzed news.
* Provides a clear output for the submitted content.
* Helps users quickly understand the verification result.

### History

* View previously analyzed news.
* Maintain a history of news verification results.
* Easily access previous analyses.

### About

* Provides information about the Fake News Detection platform.
* Explains the purpose and objective of the application.

## Tech Stack

* **Python** — Backend programming
* **Flask** — Web application framework
* **HTML** — Web page structure
* **CSS** — Application styling
* **JavaScript** — Frontend functionality
* **API Integration** — News analysis and verification

## Project Structure

```text
Fake-News-Detection/
│
├── app.py                    # Main Flask application
│
├── templates/                # HTML templates
│   ├── index.html            # Home / news analysis page
│   ├── result.html           # Displays analysis results
│   ├── history.html          # Displays analysis history
│   └── about.html            # About the application
│
├── static/                   # Static application files
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript files
│   └── images/               # Images and assets
│
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/dishamehtani/Fake-News-Detection.git
cd Fake-News-Detection
```

2. **Create a virtual environment:**

```bash
python -m venv venv
```

3. **Activate the virtual environment:**

**Windows:**

```bash
venv\Scripts\activate
```

**macOS/Linux:**

```bash
source venv/bin/activate
```

4. **Install the required dependencies:**

```bash
pip install -r requirements.txt
```

5. **Run the application:**

```bash
python app.py
```

6. Open the application in your browser:

```text
http://127.0.0.1:5000/
```

## How It Works

1. The user enters or pastes news content on the home page.
2. The application processes the submitted content.
3. The news is analyzed using the integrated verification system.
4. The user is redirected to the **Result Page**.
5. The analysis result is displayed.
6. Previous analyses can be accessed from the **History Page**.

## Application Pages

| Page           | Description                                |
| -------------- | ------------------------------------------ |
| `index.html`   | Main page for entering and analyzing news  |
| `result.html`  | Displays the news analysis result          |
| `history.html` | Displays previously analyzed news          |
| `about.html`   | Provides information about the application |

## Application Workflow

```text
Home Page
    ↓
Enter News Content
    ↓
Analyze News
    ↓
Verification Process
    ↓
Result Page
    ↓
Save/View History
```

## Use Cases

* Checking suspicious news content.
* Identifying potentially misleading information.
* Supporting basic fact-checking.
* Maintaining previous news analysis history.
* Creating awareness about misinformation.
* Educational demonstration of fake news detection technology.

## Future Enhancements

* Direct verification using news article URLs.
* Integration with additional trusted fact-checking sources.
* News source credibility analysis.
* Multilingual news verification.
* More detailed analysis results.
* Improved verification accuracy.
* User accounts and personalized history.
* Online deployment for public access.

## Contribution

Feel free to fork the repository, submit issues, or contribute through pull requests.

## Disclaimer

This project is developed for **educational purposes**. The generated results should not be considered definitive proof that a news article is true or false. Important information should always be verified through reliable and official sources.
