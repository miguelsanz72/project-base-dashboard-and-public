import { Component, Input, OnInit } from '@angular/core';
import {
  UserClass,
  ProjectModel,
  TasksModel,
  userCDefault,
} from '@models/index';
import { systemAnimations } from '@theme/animations';

@Component({
  selector: 'app-icon-image-fisrt-letter',
  templateUrl: './icon-image-fisrt-letter.component.html',
  styleUrls: ['./icon-image-fisrt-letter.component.scss'],
  animations: systemAnimations,
})
export class IconImageFisrtLetterComponent implements OnInit {
  @Input() users: UserClass[];
  @Input() user: UserClass;
  @Input() projects: ProjectModel[];
  @Input() tasks: TasksModel[];
  @Input() width: number;
  @Input() height: number;

  constructor() {
    this.users = [];
    this.user = new UserClass(userCDefault);
    this.projects = [];
    this.tasks = [];
    this.width = 30;
    this.height = 30;
  }

  ngOnInit(): void {
    console.log(this.user);
  }
}
