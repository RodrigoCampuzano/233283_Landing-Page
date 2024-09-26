import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrl: './cards-dashboard.component.css'
})
export class CardsDashboardComponent {
  cards = [
    { title: `Super Sushi`, location: `Central poniente`, tipe: `Japonesa`, description: `Disfruta de la mejor experiencia de sushi en la ciudad, con ingredientes frescos y auténticos. Ofrecemos una amplia variedad de rolls, sashimi y platos japoneses, todos preparados por chefs expertos en un ambiente acogedor.`, Image:`/sushi.png`, colorClass: 'color-sushi'},
    { title: `Monster Crave`, location: `Central poniente`, tipe: `Comida Rápida`, description: `El lugar perfecto para los amantes de las hamburguesas. Ofrecemos hamburguesas artesanales gigantes, papas fritas crujientes y batidos de frutas, todo hecho con ingredientes de alta calidad en un ambiente divertido y acogedor.`, Image:`/monstercrave.png`, colorClass: 'color-burguer'},
    { title: `Verde Bendito`, location: `Central poniente`, tipe: `Comidas Regionales`, description: `Explora los sabores de la cocina regional con nuestros platillos hechos a base de ingredientes frescos y locales. Desde tacos hasta enchiladas, cada bocado te transportará a la tradición culinaria.`, Image:`verdebonito.png`, colorClass: 'color-verdebonito'},
    { title: `DownTown`, location: `Central poniente`, tipe: `Internacional`, description: `Un lugar perfecto para los amantes de la gastronomía. Ofrecemos una fusión de platos internacionales en un ambiente moderno y elegante, ideal para cenas románticas o celebraciones.`, Image:`/downtown.png`, colorClass: 'color-downtown'},
    { title: `Company Contery`, location: `Central poniente`, tipe: `Gourmet`, description: `Ofrecemos una experiencia culinaria única con un enfoque en la sostenibilidad. Disfruta de platos creativos que utilizan ingredientes orgánicos y de temporada, todos en un entorno acogedor y ecológico.`, Image:`/companyccoontry.png`, colorClass: 'color-coontry'},
    { title: `Gourmet Food Company`, location: `Central poniente`, tipe: `Gourmet`, description: `Descubre una variedad de platillos gourmet inspirados en la cocina internacional. Nuestro menú cambia según la temporada, garantizando frescura y calidad en cada plato.`,Image:`/foodcompany.png`, colorClass: 'color-gourmet'}
  ];

  newComment: string = '';
  comments: { content: string}[] = [];
  addComment() {
    if (this.newComment.trim()) {  
      this.comments.push({
        content: this.newComment
      });
      this.newComment = '';
    }}
}
