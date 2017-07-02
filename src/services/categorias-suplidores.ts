

import {SuplidoresService} from "./suplidores.service";
import {CategoriasService} from "./categorias.service";
import {Injectable} from '@angular/core';


@Injectable()
export class CategoriasSuplidoresImportFB {


    suplidor = {id:null, nombre:null, categoria:null, telefono:null, descripcion:null, calificacion:null, imagen:null}
    categoria = {id:null, nombre:null}

    constructor(public SuplidoresService:SuplidoresService, public CategoriasService:CategoriasService ){

        // this.suplidor.nombre = 'Electronica Jose'
        // this.suplidor.categoria = 'Electronica'
        // this.suplidor.telefono = '8093792122'
        // this.suplidor.descripcion = 'Reparamos todo tipo de electrodomestico y problemas electriocs del hogar'
        // this.suplidor.calificacion = 4.2
        // this.suplidor.imagen = 'http://img.freepik.com/vector-gratis/logo-abstracto-laberinto-con-la-letra-e_1032-86.jpg?size=338&ext=jpg'

    }

    public createSuplidor(nombre, categoria, telefono, descripcion, imagen){

        this.suplidor.nombre = nombre
        this.suplidor.categoria = categoria
        this.suplidor.telefono = telefono
        this.suplidor.descripcion = descripcion
        this.suplidor.calificacion = 0
        this.suplidor.imagen = imagen
        this.SuplidoresService.createSuplidor(this.suplidor)


    }

    public createCategoria(id){
        this.categoria.id = id
        this.CategoriasService.createCategoria(this.categoria)
    }

    public createSuplidores(){
        // this.createSuplidor(
        //     "Nombre",
        //     "categoria",
        //     "Telefono",
        //     "descripcion",
        //     "imagen"
        // )
//         this.createSuplidor(
//             "Tejada Transporte",
//             "Acarreo",
//             "(809) 242-6088",
//             "Ofrecemos servicio de transporte a todo el país de manera rápida y eficiente acorde a sus necesidades, transporte para carga suelta (LCL), contenedores (FCL) y mudanza.",
//             "https://contrata.com.do/wp-content/uploads/Logo-JTejada.jpg"
//         )
//         this.createSuplidor(
//             "Five Stars Driver Services",
//             "Acarreo",
//             "8299089999",
//             "Somos una empresa dedicada al transporte de Personas y Carga, nuestro servicios se basa en una filosofía de servicio al cliente donde experimentaran \”UNA EXPERIENCIA UNICA A BORDO\”, nuestros clientes encontrarán en nuestras unidades, botellas de agua, crema humectante, desinfectante de mano, limpiador de zapatos, klennex,internet y una estación de carga de móviles. Viajamos todo el país y recogemos en todos los aeropuertos, los 365 días del año, las 24 horas del día.",
//             "https://contrata.com.do/wp-content/uploads/2017/04/13095796_103030553439912_2533590657232507970_n.jpg"
//         )
//         this.createSuplidor(
//             "GOLDRAIN GROUP SRL",
//             "Carpinteria",
//             "829-407-5010",
//             "Instalación y mantenimiento de aires acondicionados,reparación de LTD, corrección de filtraciones en techos y paredes, Pintura interior y exterior, instalaciones eléctricas residenciales, sherrotk, yeso, decoración de interiores, remodelaciones en general. Estamos para hacer su día a día mas sencillo.",
//             "https://contrata.com.do/wp-content/uploads/2017/05/Logo-Goldrain-Group-web-1.png"
//         )
//          this.createSuplidor(
//             "Innova Muebles",
//             "Carpinteria",
//             "54 3734 40-2483",
//             "Diseño inicial hasta la manufactura final de todo tipo de muebles hechos con palets, melamina, MDF, Caoba o pino, forrado en machimbrado, restauración de la madera: cambio de piezas y renovación o cambio de la pintura. Rápida entrega y garantía de servicio. Precios competitivos y facilidad de pago.",
//             "https://contrata.com.do/wp-content/uploads/2017/01/Estante-TV.jpg"
//         )
//          this.createSuplidor(
//             "Llaves Gonzalez",
//             "Cerrajeria",
//             "(829) 672-9000",
//             "Somos una Compañía Equipada y Especializada en Brindar Servicios de Cerrajería Profesional y Garantizado. SERVICIOS Y VENTAS: Copias de Llave, Aperturas, Programación de Llaves, Reparación de cerraduras, Cambio de Combinación, Llaves Codificada, Corte de Housing, Servicio de Caja Fuerte, Apertura para Vehículos Cerrado, Confección de Llaves, Soldadura de Controles Dañado, Llaveros -Baterías, Controles para Portón eléctrico, Controles Original para Vehículo, Llavines, Cerrojo, Housing, Pilas, Llaveros, Candados, Alarmas para Autos, Inmoviliza-dores, Xenón para Autos, Luces Led, Cilindros, Copias Multilock y Muchos Mas!!!!",
//            "https://contrata.com.do/wp-content/uploads/2017/02/Logo-Llaves-Gonzalez.jpg"
//         )
//           this.createSuplidor(
//             "Hickory Constructora e Inversiones SRL",
//             "Construccion de piscinas",
//             "(829) 788-4813",
//             "Construcción remodelaciones, colocación de fibra ópticas, para las principales telefónica, construcción de naves industriales construcción de silo para factoría arroceras en cualquier parte de nuestro país, dimensionamiento y construcciones de canales de riesgo e implementación de los mejores ahorradores de agua por aspersión, goteo, chorro, y lineas exclusivas, de materiales agricolas, además contamos con un departamento de bienes raices donde, le asesoramos, le vendemos finca, villas, y casa, exclusivas en la república dominicana, podeos trasladarnos a cualquier parte de l país y el exterior… podemos ser su apoyo en la ingeniería.",
//             "https://contrata.com.do/wp-content/uploads/2017/03/promocion-de-casa-de-hickory-1.jpg"
//         )
//           this.createSuplidor(
//             "SENACON S.R.L",
//             "Construccion de piscinas",
//             "(809) 937-0916",
//             "Senacon, SRL, Nace por la necesidad en el sector construcción de crear proyectos integrales y planificados, actuando desde la etapa de diseño hasta la conclusión del mismo. Senacon ha establecido como una de sus políticas principales el fiel cumplimiento de las fechas, manteniendo la calidad y disminuyendo las pérdidas monetarias causadas por los desperdicios y los errores en obra, para esto nos hemos apalancado con metodologías Lean Construction como es el BIM (Building Information Modelling) para la etapa de diseño, la planificación de los proyectos bajo métodos como la ruta crítica en la etapa de anteproyecto y finalmente utilizando controles de los tiempos en los procesos constructivos en la etapa de desarrollo. Diseñar y construir obras civiles de gran calidad, por medio de una buena concepción, una correcta planificación y una precisa ejecución, para entregar a nuestros clientes un producto final integro.",
//             "https://contrata.com.do/wp-content/uploads/2016/09/senaconround.jpg"
//         )
//         this.createSuplidor(
//             "Nombre",
//             "Diseño de interiores",
//             "809-880-8558",
//             "Diseñadora de interiores y decoradora arquitectónica.",
//             "https://contrata.com.do/wp-content/uploads/MG.jpg"
//         )
//         this.createSuplidor(
//             "Paola Alvarado Design Group",
//             "Diseño de interiores",
//             "809-620-1339",
//             "Es una empresa destinada a todos los servicios relacionados al diseño de interior arquitectónico, con gran experiencia en todas las áreas y un equipo altamente calificado para todas las necesidades que se ameriten. Realizamos diseños personalizados de mobiliarios, diseño de techo e iluminación, remodelaciones arquitectónicas (fachadas e interiores), Diseño de closets, cocinas, jardín, etc. Escaparates y diseño comercial. Nos preocupamos por la buena calidad de nuestros servicios y llevar espacios que promuevan experiencias",
//             "https://contrata.com.do/wp-content/uploads/2016/04/logo-PA.png"
//         )
//         this.createSuplidor(
//             "Artefacto Studio",
//             "Diseño de interiore",
//             "(809) 580-091",
//             "Arquitectura/Diseño/Modelado/Renderizado/interiores/Animaciones. Somos un estudio arquitectonico, especializados en herramientas digitales para facilitar la comprensión y lectura del proyecto. Caracterizados por la responsabilidad y puntualidad en cuanto a requerimientos y plazos de trabajo. Ofreciendo a los usuarios una gama de servicios diversos como lo son: Diseño arquitectónico, diseño de interiores, modelado 3d, renderizado y animaciones. Somos un estudio capacitado para trabajar en cualquier tipo de proyectos.",
//             "https://contrata.com.do/wp-content/uploads/20151228094116.jpg"
//         )
//         this.createSuplidor(
//             "Armare Dominicana",
//             "Ebanista",
//             "(809) 245-5522",
//             "Diseñamos y fabricamos puertas, cocinas, closet, walking closets, techos, muebles multiuso,  jacuzzis, jambas, cornisas, bares, revestimientos, escaleras, pisos.",
//             "https://contrata.com.do/wp-content/uploads/2016/08/fondo.jpg"
//         )
    }

