import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, X } from 'lucide-react';
import GlitchText from '../components/GlitchText';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Shaurya Johari",
        role: "SciMathSoc Leader",
        content: (
            <>
                <p><strong>What motivated you to start this bootcamp, and what gap did you see in collegiate mathematics training that you wanted to address?</strong></p>
                <p>I observed that IIT Kanpur was underperforming in collegiate-level mathematics competitions. For instance, in the Simon Marais Mathematics Competition, IIT Kanpur had the lowest Institute Best score among all IITs. This highlighted a deeper issue: a lack of emphasis on structured problem-solving culture and competitive mathematical training. The bootcamp was started with the intention of revitalizing this atmosphere, encouraging students to engage deeply with problem solving and develop confidence in higher-level mathematics.</p>
                <br />
                <p><strong>How did you design the structure of the bootcamp—from training to team selection—to ensure both depth and competitiveness?</strong></p>
                <p>The bootcamp focused primarily on developing efficient problem-solving techniques and strategic thinking. I emphasized how a wide variety of problems can often be reduced to a few core, concept-oriented categories. By learning to quickly identify these underlying structures, students could decide on appropriate strategies much faster. This approach ensured both conceptual depth and competitiveness, especially under time constraints.</p>
                <br />
                <p><strong>What were the biggest challenges in running the first edition, and how did the team overcome them?</strong></p>
                <p>One of the biggest challenges was that we started quite late. As a result, a significant portion of the final week, which could have been used to cover important calculus concepts, was instead spent on deciding the final two team members for the competition. While this was not ideal, the team adapted by making the most of the limited time available and focusing on refining problem-solving skills rather than expanding the syllabus.</p>
                <br />
                <p><strong>How did the bootcamp philosophy translate into performance at the Inter IIT Tech Meet?</strong></p>
                <p>The bootcamp emphasised not just arriving at final answers, but truly understanding the problem and presenting concise, rigorous proofs. To illustrate this, in one test there was a relatively straightforward Pigeonhole Principle–based question where only one out of more than ten students wrote a precise proof. However, this focus paid off during the competition: one round was heavily centered on proof construction, and our training directly contributed to our success there, ultimately helping us win the cup.</p>
                <br />
                <p><strong>As someone who both trained and led the team, how did your role evolve from instructor to competitor?</strong></p>
                <p>Initially, I did not plan to participate in the Mathematics Bowl myself. The bootcamp was intended to be jointly run by multiple leaders, with my role focused on instruction. However, as I spent more time teaching and engaging with the material, I felt increasingly motivated to compete again and perform well. Having the tests designed by people not from the camp and answers checked by them ensured I was giving these tests in a fair controlled manner and I'm glad that I was able to prove myself worthy of participating, by performing the second best consistently.</p>
                <br />
                <p><strong>How was your decision to compete received, and how did that journey conclude?</strong></p>
                <p>To be honest, my decision to appear for the Maths Bowl was not immediately welcomed by some seniors. Given that I had participated in the previous edition without much success, there were concerns that I might underperform again. There were also reddit comments bashing us for our poor performance in the previous edition. Nevertheless, I had prepared diligently for this competition, and as a team, we gave it our all. The final outcome exceeded expectations, and I couldn’t be happier with how things turned out.</p>
                <br />
                <p><strong>What does this gold medal mean for SciMathSoc and for future students interested in competitive mathematics?</strong></p>
                <p>SciMathSoc was founded to revive the campus culture of curiosity and enthusiasm for science and mathematics. This gold medal means a great deal, not just for society, but also for seniors who were concerned about the declining interest in these fields. The victory offered students a glimpse of an optimistic future and demonstrated what focused effort can achieve. Building on this success, SciMathSoc plans to conduct many more such camps in the future.</p>
                <br />
                <p><strong>If you had to describe the bootcamp in one sentence to a future participant, what would you say?</strong></p>
                <p>"If you’ve ever wished for the opportunity to experience an Olympiad-style mathematics bootcamp, one that emphasises deep problem solving and structured thinking, then you will feel right at home with this camp."</p>
            </>
        ),
        preview: (
            <>
                <p><strong>What motivated you to start this bootcamp, and what gap did you see in collegiate mathematics training that you wanted to address?</strong></p>
                <p>I observed that IIT Kanpur was underperforming in collegiate-level mathematics competitions. For instance, in the Simon Marais Mathematics Competition, IIT Kanpur had the lowest Institute Best score among all IITs. This highlighted a deeper issue: a lack of emphasis on structured problem-solving culture and competitive mathematical training...</p>
            </>
        ),
        initial: "S"
    },
    {
        id: 2,
        name: "Aarya Bhatt",
        role: "SciMathSoc Secretary",
        content: (
            <>
                <p><strong>What initially drew you to the SciMathSoc bootcamp, and what were your expectations going in?</strong></p>
                <p>I have always enjoyed solving tough puzzles related to mathematics and programming. Hence, the bootcamp had a natural appeal to me. I expected the bootcamp to be highly competitive as it was brimming with people who were among the top talent in the country. Based on my interactions with the people organizing the bootcamp, I knew that the rigour and the difficulty of problems would be of a very high level.</p>
                <br />
                <p><strong>The bootcamp was known to be intense—how did you approach the training and internal evaluations?</strong></p>
                <p>Since every assessment was a handwritten, Olympiad-style test, I had to be incredibly disciplined with how I put thoughts on paper. I treated the evaluations as training for clarity. I focused on structuring my arguments mentally before writing anything down, ensuring my presentation of the proof was smooth and linear. Solving the problems with your intuition in such competition is only half the battle. The ability to express your intuition mathematically in a rigorous and water-tight fashion is equally important to do well in proof-based competitions like the Math Bowl.</p>
                <br />
                <p><strong>What do you think helped you perform consistently well across all internal tests?</strong></p>
                <p>I think the most important thing which helped me perform well in the tests was having the patience and persistence required to solve the hard problems presented as well as finding which problems were from topics I was strong in and then targeting them relentlessly. You can only get ingenious ideas occasionally and so to solve hard problems like these, grinding examples and trying to understand the problem by sheer persistence is always helpful in finding the intuition.</p>
                <br />
                <p><strong>Can you describe a moment during the bootcamp that significantly changed how you think about mathematics?</strong></p>
                <p>While studying linear algebra in depth for the bootcamp, I truly got to appreciate its beauty for the first time. It is a topic which feels very intuitive to me now thanks to my efforts on it during the bootcamp. The bootcamp also introduced me to the fascinating world of game theory which I have been exploring ever since.</p>
                <br />
                <p><strong>How did learning in a competitive yet collaborative environment shape your preparation?</strong></p>
                <p>Mathematics is often seen as a solitary pursuit, but the bootcamp proved it’s highly collaborative. When you are stuck on a proof, seeing how a peer approaches the same problem using a completely different theorem is eye-opening. We would spend hours at the whiteboard, debating the validity of a specific step in a proof. Also, because group work needs good communication, it was also a very good practice in communicating my ideas for an approach in a simple fashion which is very useful for proof writing.</p>
                <br />
                <p><strong>What did it feel like to see the final selected team go on to win gold?</strong></p>
                <p>It was a moment of immense pride. To see the team take the theoretical rigor we practiced during those long weeks and apply it successfully on the big stage was validating. Winning Gold at Inter IIT was proof that our approach to problem-solving (prioritizing understanding over speed) was indeed successful. Being the top scorer internally was great but seeing that contribute to the institute's victory was the real reward.</p>
                <br />
                <p><strong>What would you say to students who are unsure whether they are “good enough” to join such a bootcamp?</strong></p>
                <p>I would say that mathematical maturity is a journey, not a prerequisite. If you enjoy the struggle of a difficult problem and the satisfaction of a clean proof, you have what it takes. Don't be intimidated by the terminology or the intensity. The bootcamp is there to teach you how to think. I would also advise people to not get too demotivated when you see a very ingenious solution and think that you could never come up with it. A lot of the times when you delve deep into a problem, the insights you come up with might even surprise you later when you review your solution.</p>
            </>
        ),
        preview: (
            <>
                <p><strong>What initially drew you to the SciMathSoc bootcamp, and what were your expectations going in?</strong></p>
                <p>I have always enjoyed solving tough puzzles related to mathematics and programming. Hence, the bootcamp had a natural appeal to me. I expected the bootcamp to be highly competitive as it was brimming with people who were among the top talent in the country...</p>
            </>
        ),
        initial: "A"
    },
    {
        id: 3,
        name: "Chaitanya Mahawar",
        role: "SciMathSoc Senior Advisor",
        content: (
            <>
                <p><strong>Key areas to focus on in the last week?</strong></p>
                <p>The team was already solid across most topics. The only places I felt were comparatively under-covered were probability and some higher-end combinatorics / number theory, which also happen to be closer to my own strengths. So I focused on those, while the other coaches continued providing material and structure for the rest. In the last week, specialization matters more than trying to “cover everything again.”</p>
                <br />
                <p><strong>Final-stretch coaching vs long-term training?</strong></p>
                <p>Long-term training is about building foundations and adding breadth. Final-week coaching is the opposite: you don’t really “learn new topics”; you tighten what you already know. You nuance your understanding, patch small conceptual gaps, practice harder variants, and build concrete strategies for recurring families of questions that have a historical pattern of appearing at such competitions.</p>
                <br />
                <p><strong>Refining problem-solving under pressure just before the competition?</strong></p>
                <p>My goal was to make sure they don’t drop points on problems they should be solving anyway. That’s usually not about brilliance; it’s about clarity under time pressure. So I pushed: higher difficulty practice in our targeted areas, forcing clean write-ups / clean reasoning, and developing “default strategies” for common structures (especially in probability / comb / NT). The idea is: don’t panic, don’t overcomplicate, and don’t bleed time on solvable things save time for the truly hard ones, and knowing them i had nary a shadow of doubt on their ability to solve those problems given enough time.</p>
                <br />
                <p><strong>How did the bootcamp groundwork help the final phase?</strong></p>
                <p>The bootcamp gave me a good map of each member’s relative strengths. None of them were genuinely weak; it was more that one person was naturally better at certain kinds of questions than another, and vice versa. That helped me tailor the final week: reinforce their strongest lanes, and make sure they’re efficient there, because the final week is not the time to “convert weaknesses into strengths" but rather ensuring they have a 0% failure rate when coming across problems they are sure they can solve and solve them fast.</p>
                <br />
                <p><strong>Example of noticeable growth during that final week?</strong></p>
                <p>They got sharper at handling unfamiliar-looking questions without losing structure—especially in the targeted areas. Even when they didn’t immediately see the full solution, they became better at quickly trying the correct first reductions/approaches instead of wandering. That matters a lot in contest settings. (And I want to be careful here: the “growth” was mostly in execution and tactical clarity, not in suddenly learning new math in 7 days.)</p>
                <br />
                <p><strong>What impressed you most about the final team?</strong></p>
                <p>Honestly, they were exceptional from the start. The impressive part wasn’t that they needed a lot of “fixing,” but that they had strong mathematical instincts and could pick up unfamiliar ideas quickly. For example, they became much better at game theory-style reasoning, but I don’t want to overclaim that as coaching it felt more like they tried it seriously at that level for the first time and had the aptitude for internalising it.</p>
                <br />
                <p><strong>Mentorship and the role of the final stretch?</strong></p>
                <p>Mentorship helps, but at this level it’s not what creates a podium team—it’s what makes sure a podium-level team actually performs like one on the day. In our case, the biggest reason we won is simple: the team was already better than the rest well before the final week. They had stronger instincts, faster problem-recognition, and a higher baseline across topics.</p> <p>What mentorship did in the final stretch was mostly conversion efficiency: tightening execution, reducing avoidable drops, sharpening decision-making under time pressure, and making sure they didn’t lose points on problems they absolutely should solve. Against top competition, that matters not because it turns an average team into champions, but because it prevents a great team from underperforming.</p> <p>So if I’m being honest: the win reflects their level more than any last-week coaching. My role was to help make that level show up cleanly when it counted.</p>
            </>
        ),
        preview: (
            <>
                <p><strong>Key areas to focus on in the last week?</strong></p>
                <p>The team was already solid across most topics. The only places I felt were comparatively under-covered were probability and some higher-end combinatorics / number theory, which also happen to be closer to my own strengths. So I focused on those, while the other coaches continued providing material and structure for the rest...</p>
            </>
        ),
        initial: "C"
    }
];

