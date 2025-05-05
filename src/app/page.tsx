'use client';

import { ArrowDownIcon, CodeBracketIcon, DevicePhoneMobileIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("fkyTKEWPMpDZrvJIJ");
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log("Starting email sending...");
      const serviceId = 'service_3fezsm8';
      const templateId = 'template_w17cycd';
      const publicKey = 'fkyTKEWPMpDZrvJIJ';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
      
      console.log("Template parameters:", templateParams);
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log("Sending result:", result);
      
      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! We will contact you soon.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred while sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'linear-gradient(to bottom right, #1e3a8a, #1d4ed8)', 
        color: 'white', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'black', opacity: 0.5 }}></div>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 10 
        }}>
          <h1 
            style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem'
            }}
          >
            Transforming Ideas into
            <span style={{ display: 'block', color: '#60a5fa' }}>Digital Reality</span>
          </h1>
          <p 
            style={{ 
              fontSize: '1.35rem', 
              marginBottom: '2rem', 
              maxWidth: '48rem', 
              margin: '0 auto'
            }}
          >
            Full Stack Development of high performance to boost your business
          </p>
          <div
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: '1rem', 
              justifyContent: 'center'
            }}
          >
            <a href="#contact" style={{ 
              backgroundColor: 'white', 
              color: '#1e3a8a', 
              padding: '0.75rem 2rem', 
              borderRadius: '9999px', 
              fontSize: '1.125rem', 
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              Contact Us
            </a>
            <a href="#services" style={{ 
              backgroundColor: 'transparent', 
              border: '2px solid white', 
              color: 'white', 
              padding: '0.75rem 2rem', 
              borderRadius: '9999px', 
              fontSize: '1.125rem', 
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              Our Services
            </a>
          </div>
        </div>
        <div 
          style={{ position: 'absolute', bottom: '2.5rem' }}
        >
          <ArrowDownIcon style={{ height: '2rem', width: '2rem', animation: 'bounce 1s infinite' }} />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2rem', 
            textAlign: 'center' 
          }}>
            <div 
              style={{ padding: '1.5rem' }}
            >
              <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>8+</h3>
              <p style={{ color: '#4b5563' }}>Years of Experience</p>
            </div>
            <div 
              style={{ padding: '1.5rem' }}
            >
              <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>50+</h3>
              <p style={{ color: '#4b5563' }}>Completed Projects</p>
            </div>
            <div 
              style={{ padding: '1.5rem' }}
            >
              <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>30+</h3>
              <p style={{ color: '#4b5563' }}>Satisfied Clients</p>
            </div>
            <div 
              style={{ padding: '1.5rem' }}
            >
              <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>100%</h3>
              <p style={{ color: '#4b5563' }}>Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Services</h2>
            <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              We offer complete solutions in software development to boost your business
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem' 
          }}>
            <div 
              style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '1rem', 
                borderRadius: '9999px', 
                width: '4rem', 
                height: '4rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <CodeBracketIcon style={{ height: '2rem', width: '2rem', color: '#1e3a8a' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Web Development</h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>We create modern and responsive web applications using the latest technologies on the market.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Institutional Sites</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>E-commerces</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Web Applications</span>
                </li>
              </ul>
            </div>
            <div 
              style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '1rem', 
                borderRadius: '9999px', 
                width: '4rem', 
                height: '4rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <DevicePhoneMobileIcon style={{ height: '2rem', width: '2rem', color: '#1e3a8a' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Mobile Apps</h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>Development of native and hybrid mobile applications for iOS and Android.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Native Apps</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Hybrid Apps</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>PWA</span>
                </li>
              </ul>
            </div>
            <div 
              style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '1rem', 
                borderRadius: '9999px', 
                width: '4rem', 
                height: '4rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <ServerIcon style={{ height: '2rem', width: '2rem', color: '#1e3a8a' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Backend & API</h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>Robust and scalable architecture for your applications with RESTful APIs.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>RESTful APIs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Microservices</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon style={{ height: '1.25rem', width: '1.25rem', color: '#1e3a8a', marginRight: '0.5rem' }} />
                  <span>Cloud Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '3rem', 
            alignItems: 'center' 
          }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>About Us</h2>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                We are a company specialized in full stack development, focused on creating innovative
                and high-quality technological solutions. Our team is composed of experienced
                professionals passionate about technology.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircleIcon style={{ height: '1.5rem', width: '1.5rem', color: '#1e3a8a', marginRight: '0.75rem', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Experience in Complex Projects</h3>
                    <p style={{ color: '#4b5563' }}>We develop solutions for various sectors and company sizes.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircleIcon style={{ height: '1.5rem', width: '1.5rem', color: '#1e3a8a', marginRight: '0.75rem', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Agile Methodologies</h3>
                    <p style={{ color: '#4b5563' }}>We use agile methodologies for fast and efficient deliveries.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircleIcon style={{ height: '1.5rem', width: '1.5rem', color: '#1e3a8a', marginRight: '0.75rem', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Specialized Technical Support</h3>
                    <p style={{ color: '#4b5563' }}>We offer specialized technical support for all our clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              style={{ 
                background: 'linear-gradient(to bottom right, #1e3a8a, #1d4ed8)', 
                height: '24rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
              }}
            >
              {/* Placeholder for image */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h2>
            <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              We are ready to transform your idea into reality. Contact us!
            </p>
          </div>
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '3rem' 
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Address</h4>
                    <p style={{ color: '#4b5563' }}>Minas Gerais, MG - Brazil</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ color: '#4b5563' }}>luizfmd16@gmail.com</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Social Media</h4>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href="https://www.linkedin.com/in/luiz-fernando-dias-0a4b2a1b8/" style={{ color: '#1e3a8a' }}>LinkedIn</a>
                      <a href="https://github.com/luizfmd16" target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a' }}>GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form 
                  onSubmit={handleSubmit} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  {submitStatus && (
                    <div 
                      style={{ 
                        padding: '1rem', 
                        borderRadius: '0.5rem', 
                        backgroundColor: submitStatus.success ? '#dcfce7' : '#fee2e2',
                        color: submitStatus.success ? '#166534' : '#991b1b'
                      }}
                      role="alert"
                      aria-live="polite"
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" style={{ display: 'block', color: '#374151', marginBottom: '0.5rem' }}>
                      Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem 1rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem',
                        outline: 'none',
                        backgroundColor: isSubmitting ? '#f3f4f6' : 'white'
                      }} 
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={submitStatus && !formData.name.trim() ? 'true' : 'false'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', color: '#374151', marginBottom: '0.5rem' }}>
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem 1rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem',
                        outline: 'none',
                        backgroundColor: isSubmitting ? '#f3f4f6' : 'white'
                      }} 
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={submitStatus && !formData.email.trim() ? 'true' : 'false'}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', color: '#374151', marginBottom: '0.5rem' }}>
                      Phone
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem 1rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem',
                        outline: 'none',
                        backgroundColor: isSubmitting ? '#f3f4f6' : 'white'
                      }} 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: 'block', color: '#374151', marginBottom: '0.5rem' }}>
                      Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem 1rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem',
                        outline: 'none',
                        height: '8rem',
                        backgroundColor: isSubmitting ? '#f3f4f6' : 'white',
                        resize: 'vertical'
                      }} 
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={submitStatus && !formData.message.trim() ? 'true' : 'false'}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      borderRadius: '0.5rem',
                      backgroundColor: isSubmitting ? '#9ca3af' : '#1e3a8a',
                      color: 'white',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.3s',
                      fontWeight: '600'
                    }}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>About</h3>
              <p style={{ color: '#9ca3af' }}>
                Company specialized in full stack development, creating innovative technological solutions.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Services</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="#services" style={{ color: '#9ca3af' }}>Web Development</a></li>
                <li><a href="#services" style={{ color: '#9ca3af' }}>Mobile Apps</a></li>
                <li><a href="#services" style={{ color: '#9ca3af' }}>Backend & API</a></li>
                <li><a href="#services" style={{ color: '#9ca3af' }}>Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Contact</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ color: '#9ca3af' }}>Email: luizfmd16@gmail.com</li>
                <li style={{ color: '#9ca3af' }}>Minas Gerais, MG</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Social Media</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="https://www.linkedin.com/in/luiz-fernando-dias-0a4b2a1b8/" style={{ color: '#9ca3af' }}>LinkedIn</a>
                <a href="https://github.com/luizfmd16" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>GitHub</a>
              </div>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #1f2937', 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            textAlign: 'center', 
            color: '#9ca3af' 
          }}>
            <p>&copy; 2025 Semicolon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 