const faqDatabase = [
    {
        id: 1,
        keywords: ["timing", "timings", "time", "hours", "open", "close", "schedule", "working hours", "office hours"],
        question: "Institute Timings",
        answer: `<span class="info-label">🕐 Institute Timings</span>
            <ul>
                <li><strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM</li>
                <li><strong>Saturday:</strong> 9:00 AM – 1:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
                <li><strong>Library Hours:</strong> 8:00 AM – 8:00 PM (Mon–Sat)</li>
            </ul>
            <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">Office hours may vary during examination periods.</p>`
    },
    {
        id: 2,
        keywords: ["fee", "fees", "cost", "tuition", "payment", "price", "charges", "fee structure"],
        question: "Fee Structure",
        answer: `<span class="info-label">💰 Fee Structure (Per Semester)</span>
            <ul>
                <li><strong>B.Tech / B.E.:</strong> ₹75,000</li>
                <li><strong>M.Tech / M.E.:</strong> ₹55,000</li>
                <li><strong>BBA / BCA:</strong> ₹45,000</li>
                <li><strong>MBA:</strong> ₹90,000</li>
                <li><strong>Hostel Fee:</strong> ₹30,000 per semester</li>
                <li><strong>Exam Fee:</strong> ₹2,500 per semester</li>
            </ul>
            <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">Fees can be paid online or via bank transfer. Installment options available.</p>`
    },
    {
        id: 3,
        keywords: ["contact", "phone", "email", "call", "reach", "address", "location", "where"],
        question: "Contact Information",
        answer: `<span class="info-label">📞 Contact Information</span>
            <ul>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Email:</strong> info@edusinstitute.ac.in</li>
                <li><strong>Admission Helpline:</strong> +91 98765 43211</li>
                <li><strong>Address:</strong> 123, Knowledge Park, Sector 62, New Delhi – 110001</li>
                <li><strong>Website:</strong> www.edusinstitute.ac.in</li>
            </ul>`
    },
    {
        id: 4,
        keywords: ["course", "courses", "program", "programs", "branch", "branches", "stream", "department", "departments", "offered", "subjects"],
        question: "Courses Offered",
        answer: `<span class="info-label">📚 Courses Offered</span>
            <ul>
                <li><strong>B.Tech:</strong> CSE, ECE, ME, CE, IT, AI & ML</li>
                <li><strong>M.Tech:</strong> CSE, VLSI, Structural Engineering</li>
                <li><strong>BBA</strong> (Bachelor of Business Administration)</li>
                <li><strong>BCA</strong> (Bachelor of Computer Applications)</li>
                <li><strong>MBA</strong> (Master of Business Administration)</li>
                <li><strong>Ph.D.</strong> programs in select departments</li>
            </ul>
            <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">New courses in Data Science and Cyber Security launching next session.</p>`
    },
    {
        id: 5,
        keywords: ["admission", "admissions", "admit", "enroll", "enrollment", "registration", "register", "apply", "application", "how to join", "join"],
        question: "Admission Process",
        answer: `<span class="info-label">🎓 Admission Process</span>
            <ul>
                <li><strong>Step 1:</strong> Fill the online application form on our website</li>
                <li><strong>Step 2:</strong> Upload required documents (marksheets, ID proof, photos)</li>
                <li><strong>Step 3:</strong> Pay the application fee of ₹1,000</li>
                <li><strong>Step 4:</strong> Appear for entrance exam / counselling</li>
                <li><strong>Step 5:</strong> Receive admission offer & confirm seat by paying fees</li>
            </ul>
            <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">Admissions for 2026-27 session are open from June 1 to August 15.</p>`
    },
    {
        id: 6,
        keywords: ["placement", "placements", "recruit", "recruitment", "job", "jobs", "package", "salary", "companies", "hiring", "career"],
        question: "Placement Information",
        answer: `<span class="info-label">💼 Placement Highlights</span>
            <ul>
                <li><strong>Placement Rate:</strong> 92% (2024-25 batch)</li>
                <li><strong>Highest Package:</strong> ₹24 LPA</li>
                <li><strong>Average Package:</strong> ₹6.5 LPA</li>
                <li><strong>Top Recruiters:</strong> TCS, Infosys, Wipro, Amazon, Google, Microsoft</li>
                <li><strong>Internship Support:</strong> Available from 3rd year onwards</li>
            </ul>
            <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">Dedicated Training & Placement Cell assists students with resume building and mock interviews.</p>`
    },
    {
        id: 7,
        keywords: ["scholarship", "scholarships", "financial aid", "merit", "concession", "fee waiver", "freeship"],
        question: "Scholarships",
        answer: `<span class="info-label">⭐ Scholarship Schemes</span>
            <ul>
                <li><strong>Merit Scholarship:</strong> Up to 50% fee waiver for top scorers</li>
                <li><strong>Sports Scholarship:</strong> 25% concession for state/national level athletes</li>
                <li><strong>Need-Based Aid:</strong> Available for economically weaker sections (EWS)</li>
                <li><strong>Girl Child Scholarship:</strong> 10% additional concession</li>
                <li><strong>Government Schemes:</strong> NSP, State scholarships accepted</li>
            </ul>`
    },
    {
        id: 8,
        keywords: ["hostel", "accommodation", "room", "stay", "boarding", "mess", "food"],
        question: "Hostel & Accommodation",
        answer: `<span class="info-label">🏠 Hostel & Accommodation</span>
            <ul>
                <li><strong>Boys Hostel:</strong> 3 blocks with 600+ capacity</li>
                <li><strong>Girls Hostel:</strong> 2 blocks with 400+ capacity</li>
                <li><strong>Room Types:</strong> Single, Double, Triple sharing available</li>
                <li><strong>Mess:</strong> Vegetarian & Non-Vegetarian options</li>
                <li><strong>Facilities:</strong> Wi-Fi, laundry, gym, 24/7 security</li>
                <li><strong>Hostel Fee:</strong> ₹30,000 per semester (mess extra)</li>
            </ul>`
    },
    {
        id: 9,
        keywords: ["facility", "facilities", "infrastructure", "lab", "labs", "library", "sports", "wifi", "campus"],
        question: "Campus Facilities",
        answer: `<span class="info-label">🏫 Campus Facilities</span>
            <ul>
                <li><strong>Smart Classrooms:</strong> 50+ digitally equipped rooms</li>
                <li><strong>Labs:</strong> Computer, Electronics, Mechanical, Physics, Chemistry</li>
                <li><strong>Library:</strong> 50,000+ books, digital journals, e-library access</li>
                <li><strong>Sports:</strong> Cricket, Basketball, Badminton, Gym, Yoga center</li>
                <li><strong>Wi-Fi:</strong> High-speed internet across entire campus</li>
                <li><strong>Cafeteria:</strong> Multi-cuisine food court</li>
                <li><strong>Medical:</strong> On-campus health center</li>
            </ul>`
    },
    {
        id: 10,
        keywords: ["exam", "exams", "examination", "result", "results", "grade", "marks", "marksheet", "cgpa"],
        question: "Examination & Results",
        answer: `<span class="info-label">📝 Examination Information</span>
            <ul>
                <li><strong>Internal Exams:</strong> Conducted twice per semester (15% weightage each)</li>
                <li><strong>External Exams:</strong> End-semester exam (70% weightage)</li>
                <li><strong>Grading:</strong> CGPA system on a 10-point scale</li>
                <li><strong>Results:</strong> Published on student portal within 4 weeks</li>
                <li><strong>Revaluation:</strong> Available within 15 days of result declaration</li>
            </ul>`
    },
    {
        id: 11,
        keywords: ["document", "documents", "required", "eligibility", "criteria", "qualification", "marks required", "percentage"],
        question: "Eligibility & Documents",
        answer: `<span class="info-label">📋 Eligibility & Required Documents</span>
            <ul>
                <li><strong>B.Tech:</strong> 10+2 with 60%+ in PCM</li>
                <li><strong>M.Tech:</strong> B.Tech/B.E. with 55%+ marks</li>
                <li><strong>MBA:</strong> Graduation with valid CAT/MAT score</li>
                <li><strong>Documents Required:</strong></li>
                <li>• 10th & 12th Marksheets</li>
                <li>• Entrance exam scorecard</li>
                <li>• Aadhaar card / ID proof</li>
                <li>• Passport-size photographs</li>
                <li>• Transfer / Migration certificate</li>
            </ul>`
    },
    {
        id: 12,
        keywords: ["transport", "bus", "shuttle", "commute", "travel", "pick up", "drop"],
        question: "Transport Facility",
        answer: `<span class="info-label">🚌 Transport Facility</span>
            <ul>
                <li><strong>Bus Routes:</strong> 15+ routes covering all major areas</li>
                <li><strong>Timings:</strong> Morning pick-up: 7:00 AM – 8:00 AM, Evening drop: 5:00 PM</li>
                <li><strong>Fee:</strong> ₹12,000 – ₹18,000 per semester (distance-based)</li>
                <li><strong>GPS Tracking:</strong> All buses equipped with live tracking</li>
            </ul>`
    },
    {
        id: 13,
        keywords: ["event", "events", "fest", "festival", "cultural", "technical", "hackathon", "extracurricular", "club", "clubs", "activities"],
        question: "Events & Clubs",
        answer: `<span class="info-label">🎉 Events & Student Clubs</span>
            <ul>
                <li><strong>Annual Tech Fest:</strong> "TechNova" — hackathons, coding, robotics</li>
                <li><strong>Cultural Fest:</strong> "Horizon" — music, dance, drama, art</li>
                <li><strong>Clubs:</strong> Coding Club, Robotics Club, Photography Club, Debate Society, NSS, NCC</li>
                <li><strong>Workshops:</strong> Monthly industry-led skill workshops</li>
                <li><strong>Sports Meet:</strong> Annual inter-college sports championship</li>
            </ul>`
    },
    {
        id: 14,
        keywords: ["attendance", "absent", "leave", "absent policy", "minimum attendance", "proxy"],
        question: "Attendance Policy",
        answer: `<span class="info-label">✅ Attendance Policy</span>
            <ul>
                <li><strong>Minimum Attendance:</strong> 75% required to appear in exams</li>
                <li><strong>Tracking:</strong> Biometric + digital attendance system</li>
                <li><strong>Medical Leave:</strong> Allowed with valid medical certificate</li>
                <li><strong>Shortage Notice:</strong> Sent via SMS/email when attendance drops below 80%</li>
                <li><strong>Detention:</strong> Students below 65% may be detained from exams</li>
            </ul>`
    },
    {
        id: 15,
        keywords: ["principal", "dean", "hod", "faculty", "teacher", "professor", "staff", "management", "director"],
        question: "Faculty & Administration",
        answer: `<span class="info-label">👨‍🏫 Faculty & Administration</span>
            <ul>
                <li><strong>Director:</strong> Dr. Rajesh Sharma (Ph.D., IIT Delhi)</li>
                <li><strong>Dean Academics:</strong> Dr. Priya Mehta</li>
                <li><strong>HoD – CSE:</strong> Prof. Amit Kumar</li>
                <li><strong>Total Faculty:</strong> 200+ (60% with Ph.D.)</li>
                <li><strong>Student-Faculty Ratio:</strong> 15:1</li>
                <li><strong>Guest Lectures:</strong> Regular sessions by industry experts</li>
            </ul>`
    }
];

