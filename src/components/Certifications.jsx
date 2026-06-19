import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Issued 2026',
            description:
                'Learned fundamental concepts of computer programming, problem-solving techniques, Python syntax, data types, loops, functions, and object-oriented programming basics using Python.',
            link: '/certificates/Python_Essentials_1_certificate_jeel-dave140564-marwadiuniversity-ac-in_ebc55008-da72-478b-a545-010057f08975.pdf'
        },
        {
            title: 'Prompt Engineering for Data Analysis',
            issuer: 'Infosys Springboard',
            date: 'Issued January 2026',
            description:
                'Learned prompt engineering techniques for data analysis using Python, Pandas, and ChatGPT. Gained knowledge in crafting effective prompts, extracting insights from data, automating analysis workflows, and leveraging AI tools for problem-solving and decision-making.',
            link: '/certificates/prompt-engineering.pdf'
        },
        {
            title: 'Complete Front End Development Journey',
            issuer: 'Infosys Springboard',
            date: 'Issued September 2025',
            description:
                'Completed a comprehensive front-end development program covering HTML, CSS, JavaScript, responsive web design, modern UI development, and best practices for building interactive and user-friendly web applications.',
            link: '/certificates/frontend-development-journey.pdf'
        },
        {
            title: 'Database Design',
            issuer: 'Infosys Springboard',
            date: 'Issued August 2025',
            description:
                'Learned core database design principles including entity-relationship modeling, normalization, database schema creation, primary and foreign keys, and techniques for designing efficient and scalable relational databases.',
            link: '/certificates/database-design.pdf'
        }
    ];

    return (
        <section
            id="certifications"
            className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Certifications
                    </motion.h2>
                </div>

                {/* Certification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="card p-8 group relative overflow-hidden"
                            style={{
                                gridColumn: certs.length === 1 ? '1 / -1' : 'auto',
                                maxWidth: certs.length === 1 ? '600px' : '100%',
                                margin: certs.length === 1 ? '0 auto' : '0'
                            }}
                        >
                            {/* Background Icon */}
                            <div className="absolute -right-10 -top-10 text-slate-50 dark:text-slate-800/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Award size={180} />
                            </div>

                            <div className="relative z-10">

                                {/* Top Icon */}
                                <div className="w-14 h-14 bg-softBlue-100 dark:bg-softBlue-900/40 rounded-xl flex items-center justify-center mb-6 text-softBlue-600 dark:text-softBlue-400">
                                    <Award size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-softBlue-600 dark:group-hover:text-softBlue-400 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Issuer & Date */}
                                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                                    <span className="text-slate-600 dark:text-slate-300">
                                        {cert.issuer}
                                    </span>

                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>

                                    <span className="text-slate-500 dark:text-slate-400">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* PDF Button */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-softBlue-600 dark:text-softBlue-400 font-medium hover:text-softBlue-700 dark:hover:text-softBlue-300 transition-colors group/link"
                                >
                                    View PDF

                                    <ExternalLink
                                        size={16}
                                        className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;