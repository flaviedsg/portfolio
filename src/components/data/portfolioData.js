/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string[]} tags Las habilidades que se requieren para el proyecto
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'public/img/image.png',
		title: 'Power BI trains partant en retards',
		descripcion:
		"J'ai créé un tableau de bord Power BI concernant les trains partant en retards, ce qui permet d'avoir une analyse direct et rapide des trains partant en retards.",
		tags: ['Gérer le patrimoine informatique', 'Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique'],
		anim: 'fade-right',
		
	},
	{
		imgSrc: 'public/img/contrôleur.png',
		title: 'Power BI\n pour le rapport mensuel des contrôleurs',
		descripcion:
			" J'ai mis en place un tableau de bord Power BI pour le rapport mensuel des contrôleurs, ce qui permet d’avoir une analyse direct et rapide des resulats contrôleurs.",
		tags: ['Gérer le patrimoine informatique', 'Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique'],
		anim: 'fade-up',
		
	},
	{
		imgSrc: 'public/img/site.png',
		title: 'Création d\'un site de vente en ligne : Le bon koin',
		tags: ['Travailler en mode projet', 'Développer la présence en ligne','Mettre à disposition des utilisateurs un service informatique'],
		descripcion:
			"Création d'un site web pour mon parcours scolaire. Ce site est un site similaire au bon coin, il permet de vendre et d'acheter des produits. ",
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
		
	},
	{
		imgSrc: 'public/img/sport.png',
		title: 'Création d\'une application de sport',
		tags: ['Gérer le patrimoine informatique', 'Travailler en mode projet','Mettre à disposition des utilisateurs un service informatique'],
		descripcion:
			'Création d\'une application de sport pour mon parcours scolaire. Cette application permet de suivre les activités sportives de l\'utilisateur et de programmer des séances de sport.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
		
	},
	{
		imgSrc: 'public/img/User_Assistance_Illustration.png',
		title: 'Asssistance informatique à mes collègues',
		tags: ['Répondre aux incidents et aux demandes d’assistance et d’évolution'],
		descripcion:
			'Assistance informatique à mes collègues pour les aider à résoudre les problèmes informatiques qu\'ils rencontrent.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},

];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		
	};
});