const TestimonialCard = ({ testimonial, index, onReadMore }) => {
    return (
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="quote-icon">
                <Quote size={32} />
            </div>
            <div className="testimonial-quote">
                {testimonial.preview || testimonial.content}
            </div>
            {testimonial.preview && (
                <button
                    className="read-more-btn"
                    onClick={() => onReadMore(testimonial.id)}
                >
                    Read More
                </button>
            )}
            <div className="testimonial-author">
                <div className="author-avatar">
                    {testimonial.initial}
                </div>
                <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const [selectedId, setSelectedId] = React.useState(null);
    const selectedTestimonial = testimonialsData.find(t => t.id === selectedId);

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedId(null);
            }
        };

        if (selectedId) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedId]);

    return (
        <div className="testimonials-page">
            <div className="container">
                <div className="testimonials-header">
                    <h1 className="testimonials-title">
                        <GlitchText delay={500}>Testimonials</GlitchText>
                    </h1>
                    <p className="testimonials-subtitle">
                        Hear from our members, alumni, and participants about their experiences with SciMathSoc.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            onReadMore={setSelectedId}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && selectedTestimonial && (
                    <motion.div
                        className="testimonial-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="testimonial-modal-content"
                            layoutId={`testimonial-${selectedId}`}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="modal-esc-hint">Press Esc to close</div>
                            <button className="modal-close-btn" onClick={() => setSelectedId(null)}>
                                <X size={24} />
                            </button>
                            <div className="quote-icon">
                                <Quote size={40} />
                            </div>
                            <div className="modal-testimonial-body">
                                {selectedTestimonial.content}
                            </div>
                            <div className="testimonial-author modal-author">
                                <div className="author-avatar">
                                    {selectedTestimonial.initial}
                                </div>
                                <div className="author-info">
                                    <h4>{selectedTestimonial.name}</h4>
                                    <p>{selectedTestimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Testimonials;
