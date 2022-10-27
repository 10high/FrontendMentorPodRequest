# Frontend Mentor - Pod request access landing page

![Design preview for the Pod request access landing page coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this early access landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Plan of Attack

This time I will try using BEM for the first time, as a way to approach styling in a more methodical fashion.

1. -[x] Apply Semantic HTML

2. -[x] Identify structural differences between layouts: 
        Mobile: 
              Email submission form:
                - Email submission elements are stacked
                - There is no gray background going around both - they are separate
              Brand logos:
                - Are positioned above email submission form as opposed to below
              Splash image:
                - Is displayed as background over whole screen
              Dotted image:
                - Not present on mobile

2. -[x] Apply HTML for structuring for the different layouts: mobile, tablet, desktop

2. -[] Write JS for form submission errors

3. -[x] Apply BEM class names


## DevBlog

I'm planning on implementing the splash image as a background image on the <main> tag, but I'm unsure if this is feasible, which is why I'll attempt this first. If I can't manage it, I'll have to structure the HTML differently.

***
I forgot that you can't set opacity on background images, so I tricked it by using a pseudo-element on the <body> as detailed here: https://css-tricks.com/snippets/css/transparent-background-images/

***
My final solution was to place it on the body using a pseudo-element on the <body> for the mobile version (which requires opacity and covering thebackground) and then place it as a background-image on the <main> for the tablet and desktop version for more granular position control.

***
The design calls for overriding the default :focus outline. It doesn't replace it with anything, but for the sake of practice and best practice, I replaced it with a white 2px border around the whole input and button component on the desktop version. The problem is that because I did this at the end, it pushed my design layout out, meaning that I had to fix it by adjusting the margin on the following element. I think a better approach would have been to consider this at the outset and include invisible borders that I could then simply control the opacity on.   

***

Autofill adds a white background, which I didn't want. This led me to discover that it's seemingly impossible to override the user agent styling here. The best fix I found is an inset box shadow hack, detailed here: https://stackoverflow.com/questions/2338102/override-browser-form-filling-and-input-highlighting-with-html-css

***

Finished the styling with no other real issues. Using BEM really helped me break down the structure into manageable parts and think about how each relates to the other. Plus, it helped me maintain discipline with naming that prevented me losing track of what does what.


