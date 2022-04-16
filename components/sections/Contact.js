import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Contact = () => {
    return <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
            <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Contact /&gt; </h1>
            <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Say Hello</h1>
        </div>
        <main className="container px-20 lg:px-56">
            <h3 className="text-success md:text-4xl" data-aos="fade-in">Get in Touch</h3>
            <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I'm available for freelance projects. Let's work together to create something worth sharing.</h2>
            <div className="md:flex gap-4">
                <a href="mailto: jhapatekrishna@gmail.com" target="_blank">
                    <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 flex items-center justify-between font-semibold hover:bg-success hover:text-white border-success text-success">
                        <MailOutlined />
                        <span className="">Mail</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/krishnajhapate/" target="_blank">
                    <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 flex items-center justify-between font-semibold hover:bg-info hover:text-white border-info text-info">
                        <LinkedinOutlined />
                        <span className="">LinkedIn</span>
                    </button>
                </a>
                <a href="https://github.com/krishnajhapate" target="_blank">
                    <button data-aos="fade-in" className="rounded-lg font-semibold border-2 px-8 py-4 my-4 flex items-center justify-between border-normal hover:text-white text-normal hover:bg-normal">
                        <GithubOutlined />
                        <span className="">GitHub</span>
                    </button>
                </a>
            </div>
        </main>
    </div>
        ;
};

export default Contact;
