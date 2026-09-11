(() => {
  "use strict";

  const STORAGE_KEY = "portfolioLanguage";
  const SUPPORTED_LANGUAGES = ["en", "pt", "es"];
  const LANGUAGE_TAGS = { en: "en", pt: "pt-BR", es: "es" };

  const copy = {
    common: {
      "KPI Definition": ["Definição de KPIs", "Definición de KPIs"],
      "Business Rule Definition": ["Definição de Regras de Negócio", "Definición de Reglas de Negocio"],
      "Data Quality Validation": ["Validação da Qualidade de Dados", "Validación de la Calidad de Datos"],
      "Data Reconciliation": ["Conciliação de Dados", "Conciliación de Datos"],
      "Multi-source Data Integration": ["Integração de Múltiplas Fontes de Dados", "Integración de Múltiples Fuentes de Datos"],
      "ETL / ELT Workflow Exposure": ["Familiaridade com Fluxos ETL / ELT", "Familiaridad con Flujos ETL / ELT"],
      "Reusable Reporting Layers": ["Camadas Reutilizáveis de Reporting", "Capas Reutilizables de Reporting"],
      "Control Groups": ["Grupos de Controle", "Grupos de Control"],
      "UTM Tracking": ["Rastreamento UTM", "Seguimiento UTM"],
      "Customer Journey Analysis": ["Análise da Jornada do Cliente", "Análisis del Recorrido del Cliente"],
      "AI Agents": ["Agentes de IA", "Agentes de IA"],
      "Prompt Engineering": ["Engenharia de Prompts", "Ingeniería de Prompts"],
      "AI-assisted Data Analysis": ["Análise de Dados Assistida por IA", "Análisis de Datos Asistido por IA"],
      "Workshop Facilitation": ["Facilitação de Workshops", "Facilitación de Talleres"],
      "Internal banking dashboards and customer-level reporting are not displayed publicly due to confidentiality and data-governance obligations.": ["Dashboards bancários internos e relatórios no nível do cliente não são exibidos publicamente devido às obrigações de confidencialidade e governança de dados.", "Los dashboards bancarios internos y los informes a nivel de cliente no se muestran públicamente debido a las obligaciones de confidencialidad y gobernanza de datos."],
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
      "I bring approximately seven years of international experience living, studying, and working in Australia, including corporate banking at BOQ Group. My work connects data, CRM, business intelligence, and business analysis with customer and commercial decisions.": ["Trago aproximadamente sete anos de experiência internacional vivendo, estudando e trabalhando na Austrália, incluindo atuação no setor bancário corporativo no BOQ Group. Meu trabalho conecta dados, CRM, Business Intelligence e análise de negócios a decisões sobre clientes e resultados comerciais.", "Aporto aproximadamente siete años de experiencia internacional viviendo, estudiando y trabajando en Australia, incluida mi trayectoria en banca corporativa en BOQ Group. Mi trabajo conecta datos, CRM, Business Intelligence y análisis de negocio con decisiones sobre clientes y resultados comerciales."],
      "At BOQ Group, I connected fragmented data, defined measurement frameworks, and translated customer and commercial patterns into decisions across acquisition, lending, campaigns, and branches. My work included 15+ recurring Power BI reports and analysis of thousands of leads, using SQL, CRM data, and stakeholder-led business analysis.": ["No BOQ Group, conectei dados fragmentados, defini estruturas de mensuração e transformei padrões de clientes e de negócio em decisões sobre aquisição, crédito, campanhas e agências. Meu trabalho incluiu mais de 15 relatórios recorrentes em Power BI e a análise de milhares de leads, utilizando SQL, dados de CRM e análise de negócios orientada às necessidades dos stakeholders.", "En BOQ Group, conecté datos fragmentados, definí marcos de medición y convertí patrones de clientes y de negocio en decisiones sobre adquisición, crédito, campañas y sucursales. Mi trabajo incluyó más de 15 informes recurrentes en Power BI y el análisis de miles de leads, utilizando SQL, datos de CRM y análisis de negocio orientado a las necesidades de los stakeholders."],
      "Connected digital leads, CRM, applications, and lending outcomes through record matching, SQL, and Power BI to assess conversion, lead quality, and acquisition costs.": ["Conectei leads digitais, CRM, propostas e resultados de crédito por meio de correspondência de registros, SQL e Power BI para avaliar conversão, qualidade dos leads e custos de aquisição.", "Conecté leads digitales, CRM, solicitudes y resultados de crédito mediante vinculación de registros, SQL y Power BI para evaluar conversión, calidad de los leads y costes de adquisición."],
      "Combined CRM, product holdings, and local demographic data to explore customer segmentation, geographic opportunity, and cross-sell potential around each branch.": ["Combinei CRM, produtos contratados e dados demográficos locais para analisar segmentação de clientes, oportunidades geográficas e potencial de venda cruzada na região de cada agência.", "Combiné CRM, productos contratados y datos demográficos locales para analizar segmentación de clientes, oportunidades geográficas y potencial de venta cruzada en el entorno de cada sucursal."],
      "International analytics professional with experience across Australian banking, CRM, business intelligence, business analysis, marketing analytics, customer insights, and stakeholder-facing decision-making.": ["Profissional internacional de analytics com experiência no setor bancário australiano, CRM, Business Intelligence, análise de negócios, Marketing Analytics, Customer Insights e tomada de decisão junto a stakeholders.", "Profesional internacional de analytics con experiencia en banca australiana, CRM, Business Intelligence, análisis de negocio, Marketing Analytics, Customer Insights y toma de decisiones junto a stakeholders."],
      "Explore selected work": ["Ver projetos selecionados", "Explorar trabajos seleccionados"],
      "Start a conversation": ["Iniciar uma conversa", "Iniciar una conversación"],
      "Australian banking, analytics, CRM & business intelligence.": ["Setor bancário australiano, analytics, CRM & Business Intelligence.", "Banca australiana, analytics, CRM & Business Intelligence."],
      "International experience across Digital & Marketing, Retail, business analysis, customer insights, stakeholder reporting and analytics delivery.": ["Experiência internacional em Digital & Marketing, Retail, análise de negócios, Customer Insights, relatórios para stakeholders e entrega de soluções analíticas.", "Experiencia internacional en Digital & Marketing, Retail, análisis de negocio, Customer Insights, reporting para stakeholders y entrega de soluciones analíticas."],
      "Professional profile": ["Perfil profissional", "Perfil profesional"],
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
      "The solution became a repeatable reporting standard across a multi-brand banking environment and contributed to Employee of the Month recognition.": ["A solução tornou-se um padrão de reporting replicável em um ambiente bancário multimarcas e contribuiu para o reconhecimento de Employee of the Month.", "La solución se convirtió en un estándar de reporting replicable en un entorno bancario multimarca y contribuyó al reconocimiento de Employee of the Month."],
      "02 · Market strategy": ["02 · Estratégia de mercado", "02 · Estrategia de mercado"],
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
      "Served as a bridge between Data and Digital & Marketing, translating stakeholder questions into reporting logic and complex CRM and customer data into decision-ready analytics for operational banking teams and senior leadership.": ["Atuei como elo entre Dados e Digital & Marketing, transformando perguntas dos stakeholders em lógica de reporting e dados complexos de CRM e clientes em análises que apoiavam decisões das equipes operacionais bancárias e da alta liderança.", "Actué como enlace entre Datos y Digital & Marketing, convirtiendo preguntas de los stakeholders en lógica de reporting y datos complejos de CRM y clientes en análisis que apoyaban decisiones de los equipos operativos bancarios y la alta dirección."],
      "Gathered requirements through stakeholder workshops, defined KPIs and business rules, and owned reporting after release through validation, dashboard demonstrations, user support, and presentations adapted to technical and business audiences.": ["Levantei requisitos em workshops com stakeholders, defini KPIs e regras de negócio e mantive a responsabilidade pelos relatórios após a entrega, com validação, demonstrações de dashboards, suporte aos usuários e apresentações adaptadas a públicos técnicos e de negócio.", "Recopilé requisitos en talleres con stakeholders, definí KPIs y reglas de negocio y mantuve la responsabilidad sobre los informes tras su entrega, con validación, demostraciones de dashboards, soporte a usuarios y presentaciones adaptadas a públicos técnicos y de negocio."],
      "Diploma of International Business · Greystone College · Brisbane, Australia": ["Diploma em Negócios Internacionais · Greystone College · Brisbane, Austrália", "Diploma en Negocios Internacionales · Greystone College · Brisbane, Australia"],
      "Certificate IV in International Trade · Greystone College · Brisbane, Australia": ["Certificate IV em Comércio Internacional · Greystone College · Brisbane, Austrália", "Certificate IV en Comercio Internacional · Greystone College · Brisbane, Australia"],
      "Cambridge English Advanced (C1) · Shafston International College · Gold Coast, Australia": ["Cambridge English Advanced (C1) · Shafston International College · Gold Coast, Austrália", "Cambridge English Advanced (C1) · Shafston International College · Gold Coast, Australia"],
      "General English Advanced · Shafston International College · Gold Coast, Australia": ["General English Advanced · Shafston International College · Gold Coast, Austrália", "General English Advanced · Shafston International College · Gold Coast, Australia"],
      "Approximately seven years in Australia": ["Aproximadamente sete anos na Austrália", "Aproximadamente siete años en Australia"],
      "Approximately seven years of international experience living, studying, and working in Australia, including postgraduate education, corporate banking, analytics delivery, and professional communication in English.": ["Aproximadamente sete anos de experiência internacional vivendo, estudando e trabalhando na Austrália, incluindo pós-graduação, atuação no setor bancário corporativo, entrega de soluções analíticas e comunicação profissional em inglês.", "Aproximadamente siete años de experiencia internacional viviendo, estudiando y trabajando en Australia, incluida formación de posgrado, banca corporativa, desarrollo de soluciones analíticas y comunicación profesional en inglés."],
      "Worked across Australian banking teams and stakeholders at BOQ Group. During approximately the final six months of my BOQ role, I worked remotely from Brazil while continuing to support Australian stakeholders and business teams.": ["Atuei com equipes e stakeholders do setor bancário australiano no BOQ Group. Durante aproximadamente os seis meses finais da minha função no BOQ, trabalhei remotamente do Brasil, continuando a apoiar stakeholders e equipes de negócio na Austrália.", "Trabajé con equipos y stakeholders de la banca australiana en BOQ Group. Durante aproximadamente los últimos seis meses de mi función en BOQ, trabajé de forma remota desde Brasil, manteniendo el apoyo a stakeholders y equipos de negocio en Australia."],
      "Scale beyond the case studies": ["Escala além dos estudos de caso", "Alcance más allá de los casos de estudio"],
      "15+ recurring Power BI reports": ["Mais de 15 relatórios recorrentes em Power BI", "Más de 15 informes recurrentes en Power BI"],
      "Maintained a reporting portfolio with daily or weekly refreshes depending on business need, including annual financial-year reporting refreshes and revamps.": ["Mantive um portfólio de relatórios com atualizações diárias ou semanais conforme a necessidade do negócio, incluindo revisões e reformulações anuais para cada exercício financeiro.", "Mantuve una cartera de informes con actualizaciones diarias o semanales según las necesidades del negocio, incluidas revisiones y renovaciones anuales para cada ejercicio financiero."],
      "Banking and campaign scale": ["Escala bancária e de campanhas", "Alcance bancario y de campañas"],
      "Supported a network of approximately 111 branches and analysed thousands of leads. Typical periods involved approximately 2–3 campaigns or activations per month, with audiences ranging from hundreds to thousands.": ["Apoiei uma rede de aproximadamente 111 agências e analisei milhares de leads. Em períodos típicos, o trabalho envolvia aproximadamente 2–3 campanhas ou ativações por mês, com públicos de centenas a milhares de pessoas.", "Apoyé una red de aproximadamente 111 sucursales y analicé miles de leads. En períodos habituales, el trabajo abarcaba aproximadamente 2–3 campañas o activaciones al mes, con audiencias de cientos a miles de personas."],
      "Different audiences, different decisions": ["Públicos diferentes, decisões diferentes", "Públicos distintos, decisiones distintas"],
      "Some operational dashboards had around 50 weekly users; some leadership dashboards served approximately 5–6 regular users. Presented analytics work to internal audiences that could reach hundreds of people.": ["Alguns dashboards operacionais tinham cerca de 50 usuários semanais; alguns dashboards de liderança atendiam aproximadamente 5–6 usuários regulares. Apresentei trabalhos de analytics a públicos internos que podiam chegar a centenas de pessoas.", "Algunos dashboards operativos tenían alrededor de 50 usuarios semanales; algunos dashboards de liderazgo atendían a aproximadamente 5–6 usuarios habituales. Presenté trabajos de analytics a audiencias internas que podían alcanzar cientos de personas."],
      "Across business functions": ["Entre áreas de negócio", "Entre áreas de negocio"],
      "Supported Digital & Marketing, Data, Finance, branch and regional/state leadership, bankers, lenders, BOQ Specialist/business banking, Design leadership, and senior leaders.": ["Apoiei Digital & Marketing, Dados, Finanças, liderança de agências, regiões e estados, equipes bancárias e de crédito, BOQ Specialist/business banking, liderança de Design e alta liderança.", "Apoyé a Digital & Marketing, Datos, Finanzas, liderazgo de sucursales, regiones y estados, equipos bancarios y de crédito, BOQ Specialist/business banking, liderazgo de Diseño y alta dirección."],
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
      "Brazil, Australia, and remote work": ["Brasil, Austrália e trabalho remoto", "Brasil, Australia y trabajo remoto"],
      "BOQ Group · Australian banking career": ["BOQ Group · Carreira no setor bancário australiano", "BOQ Group · Carrera en banca australiana"],
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
      "An end-to-end customer acquisition and lending analytics framework connecting digital leads, CRM, applications, and lending outcomes to assess conversion, lead quality, and acquisition costs at BOQ Group.": ["Um framework de analytics de aquisição de clientes e crédito de ponta a ponta, conectando leads digitais, CRM, propostas e resultados de crédito para avaliar conversão, qualidade dos leads e custos de aquisição no BOQ Group.", "Un marco de analytics de adquisición de clientes y crédito de principio a fin, que conecta leads digitales, CRM, solicitudes y resultados de crédito para evaluar conversión, calidad de los leads y costes de adquisición en BOQ Group."],
      "The first major reporting version was released for ME Bank in approximately two months, then expanded to Virgin Money Australia and other BOQ environments. The work covered thousands of leads in a multi-brand Australian banking environment, supporting teams across a network of approximately 111 branches. Dashboards refreshed daily or weekly according to business need.": ["A primeira versão principal do reporting foi entregue para ME Bank em aproximadamente dois meses e depois expandida para Virgin Money Australia e outros ambientes do BOQ. O trabalho abrangeu milhares de leads em um ambiente bancário australiano multimarcas, apoiando equipes de uma rede de aproximadamente 111 agências. Os dashboards eram atualizados diariamente ou semanalmente conforme a necessidade do negócio.", "La primera versión principal del reporting se entregó para ME Bank en aproximadamente dos meses y después se amplió a Virgin Money Australia y otros entornos de BOQ. El trabajo abarcó miles de leads en un entorno bancario australiano multimarca, apoyando a equipos de una red de aproximadamente 111 sucursales. Los dashboards se actualizaban a diario o semanalmente según las necesidades del negocio."],
      "Digital lead, CRM, application, and lending data existed in different systems with no common primary key connecting the full customer journey. Digital & Marketing could measure lead generation, but had limited visibility into which leads became applications and actual lending outcomes. Reliable record matching was needed before teams could compare acquisition performance.": ["Dados de leads digitais, CRM, propostas e crédito estavam em sistemas diferentes, sem uma chave primária comum que conectasse toda a jornada do cliente. Digital & Marketing conseguia medir a geração de leads, mas tinha visibilidade limitada sobre quais leads se tornavam propostas e resultados efetivos de crédito. Era necessário estabelecer correspondências confiáveis entre registros antes de comparar a performance de aquisição.", "Los datos de leads digitales, CRM, solicitudes y crédito estaban en distintos sistemas, sin una clave primaria común que conectara todo el recorrido del cliente. Digital & Marketing podía medir la generación de leads, pero tenía visibilidad limitada sobre cuáles se convertían en solicitudes y resultados efectivos de crédito. Era necesario vincular los registros de forma fiable antes de comparar el rendimiento de adquisición."],
      "I gathered requirements and clarified business funnel questions, then helped link fragmented sources using record-matching techniques where no shared key existed. My contribution covered SQL analysis and preparation, KPI and business-rule definition, Power BI and DAX, validation, data-quality checks, and reconciliation across the journey.": ["Levantei requisitos e esclareci questões de negócio sobre o funil, ajudando a conectar fontes fragmentadas por meio de técnicas de correspondência de registros onde não havia uma chave compartilhada. Minha contribuição envolveu análise e preparação em SQL, definição de KPIs e regras de negócio, Power BI e DAX, validação, verificações de qualidade dos dados e conciliação ao longo da jornada.", "Recopilé requisitos y aclaré preguntas de negocio sobre el embudo, ayudando a conectar fuentes fragmentadas mediante técnicas de vinculación de registros donde no existía una clave compartida. Mi contribución abarcó análisis y preparación en SQL, definición de KPIs y reglas de negocio, Power BI y DAX, validación, controles de calidad de datos y conciliación a lo largo del recorrido."],
      "Record matching connected acquisition records with downstream CRM, application, and lending data. SQL preparation, DAX measures, and validated reporting logic made the linked journey usable in Power BI for both operational follow-up and commercial analysis.": ["A correspondência de registros conectou dados de aquisição às etapas seguintes de CRM, propostas e crédito. A preparação em SQL, as medidas DAX e a lógica de reporting validada tornaram a jornada integrada utilizável no Power BI para acompanhamento operacional e análise comercial.", "La vinculación de registros conectó los datos de adquisición con las etapas posteriores de CRM, solicitudes y crédito. La preparación en SQL, las medidas DAX y la lógica de reporting validada permitieron utilizar el recorrido integrado en Power BI para seguimiento operativo y análisis comercial."],
      "Digital / Website / App Lead → CRM → Application → Lending Outcome": ["Lead digital / Website / Aplicativo → CRM → Proposta → Resultado de crédito", "Lead digital / Sitio web / Aplicación móvil → CRM → Solicitud → Resultado de crédito"],
      "Digital / Website / App Lead": ["Lead digital / Website / Aplicativo", "Lead digital / Sitio web / Aplicación móvil"],
      "Application": ["Proposta", "Solicitud"],
      "Lending Outcome": ["Resultado de crédito", "Resultado de crédito"],
      "SQL & record matching": ["SQL & correspondência de registros", "SQL & vinculación de registros"],
      "Compared lead source and channel, brand, branch, state/region, banker/agent, status, application progression, lending outcome, and conversion.": ["Comparei origem e canal dos leads, marca, agência, estado/região, responsável bancário/agente, status, avanço da proposta, resultado de crédito e conversão.", "Comparé origen y canal de los leads, marca, sucursal, estado/región, responsable bancario/agente, estado del lead, avance de la solicitud, resultado de crédito y conversión."],
      "Examined lead quality, time-to-convert, geographic conversion differences, and acquisition-source quality; identified patterns associated with higher-quality or higher-converting leads.": ["Analisei qualidade dos leads, tempo até a conversão, diferenças geográficas de conversão e qualidade das fontes de aquisição; identifiquei padrões associados a leads de maior qualidade ou maior conversão.", "Analicé calidad de los leads, tiempo hasta la conversión, diferencias geográficas de conversión y calidad de las fuentes de adquisición; identifiqué patrones asociados a leads de mayor calidad o mayor conversión."],
      "Compared the cost of leads, cost of converted leads, and cost associated with non-converted leads to assess paid-media efficiency and customer acquisition performance.": ["Comparei o custo dos leads, o custo dos leads convertidos e o custo associado aos não convertidos para avaliar a eficiência da mídia paga e a performance de aquisição de clientes.", "Comparé el coste de los leads, el coste de los leads convertidos y el coste asociado a los no convertidos para evaluar la eficiencia de los medios pagados y el rendimiento de adquisición de clientes."],
      "ME Bank and Virgin Money: a business investigation": ["ME Bank e Virgin Money: uma investigação de negócio", "ME Bank y Virgin Money: una investigación de negocio"],
      "Comparable end-to-end data showed materially lower conversion for Virgin Money Australia leads than comparable ME Bank leads, despite broadly similar lending products. This provided a basis to investigate website and digital journeys, acquisition-source mix, lead quality, customer journeys, and downstream CRM/application progression.": ["Dados comparáveis de ponta a ponta mostraram conversão materialmente menor dos leads de Virgin Money Australia em relação a leads comparáveis de ME Bank, apesar de produtos de crédito amplamente semelhantes. Isso criou uma base para investigar websites e jornadas digitais, composição das fontes de aquisição, qualidade dos leads, jornadas dos clientes e avanço nas etapas de CRM e propostas.", "Los datos comparables de principio a fin mostraron una conversión considerablemente menor de los leads de Virgin Money Australia frente a leads comparables de ME Bank, pese a productos de crédito ampliamente similares. Esto proporcionó una base para investigar sitios web y recorridos digitales, composición de las fuentes de adquisición, calidad de los leads, recorridos de clientes y avance en las etapas de CRM y solicitudes."],
      "With downstream outcomes visible, teams could compare acquisition sources using actual conversion rather than raw lead volume, identify weaker sources, and compare converted versus non-converted acquisition costs. The reporting informed marketing-budget allocation and helped identify and reduce unnecessary acquisition spend. Leadership gained clearer customer-acquisition visibility, while branch, banker, and lender teams could monitor leads and follow up across brands and regions.": ["Com visibilidade dos resultados nas etapas seguintes, as equipes passaram a comparar fontes de aquisição pela conversão efetiva, além do volume bruto de leads, identificar fontes mais fracas e comparar custos de aquisição de leads convertidos e não convertidos. O reporting informou a alocação do orçamento de marketing e ajudou a identificar e reduzir gastos desnecessários de aquisição. A liderança ganhou mais clareza sobre a aquisição de clientes, enquanto equipes de agências, bancárias e de crédito puderam monitorar leads e acompanhá-los entre marcas e regiões.", "Con visibilidad de los resultados posteriores, los equipos pudieron comparar fuentes de adquisición por conversión efectiva, además del volumen bruto de leads, identificar fuentes más débiles y comparar costes de adquisición de leads convertidos y no convertidos. El reporting informó la asignación del presupuesto de marketing y ayudó a identificar y reducir gastos innecesarios de adquisición. La dirección obtuvo mayor visibilidad sobre la adquisición de clientes, mientras los equipos de sucursales, banca y crédito pudieron monitorizar leads y darles seguimiento entre marcas y regiones."],
      "Employee of the Month recognised the broader impact of my analytics work and project delivery, including this acquisition and lending framework.": ["Employee of the Month reconheceu o impacto mais amplo do meu trabalho em analytics e entrega de projetos, incluindo este framework de aquisição e crédito.", "Employee of the Month reconoció el impacto más amplio de mi trabajo en analytics y entrega de proyectos, incluido este marco de adquisición y crédito."],
      "CRM campaign and event reporting": ["Reporting de campanhas e eventos no CRM", "Reporting de campañas y eventos en CRM"],
      "Related reporting connected CRM campaign IDs through campaign/event → CRM lead → banker → follow-up → conversion/performance. This made resulting leads, banker allocation, lead retrieval, follow-up, and outcomes visible, including a BOQ Specialist example involving professional and specialist banking customer segments.": ["Relatórios relacionados conectavam IDs de campanhas no CRM ao fluxo campanha/evento → lead no CRM → responsável bancário → acompanhamento → conversão/performance. Isso dava visibilidade aos leads gerados, à distribuição entre responsáveis, à recuperação de leads, ao acompanhamento e aos resultados, incluindo um exemplo do BOQ Specialist com segmentos de clientes profissionais e de serviços bancários especializados.", "Informes relacionados conectaban IDs de campañas en CRM a través del flujo campaña/evento → lead en CRM → responsable bancario → seguimiento → conversión/rendimiento. Esto permitía visualizar leads generados, asignación de responsables, recuperación de leads, seguimiento y resultados, incluido un ejemplo de BOQ Specialist con segmentos de clientes profesionales y de banca especializada."],
      "Data & CRM Analyst · BI delivery · Business analysis": ["Data & CRM Analyst · Entrega de BI · Análise de negócios", "Data & CRM Analyst · Entrega de BI · Análisis de negocio"],
      "Employee of the Month · BOQ Group": ["Employee of the Month · BOQ Group", "Employee of the Month · BOQ Group"],
      "Solution architecture": ["Arquitetura da solução", "Arquitectura de la solución"],
      "Website, app & paid media": ["Website, aplicativo & mídia paga", "Sitio web, aplicación & medios pagados"],
      "SQL & data preparation": ["SQL & preparação de dados", "SQL & preparación de datos"],
      "Power BI reporting layer": ["Camada de reporting em Power BI", "Capa de reporting en Power BI"],
      "Marketing, leaders & regions": ["Marketing, liderança & regiões", "Marketing, liderazgo & regiones"],
      "A new digital channel needed a reporting standard.": ["Um novo canal digital precisava de um padrão de reporting.", "Un nuevo canal digital necesitaba un estándar de reporting."],
      "BOQ Group was launching and expanding digital home loan journeys across its banking brands. Leads were being generated through websites, digital campaigns, app journeys, paid media, and marketing activations, but the business did not yet have a structured way to track those leads end to end.": ["O BOQ Group estava lançando e expandindo jornadas digitais de crédito imobiliário entre suas marcas bancárias. Leads eram gerados por websites, campanhas digitais, jornadas em aplicativos, mídia paga e ativações de marketing, mas o negócio ainda não tinha uma forma estruturada de acompanhá-los de ponta a ponta.", "BOQ Group estaba lanzando y ampliando journeys digitales de crédito hipotecario entre sus marcas bancarias. Los leads se generaban a través de sitios web, campañas digitales, journeys en aplicaciones, medios pagados y activaciones de marketing, pero el negocio aún no contaba con una forma estructurada de seguirlos de extremo a extremo."],
      "Connect acquisition activity to what happened next.": ["Conectar a atividade de aquisição ao que aconteceu depois.", "Conectar la actividad de adquisición con lo que ocurrió después."],
      "Trace lead sources across digital journeys and campaign activations.": ["Rastrear as origens dos leads em jornadas digitais e ativações de campanhas.", "Rastrear el origen de los leads en journeys digitales y activaciones de campañas."],
      "Connect paid media and marketing activity with customer acquisition outcomes.": ["Conectar mídia paga e atividades de marketing aos resultados de aquisição de clientes.", "Conectar los medios pagados y la actividad de marketing con los resultados de adquisición de clientes."],
      "Compare performance by brand, state, channel, and business area.": ["Comparar a performance por marca, estado, canal e área de negócio.", "Comparar el rendimiento por marca, estado, canal y área de negocio."],
      "Give branch and relationship teams clearer visibility over CRM follow-up.": ["Dar às equipes de agências e relacionamento mais visibilidade sobre o acompanhamento no CRM.", "Dar a los equipos de sucursales y relación mayor visibilidad sobre el seguimiento en CRM."],
      "Create a repeatable, executive-ready reporting standard.": ["Criar um padrão de reporting replicável e pronto para executivos.", "Crear un estándar de reporting replicable y preparado para ejecutivos."],
      "Scoped and developed the reporting solution end to end.": ["Defini o escopo e desenvolvi a solução de reporting de ponta a ponta.", "Definí el alcance y desarrollé la solución de reporting de extremo a extremo."],
      "I also supported iterative releases as the framework expanded across brands and geographies, balancing detailed operational questions with the concise view leadership needed.": ["Também apoiei entregas iterativas à medida que o framework se expandia entre marcas e regiões, equilibrando questões operacionais detalhadas com a visão concisa necessária para a liderança.", "También apoyé entregas iterativas a medida que el framework se ampliaba entre marcas y regiones, equilibrando preguntas operativas detalladas con la visión concisa que necesitaba el liderazgo."],
      "Working position": ["Posicionamento no projeto", "Posición en el proyecto"],
      "I operated as an analytics partner between Digital & Marketing, CRM data, reporting technology, and the business teams responsible for lead follow-up.": ["Atuei como parceiro de analytics entre Digital & Marketing, dados de CRM, tecnologia de reporting e as equipes de negócio responsáveis pelo acompanhamento dos leads.", "Actué como socio de analytics entre Digital & Marketing, los datos de CRM, la tecnología de reporting y los equipos de negocio responsables del seguimiento de leads."],
      "A governed decision-support layer for lead performance.": ["Uma camada governada de apoio à decisão para a performance de leads.", "Una capa gobernada de apoyo a decisiones para el rendimiento de leads."],
      "Rather than treating each request as a one-off report, the solution established reusable logic that could accommodate additional brands, states, and evolving business questions.": ["Em vez de tratar cada solicitação como um relatório isolado, a solução estabeleceu uma lógica reutilizável capaz de incorporar novas marcas, estados e questões de negócio em evolução.", "En lugar de tratar cada solicitud como un informe aislado, la solución estableció una lógica reutilizable capaz de incorporar nuevas marcas, estados y preguntas de negocio en evolución."],
      "Technology connected to business context.": ["Tecnologia conectada ao contexto de negócio.", "Tecnología conectada al contexto de negocio."],
      "From a visibility gap to a repeatable analytics capability.": ["Da falta de visibilidade a uma capacidade de analytics replicável.", "De la falta de visibilidad a una capacidad de analytics replicable."],
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
      "A customer segmentation and market intelligence framework connecting CRM, product holdings, and local demographics to explore geographic opportunity, cross-sell potential, and branch strategy across Australia.": ["Um framework de segmentação de clientes e inteligência de mercado que conecta CRM, produtos contratados e demografia local para analisar oportunidades geográficas, potencial de venda cruzada e estratégia de agências na Austrália.", "Un marco de segmentación de clientes e inteligencia de mercado que conecta CRM, productos contratados y demografía local para analizar oportunidades geográficas, potencial de venta cruzada y estrategia de sucursales en Australia."],
      "Stakeholders needed to understand who lived around each branch and how that local market differed from BOQ's customer base. Questions included where customer penetration was stronger or weaker, which segments were under-represented, where home-loan and other product opportunities existed, and how strategy should differ by postcode or branch catchment.": ["Os stakeholders precisavam entender quem vivia ao redor de cada agência e como o mercado local diferia da base de clientes do BOQ. As questões incluíam onde a penetração de clientes era maior ou menor, quais segmentos estavam sub-representados, onde havia oportunidades de crédito imobiliário e outros produtos e como a estratégia deveria variar por código postal ou área de influência da agência.", "Los stakeholders necesitaban comprender quién vivía alrededor de cada sucursal y cómo ese mercado local difería de la base de clientes de BOQ. Las preguntas incluían dónde la penetración de clientes era mayor o menor, qué segmentos estaban infrarrepresentados, dónde existían oportunidades de crédito hipotecario y otros productos y cómo debía variar la estrategia según el código postal o área de influencia de la sucursal."],
      "Identify under-penetrated customer groups, high-income customer opportunities, and cross-sell potential based on product holdings.": ["Identificar grupos de clientes com baixa penetração, oportunidades entre clientes de alta renda e potencial de venda cruzada a partir dos produtos contratados.", "Identificar grupos de clientes con baja penetración, oportunidades entre clientes de altos ingresos y potencial de venta cruzada a partir de los productos contratados."],
      "The framework combined CRM/customer data, customer portfolios, and product holdings with branch/postcode relationships and public demographic information. Income, household characteristics, age and population patterns, language and cultural indicators, and geographic context helped compare customer segments with local markets in Power BI.": ["O framework combinou dados de CRM/clientes, portfólios e produtos contratados com relações entre agências e códigos postais e informações demográficas públicas. Renda, características domiciliares, padrões etários e populacionais, indicadores linguísticos e culturais e contexto geográfico ajudaram a comparar segmentos de clientes com mercados locais no Power BI.", "El marco combinó datos de CRM/clientes, carteras y productos contratados con relaciones entre sucursales y códigos postales e información demográfica pública. Los ingresos, las características de los hogares, los patrones de edad y población, los indicadores lingüísticos y culturales y el contexto geográfico ayudaron a comparar segmentos de clientes con mercados locales en Power BI."],
      "Reuse by Design leadership": ["Reutilização pela liderança de Design", "Reutilización por el liderazgo de Diseño"],
      "Originally built mainly for branch/business leadership, lending, and strategic audiences, the analytics product later attracted a Design leadership stakeholder during changes, closures, and revamps across parts of the branch network. They saw potential to use its demographic intelligence in branch-revamp and local-material discussions.": ["Criado inicialmente sobretudo para liderança de agências e de negócio, crédito e públicos estratégicos, o produto analítico despertou depois o interesse de um stakeholder da liderança de Design durante mudanças, fechamentos e reformas em partes da rede de agências. Esse stakeholder viu potencial no uso da inteligência demográfica em discussões sobre reformas de agências e materiais locais.", "Creado inicialmente sobre todo para liderazgo de sucursales y de negocio, crédito y públicos estratégicos, el producto analítico despertó después el interés de un stakeholder del liderazgo de Diseño durante cambios, cierres y renovaciones en partes de la red de sucursales. Este stakeholder vio potencial para utilizar la inteligencia demográfica en conversaciones sobre renovación de sucursales y materiales locales."],
      "The intelligence could inform locally relevant signage, imagery, language choices, campaign materials, community engagement, and branch communication. For example, a catchment with a significant Chinese or broader multicultural population could prompt discussion of more relevant communication or imagery. This was a potential application of the analysis, not a claim that particular signage or design changes were implemented.": ["A inteligência poderia orientar discussões sobre sinalização, imagens, escolha de idiomas, materiais de campanhas, engajamento comunitário e comunicação das agências mais adequados ao contexto local. Por exemplo, uma região com população chinesa ou multicultural significativa poderia motivar discussões sobre comunicação ou imagens mais relevantes. Trata-se de uma aplicação potencial da análise, sem afirmar que determinada sinalização ou mudança de design tenha sido implementada.", "La inteligencia podría orientar conversaciones sobre señalización, imágenes, elección de idiomas, materiales de campañas, participación comunitaria y comunicación de sucursales adaptadas al contexto local. Por ejemplo, una zona con una población china o multicultural significativa podría motivar conversaciones sobre comunicación o imágenes más relevantes. Se trata de una aplicación potencial del análisis, sin afirmar que se implementara una señalización o un cambio de diseño concreto."],
      "The framework gave banking stakeholders an evidence base for segmentation, cross-sell analysis, and local strategy. Interest from Design leadership showed how an analytics product created for one audience could become useful to another function facing a different strategic problem.": ["O framework ofereceu aos stakeholders bancários uma base de evidências para segmentação, análise de venda cruzada e estratégia local. O interesse da liderança de Design mostrou como um produto analítico criado para um público poderia se tornar útil para outra área diante de um problema estratégico diferente.", "El marco ofreció a los stakeholders bancarios una base de evidencia para segmentación, análisis de venta cruzada y estrategia local. El interés del liderazgo de Diseño mostró cómo un producto analítico creado para un público podía resultar útil para otra área ante un problema estratégico distinto."],
      "Cross-sell and product opportunity": ["Venda cruzada e oportunidades de produtos", "Venta cruzada y oportunidades de productos"],
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
      "Understand who lived around each branch or postcode area.": ["Entender quem vivia ao redor de cada agência ou área de código postal.", "Comprender quién vivía alrededor de cada sucursal o zona de código postal."],
      "Compare external demographics with existing customer profiles and product holdings.": ["Comparar dados demográficos externos com perfis de clientes e produtos existentes.", "Comparar datos demográficos externos con perfiles de clientes y productos existentes."],
      "Support more relevant local messaging, engagement, and branch planning.": ["Apoiar mensagens locais, engajamento e planejamento de agências mais relevantes.", "Apoyar mensajes locales, engagement y planificación de sucursales más relevantes."],
      "Make complex multi-source analysis usable for non-technical leaders.": ["Tornar análises complexas e multifuentes utilizáveis por líderes não técnicos.", "Hacer que análisis complejos y multifuente resulten útiles para líderes no técnicos."],
      "Translated multi-source data into an executive-ready market view.": ["Transformei dados de múltiplas fontes em uma visão de mercado pronta para executivos.", "Convertí datos de múltiples fuentes en una visión de mercado preparada para ejecutivos."],
      "I supported the analysis and reporting layer, helping combine internal CRM and customer portfolio data with external demographic and postcode reference sources. My role required understanding the business questions behind the analysis, structuring comparisons at the right geographic level, and presenting the findings in a form branch and leadership stakeholders could use.": ["Apoiei a camada de análise e reporting, combinando dados internos de CRM e portfólio de clientes com fontes externas de dados demográficos e códigos postais. Minha função exigiu compreender as questões de negócio, estruturar comparações no nível geográfico adequado e apresentar os resultados de forma útil para stakeholders de agências e liderança.", "Apoyé la capa de análisis y reporting, combinando datos internos de CRM y cartera de clientes con fuentes externas de datos demográficos y códigos postales. Mi función exigió comprender las preguntas de negocio, estructurar comparaciones en el nivel geográfico adecuado y presentar los resultados de forma útil para stakeholders de sucursales y liderazgo."],
      "Core analytical question": ["Questão analítica central", "Pregunta analítica central"],
      "How does the customer base the bank currently serves compare with the broader population and opportunity in each local market?": ["Como a base de clientes atualmente atendida pelo banco se compara à população e às oportunidades mais amplas de cada mercado local?", "¿Cómo se compara la base de clientes que atiende actualmente el banco con la población y las oportunidades más amplias de cada mercado local?"],
      "A customer portfolio and market intelligence decision layer.": ["Uma camada de decisão para portfólio de clientes e Market Intelligence.", "Una capa de decisión para cartera de clientes y Market Intelligence."],
      "The result supported exploration of portfolio mix, demographic alignment, geographic gaps, and local product or engagement opportunities across the branch network.": ["O resultado apoiou a exploração do mix de portfólio, alinhamento demográfico, lacunas geográficas e oportunidades locais de produtos ou engajamento em toda a rede de agências.", "El resultado apoyó el análisis del mix de cartera, la alineación demográfica, las brechas geográficas y las oportunidades locales de productos o engagement en toda la red de sucursales."],
      "Internal customer context meets external market evidence.": ["O contexto interno de clientes encontra as evidências externas de mercado.", "El contexto interno de clientes se conecta con la evidencia externa de mercado."],
      "A clearer link between who the bank served and who lived locally.": ["Uma conexão mais clara entre quem o banco atendia e quem vivia localmente.", "Una conexión más clara entre quienes atendía el banco y quienes vivían localmente."],
      "Local branch strategy": ["Estratégia local de agências", "Estrategia local de sucursales"],
      "Customer portfolio gap analysis": ["Análise de lacunas no portfólio de clientes", "Análisis de brechas en la cartera de clientes"],
      "Geographic opportunity mapping": ["Mapeamento de oportunidades geográficas", "Mapeo de oportunidades geográficas"],
      "More relevant local engagement": ["Engajamento local mais relevante", "Engagement local más relevante"],
      "Executive-ready market comparison": ["Comparação de mercado pronta para executivos", "Comparación de mercado preparada para ejecutivos"],
      "This case study uses an abstract process flow and high-level descriptions only. No customer records, internal branch figures, proprietary analysis, or confidential BOQ Group dashboard screenshots are included.": ["Este estudo de caso utiliza apenas um fluxo abstrato e descrições de alto nível. Não inclui registros de clientes, números internos de agências, análises proprietárias ou screenshots confidenciais de dashboards do BOQ Group.", "Este caso de estudio utiliza únicamente un flujo abstracto y descripciones de alto nivel. No incluye registros de clientes, cifras internas de sucursales, análisis propios ni capturas confidenciales de dashboards de BOQ Group."],
      "← Digital Home Loan": ["← Digital Home Loan", "← Digital Home Loan"],
      "Next: Lifecycle Marketing →": ["Próximo: Lifecycle Marketing →", "Siguiente: Lifecycle Marketing →"]
    },

    "lifecycle-marketing": {
      "BOQ Group's Digital & Marketing team needed a stronger way to measure customer journeys and lifecycle marketing performance across digital channels. The work covered EDM and email campaigns, website activations, audience segmentation, control groups, A/B testing, UTM tracking, campaign response, and journey signals.": ["A equipe de Digital & Marketing do BOQ Group precisava de uma forma mais consistente de medir jornadas de clientes e performance de Lifecycle Marketing em canais digitais. O trabalho abrangeu campanhas de EDM e e-mail, ativações em websites, segmentação de públicos, grupos de controle, testes A/B, rastreamento UTM, resposta às campanhas e sinais das jornadas.", "El equipo de Digital & Marketing de BOQ Group necesitaba una forma más consistente de medir recorridos de clientes y rendimiento de Lifecycle Marketing en canales digitales. El trabajo abarcó campañas de EDM y correo electrónico, activaciones en sitios web, segmentación de audiencias, grupos de control, pruebas A/B, seguimiento UTM, respuesta a campañas y señales de los recorridos."],
      "I translated marketing and business questions into reporting logic, explained CRM/data structures in business language, and converted stakeholder needs into analytical requirements. I supported dashboard requirements and design, assessed Power BI feasibility, and worked with Data teams on governed preparation and audience-building workflows.": ["Transformei perguntas de marketing e de negócio em lógica de reporting, expliquei estruturas de CRM e dados em linguagem de negócio e converti necessidades dos stakeholders em requisitos analíticos. Apoiei requisitos e design do dashboard, avaliei a viabilidade em Power BI e trabalhei com equipes de Dados em preparação governada e fluxos de construção de públicos.", "Convertí preguntas de marketing y de negocio en lógica de reporting, expliqué estructuras de CRM y datos en lenguaje de negocio y transformé necesidades de stakeholders en requisitos analíticos. Apoyé requisitos y diseño del dashboard, evalué la viabilidad en Power BI y trabajé con equipos de Datos en preparación gobernada y flujos de construcción de audiencias."],
      "I connected Digital & Marketing, CRM, Data teams, EY, and business stakeholders, aligning customer journey measurement, segmentation, audience testing, and reporting requirements with the available data and governance constraints.": ["Conectei Digital & Marketing, CRM, equipes de Dados, EY e stakeholders de negócio, alinhando mensuração da jornada do cliente, segmentação, testes de públicos e requisitos de reporting aos dados disponíveis e às restrições de governança.", "Conecté Digital & Marketing, CRM, equipos de Datos, EY y stakeholders de negocio, alineando medición del recorrido del cliente, segmentación, pruebas de audiencias y requisitos de reporting con los datos disponibles y las restricciones de gobernanza."],
      "Reporting combined campaign and UTM tracking with audience comparisons, control groups, A/B testing, and customer response analysis. Connecting these signals to lifecycle stages and customer journeys gave Digital & Marketing a more consistent basis for experimentation and optimisation within privacy-aware, governed workflows.": ["O reporting combinou acompanhamento de campanhas e rastreamento UTM com comparações de públicos, grupos de controle, testes A/B e análise de resposta dos clientes. A conexão desses sinais a etapas do ciclo de vida e jornadas dos clientes ofereceu a Digital & Marketing uma base mais consistente para experimentação e otimização em fluxos governados e atentos à privacidade.", "El reporting combinó seguimiento de campañas y UTM con comparaciones de audiencias, grupos de control, pruebas A/B y análisis de respuesta de clientes. La conexión de estas señales con etapas del ciclo de vida y recorridos de clientes ofreció a Digital & Marketing una base más consistente para experimentación y optimización en flujos gobernados y respetuosos con la privacidad."],
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
      "BOQ Group engaged EY on the dashboard build. I collaborated with EY as the internal CRM, Power BI, Data Analyst, and Business Analyst reference for Digital & Marketing, including in-person project work in Sydney.": ["O BOQ Group contratou a EY para desenvolver o dashboard. Colaborei com a EY como referência interna de CRM, Power BI, Data Analyst e Business Analyst para Digital & Marketing, incluindo trabalho presencial no projeto em Sydney.", "BOQ Group contrató a EY para desarrollar el dashboard. Colaboré con EY como referente interno de CRM, Power BI, Data Analyst y Business Analyst para Digital & Marketing, incluido trabajo presencial en el proyecto en Sídney."],
      "Measure campaigns without losing data meaning or governance.": ["Medir campanhas sem perder o significado dos dados ou a governança.", "Medir campañas sin perder el significado de los datos ni la gobernanza."],
      "The team needed visibility over campaign effectiveness and experimentation while working within privacy and compliance constraints around customer-level data. Marketing concepts such as audience logic, lifecycle stages, control groups, and response needed to be translated correctly into reporting logic.": ["A equipe precisava de visibilidade sobre a efetividade das campanhas e a experimentação, respeitando restrições de privacidade e compliance relacionadas a dados no nível do cliente. Conceitos de marketing como lógica de audiências, etapas de lifecycle, grupos de controle e resposta precisavam ser traduzidos corretamente em lógica de reporting.", "El equipo necesitaba visibilidad sobre la eficacia de las campañas y la experimentación, respetando las restricciones de privacidad y compliance relacionadas con datos a nivel de cliente. Conceptos de marketing como lógica de audiencias, etapas de lifecycle, grupos de control y respuesta debían traducirse correctamente en lógica de reporting."],
      "Track EDM, website, and campaign activations consistently.": ["Acompanhar ativações de EDM, websites e campanhas de forma consistente.", "Realizar un seguimiento consistente de activaciones de EDM, sitios web y campañas."],
      "Interpret audience segments, control groups, and A/B tests correctly.": ["Interpretar corretamente segmentos de audiência, grupos de controle e testes A/B.", "Interpretar correctamente segmentos de audiencia, grupos de control y pruebas A/B."],
      "Connect CRM and campaign activity with customer response.": ["Conectar atividades de CRM e campanhas às respostas dos clientes.", "Conectar la actividad de CRM y campañas con la respuesta de clientes."],
      "Support vendor collaboration without exposing unnecessary personal information.": ["Apoiar a colaboração com fornecedores sem expor informações pessoais desnecessárias.", "Apoyar la colaboración con proveedores sin exponer información personal innecesaria."],
      "Create a maintainable reporting framework for Digital & Marketing users.": ["Criar um framework de reporting sustentável para usuários de Digital & Marketing.", "Crear un framework de reporting sostenible para usuarios de Digital & Marketing."],
      "The internal bridge between Marketing, CRM data, BI, and EY.": ["A ponte interna entre Marketing, dados de CRM, BI e EY.", "El puente interno entre Marketing, datos de CRM, BI y EY."],
      "My contribution combined business analysis, hands-on analytics, stakeholder consulting, and ongoing dashboard support. Being flown from Brisbane to Sydney for the project reflected the importance of direct collaboration and the trust placed in my knowledge of the CRM and reporting environment.": ["Minha contribuição combinou análise de negócios, analytics prático, consultoria com stakeholders e suporte contínuo ao dashboard. A viagem de Brisbane a Sydney para o projeto refletiu a importância da colaboração direta e a confiança no meu conhecimento do ambiente de CRM e reporting.", "Mi contribución combinó análisis de negocio, analytics práctico, consultoría con stakeholders y soporte continuo del dashboard. El viaje de Brisbane a Sídney para el proyecto reflejó la importancia de la colaboración directa y la confianza en mi conocimiento del entorno de CRM y reporting."],
      "Internal reference role": ["Função de referência interna", "Función de referente interno"],
      "A campaign performance layer designed around governance.": ["Uma camada de performance de campanhas desenhada com foco em governança.", "Una capa de rendimiento de campañas diseñada en torno a la gobernanza."],
      "The framework connected campaign definitions, audience-building workflows, Adobe Campaign and CRM data, governed Databricks preparation, SQL logic, and Power BI reporting. This structure enabled segmentation and performance analysis while limiting unnecessary exposure of personal customer information.": ["O framework conectou definições de campanhas, fluxos de construção de audiências, dados de Adobe Campaign e CRM, preparação governada em Databricks, lógica SQL e reporting em Power BI. Essa estrutura permitiu segmentação e análise de performance, limitando a exposição desnecessária de informações pessoais de clientes.", "El framework conectó definiciones de campañas, flujos de creación de audiencias, datos de Adobe Campaign y CRM, preparación gobernada en Databricks, lógica SQL y reporting en Power BI. Esta estructura permitió la segmentación y el análisis de rendimiento, limitando la exposición innecesaria de información personal de clientes."],
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
