import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import cat from '../assets/images/IMG_6055.jpeg';
import dog from '../assets/images/dog.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><img src={cat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="hhttps://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><h2>Monty</h2></a>
                <p>The cat</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><img src={dog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><h2>Rusty</h2></a>
                <p>The Dog</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><img src={dog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><h2>Rusty</h2></a>
                <p>The Dog</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><img src={cat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><h2>Monty</h2></a>
                <p>The cat</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><img src={dog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><h2>Rusty</h2></a>
                <p>The dog</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><img src={cat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><h2>Monty</h2></a>
                <p>The cat</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><img src={dog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><h2>Rusty</h2></a>
                <p>The dog</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><img src={cat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><h2>Monty</h2></a>
                <p>The cat</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><img src={dog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/2tp626yc" target="_blank" rel="noreferrer"><h2>Rusty</h2></a>
                <p>The dog</p>
            </div>
            <div className="project">
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><img src={cat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tinyurl.com/b3ukvtx4" target="_blank" rel="noreferrer"><h2>Monty</h2></a>
                <p>The cat</p>
            </div>
        </div>
    </div>
    );
}

export default Project;