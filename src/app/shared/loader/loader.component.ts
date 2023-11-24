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
    Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed 
    root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet
     splash acpi_enforce_resources=lax intel_pstate=enable
      rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7
    KERNEL supported cpus:
      Intel GenuineIntel
      AMD AuthenticAMD
      Centaur CentaurHauls
    e820: BIOS-provided physical RAM map:
    virbr0: port 1(virbr0-nic) entered disabled state
    Initialising...`];

    currentIndex: number = 0;
    currentText: string = '';
    speed: number = 200;
    containerDisplay: string = 'block';
  
    ngOnInit() {
      this.typeText();
    }
  
    typeText() {
      this.currentText = ''; // Reinicia el texto
      this.containerDisplay = 'block'; // Muestra el contenedor
  
      // Utiliza una función recursiva para agregar letras gradualmente
      this.animateText(0);
    }
  
    animateText(index: number) {
      setTimeout(() => {
        this.currentText += this.output[this.currentIndex].charAt(index);
  
        if (index < this.output[this.currentIndex].length - 1) {
          this.animateText(index + 1);
        } else {
          // Pasa al siguiente texto después de escribir el actual
          this.currentIndex++;
  
          if (this.currentIndex < this.output.length) {
            setTimeout(() => {
              this.typeText();
            }, this.speed);
          } else {
            // Todos los textos han sido escritos, oculta el contenedor
            this.containerDisplay = 'none';
          }
        }
      }, this.speed);
    }
}


