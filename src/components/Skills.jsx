import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming / Development',
            skills: [
                { name: 'PHP', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'Python (Basic)', level: 65 },
                { name: 'ASP.NET', level: 80 },
                { name: 'OOP Concepts', level: 80 },
            ]
        },
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', level: 80 },
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 75 },
                { name: 'Vite', level: 75 },
            ]
        },
        {
            title: 'Backend / Frameworks',
            skills: [
                { name: 'Laravel', level: 75 },
                { name: 'Node.js', level: 75 },
                { name: 'ASP.NET', level: 80 },
            ]
        },
        {
            title: 'Database',
            skills: [
                { name: 'MySQL', level: 85 },
            ]
        },
        {
            title: 'Concepts & Architecture',
            skills: [
                { name: 'OOP', level: 80 },
                { name: 'MVC', level: 80 },
                { name: 'REST APIs', level: 80 },
                { name: 'Web Dev Fundamentals', level: 85 },
            ]
        },
        {
            title: 'Tools & Version Control',
            skills: [
                { name: 'Git', level: 85 },
                { name: 'GitHub', level: 80 },
                { name: 'VS Code', level: 85 },
            ]
        },
        {
            title: 'Soft Skills',
            skills: [
                { name: 'Communication', level: 85 },
                { name: 'Problem Solving', level: 85 },
                { name: 'Teamwork', level: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        My Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                    >
                        A comprehensive overview of my technical expertise and the tools I use to build modern applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="card p-8"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-softBlue-500 rounded-full"></span>
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                                            <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                                                className="bg-gradient-to-r from-softBlue-400 to-softBlue-600 h-2.5 rounded-full relative"
                                            >
                                                {/* Sparkle effect on progress bar */}
                                                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 skew-x-12 blur-[2px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
