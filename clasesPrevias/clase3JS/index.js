// arrays

boys = new Array("Carlos", "Juan", "Javier"); // el primer arreglo de datos
girls = new Array("Zuly", "Karen", "Ingrid");
aliens = new Array("ET", "Monstar");

students = boys.concat(girls);
everyone = boys.concat(girls, aliens);

alert(students.join(" - "));
alert(everyone.join(" -- "));
