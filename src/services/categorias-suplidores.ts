

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
        this.createSuplidor(
            "Tejada Transporte",
            "Acarreo",
            "(809) 242-6088",
            "Ofrecemos servicio de transporte a todo el país de manera rápida y eficiente acorde a sus necesidades, transporte para carga suelta (LCL), contenedores (FCL) y mudanza.",
            "https://contrata.com.do/wp-content/uploads/Logo-JTejada.jpg"
        )
        this.createSuplidor(
            "Five Stars Driver Services",
            "Acarreo",
            "8299089999",
            "Somos una empresa dedicada al transporte de Personas y Carga, nuestro servicios se basa en una filosofía de servicio al cliente donde experimentaran \”UNA EXPERIENCIA UNICA A BORDO\”, nuestros clientes encontrarán en nuestras unidades, botellas de agua, crema humectante, desinfectante de mano, limpiador de zapatos, klennex,internet y una estación de carga de móviles. Viajamos todo el país y recogemos en todos los aeropuertos, los 365 días del año, las 24 horas del día.",
            "https://contrata.com.do/wp-content/uploads/2017/04/13095796_103030553439912_2533590657232507970_n.jpg"
        )
        this.createSuplidor(
            "GOLDRAIN GROUP SRL",
            "Carpinteria",
            "829-407-5010",
            "Instalación y mantenimiento de aires acondicionados,reparación de LTD, corrección de filtraciones en techos y paredes, Pintura interior y exterior, instalaciones eléctricas residenciales, sherrotk, yeso, decoración de interiores, remodelaciones en general. Estamos para hacer su día a día mas sencillo.",
            "https://contrata.com.do/wp-content/uploads/2017/05/Logo-Goldrain-Group-web-1.png"
        )
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
