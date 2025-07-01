// Smooth scrolling for navigation
function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({
        behavior: 'smooth'
    });
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
}

// Code Generation Demo
function generateCode() {
    const prompt = document.getElementById('code-prompt').value;
    const output = document.getElementById('code-output');
    
    if (!prompt.trim()) {
        output.innerHTML = '<span class="code-comment">// Please enter a description first!</span>';
        return;
    }
    
    // Show loading animation
    output.innerHTML = '<div class="loading"></div> Generating code...';
    
    // Simulate AI code generation with realistic delay
    setTimeout(() => {
        const generatedCode = generateCodeBasedOnPrompt(prompt);
        output.innerHTML = `<code>${generatedCode}</code>`;
        
        // Add syntax highlighting
        highlightSyntax(output);
    }, 2000);
}

function generateCodeBasedOnPrompt(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('navigation') || lowerPrompt.includes('nav')) {
        return `<span class="code-comment">// Responsive Navigation Component</span>
<span class="code-keyword">const</span> <span class="code-function">Navigation</span> = () => {
  <span class="code-keyword">const</span> [isOpen, setIsOpen] = useState(<span class="code-keyword">false</span>);
  
  <span class="code-keyword">return</span> (
    &lt;<span class="code-keyword">nav</span> className=<span class="code-string">"navbar"</span>&gt;
      &lt;<span class="code-keyword">div</span> className=<span class="code-string">"nav-brand"</span>&gt;
        &lt;<span class="code-keyword">img</span> src=<span class="code-string">"/logo.svg"</span> alt=<span class="code-string">"Logo"</span> /&gt;
      &lt;/<span class="code-keyword">div</span>&gt;
      &lt;<span class="code-keyword">ul</span> className={isOpen ? <span class="code-string">"nav-links active"</span> : <span class="code-string">"nav-links"</span>}&gt;
        &lt;<span class="code-keyword">li</span>&gt;&lt;<span class="code-keyword">a</span> href=<span class="code-string">"#home"</span>&gt;Home&lt;/<span class="code-keyword">a</span>&gt;&lt;/<span class="code-keyword">li</span>&gt;
        &lt;<span class="code-keyword">li</span>&gt;&lt;<span class="code-keyword">a</span> href=<span class="code-string">"#about"</span>&gt;About&lt;/<span class="code-keyword">a</span>&gt;&lt;/<span class="code-keyword">li</span>&gt;
        &lt;<span class="code-keyword">li</span>&gt;&lt;<span class="code-keyword">a</span> href=<span class="code-string">"#contact"</span>&gt;Contact&lt;/<span class="code-keyword">a</span>&gt;&lt;/<span class="code-keyword">li</span>&gt;
      &lt;/<span class="code-keyword">ul</span>&gt;
      &lt;<span class="code-keyword">button</span> 
        className=<span class="code-string">"mobile-toggle"</span>
        onClick={() => setIsOpen(!isOpen)}
      &gt;
        ☰
      &lt;/<span class="code-keyword">button</span>&gt;
    &lt;/<span class="code-keyword">nav</span>&gt;
  );
};`;
    } else if (lowerPrompt.includes('button') || lowerPrompt.includes('component')) {
        return `<span class="code-comment">// Interactive Button Component</span>
<span class="code-keyword">const</span> <span class="code-function">Button</span> = ({ children, variant = <span class="code-string">"primary"</span>, onClick }) => {
  <span class="code-keyword">const</span> [isLoading, setIsLoading] = useState(<span class="code-keyword">false</span>);
  
  <span class="code-keyword">const</span> <span class="code-function">handleClick</span> = <span class="code-keyword">async</span> () => {
    setIsLoading(<span class="code-keyword">true</span>);
    <span class="code-keyword">await</span> onClick();
    setIsLoading(<span class="code-keyword">false</span>);
  };
  
  <span class="code-keyword">return</span> (
    &lt;<span class="code-keyword">button</span> 
      className={<span class="code-string">\`btn btn-\${variant} \${isLoading ? 'loading' : ''}\`</span>}
      onClick={handleClick}
      disabled={isLoading}
    &gt;
      {isLoading ? (
        &lt;<span class="code-keyword">span</span> className=<span class="code-string">"spinner"</span>&gt;&lt;/<span class="code-keyword">span</span>&gt;
      ) : (
        children
      )}
    &lt;/<span class="code-keyword">button</span>&gt;
  );
};`;
    } else if (lowerPrompt.includes('form') || lowerPrompt.includes('input')) {
        return `<span class="code-comment">// Advanced Form with Validation</span>
<span class="code-keyword">const</span> <span class="code-function">ContactForm</span> = () => {
  <span class="code-keyword">const</span> [formData, setFormData] = useState({
    name: <span class="code-string">''</span>,
    email: <span class="code-string">''</span>,
    message: <span class="code-string">''</span>
  });
  <span class="code-keyword">const</span> [errors, setErrors] = useState({});
  
  <span class="code-keyword">const</span> <span class="code-function">validate</span> = (data) => {
    <span class="code-keyword">const</span> newErrors = {};
    <span class="code-keyword">if</span> (!data.name.trim()) newErrors.name = <span class="code-string">'Name is required'</span>;
    <span class="code-keyword">if</span> (!/\\S+@\\S+\\.\\S+/.test(data.email)) newErrors.email = <span class="code-string">'Invalid email'</span>;
    <span class="code-keyword">if</span> (data.message.length < <span class="code-number">10</span>) newErrors.message = <span class="code-string">'Message too short'</span>;
    <span class="code-keyword">return</span> newErrors;
  };
  
  <span class="code-keyword">const</span> <span class="code-function">handleSubmit</span> = (e) => {
    e.preventDefault();
    <span class="code-keyword">const</span> newErrors = validate(formData);
    setErrors(newErrors);
    <span class="code-keyword">if</span> (Object.keys(newErrors).length === <span class="code-number">0</span>) {
      <span class="code-comment">// Submit form</span>
      console.log(<span class="code-string">'Form submitted:'</span>, formData);
    }
  };
  
  <span class="code-keyword">return</span> (
    &lt;<span class="code-keyword">form</span> onSubmit={handleSubmit}&gt;
      <span class="code-comment">// Form fields...</span>
    &lt;/<span class="code-keyword">form</span>&gt;
  );
};`;
    } else if (lowerPrompt.includes('api') || lowerPrompt.includes('fetch')) {
        return `<span class="code-comment">// API Data Fetching Hook</span>
<span class="code-keyword">const</span> <span class="code-function">useApiData</span> = (url) => {
  <span class="code-keyword">const</span> [data, setData] = useState(<span class="code-keyword">null</span>);
  <span class="code-keyword">const</span> [loading, setLoading] = useState(<span class="code-keyword">true</span>);
  <span class="code-keyword">const</span> [error, setError] = useState(<span class="code-keyword">null</span>);
  
  useEffect(() => {
    <span class="code-keyword">const</span> <span class="code-function">fetchData</span> = <span class="code-keyword">async</span> () => {
      <span class="code-keyword">try</span> {
        setLoading(<span class="code-keyword">true</span>);
        <span class="code-keyword">const</span> response = <span class="code-keyword">await</span> fetch(url);
        <span class="code-keyword">if</span> (!response.ok) <span class="code-keyword">throw</span> <span class="code-keyword">new</span> Error(<span class="code-string">'Failed to fetch'</span>);
        <span class="code-keyword">const</span> result = <span class="code-keyword">await</span> response.json();
        setData(result);
      } <span class="code-keyword">catch</span> (err) {
        setError(err.message);
      } <span class="code-keyword">finally</span> {
        setLoading(<span class="code-keyword">false</span>);
      }
    };
    
    fetchData();
  }, [url]);
  
  <span class="code-keyword">return</span> { data, loading, error };
};`;
    } else {
        return `<span class="code-comment">// AI-Generated Code for: ${prompt}</span>
<span class="code-keyword">const</span> <span class="code-function">aiGeneratedComponent</span> = () => {
  <span class="code-keyword">const</span> [state, setState] = useState(<span class="code-keyword">null</span>);
  
  useEffect(() => {
    <span class="code-comment">// Component logic based on your requirements</span>
    console.log(<span class="code-string">'Implementing: ${prompt}'</span>);
  }, []);
  
  <span class="code-keyword">return</span> (
    &lt;<span class="code-keyword">div</span> className=<span class="code-string">"custom-component"</span>&gt;
      &lt;<span class="code-keyword">h2</span>&gt;${prompt}&lt;/<span class="code-keyword">h2</span>&gt;
      &lt;<span class="code-keyword">p</span>&gt;This component implements your requirements!&lt;/<span class="code-keyword">p</span>&gt;
    &lt;/<span class="code-keyword">div</span>&gt;
  );
};`;
    }
}

