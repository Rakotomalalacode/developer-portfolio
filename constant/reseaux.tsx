import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
interface reseaux  {
        name:string,
        links:string,
        colors : string | any,
        icons : any | string
    }

const ReseauxSoci : reseaux[] = [
    {
        name:"Github",
        links:"https://github.com/Rakotomalalatahina",
        colors: "text-gray-900",
        icons: <FaGithub size={30} />
    },
    {
        name:"Linkedin",
        links:"https://www.linkedin.com/in/tahina-rakotomalala-018161348/",
        colors: "text-blue-600",
        icons: <FaLinkedin size={30} />
    },
    {
        name:"Facebook",
        links:"/",
        colors: "text-blue-600",
        icons: <FaFacebookF size={30} />
    },
    {
        name:"Whatsapp",
        links:"/",
        colors: "text-green-500",
        icons: <FaSquareWhatsapp size={30} />
    }
]

export default ReseauxSoci