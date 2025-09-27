// --- 1. Quiz Data Structure (The FULL 20 Questions) ---
const quizData = [
    { id: 'Q1', text: "Which stream are you currently in? (The Foundational Filter)", options: { A: "Science – Mathematics (PCM) → Logic, Technical, Data, Innovation", B: "Science – Biology (PCB) → Health, Fieldwork, Research, Lab", C: "Commerce → Finance, Management, Market, Analysis", D: "Humanities / Social Sciences → Communication, Culture, Society, Creativity" } },
    { id: 'Q2', text: "What type of work excites you the most? (Core Drive)", options: { A: "Designing, inventing, or performing complex technical analysis", B: "Providing direct care or improving the quality of human life and health", C: "Developing financial models, handling budgets, and ensuring corporate growth", D: "Interpreting laws, influencing policy, or shaping public discourse" } },
    { id: 'Q3', text: "What kind of ultimate achievement gives you the greatest satisfaction? (Intrinsic Motivation)", options: { A: "Discovering something new that advances human knowledge", B: "Seeing someone grow or succeed directly because of your support", C: "Leading a venture to meet major targets and achieve massive growth", D: "Making a lasting, ethical impact on society or national governance" } },
    { id: 'Q4', text: "How do you prefer your day-to-day work environment? (Structure vs. Interaction)", options: { A: "Primarily in a high-tech lab, R&D facility, or computationally focused setting", B: "Highly interactive, engaging with people or patients regularly", C: "Fast-paced, office-based, with clear targets and competitive performance evaluation", D: "Methodical, involving legal/policy documents, policy discussions, and occasional fieldwork" } },
    { id: 'Q5', text: "When working on a difficult problem, what do you naturally do first?", options: { A: "Deep dive into data, run a simulation, or start experimenting/prototyping", B: "Seek consultation from a mentor or discuss it with the team to brainstorm human solutions", C: "Create a structured plan, a budget, and a detailed timeline for execution", D: "Consult legal precedents, existing policies, or regulatory frameworks" } },
    { id: 'Q6', text: "What excites you most about a work culture?", options: { A: "Being surrounded by intellectual challenges and a focus on meritocracy", C: "Strong team support, a nurturing atmosphere, and personal growth for all", B: "High rewards for performance and clear avenues for career advancement", D: "The strong sense of public purpose and fairness in every decision" } },
    { id: 'Q7', text: "What kind of problem-solving tools do you prefer using?", options: { A: "Data analysis models, experimental apparatus, or programming languages", B: "Communication skills, coaching methods, and hands-on demonstrations", C: "Financial reports, strategic planning charts, and project management software", D: "Legal frameworks, constitutional knowledge, and public administration procedures" } },
    { id: 'Q8', text: "What kind of core skill do you want to master long-term?", options: { A: "Analytical modeling, research methodology, and deep technical specialization", B: "Public speaking, pedagogical techniques, and interpersonal communication", C: "High-stakes negotiation, operations optimization, and strategic decision-making", D: "Governance expertise, ethical public conduct, and large-scale policy implementation" } },
    { id: 'Q9', text: "In a team, what role do you naturally assume? (Team Fit)", options: { A: "The Independent Problem-Solver who designs the prototype or test", B: "The Supporter/Motivator who ensures everyone understands the task", C: "The Manager/Strategist who organizes resources and pushes for deadlines", D: "The Policy Expert who defines the goal and ensures compliance" } },
    { id: 'Q10', text: "When faced with rules or regulations, how do you respond?", options: { A: "I study them closely to innovate within the legal/scientific framework", B: "I ensure everyone understands the rules by clarifying and explaining them clearly", C: "I use them as a stable base to create efficient, scalable operating procedures", D: "I focus on how to implement them widely and advocate for necessary updates" } },
    { id: 'Q11', text: "What is your preferred way to learn a complex topic?", options: { A: "Hands-on experimentation, building things, or running code/simulations", B: "Discussing it with others, teaching it to someone else, or a guided practice session", C: "Reading case studies, analyzing market/financial outcomes, and creating strategy documents", D: "Reading history, policy documents, and discussing philosophical/social implications" } },
    { id: 'Q12', text: "What kind of responsibility appeals to you most? (Core Accountability)", options: { A: "Overseeing the scientific process of a project (e.g., integrity of data, research design)", B: "Taking emotional responsibility for a group's well-being or a student's progress", C: "Being fiscally responsible for budgets, profits, or major assets", D: "Having accountability for public outcomes or constitutional fairness" } },
    { id: 'Q13', text: "What motivates you more than the alternative? (Intrinsic Reward)", options: { A: "The thrill of solving a puzzle that no one else could solve yet", B: "The satisfaction of positively transforming an individual's life trajectory", C: "The power to scale and direct a large organization or market initiative", D: "The honour of serving the nation or correcting a systemic social flaw" } },
    { id: 'Q14', text: "What would you do with a sudden large sum of money (e.g., $1 Million)?", options: { A: "Fund a personal, innovative research lab or technical startup idea", B: "Start a non-profit foundation or community education program", C: "Invest and leverage it to generate maximum financial returns", D: "Donate it to an effective policy advocacy or public health campaign" } },
    { id: 'Q15', text: "How do you handle failure or setbacks?", options: { A: "Treat it as a data point; analyze variables to find the root cause and rerun the process", B: "Reflect on communication and support systems; seek feedback from collaborators", C: "Immediately create a new action plan with tighter controls and aggressive deadlines", D: "Study similar historical failures or legislative fixes to find an institutional lesson" } },
    { id: 'Q16', text: "What kind of physical setting appeals to you for work travel?", options: { A: "Tech/R&D Hubs or Advanced Laboratories", B: "Global health missions, schools, or community clinics (Fieldwork)", C: "Financial capitals (Mumbai/New York/London) or major corporate headquarters", D: "National capital cities, policy centers, or zones needing aid" } },
    { id: 'Q17', text: "If you had to specialize further, which one is most compelling?", options: { A: "Mathematics/Programming (Advanced algorithms, AI, quantitative finance)", B: "Anatomy/Genetics (Human body systems, biotechnology, life sciences)", C: "Economics/Accounting (Market forces, ledgers, monetary policy)", D: "History/Psychology (Human behavior, past trends, social theory)" } },
    { id: 'Q18', text: "Which statement best reflects your ideal work pace? (Stress/Speed)", options: { A: "Slow, focused, deep work and experimentation, with deadlines often self-managed", B: "Balanced, interactive pace, mixing group sessions with focused individual tasks", C: "Fast-paced, dynamic, and competitive with hard external targets and quick wins", D: "Methodical, long-term planning, where major outcomes take years to realize" } },
    { id: 'Q19', text: "What kind of information would you spend hours processing without getting bored?", options: { A: "Scientific research papers, technical manuals, or vast datasets", B: "Biographies, cultural studies, or psychological profiles", C: "Financial statements, market trends, or business model canvas plans", D: "Legal frameworks, constitutional knowledge, and public administration procedures" } },
    { id: 'Q20', text: "What is a key weakness you'd like to overcome in your career? (Reverse Question)", options: { A: "Difficulty with highly ambiguous social or emotional situations", B: "Tendency to avoid technical details or deep quantitative work", C: "Struggling to adhere strictly to bureaucratic processes or rigid timelines", D: "Finding it hard to assert leadership or make high-stakes, solo decisions" } }
];

