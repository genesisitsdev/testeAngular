import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.css"],
})
export class FilmsComponent implements OnInit {
  public films = [
    {
      name: "Homem-Aranha: Sem Volta para Casa",
      description:
        "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.",
      gender: "ação",
      date: "16/12/2021",
      post: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/homem-aranha-sem-volta-para-casa.jpg",
      director: "Jon Watts",
    },
  ];
  public message: any = { error: undefined, success: undefined };
  public optionsList: boolean = true;
  public model: any = {
    name: "",
    description: "",
    date: "",
    gender: "",
    director: "",
    post: "",
  };
  constructor() {}

  ngOnInit(): void {}

  addFilm() {
    this.message.success = undefined;
    this.message.error = undefined;
    if (
      !this.model.name ||
      !this.model.description ||
      !this.model.date ||
      !this.model.gender ||
      !this.model.director ||
      !this.model.post
    ) {
      this.message.error = "todos os campos são obrigatórios.";
    }
    
    this.films.push(this.model);
    this.message.success = "Filme criado com sucesso.";
  }

  changeOption() {
    this.optionsList = !this.optionsList;
  }
}
