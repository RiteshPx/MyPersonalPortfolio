import React from 'react'
import resumeImage from '../assets/images/resumeImage.png'
import resumePdf from '../assets/images/RiteshResume.pdf'

export const Resume = () => {
    return (
        <section id="resume">
            <div className=" p-4 w-screen  min-h-screen">
                <h2 className="text-4xl text-center font-bold text-secondary mt-16">Resume</h2>
                <div  className="pt-7 flex justify-center items-center min-h-screen overflow-auto mt-5">
                    <img src={resumeImage} alt="Resume" className="max-w-full max-h-full object-contain" />
                </div>
                {/* <iframe src={resumePdf} width="100%" height="800px"></iframe> */}

                <a href={require("../assets/images/RiteshResume.pdf")} download className="border text-black bg-secondary px-4 py-2 text-lg mt-4 inline-block">
            Download CV
          </a>
            </div>
        </section>
    )
}
