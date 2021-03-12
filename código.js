// // let nombre=prompt("hola");
// // alert(nombre);
// // saludo="hola"
// // pregunta="cómo"
// // frase=saludo+pregunta
// // document.write(frase)
// // let nombre1=23;
// // let nombre2="23";
// // document.write(nombre1!=nombre2)
// // let número1=23;
// // let número2=24;
// // document.write(número1<=número2)
// // nombre="hola";
// // if (10+2==13){
// // 	alert("hola");
// // }
// // else if (nombre=="holaa"){
// // 	alert("tu nombre es "+nombre);
// // }
// // else{
// // 	alert("no");
// // }

// // dinero=parsint(dinero);
// dinero=prompt("cuánto dinero tienes");
// dineroroberto=prompt("cuánto dinero tienes Roberto");
// dineropedro=prompt("cuánto dinero tienes Pedro");
// if (dinero >= 0.6 && dinero < 1){
// 	alert("helado1");
// }
// else if (dinero >= 1 && dinero < 1.6){
// 	alert("helado2");
// }
// else if (dinero >= 1.6 && dinero < 1.7){
// 	alert("helado3");
// }
// else if (dinero >= 1.7 && dinero < 1.8){
// 	alert("helado4");
// }
// else if (dinero >= 1.8 && dinero < 2.9){
// 	alert("helado5");
// }
// else if (dinero >= 2.9 && dinero < 3){
// 	alert("helado6");
// }
// else  {
// 	alert("no");
// }
// frutas=["banana0", "pera1","manzana2", "sandía3"];
// document.write(frutas[3]);
// let pc={
// 	nombre: "dalta",
// 	procesador:"intel core 3",
// 	ram:"70gb",
// 	espacio:"4tb"
// }
// let pc2=["dalta","intel core 3","70gb","4tb"];
// document.write(pc["procesador"])
// let nombre=pc["nombre"]
// let procesador=pc["procesador"]
// let ram= pc["ram"]
// let espacio=pc["espacio"]
// frase=`el nombre es: ${nombre} <br>
//        el procesador es ${procesador}<br>
//        la ram es de ${ram}<br>
//        el espacio es de ${espacio}`;

// document.write(frase);
// let numero = 0;
// do {
// 	document.write(numero+"<br>")
// 	numero++;
// }
// while (numero > 6);
// let numero=0;
// while(numero < 1000){
// 	numero++;
// 	document.write(numero+"<br>");
// 	if (numero == 10) {
// 		break;
// 	}
// }
// let nombre=0;
// for (nombre; nombre < 20; nombre++) {
// 	if (nombre == 12){
// 		continue;
// 	}
// 	document.write(nombre + "<br>")
// }
// let animales = ["pato", "gato", "perro", "oso"]
// for (animal in animales) {
// 	document.write(animal + "<br>")
// }
// for (animal of animales){
// 	document.write(animal + "<br>")
// }
// array1= ["leo", "fa", "re"];
// array2= ["no", "sí", array1, "ja"];
// for (array in array2) {
// 	if (array ==2){
// 		for ( let array of array1){
// 			document.write(array + "<br>");
// 		}
// 	}
// 	else {
// 		document.write(array2[array] + "<br>");
// 	}

// }
// función =prompt("función ejecutada");
// if (función == "bien") {
// 	alert("capo");
// }
// else if (función == "f") {
// 	alert(":(");
// }
// function saludar(){
// 	alert("hola");
// 	return 3;
// }

// let saludo = saludar();
// document.write(saludo);
// function suma(num1,num2){
// 	let res = num1 + num2;
// 	return res;
// }
// let resultado = suma(12, 32);
// let resultado2 = suma(32, 50);
// let resultado3 = suma(33, 50);
// let resultado4 = suma(34, 50);
// let resultado5 = suma(35, 50);
// document.write(resultado, resultado2, resultado3, resultado4, resultado5)
// function saludar(nombre){
// 	let frase = `¡Hola ${nombre}!. Cómo estás`;
// 	document.write(frase);
// }
// saludar("Pedro")

