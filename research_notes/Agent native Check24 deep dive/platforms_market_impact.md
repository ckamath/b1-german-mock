# Agentic commerce: platform landscape, adoption, and impact on comparison portals / aggregators (state: 23 Nov 2026)

**Method note for the report writer.** All findings below come from web-search result summaries (about 45 queries). Full-page fetches failed in this session (hosts such as mckinsey.com, deloitte.com, autoritedelaconcurrence.fr were not reachable), so no primary page was read end to end. Figures are therefore "as reported in search snippets"; anything flagged *(single source / unverified)* should not be stated as fact without checking. Labels used: **SHIPPED** = live product, **ANNOUNCED** = stated but not live, **FORECAST** = projection, **MEASURED** = observed data, **SELF-REPORTED** = company's own claim.

---

## 1. Platform moves: who controls the consumer agent interface (and what is available in Europe)

### Takeaway
As of Nov 2026 no platform has made in-chat autonomous checkout work at scale: OpenAI withdrew Instant Checkout in March 2026 and moved to "discover in ChatGPT, buy at the merchant" plus ads; Google's UCP checkout is live only in the US, Canada and Australia; Amazon is walling off its catalog and litigating. For Germany/EU, the only confirmed consumer-facing commercial change found is ChatGPT advertising (since Aug 2026); no agentic checkout from any major platform was found to be live in Germany.

### Cited Findings

