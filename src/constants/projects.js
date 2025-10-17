import cellphoneStore from "../assets/projects/cellphone-store.png";
import devBurger from "../assets/projects/dev-burger.png";
import taskManager from "../assets/projects/task-manager.png";
import flashfy from "../assets/projects/flashfy.png";

const projects = [
    {
        name: "FlashFy",
        src: flashfy,
        link: "https://flashfy-theta.vercel.app/",
        code: "https://github.com/FellipeCastro/flashfy",
        description:
            "FlashFy é uma plataforma de estudos inteligente desenvolvida com React.js e Node.js. Oferece um sistema de flashcards com algoritmo de repetição espaçada, onde o usuário classifica a dificuldade de cada card para otimizar o agendamento de revisões. Inclui geração de questões por IA via Gemini API, permitindo criar quizzes personalizados por tema e dificuldade. A aplicação garante uma experiência de aprendizado adaptativa e eficiente para fixação de conteúdo.",
        technologies: [
            "React js",
            "Node js",
            "Sequelize",
            "Gemini API",
            "Git",
            "GitHub",
        ],
    },
    {
        name: "TaskManager",
        src: taskManager,
        link: "https://task-manager-web-tau.vercel.app/",
        code: "https://github.com/FellipeCastro/task-manager",
        description:
            "TaskManager é uma plataforma de gerenciamento de tarefas desenvolvida com React.js e Node.js. Permite criar boards personalizados com tarefas e subtarefas, atualizando o status da tarefa principal conforme as subtarefas são concluídas. A integração com Sequelize, utilizando o Supabase, garante persistência de dados, e o versionamento é feito via Git e GitHub, proporcionando uma gestão de atividades fluida e eficiente.",
        technologies: ["React js", "Node js", "Sequelize", "Git", "GitHub"],
    },
    {
        name: "Dev Burger",
        src: devBurger,
        link: "https://dev-burger-beta.vercel.app/",
        code: "https://github.com/FellipeCastro/dev-burger",
        description:
            "Dev Burger é um site de hamburgueria feito com React.js, proporcionando uma experiência de compra moderna. Os usuários podem personalizar pedidos, enviá-los direto para o WhatsApp e preencher dados de entrega automaticamente com a API ViaCEP. A plataforma é responsiva e otimizada para todos os dispositivos, garantindo uma navegação rápida e intuitiva.",
        technologies: ["React js", "API", "Git", "GitHub"],
    },
    {
        name: "Cellphone Store",
        src: cellphoneStore,
        link: "https://fellipecastro.github.io/cellphone-store-react/",
        code: "https://github.com/FellipeCastro/cellphone-store-react",
        description:
            "Cellphone Store é uma loja online desenvolvida com React.js e conectada à API do Mercado Livre. A aplicação permite adicionar e remover produtos do carrinho com total dinâmico, além de oferecer filtros para facilitar a busca. A interface é simples, responsiva e focada em proporcionar uma experiência de compra ágil e prática.",
        technologies: ["React js", "API", "Git", "GitHub"],
    },
];

export default projects;
