import React from 'react';
import './styles/base.less'
import './styles/tailwind.css'
import './App.css';




function App() {
  return (
      <div className={"grid place-items-center h-screen content-center hero"}>
          <img className={"max-w-sm w-48 h-auto rounded-full shadow-lg"} src={"/images/mirfarzam.jpeg"}/>
          <h1 className={"title"}>Mirfarzam<span className={"superF"}>F</span></h1>
          <p className={"w-4/6 text-center mt-6"}>This is SeyedFarzam Mirmoeini. I'm Data Engineer and I got my Master Degree of Data Science from
              &nbsp;<a className={"underline cursor-pointer"} href={"https://polytech.univ-cotedazur.fr/"}>
                        University of Polytech Sophia Antipolis
                        <img className={"inline"} src={"https://polytech.univ-cotedazur.fr/uas/composante-polytech/LOGO/image_full.png"}/>
                    </a>&nbsp;
              and
              &nbsp;<a className={"underline cursor-pointer"}  href={"http://www.upm.es/"}>
                        <span className={"inline"}>Polytechnic University of Madrid</span>
                        <img className={"inline"} src={"http://www.upm.es/themes/comun/logos/internacional.png"}/>
                    </a>
          </p>
          <div className={"social-media-icons mt-6"}>
              <a className={"inline-block mx-3"} href={"https://twitter.com/mirfarzam"} target="_blank">
                  <svg
                      className="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                      />
                  </svg>
              </a>
              <a className={"inline-block mx-3"}  href={"https://www.linkedin.com/in/mirfarzam/"} target="_blank">
                  <svg
                      className="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                  </svg>
              </a>
              <a className={"inline-block mx-3"}  href={"https://github.com/mirfarzam"} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
              </a>
          </div>
      </div>
  );
}

export default App;
