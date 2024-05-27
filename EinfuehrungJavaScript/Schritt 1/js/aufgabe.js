// JavaScript Document

let breite;
let hoehe;
let pixel=0;





function pixelBerechnen()
{
 	breite = document.getElementById('breite').value;
	hoehe = document.getElementById('hoehe').value;
	pixel=breite*hoehe;
	console.log(pixel);
	document.getElementById('pixelErgebnis').value=pixel;
}
