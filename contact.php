<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Flip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Observer.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Draggable.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/MotionPathPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/EaselPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/PixiPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/TextPlugin.min.js"></script>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/grid.css" />
    <link rel="stylesheet" href="css/reset.css" />
    <title>ZRN - Contact</title>
  </head>

  <body>
    <h1 class="hidden">Welcome to my contact page</h1>
    <header class="grid-con" id="main-header">
      <h2 class="hidden">Top Navigation</h2>

      <a
        href="index.html"
        class="col-span-1 col-start-1 col-end-2 l-col-start-1 l-col-end-2"
      >
        <img src="image/ZRN-Logo.svg" alt="Logo" class="logo-custom" />
      </a>

      <nav
        class="col-span-1 col-start-12 col-end-13 l-col-start-1 l-col-end-2"
        role="navigation"
      >
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="index.html"><li>Home</li></a>
            <a href="ABOUT.html"><li>About</li></a>
            <a href="PORTFOLIO.html"><li>Portfolio</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="video-player.html"><li>Video-sec</li></a>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <div id="contact-us-page-con">
        <article class="grid-con">
          <h2 class="col-span-full" id="contact-us-page-title">Contact Me</h2>
          <p class="col-span-full" id="contact-us-page-subhead">
            Ask Anything!
          </p>
          <p class="col-span-full" id="contact-us-page-body">
            Welcome to the contact page! I highly value your feedback and
            inquiries, and am always ready to assist you in any way possible.
            Whether you have a question about my products or services or simply
            want to provide with feedback, this is the place to do it. my
            customer support team is available around the clock to help you with
            any issues you may encounter. Please don't hesitate to get in touch
            using any of the methods listed below. Looking forward to hearing
            from you!
          </p>
        </article>

        <div id="form-con">
          <form class="grid-con" method="post" target="_parent">
            <label
              class="col-span-2 m-col-start-2 m-col-end-4 l-col-start-4 l-col-end-6"
              for="name"
              >Name:</label
            >
            <input
              class="col-span-full m-col-start-4 m-col-end-8 l-col-start-6 l-col-end-10"
              type="text"
              id="name"
              name="user_name"
            />

            <label
              class="col-span-2 m-col-start-2 m-col-end-4 l-col-start-4 l-col-end-6"
              for="email"
              >Email:</label
            >
            <input
              class="col-span-full m-col-start-4 m-col-end-8 l-col-start-6 l-col-end-10"
              type="email"
              id="email"
              name="user_email"
            />

            <label
              class="col-span-2 m-col-start-2 m-col-end-4 l-col-start-4 l-col-end-6"
              for="phone"
              >Phone:</label
            >
            <input
              class="col-span-full m-col-start-4 m-col-end-8 l-col-start-6 l-col-end-10"
              type="text"
              id="phone"
              name="user_email"
            />

            <label
              class="col-span-2 m-col-start-2 m-col-end-4 l-col-start-4 l-col-end-6"
              for="message"
              >Message:</label
            >
            <textarea
              class="col-span-full m-col-start-4 m-col-end-8 l-col-start-6 l-col-end-10"
              id="message"
              name="user_message"
            ></textarea>

            <div
              class="col-start-2 col-end-4 m-col-start-4 m-col-end-6 l-col-start-6 l-col-end-8"
              id="form-button"
            >
              <a href="">Submit</a>
            </div>
          </form>
        </div>
      </div>
    </main>

    <footer class="grid-con">
      <h2 class="hidden">Footer</h2>
      <section
        class="col-start-4 col-end-5 m-col-start-7 m-col-end-9 l-col-start-11 l-col-end-13"
        id="social-bottom"
      >
        <h3 class="hidden">Social Links</h3>
        <img src="image/facebook.svg" alt="facebook" />
        <img src="image/instagram.svg" alt="instageam" />
        <img src="image/twitter.svg" alt="twitter" />
      </section>
      <p class="col-span-full">Copyright &#64; 2023 <span>ZRN</span></p>
    </footer>

    <script src="js/main.js"></script>
  </body>
</html>
