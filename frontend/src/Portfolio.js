import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Award, Users, Zap, Factory, Wrench, BarChart3, Globe, Linkedin, BookOpen, GraduationCap } from 'lucide-react';
import manish from './manish.jpg'; // Ensure you have a manish.jpg image in the src folder

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  // Web3Forms Access Key
  const accessKey = "b0a9b682-f14d-46fd-a7b1-6ced4931403e";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    setIsLoading(true);

    const data = {
      ...formData,
      access_key: accessKey,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (json.success) {
        setResult('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Web3Forms error:", json.message);
        setResult('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Custom styles for gradient effects not available in Bootstrap
  const customStyles = {
    gradientBg: {
      background: 'linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #3730a3 100%)',
      minHeight: '100vh',
      color: 'white'
    },
    gradientText: {
      background: 'linear-gradient(to right, #60a5fa, #67e8f9)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroGradientText: {
      background: 'linear-gradient(to right, white, #93c5fd, #67e8f9)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    glassCard: {
      background: 'rgba(59, 130, 246, 0.1)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem'
    },
    floatingElement: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 2s infinite'
    },
    parallax: {
      transform: `translateY(${scrollY * 0.5}px)`
    }
  };

  // Bootstrap CDN link - you'll need to add this to your index.html
  useEffect(() => {
    // Add Bootstrap CSS if not already present
    if (!document.querySelector('link[href*="bootstrap"]')) {
      const link = document.createElement('link');
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    
    // Add Bootstrap JS for mobile menu functionality
    if (!document.querySelector('script[src*="bootstrap"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={customStyles.gradientBg}>
      {/* Hero Section */}
      <section id="home" className="d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{minHeight: '100vh'}}>
        {/* Floating Elements */}
        <div style={{...customStyles.floatingElement, top: '120px', left: '40px', width: '80px', height: '80px', background: 'rgba(59, 130, 246, 0.2)'}}></div>
        <div style={{...customStyles.floatingElement, bottom: '80px', right: '40px', width: '128px', height: '128px', background: 'rgba(124, 58, 237, 0.2)', animationDelay: '1s'}}></div>
        <div style={{...customStyles.floatingElement, top: '50%', left: '80px', width: '64px', height: '64px', background: 'rgba(34, 211, 238, 0.2)', animationDelay: '0.5s'}}></div>

        <div className="container text-center" style={customStyles.parallax}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mb-3">
                <div className="mx-auto mb-4 d-flex align-items-center justify-content-center" 
                  style={{width: '192px', height: '192px', background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', borderRadius: '50%', padding: '4px'}}>
                  <img 
                    src={manish}
                    alt="Manish Kumar - Industrial Leader"
                    className="w-100 h-100 rounded-circle"
                    style={{objectFit: 'cover'}}
                  />
                </div>
              </div>
              
              <h1 className="display-1 fw-bold mb-4" style={{...customStyles.heroGradientText, fontSize: 'clamp(3rem, 8vw, 6rem)'}}>
                Manish Kumar
              </h1>
              
              <p className="h3 mb-3 fw-light" style={{color: '#93c5fd'}}>
                Cross-Functional Industrial Leader
              </p>
              
              <p className="lead mb-5 text-light" style={{maxWidth: '800px', margin: '0 auto 3rem auto'}}>
                30+ years of excellence spanning services, fertilizers, oil & gas, and power generation industries
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <div className="d-flex align-items-center rounded-pill px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)'}}>
                  <Factory size={20} className="me-2" style={{color: '#60a5fa'}} />
                  <span>Power Generation</span>
                </div>
                <div className="d-flex align-items-center rounded-pill px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)'}}>
                  <Zap size={20} className="me-2" style={{color: '#fbbf24'}} />
                  <span>2x660MW Operations</span>
                </div>

                <div className="d-flex align-items-center rounded-pill px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)'}}>
                  <Zap size={20} className="me-2" style={{color: '#fbbf24'}} />
                  <span>Commissioning</span>
                </div>
                    
                <div className="d-flex align-items-center rounded-pill px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)'}}>
                  <Award size={20} className="me-2" style={{color: '#34d399'}} />
                  <span>Adani Power Ltd</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-lg rounded-pill fw-semibold px-5 py-3"
                style={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                  border: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
                }}
              >
                Explore My Journey
                <ChevronDown size={20} className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-4" style={customStyles.gradientText}>
              About Me
            </h2>
            <div className="mx-auto rounded-pill" style={{width: '96px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)'}}></div>
          </div>
          
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="space-y-4">
                <p className="lead text-light">
                  As a seasoned industrial leader with over three decades of experience, I have dedicated my career to driving operational excellence across diverse sectors including services, fertilizers, oil & gas, and power generation.
                </p>
                <p className="lead text-light">
                  Currently, I oversee the operations and maintenance of a state-of-the-art 2x660MW supercritical thermal power plant at Adani Power Ltd, where I lead cross-functional teams to ensure optimal performance, safety, and efficiency.
                </p>
                
                <div className="row g-3 mt-4">
                  <div className="col-sm-4">
                    <div className="text-center p-4 rounded" style={{...customStyles.glassCard, background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(124, 58, 237, 0.2))'}}>
                      <Calendar size={32} className="mb-2" style={{color: '#60a5fa'}} />
                      <div className="h2 fw-bold text-white">30+</div>
                      <small className="text-white">Years Experience</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="text-center p-4 rounded" style={{...customStyles.glassCard, background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))'}}>
                      <Zap size={32} className="mb-2" style={{color: '#34d399'}} />
                      <div className="h2 fw-bold text-white">1320</div>
                      <small className="text-white">MW Capacity</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="text-center p-4 rounded" style={{...customStyles.glassCard, background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))'}}>
                      <Users size={32} className="mb-2" style={{color: '#a855f7'}} />
                      <div className="h2 fw-bold text-white">7</div>
                      <small className="text-white">Industries</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="p-5 rounded-4" style={customStyles.glassCard}>
                <h3 className="h2 fw-bold mb-4 text-white">Core Competencies</h3>
                <div className="d-flex flex-column gap-3">
                  {[
                    'Cross-functional Leadership',
                      'Operations Management',
                      'Plant Maintenance',
                      'Safety & Compliance',
                      'Team Development',
                      'Strategic Planning'
                  ].map((skill, index) => (
                    <div key={skill} className="d-flex align-items-center">
                      <div className="rounded-circle me-3" style={{width: '8px', height: '8px', background: 'linear-gradient(to right, #60a5fa, #67e8f9)'}}></div>
                      <span className="text-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-4" style={customStyles.gradientText}>
              Education
            </h2>
            <div className="mx-auto rounded-pill" style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }}></div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-8">
              <div className="p-4 rounded-4" style={customStyles.glassCard}>
                <div className="d-flex align-items-center mb-3">
                  <GraduationCap size={48} className="me-3" style={{ color: '#60a5fa' }} />
                  <div>
                    <h3 className="h4 fw-bold text-white mb-0">U.P. Technical University</h3>
                    <p className="text-light mb-0">Institute of Engineering & Technology, Lucknow</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="fw-semibold mb-0" style={{ color: '#93c5fd' }}>Bachelor of Technology (B.Tech.) in Electrical Engineering</p>
                  <small className="text-white">1990 - 1994</small>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="p-4 rounded-4" style={customStyles.glassCard}>
                <div className="d-flex align-items-center mb-3">
                  <BookOpen size={48} className="me-3" style={{ color: '#60a5fa' }} />
                  <div>
                    <h3 className="h4 fw-bold text-white mb-0">City Montessori School</h3>
                    <p className="text-light mb-0">Lucknow</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="fw-semibold mb-0" style={{ color: '#93c5fd' }}>High School</p>
                  <small className="text-white">Pre-1990</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-4" style={customStyles.gradientText}>
              Expertise & Skills
            </h2>
            <div className="mx-auto rounded-pill" style={{width: '96px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)'}}></div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <Factory size={48} style={{color: '#60a5fa'}} />,
                title: 'Plant Operations',
                description: 'Expert in managing large-scale industrial operations with focus on efficiency and safety.',
                skill: 'Power Generation',
                level: '90%',
                gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(124, 58, 237, 0.2))'
              },
            {
              icon: <Factory size={48} style={{color: '#f59e0b'}} />,
              title: 'Project Commissioning',
              description: 'Commissioning of 2x800 MW Thermal Power Plant and 6 MTPA Polypropylene Plant Electrical Systems.',
              skill: 'Power & Industrial Systems',
              level: '100%',
              gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(34, 197, 94, 0.2))'
            },
              {
                icon: <Users size={48} style={{color: '#34d399'}} />,
                title: 'Team Leadership',
                description: 'Proven ability to lead and develop cross-functional teams across multiple industries.',
                skill: 'Leadership',
                level: '100%',
                gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))'
              },
              {
                icon: <Wrench size={48} style={{color: '#a855f7'}} />,
                title: 'Maintenance Management',
                description: 'Strategic maintenance planning and execution for optimal plant performance.',
                skill: 'Maintenance',
                level: '85%',
                gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))'
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="p-4 rounded-4 h-100" 
                    style={{...customStyles.glassCard, background: item.gradient, transition: 'transform 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="h4 fw-bold text-white mb-3">{item.title}</h3>
                  <p className="text-light mb-4">{item.description}</p>
                  <div>
                    <div className="d-flex justify-content-between small mb-2">
                      <span>{item.skill}</span>
                      <span>Expert</span>
                    </div>
                    <div className="progress" style={{height: '8px', background: '#374151'}}>
                      <div className="progress-bar rounded-pill" 
                            style={{width: item.level, background: 'linear-gradient(to right, #3b82f6, #67e8f9)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4" style={{...customStyles.glassCard, background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1), rgba(220, 38, 38, 0.1))'}}>
                <h3 className="h4 fw-bold text-white mb-4">Industries</h3>
                <div className="row g-3">
                  {[
                    { icon: <Globe size={32} style={{color: '#fb923c'}} />, label: 'Services' },
                    { icon: <Factory size={32} style={{color: '#fbbf24'}} />, label: 'Fertilizers' },
                    { icon: <Zap size={32} style={{color: '#60a5fa'}} />, label: 'Oil & Gas' },
                    { icon: <BarChart3 size={32} style={{color: '#34d399'}} />, label: 'Power' }
                  ].map((industry, index) => (
                    <div key={index} className="col-6">
                      <div className="text-center p-3 rounded" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                        <div className="mb-2">{industry.icon}</div>
                        <small className="text-light">{industry.label}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4" style={{...customStyles.glassCard, background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.1), rgba(59, 130, 246, 0.1))'}}>
                <h3 className="h4 fw-bold text-white mb-4">Key Achievements</h3>
                <div className="d-flex flex-column gap-3">
                  {[
                    'Leading operations of 1320MW power generation facility',
                    '30+ years of cross-industry leadership excellence',
                    'Expertise in supercritical thermal power technology'
                  ].map((achievement, index) => (
                    <div key={index} className="d-flex align-items-start">
                      <Award size={20} className="me-3 mt-1 flex-shrink-0" style={{color: '#67e8f9'}} />
                      <small className="text-light">{achievement}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-4" style={customStyles.gradientText}>
              Professional Journey
            </h2>
            <div className="mx-auto rounded-pill" style={{width: '96px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)'}}></div>
          </div>

          <div className="position-relative">
            <div className="position-absolute start-0 top-0 bottom-0 ms-4" style={{width: '2px', background: 'linear-gradient(to bottom, #3b82f6, #7c3aed)'}}></div>
            
            <div className="d-flex flex-column gap-5">
              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Operations & Maintenance Leader</h3>
                  <p className="fw-semibold mb-3" style={{color: '#60a5fa'}}>Adani Power Ltd • Present</p>
                  <p className="text-light mb-3">
                    Currently overseeing operations and maintenance of 2x660MW supercritical thermal power plant, 
                    ensuring optimal performance, safety standards, and operational efficiency.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(37, 99, 235, 0.2)', color: '#93c5fd'}}>Power Generation</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(34, 197, 94, 0.2)', color: '#86efac'}}>Operations</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(124, 58, 237, 0.2)', color: '#c4b5fd'}}>Maintenance</span>
                  </div>
                </div>
              </div>

              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Associate Vice President</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>Adani Power Jharkhand Limited • July 2021 - April 2025 </p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>3 years 10 months Experience</p>
                  <p className="text-light mb-3">
                    Commissioning and maintenance head for mega power projects, ensuring optimal plant performance and operational excellence.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>Commissioning Management</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>Maintenance Head</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Vendor Coordination</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Strategic Planning</span>
                  </div>
                </div>
              </div>

              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">General Manager</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>GMR Power Limited • 2015 - 2021 </p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}> 6 years Experience</p>
                  <p className="text-light mb-3">
                    6+ years of operational excellence in power generation, leading overall plant operations and strategic initiatives.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>Operations Management</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>Strategic Planning</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Performance Optimization</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Stakeholder Coordination</span>
                  </div>
                </div>
              </div>

              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Sr. DGM Electrical (HOD)</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>LANCO ANPARA • 2011 - 2015</p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>4 years Experience</p>
                  <p className="text-light mb-3">
                    Head of Department for electrical maintenance across all plant systems.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>Electrical Systems Maintenance</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>Technical Leadership</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>System Reliability</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Team Training</span>
                  </div>
                </div>
              </div>
              
              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Lead Manager Electrical</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>Reliance Industries Limited • September 2007 - May 2011</p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>3 years, 9 months</p>
                  
                  <p className="text-light mb-3">
                    Specialized in electrical commissioning and Operations & Maintenance (O&M) for large-scale industrial projects.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>Electrical Commissioning</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>O&M</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Jamnagar Operations</span>
                  </div>
                </div>
              </div>

              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Electrical Manager</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>KRIBHCO SHYAM FERTILIZER LTD • 1997 - 2007</p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>10 years</p>
                  <p className="text-light mb-3">
                    Ten years of experience managing electrical systems and leading teams in the fertilizer industry.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>Electrical Management</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>Fertilizer Industry</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Team Leadership</span>
                  </div>
                </div>
              </div>

              <div className="position-relative ps-5 ms-4">
                <div className="position-absolute start-0 top-0 rounded-circle border border-4 ms-n2" 
                    style={{width: '16px', height: '16px', background: 'linear-gradient(to right, #34d399, #3b82f6)', borderColor: '#1e293b !important'}}></div>
                <div className="p-4 rounded-4" style={{...customStyles.glassCard, transition: 'all 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <h3 className="h2 fw-bold text-white mb-2">Service Engineer</h3>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>Jyoti Ltd. • November 1994 - June 1997</p>
                  <p className="fw-semibold mb-3" style={{color: '#34d399'}}>2 years, 8 months</p>
                  <p className="text-light mb-3">
                    Responsible for managing high-voltage switchgear installations and service for Northern India.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 88, 12, 0.2)', color: '#fed7aa'}}>High-Voltage Switchgear</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a'}}>Field Service</span>
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'rgba(8, 145, 178, 0.2)', color: '#a5f3fc'}}>Installation Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-4" style={customStyles.gradientText}>
              Let's Connect
            </h2>
            <div className="mx-auto rounded-pill" style={{width: '96px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #7c3aed)'}}></div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center text-light mb-5">
                Ready to discuss industrial excellence, operational strategies, or leadership opportunities? 
                I'd love to connect and explore how we can work together.
              </p>

              <div className="row g-4 mb-5 text-white">
                {[
                  { 
                    icon: <Mail size={32} style={{ color: '#60a5fa' }} />, 
                    title: 'Email', 
                    description: 'srivastavamanishk@rediffmail.com', 
                    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(124, 58, 237, 0.2))' 
                  },
                  { 
                    icon: <Phone size={32} style={{ color: '#34d399' }} />, 
                    title: 'Phone', 
                    description: '+91 7747013565', 
                    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))' 
                  },
                  { 
                    icon: <MapPin size={32} style={{ color: '#a855f7' }} />, 
                    title: 'Location', 
                    description: 'Open to opportunities', 
                    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))' 
                  }
                ].map((contact, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div
                      className="text-center p-4 rounded-4"
                      style={{
                        ...customStyles.glassCard,
                        background: contact.gradient,
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    >
                      <div className="mb-3">{contact.icon}</div>
                      <h3 className="h5 fw-semibold text-white mb-2">{contact.title}</h3>
                      <small className="text-white">{contact.description}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="d-flex justify-content-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/manish-kumar-ba6bb08" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button 
                      className="btn btn-lg rounded-circle p-3" 
                      style={{
                        background: 'linear-gradient(to right, #2563eb, #7c3aed)', 
                        border: 'none', 
                        color: 'white',
                        width: '64px', 
                        height: '64px',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Linkedin size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="p-5 rounded-4" style={customStyles.glassCard}>
                    <h3 className="h2 fw-bold mb-4 text-white text-center">Send Me a Message</h3>
                    <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-light">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label text-light">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label text-light">Your Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill px-5 py-3"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Mail size={24} className="me-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                      {result && (
                        <div className={`alert ${result.includes('Successfully') ? 'alert-success' : 'alert-danger'} mt-3 text-center`}>
                          {result}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 border-top" style={{borderColor: 'rgba(255, 255, 255, 0.1) !important'}}>
          <div className="container text-center">
            <p className="text-grey mb-2">
              © 2024 Manish Kumar. Cross-functional leader dedicated to industrial excellence.
            </p>
            <p className="small text-grey">
              Currently overseeing 2x660MW supercritical thermal power plant operations at Adani Power Ltd.
            </p>
          </div>
        </footer>
      </div>
    );
  };

export default Portfolio;
