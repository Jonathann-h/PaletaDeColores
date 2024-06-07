
function aplicarColoresPersonalizados() {
    //Se obtiene el valor del color de fondo seleccionado por el usuario
    const bgColor = document.getElementById('bgColor').value;

    //Se obtiene el valor del color del texto
    const textColor = document.getElementById('textColor').value;

    //Se obtiene el valor del color de fondo del boton
    const buttonBgColor = document.getElementById('buttonBgColor').value;
    
    //Se obtiene el valor del color del texto del botón
    const buttonTextColor = document.getElementById('buttonTextColor').value;
    
    const preview = document.getElementById('web-preview');
    //Se aplica el color de fondo seleccionado al contenedor de la vista previa
    preview.style.backgroundColor = bgColor;
    //Se aplica el color del texto seleccionado al contenedor de la vista previa
    preview.style.color = textColor;
    
    //Se obtienen los elementos 'button' dentro del contenedor de la vista previa
    const buttons = preview.getElementsByTagName('button');
    //Se itera sobre todos los botones encontrados
    for (let i = 0; i < buttons.length; i++) {
        //Y se aplica el color de fondo seleccionado
        buttons[i].style.backgroundColor = buttonBgColor;
        //Y el color del texto seleccionado
        buttons[i].style.color = buttonTextColor;
    }
}

//Funcion para restablecer los valores de los inputs de color a sus valores iniciales
function resetColors() {
    document.getElementById('bgColor').value = '#ffffff';
    document.getElementById('textColor').value = '#000000';
    document.getElementById('buttonBgColor').value = '#000000';
    document.getElementById('buttonTextColor').value = '#ffffff';

    //Llamar a la funcion para aplicar los colores iniciales
    aplicarColoresPersonalizados();
}