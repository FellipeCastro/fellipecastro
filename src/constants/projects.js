import cellphoneStore from "../assets/projects/cellphone-store.png";
import devBurger from "../assets/projects/dev-burger.png";
import taskManager from "../assets/projects/task-manager.png";
import todoList from "../assets/projects/todo-list.png";

const projects = [
    {
        name: "TaskManager",
        src: taskManager,
        link: "https://task-manager-web-tau.vercel.app/",
        code: "https://github.com/FellipeCastro/task-manager",
        description:
            "TaskManager é uma plataforma de gerenciamento de tarefas desenvolvida com React.js e Node.js. Permite criar boards personalizados com tarefas e subtarefas, atualizando o status da tarefa principal conforme as subtarefas são concluídas. A integração com MySQL garante persistência de dados, e o versionamento é feito via Git e GitHub, proporcionando uma gestão de atividades fluida e eficiente.",
        technologies: ["React js", "Node js", "MySQL", "Git", "GitHub"],
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
    {
        name: "Todo List",
        src: todoList,
        link: "https://fellipecastro.github.io/todo-list-react/",
        code: "https://github.com/FellipeCastro/todo-list-react",
        description:
            "Todo List é uma aplicação simples e funcional criada com React.js, permitindo organizar tarefas com modos claro/escuro, filtros personalizados e gerenciamento fácil de atividades. A interface é minimalista e focada na produtividade, facilitando o acompanhamento do que precisa ser feito ao longo do dia.",
        technologies: ["React js", "Git", "GitHub"],
    },
];

export default projects;
