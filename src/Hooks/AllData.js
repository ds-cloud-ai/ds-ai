import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/ai-agent-001.jpg";
import work2 from "../assets/images/work_images/ai-rag-002.jpg";
import work3 from "../assets/images/work_images/generative-ai-003.jpg";
import work4 from "../assets/images/work_images/ai-agent-004.jpg";
import work5 from "../assets/images/work_images/ai-rag-005.jpg";
import work6 from "../assets/images/work_images/generative-ai-006.jpg";
import work7 from "../assets/images/work_images/ai-agent-007.jpg";
import work8 from "../assets/images/work_images/ai-rag-008.jpg";
import work9 from "../assets/images/work_images/generative-ai-009.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/ai-agent-001.jpg";
import workSmall2 from "../assets/images/work_images/small/ai-rag-002.jpg";
import workSmall3 from "../assets/images/work_images/small/generative-ai-003.jpg";
import workSmall4 from "../assets/images/work_images/small/ai-agent-004.jpg";
import workSmall5 from "../assets/images/work_images/small/ai-rag-005.jpg";
import workSmall6 from "../assets/images/work_images/small/generative-ai-006.jpg";
import workSmall7 from "../assets/images/work_images/small/ai-agent-007.jpg";
import workSmall8 from "../assets/images/work_images/small/ai-rag-008.jpg";
import workSmall9 from "../assets/images/work_images/small/generative-ai-009.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "AI Agent",
      title: "Smart Resume AI",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "",
      langages: "Python, TypeScript",
      link: "",
      linkText: "",
      description:
        "Smart AI Resume Analyzer is your all-in-one tool to analyze, optimize, and craft resumes that stand out, helping you land your dream job. Used Python-docx, PyPDF2, spaCy, scikit-learn, Plotly, NLTK, openpyxl.",
    },
    {
      id: "2",
      tag: "RAG",
      title: "TalkToDoc",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "",
      langages: "TypeScript",
      link: "",
      linkText: "",
      description:
        "Next.js App Router site providing a Better Reading Experience powered by AI. Used GPT4 and Gemini AI models.",
    },
    {
      id: "3",
      tag: "Generative AI",
      title: "Nano Banana",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      client: "",
      langages: "TypeScript",
      link: "",
      linkText: "",
      description:
        "Unrestricted Open-source alternative to AI video platforms. Used Muapi.ai.",
    },
    {
      id: "4",
      tag: "AI Agent",
      title: "Multi-Channel Helpdesk",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "",
      langages: "Python, TypeScript",
      link: "",
      linkText: "",
      description:
        "An open-source AI customer support agent that answers customer questions automatically across Web, Gmail, and WhatsApp. Used GPT-4o, text-embedding-3-small.",
    },
    {
      id: "5",
      tag: "RAG",
      title: "RAG PDF Chat",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      client: "",
      langages: "TypeScript, Python",
      link: "",
      linkText: "",
      description:
        "A production-style, educational full-stack RAG project that demonstrates how to turn PDF documents into searchable knowledge and chat with them using modern AI models. Used LangChain, FAISS.",
    },
    {
      id: "6",
      tag: "Generative AI",
      title: "AuraOS",
      img: work6,
      imgSmall: workSmall6,
      bg: "#F4F4FF",
      client: "",
      langages: "Python, TypeScript",
      link: "",
      linkText: "",
      description:
        "Personal Intelligence Operating System that is a persistent layer between you and a language model that gives the model something it has never had by default: continuity. Used Pinecone and Google Gemini.",
    },
    {
      id: "7",
      tag: "AI Agent",
      title: "AI Meeting Assistant",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF0F8",
      client: "",
      langages: "Rust, TypeScript, Python",
      link: "",
      linkText: "",
      description:
        "A privacy-first AI meeting assistant that captures, transcribes, and summarizes meetings entirely on your infrastructure. Used Whisper and Parakeet models.",
    },
    {
      id: "8",
      tag: "RAG",
      title: "PageIndex",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      client: "",
      langages: "Python",
      link: "",
      linkText: "",
      description:
        "PageIndex is a vectorless, reasoning-based RAG engine that mirrors how humans read, delivering traceable, explainable, and context-aware retrieval, with no vector DBs or chunking.",
    },
    {
      id: "9",
      tag: "Generative AI",
      title: "PraisonAI",
      img: work9,
      imgSmall: workSmall9,
      bg: "#FCF4FF",
      client: "",
      langages: "Python, TypeScript",
      link: "",
      linkText: "",
      description:
        "AI agents solving real-world problems across industries such as research & analysis, code generation, content creation, data pipelines, customer support and workflow automation. Powered by 100+ LLMs.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    // {
    //   id: "05",
    //   name: "Contact",
    //   link: "/contact",
    //   icon: <RiContactsBookLine />,
    // },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    // {
    //   id: "05",
    //   name: "Contact",
    //   link: "/contact",
    //   icon: <RiContactsBookLine />,
    // },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "AI Integration",
      des: "LLM integration, AI agents, voice interfaces (TTS/STT), NLP, LangChain.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Workflow Automation",
      des: "Business Process Automation, n8n, Make, Zapier, CRM Automation, Email Automation, Event-Driven Workflows, and Human-in-the-Loop Automation.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "SaaS Development",
      des: "Web applications, subscription billing, payment integrations, database design, admin dashboards, and internal tools.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon3,
      title: "Document Intelligence",
      des: "PDF Data Extraction, Contract Analysis, Invoice Processing, Form Processing, Document Classification, Document Summarization.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "AI Agents",
      des: "Customer Agent, Research Agent, Multi-Agent Systems, Agent Orchestration, MCP, LangGraph.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon5,
      title: "LLM App Development",
      des: "OpenAI API, Anthropic Claude, Google Gemini, Llama, LangChain, LlamaIndex, Prompt Engineering, LoRA, QLoRA, and Hugging Face.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2011 - 2015",
      title: "MSc in Computer Science",
      place: "The Hong Kong University of Science and Technology",
      bg: "#FFF4F4",
    },

    // {
    //   id: 2,
    //   date: "",
    //   title: "",
    //   place: "",
    //   bg: "#FFF1FB",
    // },

    // {
    //   id: 3,
    //   date: "",
    //   title: "",
    //   place: "",
    //   bg: "#FFF4F4",
    // },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2023 - 2025",
      title: "Senior AI Developer | Freelancer",
      place: "Upwork Inc",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2021 - 2022",
      title: "Full Stack AI Developer",
      place: "XTZ ART LLC",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "2018 - 2020",
      title: "Blockchain Developer | Freelancer",
      place: "Upwork Inc",
      bg: "#EEF5FA",
    },
    
    {
      id: 4,
      date: "2016 - 2017",
      title: "AI Data Scientist",
      place: "RewardStyle Ltd",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2021 - Present",
      title: "Certified Smart Contract Developer",
      place: "Blockchain Council",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2019 - Present",
      title: "Certified Full Stack Developer",
      place: "GSDC",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2018 - 2020",
      title: "Top Rated Freelancer",
      place: "Upwork.com",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Front-end Development",
      number: "85",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Back-end Development",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "AI App Development",
      number: "80",
    },
    {
      id: "04",
      color: "#CA56F2",
      name: "AI Agent Development",
      number: "80",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "",
      item2: "",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
