import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-softBlue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-softBlue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                    >
                        Have a question or want to work together? Feel free to reach out using the form below or through my contact information.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-softBlue-50 dark:bg-softBlue-900/30 text-softBlue-600 dark:text-softBlue-400 rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</p>
                                        <a href="mailto:jeeldave8@gmail.com" className="text-slate-800 dark:text-slate-200 hover:text-softBlue-600 dark:hover:text-softBlue-400 font-medium transition-colors">
                                            jeeldave8@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-softBlue-50 dark:bg-softBlue-900/30 text-softBlue-600 dark:text-softBlue-400 rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                                                     <a href="tel:+919409747858" className="text-slate-800 dark:text-slate-200 hover:text-softBlue-600 dark:hover:text-softBlue-400 font-medium transition-colors">
                                                         +91 9409747858
                                                     </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-softBlue-50 dark:bg-softBlue-900/30 text-softBlue-600 dark:text-softBlue-400 rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Location</p>
                                        <p className="text-slate-800 dark:text-slate-200 font-medium">
                                          Rajkot, Gujarat, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="card p-8 md:p-10">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-softBlue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-softBlue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-softBlue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white transition-colors"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-softBlue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white transition-colors resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 group"
                                >
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
