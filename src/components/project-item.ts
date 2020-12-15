import { Component } from "./base-component.js";
import { Draggable } from "../models/drag-drop.js";
import { autoBind } from "../decorators/autobind.js";
import { Project } from "../models/project.js";

//ProjectItem Class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  protected project: Project;
  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }
  configure(): void {
    this.element.addEventListener("dragstart", this.dragStartEventHandler);
    this.element.addEventListener("dragend", this.dragEndEventHandler);
  }
  renderContent(): void {
    this.element.querySelector("h2")!.innerText = this.project.title;
    this.element.querySelector("h3")!.innerText = this.persons + " assigned";
    this.element.querySelector("p")!.innerText = this.project.description;
  }
  constructor(hostId: string, prj: Project) {
    super("single-project", hostId, false, prj.id);
    this.project = prj;

    this.configure();
    this.renderContent();
  }
  @autoBind
  dragStartEventHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }
  @autoBind
  dragEndEventHandler(_: DragEvent): void {}
}
