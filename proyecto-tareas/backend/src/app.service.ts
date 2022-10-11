import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nombre='Sol', apellido='Cantarini' ): string {
    return `<h1>Esta es la interfaz gráfica HTML</h1>
            <h2>Página de: ${nombre} ${apellido}
    `;
  }
}
