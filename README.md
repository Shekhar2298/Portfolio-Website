# Chandrashekhar (Shekhar) Wadibhasme · Portfolio

**Live site:** https://shekhar2298.github.io/Portfolio-Website/

My personal portfolio: one link with my experience, projects, skills and certifications.
I'm a DevOps & Full-Stack Engineer (AWS, Kubernetes, Terraform, CI/CD, Java, React, AI/LLM apps) based in Pune, India.

## What's inside

- **About**: who I am, what I'm looking for, and the three kinds of work I do
- **Experience**: my roles since 2021, plus education
- **Projects**: 10 projects, each explained in a few plain sentences, with filters (Cloud & DevOps, AI & LLM, Full-Stack, Research)
- **Skills**: grouped by area, with the tools I use most highlighted
- **Certifications**: DeepLearning.AI and IBM certificates with verify links, plus my Codecademy courses
- **Contact**: email, LinkedIn and GitHub

It also has a light/dark theme toggle, a mobile layout, and a link preview image for LinkedIn and WhatsApp.

## Built with

Plain HTML, CSS and JavaScript. No framework and no build step. GitHub Pages serves the files as they are.

```
index.html              the whole page
assets/css/style.css    styles (dark + light theme)
assets/js/main.js       theme toggle, menu, project filters, scroll effects
assets/img/             photo, favicon, social preview image
Resources/certificate/  Codecademy certificate PDFs
```

## Run it locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Updating

- **Add a project:** copy an `<article class="project">` block in `index.html`, set `data-cat` to `devops`, `ai`, `fullstack` or `research`, and update the counts on the filter buttons.
- **Add a job:** copy an `<article class="job">` block in the Experience section.
- **Change colors:** edit the CSS variables at the top of `assets/css/style.css`.

## Contact

- Email: shekharw2298@gmail.com
- LinkedIn: https://www.linkedin.com/in/shekhar2298/
- GitHub: https://github.com/Shekhar2298
