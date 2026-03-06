import React from 'react'
import { githubGray as GithubIcon, externalLink as ExternalIcon, reactIcon as ReactIcon, typeScript as TSIcon, nextJs as NextIcon, tailwind as TailwindIcon, nodeJs as NodeIcon } from './icons'
import ProjectPreview from '../styles/images/project-preview.jpg'
import { useLanguage } from '../context/LanguageContext';

const Project = () => {
    const { translations } = useLanguage();

    return (
        <div className='project-container'>
            <div className='project-header'>
                <div className='project-title'>
                    <h2>{translations.projects[0].title}</h2>
                </div>
                <div className='right-part'>
                    <img src={ProjectPreview} alt="Project Preview" id='project-preview' />
                </div>
            </div>

            <div className='project-body'>
                <div className='project-description'>
                    <p>{translations.projects[0].description}</p>
                </div>

                <div className='project-tools'>
                    <div className='tools-list'>
                        <ReactIcon />
                        <TSIcon />
                        <NextIcon />
                        <TailwindIcon />
                        <NodeIcon />
                    </div>
                </div>

                <div className='project-links'>
                    <a href='https://github.com/MerlinoCode/bulbasaur-garden' aria-label="Github Link" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                        <span>Github</span>
                    </a>
                    <a href='https://bulbasaur-garden.vercel.app/' aria-label='External Link' target="_blank" rel="noopener noreferrer">
                        <ExternalIcon />
                        <span>Web Link</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;