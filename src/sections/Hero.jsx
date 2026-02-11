import { ArrowRightCircle, Code, DownloadIcon, Github, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import SimpleCarousel from "../components/SimpleCarousel";
import { Code2, Server, Palette, Brain, Wrench } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
//   SiJava,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const Hero = () => {
    const skillsData = [
        {
            title: "Frontend",
            icon: Code2,
            skills: [
                { name: "React", icon: SiReact },
                { name: "JavaScript", icon: SiJavascript },
                { name: "HTML", icon: SiHtml5 },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Bootstrap", icon: SiBootstrap },
                { name: "Redux Toolkit", icon: SiRedux },
            ],
        },
        {
            title: "Backend",
            icon: Server,
            skills: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "MongoDB", icon: SiMongodb },
            ],
        },
        {
            title: "Problem Solving",
            icon: Brain,
            skills: [
                { name: "Java", icon: FaJava },
                { name: "Python", icon: SiPython },
                { name: "DSA", icon: FaJava },
            ],
        },
        {
            title: "Design",
            icon: Palette,
            skills: [
                { name: "Figma", icon: SiFigma },
                { name: "Canva", icon: SiCanva },
                { name: "UI/UX Tools", icon: Palette },
            ],
        },
        {
            title: "Tools",
            icon: Wrench,
            skills: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "AI/ML Tools", icon: Brain },
            ],
        },
    ];

    const highlights = [
        { img: "/az-aniket-img.jpeg", desc: "AlgoZenith Srmcem info session on DSA and CP", link: "" },
        { img: "/code-charades-img.jpeg", desc: "Code-Charades Competition Presentation", link: "" },
        { img: "/highlight.png", desc: "Leetcode 100days of Problem Solving", link: "" },
        { img: "/code-charades-win-img.jpeg", desc: "Code-Charades Competition Prize ceremony", link: "" },
        { img: "/az-onboard-img.jpeg", desc: "AlgoZenith Srmcem Lead Onboarding Letter", link: "" },
        { img: "/algoarena-img.jpeg", desc: "AlgoArena Contest with AZ Team", link: "" },
        { img: "/mlsa-certi-img.jpeg", desc: "MLSA Alpha certification", link: "" },
        { img: "/az-lead-img.jpeg", desc: "AlgoZenith Srmcem Lead announcement Post at ", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_azcampusconnectionprogram-azccp-leadershipjourney-activity-7415800804818755584-kzTS" },
    ]
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="hero-img" className="w-full h-full object-cover opacity-15" />
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background"
            />
            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap 12 items-center">
                    {/* left column -text content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Software Developer cum Engineer
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Hi,
                                I Am
                                <br />
                                 <span className="text-primary glow-text">Aniket Mishra</span>
                                
                                <span className="font-serif italic font-normal text-white"></span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Full-stack developer and problem solver exploring AI to build scalable, real-world solutions.</p>
                        </div>
                        <div className="flex flex-wrap gap-4 animate-fade-in animation delay-300">
                            <a href="#contact"><Button size="lg" className="border">
                                Get-in-Toch<ArrowRightCircle className="w-5 h-5"></ArrowRightCircle>
                            </Button></a>
                            <a href="/Aniket_resume (3).pdf"><Button size="lg" className="border md:mx-2">
                                {/* Animated svg border for the button */}
                                See Resume<DownloadIcon className="w-5 h-5"></DownloadIcon>
                            </Button></a>
                        </div>
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Reach me:</span>
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/aniket-mishra-8390a4253/" },
                                { icon: Github, href: "https://github.com/Aniket006dev" },
                                { icon: Code, href: "https://github.com/Aniket006dev" }

                            ].map((socials, idx) => (
                                <a key={idx} href={socials.href} className="border border-muted-foreground text-muted-foreground rounded-full p-2 hover:text-primary hover:border-primary">{<socials.icon className="w-5 h-5" />}</a>
                            ))}
                        </div>
                    </div>
                    {/* right-column -profile image */}
                    <SimpleCarousel highlights={highlights} />
                    {/* <div className="absolute left-150 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="relative right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" /> */}
                    {/* <div className="flex animate-marquee">
                            {[...highlights, ...highlights].map((highlight, idx) => (
                                <div key={idx} className="border border-primary p-6 rounded-2xl">
                                    <div className="">
                                        <img
                                            src={highlight.img}
                                            alt={highlight.desc}
                                            className="mb-2"
                                        />
                                    </div>
                                    <h3>{highlight.desc}</h3>
                                </div>
                            ))}
                        </div> */}
                </div>


                {/* skill section */}

                <div className="mt-34 animate-fade-in animation-delay-600">
                    <p className="text-2xl text-muted-foreground mb-6 text-center text-primary">Technologies <span className="text-2xl text-red-500 text-">&hearts;</span><span className="text-foreground"> I to work with</span> </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillsData.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-background border border-muted rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300" style={{boxShadow:"0px 0px 8px orange"}}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon className="text-primary/80" size={24} />
                                        <h3 className="text-xl font-semibold font-serif text-muted-foreground/90">{category.title}</h3>
                                    </div>

                                    {/* Skill Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, idx) => {
                                            const SkillIcon = skill.icon;

                                            return (
                                                <div
                                                    key={idx}
                                                    className="border border-primary flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full text-sm hover:bg-muted hover:border-none transition"
                                                >
                                                    <SkillIcon size={16} />
                                                    <span>{skill.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>



                {/* <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-xl text-muted-foreground mb-10 text-center">
                        Technologies I <span className="text-2xl text-red-500">&hearts;</span> to work with
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        {[...skills].map((skill, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center rounded-xl border border-primary/30 
                   bg-background px-4 py-6 text-center text-lg text-foreground/70
                   transition-all duration-300
                   hover:scale-105 hover:border-primary hover:text-primary
                   hover:shadow-lg hover:shadow-primary/20"
                            >
                                {skill.skill}
                            </div>
                        ))}
                    </div>
                </div> */}

            </div>
        </section>
    );
}