// --- 2. Rendering Function to Display ALL Questions ---
function renderQuiz() {
    const quizForm = document.getElementById('quizForm');
    
    quizForm.innerHTML = ''; 

    quizData.forEach((question, index) => {
        let optionsHTML = '';
        const questionNumber = index + 1;
        
        for (const key in question.options) {
            optionsHTML += `
                <label>
                    <input type="radio" name="${question.id}" value="${key}" required> 
                    ${question.options[key]}
                </label>
            `;
        }

        const questionHTML = `
            <div class="quiz-question" data-question-id="${question.id}">
                <h3>${questionNumber}. ${question.text}</h3>
                ${optionsHTML}
            </div>
        `;
        quizForm.innerHTML += questionHTML;
    });

    quizForm.innerHTML += `<button type="submit" class="gold-button">Generate My Roadmap</button>`;
}


// --- 3. Mind Map Data Transformation ---
function createMindMapData(recommendations, streamContext) {
    let nodes = [];
    let edges = [];
    const streamId = 'StreamHub';
    
    nodes.push({
        id: streamId,
        label: streamContext.title.split(' to the ')[1].split(' in India')[0], 
        group: 'Stream',
        // Good Hover Info: Brief summary for quick context
        title: `<b>${streamContext.title.split(' to the ')[1].split(' in India')[0]}</b><hr>${streamContext.introduction}`, 
        level: 0 
    });

    recommendations.forEach((rec, index) => {
        const careerId = `C_${index}_${rec.career_title.replace(/\s/g, '')}`;
        const courseId = `R_${index}_${rec.course_name.replace(/\s/g, '')}`;
        
        // Node 2: Career (The Recommended Path)
        // Short Hover Info: Only the key stats
        const careerTitle = `<b>Match: ${rec.match_score}</b><br>Salary: ${rec.avg_salary}<br>Scope: ${rec.future_scope.substring(0, 70)}...`;
        nodes.push({
            id: careerId,
            label: rec.career_title,
            group: 'Career',
            title: careerTitle, 
            details: { ...rec }, 
            level: 1 
        });

        // Node 3: Course (The Degree)
        const courseTitle = `Duration: ${rec.duration}<br>Skills: ${rec.skills_needed.slice(0, 2).join(', ')}...`;
        nodes.push({
            id: courseId,
            label: rec.course_name.split('(')[0].trim(),
            group: 'Course',
            title: courseTitle, 
            details: { colleges: rec.top_colleges }, 
            level: 2
        });

        edges.push({ from: streamId, to: careerId, arrows: 'to' });
        edges.push({ from: careerId, to: courseId, arrows: 'to' });
    });

    return { nodes, edges };
}


