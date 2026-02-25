# Fourfront Management - Frontend Assessment

A responsive single-page web application built for Fourfront Management, showcasing investment membership options and user profiles with interactive features.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Video](#demo-video)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [JavaScript Functionality](#javascript-functionality)
- [Customization](#customization)
- [Browser Support](#browser-support)

## Overview

This project is a modern, mobile-responsive web application. It features user profiles, membership options, a contact form, and interactive elements all built with Bootstrap 5 and vanilla JavaScript.

## Features

### 1. **Responsive Navigation Menu**

- Fixed-top navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Automatic menu closing on link click or outside click
- Three main sections: Profile, Membership, Contact

### 2. **User Profile Section**

- Main user profile card with image and welcome message
- Four featured user cards displaying:
  - User avatars
  - Names
  - Numerical values/scores
  - Color-coded backgrounds (warning, info, success, danger)

### 3. **Membership Options**

- Two membership types:
  - **Foundation Membership**: Investment in shares and global funds
  - **Economy Membership**: Guaranteed rate investment option
- Expandable/collapsible membership details
- Comparison modal for detailed feature breakdown

### 4. **Contact Form**

- Form validation
- Required fields: Name, Email, Message
- Email format validation
- Visual feedback (green for valid, red for invalid)
- Success notification after submission
- Auto-reset functionality

### 5. **Interactive Modal**

- Membership comparison dialog
- Click-outside-to-close functionality
- Keyboard support (ESC key to close)
- Mobile-optimized

### 6. **Footer**

- WhatsApp contact icon
- Copyright information
- Rounded bottom corners
- Responsive design

## Demo Video

Watch a full walkthrough of the application showcasing all features including responsive navigation, user profiles, membership options, interactive modal, and contact form validation.

https://github.com/Faith-K-commits/money_tracker/assets/video.mp4

<video src="assets/video.mp4" controls width="100%" style="max-width: 800px;">
  Your browser does not support the video tag. <a href="assets/video.mp4">Download the video</a>
</video>

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Minimal custom styling (Bootstrap-first approach)
- **Bootstrap 5.3.3**: UI framework for responsive design
- **Bootstrap Icons 1.11.3**: Icon library
- **Vanilla JavaScript**: No frameworks or libraries
- **Flexbox**: Layout system
- **Grid System**: Responsive columns

## Project Structure

```
frontend/
│
├── index.html              # Main HTML file
├── README.md              # Project documentation
│
├── assets/                # Static assets
│   └── images/           # User avatars and images
│       ├── doe.jpg       # Female avatar
│       └── male-avatr.jpg # Male avatar
│
├── css/                   # Stylesheets
│   └── style.css         # Minimal custom CSS (smooth scrolling)
│
└── js/                    # JavaScript files
    └── script.js         # All interactive functionality
```

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended)

### Steps

1. **Clone or download the repository**

   ```bash
   git clone https://github.com/Faith-K-commits/money_tracker
   cd frontend
   ```

2. **Add user images**
   - Place your avatar images in `assets/images/`
   - Recommended names: `doe.jpg`, `male-avatr.jpg`

3. **Open the application**

   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

4. **Access the application**
   - Navigate to `http://127.0.0.1:5500/index.html` (if using server)
   - Or simply open `index.html` directly

## Usage

### Navigation

The application features three main sections accessible via the navigation menu:

1. **Profile**: View user information and featured members
2. **Membership**: Explore investment membership options
3. **Contact**: Submit inquiries via the contact form

### Interacting with Memberships

- **Expand Details**: Click on membership headings to reveal description
- **Compare Options**: Click "here" link to open comparison modal
- **Close Modal**: Click X button, click outside modal, or press ESC key

### Submitting Inquiries

1. Fill in all required fields:
   - Your Name
   - Valid Email Address
   - Your Message

2. Click "Send Inquiry" button

3. View success message

4. Form automatically resets after submission

### Mobile Navigation

On mobile devices:

1. Click hamburger menu icon (☰)
2. Select desired section
3. Menu automatically closes after selection

## JavaScript Functionality

### Core Functions

#### `toggleMembership(heading)`

Toggles the visibility of membership details sections.

**Parameters:**

- `heading` (Element): The membership heading element clicked

**Example:**

```javascript
onclick = "toggleMembership(this)";
```

#### `smoothScroll(event, sectionId)`

Smoothly scrolls to specified section and closes mobile menu.

**Parameters:**

- `event` (Event): Click event object
- `sectionId` (String): Target section ID

**Example:**

```javascript
onclick = "smoothScroll(event, 'profile')";
```

#### `toggleMenu()`

Toggles the mobile navigation menu visibility.

**Example:**

```javascript
onclick = "toggleMenu()";
```

#### `openMembershipModal(event)`

Opens the membership comparison modal with backdrop.

**Parameters:**

- `event` (Event): Click event object

#### `closeMembershipModal()`

Closes the modal and removes backdrop.

#### `handleFormSubmit(event)`

Validates and processes the contact form submission.

**Validation Rules:**

- Name: Cannot be empty
- Email: Must match email pattern (xxx@xxx.xxx)
- Message: Cannot be empty

**Parameters:**

- `event` (Event): Form submit event

### Event Listeners

- **Modal close on outside click**: Listens for clicks outside modal area
- **Modal close on ESC key**: Closes modal when Escape is pressed
- **Menu close on outside click**: Closes mobile menu when clicking outside

## Customization

### Colors

The application uses Bootstrap's color system. Main colors used:

- **Warning (Yellow)**: `bg-warning` - Navigation, membership headings, footer
- **Secondary (Gray)**: `bg-secondary` - Profile cards, membership details
- **Info, Success, Danger**: User cards
- **Light**: `bg-light` - Page background

To change colors, modify Bootstrap classes in `index.html`.

### Typography

Font sizes use Bootstrap utilities:

- `small` - Small text
- `fs-5` - Font size 5
- `fw-bold` - Font weight bold
- `fw-semibold` - Font weight semi-bold

### Spacing

Spacing uses Bootstrap's spacing scale:

- `m-*` - Margin
- `p-*` - Padding
- `mt-*`, `mb-*`, `ms-*`, `me-*` - Directional spacing
- `g-*` - Gap (for grid/flex)

## Browser Support

This application supports all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 992px

Key responsive features:

- Collapsible navigation menu on mobile
- Flexible grid layout (2 columns on mobile, expandable on larger screens)
- Touch-friendly interactive elements
- Optimized spacing for all screen sizes
