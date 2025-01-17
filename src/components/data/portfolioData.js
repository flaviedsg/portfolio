/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'image.png',
		title: 'Power BI trains partant en retards',
		skills: ['React', 'StyledComponents'],
		descripcion:
		"J'ai créé un tableau de bord Power BI concernant les trains partant en retards, ce qui permet d'avoir une analyse direct et rapide des trains partant en retards.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'contrôleur.png',
		title: 'Power BI\n pour le rapport mensuel des contrôleurs',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			" J'ai mis en place un tableau de bord Power BI pour le rapport mensuel des contrôleurs, ce qui permet d’avoir une analyse direct et rapide des resulats contrôleurs.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'Capture d’écran 2024-12-19 134624.png',
		title: 'Création d\'un site Le bon koin',
		skills: ['React', 'CSS'],
		descripcion:
			"Création d'un site web pour mon parcours scolaire. Ce site est un site similaire au bon coin, il permet de vendre et d'acheter des produits.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
		
	},
	{
		imgSrc: 'black-background.png',
		title: 'Création d\'une applcation pour téléphone',
		skills: ['Power BI', 'Excel'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'User_Assistance_Illustration.png',
		title: 'Asssistance informatique à mes collègues',
		skills: [],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
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
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