// --- 4. Map Rendering and Interaction Function (FINAL VISUALS) ---
function displayRecommendations(result) {
    const contextDiv = document.getElementById('streamContext');
    const container = document.getElementById('mindMapContainer');
    
    if (!container) {
        console.error("Mind Map Container (#mindMapContainer) not found.");
        return; 
    }

    container.innerHTML = '';
    
    // 1. Render Stream Context (text summary)
    if (result.stream_context) {
        contextDiv.innerHTML = `
            <h3>${result.stream_context.title}</h3>
            <p>${result.stream_context.introduction}</p>
        `;
    }

    // 2. Create Node and Edge data
    const { nodes, edges } = createMindMapData(result.recommendations, result.stream_context);
    const data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };

    // 3. Define Visualization Options (MAXIMUM SPACING AND AESTHETICS)
    const options = {
        // Essential for stable, predictable layout
        physics: { enabled: false }, 
        
        // Interaction Settings: FIX 2 - RENDER HOVER AS HTML
        interaction: {
            hover: true, 
            tooltipDelay: 100,
            zoomView: true, 
            dragNodes: true,
            tooltip: { isHtml: true } // *** FIX 2 APPLIED HERE ***
        },

        // Layout and Spacing (MAXIMIZED FOR SCREEN FIT AND CENTERED VIEW)
        layout: {
            hierarchical: {
                direction: "LR", 
                sortMethod: "directed",
                levelSeparation: 450, // WIDEST SEPARATION
                nodeSpacing: 250,    // WIDEST VERTICAL SPREAD
                treeSpacing: 450,
                blockShifting: true
            }
        },

        // Nodes & Fonts (Ensuring blocks are big enough to be seen)
        nodes: {
            shape: 'box',
            size: 35, // Larger size
            font: {
                color: 'white',
                size: 18, // Large font
                face: 'Montserrat'
            },
            shadow: true,
            title: 'html', 
        },

        // Group Customization 
        groups: {
            Stream: { 
                shape: 'box', 
                color: { background: '#B89200', border: '#FFCC00' },
                borderWidth: 4, 
                size: 35,
                font: { size: 20, face: 'Playfair Display' } 
            },
            Career: { 
                shape: 'box', 
                color: { background: '#1a1a1a', border: '#FFCC00' }, 
                borderWidth: 2,
                size: 25 
            },
            Course: { 
                shape: 'ellipse', 
                color: { background: '#0d0d0d', border: '#e0e0e0' }, 
                borderWidth: 1,
                size: 20 
            }
        },
        
        // Edge Styling (Lines)
        edges: {
            arrows: 'to',
            color: { color: '#FFCC00', highlight: '#FFD700' }, 
            dashes: [5, 5], 
            width: 2,
            smooth: {
                type: 'cubicBezier'
            }
        }
    };

    // 4. Draw the Network
    const network = new vis.Network(container, data, options);

    // FIX 1: Ensure the map is fully fitted and centered once drawn
    network.on("stabilized", function () {
        // Adjust the view to fit all elements perfectly after stabilization
        network.fit({ 
            animation: {
                duration: 1000, 
                easingFunction: "easeInOutQuad"
            } 
        });
        // Remove the stabilizer listener after one use
        network.off("stabilized"); 
    });


    // 5. Add Click Interaction (OPENS NEW PAGE)
    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = data.nodes.get(nodeId);
            
            let reportContent = '';
            
            if (node.group === 'Career') {
                const details = node.details;
                reportContent = `
                    <html>
                    <head><title>Career Report: ${details.career_title}</title><style>
                        body { background-color: #000; color: #fff; font-family: 'Montserrat', sans-serif; padding: 40px; }
                        h1 { color: #FFCC00; font-family: 'Playfair Display', serif; border-bottom: 2px solid #FFCC00; padding-bottom: 10px; }
                        strong { color: #FFCC00; }
                        .score { font-size: 1.5em; color: #00FF00; }
                    </style></head>
                    <body>
                        <h1>Detailed Career Report: ${details.career_title}</h1>
                        <p><strong>Match Score:</strong> <span class="score">${details.match_score}</span></p>
                        <h2>The Path</h2>
                        <p><strong>Recommended Course:</strong> ${details.course_name} (${details.duration})</p>
                        <p><strong>Average Salary:</strong> ${details.avg_salary}</p>
                        <p><strong>Future Scope:</strong> ${details.future_scope}</p>
                        
                        <h2>Skills & Colleges</h2>
                        <p><strong>Key Skills Needed:</strong> ${details.skills_needed.join(' | ')}</p>
                        <h4>Top Colleges in J&K:</h4>
                        <ul>
                            ${details.top_colleges.map(c => `<li>${c.name} (${c.location}) - Rank: ${c.ranking}</li>`).join('')}
                        </ul>
                    </body>
                    </html>
                `;
            } else if (node.group === 'Course') {
                const details = node.details;
                reportContent = `
                    <html>
                    <head><title>Course Details: ${node.label}</title><style>
                        body { background-color: #000; color: #fff; font-family: 'Montserrat', sans-serif; padding: 40px; }
                        h1 { color: #FFCC00; font-family: 'Playfair Display', serif; border-bottom: 2px solid #FFCC00; padding-bottom: 10px; }
                        strong { color: #FFCC00; }
                    </style></head>
                    <body>
                        <h1>Detailed Course: ${node.label}</h1>
                        <p><strong>Primary Degree:</strong> ${node.label}</p>
                        <p><strong>Colleges in J&K:</strong></p>
                         <ul>
                            ${details.colleges.map(c => `<li>${c.name} (${c.location}) - Rank: ${c.ranking}</li>`).join('')}
                        </ul>
                    </body>
                    </html>
                `;
            } else {
                 reportContent = `
                    <html>
                    <head><title>Stream Context</title></head>
                    <body><h1>${node.label}</h1><p>${node.title}</p></body>
                    </html>
                `;
            }
            
            const newWindow = window.open('', '_blank');
            if (newWindow) {
                newWindow.document.write(reportContent);
                newWindow.document.close();
            } else {
                alert("Please enable pop-ups to view the detailed report!");
            }
        }
    });
}


