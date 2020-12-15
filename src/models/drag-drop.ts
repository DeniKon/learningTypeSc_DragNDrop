//Drag &Drop Interfaces

  export interface Draggable {
    dragStartEventHandler(event: DragEvent): void;
    dragEndEventHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }

