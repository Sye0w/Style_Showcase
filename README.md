# Style Showcase

## Project Description

**Style Showcase**  is a frontend project that demonstrates various web and UI/UX design techniques. It includes dynamic theme switching, responsive design, and modular SCSS architecture, showcasing a variety of layouts, fonts, and custom design features. The project emphasizes SCSS functionalities such as mixins, variables, and functions for maintaining consistent styles throughout the application. It integrates Angular to create a seamless and interactive user experience, particularly focusing on theme toggling, reusable UI components, and flexible design structures.

## Setup and Run Instructions

### Prerequisites

Make sure you have the following installed:
- Angular CLI (>= 17.3.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sye0w/Style_Showcase.git
   cd Style_Showcase

2. Install dependencies:
   ```bash
   npm install

3. Run development server:
   ```bash
   ng serve
   
### SCSS Architecture
The SCSS architecture follows a modular approach, separating the styles into individual files for better organization, scalability, and maintainability.

### SCSS Files

1. **_functions.scss**  
   Contains utility functions for reusable computations.  
   **Example:** `rem($px)` function to convert pixel values into rem units based on a base font size for responsive typography.

2. **_variables.scss**  
   Holds global variables for consistent theming, including fonts, colors, and spacing.  
   - Fonts are imported from Google Fonts.  
   - The base color palette is defined here for both light and dark themes.

3. **_mixins.scss**  
   Defines reusable style blocks with mixins to reduce code repetition.  
   **Example:** `li-txt-grp-2-style()` mixin for list items that includes typography and background styling.

4. **styles.scss**  
   Acts as the global stylesheet that imports all partial SCSS files (`_variables`, `_mixins`, `_functions`).  
   Sets global styles like box-sizing, padding, and margin resets, and base layout configurations.

