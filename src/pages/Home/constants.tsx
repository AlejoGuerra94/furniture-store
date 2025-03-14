import { ILink } from "../../components/NavBar/MenuItem";
import { IFooterSection } from "../../components/Footer";


export const menuItems: ILink[] = [
  { children: "Home", href: "/Home" },
  { children: "Nosotros", href: "/vegetarianos" },
  { children: "Tienda", href: "/platosPrincipales" },
  { children: "Blog", href: "/tortas" },
  { children: "Galeria", href: "/comidaRapida" },
  { children: "Contacto", href: "/menuNiño" },
];

export const footerSections : IFooterSection[]= [
{
  title: "Categorias",
  links:[
    {
      title:'Cocina',
      link:'#'
    },
    {
      title:'Oficina',
      link:'#'
    },
    {
      title:'Jardin',
      link:'#'
    },
    {
      title:'Domitorios',
      link:'#'
    }
  ]
},
{
  title: "Sobre nosotros",
  links:[
    {
      title:'Historia',
      link:'#'
    },
    {
      title:'Misión, visión Valores',
      link:'#'
    },
    {
      title:'Carreras',
      link:'#'
    },
    {
      title:'Politicas y privacidad',
      link:'#'
    },
    {
      title:'Terminos y condiciones',
      link:'#'
    }
  ]
},
{
  title: "Soporte",
  links:[
    {
      title:'Preguntas frecuentes',
      link:'#'
    },
    {
      title:'Ayuda en linea',
      link:'#'
    },
    {
      title:'Confianza y Seguridad',
      link:'#'
    }
  ]
}
]
