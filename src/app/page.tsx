'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon, CodeBracketIcon, DevicePhoneMobileIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'luizfmd16@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Falha ao enviar mensagem');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transformando Ideias em
            <span className="block text-blue-400">Realidade Digital</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Desenvolvimento Full Stack de alta performance para impulsionar seu negócio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors">
              Fale Conosco
            </a>
            <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Nossos Serviços
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10"
        >
          <ArrowDownIcon className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">8+</h3>
              <p className="text-gray-600">Anos de Experiência</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">50+</h3>
              <p className="text-gray-600">Projetos Concluídos</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">30+</h3>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">100%</h3>
              <p className="text-gray-600">Comprometimento</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CodeBracketIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-600 mb-6">Criamos aplicações web modernas e responsivas utilizando as mais recentes tecnologias do mercado.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Sites Institucionais</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>E-commerces</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Aplicativos Web</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Apps Mobile</h3>
              <p className="text-gray-600 mb-6">Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Apps Nativos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Apps Híbridos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>PWA</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ServerIcon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Backend & API</h3>
              <p className="text-gray-600 mb-6">Arquitetura robusta e escalável para suas aplicações com APIs RESTful.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>APIs RESTful</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Microserviços</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-900 mr-2" />
                  <span>Cloud Solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
              <p className="text-gray-600 mb-6">
                Somos uma empresa especializada em desenvolvimento full stack, com foco em criar soluções
                tecnológicas inovadoras e de alta qualidade. Nossa equipe é composta por profissionais
                experientes e apaixonados por tecnologia.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Experiência em Projetos Complexos</h3>
                    <p className="text-gray-600">Desenvolvemos soluções para diversos setores e tamanhos de empresas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Metodologias Ágeis</h3>
                    <p className="text-gray-600">Utilizamos metodologias ágeis para entregas rápidas e eficientes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Suporte Técnico Especializado</h3>
                    <p className="text-gray-600">Oferecemos suporte técnico especializado para todos os nossos clientes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 h-96 rounded-lg shadow-xl"
            >
              {/* Placeholder for image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para transformar sua ideia em realidade. Entre em contato conosco!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Endereço</h4>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Email</h4>
                    <p className="text-gray-600">luizfmd16@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Telefone</h4>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-900 hover:text-blue-700">
                        LinkedIn
                      </a>
                      <a href="#" className="text-blue-900 hover:text-blue-700">
                        GitHub
                      </a>
                      <a href="#" className="text-blue-900 hover:text-blue-700">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 h-32" 
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className={`w-full py-3 rounded-lg transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-900 text-white hover:bg-blue-800'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sobre</h3>
              <p className="text-gray-400">
                Empresa especializada em desenvolvimento full stack, criando soluções tecnológicas inovadoras.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Desenvolvimento Web</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Apps Mobile</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Backend & API</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Consultoria</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: luizfmd16@gmail.com</li>
                <li className="text-gray-400">Telefone: (11) 9999-9999</li>
                <li className="text-gray-400">São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white block">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white block">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 