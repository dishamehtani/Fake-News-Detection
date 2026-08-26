# Fake-News-Detection

## Overview

**Fake News Detection** is a web-based application designed to help users identify whether a news article or news content is potentially **real or fake**.

The system analyzes the news content provided by the user and uses automated detection techniques to determine its authenticity. The main objective of the project is to provide users with a simple and accessible platform for checking suspicious news and reducing the spread of misinformation.

## Features

### News Detection

* Enter or paste news content for analysis.
* Analyze news text to determine its authenticity.
* Classify news as **Real** or **Fake**.
* Display the prediction result clearly to the user.
* Simple and easy-to-use interface.

### News Verification

* Helps users verify suspicious news content.
* Provides quick analysis of submitted news.
* Supports fact-checking and misinformation awareness.
* Designed to make news verification easier for everyday users.

### User Interface

* Clean and organized interface.
* Simple news input section.
* Easy-to-understand prediction results.
* User-friendly workflow for checking news.

## Tech Stack

* **Python** — Core programming language
* **Flask** — Web application framework
* **HTML** — Web page structure
* **CSS** — Application styling
* **JavaScript** — Frontend interaction
* **Machine Learning / NLP** — News text analysis and classification

## Project Structure

```text
Fake-News-Detection/
│
├── app.py                  # Main Flask application
├── templates/              # HTML templates
│   └── index.html
│
├── static/                 # Static files
│   ├── css/                # CSS styles
│   ├── js/                 # JavaScript files
│   └── images/             # Images and assets
│
├── model/                  # Detection model and related files
├── dataset/                # Dataset used for the project
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation
```

## Installation & Setup

1. **Clone the repository:**

```bash
git clone (https://github.com/dishamehtani/Fake-News-Detection)
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

1. The user enters or pastes news content into the application.
2. The submitted text is processed by the system.
3. The detection mechanism analyzes the content.
4. The system determines whether the news is likely to be **Real** or **Fake**.
5. The prediction result is displayed to the user.

## Application Workflow

```text
User Enters News
        ↓
News Text Processing
        ↓
Content Analysis
        ↓
Fake News Detection
        ↓
Prediction Result
        ↓
Real / Fake
```

## Use Cases

* Checking suspicious news articles.
* Identifying potentially misleading information.
* Supporting fact-checking activities.
* Creating awareness about misinformation.
* Educational demonstration of Fake News Detection using technology.

## Future Enhancements

* Analyze news directly from URLs.
* Integrate trusted fact-checking sources.
* Provide confidence scores for predictions.
* Support multiple languages.
* Improve prediction accuracy with advanced NLP models.
* Add news source credibility analysis.
* Maintain history of previously analyzed news.
* Deploy the application online for public access.

## Contribution

Feel free to fork the repository, submit issues, or contribute through pull requests.

## Disclaimer

This project is developed for **educational purposes**. Prediction results should not be treated as definitive proof that a news article is true or false. Important information should always be verified using reliable and official sources.