function highlightSyntax(element) {
    // Simple syntax highlighting is already applied via CSS classes
    // This function could be extended for more sophisticated highlighting
}

function copyCode() {
    const code = document.getElementById('code-output').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// Web Search Demo
function performSearch() {
    const query = document.getElementById('search-query').value;
    const results = document.getElementById('search-results');
    
    if (!query.trim()) {
        results.innerHTML = '<p>Please enter a search query!</p>';
        return;
    }
    
    results.innerHTML = '<div class="loading"></div> Searching the web...';
    
    setTimeout(() => {
        const searchResults = generateSearchResults(query);
        results.innerHTML = searchResults;
    }, 1500);
}

function generateSearchResults(query) {
    const results = [
        {
            title: `Latest ${query} Research`,
            url: 'https://example.com/research',
            snippet: `Comprehensive analysis of ${query} developments with cutting-edge insights and breakthrough discoveries.`,
            relevance: 95
        },
        {
            title: `${query} Best Practices Guide`,
            url: 'https://example.com/guide',
            snippet: `Expert recommendations and industry standards for implementing ${query} solutions effectively.`,
            relevance: 88
        },
        {
            title: `Future of ${query}`,
            url: 'https://example.com/future',
            snippet: `Exploring emerging trends and predictions for the future landscape of ${query} technology.`,
            relevance: 82
        }
    ];
    
    let html = `<h4>🎯 Smart Search Results for "${query}"</h4><div class="search-analysis">
        <p><strong>Analysis:</strong> Found ${results.length} highly relevant results with 94% accuracy confidence.</p>
        <p><strong>Key Insights:</strong> Trending topics include innovation, best practices, and future developments.</p>
    </div>`;
    
    results.forEach(result => {
        html += `
            <div class="search-result">
                <div class="result-header">
                    <h5>${result.title}</h5>
                    <span class="relevance-score">${result.relevance}% relevant</span>
                </div>
                <p class="result-url">${result.url}</p>
                <p class="result-snippet">${result.snippet}</p>
            </div>
        `;
    });
    
    return html;
}

// Data Analysis Demo
function analyzeData() {
    const input = document.getElementById('data-input').value;
    const insights = document.getElementById('analysis-insights');
    const canvas = document.getElementById('analysis-chart');
    
    if (!input.trim()) {
        insights.innerHTML = '<p>Please provide some data to analyze!</p>';
        return;
    }
    
    insights.innerHTML = '<div class="loading"></div> Analyzing data...';
    
    setTimeout(() => {
        generateChart(canvas);
        const analysisResults = generateAnalysisInsights(input);
        insights.innerHTML = analysisResults;
    }, 2000);
}

function generateChart(canvas) {
    const ctx = canvas.getContext('2d');
    
    // Sample data for demonstration
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Data Trend',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4
            }, {
                label: 'Prediction',
                data: [2, 3, 20, 5, 1, 4],
                borderColor: '#764ba2',
                backgroundColor: 'rgba(118, 75, 162, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: '#fff' }
                }
            },
            scales: {
                x: { ticks: { color: '#fff' } },
                y: { ticks: { color: '#fff' } }
            }
        }
    });
}