// --- 5. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. RENDER ALL 20 QUESTIONS
    renderQuiz(); 
    
    const quizForm = document.getElementById('quizForm');
    const recommendationOutput = document.getElementById('recommendationOutput');

    // 2. FORM SUBMISSION HANDLER
    quizForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const answers = {};
        const formData = new FormData(quizForm);
        
        for (const [key, value] of formData.entries()) {
            answers[key] = value;
        }

        if (Object.keys(answers).length !== quizData.length) {
            alert("Error: Please answer all " + quizData.length + " questions before generating the roadmap.");
            return;
        }
        
        // --- REAL API CALL ---
        try {
            const response = await fetch('http://127.0.0.1:5000/api/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ answers: answers })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                alert(`API Error: The backend failed to process your request. Check app.py console.`);
                console.error("Backend response error:", errorData);
                return;
            }

            const backendResult = await response.json();
            
            // Display Results (the Mind Map)
            displayRecommendations(backendResult);

            // Hide quiz, show results, and scroll smoothly
            quizForm.classList.add('hidden');
            recommendationOutput.classList.remove('hidden');
            window.scrollTo({
                top: recommendationOutput.offsetTop,
                behavior: 'smooth'
            });

        } catch (error) {
            alert("Connection Error: Could not connect to the Python backend. Make sure 'app.py' is running on http://127.0.0.1:5000/");
            console.error("Fetch failed:", error);
        }
    });
});
