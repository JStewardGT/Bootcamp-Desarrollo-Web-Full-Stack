// arrays

boys = new Array("Carlos", "Juan", "Javier"); // el primer arreglo de datos
girls = new Array("Zuly", "Karen", "Ingrid");
aliens = new Array("ET", "Monstar");

alumnos = boys.concat(girls);
todos = boys.concat(girls, aliens);

alert(alumnos.join(" - "));
alert(todos.join(" -- "));
