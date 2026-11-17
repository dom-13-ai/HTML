function calcularPromedio() {
    const nombre = document.getElementById("nombre").value.trim();
    const cal1Texto = document.getElementById("cal1").value.trim();
    const cal2Texto = document.getElementById("cal2").value.trim();
    const cal3Texto = document.getElementById("cal3").value.trim();

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (cal1Texto === "" || cal2Texto === "" || cal3Texto === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    const cal1 = parseFloat(cal1Texto);
    const cal2 = parseFloat(cal2Texto);
    const cal3 = parseFloat(cal3Texto);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Ninguna calificación puede ser menor que 0 ni mayor que 10.");
        return;
    }

    // B. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;

    // C. Determinar el resultado
    let estado = "";
    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else if (promedio < 6) {
        estado = "REPROBADO";
    } else {
        estado = "FUERA DE RANGO";
    }

    // D. Mostrar observación
    let observacion = "";
    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // Presentar los resultados en la página
    document.getElementById("resNombre").textContent = nombre;
    document.getElementById("resCalificaciones").textContent = `${cal1}, ${cal2}, ${cal3}`;
    document.getElementById("resPromedio").textContent = promedio.toFixed(2);
    document.getElementById("resObservacion").textContent = observacion;

    const spanEstado = document.getElementById("resEstado");
    spanEstado.textContent = estado;
    spanEstado.className = estado === "APROBADO" ? "estado-badge aprobado" : "estado-badge reprobado";

    document.getElementById("panelResultados").style.display = "block";
}