// ---------- Greeting Patterns ----------
const greetingPatterns = ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy", "sup", "hola", "greetings"];
const thankPatterns = ["thank", "thanks", "thank you", "thx", "appreciate"];
const byePatterns = ["bye", "goodbye", "see you", "later", "exit", "quit"];

// ---------- Utility Functions ----------

function getCurrentTime() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
}

function scrollToBottom() {
    const container = document.getElementById('chat-messages');
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}

// ---------- Pattern Matching Engine (if-else based) ----------

function findAnswer(userInput) {
    // Normalize the input: lowercase, trim, remove punctuation
    const input = userInput.toLowerCase().trim().replace(/[?!.,;:'"]/g, '');
    const words = input.split(/\s+/);

    // ---------- Check for greetings ----------
    if (greetingPatterns.some(g => input.includes(g))) {
        return {
            matched: true,
            topic: "Greeting",
            response: `<p>Hello! 👋 Welcome to <strong>EduBot</strong>. I'm here to help you with institute-related queries.</p>
                       <p style="margin-top:0.4rem;">You can ask me about <strong>timings, fees, courses, admissions, placements, scholarships</strong>, and more!</p>`
        };
    }

    // ---------- Check for thanks ----------
    if (thankPatterns.some(t => input.includes(t))) {
        return {
            matched: true,
            topic: "Thanks",
            response: `<p>You're welcome! 😊 If you have more questions, feel free to ask anytime.</p>`
        };
    }

    // ---------- Check for goodbye ----------
    if (byePatterns.some(b => input.includes(b))) {
        return {
            matched: true,
            topic: "Goodbye",
            response: `<p>Goodbye! 👋 Have a great day. Come back anytime you need help!</p>`
        };
    }

    // ---------- Pattern matching against FAQ database ----------
    // Score each FAQ based on how many keywords match
    let bestMatch = null;
    let bestScore = 0;

    for (const faq of faqDatabase) {
        let score = 0;

        for (const keyword of faq.keywords) {
            // Check if the keyword (which may be multi-word) appears in the input
            if (input.includes(keyword)) {
                // Multi-word keywords get higher score
                score += keyword.split(/\s+/).length;
            }
        }

        // Also check individual words
        for (const word of words) {
            if (faq.keywords.includes(word)) {
                score += 0.5;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestMatch = faq;
        }
    }

    // If we found a match with sufficient confidence
    if (bestMatch && bestScore >= 0.5) {
        return {
            matched: true,
            topic: bestMatch.question,
            response: bestMatch.answer
        };
    }

    // ---------- Special cases ----------
    if (input.includes("help") || input.includes("what can you do") || input.includes("options")) {
        return {
            matched: true,
            topic: "Help",
            response: `<span class="info-label">🤖 I Can Help With</span>
                <ul>
                    <li>⏰ Institute <strong>Timings</strong></li>
                    <li>💰 <strong>Fee</strong> Structure</li>
                    <li>📚 <strong>Courses</strong> Offered</li>
                    <li>📞 <strong>Contact</strong> Information</li>
                    <li>🎓 <strong>Admission</strong> Process</li>
                    <li>💼 <strong>Placement</strong> Details</li>
                    <li>⭐ <strong>Scholarships</strong></li>
                    <li>🏠 <strong>Hostel</strong> & Accommodation</li>
                    <li>🏫 Campus <strong>Facilities</strong></li>
                    <li>📝 <strong>Exam</strong> & Results</li>
                    <li>📋 Eligibility & <strong>Documents</strong></li>
                    <li>🚌 <strong>Transport</strong></li>
                    <li>🎉 <strong>Events</strong> & Clubs</li>
                    <li>✅ <strong>Attendance</strong> Policy</li>
                    <li>👨‍🏫 <strong>Faculty</strong> & Administration</li>
                </ul>
                <p style="margin-top:0.5rem;color:var(--text-muted);font-size:0.82rem;">Just type a keyword or ask a question!</p>`
        };
    }

    // ---------- No match found ----------
    return {
        matched: false,
        topic: "Unknown",
        response: `<p>I'm sorry, I didn't quite understand that. 🤔</p>
                   <p style="margin-top:0.35rem;">I can answer questions about: <strong>timings, fees, courses, admissions, placements, scholarships, hostel, facilities, exams, documents, transport, events, attendance,</strong> and <strong>faculty</strong>.</p>
                   <p style="margin-top:0.35rem;color:var(--text-muted);font-size:0.82rem;">Try asking something like "What are the fees?" or "Tell me about placements".</p>`
    };
}

// ---------- DOM Manipulation ----------

function createMessageElement(text, type) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message', type);

    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = type === 'bot' ? '🤖' : '👤';

    const contentWrapper = document.createElement('div');

    const content = document.createElement('div');
    content.classList.add('message-content');

    if (type === 'user') {
        content.innerHTML = `<p>${escapeHtml(text)}</p>`;
    } else {
        content.innerHTML = text;
    }

    const time = document.createElement('div');
    time.classList.add('message-time');
    time.textContent = getCurrentTime();

    contentWrapper.appendChild(content);
    contentWrapper.appendChild(time);
    wrapper.appendChild(avatar);
    wrapper.appendChild(contentWrapper);

    return wrapper;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message', 'bot');
    wrapper.id = 'typing-msg';

    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = '🤖';

    const content = document.createElement('div');
    content.classList.add('message-content');
    content.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

    wrapper.appendChild(avatar);
    wrapper.appendChild(content);

    const container = document.getElementById('chat-messages');
    container.appendChild(wrapper);
    scrollToBottom();
}

function removeTypingIndicator() {
    const typing = document.getElementById('typing-msg');
    if (typing) typing.remove();
}

function hideWelcome() {
    const welcome = document.getElementById('welcome-section');
    if (welcome) {
        welcome.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        welcome.style.opacity = '0';
        welcome.style.transform = 'translateY(-10px)';
        setTimeout(() => welcome.remove(), 300);
    }
}

// ---------- Send Message Logic ----------

function handleSend() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    hideWelcome();
    input.value = '';

    // Add user message
    const container = document.getElementById('chat-messages');
    const userMsg = createMessageElement(text, 'user');
    container.appendChild(userMsg);
    scrollToBottom();

    // Show typing animation then respond
    showTypingIndicator();

    // Simulate a brief "thinking" delay for natural feel
    const delay = 400 + Math.random() * 600;
    setTimeout(() => {
        removeTypingIndicator();

        // Get answer using pattern matching (if-else logic)
        const result = findAnswer(text);
        const botMsg = createMessageElement(result.response, 'bot');
        container.appendChild(botMsg);
        scrollToBottom();
    }, delay);
}

function sendSuggestion(query) {
    document.getElementById('user-input').value = query;
    handleSend();
}

function clearChat() {
    const container = document.getElementById('chat-messages');
    container.innerHTML = '';

    // Re-add welcome section
    container.innerHTML = `
        <div class="welcome-section" id="welcome-section">
            <div class="welcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </div>
            <h2>Welcome to <span class="gradient-text">EduBot</span></h2>
            <p>I'm your institute's FAQ assistant. Ask me anything about timings, fees, courses, admissions, and more!</p>
            <div class="suggestion-chips">
                <button class="chip" onclick="sendSuggestion('What are the institute timings?')">⏰ Institute Timings</button>
                <button class="chip" onclick="sendSuggestion('What are the fees?')">💰 Fee Structure</button>
                <button class="chip" onclick="sendSuggestion('What courses are offered?')">📚 Courses Offered</button>
                <button class="chip" onclick="sendSuggestion('How to contact?')">📞 Contact Info</button>
                <button class="chip" onclick="sendSuggestion('Tell me about admission process')">🎓 Admissions</button>
                <button class="chip" onclick="sendSuggestion('What about placements?')">💼 Placements</button>
            </div>
        </div>`;

    // Close sidebar on mobile
    closeSidebar();
}

// ---------- Sidebar Toggle ----------

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');

    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('sidebar-overlay');
        overlay.onclick = closeSidebar;
        document.querySelector('.app-container').appendChild(overlay);
    }

    if (sidebar.classList.contains('open')) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) overlay.classList.remove('active');
}

// ---------- Event Listeners ----------

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');

    // Send on Enter key
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    });

    // Sidebar nav items trigger queries
    document.querySelectorAll('.nav-item[data-query]').forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            if (query) {
                sendSuggestion(query);
                closeSidebar();
            }
        });
    });
});
