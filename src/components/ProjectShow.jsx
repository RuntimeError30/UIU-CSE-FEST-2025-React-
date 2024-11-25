import React from 'react'

const ProjectShow = () => {
  return (
    <div className="bg-white min-h-screen p-4 pt-20 text-black">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            UIU CSE Fest 2025 - Project Show
          </h1>
          <p className="text-lg text-gray-600 mt-2">University Students and Recent Graduates</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Registration Deadline: November 30, 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Overview</h2>
          <p className="text-gray-700 mt-4">
            The UIU CSE Fest 2025 offers university students an exciting opportunity to showcase their innovative software projects. In today’s rapidly evolving world, advancements in information technology play a key role in creating sustainable solutions. This event invites students to present impactful projects that reflect adaptability, creativity, and diverse skill sets. Projects can span various fields in information technology, science, and engineering, and may be developed solely in software or as hybrid systems integrating both software and hardware.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Registration</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Registration Deadline:</strong> November 30, 2024</li>
            <li><strong>Eligibility:</strong> Open to university students and recent graduates in Bangladesh (graduated within the past year)</li>
            <li><strong>Registration Fee:</strong> 1500 BDT per team</li>
            <li><strong>Team Formation:</strong> Teams of 3 to 5 members; each participant can only join one team</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Prizes</h2>
          <ul className="list-decimal pl-5 text-gray-700 mt-4">
            <li><strong>First Prize:</strong> 50,000 BDT</li>
            <li><strong>Second Prize:</strong> 30,000 BDT</li>
            <li><strong>Third Prize:</strong> 20,000 BDT</li>
            <li><strong>Fourth Prize:</strong> 10,000 BDT</li>
            <li><strong>Fifth Prize:</strong> 10,000 BDT</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Project Domains</h2>
          <p className="text-gray-700 mt-4">
            Projects can span the following domains:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li>Software Engineering & Programming</li>
            <li>Graphics & Computer-Aided Design</li>
            <li>Databases & Information Systems</li>
            <li>Networks & Communications</li>
            <li>Image Processing & Computer Vision</li>
            <li>Machine Learning & Artificial Intelligence</li>
            <li>Hardware, Robotics & Electronics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Submission Guidelines</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Project Synopsis:</strong> Max 400 words with the title, scope, objectives, features, methodology, technology stack, implementation process, limitations, and conclusion.</li>
            <li><strong>Video Presentation:</strong> A 2-3 minute video highlighting the project’s features, focusing on functionalities and practical applications. Upload the video to YouTube (unlisted) and include the link along with the synopsis.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Judgment Criteria</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Relevance:</strong> The project should have a clear purpose and align with the competition's theme.</li>
            <li><strong>Creative Ability:</strong> The project should demonstrate innovation, originality, and problem-solving skills.</li>
            <li><strong>Design and Methodology:</strong> The project should have a well-structured design and methodology.</li>
            <li><strong>Execution:</strong> All features should be fully implemented and function as intended.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Registration Link</h2>
          <h1>Portal will be open Soon</h1>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-inner mt-8">
          <h2 className="text-xl font-semibold text-orange-600">For any queries</h2>
          <p className="text-gray-700 mt-4">
            <strong>Abdullah Al Masud Bhuiyan</strong><br />
            President<br />
            UIU App Forum
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801754281079<br />
            <a href="mailto:masudbuiyan50@gmail.com" className="text-orange-500">masudbuiyan50@gmail.com</a>
          </p>

          <p className="text-gray-700 mt-6">
            <strong>S. M. Nayemur Rahman</strong><br />
            Co-Head of PR<br />
            UIU App Forum
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801620848646<br />
            <a href="mailto:srahman223196@bscse.uiu.ac.bd" className="text-orange-500">srahman223196@bscse.uiu.ac.bd</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectShow