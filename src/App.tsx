import React, { useState, useRef } from 'react';



import {
  Briefcase as BriefcaseLaw,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  Award,
  Scale,
  FileText,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Disc from './components/disclaimer.tsx'

type discProp = {
  overlay: boolean;
};

function App() {
  const [overlay, setOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formRef = useRef(null);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  //reset directly not working therefore working my way around becoz of typescript
  const resetButton = () => {
    if(formRef.current === null) return;

    (formRef.current as HTMLFormElement).reset();
  }
  
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxOvyIKoh3o4vUH0pGQCzycBq99TivhO0P1HVrldKDqpPE6-8r5rJn6VlWrsyvLCuu4rQ/exec";
  
 

  function handleSubmit(e: { preventDefault: () => void; }){
      e.preventDefault();

      if(formRef.current === null) return;

      setIsLoading(true);
      fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(formRef.current),
      })
        .then((res) => {
          console.log('succesfully submitted query');
        })
        .catch((err) => console.log(err));
        
        resetButton();
        setIsLoading(false);

  }

  return (
    <div className="min-h-screen bg-[#dad7cd]">
     <Disc overlay={overlay} setOverlay={setOverlay} />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[100vh] bg-[#588157] flex items-center"
        style={{backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/033/129/369/small_2x/3d-rendered-law-legal-system-justice-crime-concept-mallet-gavel-hammer-and-scales-on-table-ai-generative-photo.jpg")`, 
                backgroundSize: "100%"}}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Justice & Excellence
            </h1>
            <p className="text-xl text-white mb-8">
              Keshav Jha is a distinguished advocate based in Delhi, known for
              his legal expertise and strategic insight. He specializes in
              corporate law, criminal law, commercial disputes, cheque bounce
              and constitutional matters. Keshav Jha has successfully
              represented clients in the Delhi District Court and High Court,
              where his sharp advocacy and client-focused approach have earned
              him a stellar reputation. He combines deep legal knowledge with a
              practical understanding of business needs, delivering innovative
              solutions and favorable outcomes. Keshav Jha remains a trusted
              name in the legal community, renowned for his commitment to
              excellence and justice.
            </p>
            <button className="bg-white text-[#588157] px-6 py-3 rounded-md font-medium hover:bg-[#a3b18a] hover:text-[#a3b18a] transition duration-300" onClick={() => scrollToSection('contact')}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#588157] mb-6">
                About Our Firm
              </h2>
              <p className="text-gray-700 mb-6">
                Keshavjha & Associates has established itself as a premier legal
                advocate firm, dedicated to providing exceptional legal services
                across a wide range of practice areas.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced attorneys brings decades of combined
                expertise to every case, ensuring that our clients receive the
                highest quality representation and personalized attention.
              </p>
              <div className="flex items-center">
                <button className="flex items-center text-[#588157] font-medium hover:text-[#a3b18a] transition duration-300">
                  We expertise in area of Commercial Litigation and Civil
                  Litigation. <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Law office interior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 bg-[#dad7cd]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#588157] mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer comprehensive legal services across multiple practice
              areas, tailored to meet the unique needs of each client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="h-10 w-10 text-[#588157]" />,
                title: 'Commercial Cases',
                description:
                  'Keshav jha and associates provides litigation support in disputes such as contract law, property cases, N.I cases, and corporate cases. We further provide legal consultancy to businesses in drafting, negotiating and enforcing contracts involving a wide range of commercial cases',
                list: [
                  '• Arbitration and Dispute Resolution',
                  '• Corporate cases',
                  '• Commercial dispute',
                  '• Negotiable Instrument cases',
                  '• Property disputes',
                ],
              },
              {
                icon: <Scale className="h-10 w-10 text-[#588157]" />,
                title: 'Corporate Law',
                description:
                  'Expert guidance on business formation, contracts, mergers and acquisitions, and corporate governance.',
              },
              {
                icon: <Users className="h-10 w-10 text-[#588157]" />,
                title: 'Matrimonial Cases',
                description:
                  'Compassionate representation in divorce, child custody, adoption, and other family matters.',
                list: [
                  '• Divorce, Dissolution of marriage',
                  '• Maintenance and alimony',
                  '• Domestic violence',
                  '• Dowry',
                  '• NRI Divorce cases',
                ],
              },
              {
                icon: <FileText className="h-10 w-10 text-[#588157]" />,
                title: 'Criminal Cases',
                description: 'Our service include:',
                list: [
                  '• Bail',
                  '• Criminal complaints',
                  '• FIR Quashing',
                  '• Appeals',
                  '• Revisions',
                  '• Frauds, Cheating, and Misappropriation of funds',
                  '• Trial and Evidence',
                ],
              },

              {
                icon: <BriefcaseLaw className="h-10 w-10 text-[#588157]" />,
                title: 'Civil Cases',
                description:
                  'Skilled representation in civil litigation, dispute resolution, and trial advocacy.',
                list: [
                  '• Recovery Suits',
                  '• Legal notices',
                  '• LandLord and Tenant issues',
                  '• Breach of contract and specific performance',
                  '• Consumer Complaint',
                  '• Suit of injunction',
                ],
              },
              {
                icon: <Scale className="h-10 w-10 text-[#588157]" />,
                title: 'Cheque Bounce Cases',
                description: '',
              },
              {
                icon: <Scale className="h-10 w-10 text-[#588157]" />,
                title: 'M.A.C.T Cases',
                description: '',
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-[#588157] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700">{area.description}</p>
                {area.list ? (
                  <ul className="text-gray-700 ">
                    {area.list.map((x,i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                ) : (
                  false
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="attorneys" className="py-20 bg-white" style={{
        alignItems: 'center'
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#588157] mb-4">
              Our Legal Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet our experienced attorneys who are dedicated to providing
              exceptional legal representation.
            </p>
          </div>

          <div >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            objectFit: 'fill',
          }}>
            {[
              
              {
                name: 'Keshav Jha',
                role: 'Founding Partner',
                image: "https://media-hosting.imagekit.io//b730de2a67804fcf/keshav.jpg?Expires=1835439510&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c1j0~Bbt3-j1nieSQePQGSEQfEe2Q0Kq3WGptiSeaWxGIPXM7a~Z7BucS3i1t93ksAjrfj6qGNUzK9L6pIxHS-239YPCyfWJuAr~HZa01742I6UnUhgkB11uZXyUpc06GLdmH2ka2~zHFXZio3JnssTb6p~jEjZiIJ-xWVhW6yFZCZVsEe39wxyGAfmNKNyxRfnQPLBdQ8MpJfxAxkCpTBJCaeEZa1p0yheQt9tjIFYgs9iX2XBdw58CqIdhcmoHPVWEjy0SdPVu49qBRCgHVid9VZM4pDsyHVzqmPEzSrDHJOZJhnQrAmGg7Q1EPwd87q996uIZfAqcru7ss1ArSQ__",
                bio: 'Keshav Jha leads commercial, civil, criminal, matrimonial practice with unparalleled expertise.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-[#dad7cd] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-scale-down"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#588157] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#a3b18a] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-[#588157] text-white px-6 py-3 rounded-md font-medium hover:bg-[#a3b18a] transition duration-300">
              View All Attorneys
            </button>
          </div> */}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#588157]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-white opacity-80 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working
              with our firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Keshavjha & Associates provided exceptional legal counsel during our company's merger. Their attention to detail and strategic approach made all the difference.",
                author: 'David Chen',
                company: 'CEO, TechVision Inc.',
              },
              {
                quote:
                  'I was impressed by the personal attention and care I received throughout my case. The team was always available to answer my questions and address my concerns.',
                author: 'Amanda Rodriguez',
                company: 'Small Business Owner',
              },
              {
                quote:
                  'Their expertise in estate planning helped our family navigate a complex situation with ease. I highly recommend their services to anyone seeking thorough legal guidance.',
                author: 'Robert Johnson',
                company: 'Retired Executive',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-[#588157]">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#588157] mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-8">
                We're here to help with your legal needs. Reach out to schedule
                a consultation with one of our experienced attorneys.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#588157] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Office</h3>
                    <p className="text-gray-700">
                      1st floor Pocket B, Flat No-60,9
                      <br />
                      Rohini Sector - 5, New Delhi 110085
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#588157] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-700">(+91) 9718836537</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#588157] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-700">jhakeshav543@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#588157] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-700">
                      Monday - Satuday: 9:00 AM - 8:00 PM
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="bg-[#dad7cd] p-8 rounded-lg shadow-md" ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
                    placeholder="abc@gmail.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
                    placeholder="Your Number"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="family">Matrimonial Cases</option>
                    <option value="estate">Criminal Cases</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="litigation">Civil Cases</option>
                    <option value="realestate">Cheque Bounce Cases</option>
                    <option value="mact">M.A.C.T Cases </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
                    placeholder="Please describe your legal needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#588157] text-white px-6 py-3 rounded-md font-medium hover:bg-[#a3b18a] transition duration-300"
                >
                  {isLoading ? 'Loading...':'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
