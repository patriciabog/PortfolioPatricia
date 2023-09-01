// projectsData.js
import cashflow from '../../images/cashflow.png';
import memory from '../../images/memory.png';
import harryPotter from '../../images/HarryPotter.png';
import awsomeCards from '../../images/awsomeCards.png';
import guessNumber from '../../images/guessNumber.png';

const images = {
    cashflow,
    memory,
    harryPotter,
    awsomeCards,
    guessNumber,
};

const projectsData = [
    {
        id: 'cashflow',
        title: 'Cash Flow',
        image: images.cashflow,
        description: "projects.cashFlowDescription",
        builtWith: 'HTML5, CSS, JavaScript, Vue.js, Git',
        githubLink: 'https://github.com/patriciabog/CashFlow',
        demoLink: 'https://financeapp-cashflow.netlify.app/'
    },
    {
        id: 'memory',
        title: 'Memory game',
        image: images.memory,
        description: 'projects.memoryGameDescription',
        builtWith: 'HTML5, CSS, JavaScript, Git',
        githubLink: 'https://github.com/patriciabog/Memory-Game',
        demoLink: 'https://patriciabog.github.io/Memory-Game/'
    },
    {
        id: 'harryPotter',
        title: 'Harry Potter',
        image: images.harryPotter,
        description: 'projects.harryPotterDescription',
        builtWith: 'HTML5, CSS/SCSS, JavaScript, React, npm, Git',
        githubLink: 'https://github.com/patriciabog/HarryPotter',
        demoLink: 'https://patriciabog.github.io/HarryPotter/'
    },
    {
        id: 'awsomeCards',
        title: 'Awsome Cards',
        image: images.awsomeCards,
        description: 'projects.awsomeCardsDescription',
        builtWith: 'HTML5, CSS/SCSS, JavaScript, npm, Git',
        githubLink: 'https://github.com/patriciabog/AwsomeCards',
        demoLink: 'https://patriciabog.github.io/AwsomeCards/index.html'
    },
    {
        id: 'guessNumber',
        title: 'Guess the Number',
        image: images.guessNumber,
        description: 'projects.guessNumberDescription',
        builtWith: 'HTML5, CSS/SCSS, JavaScript, Git',
        githubLink: 'https://github.com/patriciabog/Guess-the-number',
        demoLink: 'https://patriciabog.github.io/Guess-the-number/'
    },
];

export { projectsData };