// const saludar = (nombre) => {
// 	document.write("hola cómo estás?" + nombre);
// }

// saludar("Pedro");
// let free = false;
// const validarCliente = (time)=>{
// 	let edad = prompt("cuál es tu edad?");
// 	if (edad >= "18") {
// 		if (time >= 2 && time < 7 && free == false) {
// 			alert("pasá");
// 			free = true;
// 		} else{
// 			alert(`son las ${time}hs. Pagá`);
// 		}
// 	} else {
// 		alert("no")
// 	}
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);
// let cantidad = prompt("cuántos alumnos son?");
// let alumnosTolales = [];

// for (i = 0;i < cantidad;i++) {
// 	alumnosTolales[i] = [prompt("nombre del alumno" + (i + 1)),0];

// }
// const tomarLista = (nombre,p)=>{
// 	let presensia = prompt(nombre);
// 	if (presensia == "p" || presensia == "P") {
// 		alumnosTolales[p][1]++;
// 	}
// }
// for (i = 0; i < 30; i++) {
// 	for (alumno in alumnosTolales) {
// 		tomarLista(alumnosTolales[alumno][0],alumno);
// 	}
// }
// for (alumno in alumnosTolales) {
// 	let resultado = `${
// 		alumnosTolales[alumno][0]}:<br>
// 	________Asistencias: ${alumnosTolales[alumno][1]} <br>
// 	________Inasistencias: ${30 - parseInt(alumnosTolales[alumno][1])}
// 	`;
// 	if (30 - alumnosTolales[alumno][1] > 18){
// 		resultado == "Reprobado por inasistencias";
// 	} else{
// 		resultado== "<br><br>"
// 	}
// 	document.write(resultado);
// }
// const sumar = (num1,num2)=>{
// 	return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
// 	return parseInt(num1) - parseInt(num2);
// }
// const dividir = (num1,num2)=>{
// 	return parseInt(num1) / parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
// 	return parseInt(num1) * parseInt(num2);
// }
// alert("Qué operación querés realizar?");
// operación= prompt("1: suma, 2: resta, 3: división, 4: multiplicación");
// if (operación == 1) {
// 	let numero1 = prompt("primer número para sumar");
// 	let numero2 = prompt("sugundo número para sumar");
// 	resultado = sumar(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// if (operación == 2) {
// 	let numero1 = prompt("primer número para restar");
// 	let numero2 = prompt("sugundo número para restar");
// 	resultado = restar(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// if (operación == 3) {
// 	let numero1 = prompt("primer número para dividir");
// 	let numero2 = prompt("sugundo número para dividir");
// 	resultado = dividir(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// if (operación == 4) {
// 	let numero1 = prompt("primer número para multiplicar");
// 	let numero2 = prompt("sugundo número para multiplicar");
// 	resultado = multiplicar(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// else {
// 	alert("no se encontró la operación");
// }
// class Animal {
// 	constructor(especie,edad,color){
// 	this.especie = especie;
// 	this.edad = edad;
// 	this.color = color;
// 	this.info = `perro descripción ${this.especie}`;
//   }
//   verInfo(){
//   	document.write(this.info + "<br>")
//   }
//  }
// class Perro extends Animal {
// 	constructor(especie,edad,color,raza){
// 		super(especie,edad,color);
// 		this.raza = null;
// 	}
// 	// static ladrar(){
// 	// 	alert("waw");
// 	// }
// 	set setRaza(newName){
// 		this.raza = newName;
// 	}
// 	get getRaza(){
// 		return this.raza;
// 	}
// }
// const perro = new Perro("perro","10","marrón", "doberman");
// const pájaro = new Animal("pájaro","5","amarillo");
// const oso = new Animal("oso","10","marrón");
// document.write(perro.info + "<br>");
// document.write(pájaro.info + "<br>");
// document.write(oso.info);
// perro.verInfo();
// pájaro.verInfo();
// oso.verInfo();
// perro.setRaza = "perro"
// document.write(perro.getraza);
// class Celular{
// 	constructor(color,peso,tamaño,rdp,rdc,ram){
// 		this.color = color;
// 		this.peso = peso;
// 		this.tamaño = tamaño;
// 		this.rdp = rdp;
// 		this.rdc = rdc;
// 		this.ram = ram;
// 		this.encendido = false;
// 	}