function generateAnalysisInsights(data) {
    return `
        <h4>📊 Data Analysis Results</h4>
        <div class="insight-item">
            <strong>Pattern Recognition:</strong> Identified cyclical trends with 87% confidence
        </div>
        <div class="insight-item">
            <strong>Anomaly Detection:</strong> 2 outliers detected in the dataset
        </div>
        <div class="insight-item">
            <strong>Correlation Analysis:</strong> Strong positive correlation (r=0.78) between key variables
        </div>
        <div class="insight-item">
            <strong>Forecast:</strong> Predicted 15% growth trend for next quarter
        </div>
        <div class="insight-item">
            <strong>Recommendations:</strong> Focus on optimizing data collection processes for improved accuracy
        </div>
    `;
}

// Creative AI Demo
function generateCreative() {
    const type = document.getElementById('creative-type').value;
    const prompt = document.getElementById('creative-prompt').value;
    const output = document.getElementById('creative-output');
    
    if (!prompt.trim()) {
        output.innerHTML = '<p>Please provide a creative prompt!</p>';
        return;
    }
    
    output.innerHTML = '<div class="loading"></div> Creating something amazing...';
    
    setTimeout(() => {
        const creative = generateCreativeContent(type, prompt);
        output.innerHTML = creative;
    }, 2500);
}

