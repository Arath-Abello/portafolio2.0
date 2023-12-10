import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  // variable para llamarlos al html
  prompt: string = 'arathadmin@arath:~$ ';
  output: string[] = [`sh script.sh && apt-get update
  CPU0 microcode updated early 
  to revision 0x1b, date = 2014-05-29
    Initializing cgroup 
    subsys cpuset
    Initializing cgroup 
    subsys cpu
    Initializing cgroup 
    subsys cpuacct
    KERNEL supported cpus:
      Intel GenuineIntel
      Centaur CentaurHauls
    e820: BIOS-provided physical RAM map:
    virbr0: port 1(virbr0-nic) entered disabled state
    Initialising...`];

    // variable definido en 0
    currentIndex: number = 0;
    // variable sin nada
    currentText: string = '';
    // variable definido en 10
    speed: number = 200;
    // variable definido en block
    containerDisplay: string = 'block';


    // ciclo de vida del componente que se llama después de que Angular ha inicializado todas las propiedades del componente. En este caso, se llama al metodo 
    ngOnInit() {
      this.typeText();
    }

    // metodo
    typeText() {
      this.currentText = ''; // Reinicia el texto
      this.containerDisplay = 'block'; // Muestra el contenedor
  
      // Utiliza una función recursiva para agregar letras gradualmente
      this.animateText(0);
    }
  
    // metodo con una variable local index para recibir solo datos de tipo numero
    animateText(index: number) {
      // temporizador que ejecuta un metodo o un una pieza de codigo
      setTimeout(() => {
        // a esta misma variable que esta vacia se le añade el indice y los caracteres del indice especificado
        this.currentText += this.output[this.currentIndex].charAt(index);
  
        // si el indice es menor a la longitud desde el ultimo caracter del array(-1)
        if (index < this.output[this.currentIndex].length - 1) {
          // entonces se pasa al próximo carácter en la cadena y continúa el proceso de animación letra por letra
          this.animateText(index + 1);
        } else {
          // Pasa al siguiente texto después de escribir el actual
          this.currentIndex++;
  
          if (this.currentIndex < this.output.length) {
            setTimeout(() => {
              this.typeText();
            }, this.speed);
          } else {
            //* Todos los textos han sido escritos, oculta el contenedor
            this.containerDisplay = 'none';
          }
        } //aqui toma el valor de speed que simula el temporizador 
      }, this.speed);
    }
}


