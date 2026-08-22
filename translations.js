(() => {
  "use strict";

  const STORAGE_KEY = "portfolioLanguage";
  const SUPPORTED_LANGUAGES = ["en", "pt", "es"];
  const LANGUAGE_TAGS = { en: "en", pt: "pt-BR", es: "es" };

  const copy = {
    common: {
      "Skip to content": ["Ir para o conteúdo", "Ir al contenido"],
      "About": ["Sobre", "Sobre mí"],
      "Projects": ["Projetos", "Proyectos"],
      "Experience": ["Experiência", "Experiencia"],
      "Skills": ["Competências", "Competencias"],
      "Connect": ["Contato", "Contacto"],
      "Download CV": ["Baixar CV", "Descargar CV"],
      "View projects": ["Ver projetos", "Ver proyectos"],
      "View full profile →": ["Ver perfil completo →", "Ver perfil completo →"],
      "View case study": ["Ver estudo de caso", "Ver caso de estudio"],
      "Selected work": ["Projetos selecionados", "Trabajos seleccionados"],
      "Education": ["Formação", "Formación"],
      "Context": ["Contexto", "Contexto"],
      "Business problem": ["Problema de negócio", "Problema de negocio"],
      "My role": ["Minha função", "Mi función"],
      "Solution": ["Solução", "Solución"],
      "Data & tools": ["Dados & ferramentas", "Datos & herramientas"],
      "Impact": ["Impacto", "Impacto"],
      "Confidentiality": ["Confidencialidade", "Confidencialidad"],
      "Business impact": ["Impacto no negócio", "Impacto en el negocio"],
      "Environment": ["Ambiente", "Entorno"],
      "Stakeholders": ["Stakeholders", "Stakeholders"],
      "Role": ["Função", "Función"],
      "Recognition": ["Reconhecimento", "Reconocimiento"],
      "Focus": ["Foco", "Enfoque"],
      "Collaboration": ["Colaboração", "Colaboración"],
      "Australia": ["Austrália", "Australia"],
      "Brazil": ["Brasil", "Brasil"],
      "Completed 2023": ["Concluído em 2023", "Finalizado em 2023"],
      "Completed 2018": ["Concluído em 2018", "Finalizado em 2018"],
      "Master of Information Technology": ["Mestrado em Tecnologia da Informação", "Máster en Tecnología de la Información"],
      "Bachelor of International Business": ["Bacharelado em Negócios Internacionais", "Grado en Negocios Internacionales"],
      "Recognised at BOQ Group for the impact of my analytics work and project delivery, including the Digital Home Loan Lead Tracking initiative.": ["Reconhecido no BOQ Group pelo impacto do meu trabalho em analytics e pela entrega de projetos, incluindo a iniciativa Digital Home Loan Lead Tracking.", "Reconocido en BOQ Group por el impacto de mi trabajo en analytics y la entrega de proyectos, incluida la iniciativa Digital Home Loan Lead Tracking."],
      "Open to new opportunities": ["Aberto a novas oportunidades", "Abierto a nuevas oportunidades"],
      "Always open to interesting opportunities, new challenges and conversations. Feel free to get in touch.": ["Sempre aberto a oportunidades interessantes, novos desafios e conversas. Fique à vontade para entrar em contato.", "Siempre abierto a oportunidades interesantes, nuevos desafíos y conversaciones. No dudes en ponerte en contacto."],
      "Email me": ["Enviar e-mail", "Escríbeme"],
      "Case study 01 · Customer acquisition": ["Estudo de caso 01 · Aquisição de clientes", "Caso de estudio 01 · Adquisición de clientes"],
      "Case study 02 · Market strategy": ["Estudo de caso 02 · Estratégia de mercado", "Caso de estudio 02 · Estrategia de mercado"],
      "Case study 03 · Lifecycle marketing": ["Estudo de caso 03 · Lifecycle Marketing", "Caso de estudio 03 · Lifecycle Marketing"],
      "Australian banking · Multi-brand": ["Setor bancário australiano · Multimarcas", "Banca australiana · Multimarca"],
      "Australian banking · Around 111 branches": ["Setor bancário australiano · Cerca de 111 agências", "Banca australiana · Alrededor de 111 sucursales"],
      "Digital Marketing · Leadership · Regional teams": ["Digital Marketing · Liderança · Equipes regionais", "Digital Marketing · Liderazgo · Equipos regionales"],
      "Leadership · Marketing · Retail · Branch teams": ["Liderança · Marketing · Retail · Equipes de agências", "Liderazgo · Marketing · Retail · Equipos de sucursales"],
      "EY · Internal data teams · Marketing stakeholders": ["EY · Equipes internas de dados · Stakeholders de Marketing", "EY · Equipos internos de datos · Stakeholders de Marketing"],
      "Open to international remote opportunities": ["Aberto a oportunidades remotas internacionais", "Abierto a oportunidades remotas internacionales"]
    },

    home: {
      "International analytics professional with experience across Australian banking, CRM, business intelligence, business analysis, marketing analytics, customer insights, and stakeholder-facing decision-making.": ["Profissional internacional de analytics com experiência no setor bancário australiano, CRM, Business Intelligence, análise de negócios, Marketing Analytics, Customer Insights e tomada de decisão junto a stakeholders.", "Profesional internacional de analytics con experiencia en banca australiana, CRM, Business Intelligence, análisis de negocio, Marketing Analytics, Customer Insights y toma de decisiones junto a stakeholders."],
      "Explore selected work": ["Ver projetos selecionados", "Explorar trabajos seleccionados"],
      "Start a conversation": ["Iniciar uma conversa", "Iniciar una conversación"],
      "Australian banking, analytics, CRM & business intelligence.": ["Setor bancário australiano, analytics, CRM & Business Intelligence.", "Banca australiana, analytics, CRM & Business Intelligence."],
      "International experience across Digital & Marketing, Retail, business analysis, customer insights, stakeholder reporting and analytics delivery.": ["Experiência internacional em Digital & Marketing, Retail, análise de negócios, Customer Insights, relatórios para stakeholders e entrega de soluções analíticas.", "Experiencia internacional en Digital & Marketing, Retail, análisis de negocio, Customer Insights, reporting para stakeholders y entrega de soluciones analíticas."],
      "Professional profile": ["Perfil profissional", "Perfil profesional"],
      "I am a data, CRM and business analytics professional with international experience in Australian banking, working across analytics, business intelligence, business analysis, marketing performance, customer insights and commercial decision support.": ["Sou um profissional de dados, CRM e business analytics com experiência internacional no setor bancário australiano, atuando em analytics, Business Intelligence, análise de negócios, performance de marketing, Customer Insights e suporte a decisões comerciais.", "Soy un profesional de datos, CRM y business analytics con experiencia internacional en banca australiana, trabajando en analytics, Business Intelligence, análisis de negocio, rendimiento de marketing, Customer Insights y apoyo a decisiones comerciales."],
      "At BOQ Group, I worked across Digital & Marketing, Retail, and leadership reporting, building Power BI and CRM analytics solutions used to monitor lead performance, campaign activity, branch markets, and customer behaviour. My work combined technical execution with business analysis: understanding stakeholder needs, structuring data, building reporting logic, and translating insight into decisions.": ["No BOQ Group, atuei com relatórios para Digital & Marketing, Retail e liderança, desenvolvendo soluções de Power BI e CRM Analytics para acompanhar performance de leads, atividades de campanhas, mercados das agências e comportamento de clientes. Meu trabalho combinou execução técnica e análise de negócios: entender as necessidades dos stakeholders, estruturar dados, construir lógicas de reporting e transformar insights em decisões.", "En BOQ Group, trabajé con reporting para Digital & Marketing, Retail y liderazgo, desarrollando soluciones de Power BI y CRM Analytics para monitorizar el rendimiento de leads, la actividad de campañas, los mercados de las sucursales y el comportamiento de clientes. Mi trabajo combinó ejecución técnica y análisis de negocio: comprender las necesidades de los stakeholders, estructurar datos, crear lógica de reporting y convertir insights en decisiones."],
      "My work sits between data, technology, business and stakeholders. I bring structure to complex requirements, connect analytical evidence with commercial context, and support decisions across customer, marketing, product, growth and business operations questions.": ["Meu trabalho conecta dados, tecnologia, negócio e stakeholders. Estruturo requisitos complexos, relaciono evidências analíticas ao contexto comercial e apoio decisões sobre clientes, marketing, produtos, crescimento e operações de negócio.", "Mi trabajo conecta datos, tecnología, negocio y stakeholders. Estructuro requisitos complejos, relaciono la evidencia analítica con el contexto comercial y apoyo decisiones sobre clientes, marketing, producto, crecimiento y operaciones de negocio."],
      "Professional snapshot": ["Resumo profissional", "Resumen profesional"],
      "Core role": ["Atuação principal", "Función principal"],
      "Data, CRM & Business Analytics": ["Dados, CRM & Business Analytics", "Datos, CRM & Business Analytics"],
      "Specialisms": ["Especialidades", "Especialidades"],
      "CRM analytics, BI, business analysis, marketing & customer insights": ["CRM Analytics, BI, análise de negócios, Marketing & Customer Insights", "CRM Analytics, BI, análisis de negocio, Marketing & Customer Insights"],
      "Industry": ["Setor", "Sector"],
      "Australian banking & financial services": ["Setor bancário australiano & serviços financeiros", "Banca australiana & servicios financieros"],
      "Business exposure": ["Experiência de negócio", "Experiencia de negocio"],
      "Digital, Marketing, Retail, leadership, EY & Deloitte": ["Digital, Marketing, Retail, liderança, EY & Deloitte", "Digital, Marketing, Retail, liderazgo, EY & Deloitte"],
      "Featured Projects": ["Projetos em destaque", "Proyectos destacados"],
      "01 · Customer acquisition": ["01 · Aquisição de clientes", "01 · Adquisición de clientes"],
      "Built a national lead tracking framework connecting CRM, campaign, paid media, and lead data in Power BI for Digital Marketing, leadership, and regional teams.": ["Desenvolvi um framework nacional de acompanhamento de leads, conectando dados de CRM, campanhas, mídia paga e leads no Power BI para Digital Marketing, liderança e equipes regionais.", "Desarrollé un framework nacional de seguimiento de leads que conectaba datos de CRM, campañas, medios pagados y leads en Power BI para Digital Marketing, liderazgo y equipos regionales."],
      "The solution became a repeatable reporting standard across a multi-brand banking environment and contributed to Employee of the Month recognition.": ["A solução tornou-se um padrão de reporting replicável em um ambiente bancário multimarcas e contribuiu para o reconhecimento de Employee of the Month.", "La solución se convirtió en un estándar de reporting replicable en un entorno bancario multimarca y contribuyó al reconocimiento de Employee of the Month."],
      "02 · Market strategy": ["02 · Estratégia de mercado", "02 · Estrategia de mercado"],
      "Combined internal CRM and customer portfolio data with demographic and postcode-level datasets to compare the bank's customer base with each local market.": ["Combinei dados internos de CRM e portfólio de clientes com dados demográficos e de códigos postais para comparar a base de clientes do banco com cada mercado local.", "Combiné datos internos de CRM y cartera de clientes con datos demográficos y de códigos postales para comparar la base de clientes del banco con cada mercado local."],
      "The framework supported leadership, Retail, Marketing, and branch teams with clearer context for local strategy and commercial opportunity.": ["O framework ofereceu à liderança e às equipes de Retail, Marketing e agências um contexto mais claro para estratégia local e oportunidades comerciais.", "El framework proporcionó al liderazgo y a los equipos de Retail, Marketing y sucursales un contexto más claro para la estrategia local y las oportunidades comerciales."],
      "03 · Lifecycle marketing": ["03 · Lifecycle Marketing", "03 · Lifecycle Marketing"],
      "Worked with EY and internal data stakeholders on governed analytics for campaign activations, EDM performance, audience segments, control groups, and A/B testing.": ["Trabalhei com a EY e stakeholders internos de dados em analytics governado para ativações de campanhas, performance de EDM, segmentos de audiência, grupos de controle e A/B Testing.", "Trabajé con EY y stakeholders internos de datos en analytics gobernado para activaciones de campañas, rendimiento de EDM, segmentos de audiencia, grupos de control y A/B Testing."],
      "I acted as the Digital & Marketing team's internal CRM, Power BI, Data Analyst, and Business Analyst reference.": ["Atuei como referência interna de CRM, Power BI, Data Analyst e Business Analyst para a equipe de Digital & Marketing.", "Actué como referente interno de CRM, Power BI, Data Analyst y Business Analyst para el equipo de Digital & Marketing."],
      "Selected Highlights": ["Destaques selecionados", "Logros destacados"],
      "Australia-wide analytics": ["Analytics em toda a Austrália", "Analytics en toda Australia"],
      "Delivered analytics and reporting supporting teams across Australia, including a banking network of approximately 111 branches.": ["Entreguei soluções de analytics e reporting para equipes em toda a Austrália, incluindo uma rede bancária de aproximadamente 111 agências.", "Entregué soluciones de analytics y reporting para equipos de toda Australia, incluida una red bancaria de aproximadamente 111 sucursales."],
      "Banking brands": ["Marcas bancárias", "Marcas bancarias"],
      "Worked across BOQ Group brands including Bank of Queensland, ME Bank, and Virgin Money Australia where relevant.": ["Atuei com marcas do BOQ Group, incluindo Bank of Queensland, ME Bank e Virgin Money Australia, conforme o contexto.", "Trabajé con marcas de BOQ Group, incluidas Bank of Queensland, ME Bank y Virgin Money Australia, según el contexto."],
      "Employee of the Month": ["Employee of the Month", "Employee of the Month"],
      "Recognised at BOQ Group for the impact of my analytics work and project delivery, including the Digital Home Loan Lead Tracking initiative.": ["Reconhecido no BOQ Group pelo impacto do meu trabalho em analytics e pela entrega de projetos, incluindo a iniciativa Digital Home Loan Lead Tracking.", "Reconocido en BOQ Group por el impacto de mi trabajo en analytics y la entrega de proyectos, incluida la iniciativa Digital Home Loan Lead Tracking."],
      "Consulting": ["Consultoria", "Consultoría"],
      "Strategic consulting collaboration": ["Colaboração estratégica com consultorias", "Colaboración estratégica con consultoras"],
      "Collaborated with EY and Deloitte as external partners on analytics initiatives across CRM, marketing, data and business reporting.": ["Colaborei com EY e Deloitte como parceiros externos em iniciativas de analytics envolvendo CRM, marketing, dados e reporting de negócios.", "Colaboré con EY y Deloitte como socios externos en iniciativas de analytics relacionadas con CRM, marketing, datos y reporting de negocio."],
      "BOQ Group · Australia": ["BOQ Group · Austrália", "BOQ Group · Australia"],
      "Led and supported Digital & Marketing analytics across CRM, Power BI, campaign performance, and customer insight. Owned reporting frameworks, translated stakeholder requirements into business logic, and collaborated across BOQ Group brands with leadership, data teams, EY, and Deloitte as external consulting partners.": ["Liderei e apoiei analytics de Digital & Marketing em CRM, Power BI, performance de campanhas e Customer Insights. Fui responsável por frameworks de reporting, traduzi requisitos de stakeholders em lógica de negócio e colaborei com liderança, equipes de dados, EY e Deloitte em diferentes marcas do BOQ Group.", "Lideré y apoyé analytics de Digital & Marketing en CRM, Power BI, rendimiento de campañas y Customer Insights. Fui responsable de frameworks de reporting, traduje requisitos de stakeholders en lógica de negocio y colaboré con liderazgo, equipos de datos, EY y Deloitte en distintas marcas de BOQ Group."],
      "Supported retail banking performance and stakeholder reporting across approximately 111 branches in a multi-brand environment, working with Power BI, Excel, Microsoft Dynamics 365, credit-product, customer, and lead data.": ["Apoiei a análise de performance do banco de varejo e o reporting para stakeholders em aproximadamente 111 agências, em um ambiente multimarcas, utilizando Power BI, Excel, Microsoft Dynamics 365 e dados de produtos de crédito, clientes e leads.", "Apoyé el análisis del rendimiento de banca minorista y el reporting para stakeholders en aproximadamente 111 sucursales, dentro de un entorno multimarca, utilizando Power BI, Excel, Microsoft Dynamics 365 y datos de productos de crédito, clientes y leads."],
      "Master of Information Technology": ["Mestrado em Tecnologia da Informação", "Máster en Tecnología de la Información"],
      "Bachelor of International Business": ["Bacharelado em Negócios Internacionais", "Grado en Negocios Internacionales"],
      "Torrens University · Australia": ["Torrens University · Austrália", "Torrens University · Australia"],
      "FUMEC · Brazil": ["FUMEC · Brasil", "FUMEC · Brasil"]
    },

    profile: {
      "Detailed professional profile": ["Perfil profissional detalhado", "Perfil profesional detallado"],
      "Data, CRM & Business Analytics professional working across business intelligence, business analysis, marketing and customer insights, commercial analytics, and stakeholder decision-making.": ["Profissional de Data, CRM & Business Analytics com atuação em Business Intelligence, análise de negócios, Marketing e Customer Insights, analytics comercial e tomada de decisão junto a stakeholders.", "Profesional de Data, CRM & Business Analytics con experiencia en Business Intelligence, análisis de negocio, Marketing y Customer Insights, analytics comercial y toma de decisiones junto a stakeholders."],
      "I work at the intersection of CRM, BI, marketing analytics, and business strategy, connecting customer data, campaign activity, and commercial performance through trusted reporting frameworks.": ["Atuo na interseção entre CRM, BI, Marketing Analytics e estratégia de negócios, conectando dados de clientes, atividades de campanhas e performance comercial por meio de frameworks de reporting confiáveis.", "Trabajo en la intersección de CRM, BI, Marketing Analytics y estrategia de negocio, conectando datos de clientes, actividad de campañas y rendimiento comercial mediante frameworks de reporting confiables."],
      "My background combines Australian banking experience, hands-on analytics delivery, business analysis, stakeholder management, and international corporate communication.": ["Minha trajetória combina experiência no setor bancário australiano, entrega prática de analytics, análise de negócios, gestão de stakeholders e comunicação corporativa internacional.", "Mi trayectoria combina experiencia en banca australiana, entrega práctica de analytics, análisis de negocio, gestión de stakeholders y comunicación corporativa internacional."],
      "International background": ["Experiência internacional", "Experiencia internacional"],
      "Languages": ["Idiomas", "Idiomas"],
      "Capabilities": ["Competências", "Competencias"],
      "Professional experience": ["Experiência profissional", "Experiencia profesional"],
      "Relevant Professional Experience": ["Experiência profissional relevante", "Experiencia profesional relevante"],
      "Selected professional experience most relevant to analytics, CRM, business intelligence and business-facing roles.": ["Experiências profissionais selecionadas por sua relevância para analytics, CRM, Business Intelligence e funções voltadas ao negócio.", "Experiencias profesionales seleccionadas por su relevancia para analytics, CRM, Business Intelligence y funciones orientadas al negocio."],
      "Worked across": ["Atuação em", "Experiencia en"],
      "Acted as the main CRM and Power BI analytics reference for the Digital & Marketing team across campaign, customer, lead, and commercial reporting.": ["Atuei como principal referência de CRM e Power BI Analytics para a equipe de Digital & Marketing em relatórios de campanhas, clientes, leads e performance comercial.", "Actué como principal referente de CRM y Power BI Analytics para el equipo de Digital & Marketing en reporting de campañas, clientes, leads y rendimiento comercial."],
      "Scoped reporting solutions, gathered stakeholder requirements, translated business questions into analytics logic, and maintained Power BI reporting used by business teams.": ["Defini o escopo de soluções de reporting, levantei requisitos com stakeholders, transformei questões de negócio em lógica analítica e mantive relatórios em Power BI utilizados pelas equipes de negócio.", "Definí el alcance de soluciones de reporting, recopilé requisitos de stakeholders, convertí preguntas de negocio en lógica analítica y mantuve informes de Power BI utilizados por los equipos de negocio."],
      "Built and supported reporting frameworks across customer acquisition, digital home loan leads, marketing campaigns, lifecycle activity, and customer behaviour.": ["Desenvolvi e apoiei frameworks de reporting para aquisição de clientes, leads digitais de crédito imobiliário, campanhas de marketing, atividades de lifecycle e comportamento de clientes.", "Desarrollé y apoyé frameworks de reporting para adquisición de clientes, leads digitales de crédito hipotecario, campañas de marketing, actividad de lifecycle y comportamiento de clientes."],
      "Worked across BOQ Group brands, including Bank of Queensland, ME Bank, and Virgin Money Australia where relevant.": ["Atuei com marcas do BOQ Group, incluindo Bank of Queensland, ME Bank e Virgin Money Australia, conforme o contexto.", "Trabajé con marcas de BOQ Group, incluidas Bank of Queensland, ME Bank y Virgin Money Australia, según el contexto."],
      "Collaborated with leadership, internal data teams, and external consulting partners including EY and Deloitte on strategic analytics initiatives. EY was the confirmed partner for the lifecycle marketing framework.": ["Colaborei com a liderança, equipes internas de dados e consultorias externas, incluindo EY e Deloitte, em iniciativas estratégicas de analytics. A EY foi a parceira confirmada no framework de Lifecycle Marketing.", "Colaboré con liderazgo, equipos internos de datos y consultoras externas, incluidas EY y Deloitte, en iniciativas estratégicas de analytics. EY fue el socio confirmado para el framework de Lifecycle Marketing."],
      "Supported governed use of customer and campaign data across Microsoft Dynamics 365, Adobe Campaign, SQL, Power BI, and Databricks-related workflows.": ["Apoiei o uso governado de dados de clientes e campanhas em fluxos envolvendo Microsoft Dynamics 365, Adobe Campaign, SQL, Power BI e Databricks.", "Apoyé el uso gobernado de datos de clientes y campañas en flujos relacionados con Microsoft Dynamics 365, Adobe Campaign, SQL, Power BI y Databricks."],
      "Supported reporting across an Australian retail banking network of approximately 111 branches.": ["Apoiei o reporting de uma rede bancária de varejo australiana com aproximadamente 111 agências.", "Apoyé el reporting de una red de banca minorista australiana de aproximadamente 111 sucursales."],
      "Analysed retail performance, credit-product, customer, lead, and operational data using Power BI, Excel, and Microsoft Dynamics 365.": ["Analisei performance de varejo e dados operacionais, de produtos de crédito, clientes e leads utilizando Power BI, Excel e Microsoft Dynamics 365.", "Analicé el rendimiento minorista y datos operativos, de productos de crédito, clientes y leads utilizando Power BI, Excel y Microsoft Dynamics 365."],
      "Provided reporting support for branch and regional stakeholders in a multi-brand banking environment.": ["Forneci suporte de reporting para stakeholders de agências e regiões em um ambiente bancário multimarcas.", "Proporcioné apoyo de reporting a stakeholders de sucursales y regiones en un entorno bancario multimarca."],
      "Combined operational context with data analysis to help business users understand performance and follow-up activity.": ["Combinei contexto operacional e análise de dados para ajudar usuários de negócio a compreender performance e atividades de acompanhamento.", "Combiné contexto operativo y análisis de datos para ayudar a los usuarios de negocio a comprender el rendimiento y las actividades de seguimiento."],
      "Analysed institutional data and prepared structured datasets for academic and operational reporting.": ["Analisei dados institucionais e preparei datasets estruturados para reporting acadêmico e operacional.", "Analicé datos institucionales y preparé datasets estructurados para reporting académico y operativo."],
      "Developed Tableau dashboards and used Python for exploratory analysis, data preparation, and analytical workflows.": ["Desenvolvi dashboards em Tableau e utilizei Python para análise exploratória, preparação de dados e fluxos analíticos.", "Desarrollé dashboards en Tableau y utilicé Python para análisis exploratorio, preparación de datos y flujos analíticos."],
      "Translated institutional information into useful reporting for academic and operational stakeholders.": ["Transformei informações institucionais em reporting útil para stakeholders acadêmicos e operacionais.", "Convertí información institucional en reporting útil para stakeholders académicos y operativos."],
      "Applied information technology and analytical methods in a practical, stakeholder-facing environment.": ["Apliquei tecnologia da informação e métodos analíticos em um ambiente prático e voltado a stakeholders.", "Apliqué tecnología de la información y métodos analíticos en un entorno práctico y orientado a stakeholders."],
      "Supported GECEX foreign trade activity and export foreign exchange contract processes within Banco do Brasil.": ["Apoiei as atividades de comércio exterior da GECEX e os processos de contratos de câmbio de exportação no Banco do Brasil.", "Apoyé las actividades de comercio exterior de GECEX y los procesos de contratos de cambio de exportación en Banco do Brasil."],
      "Worked with structured documentation, operational data systems, and transaction records requiring accuracy and process discipline.": ["Trabalhei com documentação estruturada, sistemas de dados operacionais e registros de transações que exigiam precisão e disciplina de processos.", "Trabajé con documentación estructurada, sistemas de datos operativos y registros de transacciones que exigían precisión y disciplina de procesos."],
      "Operated within a compliance-oriented banking environment while supporting documentation and foreign exchange workflows.": ["Atuei em um ambiente bancário orientado a compliance, apoiando documentação e fluxos de câmbio.", "Trabajé en un entorno bancario orientado al compliance, apoyando documentación y flujos de cambio."],
      "Built an early foundation in Brazilian banking, international business operations, and professional responsibility.": ["Construí uma base inicial no setor bancário brasileiro, em operações de negócios internacionais e responsabilidade profissional.", "Construí una base inicial en banca brasileña, operaciones de negocios internacionales y responsabilidad profesional."],
      "Academic background": ["Formação acadêmica", "Formación académica"],
      "Brisbane, Australia": ["Brisbane, Austrália", "Brisbane, Australia"],
      "Belo Horizonte, Brazil": ["Belo Horizonte, Brasil", "Belo Horizonte, Brasil"],
      "Diploma of International Business · Greystone College · Brisbane": ["Diploma em Negócios Internacionais · Greystone College · Brisbane", "Diploma en Negocios Internacionales · Greystone College · Brisbane"],
      "Certificate IV · Australia": ["Certificate IV · Austrália", "Certificate IV · Australia"],
      "Cambridge Advanced English studies · Brisbane": ["Estudos de Cambridge Advanced English · Brisbane", "Estudios de Cambridge Advanced English · Brisbane"],
      "General English Advanced · Shafston International College · Gold Coast": ["General English Advanced · Shafston International College · Gold Coast", "General English Advanced · Shafston International College · Gold Coast"],
      "Brazil, Australia, and remote work": ["Brasil, Austrália e trabalho remoto", "Brasil, Australia y trabajo remoto"],
      "7 years in Australia": ["7 anos na Austrália", "7 años en Australia"],
      "Built substantial academic, professional, and personal experience in Australia over approximately seven years, including postgraduate education, corporate banking, analytics delivery, and work in English-speaking environments.": ["Construí uma sólida experiência acadêmica, profissional e pessoal na Austrália ao longo de aproximadamente sete anos, incluindo pós-graduação, setor bancário corporativo, entrega de analytics e atuação em ambientes de língua inglesa.", "Desarrollé una sólida experiencia académica, profesional y personal en Australia durante aproximadamente siete años, incluyendo estudios de posgrado, banca corporativa, entrega de analytics y trabajo en entornos de habla inglesa."],
      "BOQ Group · Australian banking career": ["BOQ Group · Carreira no setor bancário australiano", "BOQ Group · Carrera en banca australiana"],
      "Worked inside an Australian corporate banking environment across Digital & Marketing, Retail, branch, regional, leadership, and data stakeholders.": ["Atuei em um ambiente bancário corporativo australiano com stakeholders de Digital & Marketing, Retail, agências, regiões, liderança e dados.", "Trabajé en un entorno bancario corporativo australiano con stakeholders de Digital & Marketing, Retail, sucursales, regiones, liderazgo y datos."],
      "Brisbane → Sydney collaboration": ["Colaboração Brisbane → Sydney", "Colaboración Brisbane → Sydney"],
      "While based in Brisbane, BOQ flew me to Sydney to work in person with EY and stakeholders on the Lifecycle Marketing & Campaign Performance project, reflecting project importance and stakeholder trust.": ["Enquanto estava em Brisbane, o BOQ me levou a Sydney para trabalhar presencialmente com a EY e stakeholders no projeto Lifecycle Marketing & Campaign Performance, refletindo a importância do projeto e a confiança dos stakeholders.", "Mientras estaba en Brisbane, BOQ me llevó a Sídney para trabajar presencialmente con EY y stakeholders en el proyecto Lifecycle Marketing & Campaign Performance, lo que reflejó la importancia del proyecto y la confianza de los stakeholders."],
      "Senior Bartender / Barista while studying in Australia, developing long-term customer-facing professionalism, responsibility, and adaptability.": ["Senior Bartender / Barista durante meus estudos na Austrália, desenvolvendo profissionalismo no atendimento ao cliente, responsabilidade e adaptabilidade.", "Senior Bartender / Barista durante mis estudios en Australia, desarrollando profesionalidad en atención al cliente, responsabilidad y adaptabilidad."],
      "Technology & Innovation Volunteer, contributing to an international event focused on technology, ideas, creative industries, and emerging innovation.": ["Voluntário de Tecnologia & Inovação, contribuindo para um evento internacional focado em tecnologia, ideias, indústrias criativas e inovação emergente.", "Voluntario de Tecnología & Innovación, contribuyendo a un evento internacional centrado en tecnología, ideas, industrias creativas e innovación emergente."],
      "Awards, recognition & leadership": ["Prêmios, reconhecimento & liderança", "Premios, reconocimiento & liderazgo"],
      "Professional impact and responsibility": ["Impacto profissional e responsabilidade", "Impacto profesional y responsabilidad"],
      "Employee of the Month · BOQ Group": ["Employee of the Month · BOQ Group", "Employee of the Month · BOQ Group"],
      "Pioneering analytics capability": ["Capacidade pioneira de analytics", "Capacidad pionera de analytics"],
      "The Digital Home Loan Lead Tracking project introduced a new structured capability within the bank and became a repeatable reporting framework across a developing digital lending channel.": ["O projeto Digital Home Loan Lead Tracking introduziu uma nova capacidade estruturada no banco e tornou-se um framework de reporting replicável em um canal de crédito digital em desenvolvimento.", "El proyecto Digital Home Loan Lead Tracking introdujo una nueva capacidad estructurada en el banco y se convirtió en un framework de reporting replicable en un canal de crédito digital en desarrollo."],
      "DeMolay Order · President": ["Ordem DeMolay · Presidente", "Orden DeMolay · Presidente"],
      "Held a leadership position during my younger years and university period, building early experience in organisation, responsibility, and working with people.": ["Exerci uma posição de liderança durante a juventude e o período universitário, desenvolvendo desde cedo experiência em organização, responsabilidade e trabalho com pessoas.", "Ocupé una posición de liderazgo durante mi juventud y etapa universitaria, desarrollando desde temprano experiencia en organización, responsabilidad y trabajo con personas."],
      "Professional communication": ["Comunicação profissional", "Comunicación profesional"],
      "Portuguese": ["Português", "Portugués"],
      "Native proficiency": ["Nativo", "Nativo"],
      "English": ["Inglês", "Inglés"],
      "Fluent · Full professional proficiency, including professional use in Australian corporate environments": ["Fluente · Proficiência profissional completa, incluindo uso profissional em ambientes corporativos australianos", "Fluido · Competencia profesional completa, incluido el uso profesional en entornos corporativos australianos"],
      "Spanish": ["Espanhol", "Español"],
      "Advanced proficiency": ["Proficiência avançada", "Competencia avanzada"],
      "Tools & capabilities": ["Ferramentas & competências", "Herramientas & competencias"],
      "Analytics, business, and delivery": ["Analytics, negócios e entrega", "Analytics, negocio y entrega"],
      "Analytics & BI": ["Análise de Dados & BI", "Analítica & BI"],
      "CRM & Marketing Analytics": ["CRM & Marketing Analytics", "CRM & Marketing Analytics"],
      "AI & Automation": ["IA & Automação", "IA & Automatización"],
      "Business Analysis & Strategy": ["Análise de Negócios & Estratégia", "Análisis de Negocio & Estrategia"],
      "Delivery & Collaboration": ["Entrega & Colaboração", "Entrega & Colaboración"]
    },

    "digital-home-loan": {
      "An end-to-end reporting framework connecting CRM, campaign, paid media, and lead data to give BOQ Group a consistent view of digital home loan performance.": ["Um framework de reporting de ponta a ponta que conecta dados de CRM, campanhas, mídia paga e leads para oferecer ao BOQ Group uma visão consistente da performance de crédito imobiliário digital.", "Un framework de reporting de extremo a extremo que conecta datos de CRM, campañas, medios pagados y leads para ofrecer a BOQ Group una visión consistente del rendimiento del crédito hipotecario digital."],
      "Data & CRM Analyst · BI delivery · Business analysis": ["Data & CRM Analyst · Entrega de BI · Análise de negócios", "Data & CRM Analyst · Entrega de BI · Análisis de negocio"],
      "Employee of the Month · BOQ Group": ["Employee of the Month · BOQ Group", "Employee of the Month · BOQ Group"],
      "Solution architecture": ["Arquitetura da solução", "Arquitectura de la solución"],
      "Website, app & paid media": ["Website, aplicativo & mídia paga", "Sitio web, aplicación & medios pagados"],
      "SQL & data preparation": ["SQL & preparação de dados", "SQL & preparación de datos"],
      "Power BI reporting layer": ["Camada de reporting em Power BI", "Capa de reporting en Power BI"],
      "Marketing, leaders & regions": ["Marketing, liderança & regiões", "Marketing, liderazgo & regiones"],
      "A new digital channel needed a reporting standard.": ["Um novo canal digital precisava de um padrão de reporting.", "Un nuevo canal digital necesitaba un estándar de reporting."],
      "BOQ Group was launching and expanding digital home loan journeys across its banking brands. Leads were being generated through websites, digital campaigns, app journeys, paid media, and marketing activations, but the business did not yet have a structured way to track those leads end to end.": ["O BOQ Group estava lançando e expandindo jornadas digitais de crédito imobiliário entre suas marcas bancárias. Leads eram gerados por websites, campanhas digitais, jornadas em aplicativos, mídia paga e ativações de marketing, mas o negócio ainda não tinha uma forma estruturada de acompanhá-los de ponta a ponta.", "BOQ Group estaba lanzando y ampliando journeys digitales de crédito hipotecario entre sus marcas bancarias. Los leads se generaban a través de sitios web, campañas digitales, journeys en aplicaciones, medios pagados y activaciones de marketing, pero el negocio aún no contaba con una forma estructurada de seguirlos de extremo a extremo."],
      "The work began around ME Bank and Virgin Money Australia activity and later expanded toward the broader Bank of Queensland environment. The initial version was delivered in approximately two months, then evolved through further releases for additional brands, states, reporting needs, and business questions.": ["O trabalho começou com atividades de ME Bank e Virgin Money Australia e depois se expandiu para o ambiente mais amplo de Bank of Queensland. A versão inicial foi entregue em aproximadamente dois meses e evoluiu em novas versões para marcas, estados, necessidades de reporting e questões de negócio adicionais.", "El trabajo comenzó con actividades de ME Bank y Virgin Money Australia y posteriormente se amplió al entorno más amplio de Bank of Queensland. La versión inicial se entregó en aproximadamente dos meses y evolucionó mediante nuevas versiones para otras marcas, estados, necesidades de reporting y preguntas de negocio."],
      "Connect acquisition activity to what happened next.": ["Conectar a atividade de aquisição ao que aconteceu depois.", "Conectar la actividad de adquisición con lo que ocurrió después."],
      "The visibility gap went beyond missing reports. Digital Marketing, leadership, regional teams, and relationship stakeholders needed a consistent way to understand where leads came from, how they entered CRM, how follow-up progressed, and how different brands, states, and channels were performing.": ["A falta de visibilidade ia além da ausência de relatórios. Digital Marketing, liderança, equipes regionais e stakeholders de relacionamento precisavam entender de forma consistente a origem dos leads, como entravam no CRM, como evoluía o acompanhamento e qual era a performance de marcas, estados e canais.", "La falta de visibilidad iba más allá de la ausencia de informes. Digital Marketing, liderazgo, equipos regionales y stakeholders de relación necesitaban comprender de forma consistente el origen de los leads, cómo entraban en CRM, cómo avanzaba el seguimiento y cuál era el rendimiento de marcas, estados y canales."],
      "Trace lead sources across digital journeys and campaign activations.": ["Rastrear as origens dos leads em jornadas digitais e ativações de campanhas.", "Rastrear el origen de los leads en journeys digitales y activaciones de campañas."],
      "Connect paid media and marketing activity with customer acquisition outcomes.": ["Conectar mídia paga e atividades de marketing aos resultados de aquisição de clientes.", "Conectar los medios pagados y la actividad de marketing con los resultados de adquisición de clientes."],
      "Compare performance by brand, state, channel, and business area.": ["Comparar a performance por marca, estado, canal e área de negócio.", "Comparar el rendimiento por marca, estado, canal y área de negocio."],
      "Give branch and relationship teams clearer visibility over CRM follow-up.": ["Dar às equipes de agências e relacionamento mais visibilidade sobre o acompanhamento no CRM.", "Dar a los equipos de sucursales y relación mayor visibilidad sobre el seguimiento en CRM."],
      "Create a repeatable, executive-ready reporting standard.": ["Criar um padrão de reporting replicável e pronto para executivos.", "Crear un estándar de reporting replicable y preparado para ejecutivos."],
      "Scoped and developed the reporting solution end to end.": ["Defini o escopo e desenvolvi a solução de reporting de ponta a ponta.", "Definí el alcance y desarrollé la solución de reporting de extremo a extremo."],
      "I worked across Data Analyst, CRM analyst, BI developer, and business analysis responsibilities. I gathered stakeholder requirements, helped define the reporting logic, understood how campaign and lead data behaved across systems, and translated those needs into an evolving Power BI solution.": ["Atuei com responsabilidades de Data Analyst, CRM analyst, BI developer e análise de negócios. Levantei requisitos com stakeholders, ajudei a definir a lógica de reporting, compreendi o comportamento dos dados de campanhas e leads entre sistemas e transformei essas necessidades em uma solução de Power BI em evolução.", "Trabajé con responsabilidades de Data Analyst, CRM analyst, BI developer y análisis de negocio. Recopilé requisitos de stakeholders, ayudé a definir la lógica de reporting, comprendí cómo se comportaban los datos de campañas y leads entre sistemas y convertí esas necesidades en una solución de Power BI en evolución."],
      "I also supported iterative releases as the framework expanded across brands and geographies, balancing detailed operational questions with the concise view leadership needed.": ["Também apoiei entregas iterativas à medida que o framework se expandia entre marcas e regiões, equilibrando questões operacionais detalhadas com a visão concisa necessária para a liderança.", "También apoyé entregas iterativas a medida que el framework se ampliaba entre marcas y regiones, equilibrando preguntas operativas detalladas con la visión concisa que necesitaba el liderazgo."],
      "Working position": ["Posicionamento no projeto", "Posición en el proyecto"],
      "I operated as an analytics partner between Digital & Marketing, CRM data, reporting technology, and the business teams responsible for lead follow-up.": ["Atuei como parceiro de analytics entre Digital & Marketing, dados de CRM, tecnologia de reporting e as equipes de negócio responsáveis pelo acompanhamento dos leads.", "Actué como socio de analytics entre Digital & Marketing, los datos de CRM, la tecnología de reporting y los equipos de negocio responsables del seguimiento de leads."],
      "A governed decision-support layer for lead performance.": ["Uma camada governada de apoio à decisão para a performance de leads.", "Una capa gobernada de apoyo a decisiones para el rendimiento de leads."],
      "The framework brought CRM, campaign, lead, and paid media information into a structured Power BI reporting layer. DAX measures and data preparation logic turned activity from multiple sources into views that stakeholders could use to monitor lead flow, channel performance, follow-up, and campaign effectiveness.": ["O framework reuniu informações de CRM, campanhas, leads e mídia paga em uma camada estruturada de reporting no Power BI. Medidas DAX e lógica de preparação de dados transformaram atividades de múltiplas fontes em visões para que stakeholders acompanhassem o fluxo de leads, a performance dos canais, o follow-up e a efetividade das campanhas.", "El framework reunió información de CRM, campañas, leads y medios pagados en una capa estructurada de reporting en Power BI. Las medidas DAX y la lógica de preparación de datos transformaron la actividad de múltiples fuentes en vistas que permitían a los stakeholders monitorizar el flujo de leads, el rendimiento de canales, el seguimiento y la eficacia de las campañas."],
      "Rather than treating each request as a one-off report, the solution established reusable logic that could accommodate additional brands, states, and evolving business questions.": ["Em vez de tratar cada solicitação como um relatório isolado, a solução estabeleceu uma lógica reutilizável capaz de incorporar novas marcas, estados e questões de negócio em evolução.", "En lugar de tratar cada solicitud como un informe aislado, la solución estableció una lógica reutilizable capaz de incorporar nuevas marcas, estados y preguntas de negocio en evolución."],
      "Technology connected to business context.": ["Tecnologia conectada ao contexto de negócio.", "Tecnología conectada al contexto de negocio."],
      "From a visibility gap to a repeatable analytics capability.": ["Da falta de visibilidade a uma capacidade de analytics replicável.", "De la falta de visibilidad a una capacidad de analytics replicable."],
      "The solution gave business teams a consistent way to analyse digital home loan activity and supported more informed conversations around paid media, customer acquisition, CRM follow-up, and campaign performance.": ["A solução ofereceu às equipes de negócio uma forma consistente de analisar a atividade digital de crédito imobiliário e apoiou conversas mais informadas sobre mídia paga, aquisição de clientes, follow-up no CRM e performance de campanhas.", "La solución ofreció a los equipos de negocio una forma consistente de analizar la actividad digital de crédito hipotecario y apoyó conversaciones más informadas sobre medios pagados, adquisición de clientes, seguimiento en CRM y rendimiento de campañas."],
      "Consistent lead and channel tracking": ["Acompanhamento consistente de leads e canais", "Seguimiento consistente de leads y canales"],
      "Clearer CRM follow-up visibility": ["Mais visibilidade sobre o follow-up no CRM", "Mayor visibilidad sobre el seguimiento en CRM"],
      "Multi-brand and state comparisons": ["Comparações entre marcas e estados", "Comparaciones entre marcas y estados"],
      "Better campaign and budget conversations": ["Melhores conversas sobre campanhas e orçamento", "Mejores conversaciones sobre campañas y presupuesto"],
      "Executive and regional performance views": ["Visões executivas e regionais de performance", "Vistas ejecutivas y regionales de rendimiento"],
      "Employee of the Month recognition": ["Reconhecimento de Employee of the Month", "Reconocimiento de Employee of the Month"],
      "This case study describes the business problem, delivery approach, and outcomes at a high level. The visual is an abstract representation; no customer data, internal figures, confidential campaign details, or BOQ Group dashboard screenshots are shown.": ["Este estudo de caso descreve, em alto nível, o problema de negócio, a abordagem de entrega e os resultados. O visual é uma representação abstrata; não são exibidos dados de clientes, números internos, detalhes confidenciais de campanhas ou screenshots de dashboards do BOQ Group.", "Este caso de estudio describe, a alto nivel, el problema de negocio, el enfoque de entrega y los resultados. El visual es una representación abstracta; no se muestran datos de clientes, cifras internas, detalles confidenciales de campañas ni capturas de dashboards de BOQ Group."],
      "← All projects": ["← Todos os projetos", "← Todos los proyectos"],
      "Next: Market Intelligence →": ["Próximo: Market Intelligence →", "Siguiente: Market Intelligence →"]
    },

    "market-intelligence": {
      "A market intelligence framework combining customer portfolio, demographic, and postcode-level data to help banking leaders understand local opportunity across Australia.": ["Um framework de Market Intelligence que combina dados de portfólio de clientes, demográficos e de códigos postais para ajudar líderes bancários a entender oportunidades locais em toda a Austrália.", "Un framework de Market Intelligence que combina datos de cartera de clientes, demográficos y de códigos postales para ayudar a líderes bancarios a comprender oportunidades locales en toda Australia."],
      "Data & CRM analysis · BI reporting · Data modelling": ["Análise de Data & CRM · Reporting em BI · Data Modelling", "Análisis de Data & CRM · Reporting en BI · Data Modelling"],
      "Customer portfolio · Demographics · Geographic opportunity": ["Portfólio de clientes · Demografia · Oportunidade geográfica", "Cartera de clientes · Demografía · Oportunidad geográfica"],
      "Analysis framework": ["Framework de análise", "Framework de análisis"],
      "Public demographic data": ["Dados demográficos públicos", "Datos demográficos públicos"],
      "Postcode & branch mapping": ["Mapeamento de códigos postais & agências", "Mapeo de códigos postales & sucursales"],
      "CRM customer portfolio": ["Portfólio de clientes no CRM", "Cartera de clientes en CRM"],
      "SQL & data modelling": ["SQL & Data Modelling", "SQL & Data Modelling"],
      "Power BI market intelligence": ["Market Intelligence em Power BI", "Market Intelligence en Power BI"],
      "Branch & leadership strategy": ["Estratégia para agências & liderança", "Estrategia para sucursales & liderazgo"],
      "See the market around each branch, not only internal performance.": ["Enxergar o mercado ao redor de cada agência, não apenas a performance interna.", "Ver el mercado alrededor de cada sucursal, no solo el rendimiento interno."],
      "BOQ Group operated across a large Australian branch network. Leadership, Marketing, Retail, and branch stakeholders needed a stronger way to understand how each branch's customer portfolio compared with the demographic profile of its surrounding market.": ["O BOQ Group operava em uma ampla rede de agências australianas. A liderança e os stakeholders de Marketing, Retail e agências precisavam entender melhor como o portfólio de clientes de cada agência se comparava ao perfil demográfico do mercado ao redor.", "BOQ Group operaba en una amplia red de sucursales australianas. El liderazgo y los stakeholders de Marketing, Retail y sucursales necesitaban comprender mejor cómo se comparaba la cartera de clientes de cada sucursal con el perfil demográfico de su mercado circundante."],
      "Internal performance could show who the bank already served. External demographic and postcode-level data could show who lived in the local area. Bringing those views together created a more useful basis for branch and market strategy.": ["A performance interna mostrava quem o banco já atendia. Dados demográficos externos e de códigos postais mostravam quem vivia na região. A combinação dessas visões criou uma base mais útil para estratégias de agências e de mercado.", "El rendimiento interno mostraba a quién atendía ya el banco. Los datos demográficos externos y de códigos postales mostraban quién vivía en la zona. Combinar ambas perspectivas creó una base más útil para la estrategia de sucursales y de mercado."],
      "Connect customer composition with local market potential.": ["Conectar a composição da base de clientes ao potencial do mercado local.", "Conectar la composición de clientes con el potencial del mercado local."],
      "Stakeholders needed to compare a branch catchment's wider population with the bank's actual customer portfolio. The business questions spanned demographics, languages, cultural backgrounds, age groups, household patterns, product holdings, and possible gaps in market reach.": ["Os stakeholders precisavam comparar a população da área de influência de uma agência com o portfólio real de clientes do banco. As questões de negócio abrangiam demografia, idiomas, origens culturais, faixas etárias, perfis domiciliares, produtos contratados e possíveis lacunas de alcance de mercado.", "Los stakeholders necesitaban comparar la población del área de influencia de una sucursal con la cartera real de clientes del banco. Las preguntas de negocio abarcaban demografía, idiomas, orígenes culturales, grupos de edad, perfiles de hogares, productos contratados y posibles brechas de alcance de mercado."],
      "Understand who lived around each branch or postcode area.": ["Entender quem vivia ao redor de cada agência ou área de código postal.", "Comprender quién vivía alrededor de cada sucursal o zona de código postal."],
      "Compare external demographics with existing customer profiles and product holdings.": ["Comparar dados demográficos externos com perfis de clientes e produtos existentes.", "Comparar datos demográficos externos con perfiles de clientes y productos existentes."],
      "Identify customer groups or product opportunities that appeared under-represented.": ["Identificar grupos de clientes ou oportunidades de produtos com aparente sub-representação.", "Identificar grupos de clientes u oportunidades de producto aparentemente infrarrepresentados."],
      "Support more relevant local messaging, engagement, and branch planning.": ["Apoiar mensagens locais, engajamento e planejamento de agências mais relevantes.", "Apoyar mensajes locales, engagement y planificación de sucursales más relevantes."],
      "Make complex multi-source analysis usable for non-technical leaders.": ["Tornar análises complexas e multifuentes utilizáveis por líderes não técnicos.", "Hacer que análisis complejos y multifuente resulten útiles para líderes no técnicos."],
      "Translated multi-source data into an executive-ready market view.": ["Transformei dados de múltiplas fontes em uma visão de mercado pronta para executivos.", "Convertí datos de múltiples fuentes en una visión de mercado preparada para ejecutivos."],
      "I supported the analysis and reporting layer, helping combine internal CRM and customer portfolio data with external demographic and postcode reference sources. My role required understanding the business questions behind the analysis, structuring comparisons at the right geographic level, and presenting the findings in a form branch and leadership stakeholders could use.": ["Apoiei a camada de análise e reporting, combinando dados internos de CRM e portfólio de clientes com fontes externas de dados demográficos e códigos postais. Minha função exigiu compreender as questões de negócio, estruturar comparações no nível geográfico adequado e apresentar os resultados de forma útil para stakeholders de agências e liderança.", "Apoyé la capa de análisis y reporting, combinando datos internos de CRM y cartera de clientes con fuentes externas de datos demográficos y códigos postales. Mi función exigió comprender las preguntas de negocio, estructurar comparaciones en el nivel geográfico adecuado y presentar los resultados de forma útil para stakeholders de sucursales y liderazgo."],
      "Core analytical question": ["Questão analítica central", "Pregunta analítica central"],
      "How does the customer base the bank currently serves compare with the broader population and opportunity in each local market?": ["Como a base de clientes atualmente atendida pelo banco se compara à população e às oportunidades mais amplas de cada mercado local?", "¿Cómo se compara la base de clientes que atiende actualmente el banco con la población y las oportunidades más amplias de cada mercado local?"],
      "A customer portfolio and market intelligence decision layer.": ["Uma camada de decisão para portfólio de clientes e Market Intelligence.", "Una capa de decisión para cartera de clientes y Market Intelligence."],
      "The reporting framework mapped internal customer and product information to postcode and branch geography, then aligned it with public demographic datasets. Power BI gave stakeholders a consistent way to move from a national view into local market comparisons without exposing unnecessary customer-level detail.": ["O framework de reporting mapeou informações internas de clientes e produtos por códigos postais e geografia das agências, alinhando-as a datasets demográficos públicos. O Power BI ofereceu aos stakeholders uma forma consistente de partir de uma visão nacional para comparações de mercados locais, sem expor detalhes desnecessários no nível do cliente.", "El framework de reporting mapeó información interna de clientes y productos por códigos postales y geografía de sucursales, alineándola con datasets demográficos públicos. Power BI ofreció a los stakeholders una forma consistente de pasar de una visión nacional a comparaciones de mercados locales sin exponer detalles innecesarios a nivel de cliente."],
      "The result supported exploration of portfolio mix, demographic alignment, geographic gaps, and local product or engagement opportunities across the branch network.": ["O resultado apoiou a exploração do mix de portfólio, alinhamento demográfico, lacunas geográficas e oportunidades locais de produtos ou engajamento em toda a rede de agências.", "El resultado apoyó el análisis del mix de cartera, la alineación demográfica, las brechas geográficas y las oportunidades locales de productos o engagement en toda la red de sucursales."],
      "Internal customer context meets external market evidence.": ["O contexto interno de clientes encontra as evidências externas de mercado.", "El contexto interno de clientes se conecta con la evidencia externa de mercado."],
      "A clearer link between who the bank served and who lived locally.": ["Uma conexão mais clara entre quem o banco atendia e quem vivia localmente.", "Una conexión más clara entre quienes atendía el banco y quienes vivían localmente."],
      "The framework gave leadership, Marketing, Retail, and branch stakeholders a broader evidence base for local market conversations and helped move analysis beyond internal customer data alone.": ["O framework ofereceu à liderança e aos stakeholders de Marketing, Retail e agências uma base de evidências mais ampla para conversas sobre mercados locais e ajudou a levar a análise além dos dados internos de clientes.", "El framework proporcionó al liderazgo y a los stakeholders de Marketing, Retail y sucursales una base de evidencia más amplia para conversaciones sobre mercados locales y ayudó a llevar el análisis más allá de los datos internos de clientes."],
      "Local branch strategy": ["Estratégia local de agências", "Estrategia local de sucursales"],
      "Customer portfolio gap analysis": ["Análise de lacunas no portfólio de clientes", "Análisis de brechas en la cartera de clientes"],
      "Geographic opportunity mapping": ["Mapeamento de oportunidades geográficas", "Mapeo de oportunidades geográficas"],
      "More relevant local engagement": ["Engajamento local mais relevante", "Engagement local más relevante"],
      "Product opportunity conversations": ["Conversas sobre oportunidades de produtos", "Conversaciones sobre oportunidades de producto"],
      "Executive-ready market comparison": ["Comparação de mercado pronta para executivos", "Comparación de mercado preparada para ejecutivos"],
      "This case study uses an abstract process flow and high-level descriptions only. No customer records, internal branch figures, proprietary analysis, or confidential BOQ Group dashboard screenshots are included.": ["Este estudo de caso utiliza apenas um fluxo abstrato e descrições de alto nível. Não inclui registros de clientes, números internos de agências, análises proprietárias ou screenshots confidenciais de dashboards do BOQ Group.", "Este caso de estudio utiliza únicamente un flujo abstracto y descripciones de alto nivel. No incluye registros de clientes, cifras internas de sucursales, análisis propios ni capturas confidenciales de dashboards de BOQ Group."],
      "← Digital Home Loan": ["← Digital Home Loan", "← Digital Home Loan"],
      "Next: Lifecycle Marketing →": ["Próximo: Lifecycle Marketing →", "Siguiente: Lifecycle Marketing →"]
    },

    "lifecycle-marketing": {
      "A governed CRM and marketing analytics framework developed with EY and internal data stakeholders to track campaign activity, audience tests, and customer response across digital journeys.": ["Um framework governado de CRM e Marketing Analytics desenvolvido com a EY e stakeholders internos de dados para acompanhar atividades de campanhas, testes de audiência e respostas de clientes em jornadas digitais.", "Un framework gobernado de CRM y Marketing Analytics desarrollado con EY y stakeholders internos de datos para seguir la actividad de campañas, pruebas de audiencia y respuestas de clientes en journeys digitales."],
      "CRM & Power BI reference · Data Analyst · Business Analyst": ["Referência em CRM & Power BI · Data Analyst · Business Analyst", "Referente de CRM & Power BI · Data Analyst · Business Analyst"],
      "Campaign performance · Experimentation · Governance": ["Performance de campanhas · Experimentação · Governança", "Rendimiento de campañas · Experimentación · Gobernanza"],
      "Governed reporting flow": ["Fluxo governado de reporting", "Flujo gobernado de reporting"],
      "EDM, web & campaign activation": ["Ativação de EDM, web & campanhas", "Activación de EDM, web & campañas"],
      "Audience & campaign logic": ["Lógica de audiências & campanhas", "Lógica de audiencias & campañas"],
      "Adobe Campaign & CRM": ["Adobe Campaign & CRM", "Adobe Campaign & CRM"],
      "Databricks governed workspace": ["Workspace governado em Databricks", "Workspace gobernado en Databricks"],
      "SQL & Power BI": ["SQL & Power BI", "SQL & Power BI"],
      "Testing & marketing decisions": ["Testes & decisões de marketing", "Pruebas & decisiones de marketing"],
      "Bring lifecycle marketing activity into one trusted framework.": ["Reunir as atividades de Lifecycle Marketing em um único framework confiável.", "Reunir la actividad de Lifecycle Marketing en un único framework confiable."],
      "BOQ Group's Digital & Marketing team needed a stronger way to measure campaign and lifecycle marketing performance across digital channels. The work covered EDM and email campaigns, website activations, audience segments, control groups, A/B testing, customer response, and journey signals.": ["A equipe de Digital & Marketing do BOQ Group precisava de uma forma mais robusta de medir a performance de campanhas e Lifecycle Marketing em canais digitais. O trabalho abrangeu campanhas de EDM e e-mail, ativações em websites, segmentos de audiência, grupos de controle, A/B Testing, respostas de clientes e sinais das jornadas.", "El equipo de Digital & Marketing de BOQ Group necesitaba una forma más sólida de medir el rendimiento de campañas y Lifecycle Marketing en canales digitales. El trabajo abarcó campañas de EDM y correo electrónico, activaciones en sitios web, segmentos de audiencia, grupos de control, A/B Testing, respuestas de clientes y señales de los journeys."],
      "BOQ Group engaged EY on the dashboard build. I collaborated with EY as the internal CRM, Power BI, Data Analyst, and Business Analyst reference for Digital & Marketing, including in-person project work in Sydney.": ["O BOQ Group contratou a EY para desenvolver o dashboard. Colaborei com a EY como referência interna de CRM, Power BI, Data Analyst e Business Analyst para Digital & Marketing, incluindo trabalho presencial no projeto em Sydney.", "BOQ Group contrató a EY para desarrollar el dashboard. Colaboré con EY como referente interno de CRM, Power BI, Data Analyst y Business Analyst para Digital & Marketing, incluido trabajo presencial en el proyecto en Sídney."],
      "Measure campaigns without losing data meaning or governance.": ["Medir campanhas sem perder o significado dos dados ou a governança.", "Medir campañas sin perder el significado de los datos ni la gobernanza."],
      "The team needed visibility over campaign effectiveness and experimentation while working within privacy and compliance constraints around customer-level data. Marketing concepts such as audience logic, lifecycle stages, control groups, and response needed to be translated correctly into reporting logic.": ["A equipe precisava de visibilidade sobre a efetividade das campanhas e a experimentação, respeitando restrições de privacidade e compliance relacionadas a dados no nível do cliente. Conceitos de marketing como lógica de audiências, etapas de lifecycle, grupos de controle e resposta precisavam ser traduzidos corretamente em lógica de reporting.", "El equipo necesitaba visibilidad sobre la eficacia de las campañas y la experimentación, respetando las restricciones de privacidad y compliance relacionadas con datos a nivel de cliente. Conceptos de marketing como lógica de audiencias, etapas de lifecycle, grupos de control y respuesta debían traducirse correctamente en lógica de reporting."],
      "Track EDM, website, and campaign activations consistently.": ["Acompanhar ativações de EDM, websites e campanhas de forma consistente.", "Realizar un seguimiento consistente de activaciones de EDM, sitios web y campañas."],
      "Interpret audience segments, control groups, and A/B tests correctly.": ["Interpretar corretamente segmentos de audiência, grupos de controle e testes A/B.", "Interpretar correctamente segmentos de audiencia, grupos de control y pruebas A/B."],
      "Connect CRM and campaign activity with customer response.": ["Conectar atividades de CRM e campanhas às respostas dos clientes.", "Conectar la actividad de CRM y campañas con la respuesta de clientes."],
      "Support vendor collaboration without exposing unnecessary personal information.": ["Apoiar a colaboração com fornecedores sem expor informações pessoais desnecessárias.", "Apoyar la colaboración con proveedores sin exponer información personal innecesaria."],
      "Create a maintainable reporting framework for Digital & Marketing users.": ["Criar um framework de reporting sustentável para usuários de Digital & Marketing.", "Crear un framework de reporting sostenible para usuarios de Digital & Marketing."],
      "The internal bridge between Marketing, CRM data, BI, and EY.": ["A ponte interna entre Marketing, dados de CRM, BI e EY.", "El puente interno entre Marketing, datos de CRM, BI y EY."],
      "I helped translate marketing requirements into reporting logic, explained CRM structures and campaign behaviour, supported dashboard requirements and design, and advised on Power BI and analytics feasibility. I also worked with internal data teams to clarify governed preparation and audience-building workflows.": ["Ajudei a transformar requisitos de marketing em lógica de reporting, expliquei estruturas de CRM e comportamento de campanhas, apoiei requisitos e design do dashboard e avaliei a viabilidade em Power BI e analytics. Também trabalhei com equipes internas de dados para esclarecer fluxos governados de preparação e construção de audiências.", "Ayudé a convertir requisitos de marketing en lógica de reporting, expliqué estructuras de CRM y comportamiento de campañas, apoyé los requisitos y el diseño del dashboard y evalué la viabilidad en Power BI y analytics. También trabajé con equipos internos de datos para aclarar flujos gobernados de preparación y creación de audiencias."],
      "My contribution combined business analysis, hands-on analytics, stakeholder consulting, and ongoing dashboard support. Being flown from Brisbane to Sydney for the project reflected the importance of direct collaboration and the trust placed in my knowledge of the CRM and reporting environment.": ["Minha contribuição combinou análise de negócios, analytics prático, consultoria com stakeholders e suporte contínuo ao dashboard. A viagem de Brisbane a Sydney para o projeto refletiu a importância da colaboração direta e a confiança no meu conhecimento do ambiente de CRM e reporting.", "Mi contribución combinó análisis de negocio, analytics práctico, consultoría con stakeholders y soporte continuo del dashboard. El viaje de Brisbane a Sídney para el proyecto reflejó la importancia de la colaboración directa y la confianza en mi conocimiento del entorno de CRM y reporting."],
      "Internal reference role": ["Função de referência interna", "Función de referente interno"],
      "I was the main CRM and Power BI analytics reference for the Digital & Marketing team, helping EY and business stakeholders connect marketing questions with the data available.": ["Fui a principal referência de CRM e Power BI Analytics para a equipe de Digital & Marketing, ajudando a EY e os stakeholders de negócio a conectar questões de marketing aos dados disponíveis.", "Fui el principal referente de CRM y Power BI Analytics para el equipo de Digital & Marketing, ayudando a EY y a los stakeholders de negocio a conectar preguntas de marketing con los datos disponibles."],
      "A campaign performance layer designed around governance.": ["Uma camada de performance de campanhas desenhada com foco em governança.", "Una capa de rendimiento de campañas diseñada en torno a la gobernanza."],
      "The framework connected campaign definitions, audience-building workflows, Adobe Campaign and CRM data, governed Databricks preparation, SQL logic, and Power BI reporting. This structure enabled segmentation and performance analysis while limiting unnecessary exposure of personal customer information.": ["O framework conectou definições de campanhas, fluxos de construção de audiências, dados de Adobe Campaign e CRM, preparação governada em Databricks, lógica SQL e reporting em Power BI. Essa estrutura permitiu segmentação e análise de performance, limitando a exposição desnecessária de informações pessoais de clientes.", "El framework conectó definiciones de campañas, flujos de creación de audiencias, datos de Adobe Campaign y CRM, preparación gobernada en Databricks, lógica SQL y reporting en Power BI. Esta estructura permitió la segmentación y el análisis de rendimiento, limitando la exposición innecesaria de información personal de clientes."],
      "The reporting supported campaign activations, audience comparisons, control groups, A/B testing, and customer response analysis, giving Digital & Marketing teams a more consistent basis for testing and optimisation.": ["O reporting apoiou ativações de campanhas, comparações de audiências, grupos de controle, A/B Testing e análise de respostas dos clientes, oferecendo às equipes de Digital & Marketing uma base mais consistente para testes e otimização.", "El reporting apoyó activaciones de campañas, comparaciones de audiencias, grupos de control, A/B Testing y análisis de respuestas de clientes, ofreciendo a los equipos de Digital & Marketing una base más consistente para pruebas y optimización."],
      "A cross-functional marketing analytics environment.": ["Um ambiente multifuncional de Marketing Analytics.", "Un entorno multifuncional de Marketing Analytics."],
      "Better campaign learning within a governed process.": ["Mais aprendizado sobre campanhas dentro de um processo governado.", "Mejor aprendizaje de campañas dentro de un proceso gobernado."],
      "The framework helped Digital & Marketing stakeholders understand campaign activity, audience response, and lifecycle performance more consistently while strengthening collaboration between Marketing, EY, and internal data teams.": ["O framework ajudou os stakeholders de Digital & Marketing a entender de forma mais consistente as atividades de campanhas, respostas de audiências e performance de lifecycle, fortalecendo a colaboração entre Marketing, EY e equipes internas de dados.", "El framework ayudó a los stakeholders de Digital & Marketing a comprender de forma más consistente la actividad de campañas, la respuesta de audiencias y el rendimiento de lifecycle, fortaleciendo la colaboración entre Marketing, EY y los equipos internos de datos."],
      "Campaign performance tracking": ["Acompanhamento da performance de campanhas", "Seguimiento del rendimiento de campañas"],
      "EDM and website activation analysis": ["Análise de ativações de EDM e websites", "Análisis de activaciones de EDM y sitios web"],
      "Audience and control group comparison": ["Comparação de audiências e grupos de controle", "Comparación de audiencias y grupos de control"],
      "A/B testing interpretation": ["Interpretação de A/B Testing", "Interpretación de A/B Testing"],
      "Customer journey visibility": ["Visibilidade da jornada do cliente", "Visibilidad del journey del cliente"],
      "Governed customer data handling": ["Tratamento governado de dados de clientes", "Tratamiento gobernado de datos de clientes"],
      "The process diagram is an abstract representation. No personal customer information, confidential campaign names, internal performance figures, platform URLs, or BOQ Group dashboard screenshots are displayed.": ["O diagrama de processo é uma representação abstrata. Não são exibidas informações pessoais de clientes, nomes confidenciais de campanhas, números internos de performance, URLs de plataformas ou screenshots de dashboards do BOQ Group.", "El diagrama de proceso es una representación abstracta. No se muestran datos personales de clientes, nombres confidenciales de campañas, cifras internas de rendimiento, URLs de plataformas ni capturas de dashboards de BOQ Group."],
      "← Market Intelligence": ["← Market Intelligence", "← Market Intelligence"],
      "All projects →": ["Todos os projetos →", "Todos los proyectos →"]
    }
  };

  const attributeCopy = {
    "Main navigation": ["Navegação principal", "Navegación principal"],
    "Augusto Bastos, home": ["Augusto Bastos, página inicial", "Augusto Bastos, inicio"],
    "Open navigation": ["Abrir navegação", "Abrir navegación"],
    "Close navigation": ["Fechar navegação", "Cerrar navegación"],
    "Language selector": ["Seletor de idioma", "Selector de idioma"],
    "Professional positioning": ["Posicionamento profissional", "Posicionamiento profesional"],
    "Profile sections": ["Seções do perfil", "Secciones del perfil"],
    "Additional education and qualifications": ["Formação e qualificações adicionais", "Formación y cualificaciones adicionales"],
    "Worked across BOQ Group banking brands": ["Atuação nas marcas bancárias do BOQ Group", "Experiencia en las marcas bancarias de BOQ Group"],
    "Worked across the Bank of Queensland retail network": ["Atuação na rede de varejo do Bank of Queensland", "Experiencia en la red minorista de Bank of Queensland"],
    "Project data flow": ["Fluxo de dados do projeto", "Flujo de datos del proyecto"],
    "Project overview": ["Visão geral do projeto", "Resumen del proyecto"],
    "Case study sections": ["Seções do estudo de caso", "Secciones del caso de estudio"],
    "Contact actions": ["Ações de contato", "Acciones de contacto"],
    "Email Augusto Bastos at gusbastos7@gmail.com": ["Enviar e-mail para Augusto Bastos em gusbastos7@gmail.com", "Enviar un correo a Augusto Bastos a gusbastos7@gmail.com"]
  };

  const metadata = {
    home: {
      en: ["Augusto Bastos | Data, CRM & Business Intelligence", "Augusto Bastos is an international data, CRM and business analytics professional with Australian banking experience across business intelligence, marketing analytics, customer insights, and stakeholder-facing decision-making."],
      pt: ["Augusto Bastos | Dados, CRM & Business Intelligence", "Augusto Bastos é um profissional internacional de dados, CRM e business analytics com experiência no setor bancário australiano, Business Intelligence, Marketing Analytics, Customer Insights e tomada de decisão junto a stakeholders."],
      es: ["Augusto Bastos | Datos, CRM & Business Intelligence", "Augusto Bastos es un profesional internacional de datos, CRM y business analytics con experiencia en banca australiana, Business Intelligence, Marketing Analytics, Customer Insights y toma de decisiones junto a stakeholders."]
    },
    profile: {
      en: ["Professional Profile | Augusto Bastos", "Detailed professional profile of Augusto Bastos, covering data and CRM analytics, business intelligence, business analysis, marketing analytics, customer insights, and Australian banking experience."],
      pt: ["Perfil Profissional | Augusto Bastos", "Perfil profissional detalhado de Augusto Bastos, abrangendo Data e CRM Analytics, Business Intelligence, análise de negócios, Marketing Analytics, Customer Insights e experiência no setor bancário australiano."],
      es: ["Perfil Profesional | Augusto Bastos", "Perfil profesional detallado de Augusto Bastos, que abarca Data y CRM Analytics, Business Intelligence, análisis de negocio, Marketing Analytics, Customer Insights y experiencia en banca australiana."]
    },
    "digital-home-loan": {
      en: ["Digital Home Loan Lead Tracking | Augusto Bastos", "Case study: Digital Home Loan Lead Tracking framework for BOQ Group by Augusto Bastos."],
      pt: ["Digital Home Loan Lead Tracking | Augusto Bastos", "Estudo de caso: framework Digital Home Loan Lead Tracking desenvolvido por Augusto Bastos para o BOQ Group."],
      es: ["Digital Home Loan Lead Tracking | Augusto Bastos", "Caso de estudio: framework Digital Home Loan Lead Tracking desarrollado por Augusto Bastos para BOQ Group."]
    },
    "market-intelligence": {
      en: ["Market Intelligence & Customer Behaviour | Augusto Bastos", "Case study: Market Intelligence and Customer Behaviour Analysis for BOQ Group by Augusto Bastos."],
      pt: ["Market Intelligence & Customer Behaviour | Augusto Bastos", "Estudo de caso: análise de Market Intelligence & Customer Behaviour desenvolvida por Augusto Bastos para o BOQ Group."],
      es: ["Market Intelligence & Customer Behaviour | Augusto Bastos", "Caso de estudio: análisis de Market Intelligence & Customer Behaviour desarrollado por Augusto Bastos para BOQ Group."]
    },
    "lifecycle-marketing": {
      en: ["Lifecycle Marketing & Campaign Performance | Augusto Bastos", "Case study: Lifecycle Marketing and Campaign Performance framework for BOQ Group by Augusto Bastos."],
      pt: ["Lifecycle Marketing & Campaign Performance | Augusto Bastos", "Estudo de caso: framework Lifecycle Marketing & Campaign Performance desenvolvido por Augusto Bastos para o BOQ Group."],
      es: ["Lifecycle Marketing & Campaign Performance | Augusto Bastos", "Caso de estudio: framework Lifecycle Marketing & Campaign Performance desarrollado por Augusto Bastos para BOQ Group."]
    }
  };

  const page = document.body.dataset.page;
  const canonicalText = new WeakMap();
  const canonicalAttributes = new WeakMap();
  let currentLanguage = "en";

  const languageIndex = (language) => (language === "pt" ? 0 : 1);

  const lookup = (english, language) => {
    if (language === "en") return english;
    const entry = copy[page]?.[english] || copy.common[english];
    return entry ? entry[languageIndex(language)] : english;
  };

  const translateAttribute = (english, language) => {
    if (language === "en") return english;
    const entry = attributeCopy[english];
    return entry ? entry[languageIndex(language)] : english;
  };

  const rememberTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest("script, style, [data-i18n-ignore]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const value = node.nodeValue;
      canonicalText.set(node, {
        english: value.replace(/\s+/g, " ").trim(),
        leading: value.match(/^\s*/)?.[0] || "",
        trailing: value.match(/\s*$/)?.[0] || ""
      });
    }
  };

  const rememberAttributes = () => {
    document.querySelectorAll("[aria-label]").forEach((element) => {
      canonicalAttributes.set(element, element.getAttribute("aria-label"));
    });
  };

  const updateMetadata = (language) => {
    const values = metadata[page]?.[language];
    if (!values) return;
    document.title = values[0];
    document.querySelector('meta[name="description"]')?.setAttribute("content", values[1]);
  };

  const updateSelector = (language) => {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  };

  const applyLanguage = (language, persist = false) => {
    const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
    currentLanguage = nextLanguage;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return canonicalText.has(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const source = canonicalText.get(node);
      node.nodeValue = `${source.leading}${lookup(source.english, nextLanguage)}${source.trailing}`;
    }

    document.querySelectorAll("[aria-label]").forEach((element) => {
      const english = canonicalAttributes.get(element);
      if (english) element.setAttribute("aria-label", translateAttribute(english, nextLanguage));
    });

    document.documentElement.lang = LANGUAGE_TAGS[nextLanguage];
    updateMetadata(nextLanguage);
    updateSelector(nextLanguage);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, nextLanguage);
      } catch (_) {
        // The portfolio remains usable when storage is unavailable.
      }
    }

    document.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language: nextLanguage } }));
  };

  const storedLanguage = (() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(stored) ? stored : "en";
    } catch (_) {
      return "en";
    }
  })();

  rememberTextNodes();
  rememberAttributes();

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  window.portfolioI18n = {
    applyLanguage,
    getLanguage: () => currentLanguage,
    translate: (english) => lookup(english, currentLanguage),
    translateAttribute: (english) => translateAttribute(english, currentLanguage)
  };

  applyLanguage(storedLanguage);
})();
