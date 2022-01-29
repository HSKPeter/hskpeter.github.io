// PROJECTS SECTION
const config = {
    heading: "Projects",
    content: [
        {
            title: "FocusHacks",
            description: `
          This project was awarded <b>"the Most Creative Use of Twilio"</b> in <a href="https://newhacks-2021.devpost.com/" target="_blank" rel="noopener noreferrer">NewHacks 2021</a>.  
          Machine Learning technology was used to track users' activity and enhance their productivity.
          Twilio SendGrid was adopted to send alert emails to users, motivating users to get back on track when they lost focus or got distracted by cellphones.`,
            referenceLinks: {
                video: "https://www.youtube.com/watch?v=47IIFHay_I8&t=114s",
                details: "https://devpost.com/software/your-virtual-teacher",
                repo: "https://github.com/NEWHACKS-TEAM/FocusHacks"
            },
            imageConfig: {
                image: "/img/focus-hacks.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "NPM Package (hk-mahjong)",
            description: `
            This is the <b>first-ever</b> NPM package that implements the scoring rules of Hong Kong Mahjong.
            The package applies the Breadth First Search algorithm to solve complex problems in the Mahjong context.
            The package was written in Typescript with the Object-oriented programming approach.  
            Jest framework is adopted for unit testing.
            `,
            referenceLinks: {
                npm: "https://www.npmjs.com/package/hk-mahjong",
                repo: "https://github.com/HSKPeter/hk-mahjong-hand-calculation"
            },
            imageConfig: {
                image: "/img/npm.png",
                imageStyle: {
                    width: "80%"
                }
            }
        },
        {
            title: "Know Your Stats",
            description: `
          This project ranked <b>overall #4</b> in <a href="https://bcit-winter-hacks-2021.devpost.com/" target="_blank" rel="noopener noreferrer">BCIT Winter Hacks 2021</a>.
          It was a web application that visualized data to help users better understand their YouTube watch histories.
          It was built with the React framework, along with libraries including Redux, Bootstrap 5 and Chart.js.
          `,
            referenceLinks: {
                video: "https://youtu.be/cBvDCrZL0bg",
                details: "https://devpost.com/software/know-my-stats",
                repo: "https://github.com/HSKPeter/know-my-stats"
            },
            imageConfig: {
                image: "/img/know-your-stats.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "GitHub Portal",
            description: `
            It was a web application that helped users to subscribe to latest updates of particular GitHub repositories.  
            HTML, CSS, vanilla JavaScript, Express.js and MySQL were used to build the application.  Docker was also used to containerize the application.
          `,
            referenceLinks: {
                repo: "https://github.com/HSKPeter/github-portal"
            },
            imageConfig: {
                image: "/img/github-portal.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Lost & Found",
            description: `
            Sometimes it might be annoying when you lose something.  
            Lost & Found was an AI-integrated platform tool developed within 24 hours at <a href="https://www.nwhacks.io/" target="_blank" rel="noopener noreferrer">nwHacks2022</a> to help users get lost items back much easier.  
            The application was built with React, Material UI, Express, MySQL, and containerized with Docker.  
            Microsoft Azure Cloud Services and Open AI were used in this project as well.  
          `,
            referenceLinks: {
                repo: "https://github.com/HSKPeter/nwHacks2022",
                details: "https://portal.nwplus.io/projects/U5zP6nUrOmfhNcV5N1bG",
                video: "https://www.youtube.com/watch?v=iFtexjomqwA&t=118s",

            },
            imageConfig: {
                image: "/img/lost-and-found.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Object Detection Model of Chinese Mahjong tiles",
            description: `
            Python and OpenCV were used to create an image dataset with over 6,000 annotations.  
            Google Cloud AutoML tool was then adopted to build an Object Detection Model that could identify and locate 34 kinds of mahjong tile patterns within a live streaming video.  
            `,
            referenceLinks: {
                repo: "https://github.com/HSKPeter/mahjong-dataset-augmentation"
            },
            imageConfig: {
                image: "/img/object-detection.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Open API of Hong Kong's Public Facilities Data",
            description: `
            This project provides comprehensive data of public toilets to supplement the government's official open API.  
            Playwright and Node.js were used for web scrapping and data processing.  
            AWS Lambda and AWS API Gateway were used to build the open RESTful API.`,
            referenceLinks: {
                api: "https://m152g1r8v9.execute-api.ap-southeast-1.amazonaws.com/live/toilets"
            },
            imageConfig: {}
        },
        {
            title: "Spacestagram",
            description: `
            This project fetched data from NASA's API to display the <i>Astronomy Picture of the Day</i>.  
            It was built with TypeScript, React and Redux.  
            `,
            referenceLinks: {
                link: "https://hskpeter.github.io/spacestagram/",
                repo: "https://github.com/HSKPeter/spacestagram"
            },
            imageConfig: {
                image: "/img/spacestagram.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Read For You",
            description: `
            It was a web application developed within 24 hours in <a href="https://hackduke-2021-code-for-good.devpost.com/" target="_blank" rel="noopener noreferrer">HackDuke2021</a>.  
            This application provided image description and text to speech services, with an aim to make images and texts more accessible for visually impaired users.  
            Express.js and the Google Cloud Vision API were used to build the application.  
            Compute Engine of Google Cloud Platform and Nginx were used to deploy the website with an SSL certificate.
          `,
            referenceLinks: {
                // link: "https://readforyou.tech/",
                video: "https://youtu.be/id-LY-jOshM",
                details: "https://devpost.com/software/read-for-you",
                repo: "https://github.com/HSKPeter/HackDuke2021"
            },
            imageConfig: {
                image: "/img/read-for-you.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Info Digest Portal",
            description: `
            It is a web application that helps users to digest news in today's information overloaded era, by organizing latest news feeds from various information sources and presenting them in an unified layout.  
            TypeScript was used to retrieve information from 6 open REST APIs, including CBC and CTV.  
            Bootstrap, Express.js and PostgreSQL were used to build the application.  
            AWS EC2 and Nginx were adopted to deploy the web application with SSL certificate.
          `,
            referenceLinks: {
                link: "https://infodigestportal.com/",
            },
            imageConfig: {
                image: "/img/info-digest-portal.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Daily YouTube Digest",
            description: `
            This project helped active YouTube users to overcome the echo-chamber effects.  
            This project used Node.js to fetch data from YouTube REST APIs of over 140 channels and playlists, 
            and used AWS Lambda to send daily email digest to users.
          `,
            referenceLinks: {},
            imageConfig: {
                image: "/img/youtube-digest.png",
                imageStyle: {
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "0.125rem",
                    width: "100%"
                }
            }
        },
        {
            title: "Flocus",
            description: `
            This is a group project of the course <a href="https://www.bcit.ca/outlines/20213046873/" target="_blank" rel="noopener noreferrer">COMP1800</a>.  
            It is an application that helps users enhance productivity with its to-do list and timer features.  
            HTML, CSS, Bootstrap, JavaScript and Firebase were used to build the project.
          `,
            referenceLinks: {
                repo: "https://github.com/HSKPeter/1800_BBY24"
            },
            imageConfig: {
                image: "/img/flocus.png",
                imageStyle: {
                    width: "50%"
                }
            }
        }
    ]
};

export default config;