function generateCreativeContent(type, prompt) {
    switch(type) {
        case 'story':
            return `
                <h4>📚 AI-Generated Story</h4>
                <div class="creative-content">
                    <p><strong>Title:</strong> "The ${prompt} Chronicles"</p>
                    <p>In a world where ${prompt} ruled supreme, Sarah discovered an ancient artifact that would change everything. The mysterious object pulsed with otherworldly energy, casting ethereal shadows that danced across the walls of her laboratory.</p>
                    <p>As she carefully examined the relic, whispers of forgotten civilizations echoed in her mind. Each symbol etched into its surface told a story of innovation, discovery, and the eternal human quest to understand the mysteries of ${prompt}.</p>
                    <p><em>Word count: 1,247 | Reading time: 5 minutes</em></p>
                </div>
            `;
        case 'poem':
            return `
                <h4>🎭 AI-Generated Poem</h4>
                <div class="creative-content">
                    <div class="poem">
                        <p><strong>"Ode to ${prompt}"</strong></p>
                        <br>
                        <p>In digital realms where dreams take flight,<br>
                        Where ${prompt} blooms in endless light,<br>
                        The future whispers soft and clear,<br>
                        Of wonders yet to reappear.</p>
                        <br>
                        <p>Through circuits vast and data streams,<br>
                        We chase our most ambitious dreams,<br>
                        With ${prompt} as our guiding star,<br>
                        We'll venture forth, both near and far.</p>
                    </div>
                </div>
            `;
        case 'idea':
            return `
                <h4>💡 Creative Ideas for "${prompt}"</h4>
                <div class="creative-content">
                    <div class="idea-list">
                        <div class="idea-item">
                            <strong>💎 Premium Concept:</strong> Revolutionary ${prompt} platform with AI-powered personalization
                        </div>
                        <div class="idea-item">
                            <strong>🚀 Innovation:</strong> Gamified ${prompt} experience with social sharing features
                        </div>
                        <div class="idea-item">
                            <strong>🌱 Sustainable:</strong> Eco-friendly ${prompt} solution using renewable resources
                        </div>
                        <div class="idea-item">
                            <strong>🎯 Market Gap:</strong> Mobile-first ${prompt} app for underserved communities
                        </div>
                        <div class="idea-item">
                            <strong>🔮 Future Tech:</strong> AR/VR integration for immersive ${prompt} experiences
                        </div>
                    </div>
                </div>
            `;
        case 'design':
            return `
                <h4>🎨 Design Concept for "${prompt}"</h4>
                <div class="creative-content">
                    <div class="design-concept">
                        <p><strong>🎯 Design Vision:</strong> Modern, minimalist approach with bold typography and vibrant gradients</p>
                        <p><strong>🎨 Color Palette:</strong> Deep purples (#667eea), electric blues (#764ba2), with white accents</p>
                        <p><strong>📱 User Experience:</strong> Intuitive navigation with micro-interactions and smooth animations</p>
                        <p><strong>✨ Key Features:</strong></p>
                        <ul>
                            <li>Responsive grid layout with CSS Grid</li>
                            <li>Dark mode with automatic switching</li>
                            <li>Interactive ${prompt} elements</li>
                            <li>Accessibility-first design principles</li>
                            <li>Performance optimized with lazy loading</li>
                        </ul>
                    </div>
                </div>
            `;
        default:
            return `<p>Select a creative type to get started!</p>`;
    }
}

// Animated counter for capabilities section
function animateCounters() {
    const counters = document.querySelectorAll('.metric-value');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation for capabilities section
                if (entry.target.classList.contains('capabilities-section')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, .capability-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    document.querySelectorAll('.capabilities-section').forEach(el => {
        observer.observe(el);
    });
}

// Particle background effect
function createParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            alpha: Math.random() * 0.5 + 0.2
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(102, 126, 234, ${particle.alpha})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Enhanced navbar scroll effect
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    createParticles();
    initNavbarEffects();
    
    // Add some interactive hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('🚀 AI Web Agent Showcase initialized successfully!');
});

// Add some CSS for additional styling
const additionalStyles = `
.search-result {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.relevance-score {
    background: linear-gradient(45deg, #667eea, #764ba2);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
}

.result-url {
    color: #667eea;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.insight-item, .idea-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    border-left: 3px solid #667eea;
}

.poem {
    text-align: center;
    font-style: italic;
    line-height: 1.8;
}

.design-concept ul {
    margin-left: 1rem;
    margin-top: 0.5rem;
}

.search-analysis {
    background: rgba(102, 126, 234, 0.2);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);