export const stockAnalysis = {
    "AAPL": {
        executiveSummary: "Apple is the world's premier consumer electronics and software company, generating massive cash flows through a high-margin ecosystem of premium hardware (iPhone, Mac, Wearables) and high-margin recurring Services. Its economic quality is exceptional, driven by unmatched brand loyalty, high switching costs, and a massive installed base of over 2 billion active devices. The primary risk lies in regulatory antitrust pressure and reliance on China for manufacturing. Apple is a mature compounder that acts as a safe-haven asset with shareholder-friendly capital allocation.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Sells premium hardware (iPhone, Mac, iPad, Wearables) and Services (App Store, iCloud, Music). Target: Global mass-market and professionals valuing design, privacy, and ecosystem integration." },
            { title: "2. How They Make Money", content: "Hardware (transactional, ~74%) and Services (recurring/transactional, ~26%). Services margin is double that of hardware, driving profit growth." },
            { title: "3. Revenue Quality", content: "High. Hardware is cyclical but sticky; Services are recurring and highly predictable. Massive installed base ensures long-tail monetization." },
            { title: "4. Cost Structure", content: "High variable costs in hardware (components), low in Services. Gross margins ~45% (Hardware ~36%, Services ~70%). Operating leverage is significant." },
            { title: "5. Capital Intensity", content: "Low. Outsourced manufacturing (Foxconn) keeps CapEx low relative to massive OCF. Negative working capital cycle (suppliers fund operations)." },
            { title: "6. Growth Drivers", content: "Services expansion, Wearables, Emerging Markets (India), and new categories (Vision Pro). Structural shift to higher-margin Services." },
            { title: "7. Competitive Edge", content: "Brand (luxury), Switching Costs (iOS lock-in), Network Effects (iMessage, App Store). Moat is wide and widening." },
            { title: "8. Industry Structure", content: "Oligopoly in smartphones; dominant platform controller in apps. Price setter in hardware." },
            { title: "4. Cost Structure", content: "High gross margins (~70%). Main costs are data center CapEx and R&D. Highly scalable software model." },
            { title: "5. Capital Intensity", content: "Moderate to High due to AI/Cloud infrastructure buildout. However, cash generation vastly exceeds CapEx." },
            { title: "6. Growth Drivers", content: "Azure cloud migration, AI integration (Copilot), Gaming (Activision), Security." },
            { title: "7. Competitive Edge", content: "Switching costs (Enterprise integration), Network effects (LinkedIn, Xbox), Scale (Azure data centers)." },
            { title: "8. Industry Structure", content: "Cloud duopoly (with AWS); Productivity monopoly (Office). Price setter." },
            { title: "9. Unit Economics", content: "High LTV/CAC in enterprise. Net Revenue Retention (NRR) typically >100%." },
            { title: "10. Capital Allocation", content: "Excellent. Balanced mix of R&D, strategic acquisitions (Activision, OpenAI), buybacks, and dividends." },
            { title: "11. Risks", content: "Cloud competition (AWS/Google), AI regulation, cybersecurity breaches." },
            { title: "12. Valuation", content: "Premium (30x+ P/E). Priced for perfection but historically grows into it. Fair for quality." },
            { title: "13. Catalysts", content: "AI monetization (Copilot), Azure market share gains, Gaming synergies." }
        ]
    },
    "NVDA": {
        executiveSummary: "Nvidia is the 'arms dealer' of the AI revolution, holding a near-monopoly on the high-performance GPUs required for training and running AI models. Its CUDA software ecosystem creates a formidable moat. While highly cyclical historically, the current AI capex supercycle has driven explosive, unprecedented growth. It is the most important hardware company in the world right now.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "GPUs for Data Centers, Gaming, Pro Viz, Auto. Customers: Cloud Titans (AWS, Azure, Google), Meta, Enterprises." },
            { title: "2. How They Make Money", content: "Hardware sales (GPUs) and increasing Software/Services. Data Center is now the dominant revenue driver." },
            { title: "3. Revenue Quality", content: "Currently explosive but historically cyclical. Dependent on Cloud Titan CapEx budgets." },
            { title: "4. Cost Structure", content: "Fabless model (outsourced to TSMC). Gross margins exploded to ~75% due to pricing power." },
            { title: "5. Capital Intensity", content: "Low (Fabless). R&D is the main investment. Inventory management is key." },
            { title: "6. Growth Drivers", content: "Generative AI training/inference, Sovereign AI, Digital Twins (Omniverse), Auto." },
            { title: "7. Competitive Edge", content: "CUDA software ecosystem (lock-in), performance lead, pace of innovation (1-year cadence)." },
            { title: "8. Industry Structure", content: "Near-monopoly in AI Training chips (>90% share). Dictates pricing." },
            { title: "9. Unit Economics", content: "Insane pricing power. H100/Blackwell chips sell for massive premiums over BOM." },
            { title: "10. Capital Allocation", content: "Aggressive buybacks recently. Heavy R&D reinvestment to maintain lead." },
            { title: "11. Risks", content: "Customer concentration (Cloud Titans), China restrictions, competition (AMD, custom silicon), cyclical downturn." },
            { title: "12. Valuation", content: "High headline multiples but reasonable on forward growth estimates. Volatile." },
            { title: "13. Catalysts", content: "Blackwell launch, Inference market growth, Sovereign AI adoption." }
        ],
        news: [
            { date: "Recent", title: "Blackwell Demand", content: "Nvidia's next-gen Blackwell chips are reportedly sold out for 12 months due to insane demand from hyperscalers." }
        ]
    },
    "AMZN": {
        executiveSummary: "Amazon is the 'Everything Store' and the cloud infrastructure king. It dominates e-commerce (retail/logistics) and cloud computing (AWS). The retail business operates on razor-thin margins to drive volume and loyalty (Prime), while AWS and Advertising provide the massive profit engines. It is a beast of execution and logistics.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Online Retail, Logistics (FBA), Cloud (AWS), Advertising. Customers: Everyone (Consumers, Sellers, Enterprises)." },
            { title: "2. How They Make Money", content: "Retail (transactional), AWS (usage-based), Advertising (high margin). AWS/Ads subsidize Retail." },
            { title: "3. Revenue Quality", content: "High. Prime is recurring/sticky. AWS is mission-critical. Ads are high-margin." },
            { title: "4. Cost Structure", content: "Retail: High variable/fixed (fulfillment centers). AWS: High CapEx. Margins expanding due to mix shift to Services." },
            { title: "5. Capital Intensity", content: "Very High. Massive investment in logistics network and data centers." },
            { title: "6. Growth Drivers", content: "AWS (AI/Cloud), Advertising, International Retail, Logistics as a Service." },
            { title: "7. Competitive Edge", content: "Scale economies (Logistics), Network Effects (Marketplace), Switching Costs (AWS, Prime)." },
            { title: "8. Industry Structure", content: "E-commerce leader; Cloud leader. Price setter in Cloud/Ads; Price taker/setter in Retail." },
            { title: "9. Unit Economics", content: "Prime members spend significantly more. AWS has high retention. Ads have huge margins." },
            { title: "10. Capital Allocation", content: "Heavy reinvestment (Capex). Started buybacks. Focus on long-term FCF per share." },
            { title: "11. Risks", content: "Antitrust (breakup risk), Cloud competition, Consumer spending slowdown." },
            { title: "12. Valuation", content: "Valued on OCF/FCF. Often looks expensive on P/E. Attractive entry when retail margins compress cyclically." },
            { title: "13. Catalysts", content: "Retail margin expansion (regionalization), AWS AI acceleration, Kuiper satellite launch." }
        ],
        news: [
            { date: "Recent", title: "AWS AI Push", content: "Amazon doubles down on Generative AI in AWS with new chips and Bedrock updates to compete with Azure." }
        ]
    },
    "GOOGL": {
        executiveSummary: "Alphabet (Google) is the gateway to the internet, owning Search, YouTube, Android, and Chrome. It is essentially the world's largest advertising billboard, funded by the most effective money-printing machine in history (Search). It is also a major cloud player and a leader in AI (DeepMind). Regulatory risk is the biggest shadow over its otherwise pristine economics.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Ads (Search, YouTube), Cloud, Software, Hardware. Customers: Advertisers, Enterprises, Consumers." },
            { title: "2. How They Make Money", content: "Advertising (>75%), Cloud subscriptions, Play Store fees. Ad revenue is highly correlated to global GDP." },
            { title: "3. Revenue Quality", content: "Search is extremely durable and high-intent. Cloud is recurring. YouTube is sticky." },
            { title: "4. Cost Structure", content: "Traffic Acquisition Costs (TAC) are a major expense. High R&D and CapEx for AI/Cloud." },
            { title: "5. Capital Intensity", content: "Moderate to High (Data Centers, AI compute). Cash flow easily covers it." },
            { title: "6. Growth Drivers", content: "Cloud, YouTube (Shorts/TV), AI integration in Search, Waymo (Autonomous Driving)." },
            { title: "7. Competitive Edge", content: "Data advantage, Network Effects (YouTube, Android), Brand (Verb status). Search moat is legendary." },
            { title: "8. Industry Structure", content: "Digital Ads Duopoly (with Meta). Search Monopoly (>90%)." },
            { title: "9. Unit Economics", content: "Cost per click (CPC) vs Traffic. Cloud margins improving." },
            { title: "10. Capital Allocation", content: "Massive buybacks. Started dividend. Hoards cash. High R&D spend." },
            { title: "11. Risks", content: "DOJ Antitrust (Search monopoly, Ad tech breakup), AI disrupting Search (ChatGPT), TikTok." },
            { title: "12. Valuation", content: "Often trades at a discount to peers due to regulatory noise. Value play in Big Tech." },
            { title: "13. Catalysts", content: "Gemini AI success, Cloud profitability, Waymo commercialization." }
        ],
        news: [
            { date: "Recent", title: "Gemini Integration", content: "Google aggressively integrating Gemini AI into Workspace and Search to defend its moat." }
        ]
    },
    "META": {
        executiveSummary: "Meta (Facebook) is the world's social connector, owning Facebook, Instagram, WhatsApp, and Messenger. It monetizes attention through a highly efficient advertising engine. Despite pivoting to the 'Metaverse' (Reality Labs), its core 'Family of Apps' remains a cash cow. It has proven incredibly resilient, successfully copying competitors (Stories, Reels) and navigating privacy changes (ATT).",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Ads. Customers: Millions of businesses (SMBs to Enterprises) targeting 3B+ users." },
            { title: "2. How They Make Money", content: "Advertising (~98%). Reality Labs (Headsets) is a money pit currently." },
            { title: "3. Revenue Quality", content: "Cyclical (Ad spend) but essential for SMBs. High ROAS for advertisers keeps them locked in." },
            { title: "4. Cost Structure", content: "Low marginal cost for core apps. Heavy CapEx for AI/Servers. Reality Labs burns billions." },
            { title: "5. Capital Intensity", content: "High recently due to AI infrastructure buildout. Core business is capital light." },
            { title: "6. Growth Drivers", content: "AI-driven ad targeting (Advantage+), Reels monetization, WhatsApp Business, VR/AR (Long term)." },
            { title: "7. Competitive Edge", content: "Network Effects (3B users), Social Graph, Ad targeting data. Hard to leave the ecosystem." },
            { title: "8. Industry Structure", content: "Dominant Social Media player. Duopoly in Digital Ads." },
            { title: "9. Unit Economics", content: "ARPU (Average Revenue Per User) is the key metric. North America ARPU is massive." },
            { title: "10. Capital Allocation", content: "Aggressive buybacks. Initiated dividend. Reality Labs spend is controversial but bold." },
            { title: "11. Risks", content: "Regulation, TikTok competition, Apple privacy changes, Metaverse flop." },
            { title: "12. Valuation", content: "Volatile. Can get very cheap (10x P/E in 2022) or premium. Currently fair." },
            { title: "13. Catalysts", content: "AI ad tools, TikTok ban in US, Reality Labs loss reduction." }
        ]
    },
    "TSLA": {
        executiveSummary: "Tesla is more than a car company; it's an energy and AI robotics company. It led the EV revolution and dominates the market with the Model 3/Y. Its valuation is debated: is it a low-margin automaker or a high-margin software/robotaxi firm? The thesis hinges on Full Self-Driving (FSD) and energy storage growth, as auto margins have compressed due to competition.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "EVs, Energy Storage (Megapack), FSD Software, Optimus (Future). Customers: Consumers, Utilities." },
            { title: "2. How They Make Money", content: "Auto Sales (Cyclical), Energy (Growing), Services/Software (FSD - High Margin)." },
            { title: "3. Revenue Quality", content: "Auto is cyclical and capital intensive. FSD/Energy offer higher quality potential." },
            { title: "4. Cost Structure", content: "Vertical integration (manufacturing, supply chain). Margins under pressure from price cuts." },
            { title: "5. Capital Intensity", content: "High (Gigafactories, Superchargers). But highly efficient vs legacy auto." },
            { title: "6. Growth Drivers", content: "Next-gen vehicle (Model 2), FSD Robotaxi, Energy Storage, Optimus Bot." },
            { title: "7. Competitive Edge", content: "Manufacturing innovation (Gigapress), Supercharger network, Data lead (FSD), Brand." },
            { title: "8. Industry Structure", content: "EV leader but facing intense competition (BYD, Chinese OEMs). Price setter (downwards)." },
            { title: "9. Unit Economics", content: "Auto gross margins dropped from >25% to ~17%. FSD has SaaS-like margins." },
            { title: "10. Capital Allocation", content: "Reinvestment in factories/AI. No buybacks/dividends. Hoards cash." },
            { title: "11. Risks", content: "Key man risk (Elon), Competition, FSD never working, Margin compression." },
            { title: "12. Valuation", content: "Priced as a tech company, not an automaker. Requires FSD success to justify." },
            { title: "13. Catalysts", content: "FSD v12 rollout, Robotaxi unveil, Next-gen platform launch." }
        ],
        news: [
            { date: "Recent", title: "FSD v12", content: "Tesla's FSD v12 rollout shows promise with end-to-end neural nets, critical for the Robotaxi thesis." }
        ]
    },
    "NFLX": {
        executiveSummary: "Netflix won the streaming wars. It is the default entertainment utility for the world. By pivoting to original content and now advertising/gaming, it has re-accelerated growth. Unlike peers losing billions in streaming, Netflix is highly profitable. Its scale allows it to spend more on content while amortizing it over the largest subscriber base.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Streaming Entertainment. Customers: 260M+ Households globally." },
            { title: "2. How They Make Money", content: "Subscriptions (Recurring). Now Advertising (Ad-tier)." },
            { title: "3. Revenue Quality", content: "High. Subscription revenue is predictable. Churn is lowest in industry." },
            { title: "4. Cost Structure", content: "Content spend ($17B/yr) is the main cost. Fixed cost leverage is massive." },
            { title: "5. Capital Intensity", content: "Cash content spend is high, but FCF has turned consistently positive." },
            { title: "6. Growth Drivers", content: "Ad-tier adoption, Password sharing crackdown, Gaming, Live Sports (WWE)." },
            { title: "7. Competitive Edge", content: "Scale (Content budget/User base), Data/Algorithms, Global distribution." },
            { title: "8. Industry Structure", content: "Streaming Leader. Competitors (Disney, Warner) are consolidating/raising prices." },
            { title: "9. Unit Economics", content: "CAC is low (word of mouth). LTV is high. ARM (Avg Revenue per Member) rising." },
            { title: "10. Capital Allocation", content: "Share buybacks returned. Content investment is priority." },
            { title: "11. Risks", content: "Content fatigue, saturation in developed markets, cost of sports rights." },
            { title: "12. Valuation", content: "Premium P/E (~30x). Justified by earnings growth and dominant position." },
            { title: "13. Catalysts", content: "Ad-tier scaling, WWE Raw launch, Price hikes." }
        ]
    },
    "PLTR": {
        executiveSummary: "Palantir builds operating systems for the modern enterprise (Foundry) and government (Gotham). It integrates massive, disparate datasets to enable decision-making. Once seen as a secretive consulting firm, it has proven its software scalability (AIP). It is a play on geopolitical instability and the enterprise need for AI/Data orchestration.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Gotham (Govt), Foundry (Commercial), AIP (AI Platform). Customers: US Govt/Allies, Fortune 500." },
            { title: "2. How They Make Money", content: "SaaS subscriptions + Services. Commercial growing faster than Govt." },
            { title: "3. Revenue Quality", content: "Sticky. Govt contracts are long-term. Commercial retention is improving." },
            { title: "4. Cost Structure", content: "High R&D and Sales/Marketing. Margins expanding rapidly as it scales." },
            { title: "5. Capital Intensity", content: "Low. Software model. FCF rich." },
            { title: "6. Growth Drivers", content: "AIP (Artificial Intelligence Platform) bootcamps, Commercial adoption, Defense spending." },
            { title: "7. Competitive Edge", content: "Ontology (Data modeling), Security clearance, Battle-tested (War zones)." },
            { title: "8. Industry Structure", content: "Niche Data Ops leader. Competing with Snowflake/Databricks/Microsoft." },
            { title: "9. Unit Economics", content: "Net Dollar Retention >100%. Customer count accelerating." },
            { title: "10. Capital Allocation", content: "Buybacks initiated. GAAP profitable. Strong balance sheet (no debt)." },
            { title: "11. Risks", content: "Lumpy Govt contracts, controversial reputation, valuation." },
            { title: "12. Valuation", content: "Very expensive (High P/S). Cult stock status. Needs high growth to justify." },
            { title: "13. Catalysts", content: "S&P 500 inclusion (Done), AIP monetization, NHS contract." }
        ],
        news: [
            { date: "Recent", title: "AIP Bootcamps", content: "Palantir's AIP bootcamps are driving unprecedented commercial customer acquisition speed." }
        ]
    },
    "SNOW": {
        executiveSummary: "Snowflake is the Data Cloud. It allows companies to consolidate data, build applications, and share data securely. It disrupted legacy data warehouses with its separated compute/storage architecture. Growth has slowed from hyper-growth levels, and it faces intense competition from Databricks and Hyperscalers. Management shakeup (CEO change) adds uncertainty.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Data Cloud (Storage/Compute). Customers: Enterprises migrating to cloud data." },
            { title: "2. How They Make Money", content: "Consumption-based (Pay for what you use). Volatile but aligns with value." },
            { title: "3. Revenue Quality", content: "NRR is elite but falling. Consumption model exposes it to optimization cycles." },
            { title: "4. Cost Structure", content: "Gross margins ~75%. High S&M/R&D. Not yet GAAP profitable." },
            { title: "5. Capital Intensity", content: "Low. Software model." },
            { title: "6. Growth Drivers", content: "AI/ML workloads (Cortex), Data Sharing, Unistore." },
            { title: "7. Competitive Edge", content: "Ease of use, Multi-cloud neutrality, Data Sharing Network Effects." },
            { title: "8. Industry Structure", content: "Competitive (Databricks, BigQuery, Redshift). Pricing pressure exists." },
            { title: "9. Unit Economics", content: "NRR ~130% (Best in class, though compressing). High LTV." },
            { title: "10. Capital Allocation", content: "Buybacks. High stock-based compensation (SBC) dilutes shareholders." },
            { title: "11. Risks", content: "Databricks competition, Iceberg tables (open formats), CEO transition." },
            { title: "12. Valuation", content: "Premium but compressed from highs. Still expensive on earnings." },
            { title: "13. Catalysts", content: "New CEO execution, AI product traction, Macro recovery." }
        ]
    },
    "PTON": {
        executiveSummary: "Peloton is a connected fitness company that sells high-end exercise hardware and recurring content subscriptions. Once a pandemic darling, it has suffered from a collapse in demand, inventory mismanagement, and a lack of pricing power. The business is currently in a turnaround phase, attempting to shift from a hardware-centric model to a more scalable software/content platform. It is a high-risk 'fallen angel' with uncertain survival prospects.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Connected fitness hardware (Bike, Tread) and Subscriptions. Target: Affluent health-conscious consumers." },
            { title: "2. How They Make Money", content: "Hardware (One-time, low margin) and Subscriptions (Recurring, high margin)." },
            { title: "3. Revenue Quality", content: "Mixed. Subscriptions are sticky (low churn); Hardware is dead." },
            { title: "4. Cost Structure", content: "High fixed costs. Hardware margins collapsed. Subscription margins healthy (~67%)." },
            { title: "5. Capital Intensity", content: "Reducing. Outsourcing manufacturing. Still inventory heavy." },
            { title: "6. Growth Drivers", content: "App-only subs, Corporate wellness, International. Growth is currently negative." },
            { title: "7. Competitive Edge", content: "Brand/Community (weakened), Content library. Moat proved narrow." },
            { title: "8. Industry Structure", content: "Fragmented. Price taker in hardware." },
            { title: "9. Unit Economics", content: "CAC spiked. LTV under pressure. Payback period extended." },
            { title: "10. Capital Allocation", content: "Cost cutting is the priority. Reinvestment in app." },
            { title: "11. Risks", content: "Bankruptcy risk, Irrelevance, Competition." },
            { title: "12. Valuation", content: "Distressed. Trading at a fraction of revenue." },
            { title: "13. Catalysts", content: "Buyout target, Successful turnaround." }
        ]
    },
    "ZM": {
        executiveSummary: "Zoom became a verb during the pandemic. It offers the most reliable video conferencing experience. However, it faces an existential threat from Microsoft Teams, which is bundled for free with Office. Zoom is pivoting to a platform play (Phone, Contact Center, AI) to survive.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Video Meetings, Phone, Contact Center. Customers: Enterprises, SMBs." },
            { title: "2. How They Make Money", content: "SaaS Subscriptions (Freemium model)." },
            { title: "3. Revenue Quality", content: "Recurring. Enterprise churn is low; Online churn is high." },
            { title: "4. Cost Structure", content: "High Gross Margins (~75-80%). Highly efficient operations." },
            { title: "5. Capital Intensity", content: "Low. Software model. Massive cash pile." },
            { title: "6. Growth Drivers", content: "Zoom Phone, Contact Center, AI Companion (upsell)." },
            { title: "7. Competitive Edge", content: "Reliability, Ease of use, Brand. But Teams is 'good enough' and free." },
            { title: "8. Industry Structure", content: "Commoditized Video. Teams is the 800lb gorilla." },
            { title: "9. Unit Economics", content: "Enterprise NRR stabilizing. Online churn is the drag." },
            { title: "10. Capital Allocation", content: "Aggressive buybacks. Hoarding cash ($7B+). M&A potential." },
            { title: "11. Risks", content: "Microsoft Teams bundling, commoditization of video." },
            { title: "12. Valuation", content: "Value territory (Low P/E, High FCF yield). Priced for no growth." },
            { title: "13. Catalysts", content: "Re-acceleration via new products, M&A, Buybacks." }
        ]
    },
    "PYPL": {
        executiveSummary: "PayPal is a fintech giant (PayPal, Venmo, Braintree) processing trillions in payments. It lost its way due to lack of innovation and intense competition (Apple Pay, Stripe). New management is focused on 'profitable growth', unbranded processing (Braintree), and monetizing Venmo. It is a 'show me' turnaround story trading at a value multiple.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Digital Wallet, Payment Processing (Braintree). Customers: Merchants & Consumers." },
            { title: "2. How They Make Money", content: "Transaction fees (Take rate). Value-added services." },
            { title: "3. Revenue Quality", content: "Transaction-based. Recurring in nature but dependent on e-comm volume." },
            { title: "4. Cost Structure", content: "Transaction expense (funding costs) is key. Margins compressed by Braintree mix." },
            { title: "5. Capital Intensity", content: "Low. Tech platform." },
            { title: "6. Growth Drivers", content: "Braintree (Unbranded), Venmo monetization, Fastlane (Checkout)." },
            { title: "7. Competitive Edge", content: "Two-sided network (Merchants/Consumers), Data, Trust. Moat eroding vs Apple Pay." },
            { title: "8. Industry Structure", content: "Highly competitive (Adyen, Stripe, Apple, Block). Commoditizing." },
            { title: "9. Unit Economics", content: "Active accounts dropping (shedding low quality), but TPV per user rising." },
            { title: "10. Capital Allocation", content: "Aggressive buybacks. Focus on FCF." },
            { title: "11. Risks", content: "Apple Pay market share, Margin compression, commoditization." },
            { title: "12. Valuation", content: "Cheap (Low P/E). Market prices it as a declining legacy player." },
            { title: "13. Catalysts", content: "Fastlane adoption, Margin stabilization, Venmo profits." }
        ]
    },
    "SQ": {
        executiveSummary: "Block (Square) is an ecosystem of two ecosystems: Square (Merchants) and Cash App (Consumers). It aims to bank the unbanked and simplify commerce. While innovative, it has struggled with focus and profitability. The 'Rule of 40' focus by Jack Dorsey is driving a new discipline, cutting costs and integrating the ecosystems (Afterpay).",
        points: [
            { title: "1. What They Sell and Who Buys", content: "POS Hardware/Software (Merchants), P2P/Banking (Consumers). Customers: SMBs, Gen Z." },
            { title: "2. How They Make Money", content: "Transaction fees, Subscriptions (SaaS), Instant Transfer fees, Bitcoin trading." },
            { title: "3. Revenue Quality", content: "Mixed. SaaS is high quality; Bitcoin is low margin/volatile." },
            { title: "4. Cost Structure", content: "High product dev costs. Focus now on efficiency and GAAP profitability." },
            { title: "5. Capital Intensity", content: "Moderate (Hardware inventory). Software is light." },
            { title: "6. Growth Drivers", content: "Cash App banking, Upmarket move for Square, Afterpay integration." },
            { title: "7. Competitive Edge", content: "Ecosystem integration (Merchant + Consumer), Brand, Design. Switching costs." },
            { title: "8. Industry Structure", content: "Competitive (Clover, Toast, PayPal, Venmo)." },
            { title: "9. Unit Economics", content: "Cash App CAC is incredibly low ($10). LTV growing with banking adoption." },
            { title: "10. Capital Allocation", content: "Buybacks initiated. Capped employee count. Bitcoin investment (controversial)." },
            { title: "11. Risks", content: "Regulation (CFPB), macro impact on SMBs/low-income consumers." },
            { title: "12. Valuation", content: "Reasonable on Gross Profit multiples. Volatile." },
            { title: "13. Catalysts", content: "GAAP profitability, Banking license?, Cash App Pay adoption." }
        ]
    },
    "SHOP": {
        executiveSummary: "Shopify is the operating system for e-commerce. It empowers merchants to sell anywhere (Online, Social, POS) while retaining their brand. It successfully divested its logistics arm to focus on high-margin software. It is the definitive #2 in US e-commerce behind Amazon, but as a platform, not a retailer.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "E-commerce platform, Payments, Capital. Customers: Solopreneurs to Enterprise (Plus)." },
            { title: "2. How They Make Money", content: "Subscriptions (SaaS) and Merchant Solutions (Payments/Transaction fees)." },
            { title: "3. Revenue Quality", content: "High. Subscriptions are recurring. Payments grow with GMV (Gross Merchandise Volume)." },
            { title: "4. Cost Structure", content: "Improved significantly after selling Logistics. High R&D/S&M." },
            { title: "5. Capital Intensity", content: "Low (now that logistics is gone). Pure software model." },
            { title: "6. Growth Drivers", content: "International, Enterprise (Plus), B2B, Offline (POS)." },
            { title: "7. Competitive Edge", content: "Ecosystem/App Store, Switching costs, Scale. 'Antifragile' (grows with e-comm)." },
            { title: "8. Industry Structure", content: "Dominant independent platform. Competing with BigCommerce, Salesforce, Woo." },
            { title: "9. Unit Economics", content: "Attach rate of payments is high. Plus merchants have high LTV." },
            { title: "10. Capital Allocation", content: "Smart pivot away from logistics. FCF positive." },
            { title: "11. Risks", content: "Consumer spending slowdown, Take rate pressure." },
            { title: "12. Valuation", content: "Premium. Priced for consistent high growth." },
            { title: "13. Catalysts", content: "FCF margin expansion, Enterprise wins." }
        ]
    },
    "ROKU": {
        executiveSummary: "Roku is the leading TV streaming platform in the US. It acts as the gatekeeper to the living room, aggregating content from Netflix, Disney, etc. It monetizes through ads and distribution fees. While hardware is sold at zero margin to acquire users, the platform business is high margin. It faces stiff competition from Big Tech (Google, Amazon) in the OS wars.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Streaming Players, TV OS, Ads. Customers: Consumers, Advertisers, Content Publishers." },
            { title: "2. How They Make Money", content: "Platform (Ads, Rev Share) - High Margin. Devices - Zero/Negative Margin." },
            { title: "3. Revenue Quality", content: "Ad revenue is cyclical. Account growth is steady." },
            { title: "4. Cost Structure", content: "High R&D. Platform gross margins ~50-60%." },
            { title: "5. Capital Intensity", content: "Low. Hardware is outsourced." },
            { title: "6. Growth Drivers", content: "International expansion, Roku Channel (FAST), Ad tech." },
            { title: "7. Competitive Edge", content: "First mover, Neutrality (Switzerland of streaming), OS ease of use." },
            { title: "8. Industry Structure", content: "Battle of OS (Google TV, Fire TV, Samsung). Roku leads US but lags globally." },
            { title: "9. Unit Economics", content: "ARPU is key metric. Growing but slowing." },
            { title: "10. Capital Allocation", content: "Focus on FCF positivity. Cost cutting." },
            { title: "11. Risks", content: "Commoditization of OS, Loss of neutrality, Ad market slump." },
            { title: "12. Valuation", content: "Depressed. Market skeptical of long-term moat vs Big Tech." },
            { title: "13. Catalysts", content: "Ad market recovery, International breakout, M&A target?" }
        ]
    },
    "TDOC": {
        executiveSummary: "Teladoc Health pioneered virtual care (telemedicine). It grew explosively during COVID but crashed due to massive losses (Livongo write-off) and commoditization. It is now a 'fallen angel' trying to prove that integrated virtual care (Primary care + Chronic condition management + Mental health) creates value over simple urgent care video calls.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Virtual Care (General Med, Mental Health, Chronic). Customers: Health Plans, Employers." },
            { title: "2. How They Make Money", content: "Access Fees (PMPM - Per Member Per Month) and Visit Fees." },
            { title: "3. Revenue Quality", content: "PMPM is recurring but under pricing pressure. Visit fees are seasonal." },
            { title: "4. Cost Structure", content: "High marketing/sales. Gross margins ~65-70%." },
            { title: "5. Capital Intensity", content: "Low. Software/Network." },
            { title: "6. Growth Drivers", content: "BetterHelp (Mental Health), Chronic Care cross-sell." },
            { title: "7. Competitive Edge", content: "Scale, Integrated suite. Moat is weak (low barriers to entry)." },
            { title: "8. Industry Structure", content: "Commoditized. Amazon, Retailers (Walmart), and Health systems entering." },
            { title: "9. Unit Economics", content: "Customer acquisition costs high in D2C (BetterHelp). Churn risk." },
            { title: "10. Capital Allocation", content: "Disastrous Livongo acquisition ($18B) destroyed value. New CEO focus on efficiency." },
            { title: "11. Risks", content: "Pricing pressure, competition, saturation." },
            { title: "12. Valuation", content: "Deep value/Distressed. Trading near cash." },
            { title: "13. Catalysts", content: "Turnaround execution, Profitability, Private Equity buyout?" }
        ]
    },
    "SE": {
        executiveSummary: "Sea Limited is the 'Tencent + Alibaba' of Southeast Asia. It operates Garena (Gaming - Free Fire), Shopee (E-commerce), and SeaMoney (Fintech). It proved it could turn profitable by aggressively cutting costs, winning the e-commerce war against Lazada and TikTok Shop. It is a volatile emerging market proxy with high growth potential.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Mobile Games, Online Shopping, Digital Banking. Customers: SE Asia, Brazil." },
            { title: "2. How They Make Money", content: "Gaming (Virtual items), E-comm (Commissions/Ads), Fintech (Interest/Fees)." },
            { title: "3. Revenue Quality", content: "Gaming is volatile (hit driven). E-comm is improving. Fintech is high margin." },
            { title: "4. Cost Structure", content: "Logistics costs in Shopee. Marketing wars with TikTok. Now profitable." },
            { title: "5. Capital Intensity", content: "Moderate (Logistics). Gaming is cash cow." },
            { title: "6. Growth Drivers", content: "Shopee Live (Live commerce), Fintech adoption, Free Fire relaunch in India." },
            { title: "7. Competitive Edge", content: "Scale (Shopee is #1), Local logistics, Ecosystem synergy." },
            { title: "8. Industry Structure", content: "Duopoly/Oligopoly in SE Asia. Intense competition from TikTok." },
            { title: "9. Unit Economics", content: "Shopee EBITDA positive. Fintech profitable." },
            { title: "10. Capital Allocation", content: "Hoards cash. Pivoted from growth-at-all-costs to profit." },
            { title: "11. Risks", content: "TikTok Shop competition, Free Fire decline, Geopolitics." },
            { title: "12. Valuation", content: "Reasonable for growth. Volatile." },
            { title: "13. Catalysts", content: "E-comm margin expansion, Gaming stabilization." }
        ]
    },
    "CRWD": {
        executiveSummary: "CrowdStrike is the leader in cloud-native endpoint security. Its Falcon platform uses AI to detect threats across millions of devices, creating a network effect where one customer's protection strengthens all. Despite a high-profile outage in 2024, its stickiness and consolidation capabilities (replacing legacy vendors) keep it as a top-tier cybersecurity holding.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Endpoint Security, Cloud Security, Identity. Customers: Enterprises globally." },
            { title: "2. How They Make Money", content: "SaaS Subscriptions (Module based)." },
            { title: "3. Revenue Quality", content: "High. Recurring. Security is non-discretionary." },
            { title: "4. Cost Structure", content: "High Gross Margins (~75%+). S&M heavy but efficient." },
            { title: "5. Capital Intensity", content: "Low. Software." },
            { title: "6. Growth Drivers", content: "Module adoption (Cross-sell), Cloud Security, Identity, Next-Gen SIEM." },
            { title: "7. Competitive Edge", content: "Single Agent architecture, Data scale (Threat Graph), Network effects." },
            { title: "8. Industry Structure", content: "Fragmented but consolidating. CrowdStrike is a 'platform' winner." },
            { title: "9. Unit Economics", content: "Magic Number > 1.0. Rule of 40 elite." },
            { title: "10. Capital Allocation", content: "Reinvestment in R&D/Sales. Acquisitions (Humio)." },
            { title: "11. Risks", content: "Reputation (Outage fallout), Microsoft competition, Valuation." },
            { title: "12. Valuation", content: "Premium. Best-in-class asset priced accordingly." },
            { title: "13. Catalysts", content: "Platform consolidation, AI security tailwinds." }
        ]
    },
    "DDOG": {
        executiveSummary: "Datadog is the monitoring and observability platform for the cloud era. It breaks down silos between Dev, Ops, and Security teams. It is essential for any company undergoing digital transformation. Its 'land and expand' model is highly effective, with customers constantly adding more products.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Observability (Metrics, Logs, Traces), Security. Customers: Developers, IT Ops." },
            { title: "2. How They Make Money", content: "SaaS Subscriptions (Usage based)." },
            { title: "3. Revenue Quality", content: "High. Usage grows with customer cloud adoption." },
            { title: "4. Cost Structure", content: "High Gross Margins (~80%). Efficient GTM." },
            { title: "5. Capital Intensity", content: "Low." },
            { title: "6. Growth Drivers", content: "Cloud migration, AI monitoring, Security product expansion." },
            { title: "7. Competitive Edge", content: "Unified platform (Single pane of glass), Ease of use, 400+ integrations." },
            { title: "8. Industry Structure", content: "Competitive (Dynatrace, New Relic, Splunk). Datadog taking share." },
            { title: "9. Unit Economics", content: "High NRR (>115%). Customers with 4+ products rising." },
            { title: "10. Capital Allocation", content: "R&D focus. Profitable (FCF)." },
            { title: "11. Risks", content: "Cloud optimization (cost cutting by customers), Competition." },
            { title: "12. Valuation", content: "Premium. High growth expectations baked in." },
            { title: "13. Catalysts", content: "AI workload monitoring, Security adoption." }
        ]
    },
    "NET": {
        executiveSummary: "Cloudflare is building a better internet. It provides security, performance, and reliability services for websites and apps. It has a massive free tier funnel that feeds its enterprise sales. Its 'Workers' platform positions it as a key player in Edge Computing and AI inference. It is a long-term infrastructure play.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "CDN, DDoS Protection, Zero Trust, Edge Compute. Customers: Everyone." },
            { title: "2. How They Make Money", content: "SaaS Subscriptions (Pay-as-you-go & Enterprise contracts)." },
            { title: "3. Revenue Quality", content: "High. Critical infrastructure." },
            { title: "4. Cost Structure", content: "High Gross Margins (~75%+). Network CapEx is efficient." },
            { title: "5. Capital Intensity", content: "Moderate (Global network buildout). But highly efficient." },
            { title: "6. Growth Drivers", content: "Zero Trust security, Workers (Serverless), AI inference at the edge." },
            { title: "7. Competitive Edge", content: "Global Network (within 50ms of 95% of population), Free tier scale, Innovation pace." },
            { title: "8. Industry Structure", content: "Competing with Hyperscalers (AWS) and Point solutions (Zscaler)." },
            { title: "9. Unit Economics", content: "Enterprise customer growth is strong. NRR ~115%." },
            { title: "10. Capital Allocation", content: "Heavy R&D. Network expansion." },
            { title: "11. Risks", content: "Go-to-market execution, Pricing pressure." },
            { title: "12. Valuation", content: "Very Premium. Priced for long-term dominance." },
            { title: "13. Catalysts", content: "Serverless AI adoption, SASE market share gains." }
        ]
    },
    "MNST": {
        executiveSummary: "Monster Beverage is the best performing stock of the last 30 years. It dominates the energy drink market alongside Red Bull. It uses an asset-light model (outsourcing manufacturing and using Coca-Cola's distribution network) to generate insane returns on capital. It is a master of brand marketing and innovation.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Energy Drinks (Monster, Reign, Bang). Customers: Young adults, Gamers, Blue collar." },
            { title: "2. How They Make Money", content: "Selling concentrate/cases to bottlers (Coca-Cola system)." },
            { title: "3. Revenue Quality", content: "High. Consumable, habitual purchase. Recession resistant." },
            { title: "4. Cost Structure", content: "Asset light. Main costs are ingredients (aluminum, sugar) and marketing." },
            { title: "5. Capital Intensity", content: "Extremely Low. High FCF conversion." },
            { title: "6. Growth Drivers", content: "International expansion, Alcohol (The Beast Unleashed), Price increases." },
            { title: "7. Competitive Edge", content: "Brand, Distribution (Coke partnership is the moat), Innovation." },
            { title: "8. Industry Structure", content: "Duopoly (Monster/Red Bull). Rational pricing." },
            { title: "9. Unit Economics", content: "High margins per case. Volume driven." },
            { title: "10. Capital Allocation", content: "Share buybacks. Strategic acquisitions (Bang, CANarchy)." },
            { title: "11. Risks", content: "Health regulation, Input cost inflation, Celcius competition." },
            { title: "12. Valuation", content: "Premium consumer staple (30x P/E). Quality compounder." },
            { title: "13. Catalysts", content: "International growth, Alcohol segment success." }
        ]
    },
    "COST": {
        executiveSummary: "Costco is a membership warehouse club that sells high-quality goods at near-zero margins, making its profit almost entirely from membership fees. Its moat is its 'economies of scale shared with the customer'. It creates a virtuous cycle: lower prices -> more members -> more volume -> lower prices. It is Amazon-proof retail.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Everything (Bulk). Customers: Affluent families, Small businesses." },
            { title: "2. How They Make Money", content: "Membership Fees (~70% of Op Income). Goods sold at breakeven." },
            { title: "3. Revenue Quality", content: "Elite. Membership renewal rate >90%. Highly predictable." },
            { title: "4. Cost Structure", content: "Ultra-efficient. No frills. High labor productivity (pays well)." },
            { title: "5. Capital Intensity", content: "Moderate (Land/Warehouses). Owns most real estate." },
            { title: "6. Growth Drivers", content: "New store openings (International), E-commerce (slowly), Membership fee hikes." },
            { title: "7. Competitive Edge", content: "Price leadership, Trust (Kirkland Signature), Treasure Hunt experience." },
            { title: "8. Industry Structure", content: "Dominant Warehouse Club. Competing with Sam's Club, Amazon." },
            { title: "9. Unit Economics", content: "Negative working capital (sells goods before paying suppliers)." },
            { title: "10. Capital Allocation", content: "Special Dividends. Slow/steady expansion. Conservative." },
            { title: "11. Risks", content: "Slow e-commerce adoption, saturation in US." },
            { title: "12. Valuation", content: "Very Premium (40x+ P/E). Cult stock. Rarely cheap." },
            { title: "13. Catalysts", content: "Membership fee increase (Periodic), Special dividend." }
        ]
    },
    "LLY": {
        executiveSummary: "Eli Lilly is a pharmaceutical titan leading the two biggest trends in healthcare: Obesity (GLP-1s like Zepbound) and Alzheimer's (Donanemab). It has the most valuable pipeline in the industry. It has transformed from a boring drug co to a high-growth mega-cap driven by insatiable demand for weight loss drugs.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Drugs (Mounjaro, Zepbound, Verzenio). Customers: Patients, Insurers, Governments." },
            { title: "2. How They Make Money", content: "Drug sales (Patent protected)." },
            { title: "3. Revenue Quality", content: "High during patent life. GLP-1s are chronic (lifetime) treatments." },
            { title: "4. Cost Structure", content: "High R&D. High Manufacturing (scaling supply is the bottleneck)." },
            { title: "5. Capital Intensity", content: "High currently (building factories for GLP-1 supply)." },
            { title: "6. Growth Drivers", content: "Obesity/Diabetes (GLP-1), Alzheimer's, Oncology." },
            { title: "7. Competitive Edge", content: "IP (Patents), R&D engine, Duopoly in Obesity (with Novo Nordisk)." },
            { title: "8. Industry Structure", content: "Oligopoly. High barriers to entry (FDA)." },
            { title: "9. Unit Economics", content: "Gross margins >75%. Pricing power is high but scrutinized." },
            { title: "10. Capital Allocation", content: "R&D, Dividends, Manufacturing CapEx." },
            { title: "11. Risks", content: "Drug pricing legislation, Patent cliffs, Competition." },
            { title: "12. Valuation", content: "Premium. Priced for perfection." },
            { title: "13. Catalysts", content: "Oral GLP-1 data, Donanemab approval." }
        ]
    },
    "V": {
        executiveSummary: "Visa is the world's largest payment network. It is a toll booth on the global economy. It processes trillions of dollars and takes a tiny cut of every transaction. It is a duopoly with Mastercard and enjoys some of the highest margins in the business world.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Payment Network. Customers: Banks, Merchants, Consumers." },
            { title: "2. How They Make Money", content: "Service fees, Data processing fees, International transaction fees." },
            { title: "3. Revenue Quality", content: "Elite. Recurring volume-based revenue." },
            { title: "4. Cost Structure", content: "Fixed costs. Incremental transaction cost is near zero. Operating margins >65%." },
            { title: "5. Capital Intensity", content: "Extremely Low. Tech infrastructure." },
            { title: "6. Growth Drivers", content: "Cash-to-card shift (Emerging markets), B2B payments, Value added services." },
            { title: "7. Competitive Edge", content: "Network Effects (Ubiquity), Trust, Regulation. Duopoly with Mastercard." },
            { title: "8. Industry Structure", content: "Duopoly. High barriers to entry." },
            { title: "9. Unit Economics", content: "Insane margins." },
            { title: "10. Capital Allocation", content: "Buybacks and Dividends. Cash machine." },
            { title: "11. Risks", content: "Regulation (Interchange fees), FedNow/Real-time payments disruption." },
            { title: "12. Valuation", content: "Premium (25-30x P/E). Safe compounder." },
            { title: "13. Catalysts", content: "Cross-border travel recovery, B2B flows." }
        ]
    },
    "MA": {
        executiveSummary: "Mastercard is the Pepsi to Visa's Coke. It shares the same incredible duopoly economics: high margins, no credit risk, and secular tailwinds. It has been slightly more aggressive in services and new payment flows (B2B) than Visa.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Payment Network. Customers: Banks, Fintechs." },
            { title: "2. How They Make Money", content: "Assessment fees (% of volume), Transaction fees." },
            { title: "3. Revenue Quality", content: "Elite. Recurring volume." },
            { title: "4. Cost Structure", content: "Fixed. Op Margins >55%." },
            { title: "5. Capital Intensity", content: "Low." },
            { title: "6. Growth Drivers", content: "Digital identity, Cybersecurity services, B2B." },
            { title: "7. Competitive Edge", content: "Network Effects. 3B+ cards issued." },
            { title: "8. Industry Structure", content: "Duopoly." },
            { title: "9. Unit Economics", content: "High margin." },
            { title: "10. Capital Allocation", content: "Buybacks/Dividends. Strategic M&A (Services)." },
            { title: "11. Risks", content: "Regulation, Competition from local networks." },
            { title: "12. Valuation", content: "Premium. Often trades at slight premium to Visa due to faster growth." },
            { title: "13. Catalysts", content: "Services revenue expansion." }
        ]
    },
    "AMD": {
        executiveSummary: "AMD is the only company successfully fighting a two-front war against Intel (CPUs) and Nvidia (GPUs). Under CEO Lisa Su, it executed one of the greatest turnarounds in tech history. It is now a formidable data center player with its EPYC chips and MI300 AI accelerators. It is the 'second source' for AI chips.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "CPUs (Ryzen/EPYC), GPUs (Radeon/Instinct), FPGAs (Xilinx). Customers: Cloud, PC OEMs, Gamers." },
            { title: "2. How They Make Money", content: "Chip sales. Data Center is the profit engine." },
            { title: "3. Revenue Quality", content: "Cyclical (PC/Gaming) but Data Center is secular growth." },
            { title: "4. Cost Structure", content: "Fabless (TSMC). Gross margins ~50% (lower than Nvidia)." },
            { title: "5. Capital Intensity", content: "Low (Fabless). R&D heavy." },
            { title: "6. Growth Drivers", content: "AI Chips (MI300), Server market share gains from Intel." },
            { title: "7. Competitive Edge", content: "Chiplet architecture, Xilinx integration, 'Good enough' alternative to Nvidia." },
            { title: "8. Industry Structure", content: "Duopoly in x86 CPUs. Challenger in AI GPUs." },
            { title: "9. Unit Economics", content: "ASP rising with Data Center mix." },
            { title: "10. Capital Allocation", content: "Buybacks. Xilinx acquisition was transformative." },
            { title: "11. Risks", content: "Nvidia dominance, Intel resurgence, PC slump." },
            { title: "12. Valuation", content: "High P/E. Bet on AI market share capture." },
            { title: "13. Catalysts", content: "MI300 ramp, Intel manufacturing stumbles." }
        ]
    },
    "KO": {
        executiveSummary: "Coca-Cola is the world's most recognizable brand. It is a marketing and distribution machine. It doesn't bottle the soda; it sells the syrup (concentrate) to bottlers, keeping margins high and capital intensity low. It is a slow-growth, high-yield bond proxy.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Beverages (Coke, Sprite, Smartwater). Customers: The world." },
            { title: "2. How They Make Money", content: "Concentrate sales (Syrup). Marketing services." },
            { title: "3. Revenue Quality", content: "High. Habitual consumption." },
            { title: "4. Cost Structure", content: "Marketing is the biggest cost. Op Margins ~30%." },
            { title: "5. Capital Intensity", content: "Low (Asset light model)." },
            { title: "6. Growth Drivers", content: "Pricing power, Emerging markets, Coffee (Costa)." },
            { title: "7. Competitive Edge", content: "Brand, Distribution network (unmatched)." },
            { title: "8. Industry Structure", content: "Duopoly (with Pepsi). Rational pricing." },
            { title: "9. Unit Economics", content: "Stable." },
            { title: "10. Capital Allocation", content: "Dividends (King). Buybacks." },
            { title: "11. Risks", content: "Health trends (Sugar), GLP-1 impact?" },
            { title: "12. Valuation", content: "Premium staple (20-25x P/E). Safe." },
            { title: "13. Catalysts", content: "Emerging market growth." }
        ]
    },
    "MCD": {
        executiveSummary: "McDonald's is a real estate company that sells burgers. It owns the land and leases it to franchisees, collecting rent and royalties. This makes it incredibly stable and profitable. It is the most resilient restaurant chain in the world.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Fast Food. Customers: Value-seeking consumers." },
            { title: "2. How They Make Money", content: "Rent + Royalties from Franchisees (~95% of stores)." },
            { title: "3. Revenue Quality", content: "High. Rent is fixed/contractual. Royalties are % of sales." },
            { title: "4. Cost Structure", content: "Low. Franchisees bear the operating costs." },
            { title: "5. Capital Intensity", content: "Moderate (Buying land). But high return." },
            { title: "6. Growth Drivers", content: "New unit openings, Digital (App), Chicken." },
            { title: "7. Competitive Edge", content: "Real Estate portfolio, Scale, Brand, Supply chain." },
            { title: "8. Industry Structure", content: "Leader in QSR. Price setter." },
            { title: "9. Unit Economics", content: "Best in class cash on cash returns for franchisees." },
            { title: "10. Capital Allocation", content: "Dividends/Buybacks. Dividend Aristocrat." },
            { title: "11. Risks", content: "Health trends, GLP-1s, Inflation pricing out low-end consumers." },
            { title: "12. Valuation", content: "Premium (25x P/E). Bond proxy." },
            { title: "13. Catalysts", content: "CosMc's spin-off concept? Digital loyalty." }
        ]
    },
    "NKE": {
        executiveSummary: "Nike is the dominant athletic apparel brand. It is a marketing powerhouse built on athlete endorsements. Recently, it has stumbled by cutting wholesale partners too aggressively to go Direct-to-Consumer (DTC), losing shelf space to competitors like Hoka and On. It is in a turnaround phase to rediscover its innovation mojo.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Shoes, Apparel. Customers: Athletes, Fashion consumers." },
            { title: "2. How They Make Money", content: "Wholesale and DTC sales." },
            { title: "3. Revenue Quality", content: "Discretionary. Cyclical." },
            { title: "4. Cost Structure", content: "Marketing heavy. Supply chain costs." },
            { title: "5. Capital Intensity", content: "Low (Outsourced manufacturing)." },
            { title: "6. Growth Drivers", content: "China recovery, Innovation (New running tech), Women's." },
            { title: "7. Competitive Edge", content: "Brand (Swoosh), Scale, Athlete roster." },
            { title: "8. Industry Structure", content: "Leader but losing share to niche players." },
            { title: "9. Unit Economics", content: "DTC has higher gross margin but higher operating cost." },
            { title: "10. Capital Allocation", content: "Buybacks/Dividends." },
            { title: "11. Risks", content: "Competition (Hoka/On), China slowdown, Lack of innovation." },
            { title: "12. Valuation", content: "Compressed. Turnaround play." },
            { title: "13. Catalysts", content: "Olympics marketing, New product cycle." }
        ]
    },
    "MELI": {
        executiveSummary: "MercadoLibre is the 'Amazon + PayPal' of Latin America. It dominates e-commerce and fintech (Mercado Pago) in Brazil, Mexico, and Argentina. It has built an impenetrable logistics network that competitors cannot match. Despite operating in volatile economies, it delivers consistent hyper-growth.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "E-commerce marketplace, Fintech, Logistics. Customers: LatAm consumers." },
            { title: "2. How They Make Money", content: "Marketplace fees, Fintech fees, Credit, Ads." },
            { title: "3. Revenue Quality", content: "High growth. Fintech is becoming the profit engine." },
            { title: "4. Cost Structure", content: "Logistics heavy. Margins expanding as network densifies." },
            { title: "5. Capital Intensity", content: "High (Logistics/Credit book)." },
            { title: "6. Growth Drivers", content: "Fintech adoption, Ads, Mexico market share." },
            { title: "7. Competitive Edge", content: "Logistics network (Meli Envíos), Ecosystem lock-in." },
            { title: "8. Industry Structure", content: "Leader. Beat Amazon in LatAm." },
            { title: "9. Unit Economics", content: "Improving. Credit scoring is a key differentiator." },
            { title: "10. Capital Allocation", content: "Reinvestment in growth. No dividends." },
            { title: "11. Risks", content: "Argentina currency/inflation, Competition (Shein/Temu)." },
            { title: "12. Valuation", content: "Reasonable for growth rate. Political discount." },
            { title: "13. Catalysts", content: "Credit portfolio expansion, Ad revenue growth." }
        ]
    },
    "BRK-B": {
        executiveSummary: "Berkshire Hathaway is a diversified conglomerate managed by Warren Buffett. It owns massive businesses (Geico, BNSF Railway, Energy) and a huge stock portfolio (Apple). It is a fortress of financial strength, designed to survive any economic catastrophe. It is the ultimate 'sleep well at night' stock.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Insurance, Railroads, Energy, Retail, Manufacturing." },
            { title: "2. How They Make Money", content: "Operating earnings + Investment float." },
            { title: "3. Revenue Quality", content: "Diverse. Insurance float is the secret sauce." },
            { title: "4. Cost Structure", content: "Decentralized. Low HQ costs." },
            { title: "5. Capital Intensity", content: "High in Railroads/Energy. Low in Insurance." },
            { title: "6. Growth Drivers", content: "US Economic growth, compounding investment returns." },
            { title: "7. Competitive Edge", content: "Scale, Reputation, Capital allocation skill, Float." },
            { title: "8. Industry Structure", content: "Conglomerate. Unique." },
            { title: "9. Unit Economics", content: "N/A." },
            { title: "10. Capital Allocation", content: "The best in history. Buybacks when cheap. Hoards cash ($160B+)." },
            { title: "11. Risks", content: "Buffett succession, Size (hard to move the needle)." },
            { title: "12. Valuation", content: "Fair (Price/Book). Value play." },
            { title: "13. Catalysts", content: "Market crash (deployment of cash), Succession clarity." }
        ]
    },
    "JNJ": {
        executiveSummary: "Johnson & Johnson is the world's largest healthcare company. It spun off its consumer division (Kenvue) to focus on high-growth Pharma and MedTech. It is a AAA-rated financial fortress. While growth is slow, it is incredibly stable and diverse.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Drugs (Oncology/Immunology), MedTech (Surgery/Ortho). Customers: Hospitals." },
            { title: "2. How They Make Money", content: "Product sales." },
            { title: "3. Revenue Quality", content: "High. Healthcare is defensive." },
            { title: "4. Cost Structure", content: "High R&D." },
            { title: "5. Capital Intensity", content: "Moderate." },
            { title: "6. Growth Drivers", content: "MedTech robotics (Ottava), New drug pipeline." },
            { title: "7. Competitive Edge", content: "Scale, Distribution, R&D budget." },
            { title: "8. Industry Structure", content: "Leader." },
            { title: "9. Unit Economics", content: "High margin." },
            { title: "10. Capital Allocation", content: "Dividends (King). M&A (Abiomed)." },
            { title: "11. Risks", content: "Talc litigation (ongoing overhang), Drug pricing." },
            { title: "12. Valuation", content: "Cheap. Litigation discount." },
            { title: "13. Catalysts", content: "Talc settlement resolution." }
        ]
    },
    "HD": {
        executiveSummary: "Home Depot is the duopoly leader in home improvement. It caters to both DIY consumers and Pros (Contractors). The Pro business is its moat, requiring complex logistics and inventory depth that Amazon cannot replicate. It is a play on the US housing stock and renovation cycle.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Building materials, Tools. Customers: Pros (50% of sales), DIY." },
            { title: "2. How They Make Money", content: "Retail sales." },
            { title: "3. Revenue Quality", content: "Cyclical (Housing market linked)." },
            { title: "4. Cost Structure", content: "Supply chain efficiency is key." },
            { title: "5. Capital Intensity", content: "Moderate. Owns stores." },
            { title: "6. Growth Drivers", content: "Pro ecosystem consolidation, M&A (SRS Distribution)." },
            { title: "7. Competitive Edge", content: "Pro loyalty, Supply chain, Store density." },
            { title: "8. Industry Structure", content: "Duopoly (with Lowe's)." },
            { title: "9. Unit Economics", content: "High sales per sq ft." },
            { title: "10. Capital Allocation", content: "Buybacks/Dividends." },
            { title: "11. Risks", content: "Housing market crash, High interest rates." },
            { title: "12. Valuation", content: "Fair." },
            { title: "13. Catalysts", content: "Rate cuts (Housing turnover)." }
        ]
    },
    "UNH": {
        executiveSummary: "UnitedHealth Group is a behemoth. It owns the insurer (UnitedHealthcare) and the provider/data/pharmacy arm (Optum). This vertical integration allows it to capture profit at every stage of the healthcare value chain. It is a political target but an economic machine.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Insurance, Care delivery, Data, PBM. Customers: Employers, Govt, Patients." },
            { title: "2. How They Make Money", content: "Premiums, Service fees." },
            { title: "3. Revenue Quality", content: "Recurring. Defensive." },
            { title: "4. Cost Structure", content: "Medical Loss Ratio (MLR) is key." },
            { title: "5. Capital Intensity", content: "Low." },
            { title: "6. Growth Drivers", content: "Value-based care, Optum expansion." },
            { title: "7. Competitive Edge", content: "Scale, Data (Optum), Integration." },
            { title: "8. Industry Structure", content: "Oligopoly." },
            { title: "9. Unit Economics", content: "Stable margins." },
            { title: "10. Capital Allocation", content: "Dividends/Buybacks/M&A." },
            { title: "11. Risks", content: "Regulation (Medicare Advantage cuts), Antitrust." },
            { title: "12. Valuation", content: "Fair." },
            { title: "13. Catalysts", content: "Political clarity." }
        ]
    },
    "DOCU": {
        executiveSummary: "DocuSign is the global standard for e-signatures. It has a massive market share. However, growth has stalled as e-signature became commoditized. It is trying to pivot to 'Intelligent Agreement Management' (IAM) using AI to manage the entire contract lifecycle, not just the signature.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "E-signature, CLM. Customers: Everyone." },
            { title: "2. How They Make Money", content: "Subscriptions." },
            { title: "3. Revenue Quality", content: "Sticky but commoditizing." },
            { title: "4. Cost Structure", content: "High Gross Margins." },
            { title: "5. Capital Intensity", content: "Low." },
            { title: "6. Growth Drivers", content: "CLM (Contract Lifecycle Mgmt), AI analysis of contracts." },
            { title: "7. Competitive Edge", content: "Brand (Verb), Network effect (Standard)." },
            { title: "8. Industry Structure", content: "Leader. Adobe is main rival." },
            { title: "9. Unit Economics", content: "NRR fell to 100%." },
            { title: "10. Capital Allocation", content: "Buybacks." },
            { title: "11. Risks", content: "Commoditization, Adobe bundling." },
            { title: "12. Valuation", content: "Value/Takeout target." },
            { title: "13. Catalysts", content: "IAM product success, Private Equity buyout." }
        ]
    },
    "UBER": {
        executiveSummary: "Uber has transformed from a cash-burning startup into a profitable global mobility and delivery giant. It has won the rideshare war in most markets and is now leveraging its massive user base to cross-sell food delivery and advertising. It is a network effect machine with improving unit economics.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Rides (Mobility), Food Delivery (Eats), Freight. Customers: Consumers, Merchants." },
            { title: "2. How They Make Money", content: "Take rate (Commission) on Gross Bookings. Advertising." },
            { title: "3. Revenue Quality", content: "High frequency. Habitual. Advertising is high margin." },
            { title: "4. Cost Structure", content: "Variable driver costs. Fixed tech costs. Now GAAP profitable." },
            { title: "5. Capital Intensity", content: "Low. Drivers own the cars." },
            { title: "6. Growth Drivers", content: "Uber One membership, Advertising, New verticals (Grocery/Travel)." },
            { title: "7. Competitive Edge", content: "Liquidity (Wait times), Network Effects, Brand." },
            { title: "8. Industry Structure", content: "Duopoly in US (Lyft). Leader globally." },
            { title: "9. Unit Economics", content: "Improving. Advertising boosts margins significantly." },
            { title: "10. Capital Allocation", content: "Buybacks initiated. Focus on FCF." },
            { title: "11. Risks", content: "Regulation (Driver status), Autonomous Vehicle disruption (Robotaxis)." },
            { title: "12. Valuation", content: "Reasonable given growth and profitability pivot." },
            { title: "13. Catalysts", content: "S&P 500 inclusion (Done), Autonomous partnerships." }
        ],
        news: [
            { date: "Recent", title: "Robotaxi Partnerships", content: "Uber signs deals with Waymo and others to deploy autonomous vehicles on its network." }
        ]
    },
    "ADBE": {
        executiveSummary: "Adobe is the creative engine of the world. Its software (Photoshop, Illustrator, PDF) is the industry standard. It has successfully transitioned to the cloud (SaaS) and is now integrating Generative AI (Firefly) to protect its moat and expand its TAM. It is a highly profitable monopoly in creativity.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Creative Cloud, Document Cloud, Experience Cloud. Customers: Creatives, Enterprises." },
            { title: "2. How They Make Money", content: "SaaS Subscriptions." },
            { title: "3. Revenue Quality", content: "Elite. Sticky, recurring, high retention." },
            { title: "4. Cost Structure", content: "Software margins (~88% Gross Margin)." },
            { title: "5. Capital Intensity", content: "Low." },
            { title: "6. Growth Drivers", content: "Generative AI (Firefly), Express (Low-end market), Document workflows." },
            { title: "7. Competitive Edge", content: "Network effects (File standards), Switching costs, Brand." },
            { title: "8. Industry Structure", content: "Monopoly in Pro Creative. Competition in low-end (Canva)." },
            { title: "9. Unit Economics", content: "Incredible LTV/CAC." },
            { title: "10. Capital Allocation", content: "Buybacks. Failed Figma acquisition freed up cash." },
            { title: "11. Risks", content: "AI disruption (Midjourney/Sora), Canva competition." },
            { title: "12. Valuation", content: "Fair. Market fears AI disruption." },
            { title: "13. Catalysts", content: "Firefly monetization, Enterprise adoption of AI tools." }
        ],
        news: [
            { date: "Recent", title: "AI Video Tools", content: "Adobe showcases new Firefly video generation capabilities to compete with Sora." }
        ]
    },
    "ORCL": {
        executiveSummary: "Oracle is a legacy tech giant that has successfully pivoted to the cloud (OCI). Its database software is the backbone of the Fortune 500. It is seeing a resurgence due to AI demand, as its cloud infrastructure is optimized for training large models (partnership with Nvidia).",
        points: [
            { title: "1. What They Sell and Who Buys", content: "Database, Cloud Infrastructure (OCI), ERP (NetSuite/Cerner). Customers: Enterprise." },
            { title: "2. How They Make Money", content: "Licenses, Support, Cloud Consumption." },
            { title: "3. Revenue Quality", content: "High. Databases are incredibly sticky." },
            { title: "4. Cost Structure", content: "High margins on software. Lower on Cloud Infra." },
            { title: "5. Capital Intensity", content: "Moderate (Data centers)." },
            { title: "6. Growth Drivers", content: "OCI (Cloud) growth, AI training workloads, Cerner integration." },
            { title: "7. Competitive Edge", content: "Switching costs (Database lock-in), Price/Performance in OCI." },
            { title: "8. Industry Structure", content: "Oligopoly in Database. Challenger in Cloud (vs AWS/Azure)." },
            { title: "9. Unit Economics", content: "Strong." },
            { title: "10. Capital Allocation", content: "Dividends/Buybacks. Debt reduction." },
            { title: "11. Risks", content: "Cloud competition, Legacy decline." },
            { title: "12. Valuation", content: "Premium. AI narrative has re-rated the stock." },
            { title: "13. Catalysts", content: "OCI growth outpace, AI partnerships." }
        ],
        news: [
            { date: "Recent", title: "Cloud Growth", content: "Oracle Cloud Infrastructure (OCI) growth accelerates, driven by AI demand." }
        ]
    },
    "MSTR": {
        executiveSummary: "MicroStrategy is a business intelligence software company that has transformed into a leveraged Bitcoin holding company. It uses cheap debt to buy Bitcoin, acting as a proxy for the cryptocurrency. Its core software business provides the cash flow to service the debt.",
        points: [
            { title: "1. What They Sell and Who Buys", content: "BI Software. Bitcoin (Asset). Customers: Enterprises." },
            { title: "2. How They Make Money", content: "Software Licenses/Support. Bitcoin appreciation." },
            { title: "3. Revenue Quality", content: "Software is stable. Bitcoin is volatile." },
            { title: "4. Cost Structure", content: "High software margins. Interest expense on debt." },
            { title: "5. Capital Intensity", content: "Low for software. High for BTC accumulation." },
            { title: "6. Growth Drivers", content: "Bitcoin price appreciation." },
            { title: "7. Competitive Edge", content: "First mover in corporate BTC adoption. Capital markets access." },
            { title: "8. Industry Structure", content: "Unique." },
            { title: "9. Unit Economics", content: "N/A." },
            { title: "10. Capital Allocation", content: "All-in on Bitcoin." },
            { title: "11. Risks", content: "Bitcoin crash, Margin calls (unlikely due to structure)." },
            { title: "12. Valuation", content: "Trades at a premium to NAV of Bitcoin holdings." },
            { title: "13. Catalysts", content: "Bitcoin Halving, ETF inflows, FASB accounting rules." }
        ],
        news: [
            { date: "Recent", title: "Bitcoin Strategy", content: "MicroStrategy continues aggressive Bitcoin accumulation, raising convertible debt to buy more BTC." }
        ]
    }
};
