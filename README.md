# Chandrashekhar (Shekhar) Wadibhasme · Portfolio

**Live site:** https://shekhar2298.github.io/Portfolio-Website/

My personal portfolio: one link with my experience, projects, skills and certifications.
I'm a Senior Software Engineer (Java / J2EE) based in Pune, India. I build backends with Spring Boot and microservices, add React on top, and ship them to AWS with Docker, Kubernetes, Terraform and CI/CD.

## What's inside

- **About**: who I am, what I'm looking for, and the three kinds of work I do
- **Experience**: my roles since 2021, plus education
- **Projects**: 14 projects, including 4 systems I built at work, each explained in a few plain sentences, with filters (Work projects, Cloud & DevOps, AI & LLM, Full-Stack, Research)
- **Skills**: grouped by area, with the tools I use most highlighted
- **Certifications**: my AWS Cloud & DevOps (Learnbay) and Full Stack (Generation India) programs, DeepLearning.AI and IBM certificates with verify links, plus my Codecademy courses
- **Contact**: email, LinkedIn, GitHub and a resume download

It also has a light/dark theme toggle, a mobile layout, and a link preview image for LinkedIn and WhatsApp.

## Built with

Plain HTML, CSS and JavaScript. No framework and no build step. GitHub Pages serves the files as they are.

```
index.html              the whole page
assets/css/style.css    styles (dark + light theme)
assets/js/main.js       theme toggle, menu, project filters, scroll effects
assets/img/             photo, favicon, social preview image
assets/resume/          my resume (PDF)
Resources/certificate/  Codecademy certificate PDFs
```

## Run it locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Updating

- **Add a project:** copy an `<article class="project">` block in `index.html`, set `data-cat` to `work`, `devops`, `ai`, `fullstack` or `research`, and update the counts on the filter buttons.
- **Add a job:** copy an `<article class="job">` block in the Experience section.
- **Update the resume:** replace `assets/resume/Chandrashekhar_Wadibhasme_Resume.pdf` with the new PDF and keep the same file name, so every link keeps working.
- **Change colors:** edit the CSS variables at the top of `assets/css/style.css`.

## Contact

- Email: shekharw2298@gmail.com
- LinkedIn: https://www.linkedin.com/in/shekhar2298/
- GitHub: https://github.com/Shekhar2298
