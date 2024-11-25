import React from 'react';
import TeamMember from '../components/TeamMember';

const Gratitude = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">
          Meet Our Amazing Team
        </h1>
        <p className="text-xl text-center mb-12 text-gray-300">
          The talented individuals behind UIU CSE FEST 2025's success
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Organizing Committee</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Chief Patron</h3>
            <div className="max-w-md mx-auto">
              <TeamMember
                name="Dr. Md. Abul Kashem Mia"
                role="Vice Chancellor, United International University"
                imageSrc="/img/vc_sir.jpg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Organizing Chairs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember
                name="Dr. Mohammad Nurul Huda"
                role="Professor and Head, Dept of CSE, United International University"
                imageSrc="/img/huda_sir.jpg"
              />
              <TeamMember
                name="Dr. Suman Ahmmed"
                role="Associate Professor, Dept. of CSE & Director, CDIP, United International University"
                imageSrc="/img/suman_sir.jpg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Organizing Secretaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember
                name="Mr. Md. Tarek Hasan"
                role="Lecturer, Dept of CSE, United International University"
                imageSrc="/img/tarek_sir.jpg"
              />
              <TeamMember
                name="Mr. Raiyan Rahman"
                role="Lecturer, Dept of CSE, United International University"
                imageSrc="/img/raiyan_sir.jpeg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember
                name="Shoib Ahmed Shourav"
                role="Lecturer, Dept of CSE, United International University"
                subRole="Coordinator of ICT Olympiad and Project Showcasing"
                imageSrc="/img/shoib_sir.jpeg"
              />
              <TeamMember
                name="Fahim Hafiz"
                role="Lecturer, Dept of CSE, United International University"
                subRole="Coordinator of LFR & Robo Soccer, Treasurer, UIU CSE Fest 2025"
                imageSrc="/img/fahim_sir.jpg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Web Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Mohammad Darain Khan"
              role="Technical Lead & Fullstack Developer"
              subRole="Vice President, UIU App Forum"
              imageSrc="/img/darain.jpg"
            />
            <TeamMember
              name="Muddasir Faiyaj"
              role="Fullstack Developer"
              subRole="Associate-Software & Innovation, UIU App Forum"
              imageSrc="/img/faiyaj.jpg"
            />
            <TeamMember
              name="Fatin Shadab"
              role="Fullstack Developer"
              subRole="Head of Programming Wing, UIU Computer Club"
              imageSrc="/img/fatin.jpeg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Graphics Designer</h2>
          <div className="max-w-md mx-auto">
            <TeamMember
              name="A M Zayed Abdullah"
              role="Graphics Designer"
              subRole="Head of Graphics, UIU App Forum"
              imageSrc="/img/zayed.jpg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Media and Communication Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMember
              name="Abdullah Al Masud Bhuiyan"
              role="Media & Communication Lead"
              subRole="President, UIU App Forum"
              imageSrc="/img/masud.jpg"
            />
            <TeamMember
              name="S.M. NAYEMUR RAHMAN"
              role="Media & Communication Member"
              subRole="Co-Head of PR, UIU App Forum"
              imageSrc="/img/nayeem.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gratitude;

