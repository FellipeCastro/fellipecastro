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
            "Uma plataforma de gerenciamento de tarefas criada com REACT JS e NODE JS, projetada para facilitar a organização e execução de tarefas com suporte para listas de tarefas, subtarefas e boards personalizados. Ideal para quem busca produtividade e controle total sobre suas atividades diárias, com interface intuitiva e navegação simples.",
        technologies: ["React js", "Node js", "MySQL", "Git", "GitHub"],
    },
    {
        name: "Dev Burger",
        src: devBurger,
        link: "https://dev-burger-beta.vercel.app/",
        code: "https://github.com/FellipeCastro/dev-burger",
        description:
            "Dev Burger é um site de hamburgueria desenvolvido em REACT JS, oferecendo uma experiência fluida e intuitiva para os clientes. Com um carrinho de compras moderno, os usuários podem personalizar seus pedidos e enviá-los diretamente para o WhatsApp. Além disso, a integração com a API ViaCEP facilita o preenchimento automático dos dados de entrega, tornando o processo mais rápido e prático. A plataforma é totalmente responsiva e otimizada para todos os dispositivos.",
        technologies: ["React js", "API", "Git", "GitHub"],
    },
    {
        name: "Cellphone Store",
        src: cellphoneStore,
        link: "https://fellipecastro.github.io/cellphone-store-react/",
        code: "https://github.com/FellipeCastro/cellphone-store-react",
        description:
            "Loja de celulares feita com REACT JS, conectada à API do Mercado Livre. Adicione e remova itens do carrinho de compras com atualizações instantâneas do total a ser pago. A loja conta com filtros para encontrar produtos com mais facilidade e uma interface simples, permitindo uma navegação rápida e eficiente para os usuários que buscam praticidade ao comprar online.",
        technologies: ["React js", "API", "Git", "GitHub"],
    },
    {
        name: "Todo List",
        src: todoList,
        link: "https://fellipecastro.github.io/todo-list-react/",
        code: "https://github.com/FellipeCastro/todo-list-react",
        description:
            "Todo list feita em REACT JS, oferecendo modos claro/escuro, filtragem intuitiva e operações simples de adição e remoção de tarefas. A aplicação permite que você organize suas atividades de forma prática, com visual limpo e personalização de categorias, facilitando o acompanhamento do que precisa ser feito ao longo do dia.",
        technologies: ["React js", "Git", "GitHub"],
    },
];

export default projects;