// 	prender(){
// 		if (this.encendido == false) {
// 			alert("celular prendido");
// 			this.encendido = true;
// 		} else {
// 			alert("el celular ya está prendido")
// 		}
// 	}

// 	// apagar(){
// 	// 	if (this.encendido == true) {
// 	// 		alert("celular apagado");
// 	// 		encendido = true;
// 	// 	} else {
// 	// 		alert("el celular ya está apagado")
// 	// 	}
// 	// }
// reiniciar(){
// 	if (this.encendido == true) {
// 		alert("reiniciando");
// 		this.encendido = true;
// 	} else {
// 		alert("celular apagado")
// 	}
// }
// tomarFoto(){
// 	alert(`foto tomada en una resolución de: ${this.rdc}`);
// }
// grabarVideo(){
// 	alert(`grabando video en ${this.rdp}`)
// }
//  mostrarInformación(){
// 	return `
// 	Color: <b>${this.color}<b/>
// 	Peso: <b>${this.peso}<b/>
// 	Tamaño:<b>${this.tamaño}<b/>
// 	Resolución de Cámara: <b>${this.rdc}<b/>
// 	Resolución de Pantalla: <b>${this.rdp}<b/>
// 	Memoria Ram:<b>${this.ram}<b/>`;
// }
// }
// celular1 = new Celular ("rojo",150,10,5,"full hd","2gb");
// celular2 = new Celular ("blanco",150,10,5,"full hd","4gb");
// celular3 = new Celular ("negro",150,10,5,"full hd","6gb");
// celular1.prender();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.prender();
// document.write(`
// ${celular1.mostrarInformación()} <br>
// ${celular2.mostrarInformación()} <br>
// ${celular3.mostrarInformación()}`);
// let cadena = "    no    ";
// // let cadena2 = "cadena2";
// // resultado = cadena.startssWith(cadena2);
// // resultado = cadena.endsWith(cadena2);
// // resultado = cadena.includes("prueba");
// //resultado = cadena.indexOf("prueba");
// // resultado = cadena.lastIndexOf("prueba");
// // resultado = cadena.padStart(10,"10");
// // resultado = cadena.padEnd(10,"10");
// // resultado = cadena.repeat(10);
// //resultado = cadena.split("cómo");
// // resultado = cadena.substring(4,3);
// //resultado = cadena.toLowerCase();
// // resultado = cadena.toUpperCase();
// // let resultado = cadena.toString();
// // let resultado = cadena.trimStart();
// let resultado = cadena.trimEnd();
// document.write(resultado.length);
// let nombres = ["pedro","maría","juan"];
// document.write(nombres + "<br>");
// let resultado = nombres.pop();
// document.write(resultado + "<br>");
// document.write(nombres);
// let nombres = ["pedro","maría","juan"];
// document.write(nombres + "<br>");
// let resultado = nombres.shift();
// document.write(resultado + "<br>");
// document.write(nombres);
// let nombres = ["pedro","maría","juan"];
// document.write(nombres + "<br>");
// let resultado = nombres.push("hola");
// document.write(resultado + "<br>");
// document.write(nombres);
// let nombres = [1,2,3];
// document.write(nombres + "<br>");
// nombres.reverse();
// document.write(nombres);
// let nombres = ["Pedro","daniel","polo"];
// document.write(nombres + "<br>");
// nombres.push("Juan");
// document.write(nombres);
// let nombres = [1,2,3,4,5];
// document.write(nombres + "<br>");
// nombres.unshift(2,3);
// document.write(nombres);
// let nombres = [1,3,5,2,4];
// document.write(nombres + "<br>");
// nombres.sort();
// document.write(nombres);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres + "<br>");
// nombres.sort();
// document.write(nombres);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres + "<br>");
// nombres.splice(1,3,"roberto","Ocho");
// document.write(nombres);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres + "<br>");
// nombres.splice(0,0,"roberto","Ocho");
// document.write(nombres);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres + "<br>");
// nombres.splice(-1,0,"roberto","Ocho");
// document.write(nombres);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres[0] + "<br>");
// let resultado = nombres.join(" - ");
// document.write(resultado);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// document.write(nombres + "<br>");
// let resultado = nombres.slice(3,5);
// document.write(resultado);
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// let numero = nombres.forEach(
// 	(numero)=>{
// 		document.write(numero + "<br>")
// 	})
// let nombres = ["Pedro","María","Juan","danel","Julian"];
// let resultado = nombres.filter(
// 	(numero => numero.length > 5))
// 	document.write(resultado);
// numero = Math.sqrt(25);
// document.write(numero);
// numero = Math.cbrt(25);
// document.write(numero);
// numero = Math.max(1,2,3,15,17,16);
// document.write(numero);
// numero = Math.min(1,2,3,15,17,16);
// document.write(numero);
// numero = Math.random()*100;
// numero = numero.toString();
// num = numero[0] + numero[1];
// if (num[1] == "."){
// 	num = numero[0];
// }
// numero = Math.random()*100;
// numero= Math.round(numero);
// document.write(numero);
// numero = Math.random()*99;
// numero= Math.floor(numero + 1);
// document.write(numero);
// let numero = Math.fround(9.755555555);
// document.write(numero);
// let numero = Math.trunc(9.755555555);
// document.write(numero);
// let numero = Math.PI;
// document.write(numero);
// let numero = Math.SQRT2;
// document.write(numero);
// let numero = Math.E;
// document.write(numero);
// let numero = Math,LN2;
// document.write(numero);
// let numero = Math.LN10;
// document.write(numero);
// let numero = Math.LOG2E;
// document.write(numero);
// let numero = Math.LOG10E;
// document.write(numero);
// console.assert(5>6);
// console.clear();
 // console.error("error");
