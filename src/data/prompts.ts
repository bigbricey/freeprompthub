export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
}

export const prompts: Record<string, Prompt[]> = {
  chatgpt: [
    {
      id: "chatgpt-1",
      title: "Expert Advisor Persona",
      description: "Transform ChatGPT into a domain expert for in-depth consultations",
      prompt: `You are a world-class expert in [FIELD]. You have 20+ years of experience and have consulted for Fortune 500 companies.

When I ask you questions:
1. Provide detailed, actionable advice
2. Include specific examples and case studies
3. Anticipate follow-up questions and address them
4. If something is outside your expertise, say so

My first question is: [YOUR QUESTION]`,
      category: "chatgpt",
      tags: ["productivity", "expert", "consulting"]
    },
    {
      id: "chatgpt-2",
      title: "Content Repurposing Machine",
      description: "Turn one piece of content into 10 different formats",
      prompt: `I'm going to share a piece of content with you. Transform it into ALL of the following formats:

1. Twitter/X thread (5-7 tweets)
2. LinkedIn post (professional tone)
3. Instagram caption (with emoji and hashtags)
4. YouTube video script outline
5. Email newsletter snippet
6. Blog post introduction
7. Podcast talking points
8. TikTok script (under 60 seconds)
9. Pinterest pin description
10. Reddit post

Here's my original content:
[PASTE YOUR CONTENT]`,
      category: "chatgpt",
      tags: ["content", "marketing", "social media"]
    },
    {
      id: "chatgpt-3",
      title: "Meeting Notes to Action Items",
      description: "Extract clear action items and decisions from messy meeting notes",
      prompt: `Analyze my meeting notes and provide:

1. **Key Decisions Made** - List each decision clearly
2. **Action Items** - Format as: [OWNER] - [TASK] - [DEADLINE if mentioned]
3. **Open Questions** - Items that need follow-up
4. **Summary** - 2-3 sentence overview

Meeting Notes:
[PASTE YOUR NOTES]`,
      category: "chatgpt",
      tags: ["productivity", "meetings", "business"]
    },
    {
      id: "chatgpt-4",
      title: "Code Debugging Assistant",
      description: "Systematic approach to finding and fixing bugs in your code",
      prompt: `You are a senior software engineer helping me debug code.

When I share code with an error:
1. Identify the likely cause of the error
2. Explain WHY the error occurs (help me learn)
3. Provide the corrected code
4. Suggest improvements for code quality
5. Warn about potential edge cases

My code and error:
[PASTE CODE AND ERROR MESSAGE]`,
      category: "chatgpt",
      tags: ["coding", "debugging", "programming"]
    },
    {
      id: "chatgpt-5",
      title: "Customer Email Response Generator",
      description: "Professional customer service responses for any situation",
      prompt: `Write a professional customer service email response.

Context:
- Customer issue: [DESCRIBE THE ISSUE]
- Tone needed: [apologetic/informative/firm but polite]
- Resolution offered: [WHAT YOU CAN DO]
- Company name: [YOUR COMPANY]

Requirements:
- Acknowledge their frustration
- Take ownership
- Provide clear next steps
- End positively`,
      category: "chatgpt",
      tags: ["business", "customer service", "email"]
    },
    {
      id: "chatgpt-6",
      title: "Learn Any Skill Fast",
      description: "Create a personalized learning curriculum for any skill",
      prompt: `Create a complete learning plan for me to become proficient in [SKILL].

My details:
- Current level: [beginner/intermediate/advanced]
- Time available: [X hours per week]
- Learning style: [visual/reading/hands-on/video]
- Goal: [What I want to achieve]

Provide:
1. Week-by-week curriculum (8 weeks)
2. Best free resources for each topic
3. Practice exercises
4. Milestones to track progress
5. Common mistakes to avoid`,
      category: "chatgpt",
      tags: ["learning", "education", "productivity"]
    },
    {
      id: "chatgpt-7",
      title: "Sales Email Sequence",
      description: "Generate a complete cold email sequence that converts",
      prompt: `Create a 5-email cold outreach sequence for my business.

Business: [YOUR BUSINESS]
Target audience: [WHO YOU'RE TARGETING]
Pain point we solve: [MAIN PROBLEM YOU SOLVE]
Unique value: [WHAT MAKES YOU DIFFERENT]

For each email provide:
- Subject line (with A/B variant)
- Email body
- Call to action
- Days to wait before next email

Make them conversational, not salesy.`,
      category: "chatgpt",
      tags: ["sales", "email", "marketing"]
    },
    {
      id: "chatgpt-8",
      title: "YouTube Script Writer",
      description: "Create engaging YouTube scripts with hooks and retention",
      prompt: `Write a YouTube video script on: [TOPIC]

Target length: [X] minutes
Target audience: [DESCRIBE AUDIENCE]

Include:
1. Hook (first 30 seconds to stop the scroll)
2. Pattern interrupt at 2-minute mark
3. Main content with clear sections
4. Engagement prompts (like, subscribe, comment)
5. Strong call-to-action ending
6. Timestamps/chapters

Tone: [casual/professional/educational/entertaining]`,
      category: "chatgpt",
      tags: ["youtube", "content", "video"]
    },
    {
      id: "chatgpt-9",
      title: "Resume Bullet Point Optimizer",
      description: "Transform weak resume bullets into achievement-focused statements",
      prompt: `Rewrite my resume bullet points to be more impactful.

For each bullet point I provide:
1. Rewrite using the XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]"
2. Add quantifiable metrics (suggest realistic numbers if I don't have them)
3. Use strong action verbs
4. Highlight the impact, not just the task

My current bullet points:
[PASTE YOUR BULLETS]`,
      category: "chatgpt",
      tags: ["career", "resume", "job search"]
    },
    {
      id: "chatgpt-10",
      title: "Product Description Writer",
      description: "Create compelling product descriptions that sell",
      prompt: `Write a high-converting product description.

Product: [NAME]
Key features: [LIST FEATURES]
Target customer: [WHO BUYS THIS]
Price point: [PRICE]
Platform: [Amazon/Shopify/website]

Include:
1. Attention-grabbing headline
2. Opening hook addressing pain point
3. Benefits (not just features)
4. Social proof placeholder
5. Urgency element
6. Clear CTA

Use sensory language and emotional triggers.`,
      category: "chatgpt",
      tags: ["ecommerce", "copywriting", "sales"]
    }
  ],
  claude: [
    {
      id: "claude-1",
      title: "Deep Research Assistant",
      description: "Get comprehensive research with multiple perspectives",
      prompt: `I need you to research [TOPIC] thoroughly.

Provide:
1. **Overview** - Core concepts explained simply
2. **Key perspectives** - Different viewpoints/schools of thought
3. **Evidence** - Data, studies, and sources that support each view
4. **Controversies** - Where experts disagree and why
5. **Practical implications** - What this means for [MY CONTEXT]
6. **Knowledge gaps** - What's still unknown or debated
7. **Further reading** - Recommended resources to go deeper

Be balanced and note when you're uncertain.`,
      category: "claude",
      tags: ["research", "analysis", "learning"]
    },
    {
      id: "claude-2",
      title: "Code Review Partner",
      description: "Get a thorough code review with security and performance insights",
      prompt: `Review my code as a senior engineer would.

Analyze for:
1. **Bugs & Logic Errors** - Identify issues that would cause problems
2. **Security Vulnerabilities** - OWASP top 10 and common pitfalls
3. **Performance** - Inefficiencies and optimization opportunities
4. **Readability** - Naming, structure, comments
5. **Best Practices** - Design patterns and idioms for this language
6. **Test Coverage** - What tests should be written

For each issue: explain why it matters and show the fix.

\`\`\`
[PASTE YOUR CODE]
\`\`\``,
      category: "claude",
      tags: ["coding", "review", "programming"]
    },
    {
      id: "claude-3",
      title: "Document Analyzer & Summarizer",
      description: "Extract key insights from long documents with structured analysis",
      prompt: `Analyze this document and provide:

1. **Executive Summary** (3-4 sentences)
2. **Key Points** - The 5-7 most important takeaways
3. **Data & Statistics** - Notable numbers and what they mean
4. **Recommendations/Actions** - What the document suggests doing
5. **Questions Raised** - What's unclear or needs follow-up
6. **Critique** - Potential weaknesses in arguments or gaps

Document:
[PASTE DOCUMENT]`,
      category: "claude",
      tags: ["analysis", "documents", "productivity"]
    },
    {
      id: "claude-4",
      title: "Technical Explainer",
      description: "Break down complex topics into understandable explanations",
      prompt: `Explain [COMPLEX TOPIC] to me.

My background: [YOUR EXPERIENCE LEVEL]
Why I need to understand this: [CONTEXT]

Please:
1. Start with an analogy to something familiar
2. Build up concepts step by step
3. Use concrete examples at each step
4. Highlight common misconceptions
5. Explain why it matters/practical applications
6. Suggest how to learn more

Check in with me after each major concept.`,
      category: "claude",
      tags: ["learning", "technical", "education"]
    },
    {
      id: "claude-5",
      title: "Decision Framework Builder",
      description: "Create structured frameworks for complex decisions",
      prompt: `Help me make this decision: [DECISION]

Context: [BACKGROUND]
Timeline: [WHEN NEEDED]
Stakeholders: [WHO'S AFFECTED]

Build me a decision framework:
1. **Criteria** - What factors matter most (help me weight them)
2. **Options Analysis** - Pros/cons/risks for each path
3. **Second-order effects** - Downstream consequences
4. **Reversibility** - How easy to change course
5. **Information gaps** - What I should find out before deciding
6. **Recommendation** - Based on what you know, what would you suggest and why`,
      category: "claude",
      tags: ["decisions", "strategy", "analysis"]
    },
    {
      id: "claude-6",
      title: "Contract & Legal Document Review",
      description: "Identify key terms, risks, and negotiation points in contracts",
      prompt: `Review this contract/agreement as if you were my advisor.

I am the: [buyer/seller/employee/contractor]
This is for: [CONTEXT]

Identify:
1. **Key Terms** - Important obligations and rights
2. **Red Flags** - Unusual or concerning clauses
3. **Missing Protections** - Standard clauses that aren't included
4. **Negotiation Points** - What I should push back on
5. **Plain English Summary** - What I'm actually agreeing to
6. **Questions to Ask** - Clarifications needed before signing

Note: This isn't legal advice - recommend consulting a lawyer for important contracts.

Contract:
[PASTE CONTRACT]`,
      category: "claude",
      tags: ["legal", "contracts", "business"]
    },
    {
      id: "claude-7",
      title: "Debate Partner",
      description: "Strengthen your arguments by having Claude argue against you",
      prompt: `I want to strengthen my position on: [YOUR POSITION]

First, I'll share my arguments. Then:
1. **Steel-man the opposition** - Give me the strongest counter-arguments
2. **Identify weaknesses** - Where is my reasoning vulnerable?
3. **Provide evidence** - What data/studies would opponents cite?
4. **Suggest responses** - How can I address each counter-argument?
5. **Rate my position** - On a scale of 1-10, how defensible is it?

My current arguments:
[YOUR ARGUMENTS]`,
      category: "claude",
      tags: ["thinking", "debate", "analysis"]
    },
    {
      id: "claude-8",
      title: "Writing Editor & Coach",
      description: "Get detailed feedback to improve your writing",
      prompt: `Edit and provide feedback on my writing.

Type of writing: [essay/article/story/email/etc]
Goal: [persuade/inform/entertain/etc]
Audience: [WHO'S READING]
Tone I want: [formal/casual/authoritative/etc]

Provide:
1. **Overall Assessment** - First impression and main issues
2. **Structure** - Is the flow logical? Suggested reordering
3. **Clarity** - Confusing sentences, rewritten clearly
4. **Engagement** - Where it's boring, how to fix
5. **Word Choice** - Weak words and stronger alternatives
6. **Final Edit** - The piece with your suggested changes

My writing:
[PASTE YOUR WRITING]`,
      category: "claude",
      tags: ["writing", "editing", "feedback"]
    },
    {
      id: "claude-9",
      title: "Business Strategy Consultant",
      description: "Get strategic analysis and recommendations for business challenges",
      prompt: `Act as a McKinsey consultant analyzing my business challenge.

Business: [DESCRIBE YOUR BUSINESS]
Challenge: [THE PROBLEM/OPPORTUNITY]
Constraints: [BUDGET/TIME/RESOURCES]

Provide:
1. **Situation Analysis** - Key factors at play
2. **Framework** - Apply relevant strategic frameworks (Porter's, SWOT, etc.)
3. **Options** - 3-4 strategic paths forward
4. **Recommendation** - Your suggested approach with rationale
5. **Implementation** - Key steps and priorities
6. **Risks & Mitigations** - What could go wrong and how to prevent it
7. **Metrics** - How to measure success`,
      category: "claude",
      tags: ["strategy", "business", "consulting"]
    },
    {
      id: "claude-10",
      title: "Data Interpretation Assistant",
      description: "Get insights and visualizations suggestions from your data",
      prompt: `Analyze this data and help me understand it.

Context: [WHAT THIS DATA IS / WHERE IT'S FROM]
My goal: [WHAT DECISIONS THIS SHOULD INFORM]

Please:
1. **Summary Statistics** - Key numbers and what they tell us
2. **Patterns & Trends** - What stands out?
3. **Anomalies** - Unexpected values and possible explanations
4. **Correlations** - Relationships between variables
5. **Visualization Recommendations** - Best chart types for this data
6. **Insights** - Actionable conclusions
7. **Caveats** - Limitations of this analysis

Data:
[PASTE YOUR DATA]`,
      category: "claude",
      tags: ["data", "analysis", "insights"]
    }
  ],
  midjourney: [
    {
      id: "mj-1",
      title: "Cinematic Portrait Photography",
      description: "Create stunning movie-quality portrait shots",
      prompt: `Portrait of [SUBJECT DESCRIPTION], cinematic lighting, shot on ARRI Alexa, anamorphic lens flare, shallow depth of field, golden hour, film grain, color graded like [MOVIE REFERENCE], 8k, photorealistic --ar 16:9 --v 6`,
      category: "midjourney",
      tags: ["portrait", "cinematic", "photography"]
    },
    {
      id: "mj-2",
      title: "Product Photography for E-commerce",
      description: "Professional product shots perfect for online stores",
      prompt: `Professional product photography of [PRODUCT], studio lighting, seamless white background, commercial photography, sharp focus, high-end advertising style, soft shadows, 8k resolution, photorealistic, centered composition --ar 1:1 --v 6`,
      category: "midjourney",
      tags: ["product", "ecommerce", "commercial"]
    },
    {
      id: "mj-3",
      title: "Fantasy Book Cover Art",
      description: "Epic fantasy artwork for book covers and posters",
      prompt: `Epic fantasy book cover art, [SCENE DESCRIPTION], dramatic lighting, painted by Greg Rutkowski and Magali Villeneuve, intricate details, volumetric fog, epic scale, rich colors, fantasy illustration, trending on ArtStation --ar 2:3 --v 6`,
      category: "midjourney",
      tags: ["fantasy", "book cover", "illustration"]
    },
    {
      id: "mj-4",
      title: "Modern Logo Design",
      description: "Clean, professional logo concepts",
      prompt: `Minimalist logo design for [BRAND/CONCEPT], vector style, clean lines, modern, professional, simple geometric shapes, flat design, scalable, on white background, graphic design, behance style --v 6`,
      category: "midjourney",
      tags: ["logo", "branding", "design"]
    },
    {
      id: "mj-5",
      title: "Architectural Visualization",
      description: "Photorealistic architectural renders",
      prompt: `Architectural visualization of [BUILDING TYPE], modern architecture, floor-to-ceiling windows, natural lighting, lush landscaping, photorealistic render, Unreal Engine 5, ray tracing, architectural photography, ArchDaily style --ar 16:9 --v 6`,
      category: "midjourney",
      tags: ["architecture", "visualization", "real estate"]
    },
    {
      id: "mj-6",
      title: "Food Photography",
      description: "Mouthwatering food photography for restaurants and blogs",
      prompt: `Professional food photography of [DISH], overhead angle, rustic wooden table, natural window lighting, garnished beautifully, shallow depth of field, food styling, editorial quality, Bon Appetit magazine style, appetizing, 8k --ar 4:5 --v 6`,
      category: "midjourney",
      tags: ["food", "photography", "restaurant"]
    },
    {
      id: "mj-7",
      title: "Children's Book Illustration",
      description: "Whimsical illustrations perfect for kids' books",
      prompt: `Children's book illustration of [SCENE], whimsical style, soft pastel colors, hand-painted watercolor texture, cute characters, storybook illustration, gentle lighting, inspired by Oliver Jeffers and Jon Klassen, heartwarming, full page illustration --ar 3:4 --v 6`,
      category: "midjourney",
      tags: ["illustration", "children", "book"]
    },
    {
      id: "mj-8",
      title: "Sci-Fi Concept Art",
      description: "Futuristic sci-fi environments and vehicles",
      prompt: `Science fiction concept art, [SUBJECT], futuristic, cyberpunk aesthetic, neon lights, detailed mechanical design, atmospheric perspective, concept design for film, matte painting style, by Syd Mead and Simon Stalenhag, cinematic composition --ar 21:9 --v 6`,
      category: "midjourney",
      tags: ["scifi", "concept art", "futuristic"]
    },
    {
      id: "mj-9",
      title: "Fashion Editorial",
      description: "High-fashion photography for magazines",
      prompt: `High fashion editorial photography, model wearing [OUTFIT DESCRIPTION], dramatic pose, studio lighting with colored gels, Vogue magazine style, shot by Mario Testino, avant-garde, striking composition, professional fashion photography --ar 2:3 --v 6`,
      category: "midjourney",
      tags: ["fashion", "editorial", "photography"]
    },
    {
      id: "mj-10",
      title: "Isometric Game Art",
      description: "Detailed isometric illustrations for games and infographics",
      prompt: `Isometric illustration of [SCENE/BUILDING], game art style, vibrant colors, detailed, cute aesthetic, clean lines, pixel-perfect, 3D isometric view, bright lighting, mobile game style, high detail --v 6`,
      category: "midjourney",
      tags: ["isometric", "game art", "illustration"]
    }
  ],
  business: [
    {
      id: "biz-1",
      title: "Profitable Business Idea Generator",
      description: "Generate validated business ideas based on your skills and market trends",
      prompt: `Generate 5 profitable business ideas for me.

My skills: [YOUR SKILLS]
Available capital: [BUDGET]
Time available: [FULL-TIME/SIDE HUSTLE]
Interests: [WHAT YOU ENJOY]

For each idea provide:
1. Business concept (2-3 sentences)
2. Target customer and their pain point
3. Revenue model (how you make money)
4. Startup costs estimate
5. Time to first revenue
6. Scalability potential (1-10)
7. Competition level
8. First 3 action steps to validate`,
      category: "business",
      tags: ["startup", "ideas", "entrepreneurship"]
    },
    {
      id: "biz-2",
      title: "Freelance Rate Calculator & Pitch",
      description: "Calculate your worth and create a compelling service pitch",
      prompt: `Help me price my freelance services and create a pitch.

Service: [WHAT YOU DO]
Experience: [YEARS]
Location: [CITY/COUNTRY]
Target clients: [WHO YOU WANT TO WORK WITH]

Provide:
1. Market rate research (low/mid/high ranges)
2. Recommended hourly rate with justification
3. Project-based pricing strategy
4. Value-based pricing opportunities
5. A compelling 100-word service description
6. 3 packages (basic/standard/premium) with pricing
7. Objection handlers for "too expensive"`,
      category: "business",
      tags: ["freelance", "pricing", "consulting"]
    },
    {
      id: "biz-3",
      title: "Sales Page Copy Generator",
      description: "Create high-converting sales page copy using proven frameworks",
      prompt: `Write sales page copy for my product/service.

Product: [NAME AND DESCRIPTION]
Price: [PRICE]
Target audience: [WHO IT'S FOR]
Main problem it solves: [PAIN POINT]
Key benefits: [TOP 3 BENEFITS]
Proof/results: [TESTIMONIALS, STATS]

Create:
1. Headline (grab attention)
2. Subheadline (clarify the offer)
3. Problem agitation section
4. Solution introduction
5. Benefits with bullet points
6. Social proof section
7. FAQ (5 common objections)
8. CTA with urgency
9. Guarantee statement`,
      category: "business",
      tags: ["copywriting", "sales", "marketing"]
    },
    {
      id: "biz-4",
      title: "Email Marketing Sequence for Launch",
      description: "Complete launch email sequence to maximize sales",
      prompt: `Create a product launch email sequence.

Product: [PRODUCT]
Launch date: [DATE]
Price: [PRICE]
Discount/bonus: [IF ANY]
List size: [APPROXIMATE]

Write these emails:
1. Teaser email (7 days before)
2. Story email (5 days before)
3. Value email (3 days before)
4. Launch email (Day 1)
5. FAQ/Objection email (Day 2)
6. Social proof email (Day 3)
7. Last chance email (Final day)

Include subject lines and send times.`,
      category: "business",
      tags: ["email", "launch", "marketing"]
    },
    {
      id: "biz-5",
      title: "LinkedIn Content Strategy",
      description: "30-day LinkedIn content plan to build authority and generate leads",
      prompt: `Create a 30-day LinkedIn content strategy for me.

My business: [WHAT YOU DO]
Target audience: [WHO YOU HELP]
Goal: [LEADS/AUTHORITY/BOTH]
Posting frequency: [X times per week]

Provide:
1. Content pillars (4-5 themes to rotate)
2. 30 post ideas with hooks (first line)
3. Best posting times
4. Hashtag strategy
5. Engagement strategy (comments, DMs)
6. One viral-style post template
7. CTA strategy (not every post)
8. Metrics to track`,
      category: "business",
      tags: ["linkedin", "social media", "leads"]
    },
    {
      id: "biz-6",
      title: "Passive Income Product Creator",
      description: "Design a digital product you can sell while you sleep",
      prompt: `Help me create a digital product for passive income.

My expertise: [YOUR KNOWLEDGE AREA]
Audience: [WHO WOULD BUY]
Time to create: [HOURS AVAILABLE]
Price goal: [TARGET PRICE]

Design:
1. 3 product ideas with pros/cons
2. Recommended product with justification
3. Detailed outline/table of contents
4. What to include as bonuses
5. Pricing strategy
6. Platform recommendations
7. Marketing angle
8. First week launch checklist`,
      category: "business",
      tags: ["passive income", "digital products", "entrepreneurship"]
    },
    {
      id: "biz-7",
      title: "Proposal & Quote Generator",
      description: "Create professional proposals that win clients",
      prompt: `Write a professional proposal for a potential client.

Client: [CLIENT/COMPANY NAME]
Project: [WHAT THEY NEED]
Their goals: [WHAT SUCCESS LOOKS LIKE]
Budget range: [IF KNOWN]
Timeline: [DEADLINE]

Include:
1. Executive summary
2. Understanding of their needs
3. Proposed solution (detailed)
4. Scope and deliverables
5. Timeline with milestones
6. Investment (pricing with options)
7. Why choose me/us
8. Next steps
9. Terms and conditions`,
      category: "business",
      tags: ["proposals", "clients", "sales"]
    },
    {
      id: "biz-8",
      title: "Niche Website Business Plan",
      description: "Plan a niche content site for affiliate/ad revenue",
      prompt: `Create a niche website business plan.

Niche: [TOPIC AREA]
Monetization: [Affiliate/Ads/Products]
Competition tolerance: [low/medium/high]
Time available: [hours per week]

Provide:
1. Niche validation (search volume, competition)
2. 20 article topic ideas with search intent
3. Site structure recommendation
4. Monetization strategy breakdown
5. Content calendar (first 3 months)
6. SEO strategy
7. Link building approach
8. Revenue projections (6/12/24 months)
9. Tools needed and costs`,
      category: "business",
      tags: ["niche sites", "affiliate", "SEO"]
    },
    {
      id: "biz-9",
      title: "Pitch Deck Outline",
      description: "Create a compelling investor pitch deck structure",
      prompt: `Create a pitch deck outline for my startup.

Company: [NAME]
Problem we solve: [PAIN POINT]
Solution: [YOUR PRODUCT]
Traction: [USERS/REVENUE/GROWTH]
Ask: [HOW MUCH, WHAT FOR]

Create 12 slides:
1. Title slide (hook)
2. Problem (make them feel it)
3. Solution (your answer)
4. How it works
5. Market size (TAM/SAM/SOM)
6. Business model
7. Traction/milestones
8. Competition (why you win)
9. Team
10. Financials
11. Use of funds
12. The ask and vision

Include speaking notes for each.`,
      category: "business",
      tags: ["fundraising", "startup", "investors"]
    },
    {
      id: "biz-10",
      title: "Newsletter Monetization Strategy",
      description: "Turn your email list into a revenue stream",
      prompt: `Create a newsletter monetization strategy.

Newsletter topic: [SUBJECT]
Current subscribers: [NUMBER]
Posting frequency: [HOW OFTEN]
Current revenue: [AMOUNT OR $0]

Develop:
1. 5 monetization streams ranked by potential
2. Sponsorship rate card (what to charge)
3. Sponsor pitch template
4. Premium tier offering design
5. Digital product ideas to sell
6. Affiliate opportunities in this niche
7. Growth strategies to increase value
8. Revenue projections by subscriber count
9. Tech stack recommendations`,
      category: "business",
      tags: ["newsletter", "monetization", "email"]
    }
  ],
  writing: [
    {
      id: "write-1",
      title: "Blog Post Outline Generator",
      description: "Create comprehensive blog post outlines optimized for SEO",
      prompt: `Create a detailed blog post outline.

Topic: [YOUR TOPIC]
Target keyword: [MAIN KEYWORD]
Word count goal: [LENGTH]
Audience: [WHO'S READING]

Include:
1. 5 title options (include keyword naturally)
2. Meta description (155 characters)
3. Introduction hook options
4. H2 and H3 subheadings with hierarchy
5. Key points to cover under each section
6. Where to include examples/data
7. Internal linking opportunities
8. Conclusion with CTA
9. FAQ section (3-5 questions)`,
      category: "writing",
      tags: ["blogging", "SEO", "content"]
    },
    {
      id: "write-2",
      title: "Story Opening Hook Generator",
      description: "Create compelling first paragraphs that hook readers",
      prompt: `Write 5 different opening paragraphs for my story.

Genre: [GENRE]
Main character: [BRIEF DESCRIPTION]
Core conflict: [THE PROBLEM]
Tone: [dark/light/suspenseful/etc]

Create openings using these techniques:
1. In medias res (start in action)
2. Provocative statement
3. Dialogue hook
4. Sensory immersion
5. Mystery/question

Each opening should make readers NEED to continue.`,
      category: "writing",
      tags: ["fiction", "creative writing", "storytelling"]
    },
    {
      id: "write-3",
      title: "Social Media Caption Pack",
      description: "Generate a week's worth of engaging social media content",
      prompt: `Create 7 days of social media content.

Business/Brand: [DESCRIPTION]
Platform: [Instagram/Twitter/LinkedIn]
Goal: [engagement/sales/followers]
Tone: [professional/casual/funny]

For each day provide:
1. Caption (platform-appropriate length)
2. Emoji usage
3. Hashtags (if applicable)
4. Best posting time
5. Engagement question or CTA
6. Content type suggestion (carousel/video/static)

Include a mix of: educational, entertaining, promotional, personal.`,
      category: "writing",
      tags: ["social media", "captions", "content"]
    },
    {
      id: "write-4",
      title: "Email Newsletter Template",
      description: "Engaging newsletter format that gets opens and clicks",
      prompt: `Write a newsletter email for my audience.

Newsletter name: [NAME]
Topic for this issue: [TOPIC]
Audience: [SUBSCRIBERS]
Tone: [friendly/professional/witty]

Include:
1. Subject line (5 options with open-rate predictions)
2. Preview text
3. Greeting
4. Hook/opener (personal touch)
5. Main content (valuable, scannable)
6. One key takeaway
7. Resource or link
8. Personal sign-off
9. P.S. line (important - many read this!)`,
      category: "writing",
      tags: ["email", "newsletter", "marketing"]
    },
    {
      id: "write-5",
      title: "Character Development Worksheet",
      description: "Create deep, believable characters for your stories",
      prompt: `Help me develop a character for my story.

Role in story: [protagonist/antagonist/supporting]
Genre: [GENRE]
Initial concept: [BASIC IDEA]

Create:
1. Full name and nickname
2. Physical description (distinctive details)
3. Background (family, education, key events)
4. Personality traits (3 strengths, 3 flaws)
5. Core motivation (what they want)
6. Secret/hidden aspect
7. Speech pattern (how they talk)
8. Mannerisms (physical habits)
9. Character arc (how they change)
10. Relationship dynamics
11. Memorable quote they would say`,
      category: "writing",
      tags: ["character", "fiction", "creative writing"]
    },
    {
      id: "write-6",
      title: "Press Release Template",
      description: "Professional press release for product launches and announcements",
      prompt: `Write a press release.

Company: [NAME]
Announcement: [WHAT'S NEW]
Date: [WHEN]
Key details: [IMPORTANT FACTS]
Quote from: [SPOKESPERSON AND TITLE]

Format:
1. Headline (active, newsworthy)
2. Subheadline
3. Dateline and lead paragraph (who, what, when, where, why)
4. Supporting paragraphs
5. Quote from company leader
6. Background/boilerplate
7. Media contact information
8. ### to end

Keep it to one page.`,
      category: "writing",
      tags: ["PR", "press release", "business"]
    },
    {
      id: "write-7",
      title: "Dialogue Scene Writer",
      description: "Write realistic dialogue that reveals character and advances plot",
      prompt: `Write a dialogue scene for my story.

Characters involved: [LIST WITH BRIEF DESCRIPTIONS]
Setting: [WHERE THIS HAPPENS]
Purpose of scene: [WHAT NEEDS TO HAPPEN]
Subtext: [WHAT'S UNSAID BUT FELT]
Tone: [tense/romantic/funny/etc]

Requirements:
- Each character has distinct voice
- Include action beats between dialogue
- Show don't tell emotions
- Advance the plot
- Reveal character
- Natural interruptions and pauses`,
      category: "writing",
      tags: ["dialogue", "fiction", "screenwriting"]
    },
    {
      id: "write-8",
      title: "Copywriting Headline Formulas",
      description: "Generate attention-grabbing headlines using proven formulas",
      prompt: `Generate 20 headlines for my [PRODUCT/CONTENT].

Topic: [TOPIC]
Benefit: [MAIN BENEFIT]
Audience: [TARGET READER]
Tone: [urgent/curious/professional]

Use these formulas:
- How to [benefit] without [pain]
- [Number] ways to [achieve desired result]
- Why [common belief] is wrong
- The secret to [desired outcome]
- What [authority figures] don't want you to know
- [Do this] to [get result] in [timeframe]
- Warning: [avoid this mistake]

Rate each headline 1-10 for click potential.`,
      category: "writing",
      tags: ["copywriting", "headlines", "marketing"]
    },
    {
      id: "write-9",
      title: "Book Chapter Summary for Nonfiction",
      description: "Outline nonfiction book chapters with key points",
      prompt: `Help me outline a chapter for my nonfiction book.

Book topic: [OVERALL SUBJECT]
This chapter's focus: [SPECIFIC TOPIC]
Chapter number: [WHERE IN BOOK]
Target reader: [AUDIENCE]
Desired length: [WORD COUNT]

Create:
1. Chapter title options (5)
2. Opening hook/anecdote
3. Key concepts to cover (5-7)
4. Stories/examples to include
5. Data or research to reference
6. Practical exercises or applications
7. Common mistakes/misconceptions
8. Chapter summary
9. Transition to next chapter`,
      category: "writing",
      tags: ["nonfiction", "book writing", "outline"]
    },
    {
      id: "write-10",
      title: "Website Copy Generator",
      description: "Convert features into compelling website copy",
      prompt: `Write website copy for my business.

Business: [WHAT YOU DO]
Target customer: [WHO]
Key differentiator: [WHY YOU]
Tone: [professional/friendly/bold]

Create copy for:
1. Homepage hero (headline + subheadline + CTA)
2. About section (our story in 100 words)
3. Services/Products section (with benefits)
4. How it works (3-step process)
5. Trust signals section
6. FAQ section (5 questions)
7. Final CTA section

Make it scannable with clear hierarchy.`,
      category: "writing",
      tags: ["website", "copywriting", "business"]
    }
  ],
  coding: [
    {
      id: "code-1",
      title: "Code Documentation Generator",
      description: "Generate comprehensive documentation for your code",
      prompt: `Generate documentation for this code.

Language: [LANGUAGE]
Documentation style: [JSDoc/Docstring/TSDoc/etc]

Create:
1. File/module overview
2. Function/method documentation with:
   - Description
   - Parameters with types
   - Return values
   - Exceptions thrown
   - Usage examples
3. Class documentation (if applicable)
4. README section for this component

Code:
\`\`\`
[PASTE YOUR CODE]
\`\`\``,
      category: "coding",
      tags: ["documentation", "comments", "best practices"]
    },
    {
      id: "code-2",
      title: "Unit Test Generator",
      description: "Generate comprehensive unit tests for your code",
      prompt: `Write unit tests for this code.

Language: [LANGUAGE]
Testing framework: [Jest/Pytest/JUnit/etc]
Code to test:
\`\`\`
[PASTE YOUR CODE]
\`\`\`

Generate tests for:
1. Happy path scenarios
2. Edge cases
3. Error handling
4. Boundary conditions
5. Null/undefined inputs

Include:
- Descriptive test names
- Arrange/Act/Assert structure
- Mocking where needed
- Test coverage summary`,
      category: "coding",
      tags: ["testing", "unit tests", "TDD"]
    },
    {
      id: "code-3",
      title: "Code Refactoring Assistant",
      description: "Get suggestions to improve code quality and maintainability",
      prompt: `Refactor this code for better quality.

Language: [LANGUAGE]
Goals: [performance/readability/maintainability/all]

Code:
\`\`\`
[PASTE YOUR CODE]
\`\`\`

Provide:
1. Identified code smells
2. Refactored version
3. Explanation of each change
4. Design patterns that could apply
5. Performance implications
6. Before/after comparison`,
      category: "coding",
      tags: ["refactoring", "clean code", "best practices"]
    },
    {
      id: "code-4",
      title: "API Endpoint Designer",
      description: "Design RESTful API endpoints with documentation",
      prompt: `Design a REST API for [FEATURE/RESOURCE].

Requirements: [WHAT IT NEEDS TO DO]
Authentication: [TYPE]
Framework: [EXPRESS/DJANGO/RAILS/etc]

Provide:
1. Endpoint definitions (method, path, description)
2. Request body schemas
3. Response schemas (success and error)
4. Status codes used
5. Authentication/authorization logic
6. Rate limiting recommendations
7. Example requests and responses
8. OpenAPI/Swagger snippet`,
      category: "coding",
      tags: ["API", "REST", "backend"]
    },
    {
      id: "code-5",
      title: "Database Schema Designer",
      description: "Design efficient database schemas with relationships",
      prompt: `Design a database schema for [APPLICATION/FEATURE].

Database type: [PostgreSQL/MySQL/MongoDB/etc]
Requirements:
[LIST YOUR DATA REQUIREMENTS]

Provide:
1. Table/collection definitions
2. Column types and constraints
3. Primary and foreign keys
4. Indexes for common queries
5. Relationships (1:1, 1:N, N:N)
6. Entity relationship diagram (text-based)
7. Sample queries for common operations
8. Migration script`,
      category: "coding",
      tags: ["database", "SQL", "schema"]
    },
    {
      id: "code-6",
      title: "Regex Pattern Builder",
      description: "Create and explain regex patterns for any use case",
      prompt: `Create a regex pattern for me.

What I need to match: [DESCRIBE PATTERN]
Examples that should match:
[LIST EXAMPLES]
Examples that should NOT match:
[LIST NON-EXAMPLES]
Language: [JS/Python/etc]

Provide:
1. The regex pattern
2. Step-by-step explanation
3. Test cases
4. Common edge cases handled
5. Performance considerations
6. Alternative simpler patterns (if any)`,
      category: "coding",
      tags: ["regex", "patterns", "validation"]
    },
    {
      id: "code-7",
      title: "Code Converter (Language Translation)",
      description: "Convert code from one programming language to another",
      prompt: `Convert this code from [SOURCE LANGUAGE] to [TARGET LANGUAGE].

Source code:
\`\`\`
[PASTE YOUR CODE]
\`\`\`

Requirements:
1. Use idiomatic [TARGET LANGUAGE] patterns
2. Maintain functionality exactly
3. Use equivalent libraries/frameworks
4. Handle language-specific differences
5. Add comments where syntax differs significantly
6. Note any features that don't translate directly`,
      category: "coding",
      tags: ["conversion", "translation", "languages"]
    },
    {
      id: "code-8",
      title: "Security Vulnerability Scanner",
      description: "Identify security issues in your code",
      prompt: `Perform a security review of this code.

Language: [LANGUAGE]
Application type: [web/api/mobile/etc]

Code:
\`\`\`
[PASTE YOUR CODE]
\`\`\`

Check for:
1. OWASP Top 10 vulnerabilities
2. Injection risks (SQL, XSS, Command)
3. Authentication/Authorization issues
4. Data exposure risks
5. Insecure configurations
6. Dependency vulnerabilities (if visible)

For each issue provide:
- Severity (Critical/High/Medium/Low)
- Description
- Location in code
- Fix recommendation
- Secure code example`,
      category: "coding",
      tags: ["security", "vulnerabilities", "OWASP"]
    },
    {
      id: "code-9",
      title: "Git Commit Message Generator",
      description: "Write clear, conventional commit messages",
      prompt: `Write a commit message for these changes.

Convention: [Conventional Commits/Custom/None]
Changes made:
[DESCRIBE YOUR CHANGES]

Diff (if available):
\`\`\`
[PASTE DIFF]
\`\`\`

Provide:
1. Commit message following convention
2. Type (feat/fix/docs/style/refactor/test/chore)
3. Scope (optional)
4. Body (for complex changes)
5. Footer (breaking changes, issue references)
6. Alternative phrasings`,
      category: "coding",
      tags: ["git", "commits", "version control"]
    },
    {
      id: "code-10",
      title: "Algorithm Explainer & Optimizer",
      description: "Understand algorithms and optimize for performance",
      prompt: `Explain and optimize this algorithm.

Code:
\`\`\`
[PASTE YOUR CODE]
\`\`\`

Provide:
1. What this algorithm does (plain English)
2. Step-by-step walkthrough
3. Time complexity (Big O)
4. Space complexity
5. Optimization opportunities
6. Optimized version of the code
7. Trade-offs of the optimization
8. Test cases to verify correctness
9. When NOT to use this approach`,
      category: "coding",
      tags: ["algorithms", "optimization", "performance"]
    }
  ]
};

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts[category] || [];
}

export function getAllPrompts(): Prompt[] {
  return Object.values(prompts).flat();
}

export function getRandomPrompt(category?: string, purpose?: string): Prompt | null {
  let pool: Prompt[];

  if (category && prompts[category]) {
    pool = prompts[category];
  } else {
    pool = getAllPrompts();
  }

  if (purpose) {
    const filtered = pool.filter(p =>
      p.tags.some(tag => tag.toLowerCase().includes(purpose.toLowerCase())) ||
      p.description.toLowerCase().includes(purpose.toLowerCase())
    );
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  if (pool.length === 0) return null;

  return pool[Math.floor(Math.random() * pool.length)];
}
