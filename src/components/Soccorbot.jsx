import React from 'react'

const Soccorbot = () => {
  return (
    <div className="bg-white min-h-screen p-4 pt-20 text-black">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            UIU CSE Fest 2025 - Robo Soccer "Whistle Mania!"
          </h1>
          
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Registration Deadline: December 15, 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Summary</h2>
          <p className="text-gray-700 mt-4">
            "Whistle Mania!" at UIU CSE Fest 2025 will feature exciting 1v1 robo-soccer matches, where robots take on the role of players! This segment encourages creativity, teamwork, and problem-solving, allowing students to apply their knowledge in a fun and competitive environment.
            To help our students succeed, grooming sessions will be held to support the teams from UIU. These sessions will focus on refining skills, developing strategies, and providing expert guidance, ensuring our students are fully prepared to shine in the “Whistle Mania!” competition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Registration Procedure</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Registration Deadline:</strong> December 15, 2024</li>
            <li><strong>Eligibility:</strong> All undergraduate program students from public/private universities are eligible to compete!</li>
            <li><strong>Registration Fee:</strong> 2000 BDT per team</li>
            <li><strong>Team Formation:</strong> Teams of up to 5 members; each participant can only join one team in the same segment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Rulebook</h2>
          <h3 className="font-semibold text-orange-600 mt-4">A. Bot Specifications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Bots must use wireless communication (e.g., RF, NRF, Bluetooth); wired control is prohibited. Teams are responsible for managing communication channels.</li>
            <li>Jamming devices are strictly prohibited and will result in immediate disqualification. This includes any RF disruptors or devices that intentionally interfere with other teams' communication signals.</li>
            <li>Bots must have an onboard power supply of no more than 24V. External power sources are not allowed.</li>
            <li>Bots must have a kill switch or emergency shutdown mechanism.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">B. Key Dimensions</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Length: Max 25 cm (including bracket).</li>
            <li>Width: Max 25 cm.</li>
            <li>Height: Max 20 cm.</li>
            <li>Weight: Max 2.5 kg.</li>
            <li>Brackets must be open-type and not enclose the ball. If the ball is gripped, the team will be disqualified.</li>
            <li>Max Bracket Length: 12 cm.</li>
            <li>Max Bracket Width: 6.5 cm.</li>
            <li>Brackets must allow the ball to be visible at all times and must not have sharp edges.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">C. Arena Specifications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Field Width: 5 feet.</li>
            <li>Field Length: 9 feet.</li>
            <li>A boundary wall of 5–10 inches in height will surround the field.</li>
            <li>Centerline and goal areas will be marked clearly.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">D. Game Format</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>All matches are knockout rounds between two teams; winners advance.</li>
            <li>Matches last 6 minutes, divided into two halves of 3 minutes each, with a 2-minute break in between.</li>
            <li>Timeouts may be allowed for bot repairs or issues at the discretion of the referee.</li>
            <li>Bots can only be handled during breaks.</li>
            <li>Opponents will be assigned randomly.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">E. Scoring System</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Each goal awards 100 points.</li>
            <li>Each foul results in a 50-point deduction.</li>
            <li>Teams have one free manual restart; subsequent restarts deduct 100 points each.</li>
            <li>Teams are allowed a maximum of 2 manual restarts.</li>
          </ul>

          <h3 className="font-semibold text-orange-600 mt-4">F. Penalty Rules</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>For penalty shots, the ball is placed at center with no defenders allowed at the goal.</li>
            <li>A team must push or shoot the ball beyond the centerline within 10 seconds of the whistle, or the shot is canceled.</li>
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
            <a href="mailto:mchowdhury203072@bscse.uiu.ac.bd" className="text-orange-500">mchowdhury203072@bscse.uiu.ac.bd</a><br />
            <strong>Contact:</strong> 01989-429732
          </p>
        </section>
      </div>
    </div>
  );
};
export default Soccorbot