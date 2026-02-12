export interface Exchange {
  id: string;
  name: string;
  slug: string;
  founded: string;
  shortDescription: string;
  story: string;
  image: string;
  growthAndRole: string[];
  positionInEcosystem: string;
  minInvestment: number;
  maxInvestment: number;
  currentPerformanceRange: string;
  activityLevel: "Very High" | "High" | "Medium" | "Low";
  participants: number;
}

export const exchanges: Exchange[] = [
  {
    id: "binance",
    name: "Binance",
    slug: "binance",
    image: "/binance.png",
    founded: "2017",
    shortDescription: "The world's largest cryptocurrency exchange by trading activity, founded by Changpeng Zhao (CZ).",
    story: `Binance is the world's largest cryptocurrency exchange by trading activity, founded in 2017 by Changpeng Zhao (CZ).

It was created to offer fast trading, low fees, and access to a wide variety of digital assets and it grew faster than any exchange before it. Within months of launch, Binance became a central hub for global crypto trading.

During the 2017 crypto boom, traders needed a platform that could handle massive activity without slowing down. Binance focused on three things: Speed, simplicity, and global access.

Its powerful trading engine and large coin selection attracted users from around the world, rapidly pushing it to the top of the industry. Instead of serving one region, Binance operated internationally from the start.`,
    growthAndRole: [
      "Very low trading fees",
      "Huge selection of cryptocurrencies",
      "High liquidity and trading volume",
      "Expanding ecosystem (Launchpad, staking, wallet, blockchain network)",
    ],
    positionInEcosystem: "If crypto were an economy, Binance would be the central marketplace where the majority of global activity passes through. It represents scale, liquidity, and market movement.",
    minInvestment: 10000,
    maxInvestment: 100000,
    currentPerformanceRange: "28-32%",
    activityLevel: "Very High",
    participants: 12450,
  },
  {
    id: "coinbase",
    name: "Coinbase",
    slug: "coinbase",
    image: "/coinbase.png",
    founded: "2012",
    shortDescription: "One of the most well-known cryptocurrency exchanges, focused on simplicity and regulatory compliance.",
    story: `Coinbase is one of the most well-known cryptocurrency exchanges, founded in 2012 in the United States.

Its main goal was to make buying crypto as simple as using an online banking app — no technical knowledge required. Because of its simplicity and regulatory focus, millions of people bought their first Bitcoin through Coinbase.

In the early days of crypto, purchasing digital assets was complicated and risky. Wallets, private keys, and unfamiliar interfaces kept ordinary users away.

Coinbase solved that by building a clean, beginner-friendly bridge between traditional money and cryptocurrency. Over time it became trusted enough to work closely with regulators and financial institutions.

In 2021, Coinbase made history by becoming one of the first major crypto companies to go publicly traded on the stock market — a major milestone for industry legitimacy.`,
    growthAndRole: [
      "Beginner-friendly interface",
      "Direct bank purchases of crypto",
      "Strong compliance and transparency",
      "Institutional-grade services",
    ],
    positionInEcosystem: "If crypto were a city, Coinbase would be the front gate — the place where newcomers first enter before exploring the wider market. It represents accessibility and mainstream adoption.",
    minInvestment: 8000,
    maxInvestment: 80000,
    currentPerformanceRange: "25-29%",
    activityLevel: "High",
    participants: 8320,
  },
  {
    id: "crypto-com",
    name: "Crypto.com",
    slug: "crypto-com",
    image: "/crypto.png",
    founded: "2016",
    shortDescription: "A global cryptocurrency platform focused on bringing crypto into everyday life through payments and cards.",
    story: `Crypto.com is a global cryptocurrency platform founded in 2016 (originally called Monaco).

Its mission has always been simple: Bring cryptocurrency into everyday life — not just trading. Instead of focusing only on markets, it built tools that allow people to actually spend and use crypto in daily transactions.

In crypto's early years, most platforms were designed for traders and investors. Crypto.com took a different path — adoption.

It introduced payment cards, mobile wallets, and merchant services so people could pay with digital assets just like traditional money. The rebrand from Monaco to Crypto.com reflected its ambition to become a mainstream gateway into the digital economy.`,
    growthAndRole: [
      "Crypto debit cards",
      "Payment and merchant solutions",
      "Rewards and cashback programs",
      "Massive global marketing partnerships",
    ],
    positionInEcosystem: "If some exchanges focus on markets, Crypto.com focuses on daily utility — turning cryptocurrency from an investment into a usable financial system.",
    minInvestment: 5000,
    maxInvestment: 60000,
    currentPerformanceRange: "22-26%",
    activityLevel: "Medium",
    participants: 6180,
  },
  {
    id: "kraken",
    name: "Kraken",
    slug: "kraken",
    image: "/kraken.png",
    founded: "2011",
    shortDescription: "One of the oldest and most trusted cryptocurrency exchanges, focused on security and regulatory compliance.",
    story: `Kraken is one of the oldest and most trusted cryptocurrency exchanges, founded in 2011 in the United States.

It launched shortly after Bitcoin's early growth and focused heavily on security and regulatory compliance — which helped it earn long-term credibility. Because of this, many investors view Kraken as a "serious" platform rather than a hype-driven one.

After the collapse of early exchange Mt. Gox in 2014, the crypto world realized exchanges needed stronger protection and transparency. Kraken positioned itself around that exact idea: Stability, audits, and trust before expansion.

While other platforms chased fast growth, Kraken built a reputation slowly — prioritizing safety and reliability.`,
    growthAndRole: [
      "Strong security practices",
      "Regulatory compliance",
      "Support for fiat currencies (USD, EUR, etc.)",
      "Institutional-grade services",
    ],
    positionInEcosystem: "If some exchanges represent speed and innovation, Kraken represents trust infrastructure — the part of crypto focused on safety, longevity, and accountability.",
    minInvestment: 6000,
    maxInvestment: 70000,
    currentPerformanceRange: "24-28%",
    activityLevel: "High",
    participants: 5940,
  },
  {
    id: "okx",
    name: "OKX",
    slug: "okx",
    image: "/okx.png",
    founded: "2017",
    shortDescription: "A global cryptocurrency exchange known for advanced trading and Web3 ecosystem integration.",
    story: `OKX is a global cryptocurrency exchange founded in 2017 (originally known as OKEx).

It became widely recognized for advanced trading products and for serving both retail users and professional institutions. Over time, the platform evolved beyond trading into a broader crypto ecosystem — wallets, DeFi access, NFTs, and Web3 tools.

As crypto matured, users wanted more than just buying and selling coins — they wanted access to the entire digital economy. OKX shifted from being just an exchange into a gateway to blockchain services.

The rebrand from OKEx to OKX represented this shift: from trading platform to multi-service crypto infrastructure.`,
    growthAndRole: [
      "Advanced derivatives trading",
      "Web3 wallet integration",
      "DeFi and on-chain services",
      "Institutional-level tools",
    ],
    positionInEcosystem: "If some exchanges are markets, OKX is closer to an operating system for crypto activity — combining trading, storage, and blockchain interaction in one place.",
    minInvestment: 7000,
    maxInvestment: 75000,
    currentPerformanceRange: "26-30%",
    activityLevel: "High",
    participants: 7820,
  },
  {
    id: "bybit",
    name: "Bybit",
    slug: "bybit",
    image: "/bybit.png",
    founded: "2018",
    shortDescription: "A cryptocurrency exchange known for high-speed derivatives and futures trading.",
    story: `Bybit is a cryptocurrency exchange founded in 2018 that became widely known for high-speed derivatives and futures trading.

It focused on performance and precision, attracting active traders who needed fast execution and advanced trading tools. Instead of targeting beginners first, Bybit built its reputation among serious market participants — then expanded to the wider public.

As crypto trading matured, many traders moved from simple buying/selling into leveraged strategies. But early platforms often lagged, froze during volatility, or couldn't handle heavy activity.

Bybit positioned itself as the solution: A trading engine built for high-intensity markets. Its smooth interface and stable performance during volatile periods quickly earned loyalty among professional traders.`,
    growthAndRole: [
      "Derivatives and futures markets",
      "Fast order execution",
      "Professional trading environment",
      "Global trader community",
    ],
    positionInEcosystem: "If some exchanges are entry points, Bybit acts like a trading arena — designed for speed, strategy, and market competition. It represents the performance-driven side of the crypto economy.",
    minInvestment: 8000,
    maxInvestment: 85000,
    currentPerformanceRange: "30-34%",
    activityLevel: "Very High",
    participants: 9150,
  },
  {
    id: "htx",
    name: "HTX",
    slug: "htx",
    image: "/htx.png",
    founded: "2013",
    shortDescription: "The rebranded Huobi exchange, one of the original major platforms from the early days of crypto.",
    story: `HTX is the rebranded name of the long-standing cryptocurrency exchange Huobi, one of the original major platforms from the early days of crypto trading.

The exchange was first launched in 2013, making it part of the first generation of global trading platforms. In 2023, Huobi evolved into HTX — a modernization of the brand as the crypto industry became more global and technology-driven.

During crypto's early expansion, only a few exchanges handled most of the world's trading activity. Huobi was one of them.

It helped introduce digital asset trading across Asia and became a major liquidity hub during the first global adoption wave. Years later, the platform restructured and rebranded to HTX to signal a broader ecosystem direction beyond simple trading.`,
    growthAndRole: [
      "Early global crypto adoption",
      "Large international user base",
      "High trading liquidity",
      "Long operational history through multiple market cycles",
    ],
    positionInEcosystem: "If newer exchanges represent innovation, HTX represents heritage infrastructure — a platform that helped build the early trading economy and continues adapting as the industry evolves.",
    minInvestment: 5000,
    maxInvestment: 55000,
    currentPerformanceRange: "20-24%",
    activityLevel: "Medium",
    participants: 4280,
  },
  {
    id: "kucoin",
    name: "KuCoin",
    slug: "kucoin",
    image: "/kucoin.svg",
    founded: "2017",
    shortDescription: "A global cryptocurrency exchange known as 'The People's Exchange' for its focus on small investors.",
    story: `KuCoin is a global cryptocurrency exchange launched in 2017 with a mission to make crypto trading accessible to everyday users around the world.

It quickly earned the nickname "The People's Exchange" because it focused on small investors, not just large institutions.

During crypto's rapid expansion in 2017, most major exchanges listed only well-known coins. KuCoin took a different path — it supported emerging blockchain projects and smaller communities.

This allowed many users to discover new assets early, before they reached mainstream platforms. Instead of competing only for volume, KuCoin competed for community loyalty.`,
    growthAndRole: [
      "Early listings of new cryptocurrencies",
      "Global user access",
      "Reward programs and bonuses",
      "Beginner-friendly interface",
    ],
    positionInEcosystem: "If some exchanges are built for professionals, KuCoin is designed for participation. It acts as a gateway exchange where new users start their journey and new projects gain their first supporters.",
    minInvestment: 4000,
    maxInvestment: 50000,
    currentPerformanceRange: "23-27%",
    activityLevel: "High",
    participants: 5620,
  },
  {
    id: "bitget",
    name: "Bitget",
    slug: "bitget",
    image: "/bitget.png",
    founded: "2018",
    shortDescription: "A global cryptocurrency exchange famous for introducing copy-trading in crypto.",
    story: `Bitget is a global cryptocurrency exchange founded in 2018, known for making advanced trading tools easier for everyday users.

It became especially famous for introducing copy-trading in crypto — allowing people to automatically follow professional traders. Instead of needing years of trading experience, users could participate by mirroring strategies from experts.

Many newcomers entered crypto wanting exposure but struggled with charts, indicators, and timing. Bitget focused on solving that exact problem.

Rather than forcing everyone to become traders, it created a system where skilled traders trade — others can follow. This dramatically lowered the barrier to entry and helped the platform grow rapidly worldwide.`,
    growthAndRole: [
      "Copy-trading marketplace",
      "Derivatives and futures trading",
      "Beginner-friendly participation tools",
      "Strong global expansion",
    ],
    positionInEcosystem: "If some exchanges are marketplaces, Bitget is closer to a social trading network. It connects experience with inexperience — turning trading into a shared activity rather than a solo skill.",
    minInvestment: 5000,
    maxInvestment: 60000,
    currentPerformanceRange: "24-28%",
    activityLevel: "High",
    participants: 6450,
  },
  {
    id: "mexc",
    name: "MEXC",
    slug: "mexc",
    image: "/mexc.png",
    founded: "2018",
    shortDescription: "A global cryptocurrency exchange known for fast listing of new digital assets.",
    story: `MEXC is a global cryptocurrency exchange launched in 2018 with a focus on accessibility and fast listing of new digital assets.

From the beginning, its goal was simple: become the platform where users discover crypto projects before they reach mainstream exchanges.

While many exchanges concentrated on only top coins, MEXC positioned itself as a discovery market — a place traders go early, not late.

During the 2017–2018 crypto boom, most investors had a problem: By the time a coin reached major exchanges, the biggest growth had already happened. MEXC filled that gap. It became known as "The exchange where new projects appear first."`,
    growthAndRole: [
      "Rapid token listings",
      "High trading variety",
      "Global accessibility",
      "Support for emerging blockchain ecosystems",
    ],
    positionInEcosystem: "If major exchanges represent the main cities of crypto, MEXC represents the frontier towns where expansion begins. It plays a discovery and expansion role — helping new assets enter the broader market cycle.",
    minInvestment: 3000,
    maxInvestment: 40000,
    currentPerformanceRange: "21-25%",
    activityLevel: "Medium",
    participants: 3890,
  },
  {
    id: "gate-io",
    name: "Gate.io",
    slug: "gate-io",
    image: "/gate-io.png",
    founded: "2013",
    shortDescription: "One of the oldest surviving cryptocurrency exchanges, known for longevity and wide asset selection.",
    story: `Gate.io is one of the oldest surviving cryptocurrency exchanges, originally founded in 2013 (under the name Bter) before rebranding to Gate.io in 2017.

Because it existed during the early years of crypto, it lived through multiple market crashes, hacks, and bull runs — and kept evolving. That longevity gave it a reputation as a veteran exchange in the industry.

In crypto's early days, exchanges were constantly appearing and disappearing. Gate.io became notable because it didn't just grow during bull markets — it adapted and survived difficult periods when many platforms shut down.

After the 2017 rebrand, the platform expanded globally and rebuilt its security and infrastructure, positioning itself for long-term operation rather than short-term hype.`,
    growthAndRole: [
      "Listing a wide range of cryptocurrencies",
      "Supporting early-stage blockchain projects",
      "Serving international traders",
      "Providing staking and earning features",
    ],
    positionInEcosystem: "If major exchanges are the financial centers, Gate.io acts like a global marketplace port — where new assets enter circulation and spread outward. Its strength is experience and persistence — surviving cycles while continuing to support new blockchain ecosystems.",
    minInvestment: 3500,
    maxInvestment: 45000,
    currentPerformanceRange: "20-24%",
    activityLevel: "Medium",
    participants: 4120,
  },
  {
    id: "bitfinex",
    name: "Bitfinex",
    slug: "bitfinex",
    image: "/bitfinex.png",
    founded: "2012",
    shortDescription: "One of the earliest professional cryptocurrency trading platforms with advanced tools.",
    story: `Bitfinex is one of the earliest professional cryptocurrency trading platforms, launched in 2012.

It quickly became popular among large traders because it offered advanced tools that most exchanges didn't have at the time. Rather than focusing on beginners, Bitfinex was designed for serious market participants.

In crypto's early years, trading platforms were basic and limited. Bitfinex introduced features like margin trading, lending markets, and deep liquidity.

This attracted high-volume traders and institutions who needed more than simple buy/sell functionality. Because of this, Bitfinex became one of the key liquidity centers during crypto's formative years.`,
    growthAndRole: [
      "Professional trading tools",
      "Large liquidity pools",
      "Institutional trader activity",
      "Early market price discovery",
    ],
    positionInEcosystem: "If some exchanges are entry gates, Bitfinex acts like a trading engine room — where large-volume strategies and market structure develop. It represents the professional and institutional side of crypto markets.",
    minInvestment: 10000,
    maxInvestment: 100000,
    currentPerformanceRange: "26-30%",
    activityLevel: "High",
    participants: 5280,
  },
  {
    id: "upbit",
    name: "Upbit",
    slug: "upbit",
    image: "/upbit.png",
    founded: "2017",
    shortDescription: "One of the largest cryptocurrency exchanges in South Korea with strong local integration.",
    story: `Upbit is one of the largest cryptocurrency exchanges in South Korea, launched in 2017 through a partnership between fintech company Dunamu and technology giant Kakao Corp.

From the start, it focused on strong local regulation and integration with traditional banking systems. Because South Korea has one of the most active retail trading populations in the world, Upbit quickly grew into a high-volume exchange.

Korean investors were heavily interested in digital assets but needed a trusted domestic platform connected to their banking system. Upbit provided exactly that: a regulated, locally integrated gateway into crypto markets.

By linking directly with Korean bank accounts and identity verification systems, it gained widespread public adoption.`,
    growthAndRole: [
      "Massive trading activity in the Korean market",
      "Strict compliance standards",
      "Fast adoption by retail investors",
      "Strong fiat-to-crypto accessibility in Korea",
    ],
    positionInEcosystem: "If global exchanges represent international markets, Upbit represents regional market power — showing how local investor demand can shape worldwide crypto trends.",
    minInvestment: 7000,
    maxInvestment: 70000,
    currentPerformanceRange: "25-29%",
    activityLevel: "High",
    participants: 6890,
  },
  {
    id: "robinhood",
    name: "Robinhood",
    slug: "robinhood",
    image: "/robinhood.png",
    founded: "2013",
    shortDescription: "A financial trading platform that introduced commission-free trading and later added crypto.",
    story: `Robinhood is a financial trading platform founded in 2013 in the United States.

It became famous for introducing commission-free trading, allowing everyday people to buy stocks without paying traditional broker fees. Later, the platform added cryptocurrency trading — bringing millions of traditional investors into crypto through a familiar, simple app interface.

Before Robinhood, investing was often expensive and complicated for beginners. Many brokers charged fees for every trade, which discouraged small investors.

Robinhood changed that with a simple idea: Make investing accessible to everyone, not just professionals. Its mobile-first design and zero-commission trades attracted a new generation of investors who had never participated in markets before.`,
    growthAndRole: [
      "Commission-free stock trading",
      "Beginner-friendly mobile app",
      "Introducing retail investors to crypto",
      "Massive retail investor adoption",
    ],
    positionInEcosystem: "If traditional brokers represent Wall Street, Robinhood represents Main Street finance — simplifying markets so ordinary people can participate. It bridges traditional finance and crypto for everyday users.",
    minInvestment: 5000,
    maxInvestment: 50000,
    currentPerformanceRange: "18-22%",
    activityLevel: "Medium",
    participants: 4580,
  },
  {
    id: "scfi-500",
    name: "SCFI 500",
    slug: "scfi-500",
    image: "/scfi500.png",
    founded: "2025",
    shortDescription: "An index-style investment layer tracking combined activity of multiple cryptocurrency exchanges.",
    story: `SCFI 500 represents an index-style investment layer inside the SCFI ecosystem — designed to track the combined activity of multiple cryptocurrency exchanges rather than relying on a single platform.

Instead of choosing one exchange to participate in, SCFI 500 is structured as a basket exposure model — similar in idea to how traditional finance created index funds (like stock market indices) to represent the overall market.

As crypto markets expanded, one major problem appeared: Every exchange performs differently depending on region, users, and market cycles. Some dominate during bull runs. Others remain active during downturns. Some lead derivatives trading, others lead retail adoption.

SCFI 500 was created around this realization: The crypto economy is not one company — it is an entire trading ecosystem. So rather than selecting a single exchange, the model mirrors the broader trading environment.`,
    growthAndRole: [
      "Represents overall exchange activity",
      "Reduces dependence on one platform",
      "Reflects combined trading economy",
      "Acts as a broader exposure approach",
    ],
    positionInEcosystem: "If individual exchange plans represent specific companies, SCFI 500 represents the whole industry cycle. It's designed as the macro layer — a way to follow the movement of the entire exchange economy rather than individual performance.",
    minInvestment: 15000,
    maxInvestment: 150000,
    currentPerformanceRange: "24-28%",
    activityLevel: "High",
    participants: 8920,
  },
];

export function getExchangeBySlug(slug: string): Exchange | undefined {
  return exchanges.find((e) => e.slug === slug);
}

export function getAllExchangeSlugs(): string[] {
  return exchanges.map((e) => e.slug);
}
