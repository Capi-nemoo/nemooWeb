---
title: "Your Own Website or Blog Using Hugo"
date: 2024-09-12T14:14:13-05:00
draft: false
hidden: true
---

*Disclaimer*: Guide for Unix-based system users only. -Windows users, no thanks.

# Hey buddy,  

This is a quick guide on how to create your own website/blog. It's aimed at intermediate users, so I won't be explaining anything in detail.

### 1. Hugo  

Hugo is fast, lightweight, and perfect for building websites with minimal resources. I chose it for its speed and flexibility for personal projects and portfolios. The biggest advantage I see, and what I love the most, is that you can create your own markdown templates!!! 🚀

### 2. Installation in ~2 Minutes  

Installing Hugo is easy. Just run one of these commands depending on your system:

```bash
brew install hugo     # For macOS
sudo apt install hugo  # For Linux
sudo pacman -S hugo    # For Linux++
```

### 3. Create Your Website in 1 Command  

Start your project with this command:

```bash
hugo new site my-website  # This creates a folder (no need to put it inside another folder)
```

### 4. Choose a Theme and Customize It  

Pick a theme from Hugo Themes:

```bash
git clone URL-THEME themes/ ## Copy it into the themes folder
```

Go to Hugo Themes, select a theme, or if you're up for it, you can create your own! (I'll leave my personal recommendations at the end of the post). Customize the `config.toml` file to adjust colors, fonts, and more.

If you run into trouble or you're not a web developer, the only thing you need to know is:

- Posts go in `content/data`,
- Main configuration goes in `config.toml` (root directory).

### 6. Deploy Easily with Netlify or GitHub Pages  

This part was the trickiest for me 😅. Nobody really explains how to do it properly; they just say, "use GitHub Pages," and that's it. So, here's my detailed tutorial:

1. Buy a domain on Cloudflare (optional, but recommended).
2. Go to GitHub and verify the domain in the Pages section under Settings.
3. Upload the whole folder you created with Hugo to your repo on GitHub.
4. Then, go to the repo's Settings and click on Pages.
5. Select the root folder and branch.
6. Add your custom domain.
7. And we're done! Now, go to Actions in your repo, select "New workflow," search for Hugo, and that's it—you've got your new website up and running.
