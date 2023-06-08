import React from 'react';
import './Wave.scss';

const Wave = () => {
  return (
    <div>
        {/* <!--Hey! This is the original version
of Simple CSS Waves--> */}

<div className="header">

{/* <!--Content before waves--> */}
<div className="inner-header flex">
    <div className='mainCard'>
        <div>
        <h1>Free Template for building a SaaS app using Material-ui</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <button>DOWNLOAD FROM GITHUB</button>
        </div>
        <div className='imageducont'>
        <img  src="https://www.katiejolly.io/why-you-should-use-git/images/home-screen.JPG" alt='' />
        </div>

    </div>


</div>

{/* <!--Waves Container--> */}
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
{/* <!--Waves end--> */}

</div>
{/* <!--Header ends--> */}
{/* <!--Content ends--> */}
    </div>
  )
}

export default Wave