**OpenAI / ChatGPT**
- SHIPPED then WITHDRAWN: Instant Checkout launched 29 Sep 2025, US-only, starting with US Etsy sellers, on the Agentic Commerce Protocol (ACP, with Stripe). — [OpenAI](https://openai.com/index/buy-it-in-chatgpt/)
- OpenAI announced on 24 Mar 2026 (post "Powering Product Discovery in ChatGPT") that it was moving away from Instant Checkout; its stated reason was that the first version "did not offer the level of flexibility that we aspire to provide". Purchases now complete on merchant-owned sites/apps; no fee on purchases that start in ChatGPT. — [Digital Commerce 360, 24 Mar 2026](https://www.digitalcommerce360.com/2026/03/24/openai-agentic-commerce-updates-chatgpt-walmart/); [CNBC, 20 Mar 2026](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html); [checkout.com](https://www.checkout.com/blog/openai-agentic-commerce-shift)
- MEASURED (Walmart, as reported): conversion was three times lower for products sold directly inside ChatGPT than for those that rerouted users to the retailer's own site for checkout. — [Digital Commerce 360](https://www.digitalcommerce360.com/2026/03/24/openai-agentic-commerce-updates-chatgpt-walmart/); [CNBC](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html)
- Unverified blog claim: only about 30 Shopify stores went live on Instant Checkout out of the roughly one million promised. *(secondary blogs only)* — [alhena.ai](https://alhena.ai/blog/chatgpt-instant-checkout/)
- Conflict: one source says OpenAI's help center (updated Oct 2026) still mentions an Instant Checkout option for some eligible merchants; others describe it as fully gone. OpenAI's own developer guide still says "available to approved partners" but the page appears to predate the pullback. — [OpenAI developers](https://developers.openai.com/commerce/guides/production); [Exploding Topics](https://explodingtopics.com/blog/agentic-commerce-protocol)
- SHIPPED: merchant apps inside ChatGPT with account linking, loyalty and the merchant's own payments (Walmart; Sephora also named). — [Digital Commerce 360](https://www.digitalcommerce360.com/2026/03/24/openai-agentic-commerce-updates-chatgpt-walmart/); [sichtbarerwerden.de, 09/2026](https://sichtbarerwerden.de/ratgeber/ki-ads/chatgpt-shopping/)
- SHIPPED: ChatGPT ads on Free and Go plans in more than 60 countries; OpenAI states "advertising does not influence the answers ChatGPT provides". — [citedify](https://www.citedify.com/blog/chatgpt-shopping-after-instant-checkout)
- **Germany/EU:** ChatGPT Ads started in Germany on 24 Aug 2026 as part of a 31-market European rollout (incl. Austria); self-service ads manager initially missing. — [amzplus-consulting](https://amzplus-consulting.de/blog/marktplatz-chatgpt-ads-deutschland-start-2026)
- **Germany/EU:** no confirmed start date for ChatGPT Shopping or in-chat purchase in Germany/EU "as of 01.09.2026" (third-party German guides, not OpenAI). — [sichtbarerwerden.de](https://sichtbarerwerden.de/ratgeber/ki-ads/chatgpt-shopping/); PSD2/SCA named as a structural hurdle for ACP in the EU — [dev.to](https://dev.to/alifar/chatgpt-instant-checkout-10fh)
- *(single source / unverified)*: "ChatGPT Work" took over Agent Mode tasks on 9 Jul 2026 and the Atlas browser was discontinued in Aug 2026. — [jeanhinz.io](https://jeanhinz.io/chatgpt/agent-modus/). OpenAI launched ChatGPT Workspace Agents on 22 Apr 2026. — [remio.ai](https://www.remio.ai/post/openai-devday-2026-moves-chatgpt-from-assistant-to-agent-platform)
- ChatGPT referral behaviour changed on 7 May 2026 when ChatGPT began surfacing more prominent brand links; referrals nearly tripled week on week (Similarweb). — [Similarweb](https://aisearch.similarweb.com/blog/chatgpt-referral-traffic-triples/)

**Google**
- SHIPPED: Universal Commerce Protocol (UCP) launched Jan 2026 with 20+ partners incl. Shopify, Etsy, Walmart, Target; powers a "Buy" button in AI Mode and Gemini. Merchant remains merchant of record; payment via Google Pay. — [Google for Developers](https://developers.google.com/universal-commerce-protocol); [Google Merchant UCP docs (DE)](https://developers.google.com/merchant/ucp?hl=de)
- Geography: UCP-powered checkout applies to products eligible in the United States, Canada and Australia only. — [Google Merchant Center Help](https://support.google.com/merchants/answer/16837055?hl=en)
- **Europe:** no date. Third-party sources say Europe "expected during 2026, no official timeline"; Zalando is a UCP partner. — [Thron](https://www.thron.com/en/blog/insights/universal-commerce-protocol/); [Shoparize](https://business.shoparize.com/en/blog/googles-universal-commerce-protocol-what-merchants-need-to-know)
- ANNOUNCED (Google I/O 2026): a "universal cart" working across merchants and across Search, Gemini and other services. — [Google Blog DE](https://blog.google/intl/de-de/produkte/suchen-entdecken/google-shopping-cart/)
- SHIPPED: new Shopping ad formats in AI Mode announced Feb 2026. — [OnlineMarketing.de](https://onlinemarketing.de/sea/google-bringt-neues-shopping-werbeformat-fuer-den-ai-mode)
- SHIPPED (27 Aug 2026): AI Mode travel features: flight price tracking in 180+ countries, points/miles pricing, hotel booking (US first; partners incl. Booking.com, Expedia, Marriott; about 10 partners). Flights still hand off to partner sites. Google notes some functions will not be available in the EEA. — [TechCrunch](https://techcrunch.com/2026/08/27/googles-ai-mode-can-now-track-flight-prices-help-book-hotels-and-more/); [Google blog](https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/); [PPC Land](https://ppc.land/google-ai-mode-completes-hotel-bookings-with-10-partners-in-us-rollout/)
- ZDF commentary: agentic features start in the US; Gemini app is available in Germany; comparison portals "could be bypassed" and the platform steering the purchase gains influence. — [ZDFheute](https://www.zdfheute.de/wirtschaft/kuenstliche-intelligenz-google-gemini-shopping-agenten-online-handel-100.html)
- *(single source)* AI Overviews and AI Mode were switched on in France only on 22 Jul 2026. — [verticality.co](https://www.verticality.co/blog/ai-overviews-traffic-drop-what-to-change/)

**Amazon**
- SHIPPED (US test): "Buy for Me" places orders on external brand sites; catalog grew from about 65,000 products at launch to 500,000+. Brands complained in Jan 2026 that products were listed without permission. — [Modern Retail, 6 Jan 2026](https://www.modernretail.co/technology/brands-are-upset-that-buy-for-me-is-featuring-their-products-on-amazon-without-permission/); [SiliconANGLE](https://siliconangle.com/2026/01/06/amazons-ai-agents-spark-backlash-retailers-listing-products-without-knowledge/)
- Amazon has blocked dozens of external AI agents incl. ChatGPT crawlers, and blocked Meta's Muse less than two weeks after its launch. — [Axios, 21 Sep 2026](https://www.axios.com/2026/09/21/amazon-meta-muse-ai-agentic-shopping); [Retail Gazette](https://www.retailgazette.co.uk/?p=212892)
- **Amazon v. Perplexity:** filed Nov 2025 (CFAA + California statute; allegation that Comet disguised automated sessions as Chrome). Judge Maxine Chesney granted a preliminary injunction in Mar 2026. — [Bloomberg, 10 Mar 2026](https://www.bloomberg.com/news/articles/2026-03-10/amazon-wins-court-order-blocking-perplexity-s-ai-shopping-bots)
- Early Aug 2026: Ninth Circuit vacated the injunction, reasoning that the Comet user, not Perplexity, accesses Amazon; ruling limited to the current record; case remanded; Amazon "evaluating options". Not a final outcome. — [Engadget](https://www.engadget.com/2230471/); [eWeek](https://www.eweek.com/news/perplexity-ai-shopping-agent-returns-amazon/)
- eBay: user agreement effective 20 Feb 2026 bans unauthorised third-party "buy-for-me" agents. — [PYMNTS](https://www.pymnts.com/?p=3423031)

**Meta**
- SHIPPED (US only, 8/9 Sep 2026): "Muse" personal agent (about $20/month per one outlet) that shops, books travel, emails; checkout via Stripe Link; a second agent "Sentinel" reviews actions; iOS/Android/muse.ai. No UK/EU date. — [Meta newsroom](https://about.fb.com/news/2026/09/introducing-muse); [The Paypers](https://thepaypers.com/payments/news/meta-launches-personal-ai-agent-with-stripe-powered-checkout); [PPC Land](https://ppc.land/meta-puts-an-ai-agent-that-buys-things-inside-whatsapp-us-only/)
- Truist cut price targets for Booking and Expedia citing Muse. — [24/7 Wall St, 1 Oct 2026](https://247wallst.com/investing/2026/10/01/how-booking-holdings-and-expedia-are-taking-opposite-bets-on-ai-shopping-agents/)

**Microsoft, Perplexity, Apple, Anthropic** *(mostly secondary blog sources)*
- Copilot Checkout: launched US, 8 Jan 2026 (PayPal, Shopify, Stripe); April 2026 expansion to mobile apps and 500,000+ merchants; status after the Aug/Sep 2026 Copilot app merger unconfirmed. — [gravity.fast](https://gravity.fast/blog/ai-shopping-assistant/); [WalletWisp](https://walletwisp.com/pay-with-paypal-ai-chat-perplexity-copilot-safe/)
- Perplexity Instant Buy with PayPal: launched Nov 2025, US only; no 2026 update found. — [WalletWisp](https://walletwisp.com/pay-with-paypal-ai-chat-perplexity-copilot-safe/)
- Apple: "Siri AI" announced at WWDC 8 Jun 2026 (English beta later in year); Safari restock/price-drop alerts; no Siri shopping agent announced. — [aisell.com](https://aisell.com/article/ai-shopping-assistants-compared-2026)
- Anthropic/Claude: Expedia is described as "live inside ChatGPT and Claude" (article title only); Allianz has an Anthropic partnership. — [Travel Business School](https://www.travelbusinessschool.com/expedia-is-live-inside-chatgpt-and-claude-what-agentic-booking-does-to-your-margins); [Handelsblatt](https://www.handelsblatt.com/finanzen/banken-versicherungen/versicherer/versicherung-wie-die-allianz-vorreiter-bei-der-ki-transformation-werden-will/100236829.html)

**Merchant platforms**
- Shopify switched on "Agentic Storefronts" by default on 24 Mar 2026: products from 5.6 million stores discoverable in ChatGPT, Copilot, AI Mode, Gemini (discovery, not order volume). — [digitalapplied](https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026)
- Zalando: live on / launch partner of Google UCP; no Zalando–OpenAI deal found. Otto: nothing found. — [brainvire](https://www.brainvire.com/insights/agentic-commerce/)

### Inferences
- The control point has shifted from "who owns checkout" to "who owns discovery + who sells the ad slot": both OpenAI and Google monetise via ads and leave merchant-of-record with the seller. That is structurally close to the comparison-portal lead model, which is why portals are exposed at the top of the funnel, not at fulfilment.
- Incumbents with catalogs/accounts (Amazon, eBay) are defending by blocking; the Ninth Circuit's "the user is the one accessing" reasoning, if it holds, weakens blocking as a legal strategy, but it is explicitly record-limited.
- Germany is a late market on every platform; German portals have had roughly a year more warning than US/UK peers.

### Gaps
- No primary OpenAI source read for the 24 Mar 2026 post, the Atlas discontinuation, or "ChatGPT Work"; treat the latter two as unverified.
- Alexa+ and Rufus availability in Germany/EU: nothing found. Amazon v. Perplexity status after Aug 2026 remand: nothing found.
- Whether Google AI Mode shopping/price tracking is live in Germany, and whether UCP checkout has any EU date: no official source found.
- Instacart, Etsy (post-pullback), Otto partnerships: not found.

---

## 2. Adoption data: usage, AI referral traffic, checkout volumes, forecasts

### Takeaway
Measured data shows fast growth in AI-assisted research and in AI referral traffic that converts well, but AI is still a small share of total traffic and completed agentic purchases are marginal; no source gave a hard number for agent-completed checkout volume. Large forecasts ($3–5tn globally by 2030) rest on assumptions, and both German and UK/US surveys show most consumers unwilling to delegate the actual purchase.

### Cited Findings

**Referral traffic and conversion (MEASURED, US-centric)**
- Adobe: AI traffic to US retail sites rose 693% YoY in the 2025 holiday season; AI referrals converted 31% better than non-AI sources; 14% higher engagement; revenue per visit from AI referrals up 254% YoY. — [Digital Commerce 360, 13 Jan 2026](https://www.digitalcommerce360.com/2026/01/13/generative-ai-online-holiday-shopping-traffic-2025/); [Adobe](https://business.adobe.com/blog/ai-traffic-higher-revenue-per-visit-retail-holiday)
- Adobe: AI traffic to US retailers +393% in Q1 2026. — [TechCrunch, 16 Apr 2026](https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/)
- Adobe 2026 run-rate is decelerating: +62% YoY in Jul 2026, +71% in Sep 2026; AI visitors converted 54% better (May), 60% better (Jul), 90% better with 83% higher revenue per visit (Sep). Note: an Adobe Q3 report is also quoted as saying the conversion gap "has disappeared in Retail" — figures across Adobe reports are inconsistent. — [Digital Commerce 360, 19 Aug 2026](https://www.digitalcommerce360.com/2026/08/19/adobe-ai-referral-traffic-data-july-2026/); [Small Business Trends](https://smallbiztrends.com/ai-driven-retail-traffic-surges-71-converts-90-better/); [Adobe Q3 2026 PDF](https://business.adobe.com/resources/sdk/.q3-ai-traffic-trends-report/q3-2026-ai-sourced-traffic-insights.pdf)
- FORECAST (Adobe, holiday 2026): AI traffic +159% on Thanksgiving, +95% Black Friday, +88% Cyber Monday; another report cites +130% for the season and $275.1bn US online holiday sales. — [Adobe](https://business.adobe.com/blog/ai-traffic-higher-revenue-per-visit-retail-holiday); [cryptobriefing](https://cryptobriefing.com/adobe-chatgpt-holiday-shopping-forecast/)
- Similarweb: ChatGPT was about 20% of Walmart's *referral* clicks (Aug), 20%+ at Etsy, nearly 15% at Target; but referrals are a small share of total traffic. — [Digiday](https://digiday.com/media/chatgpt-is-now-20-of-walmarts-referral-traffic-while-amazon-wards-off-ai-shopping-agents)
- Similarweb State of Ecommerce 2026: AI platform referrals up 200%+ YoY but still small volume. — [PPC Land](https://ppc.land/capital-one-gains-14-2-shopper-pickup-when-ai-names-it-similarweb-finds/)
- Bain: AI is up to a quarter of referral traffic for some retailers but under 1% of their total traffic. — [Bain](https://www.bain.com/insights/agentic-ai-in-retail-how-autonomous-shopping-redefining-customer-journey/)
- One estimate: AI sources were 0.25% of all web referrals worldwide in Aug 2026; ChatGPT's share of AI referrals 63%–92% depending on panel. — [upgrowth](https://upgrowth.in/ai-traffic-share-report-2026/); [Previsible](https://previsible.com/seo-strategy/ai-traffic-report-july-2026/)
- Peer-reviewed: Marketing Science study comparing 50,000+ ChatGPT-referred transactions with 164m from other channels (conversion result not retrieved). — [INFORMS](https://pubsonline.informs.org/doi/full/10.1287/mksc.2025.0489)

**Company-level measured signals**
- Booking Holdings Q3 2026 (early Nov 2026): traffic from external AI platforms and personal agents "remains very small" and not growing noticeably faster; AI referrals significantly under 1% of Booking.com room nights. — [PhocusWire](https://www.phocuswire.com/news/finance/booking-holdings-q3-2026-earnings)
- NerdWallet (Q1 2026): LLM traffic still a small revenue contributor. — [Motley Fool transcript, 6 May 2026](https://www.fool.com/earnings/call-transcripts/2026/05/06/nerdwallet-nrds-q1-2026-earnings-transcript/)
- Insurify (SELF-REPORTED): share of new customers discovering it via ChatGPT/AI rose from 0.15% (H1 2025) to 5.7% (H1 2026). — [Insurify press, 19 Aug 2026](https://insurify.com/press/news/insurify-expands-chatgpt-plugin/)

**Consumer surveys**
- Salesforce (holiday 2026): AI platforms and agents predicted to "play a role in" 21% of global holiday sales (about $263bn) (FORECAST, broad definition); 31% of consumers have tried a personal agent; nearly 20% use AI as first stop; only 5% in UK and 12% in US have let an agent buy for them; 76% do not want AI agents buying for them. — [Salesforce](https://www.salesforce.com/news/stories/agentic-search-growth/); [PPC Land](https://ppc.land/76-of-shoppers-dont-want-ai-agents-buying-for-them-salesforce-finds/)
- Adobe survey of 5,000 shoppers: 77% of AI-shopping users feel more confident in the purchase. — [cryptobriefing](https://cryptobriefing.com/adobe-chatgpt-holiday-shopping-forecast/)
- **Germany, Deloitte (May 2026):** 52% of German respondents use AI shopping aids (44% in Sep 2025); just under 6% would fully delegate the purchase. — [Deloitte](https://www.deloitte.com/de/de/about/press-room/jeder-zweite-in-europa-shoppt-mit-KI-untersuetzung.html); see also [Google Think DE](https://business.google.com/de/think/consumer-insights/agentic-commerce-deloitte-studie/)
- **Germany, Bitkom:** 43% of 16–29-year-olds would let AI do purchases alone (date/method not visible); Bitkom whitepaper 10 Apr 2026: 61% of retailers see AI as competitive advantage; Bitkom report "Digitaler Handel in Deutschland" (Jul 2026, n=1,120) has an AI-shopping section not retrieved. — [Bitkom](https://www.bitkom.org/Presse/Presseinformation/Agentic-Commerce-So-veraendert-KI-Online-Shopping); [Bitkom PDF](https://www.bitkom.org/sites/main/files/2026-07/bitkom-studienbericht-digitaler-handel-in-deutschland.pdf)
- **Germany, Unzer/Insa:** 64% do not want to hand over control of spending; strong generation/gender split. — [t-online](https://www.t-online.de/finanzen/aktuelles/id_101146860/ki-agenten-im-einkauf-spalten-generationen-und-geschlechter.html)
- **Germany:** about half of AI users at least sometimes ask ChatGPT & Co. first as a buying guide. — [CIO.de](https://www.cio.de/article/4027108/ki-verdraengt-suchmaschinen-als-shopping-ratgeber.html)
- **Germany, YouGov (insurance):** 47% would most likely use comparison portals such as Check24/Verivox; only 2% of over-55s rely on AI chat systems. — [YouGov](https://yougov.com/de-de/artikel/53288-ki-vergleichsportale-vertrauen-was-versicherer-jetzt-wissen-mussen)
- **Germany, Sirius Campus (car insurance switching season):** 1.7m contracts switched; rising use of AI search (ChatGPT) among young people. — [AssCompact](https://www.asscompact.de/nachrichten/kfz-wechselsaison-diese-anbieter-sind-bei-wechslern-beliebt)

**Forecasts (all FORECAST)**
- McKinsey (Oct 2025): up to $1tn US B2C "orchestrated revenue" and $3–5tn globally by 2030; goods only, excludes services and B2B. — [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants)
- McKinsey Europe piece: "decision influence is here; execution is coming" — discovery/evaluation scaling, full autonomy limited. — [McKinsey DE](https://www.mckinsey.com/de/capabilities/quantumblack/our-insights/europes-agentic-commerce-moment-decision-influence-is-here-execution-is-coming)
- Morgan Stanley (Dec 2025): $190–385bn US e-commerce GMV via agentic shoppers by 2030 (10%–20% of online retail). — [Digital Commerce 360](https://www.digitalcommerce360.com/2025/12/09/morgan-stanley-ai-agentic-shoppers-385-billion-online-sales/)
- Bain (Dec 2025): $300–500bn US by 2030, 15%–25% of e-commerce; counts purchases initiated, influenced or completed by agents. — [Bain](https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/)

### Inferences
- Forecast ranges differ by a factor of two to three mainly because of definitions ("orchestrated/influenced" versus "completed"). The only completed-purchase evidence found (Walmart's 3x lower in-chat conversion, 5%/12% ever-delegated in UK/US, about 6% willing in Germany) points to "AI as research layer" being real and "AI as buyer" being pre-scale in Nov 2026.
- Growth rates of AI referral traffic are slowing sharply (693% → 393% → about 60–70% YoY) as the base grows.

### Gaps
- No measured figure for agentic checkout volume/GMV anywhere (OpenAI, Google, Shopify, Stripe, Visa, Mastercard).
- Gartner "machine customers" figures, EHI, IFH Köln, Adyen, Capgemini surveys: not found in this session.
- No Germany-specific AI referral traffic data.

---

## 3. Impact on aggregators and comparison sites

### Takeaway
The damage so far is in organic search traffic and paid-search cost inflation (AI Overviews), plus sentiment-driven share-price hits; direct AI-agent substitution is still small in measured data. Listed peers responded by launching ChatGPT apps (MoneySuperMarket, Booking, Expedia, Insurify) and own assistants. For German portals (Check24, Verivox, Idealo) very little public data or strategy statement was found.

### Cited Findings

**Google traffic loss (general)**
- 2026 randomized field experiment (1,065 US desktop users): hiding AI Overviews raised organic clicks from 0.37 to 0.62 per search (about 40% reduction when shown). Ahrefs: position-one CTR down as much as 58% on AI Overview keywords. Pew (early 2025): 8% click rate with AI summary vs 15% without. — [webcraftdev](https://webcraftdev.com/en/blog/google-traffic-drop-ai-overviews-diagnosis-2026); [aigrowthagent](https://aigrowthagent.co/articles/ai-overviews-traffic-impact/)

**UK price comparison**
- 10 Feb 2026: MONY Group shares fell about 13% to a 13-year low after Insurify launched a car-insurance comparison app in ChatGPT; GoCompare owner Future also hit. — [City AM](https://www.cityam.com/?p=2398816); [AJ Bell](https://www.ajbell.co.uk/group/news/ai-disruption-fears-hit-shares-moneysupermarket-and-gocompare); [HL](https://www.hl.co.uk/shares/stock-market-news/company--news/mony-group-tanks-on-ai-app-fears)
- 20 Feb 2026: MoneySuperMarket launched its ChatGPT app, billed as the first UK financial services / price comparison ChatGPT app; linked account holders can trigger an automated car insurance quote from stored data. — [Insurance Business](https://www.insurancebusinessmag.com/uk/news/technology/moneysupermarket-brings-aipowered-comparison-to-chatgpt-566181.aspx); [HL](https://www.hl.co.uk/shares/stock-market-news/company--news/moneysupermarket-launches-chatgpt-app)
- Analysts: Barclays called AI risk to PCWs "real but manageable"; Berenberg called the MONY/Future selloff overdone (buy, 275p target). — [HL](https://www.hl.co.uk/shares/stock-market-news/share-tips/stockbroker-tips/mony-group,-future-selloff-on-ai-worries-overdone,-says-berenberg)
- MONY H1 2026 (21 Jul 2026): record revenue £227.1m (+6% like-for-like, +1% reported), adj. EBITDA £75.5m (+3%); CFO Niall McBride: paid search cost inflation of more than 20%, driven partly by Google AI Overviews; insurance returned to growth; gross margin fell. — [MarketBeat](https://www.marketbeat.com/instant-alerts/mony-group-h1-earnings-call-highlights-2026-07-21/?.tsrc=rss); [AJ Bell](https://www.ajbell.co.uk/news/articles/mony-group-backs-2026-outlook-insurance-division-returns-growth)
- Future plc: "Google Zero" strategy; shares plunged by up to a third around the 31 Mar 2026 pre-close update; GoCompare performed more steadily on higher insurance switching. — [Future pre-close PDF](https://futureplc.com/wp-content/uploads/2026/03/2026.03.31-Pre-close-trading-statement.pdf); [interactive investor](https://www.ii.co.uk/analysis-commentary/ii-view-media-firm-future-plunges-third-ii538638)

**Travel**
- Booking's 2025 annual report risk factor: "AI agents may further evolve into full-service booking platforms, increasing competitive pressure and disintermediating" OTAs. — [24/7 Wall St](https://247wallst.com/investing/2026/10/01/how-booking-holdings-and-expedia-are-taking-opposite-bets-on-ai-shopping-agents/)
- Mar 2026: Booking, Expedia, Tripadvisor shares rose when OpenAI stepped back from direct bookings; Bernstein: "incrementally positive" for OTAs. — [Benzinga](https://www.benzinga.com/markets/equities/26/03/51089878/booking-expedia-travelzoo-tripadvisor-shares-soar-as-openai-steps-back-from-direct-chatgpt-booki)
- Booking Q3 2026: CEO Fogel said horizontal personal agents may be adopted much more slowly than anticipated in parts of the world; own assistants (Priceline, Agoda) convert at about 2x non-users; revenue $8.9bn (-1%, incl. a $900m FTC-related reduction), gross bookings +10%. — [PhocusWire](https://www.phocuswire.com/news/finance/booking-holdings-q3-2026-earnings); [CX Dive](https://www.customerexperiencedive.com/news/booking-holdings-credits-ai-better-booking-customer-service-cx/873806/)
- Valuation (1 Oct 2026, one source): forward P/E about 13x Booking, 11x Expedia; Expedia about $263; Booking about $163 after a reported 25-for-1 split in Apr 2026 *(unverified)*. — [24/7 Wall St](https://247wallst.com/investing/2026/10/01/how-booking-holdings-and-expedia-are-taking-opposite-bets-on-ai-shopping-agents/)
- Kayak launched "AI Mode" Oct 2025. — [TechCrunch](https://techcrunch.com/2025/10/16/kayak-launches-an-ai-mode-for-travel-questions-search-and-bookings/). Skift asks "Will AI Kill Travel Metasearch?" (Feb 2026, analysis). — [Skift](https://skift.com/2026/02/16/will-ai-kill-travel-metasearch/)

**US financial comparison**
- NerdWallet: Q4 2025 credit card revenue -24%, SMB -12% on organic search headwinds; Q1 2026 SMB -15%; performance marketing spend +40% to $417m in 2025; Q3 2026 (5 Nov 2026) missed and cut guidance for a second straight quarter, saying organic declines have "stabilized somewhat". — [Business Wire](https://www.businesswire.com/news/home/20260225448516/en/NerdWallet-Reports-Fourth-Quarter-and-Full-Year-2025-Results); [Finviz](https://finviz.com/news/417994/nerdwallet-misses-and-cuts-again-as-auto-insurance-weakness-overshadows-faster-revenue-growth); [Barchart](https://www.barchart.com/story/news/1645464/nerdwallets-growth-story-looks-strong-but-can-it-last)
- LendingTree (Q1 2026): management called AI "a tailwind, not a disruptor". — [Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/lendingtree-tree-q1-2026-earnings-232920563.html)

**Germany**
- Idealo v. Google: LG Berlin II, 13/14 Nov 2025 (16 O 195/19 Kart), awarded about €465m (Idealo claimed €3.3bn incl. interest for 2008–2023); parallel Producto/Testberichte.de about €107m; not final, both sides announced appeals to the Kammergericht. No appeal outcome found as of Nov 2026. — [LTO](https://www.lto.de/recht/nachrichten/n/lg-berlin-zum-unfairen-wettbewerb-16o19519); [beck-aktuell](https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/lg-berlin-16o27524-google-idealo-465-millionen-schadensersatz-suche-ergebnisse-platzierung-2025-11-14); [Kluwer Competition Blog](https://legalblogs.wolterskluwer.com/competition-blog/google-shopping-v-idealo-the-largest-damages-award-in-competition-law-history-by-a-german-court/)
- Check24: founded "Check24 AI Forge GmbH" for AI applications; first Check24 AI Conference Oct 2024. — [cash-online](https://www.cash-online.de/a/special-digitalisierung-kuenstliche-intelligenz-oder-doch-natuerliche-700325/3/)
- Check24: a "CHECK24 ChatGPT App Challenge" repository exists, specifying one MCP proxy endpoint for ChatGPT in front of independent vertical backends; a third-party listing describes a Check24 ChatGPT app covering travel (hotels, packages, rental cars). No official announcement found. — [GitHub](https://github.com/check24-scholarships/check24-chatgpt-app-challenge); [Jotform listing](https://www.jotform.com/ai/best-chatgpt-travel-apps/)
- Check24's own chatbot "Sophie" reported (Aug 2026) to recommend competitors/travel agencies and criticise OTAs when prompted. — [fvw](https://www.fvw.de/traveltech/daten/ich-waere-vorsichtig-check24-chatbot-wirbt-fuer-konkurrenz--und-teilt-gegen-ota-aus-263932)
- Verivox: AI tools "already in use", mainly internal processes. — [cash-online](https://www.cash-online.de/a/special-digitalisierung-kuenstliche-intelligenz-oder-doch-natuerliche-700325/3/)
- Synatix took over Preisvergleich.de and positions itself as challenger to Check24/Verivox; its representative names LLM-started comparisons (agentic AI) as the emerging challenge. — [ZfK](https://www.zfk.de/unternehmen/synatix-uebernimmt-preisvergleich-de)
- Trade press headline "KI: Vergleichsportale bekommen ein Problem" (AI may change insurance distribution more than portals did). — [Versicherungsbote](https://www.versicherungsbote.de/id/4951473/KI-Vergleichsportale-bekommen-ein-Problem/)
- Finanzchef24 launched comparison of commercial insurance via AI dialogue (26 Oct 2026). — [IT Finanzmagazin](https://www.it-finanzmagazin.de/finanzchef24-vergleich-von-gewerbeversicherungen-per-ki-dialog-252909/?fsp_sid=48281)

### Inferences
- The pattern across MONY, NerdWallet and Future is the same two-step squeeze: organic clicks fall, then paid acquisition gets more expensive. Revenue has held up better than share prices (MONY posted record H1 revenue five months after a 13-year share-price low).
- The "ChatGPT app" response (MoneySuperMarket nine days after Insurify) shows incumbents can follow fast; its account-linking design (quote from stored customer data) hints at where portals see their edge: stored profiles and panel integrations.
- Check24 appears to be building an MCP/ChatGPT-app presence but has said little publicly.

### Gaps
- No public traffic, revenue or AI-share figures for Check24, Verivox or Idealo; no executive statements found (Handelsblatt/OMR/Finanz-Szene searches returned nothing).
- Compare the Market, Skyscanner, Trivago, Policygenius, Experian (beyond its ChatGPT app), Expedia Q3 2026: nothing specific found.
- Current share prices for MONY/Future/Trivago not reliably found.
- Booking/Expedia ChatGPT app usage numbers not found.

---

## 4. Agents in financial services, insurance, energy, telco

### Takeaway
Insurance is the most advanced regulated vertical: three ChatGPT insurance apps (Insurify, Tuio, Experian) plus a carrier-built one exist in the US/Spain/UK, with in-chat quoting but not autonomous binding; in Germany there is no such integration and none announced. Evidence of genuinely autonomous AI switching agents in energy/telco was not found; German Wechselservices remain rules-based services with mixed consumer-test results.

### Cited Findings
- Insurify launched the first insurance comparison app in ChatGPT's directory on 9/10 Feb 2026 (US car insurance). On 19 Aug 2026 it added real-time personalised quotes and in-chat shopping; target 40+ states by end 2026. — [Insurance Journal](https://www.insurancejournal.com/news/national/2026/02/10/857535.htm); [Insurify](https://insurify.com/press/news/insurify-expands-chatgpt-plugin/)
- Market reaction: broker stocks fell (Arthur J. Gallagher -9.9%, Aon -9.3%); Insurify's CEO called it an overreaction; S&P notes the app targets retail auto, not large brokers' business. — [Insurance Journal](https://insurancejournal.com/magazines/mag-editorsnote/2026/02/23/858357.htm); [S&P Global](https://www.spglobal.com/market-intelligence/en/news-insights/articles/2026/2/insurify-ceo-flags-overreaction-to-new-ai-app-as-brokers-take-a-hit-98554977)
- Other ChatGPT insurance apps: Tuio (home insurance), Experian Insurance ("quick auto insurance estimates"); Liberty Mutual launched a conversational quoting app in May 2026 (one report). — [Carrier Management](https://www.carriermanagement.com/news/2026/02/10/284411.htm)
- **Germany:** no such ChatGPT insurance integration exists and none is announced; BaFin regards new distribution channels as possible if legal requirements are met. — [Finanztip](https://www.finanztip.de/daily/versicherungen-per-chatgpt-veraendert-ki-jetzt-den-vertragsabschluss/)
- Allianz shares fell up to 3% on the ChatGPT distribution news. — [DAS INVESTMENT](https://www.dasinvestment.com/chatgpt-als-vertriebskanal-drueckt-versicherer-aktien/)
- Allianz strategy: presence on platforms like ChatGPT, partnership with Anthropic; CEO Bäte warns about dependencies. — [Handelsblatt](https://www.handelsblatt.com/finanzen/banken-versicherungen/versicherer/versicherung-wie-die-allianz-vorreiter-bei-der-ki-transformation-werden-will/100236829.html)
- Visibility studies: in chatbot answers on household insurance, Allianz appears in 49%, Ammerländer 44%, HUK-Coburg 39%; in a car-insurance test HUK-Coburg appeared 3 times in 18 searches vs Allianz 10. Chatbots often additionally recommend visiting comparison portals. — [Versicherungsjournal](https://www.versicherungsjournal.de/vertrieb-und-marketing/welche-hausratversicherer-in-ki-chatbots-besonders-haeufig-genannt-werden-156325); [cash-online](https://www.cash-online.de/a/ki-suche-veraendert-den-versicherungsvertrieb-vermittler-bleiben-gefragt-713143/); [Versicherungsbote](https://www.versicherungsbote.de/id/4948686/KI-Chatbots-als-neue-Kundenschnittstelle-im-Versicherungsmarkt/)
- B2B agent infrastructure: Afori connects its AI agents to the Comparit API to automate the car-insurance switching season for brokers. — [AssCompact](https://www.asscompact.de/nachrichten/kfz-wechselsaison-diese-anbieter-sind-bei-wechslern-beliebt)
- German switching services: Wechselpilot charges a fee only on savings; SwitchUp and remind.me are free and commission-funded; Stiftung Warentest advised against remind.me and found shortfalls at Wechselpilot/SwitchUp (test appears dated). — [finanzherr](https://finanzherr.de/sparen/stromwechselservice/); [test.de](https://www.test.de/gas-und-strom-wechselservice-test-5447465-0/)

### Inferences
- In insurance, LLM platforms currently act as lead-gen surfaces for existing licensed comparers (Insurify, MoneySuperMarket), not as brokers: the regulated intermediary still sits behind the chat.
- Insurer visibility in LLM answers does not track market share (HUK-Coburg under-represented), so direct insurers that avoided portals may still need a portal or data feed to be "seen" by agents.

### Gaps
- UK auto-switching (Look After My Bills, Switchcraft, Uswitch), US Rocket Money/Trim, bank agentic offerings, telco agents: the one search returned nothing relevant; not covered.
- HUK-Coburg and Lemonade positions on agent distribution: not found.
- Any AI upgrade of Wechselpilot/SwitchUp/remind.me: not found.

---

## 5. Strategic analyses: disintermediation vs. aggregators as agent infrastructure

### Takeaway
Analyst opinion is split and mostly argument rather than evidence: regulators and consultants flag disintermediation of intermediaries, while 2026 data (OpenAI's checkout retreat, Booking's sub-1% AI share) supports the view that agents still need aggregators' supply, accounts and fulfilment. The emerging consensus is that the fight is over discovery and advertising, with merchants kept as merchant of record.

### Cited Findings
- French Autorité de la concurrence, Opinion 26-A-05 (17 Jul 2026) on AI agents: names disintermediation of parts of the digital economy as a main risk, heightened when agents are integrated into vertically integrated firms' services; recommends agentic commerce standards be developed through open, transparent processes. — [Autorité de la concurrence](https://www.autoritedelaconcurrence.fr/en/opinion/competitive-functioning-artificial-intelligence-ai-agents-sector)
- Bain: third-party agents disintermediate the top of the funnel, but consumers trust retailer-owned agents three times more to complete transactions. — [Bain](https://www.bain.com/insights/agentic-ai-in-retail-how-autonomous-shopping-redefining-customer-journey/)
- BCG: as agents optimise on price, ratings, availability and delivery, retailers risk losing customer data, loyalty, cross-sell and retail-media revenue. — [BCG](https://www.bcg.com/publications/2025/agentic-commerce-redefining-retail-how-to-respond). BCG 2026 CPG survey: 59% report no meaningful agentic capabilities. — [BCG](https://www.bcg.com/publications/2026/how-cpg-companies-win-agentic-commerce)
- Morgan Stanley IM: some platforms face reduced ad/upsell leverage, others gain traffic and conversion; an agent is indifferent to splitting a basket across merchants, weakening one-stop aggregation economics. — [Morgan Stanley](https://www.morganstanley.com/im/en-us/institutional-investor/insights/global-equity-observer/agentic-commerce-new-frontiers.html)
- Ben Thompson (Stratechery, Jan 2026 interview with John Collison): how to update Aggregation Theory for AI is "TBD, to a certain extent"; *(secondhand)* an agent that goes directly to suppliers changes the power dynamic. Stratechery's Eric Seufert interview argues ads will be the answer for agentic commerce (paywalled teaser). — [Stratechery](https://stratechery.com/2026/an-interview-with-ben-thompson-by-john-collison-on-the-cheeky-pint-podcast/); [Stratechery](https://stratechery.com/?p=21285)
- McKinsey: AI agents become "the new gatekeepers of commerce"; in Europe, "decision influence is here; execution is coming". — [McKinsey](https://www.mckinsey.com/de/capabilities/quantumblack/our-insights/europes-agentic-commerce-moment-decision-influence-is-here-execution-is-coming)
- Counter-argument (opinion piece): independent hotels, most of Booking's room nights, cannot be reached directly by agents, so agents still need Booking. — [conduit.ai](https://www.conduit.ai/blog/will-ai-agents-replace-booking-com). Skift: "The AI Agents Nobody Is Asking For". — [Skift](https://newsletters.skift.com/p/the-ai-agents-nobody-is-asking-for)
- Merchant of record: under Google UCP the merchant always remains merchant of record. — [Google](https://developers.google.com/merchant/ucp?hl=de)
- GEO for insurers: trade guidance on "what insurers must do to be recommended by AI agents". — [cash-online](https://www.cash-online.de/a/was-versicherer-jetzt-tun-muessen-um-von-ki-agenten-empfohlen-zu-724262/)

### Inferences
- Portals' defensible assets in an agent world are the ones agents cannot scrape: binding tariff APIs with long-tail suppliers, stored customer profiles, regulated broker status, and post-sale servicing. Their exposed assets are SEO traffic and the comparison UI itself.
- If platform monetisation is ads (ChatGPT Ads live in Germany since Aug 2026; AI Mode ad formats), portals risk re-running the Google Shopping dynamic: paying the interface owner for visibility, which gives the Idealo damages case renewed relevance as precedent.

### Gaps
- a16z, Benedict Evans, Sequoia, Oliver Wyman pieces and Gartner "machine customers"/B2A material: not found.
- The French opinion and McKinsey Europe paper were not read in full.

---

## 6. Failure modes and evidence

### Takeaway
Controlled studies consistently show shopping agents are biased by position and speed of offer and are open to seller manipulation; this is lab evidence, not field incident data. No 2026 measured data on real-world agent purchase error rates, hallucinated prices or agent-driven chargebacks was found.

### Cited Findings
- Microsoft "Magentic Marketplace" (Oct 2025, with Arizona State; 100 customer agents vs 300 business agents, simulated): first proposals were selected 60–100% of the time versus near zero for third proposals; some models reached 100% first-proposal selection; frontier models approach optimal welfare only under ideal search conditions. — [arXiv 2510.25779](https://arxiv.org/html/2510.25779v1); [Microsoft Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/10/multi-agent-marketplace.pdf)
- Same study as reported in press: six manipulation strategies tested (fake credentials, social proof, prompt injection); only Claude Sonnet 4 resisted *(news summary, check paper)*. — [Computerworld](https://www.computerworld.com/article/4086907/microsoft-lets-shopping-bots-loose-in-a-sandbox.html)
- A later paper summarises this as a 10–30x advantage for response speed over quality. — [arXiv 2601.03061](https://arxiv.org/pdf/2601.03061)
- Columbia/Yale "What Is Your AI Agent Buying?" (ACES sandbox; Claude Sonnet 4, GPT-4.1, Gemini 2.5 Flash): position significantly affects product selection; position effects are "sticky" even when instructed to ignore them; models make divergent choices on identical assortments. — [arXiv 2508.02630](https://arxiv.org/pdf/2508.02630); [Columbia Business School](https://business.columbia.edu/insights/digital-future-initiative/ai-shopping-agents)
- Palo Alto Unit 42: shopping agents are "highly susceptible to indirect prompt injection"; scenarios are constructed, not incident data. (Note: that page itself contained embedded text addressed to AI agents, which was ignored.) — [Unit 42](https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/)
- Chargebacks911 (Feb 2026) warns of a new dispute category from agent purchases (no sample/rate given); Hogan Lovells and Riskified raise unresolved liability for erroneous or unauthorised agent purchases. — [Startups.co.uk](https://startups.co.uk/news/agentic-ai-chargebacks/); [Riskified](https://www.riskified.com/blog/agentic-ai-ecommerce/)
- Real-world product failure: Check24's "Sophie" chatbot recommending competitors (Aug 2026). — [fvw](https://www.fvw.de/traveltech/daten/ich-waere-vorsichtig-check24-chatbot-wirbt-fuer-konkurrenz--und-teilt-gegen-ota-aus-263932)
- Real-world consent failure: Amazon "Buy for Me" listing brands' products without permission. — [Modern Retail](https://www.modernretail.co/technology/brands-are-upset-that-buy-for-me-is-featuring-their-products-on-amazon-without-permission/)

### Inferences
- First-offer and position bias mean "being first/fastest in the agent's candidate list" becomes the new ranking fight, which favours whoever supplies the candidate list: a role an aggregator API can fill, but also one a platform can sell as an ad slot.
- Model-dependent choices imply a supplier's sales could shift when a platform swaps its underlying model.

### Gaps
- No field data on agent error rates, wrong-item purchases, hallucinated prices, or measured chargeback/fraud rates for agentic transactions.
- Security evaluations of Comet/Atlas and Visa/Mastercard agentic programme rules: not found.
