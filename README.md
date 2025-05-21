# Your GitHub Learning Lab Repository for GitHub Pages

Welcome to **your** repository for your GitHub Learning Lab course. This repository will be used during the different activities that I will be guiding you through. 

Oh! I haven't introduced myself...

I'm the GitHub Learning Lab bot and I'm here to help guide you in your journey to learn and master the various topics covered in this course. I will be using Issue and Pull Request comments to communicate with you. In fact, I already added an issue for you to check out.

![issue tab](https://lab.github.com/public/images/issue_tab.png)

I'll meet you over there, can't wait to get started!

## Testing the Food Tab Keyboard Shortcut

To test the newly added keyboard shortcut for the "food tab":

1.  **Build and serve the Jekyll site locally.**
    *   Open your terminal in the project root directory.
    *   Run the command `bundle exec jekyll serve` (or `jekyll serve` if your environment is configured accordingly).
    *   This will build the site and start a local web server (usually at `http://localhost:4000`).

2.  **Open the website in your browser.**
    *   Navigate to the local server URL provided by Jekyll (e.g., `http://localhost:4000`).

3.  **Test the shortcut.**
    *   Once the page is loaded, press the 'f' key on your keyboard.
    *   **Expected behavior:** The browser should navigate to the `/food` page or section. You should also see a confirmation message in the browser's developer console indicating whether the "food tab" element (`a[href='/food']`) was found and clicked.

4.  **Verify navigation.**
    *   Confirm that the browser's URL changes to `/food` or that the content corresponding to the food tab is displayed.

**Note:** This test assumes that there is a page or section accessible at the `/food` URL path. If the "food tab" corresponds to a different URL, the JavaScript in `assets/js/custom_shortcuts.js` and this test expectation will need to be adjusted.