    public createCategorias(){

        this.createCategoria(
            "Acarreo"
        )
        this.createCategoria(
            "Carpinteria"
        )
        this.createCategoria(
            "Cerrajeria"
        )
        this.createCategoria(
            "Construccion de piscinas"
        )
        this.createCategoria(
            "Diseño de interiores"
        )
        this.createCategoria(
            "Ebanista"
        )
        this.createCategoria(
            "Electricidad residencial"
        )
        this.createCategoria(
            "Ensamble de muebles"
        )
        this.createCategoria(
            "Herreria"
        )
        this.createCategoria(
            "Impermeabilizacion de techo"
        )
        this.createCategoria(
            "Aire acondicionado"
        )
        this.createCategoria(
            "Alarmas"
        )
        this.createCategoria(
            "Camaras de seguridad"
        )
        this.createCategoria(
            "Granito y marmol"
        )
        this.createCategoria(
            "Inversores"
        )
        this.createCategoria(
            "Paneles solares"
        )
        this.createCategoria(
            "Puertas y ventanas"
        )
        this.createCategoria(
            "Jardineria"
        )
        this.createCategoria(
            "Limpieza de cisternas"
        )
        this.createCategoria(
            "Plantas electricas"
        )
        this.createCategoria(
            "Mudanza"
        )
        this.createCategoria(
            "Pintura"
        )
        this.createCategoria(
            "Plomeria"
        )
        this.createCategoria(
            "Remodelacion"
        )
        this.createCategoria(
            "Bombas de agua"
        )
        this.createCategoria(
            "Fumigacion"
        )
        this.createCategoria(
            "Limpieza"
        )
        this.createCategoria(
            "Pisos"
        )
        this.createCategoria(
            "Seguridad"
        )
        this.createCategoria(
            "Tapizado"
        )
        this.createCategoria(
            "Intercom"
        )
        this.createCategoria(
            "Porton electrico"
        )
        this.createCategoria(
            "Trabajos en yeso"
        )
        this.createCategoria(
            "Trabajos en sheetrook"
        )

    }



}