// console.info("info");
// console.log("muestra un mensaje en la consola");
// console.table([1,2,3,4,5,5,6]);
// console.warn("dka");
// console.dir([1,2,3,4,5]);
// console.count();
// console.countReset();
// console.group();
// console.groupEnd();
// console.time();
// console.timeEnd();
// console.timeLog();
// título = document.getElementById("título");
// document.write(título);
// const rangoEtario = document.querySelector(".rangoEtario");
// // rangoEtario.setAttribute("type","color");
// valorDelAtributo = rangoEtario.getAttribute("type");
// document.write(valorDelAtributo);
// const título = document.querySelector(".título");
// título.setAttribute("contentEditable", "false");
// título.setAttribute("tabindex", "0");
// título.setAttribute("title", "hola");
// const input = document.querySelector(".input-normal");
// // document.write(input.className);
// // document.write(input.value);
// // input.type = "color";
// // input.accept = "image/png";
// // input.minLength = 4;
// // input.placeholder = "no toques";
// input.required = " ";
// const input = document.querySelector(".título");
// // título.style.color = "blue";
// // título.style.backgroundColor = "blue";
// título.style.padding = "30px";
// const titulo = document.querySelector(".titulo");
// // título.calssList.add("grande");
// // let valor = título.calssList.item(0);
// let valor = titulo.calssList.contains(".grande");
// document.write(valor);
// const titulo = document.querySelector(".titulo");
// // let resultado = titulo.textContet;
// // let resultado = titulo.outerText;
// // let resultado = titulo.innerText;
// let resultado = titulo.;
// document.write(resultado);
// const contenedor = document.querySelector(".contenedor");
// const input = document.createElement("LI");
// const text = document.createTextNode("nodo");
// input.appendChild(textDelItem);
// document.write(input);
// document.write(text);
// console.log(input);
// console.log(text);
// let ventana = window.open(https://youtube.com);
// window.close(ventana);
// print();
// hola = confirm("salir");
// console.log(hola);
// if (hola == true) {
//     alert("hola");
// }
// else (hola == false){
//     alert("chau");
// }
// const screen = window.screen;
// console.log(screen);
// document.write(screen.height);
