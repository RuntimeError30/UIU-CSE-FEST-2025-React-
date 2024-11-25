import React from 'react'

const Lfr = () => {
  return (
    <div className="bg-white min-h-screen p-4 pt-20 text-black">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            UIU CSE Fest 2025 - TrackBots (LFR Competition)
          </h1>
          
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Registration Deadline: December 15, 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Summary</h2>
          <p className="text-gray-700 mt-4">
            "TrackBots" is the Line Following Robot event at UIU CSE Fest 2025, offering UIU students the opportunity to gain hands-on experience through competition. It encourages participants to apply theoretical knowledge in robotics, enhancing problem-solving skills. Grooming sessions are available to support all UIU teams, helping them prepare for the competition and refine their projects. The UIU Robotics Club aims to empower students to succeed at the CSE Fest 2025.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Registration Procedure</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Registration Deadline:</strong> December 15, 2024</li>
            <li><strong>Eligibility:</strong> Open to all undergraduate students from public/private universities in Bangladesh</li>
            <li><strong>Registration Fee:</strong> 1500 BDT per team</li>
            <li><strong>Team Formation:</strong> Teams of up to 5 members; each participant can only join one team in the same segment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Rulebook</h2>
          <h3 className="font-semibold text-orange-600 mt-4">A. General Rules</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Teams must report on time; late arrivals will not be allowed to participate.</li>
            <li>Robots and teams will undergo inspection before each round.</li>
            <li>Robot programming is only allowed before the round, not during.</li>
            <li>Mechanical modifications after submission are prohibited.</li>
            <li>External intervention during a round is strictly prohibited.</li>
            <li>Teams must bring necessary tools and safety equipment.</li>
            <li>Communication tools (e.g., walkie-talkies) are prohibited during the round.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">B. Team Specifications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Teams may have a maximum of 5 members.</li>
            <li>All participants must be students with valid identification.</li>
            <li>Only one team per segment; participants cannot be in two teams for the same segment.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">C. Robot Specifications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Robot dimensions must not exceed 20cm x 20cm x 15cm (W x L x H).</li>
            <li>Maximum weight: 1 kg.</li>
            <li>Robots must have onboard power supply; no wired power allowed.</li>
            <li>Commercially available, pre-assembled robots are prohibited.</li>
            <li>Only two-wheel drive robots are allowed.</li>
            <li>Modifications after submission are prohibited.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">D. Arena Specifications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>The arena will have a black line on a white background or vice versa.</li>
            <li>Specific dimensions and turns will be defined later.</li>
            <li>Some checkpoints are mandatory; others are optional.</li>
            <li>The arena may include obstacles like bridges and slopes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Prize Money</h2>
          <ul className="list-decimal pl-5 text-gray-700 mt-4">
            <li><strong>First Prize:</strong> 25,000 BDT</li>
            <li><strong>Second Prize:</strong> 15,000 BDT</li>
            <li><strong>Third Prize:</strong> 10,000 BDT</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-inner mt-8">
          <h2 className="text-xl font-semibold text-orange-600">For any queries</h2>
          <p className="text-gray-700 mt-4">
            <strong>Fahad Rahman</strong><br />
            Secretary of Event, UIU Robotics Club<br />
            <a href="mailto:frahman203014@bscse.uiu.ac.bd" className="text-orange-500">frahman203014@bscse.uiu.ac.bd</a>
          </p>

          <p className="mt-6">
            <strong>Md. Rashique Hamjah Chowdhury</strong><br />
            Treasurer, UIU Robotics Club<br />
            <a href="mailto:mchowdhurywork@gmail.com" className="text-orange-500">mchowdhurywork@gmail.com</a><br />
            <strong>Contact:</strong> 01989-429732
          </p>
        </section>
      </div>
    </div>
  );
};


export default Lfr